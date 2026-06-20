import { useEffect, useState } from 'react';
import {
  Baby,
  ChevronDown,
  Heart,
  Languages,
  Mail,
  MapPin,
  Moon,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react';
import { content, languages } from './siteContent.js';

const imageSlots = [
  'hero-main',
  'hero-small-top',
  'hero-small-bottom',
  'about',
  'story',
  'team-one',
  'team-two',
  'gallery-one',
  'gallery-two',
  'gallery-three',
  'testimonial',
];

const imageAssets = {
  'hero-main': {
    src: 'images/sheila/hero-main.jpg',
    alt: 'Postpartum doula holding a sleeping newborn',
  },
  'hero-small-top': {
    src: 'images/sheila/baby-hand.jpg',
    alt: 'A newborn holding an adult finger',
  },
  'hero-small-bottom': {
    src: 'images/sheila/hero-care.jpg',
    alt: 'Postpartum doula holding a swaddled newborn',
  },
  about: {
    src: 'images/sheila/hero-care.jpg',
    alt: 'Postpartum doula caring for a newborn',
  },
  story: {
    src: 'images/sheila/story-care.jpg',
    alt: 'Quiet newborn care moment at home',
  },
  'gallery-one': {
    src: 'images/sheila/gallery-newborn.jpg',
    alt: 'Newborn care support at home',
  },
  'gallery-two': {
    src: 'images/sheila/gallery-feeding.jpg',
    alt: 'Bottle and feeding support setup',
  },
  'gallery-three': {
    src: 'images/sheila/gallery-care.jpg',
    alt: 'Doula holding a newborn in a care setting',
  },
  testimonial: {
    src: 'images/sheila/baby-hand.jpg',
    alt: 'Close-up of a newborn hand',
  },
};

function BrandMark({ label }) {
  return (
    <span className="brand-lockup" aria-label={label}>
      <span className="brand-mark" aria-hidden="true">
        <Sparkles size={18} />
      </span>
      <span>{label}</span>
    </span>
  );
}

function SectionLabel({ children }) {
  return <span className="section-label">{children}</span>;
}

function VisualSlot({ name, className = '', label = 'Future family photo' }) {
  const slotClass = imageSlots.includes(name) ? name : 'hero-main';
  const image = imageAssets[name];
  const loading = name === 'hero-main' ? 'eager' : 'lazy';

  return (
    <div
      className={`visual-slot ${slotClass} ${image ? 'has-photo' : ''} ${className}`}
      role={image ? undefined : 'img'}
      aria-label={image ? undefined : label}
    >
      {image ? (
        <img src={image.src} alt={image.alt} loading={loading} decoding="async" />
      ) : (
        <span className="visual-flower" aria-hidden="true" />
      )}
    </div>
  );
}

function Header({ t, lang, setLang }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="header-brand" href="#top">
          <BrandMark label={t.meta.brand} />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {t.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="language-toggle" aria-label="Language">
            <Languages size={15} aria-hidden="true" />
            {Object.keys(languages).map((code) => (
              <button
                key={code}
                type="button"
                className={lang === code ? 'active' : ''}
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
              >
                {languages[code]}
              </button>
            ))}
          </div>
          <a className="button button-primary header-cta" href="#contact">
            {t.cta.book}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ t }) {
  const titleParts = t.hero.title.split(t.hero.accent);

  return (
    <section id="top" className="hero-section">
      <div className="soft-field field-one" aria-hidden="true" />
      <div className="soft-field field-two" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <BrandMark label={t.meta.fullBrand} />
          <h1>
            {titleParts[0]}
            <em>{t.hero.accent}</em>
            {titleParts[1]}
          </h1>
          <p>{t.hero.body}</p>
          <div className="hero-buttons">
            <a className="button button-primary" href="#contact">
              <Heart size={18} aria-hidden="true" />
              {t.cta.primary}
            </a>
            <a className="button button-secondary" href="#services">
              {t.cta.secondary}
            </a>
          </div>
          <div className="trust-row">
            {t.hero.chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        </div>

        <div className="hero-art" aria-label="Photo collage area">
          <VisualSlot name="hero-small-top" className="float-card top-card" />
          <VisualSlot name="hero-main" className="main-card" />
          <VisualSlot name="hero-small-bottom" className="float-card bottom-card" />
          <span className="orbit-mark orbit-one" aria-hidden="true" />
          <span className="orbit-mark orbit-two" aria-hidden="true" />
        </div>
      </div>
      <div className="container section-peek">
        <div>
          <span>{t.about.label}</span>
          <strong>{t.about.title}</strong>
        </div>
        <Baby aria-hidden="true" size={28} />
      </div>
    </section>
  );
}

function About({ t }) {
  return (
    <section id="about" className="section about-section">
      <div className="container split-grid">
        <div className="portrait-wrap">
          <VisualSlot name="about" className="portrait-slot" />
        </div>
        <div className="section-copy">
          <SectionLabel>{t.about.label}</SectionLabel>
          <h2>{t.about.title}</h2>
          <p>{t.about.body}</p>
          <ul className="check-list">
            {t.about.bullets.map((item) => (
              <li key={item}>
                <Heart size={17} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Story({ t }) {
  return (
    <section className="section story-section">
      <div className="container story-grid">
        <div className="sticky-visual">
          <VisualSlot name="story" className="story-slot" />
        </div>
        <div className="story-copy">
          <SectionLabel>{t.story.label}</SectionLabel>
          <h2>{t.story.title}</h2>
          {t.story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team({ t }) {
  const [openMember, setOpenMember] = useState(0);
  const slotNames = ['team-one', 'team-two'];

  return (
    <section className="section team-section">
      <div className="container">
        <div className="center-heading">
          <h2>{t.team.title}</h2>
        </div>
        <div className="team-grid">
          {t.team.members.map((member, index) => {
            const isOpen = openMember === index;

            return (
              <article className={`team-card ${isOpen ? 'open' : ''}`} key={member.name}>
                <button
                  type="button"
                  className="team-card-button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenMember(isOpen ? null : index)}
                >
                  <VisualSlot name={slotNames[index]} className="avatar-slot" label={`${member.name} portrait area`} />
                  <span className="team-name">{member.name}</span>
                  <span className="team-role">{member.role}</span>
                  <span className="read-bio">
                    {isOpen ? t.team.closeBio : t.team.readBio}
                    <ChevronDown size={16} aria-hidden="true" />
                  </span>
                </button>
                <div className="team-bio" hidden={!isOpen}>
                  <p>{member.bio}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Services({ t }) {
  const icons = [Baby, Heart, Sparkles, Moon];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="center-heading narrow">
          <SectionLabel>{t.services.label}</SectionLabel>
          <h2>{t.services.title}</h2>
          <p>{t.services.intro}</p>
        </div>

        <div className="services-grid">
          {t.services.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article className="service-card" key={item}>
                <span className="service-icon">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <p>{item}</p>
              </article>
            );
          })}
        </div>

        <div className="overnight-note">
          <Moon size={26} aria-hidden="true" />
          <p>{t.services.overnight}</p>
        </div>

        <div className="gallery-row" aria-label="Future service photos">
          <VisualSlot name="gallery-one" />
          <VisualSlot name="gallery-two" />
          <VisualSlot name="gallery-three" />
        </div>
      </div>
    </section>
  );
}

function Testimonials({ t }) {
  const [reviewSent, setReviewSent] = useState(false);

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <VisualSlot name="testimonial" className="wide-photo" />

        <div className="center-heading narrow">
          <SectionLabel>{t.testimonials.label}</SectionLabel>
          <h2>{t.testimonials.title}</h2>
          <p>{t.testimonials.intro}</p>
        </div>

        <div className="quote-grid">
          {t.testimonials.quotes.map((quote) => (
            <figure className="quote-card" key={quote.quote}>
              <span className="quote-mark" aria-hidden="true">
                "
              </span>
              <blockquote>{quote.quote}</blockquote>
              <figcaption>
                <strong>{quote.author}</strong>
                <span>{quote.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <form
          className="review-form"
          onSubmit={(event) => {
            event.preventDefault();
            setReviewSent(true);
          }}
        >
          <h3>{t.testimonials.formTitle}</h3>
          <p>{t.testimonials.formIntro}</p>
          <div className="field-row">
            <label>
              <span>{t.contact.fields.name}</span>
              <input type="text" maxLength="80" required />
            </label>
            <label>
              <span>{t.contact.fields.email}</span>
              <input type="email" maxLength="120" />
            </label>
          </div>
          <label>
            <span>{t.contact.fields.message}</span>
            <textarea rows="4" maxLength="600" required />
          </label>
          <div className="form-actions">
            <small>{reviewSent ? t.contact.success : t.testimonials.max}</small>
            <button className="button button-primary" type="submit">
              {t.cta.reviewSubmit}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Contact({ t }) {
  const [sent, setSent] = useState(false);
  const cardIcons = [Mail, Phone, MapPin];

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <SectionLabel>{t.contact.label}</SectionLabel>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.body}</p>
          <div className="contact-cards">
            {t.contact.cards.map((card, index) => {
              const Icon = cardIcons[index];
              const inner = (
                <>
                  <Icon size={20} aria-hidden="true" />
                  <span>
                    <small>{card.label}</small>
                    <strong>{card.value}</strong>
                  </span>
                </>
              );

              return card.href ? (
                <a className="contact-card" href={card.href} key={card.label}>
                  {inner}
                </a>
              ) : (
                <div className="contact-card" key={card.label}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <h3>{t.contact.formTitle}</h3>
          <label>
            <span>{t.contact.fields.name}</span>
            <input type="text" maxLength="80" required />
          </label>
          <label>
            <span>{t.contact.fields.email}</span>
            <input type="email" maxLength="120" required />
          </label>
          <label>
            <span>{t.contact.fields.phone}</span>
            <input type="tel" maxLength="30" />
          </label>
          <label>
            <span>{t.contact.fields.message}</span>
            <textarea rows="5" maxLength="1000" required />
          </label>
          <button className="button button-primary submit-button" type="submit">
            <Send size={17} aria-hidden="true" />
            {t.cta.submit}
          </button>
          {sent && <p className="form-success">{t.contact.success}</p>}
        </form>
      </div>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <BrandMark label={t.meta.fullBrand} />
        <p>{t.meta.tagline}</p>
        <small>
          {t.meta.fullBrand} · {t.meta.email} · {t.meta.phone}
        </small>
        <small>© 2026 {t.meta.fullBrand}. {t.footer.made}</small>
      </div>
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState('en');
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.fullBrand;
  }, [lang, t.meta.fullBrand]);

  return (
    <div className="app-shell">
      <Header t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Story t={t} />
        <Team t={t} />
        <Services t={t} />
        <Testimonials t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
