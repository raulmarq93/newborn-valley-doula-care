import './styles.css';

const content = {
  en: {
    nav: ['About', 'Services', 'Stories', 'Contact'],
    brand: 'Newborn Valley Doula Care',
    tagline: 'Supporting your family with calm, care, and confidence.',
    heroTitle: 'Postpartum care that feels like a village',
    heroBody:
      'Gentle, bilingual support for the first tender weeks at home. We help with newborn care, feeding rhythms, rest, recovery, and the small daily tasks that make space for bonding.',
    aboutTitle: 'Meet your postpartum doula',
    aboutBody:
      'Newborn Valley Doula Care was created for families who want grounded, nurturing help after birth. Our care is practical and emotional: warm hands for the baby, steady reassurance for parents, and a peaceful presence in the home.',
    servicesTitle: 'Gentle, hands-on postpartum care',
    services: [
      'Newborn soothing, swaddling, diapering, and burping',
      'Breast/chestfeeding and bottle-feeding support',
      'Bottle and pump-part washing and sterilizing',
      'Baby laundry, nursery resets, and light tidying',
      'Overnight care and rest-focused routines',
      'Twin and sibling transition support',
    ],
    contactTitle: 'Let us care for your family together.',
    contactBody:
      'Reach out with questions, schedules, or what support could look like in your home. We would be honored to hear your story.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    areaLabel: 'Service area',
    area: 'Bay Area, California',
    made: 'Made with care in the Bay Area.',
  },
  es: {
    nav: ['Conócenos', 'Servicios', 'Historias', 'Contacto'],
    brand: 'Newborn Valley Doula Care',
    tagline: 'Apoyando a tu familia con calma, cuidado y confianza.',
    heroTitle: 'Cuidado posparto que se siente como una comunidad',
    heroBody:
      'Apoyo tierno y bilingüe para las primeras semanas en casa. Ayudamos con el cuidado del recién nacido, la alimentación, el descanso, la recuperación y las tareas pequeñas que abren espacio para conectar.',
    aboutTitle: 'Conoce a tu doula posparto',
    aboutBody:
      'Newborn Valley Doula Care fue creado para familias que desean apoyo tranquilo y amoroso después del nacimiento.',
    servicesTitle: 'Cuidado posparto suave y práctico',
    services: [
      'Calmar, envolver, cambiar pañales y sacar gases',
      'Apoyo con lactancia, pecho y biberón',
      'Lavado y esterilización de biberones y partes de bomba',
      'Ropita del bebé, organización del cuarto y orden ligero',
      'Cuidado nocturno y rutinas enfocadas en descanso',
      'Apoyo con gemelos y transición de hermanos',
    ],
    contactTitle: 'Cuidemos a tu familia juntas.',
    contactBody:
      'Escríbenos con preguntas, horarios o ideas de cómo podría verse el apoyo en tu hogar. Sería un honor escuchar tu historia.',
    emailLabel: 'Email',
    phoneLabel: 'Teléfono',
    areaLabel: 'Área de servicio',
    area: 'Área de la Bahía, California',
    made: 'Hecho con cuidado en el Área de la Bahía.',
  },
};

const contact = {
  email: 'sheila@newvalleydoula.com',
  phone: '(209) 404-8630',
  phoneHref: 'tel:+12094048630',
};

let lang = 'en';

function render() {
  const t = content[lang];
  document.documentElement.lang = lang;
  document.title = t.brand;

  document.querySelector('#app').innerHTML = `
    <header class="site-header">
      <a class="brand" href="#top" aria-label="${t.brand}">
        <span class="brand-mark">✦</span>
        <span>${t.brand}</span>
      </a>
      <nav>
        <a href="#about">${t.nav[0]}</a>
        <a href="#services">${t.nav[1]}</a>
        <a href="#stories">${t.nav[2]}</a>
        <a href="#contact">${t.nav[3]}</a>
      </nav>
      <div class="language-toggle" aria-label="Language">
        <button type="button" class="${lang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
        <button type="button" class="${lang === 'es' ? 'active' : ''}" data-lang="es">ES</button>
      </div>
    </header>

    <main id="top">
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">${t.brand}</p>
          <h1>${t.heroTitle}</h1>
          <p>${t.heroBody}</p>
          <div class="actions">
            <a class="button primary" href="#contact">Book Support</a>
            <a class="button secondary" href="#services">Explore Services</a>
          </div>
        </div>
        <div class="photo-grid" aria-label="Photo preview area">
          <div class="photo main-photo">Photo</div>
          <div class="photo small-photo">Photo</div>
          <div class="photo small-photo second">Photo</div>
        </div>
      </section>

      <section id="about" class="section split">
        <div class="photo portrait">Photo</div>
        <div>
          <p class="eyebrow">About</p>
          <h2>${t.aboutTitle}</h2>
          <p>${t.aboutBody}</p>
        </div>
      </section>

      <section id="services" class="section">
        <p class="eyebrow">Services</p>
        <h2>${t.servicesTitle}</h2>
        <div class="service-grid">
          ${t.services.map((item) => `<article>${item}</article>`).join('')}
        </div>
      </section>

      <section id="stories" class="section stories">
        <p class="eyebrow">Family stories</p>
        <h2>Words from families who felt held</h2>
        <blockquote>
          “Having support in English and Spanish helped our whole family feel included. Warm, professional, and deeply kind.”
        </blockquote>
      </section>

      <section id="contact" class="section contact">
        <div>
          <p class="eyebrow">Contact</p>
          <h2>${t.contactTitle}</h2>
          <p>${t.contactBody}</p>
        </div>
        <div class="contact-cards">
          <a href="mailto:${contact.email}">
            <small>${t.emailLabel}</small>
            <strong>${contact.email}</strong>
          </a>
          <a href="${contact.phoneHref}">
            <small>${t.phoneLabel}</small>
            <strong>${contact.phone}</strong>
          </a>
          <div>
            <small>${t.areaLabel}</small>
            <strong>${t.area}</strong>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <strong>${t.brand}</strong>
      <p>${t.tagline}</p>
      <small>${t.brand} · ${contact.email} · ${contact.phone}</small>
      <small>© 2026 ${t.brand}. ${t.made}</small>
    </footer>
  `;

  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => {
      lang = button.dataset.lang;
      render();
    });
  });
}

render();
