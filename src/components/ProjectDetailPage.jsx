import { useState } from 'react';
import { ImageLightbox } from './ImageLightbox';

export function ProjectDetailPage({ closeLabel, detail, media, onBack }) {
  const [activeImage, setActiveImage] = useState(null);

  if (!detail || !media) {
    return null;
  }

  return (
    <>
      <main className="project-detail-page">
        <section className="project-detail-hero section">
          <button type="button" className="detail-back-link" onClick={onBack}>
            {detail.back}
          </button>
          <h1 className="project-detail-title">
            <span>{detail.title}</span>
            <span className="accent">{detail.subtitle}</span>
          </h1>
          <p className="hero-description">{detail.summary}</p>

          <div className="detail-meta-row">
            {detail.meta.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>

          <div className="project-name-note tonal-panel">
            <p className="eyebrow">{detail.nameTitle}</p>
            <p>{detail.nameMeaning}</p>
          </div>
        </section>

        <section className="section project-detail-features">
          <div className="section-heading compact">
            <p className="eyebrow">{detail.sections.productTitle}</p>
            <h2>{detail.title}</h2>
          </div>
          <div className="detail-feature-grid">
            {detail.sections.productItems.map((feature) => (
              <article key={feature} className="detail-feature-card">
                <p>{feature}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section project-detail-tech">
          <div className="section-heading compact">
            <p className="eyebrow">{detail.sections.stackTitle}</p>
            <h2>{detail.title}</h2>
          </div>
          <div className="detail-tech-grid">
            {detail.sections.stackItems.map((item) => (
              <article key={item} className="detail-tech-card">
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section project-media-section">
          <div className="section-heading">
            <p className="eyebrow">{detail.sections.mediaTitle}</p>
            <h2>{detail.title}</h2>
            <p className="section-intro">{detail.sections.mediaIntro}</p>
          </div>

          {media.video ? (
            <div className="project-video-card">
              <video controls playsInline preload="metadata" poster={media.images[0]?.src}>
                <source src={media.video} type="video/mp4" />
              </video>
              <a className="button secondary" href={media.video} target="_blank" rel="noreferrer">
                {detail.sections.ctaVideo}
              </a>
            </div>
          ) : null}

          <div className="detail-gallery">
            {media.images.map((image) => {
              const label = detail.gallery[image.key];

              return (
                <figure key={image.src} className="gallery-card">
                  <button
                    type="button"
                    className="gallery-image-button"
                    onClick={() => setActiveImage({ src: image.src, label })}
                  >
                    <img src={image.src} alt={`${detail.title} ${label}`} loading="lazy" />
                  </button>
                  <figcaption>{label}</figcaption>
                </figure>
              );
            })}
          </div>
        </section>
      </main>

      <ImageLightbox
        image={activeImage}
        closeLabel={closeLabel}
        onClose={() => setActiveImage(null)}
      />
    </>
  );
}
