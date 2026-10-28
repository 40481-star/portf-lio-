/**
 * PORTFÓLIO PESSOAL — SOPHIA ANGELINA SILVEIRA
 * script.js — Interatividades, Validação, Acessibilidade e Efeitos Kawaii
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initScrollSpy();
  initScrollReveal();
  initContactForm();
  initKawaiiSparkleTrail();
});

/**
 * 1. Gerenciamento do Menu de Navegação Responsivo (Mobile & Desktop)
 */
function initMobileNavigation() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!navToggle || !navMenu) return;

  function toggleMenu(forceClose = false) {
    const isExpanded = forceClose ? true : navToggle.getAttribute('aria-expanded') === 'true';
    const newState = !isExpanded;

    navToggle.setAttribute('aria-expanded', String(newState));
    navMenu.classList.toggle('is-active', newState);
    navToggle.setAttribute(
      'aria-label',
      newState ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
    );
  }

  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Fechar o menu ao clicar em qualquer link de navegação
  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('is-active')) {
        toggleMenu(true);
      }
    });
  });

  // Fechar menu ao pressionar Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-active')) {
      toggleMenu(true);
      navToggle.focus();
    }
  });

  // Fechar menu ao clicar fora dele
  document.addEventListener('click', (e) => {
    if (
      navMenu.classList.contains('is-active') &&
      !navMenu.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      toggleMenu(true);
    }
  });
}

/**
 * 2. Destaque Automático de Seção Ativa (Scrollspy)
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  if (!sections.length || !navLinks.length) return;

  function updateActiveLink() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const headerOffset = 140;

    let currentSectionId = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - headerOffset;
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === `#${currentSectionId}`) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        } else {
          link.classList.remove('active');
          link.removeAttribute('aria-current');
        }
      });
    }
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
}

/**
 * 3. Animações Suaves na Rolagem (IntersectionObserver)
 */
function initScrollReveal() {
  const fadeElements = document.querySelectorAll('.fade-in-element');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    fadeElements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  fadeElements.forEach((el) => observer.observe(el));
}

/**
 * 4. Formulário de Contato com Validação e Disparo Amigável
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  function clearErrors() {
    [nameInput, emailInput, messageInput].forEach((input) => {
      if (input) input.classList.remove('is-invalid');
    });
    if (nameError) nameError.textContent = '';
    if (emailError) emailError.textContent = '';
    if (messageError) messageError.textContent = '';
  }

  // Validação em tempo real ao digitar
  [nameInput, emailInput, messageInput].forEach((input) => {
    if (input) {
      input.addEventListener('input', () => {
        if (input.classList.contains('is-invalid')) {
          input.classList.remove('is-invalid');
          const errorSpan = document.getElementById(`${input.name}-error`);
          if (errorSpan) errorSpan.textContent = '';
        }
      });
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    let isValid = true;

    // Validação do Nome
    if (name.length < 2) {
      isValid = false;
      nameInput.classList.add('is-invalid');
      if (nameError) nameError.textContent = 'Por favor, informe seu nome com ao menos 2 caracteres. 🎀';
    }

    // Validação de E-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      isValid = false;
      emailInput.classList.add('is-invalid');
      if (emailError) emailError.textContent = 'Por favor, insira um e-mail válido (ex: nome@exemplo.com). ✉️';
    }

    // Validação da Mensagem
    if (message.length < 6) {
      isValid = false;
      messageInput.classList.add('is-invalid');
      if (messageError) messageError.textContent = 'Escreva uma mensagem com pelo menos 6 caracteres. 🌸';
    }

    if (!isValid) return;

    // Feedback Amigável
    showToast(`✨ Obrigada, ${name}! Sua mensagem foi preparada. Abrindo seu aplicativo de e-mail... 💌`);

    // Preparar envio real pré-preenchido via mailto
    const mailtoSubject = encodeURIComponent(`Contato pelo Portfólio — ${name}`);
    const mailtoBody = encodeURIComponent(
      `Olá Sophia!\n\nMeu nome é ${name} (${email}).\n\nMensagem:\n${message}\n\nEnviado através do seu portfólio autoral kawaii.`
    );
    const mailtoUrl = `mailto:40481@raphaeldisanto.com.br?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 700);

    form.reset();
  });
}

/**
 * 5. Sistema de Notificações Toast Kawaii
 */
function showToast(message) {
  const toastRegion = document.getElementById('toast-region');
  if (!toastRegion) return;

  if (toastRegion.children.length >= 3) {
    toastRegion.firstElementChild.remove();
  }

  const toast = document.createElement('div');
  toast.className = 'kawaii-toast';
  toast.setAttribute('role', 'status');

  toast.innerHTML = `
    <span class="toast-icon" aria-hidden="true">🎀</span>
    <span class="toast-text">${message}</span>
  `;

  toastRegion.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('is-hiding');
    setTimeout(() => {
      if (toast.parentNode) toast.remove();
    }, 300);
  }, 4200);
}

/**
 * 6. Microinteração de Brilho Kawaii no Cursor (Desktop Fine Pointer)
 */
function initKawaiiSparkleTrail() {
  const supportsFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!supportsFinePointer || prefersReducedMotion) return;

  const sparkles = ['✨', '🌸', '💖', '★', '🤍'];
  let lastTime = 0;

  window.addEventListener('mousemove', (e) => {
    const now = performance.now();
    if (now - lastTime < 95) return;
    lastTime = now;

    createSparkle(e.clientX, e.clientY);
  }, { passive: true });

  function createSparkle(x, y) {
    const sparkle = document.createElement('span');
    sparkle.className = 'cursor-sparkle';
    sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
    sparkle.setAttribute('aria-hidden', 'true');

    const offsetX = (Math.random() - 0.5) * 22;
    const offsetY = (Math.random() - 0.5) * 22;

    Object.assign(sparkle.style, {
      position: 'fixed',
      left: `${x + offsetX}px`,
      top: `${y + offsetY}px`,
      pointerEvents: 'none',
      fontSize: `${Math.random() * 8 + 12}px`,
      zIndex: '9999',
      opacity: '0.9',
      transition: 'transform 0.65s ease-out, opacity 0.65s ease-out',
      transform: 'translate(-50%, -50%) scale(1)'
    });

    document.body.appendChild(sparkle);

    requestAnimationFrame(() => {
      sparkle.style.transform = `translate(-50%, -150%) scale(0.35) rotate(${Math.random() * 60 - 30}deg)`;
      sparkle.style.opacity = '0';
    });

    setTimeout(() => {
      if (sparkle.parentNode) sparkle.remove();
    }, 650);
  }
}
