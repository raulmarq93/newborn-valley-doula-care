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
    testimonials: {
      label: 'Family stories',
      title: 'Words from families who felt held',
      intro: 'A few sample stories for now. Replace these with real testimonials when ready.',
      quotes: [
        {
          quote: 'The first nights home felt much calmer with our doula there. We slept, asked every question, and finally felt like we had a plan.',
          author: 'Sofia R.',
          detail: 'First-time parent',
        },
        {
          quote: 'She brought a peaceful energy into our home and cared for our twins with so much patience. It changed our whole recovery.',
          author: 'The Morales Family',
          detail: 'Twin parents',
        },
        {
          quote: 'Having support in English and Spanish helped our whole family feel included. Warm, professional, and deeply kind.',
          author: 'Ana and David',
          detail: 'Bay Area family',
        },
      ],
      formTitle: 'Share your experience',
      formIntro: 'Your story can help another family feel ready to reach out.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      max: 'Max 600 characters.',
      submit: 'Share Story',
      success: 'Thank you. Your story is ready to be connected to email or a form service.',
    },
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
    testimonials: {
      label: 'Historias de familias',
      title: 'Palabras de familias que se sintieron cuidadas',
      intro: 'Estas son historias de muestra por ahora. Cámbialas por testimonios reales cuando estén listos.',
      quotes: [
        {
          quote: 'Las primeras noches en casa se sintieron mucho más tranquilas. Pudimos dormir, hacer preguntas y sentir que teníamos un plan.',
          author: 'Sofia R.',
          detail: 'Mamá primeriza',
        },
        {
          quote: 'Trajo una energía de paz a nuestro hogar y cuidó a nuestros gemelos con muchísima paciencia. Cambió toda nuestra recuperación.',
          author: 'Familia Morales',
          detail: 'Padres de gemelos',
        },
        {
          quote: 'Tener apoyo en inglés y español ayudó a que toda la familia se sintiera incluida. Cálida, profesional y muy amable.',
          author: 'Ana y David',
          detail: 'Familia del Área de la Bahía',
        },
      ],
      formTitle: 'Comparte tu experiencia',
      formIntro: 'Tu historia puede ayudar a otra familia a sentirse lista para contactarnos.',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      max: 'Máximo 600 caracteres.',
      submit: 'Compartir historia',
      success: 'Gracias. Tu historia está lista para conectarse a un correo o servicio de formularios.',
    },
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
          <div class="photo main-photo">
            <img src="images/sheila/section1image1.png" alt="Sheila holding a newborn beneath a framed doula definition" fetchpriority="high" />
          </div>
          <div class="photo small-photo">
            <img src="images/sheila/baby-hand.jpg" alt="A newborn holding an adult finger" />
          </div>
          <div class="photo small-photo second">
            <img src="images/sheila/section1image2.png" alt="Sheila holding a peacefully swaddled newborn" />
          </div>
        </div>
      </section>

      <section id="about" class="section split">
        <div class="photo portrait">
          <img src="images/sheila/section2image1.png" alt="Sheila standing with a sleeping swaddled newborn" loading="lazy" />
        </div>
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

      <section class="section care-gallery" aria-labelledby="gallery-title">
        <p class="eyebrow">Care in action</p>
        <h2 id="gallery-title">Gentle support for your growing family</h2>
        <div class="gallery-grid">
          <div class="photo gallery-photo">
            <img src="images/sheila/section3image1.png" alt="Sheila comforting a sleeping newborn" loading="lazy" />
          </div>
          <div class="photo gallery-photo">
            <img src="images/sheila/section3image2.png" alt="Sheila bottle-feeding a newborn in a calm home setting" loading="lazy" />
          </div>
          <div class="photo gallery-photo">
            <img src="images/sheila/gallery-care.jpg" alt="Sheila holding a newborn in a care setting" loading="lazy" />
          </div>
        </div>
      </section>

      <section id="stories" class="section testimonials-section">
        <div class="photo testimonial-photo">
          <img src="images/sheila/baby-hand.jpg" alt="Close-up of a newborn holding an adult finger" loading="lazy" />
        </div>
        <div class="testimonial-heading">
          <p class="eyebrow">${t.testimonials.label}</p>
          <h2>${t.testimonials.title}</h2>
          <p>${t.testimonials.intro}</p>
        </div>
        <div class="quote-grid">
          ${t.testimonials.quotes.map((quote) => `
            <figure class="quote-card">
              <span class="quote-mark" aria-hidden="true">“</span>
              <blockquote>${quote.quote}</blockquote>
              <figcaption>
                <strong>${quote.author}</strong>
                <span>${quote.detail}</span>
              </figcaption>
            </figure>
          `).join('')}
        </div>
        <form class="review-form" id="review-form">
          <h3>${t.testimonials.formTitle}</h3>
          <p>${t.testimonials.formIntro}</p>
          <div class="field-row">
            <label>
              <span>${t.testimonials.name}</span>
              <input type="text" maxlength="80" required />
            </label>
            <label>
              <span>${t.testimonials.email}</span>
              <input type="email" maxlength="120" />
            </label>
          </div>
          <label>
            <span>${t.testimonials.message}</span>
            <textarea rows="4" maxlength="600" required></textarea>
          </label>
          <div class="form-actions">
            <small id="review-status">${t.testimonials.max}</small>
            <button class="button primary" type="submit">${t.testimonials.submit}</button>
          </div>
        </form>
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

  document.querySelector('#review-form').addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector('#review-status').textContent = t.testimonials.success;
  });
}

render();
