import './style.css';

window.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initNavigation();
  initScrollEffects();
  initTestimonialCarousel();
  initThemeToggle();
  initAnimations();
  initForms();
  initCookieConsent();
  initMobileMenu();
});

function initPreloader() {
  const preloader = document.getElementById('preloader');

  setTimeout(() => {
    preloader.classList.add('hidden');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }, 1500);
}

function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.page-section');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = link.getAttribute('href').substring(1);

      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === targetId) {
          section.classList.add('active');
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });

      const mobileMenu = document.getElementById('navMenu');
      if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
      }
    });
  });

  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (btn.textContent.includes('Get Started') ||
          btn.textContent.includes('Get in Touch') ||
          btn.textContent.includes('Start')) {
        e.preventDefault();
        const contactLink = document.querySelector('a[href="#contact"]');
        if (contactLink) {
          contactLink.click();
        }
      }
    });
  });
}

function initScrollEffects() {
  const navbar = document.getElementById('navbar');

  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
  });
}

function initTestimonialCarousel() {
  const testimonials = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove('active');
      if (i === index) {
        testimonial.classList.add('active');
      }
    });
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    });

    setInterval(() => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    }, 5000);
  }
}

function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }
}

function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  }, observerOptions);

  document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
  });

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-bg-animation');

    parallaxElements.forEach(element => {
      const speed = 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

function initForms() {
  const contactForm = document.getElementById('contactForm');
  const newsletterForm = document.getElementById('newsletterForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);

      console.log('Contact Form Data:', data);

      showNotification('Thank you! Your message has been sent successfully.', 'success');

      contactForm.reset();
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = newsletterForm.querySelector('input[type="email"]').value;

      console.log('Newsletter Subscription:', email);

      showNotification('Successfully subscribed to newsletter!', 'success');

      newsletterForm.reset();
    });
  }

  document.querySelectorAll('.job-card .btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const jobTitle = btn.closest('.job-card').querySelector('h3').textContent;
      showNotification(`Application form for ${jobTitle} would open here.`, 'info');
    });
  });

  document.querySelectorAll('.apply-card .btn, .btn:contains("Send Your Resume")').forEach(btn => {
    if (btn.textContent.includes('Resume')) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        showNotification('Resume upload form would open here.', 'info');
      });
    }
  });
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 2rem;
    background: ${type === 'success' ? 'linear-gradient(135deg, #E02E9C, #3A59FF)' : '#333'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    animation: slideInRight 0.3s ease;
    max-width: 400px;
  `;

  notification.textContent = message;
  document.body.appendChild(notification);

  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes slideOutRight {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(400px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => {
      notification.remove();
      style.remove();
    }, 300);
  }, 4000);
}

function initCookieConsent() {
  const cookieConsent = document.getElementById('cookieConsent');
  const acceptCookies = document.getElementById('acceptCookies');
  const declineCookies = document.getElementById('declineCookies');

  const cookieAccepted = localStorage.getItem('cookieConsent');

  if (!cookieAccepted) {
    setTimeout(() => {
      cookieConsent.classList.add('show');
    }, 2000);
  }

  acceptCookies.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieConsent.classList.remove('show');
  });

  declineCookies.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    cookieConsent.classList.remove('show');
  });
}

function initMobileMenu() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');

  mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    const spans = mobileMenuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translateY(10px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '1';
      spans[2].style.transform = '';
    }
  });

  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
      }
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      const navLinks = document.querySelectorAll('.nav-link');

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === href) {
          link.classList.add('active');
        }
      });

      const sections = document.querySelectorAll('.page-section');
      sections.forEach(section => {
        section.classList.remove('active');
      });

      if (target.classList.contains('page-section')) {
        target.classList.add('active');
      }

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.page-section.active');
  const navLinks = document.querySelectorAll('.nav-link');

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      const id = section.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

const addHoverEffects = () => {
  document.querySelectorAll('.service-card, .feature-card, .product-card, .team-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
};

setTimeout(addHoverEffects, 100);

const logoPlaceholders = document.querySelectorAll('.logo-placeholder');
logoPlaceholders.forEach((logo, index) => {
  logo.style.animationDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px) scale(1.05)';
  });

  btn.addEventListener('mouseleave', function() {
    this.style.transform = '';
  });
});

let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    document.getElementById('navbar').style.transform = 'translateY(-100%)';
  } else {
    document.getElementById('navbar').style.transform = 'translateY(0)';
  }

  lastScroll = currentScroll;
});

const cursorFollower = document.createElement('div');
cursorFollower.style.cssText = `
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(224, 46, 156, 0.3), rgba(58, 89, 255, 0.3));
  pointer-events: none;
  transition: transform 0.2s ease;
  z-index: 9998;
  display: none;
`;
document.body.appendChild(cursorFollower);

document.addEventListener('mousemove', (e) => {
  if (window.innerWidth > 768) {
    cursorFollower.style.display = 'block';
    cursorFollower.style.left = e.clientX - 10 + 'px';
    cursorFollower.style.top = e.clientY - 10 + 'px';
  }
});

document.querySelectorAll('a, button, .service-card, .product-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorFollower.style.transform = 'scale(2)';
  });

  el.addEventListener('mouseleave', () => {
    cursorFollower.style.transform = 'scale(1)';
  });
});

console.log('%c🚀 AZUO - Empowering Businesses from A to Z', 'color: #E02E9C; font-size: 20px; font-weight: bold;');
console.log('%cWebsite built with modern web technologies', 'color: #3A59FF; font-size: 14px;');
