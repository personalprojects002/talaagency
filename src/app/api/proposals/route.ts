import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, vertical, budgetTier, goals, notes } = body;

    if (!name || !phone || !vertical) {
      return NextResponse.json(
        { error: 'Name, Phone, and Business Vertical are required.' },
        { status: 400 }
      );
    }

    console.log('Received Proposal Submission:', { name, email, phone, vertical, budgetTier, goals, notes });

    // Notion API integration
    const notionApiKey = process.env.NOTION_API_KEY;
    const notionDatabaseId = process.env.NOTION_DATABASE_ID;

    let notionSaved = false;

    if (notionApiKey && notionDatabaseId) {
      try {
        const notion = new Client({ auth: notionApiKey });
        await notion.pages.create({
          parent: { database_id: notionDatabaseId },
          properties: {
            Name: {
              title: [{ text: { content: name } }],
            },
            Phone: {
              phone_number: phone,
            },
            Email: {
              email: email || '',
            },
            Vertical: {
              select: { name: vertical },
            },
            Budget: {
              rich_text: [{ text: { content: budgetTier || 'Not Specified' } }],
            },
            Goals: {
              rich_text: [{ text: { content: goals || 'General Social Handling' } }],
            },
            Notes: {
              rich_text: [{ text: { content: notes || '' } }],
            },
          },
        });
        notionSaved = true;
      } catch (notionError) {
        console.error('Notion API Save Error (Fallback Active):', notionError);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Proposal strategy request received successfully!',
      data: { name, phone, vertical, budgetTier, notionSaved },
    });
  } catch (error: any) {
    console.error('Proposal Submission Error:', error);
    return NextResponse.json(
      { error: 'Failed to process proposal submission.' },
      { status: 500 }
    );
  }
}
