function SectionHeading({ eyebrow, intro, title, compact = false }) {
  return (
    <div className={`section-heading ${compact ? 'compact' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function HeroSection({ contactLinks, hero, profileCard, profileImage }) {
  return (
    <section className="hero section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">{hero.eyebrow}</p>
        <div className="availability-pill">{hero.availability}</div>
        <h1>
          <span>{hero.titleLead}</span>
          <span className="accent">{hero.titleAccent}</span>
        </h1>
        <p className="hero-description">{hero.description}</p>

        <div className="hero-actions">
          <a className="button primary" href={contactLinks.email}>
            {hero.primaryCta}
          </a>
          <a className="button secondary" href={contactLinks.cv} target="_blank" rel="noreferrer">
            {hero.secondaryCta}
          </a>
        </div>

        <div className="hero-stats">
          {hero.stats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>

      <aside className="hero-visual">
        <div className="portrait-frame">
          <img src={profileImage} alt="Alexandre Sage portrait" />
        </div>

        <div className="floating-card intro-card">
          <span>{profileCard.role}</span>
          <strong>Alexandre Sage</strong>
          <p>{profileCard.location}</p>
        </div>

        <div className="floating-card note-card">
          <p>{profileCard.note}</p>
        </div>
      </aside>
    </section>
  );
}

function AboutSection({ about }) {
  return (
    <section className="section split-section" id="about">
      <SectionHeading eyebrow={about.eyebrow} title={about.title} />

      <div className="about-layout">
        <div className="about-copy tonal-panel">
          <p>{about.body}</p>
          <ul className="highlight-list">
            {about.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="pillars">
          {about.pillars.map((pillar) => (
            <article key={pillar.title} className="pillar-card">
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StackSection({ stack }) {
  return (
    <section className="section" id="stack">
      <SectionHeading eyebrow={stack.eyebrow} title={stack.title} compact />

      <div className="stack-grid">
        {stack.groups.map((group) => (
          <article key={group.title} className="stack-card">
            <h3>{group.title}</h3>
            <div className="chip-row">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection({ education, experience }) {
  return (
    <section className="section" id="experience">
      <SectionHeading eyebrow={experience.eyebrow} title={experience.title} />

      <div className="timeline-layout">
        <div className="timeline-column">
          {experience.items.map((item, index) => (
            <article
              key={`${item.company}-${item.period}`}
              className={`timeline-card offset-${index % 2}`}
            >
              <span className="timeline-period">{item.period}</span>
              <h3>{item.role}</h3>
              <p className="timeline-company">
                {item.company} · {item.location}
              </p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="education-column tonal-panel">
          <p className="eyebrow">{education.eyebrow}</p>
          <h3>{education.title}</h3>
          <div className="education-list">
            {education.items.map((item) => (
              <article key={`${item.school}-${item.period}`} className="education-item">
                <span>{item.period}</span>
                <strong>{item.degree}</strong>
                <p>{item.school}</p>
                <small>{item.detail}</small>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CertificationsSection({ certifications }) {
  return (
    <section className="section" id="certifications">
      <SectionHeading eyebrow={certifications.eyebrow} title={certifications.title} compact />

      <div className="cert-grid">
        {certifications.items.map((item) => (
          <article key={item.href} className="cert-card">
            <span className="cert-source">{item.source}</span>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
            <a className="cert-link" href={item.href} target="_blank" rel="noreferrer">
              {item.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection({ onOpenProject, projects }) {
  return (
    <section className="section" id="projects">
      <SectionHeading eyebrow={projects.eyebrow} title={projects.title} intro={projects.intro} />

      <div className="project-grid">
        {projects.items.map((project, index) => (
          <article key={project.key} className={`project-card project-offset-${index % 2}`}>
            <span className="project-index">{project.index}</span>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="project-meta">{project.meta}</div>
            <button type="button" className="project-link" onClick={() => onOpenProject(project.key)}>
              {project.cta}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection({ contact, contactLinks }) {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-panel">
        <p className="eyebrow">{contact.eyebrow}</p>
        <h2>{contact.title}</h2>
        <p>{contact.text}</p>
      </div>

      <div className="contact-actions">
        <a className="contact-link primary-contact" href={contactLinks.email}>
          {contact.email}
        </a>
        <a className="contact-link" href={contactLinks.linkedin} target="_blank" rel="noreferrer">
          {contact.linkedin}
        </a>
        <div className="contact-meta">{contact.city}</div>
      </div>
    </section>
  );
}

export function PortfolioHome({ contactLinks, content, onOpenProject, profileImage }) {
  return (
    <main>
      <HeroSection
        contactLinks={contactLinks}
        hero={content.hero}
        profileCard={content.profileCard}
        profileImage={profileImage}
      />
      <AboutSection about={content.about} />
      <StackSection stack={content.stack} />
      <ExperienceSection education={content.education} experience={content.experience} />
      <CertificationsSection certifications={content.certifications} />
      <ProjectsSection onOpenProject={onOpenProject} projects={content.projects} />
      <ContactSection contact={content.contact} contactLinks={contactLinks} />
    </main>
  );
}
