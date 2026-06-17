/* =========================================================
   DELMAN SHIPPING — shared scripts
   ========================================================= */

/* ---------- Shared footer ---------- */
const footerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a href="index.html" class="brand">
          <img src="assets/img/delman-logo.webp" alt="Delman Shipping" class="brand-logo" />
        </a>
        <p class="f-about">A leading freight forwarding &amp; logistics provider since 2010, delivering exceptional end-to-end solutions across six continents.</p>
        <div class="social" style="margin-top:20px;">
          <a href="https://www.linkedin.com/company/delman-shipping-llc/" target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
          <a href="mailto:info@delmanshipping.com" aria-label="Email">@</a>
          <a href="tel:+97142525505" aria-label="Phone">☎</a>
        </div>
      </div>
      <div>
        <h5>Company</h5>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="network.html">Global Network</a></li>
          <li><a href="track.html">Track My Package</a></li>
          <li><a href="career.html">Careers</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h5>Services</h5>
        <ul>
          <li><a href="services.html">Air Freight</a></li>
          <li><a href="services.html">Sea Freight</a></li>
          <li><a href="services.html">Land Freight</a></li>
          <li><a href="services.html">Project Cargo</a></li>
        </ul>
      </div>
      <div>
        <h5>Get in Touch</h5>
        <ul>
          <li><a href="tel:+97142525505">+971 4 25 25 505</a></li>
          <li><a href="mailto:info@delmanshipping.com">info@delmanshipping.com</a></li>
          <li><a href="contact.html">Al Garhoud, Dubai, UAE</a></li>
          <li><a href="quote.html">Request a Quote</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} Delman Shipping LLC. All rights reserved.</span>
      <span>Beyond Logistics · Dubai · Worldwide</span>
    </div>
  </div>
</footer>`;

const footerMount = document.getElementById('footer');
if (footerMount) footerMount.innerHTML = footerHTML;

/* ---------- Theme toggle (light / dark) ---------- */
(function () {
  const root = document.documentElement;
  if (!root.getAttribute('data-theme')) {
    let saved = null;
    try { saved = localStorage.getItem('delman-theme'); } catch (e) {}
    root.setAttribute('data-theme', saved === 'dark' ? 'dark' : 'light');
  }
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('delman-theme', next); } catch (e) {}
    });
  }
})();

/* ---------- Navbar scroll state ---------- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 30);
});

/* ---------- Mobile menu ---------- */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('mobile-open');
  });
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('mobile-open');
    })
  );
}

/* ---------- Reveal on scroll ---------- */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), (i % 4) * 80);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

/* ---------- FAQ accordion ---------- */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-a');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(o => {
      o.classList.remove('open');
      o.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

/* ---------- Generic contact/career form handling ---------- */
document.querySelectorAll('form[data-demo]').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const note = form.querySelector('.form-note');
    if (note) {
      note.style.display = 'block';
      note.textContent = '✓ Thank you! Your message has been received. Our team will respond shortly.';
    }
    form.reset();
  });
});
