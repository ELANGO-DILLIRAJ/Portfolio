/* ============================
   APP.JS — Shared Portfolio Logic
   ============================ */

// ---- Canvas Particle Network ----
(function () {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let particles = [];
  let mouse = { x: null, y: null };
  const PARTICLE_COUNT = 90;
  const CONNECTION_DIST = 140;
  const MOUSE_RADIUS = 180;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 1.8 + 0.5;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

      // Mouse repulsion
      if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          this.x += (dx / dist) * force * 1.5;
          this.y += (dy / dist) * force * 1.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 242, 254, 0.5)';
      ctx.fill();
    }
  }

  function init() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_DIST) {
          const opacity = 1 - dist / CONNECTION_DIST;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${opacity * 0.15})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    drawConnections();
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
    resize();
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  resize();
  init();
  animate();
})();


// ---- Typing Effect ----
(function () {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const phrases = [
    'Second year student passionate about programming and AI.',
    'Exploring the boundaries of Generative AI.',
    'Building tomorrow\'s tech, one line at a time.',
    'Turning ideas into intelligent applications.'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let speed = 60;

  function type() {
    const current = phrases[phraseIndex];

    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      speed = 30;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      speed = 60;
    }

    if (!isDeleting && charIndex === current.length) {
      speed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed = 500; // Pause before next phrase
    }

    setTimeout(type, speed);
  }

  type();
})();


// ---- Mobile Nav Toggle ----
(function () {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('show');
  });

  // Close menu when a link is clicked
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('show');
    });
  });
})();


// ---- Scroll Reveal ----
(function () {
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
})();


// ---- Skill Bars Animation ----
(function () {
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  if (skillBars.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const percent = target.getAttribute('data-percent');
        target.style.width = percent + '%';
      }
    });
  }, {
    threshold: 0.3
  });

  skillBars.forEach(bar => observer.observe(bar));
})();


// ---- Skill Card Expand/Collapse ----
(function () {
  const skillCards = document.querySelectorAll('.skill-card[data-expandable]');
  if (skillCards.length === 0) return;

  skillCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('expanded');
    });
  });
})();


// ---- Active Nav Link ----
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();


// ---- Connect Form Handler ----
(function () {
  const form = document.getElementById('connect-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('#form-name').value.trim();
    const email = form.querySelector('#form-email').value.trim();
    const message = form.querySelector('#form-message').value.trim();

    if (!name || !email || !message) return;

    const status = document.getElementById('form-status');
    const formData = new FormData(form);
    formData.append('form-name', form.getAttribute('name') || 'contact');

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
    .then(response => {
      status.style.display = 'block';
      status.style.background = '';
      status.style.color = '';
      status.style.border = '';
      status.textContent = `Thank you, ${name}! Your message has been received. I'll get back to you soon.`;
      status.className = 'form-status success';

      form.reset();

      setTimeout(() => {
        status.className = 'form-status';
        status.style.display = 'none';
      }, 5000);
    })
    .catch(error => {
      console.error('Form submission error:', error);
      status.style.display = 'block';
      status.textContent = `Oops! There was a problem submitting your message. Please try again.`;
      status.className = 'form-status';
      status.style.background = 'rgba(255, 82, 82, 0.1)';
      status.style.color = '#ff5252';
      status.style.border = '1px solid rgba(255, 82, 82, 0.2)';

      setTimeout(() => {
        status.className = 'form-status';
        status.style.display = 'none';
      }, 5000);
    });
  });
})();


// ---- Certification Card Expand/Collapse ----
(function () {
  const certCards = document.querySelectorAll('.cert-expand-card[data-expandable]');
  if (certCards.length === 0) return;

  certCards.forEach(card => {
    const header = card.querySelector('.cert-expand-header');
    if (!header) return;

    header.addEventListener('click', (e) => {
      // Don't toggle if clicking the lightbox trigger image inside expanded body
      if (e.target.closest('.cert-expand-body')) return;

      // Close other cards (accordion behavior)
      certCards.forEach(other => {
        if (other !== card && other.classList.contains('expanded')) {
          other.classList.remove('expanded');
        }
      });

      card.classList.toggle('expanded');
    });
  });
})();


// ---- Certificate Lightbox (Fullscreen View) ----
(function () {
  const lightbox = document.getElementById('cert-lightbox');
  const lightboxImg = document.getElementById('cert-lightbox-img');
  const lightboxClose = document.getElementById('cert-lightbox-close');
  if (!lightbox || !lightboxImg) return;

  // Open lightbox when clicking expanded cert images
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.cert-lightbox-trigger');
    if (!trigger) return;

    e.preventDefault();
    e.stopPropagation();

    lightboxImg.src = trigger.src;
    lightboxImg.alt = trigger.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  // Close lightbox
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    // Clear src after transition
    setTimeout(() => {
      if (!lightbox.classList.contains('active')) {
        lightboxImg.src = '';
      }
    }, 400);
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closeLightbox();
    });
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lightboxImg) {
      closeLightbox();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
})();
