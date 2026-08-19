import React, { useEffect } from 'react';

export default function VideoModal({ videoId, onClose }) {
  useEffect(() => {
    if (!videoId) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [videoId, onClose]);

  if (!videoId) return null;

  return (
    <div className="video-modal active" onClick={onClose}>
      <div className="video-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose} aria-label="Close Video">
          &times;
        </button>
        <iframe
          id="videoFrame"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Video Player"
        ></iframe>
      </div>
    </div>
  );
}
