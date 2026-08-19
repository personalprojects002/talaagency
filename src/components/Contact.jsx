import React, { useState } from 'react';
import { useCms } from '../data/CmsContext';

export default function Contact() {
  const { data } = useCms();
  const { general, services } = data;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    setLoading(true);
    setSubmitStatus(null);

    // Create WhatsApp message string
    const whatsappMsg = `*New Lead from NVC Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Message:* ${formData.message}`;

    const configScriptUrl = general.googleScriptUrl || '';
    const submitToWhatsApp = general.submitToWhatsApp !== false;

    let postPromise = Promise.resolve();
    if (configScriptUrl) {
      const searchParams = new URLSearchParams(formData);
      postPromise = fetch(configScriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: searchParams
      });
    }

    postPromise
      .then(() => {
        setLoading(false);
        setSubmitStatus('success');

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        setValidated(false);

        if (submitToWhatsApp) {
          window.open(`https://wa.me/${general.whatsapp}?text=${whatsappMsg}`, '_blank');
        }

        // Clear status alert after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch((err) => {
        console.error('Form submission failed:', err);
        setLoading(false);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's start your next digital project today</p>
        
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="contact-info-card">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Our Location</h4>
                <p id="contact-address">{general.address}</p>
              </div>
            </div>
            
            <div className="contact-info-card">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email Address</h4>
                <p id="contact-email">
                  <a href={`mailto:${general.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {general.email}
                  </a>
                </p>
              </div>
            </div>
            
            <div className="contact-info-card">
              <i className="fas fa-phone-alt"></i>
              <div>
                <h4>Phone Number</h4>
                <p id="contact-phone">
                  <a href={`tel:${general.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {general.phone}
                  </a>
                </p>
              </div>
            </div>
            
            <div className="contact-info-card">
              <i className="fas fa-clock"></i>
              <div>
                <h4>Business Hours</h4>
                <p id="contact-hours" dangerouslySetInnerHTML={{ __html: general.hours }}></p>
              </div>
            </div>
            
            <div className="map-container mt-4">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.8105073121544!2d74.22557451516147!3d31.966023781224217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f2be8b7762d1b%3A0xc3f58a36c8413b5e!2sKamoke%2C%20Gujranwala%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1698293721021!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="contact-form-wrapper">
              <form
                id="contactForm"
                noValidate
                className={validated ? 'was-validated' : ''}
                onSubmit={handleSubmit}
              >
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="invalid-feedback">Please enter your name.</div>
                </div>
                
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="invalid-feedback">Please enter a valid email address.</div>
                </div>
                
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Your Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="invalid-feedback">Please enter your phone number.</div>
                </div>
                
                <div className="mb-3">
                  <select
                    className="form-select"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>Select Service Needed</option>
                    {services.map((srv, idx) => (
                      <option value={srv.title} key={idx}>
                        {srv.title}
                      </option>
                    ))}
                    <option value="other">Other Inquiry / Enroll in Academy</option>
                  </select>
                  <div className="invalid-feedback">Please select a service.</div>
                </div>
                
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Tell us about your project or courses you want to enroll in..."
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  <div className="invalid-feedback">Please enter your message.</div>
                </div>
                
                <button type="submit" disabled={loading} className="btn-primary-custom w-100 justify-content-center border-0">
                  {loading ? (
                    <>
                      <i className="fas fa-spinner fa-spin me-2"></i> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <i className="fas fa-paper-plane ms-2"></i>
                    </>
                  )}
                </button>
              </form>
              
              {submitStatus === 'success' && (
                <div className="alert alert-success mt-3" role="alert">
                  <i className="fas fa-check-circle me-2"></i> Form submitted successfully! We'll contact you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="alert alert-danger mt-3" role="alert">
                  <i className="fas fa-exclamation-circle me-2"></i> Something went wrong. Please try again.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
