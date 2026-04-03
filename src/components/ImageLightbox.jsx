import { useEffect } from 'react';

export function ImageLightbox({ image, closeLabel, onClose }) {
  useEffect(() => {
    if (!image) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) {
    return null;
  }

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="lightbox-close" onClick={onClose}>
          {closeLabel}
        </button>
        <img src={image.src} alt={image.label} className="lightbox-image" />
        <p className="lightbox-caption">{image.label}</p>
      </div>
    </div>
  );
}
