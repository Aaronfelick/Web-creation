/* =========================================================
   DELMAN SHIPPING — Get a Quote multi-step wizard
   ========================================================= */
(function () {
  const form = document.getElementById('quoteForm');
  if (!form) return;

  const steps = Array.from(form.querySelectorAll('.wizard-step'));
  const wpSteps = Array.from(document.querySelectorAll('.wp-step'));
  const wpLine = document.getElementById('wpLine');
  const totalSteps = steps.length;
  let current = 1;

  const data = {};

  /* ---- render current step ---- */
  function render() {
    steps.forEach(s => s.classList.toggle('active', +s.dataset.step === current));
    wpSteps.forEach(s => {
      const n = +s.dataset.step;
      s.classList.toggle('active', n === current);
      s.classList.toggle('done', n < current);
    });
    const pct = ((current - 1) / (totalSteps - 1)) * 88; // matches 6% left offset
    wpLine.style.width = pct + '%';
    window.scrollTo({ top: form.getBoundingClientRect().top + window.scrollY - 140, behavior: 'smooth' });
  }

  /* ---- option selection (steps 1 & 2) ---- */
  form.querySelectorAll('.option').forEach(opt => {
    opt.addEventListener('click', () => {
      const field = opt.dataset.field;
      form.querySelectorAll(`.option[data-field="${field}"]`).forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      data[field] = opt.dataset.value;
      // enable that step's next button
      const stepEl = opt.closest('.wizard-step');
      const nextBtn = stepEl.querySelector('[data-next]');
      if (nextBtn) nextBtn.disabled = false;
    });
  });

  /* ---- validation per step ---- */
  function validateStep(step) {
    if (step === 1) return !!data.mode;
    if (step === 2) return !!data.direction;
    if (step === 3) {
      const origin = form.origin.value.trim();
      const dest = form.destination.value.trim();
      if (!origin || !dest) {
        flash('Please enter both origin and destination.');
        return false;
      }
      return true;
    }
    return true;
  }

  function flash(msg) {
    let note = document.getElementById('wizardFlash');
    if (!note) {
      note = document.createElement('p');
      note.id = 'wizardFlash';
      note.style.cssText = 'color:#ff8a8a;text-align:center;margin-top:14px;font-weight:600;';
      form.querySelector('.wizard-step.active .wizard-nav').insertAdjacentElement('beforebegin', note);
    }
    note.textContent = msg;
    setTimeout(() => note && note.remove(), 3000);
  }

  /* ---- navigation ---- */
  form.querySelectorAll('[data-next]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!validateStep(current)) return;
      if (current < totalSteps) { current++; render(); }
    });
  });
  form.querySelectorAll('[data-prev]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (current > 1) { current--; render(); }
    });
  });

  /* ---- update summary on entering step 4 ---- */
  function updateSummary() {
    data.origin = form.origin.value.trim();
    data.destination = form.destination.value.trim();
    data.cargoType = form.cargoType.value;
    data.weight = form.weight.value ? form.weight.value + ' kg' : 'To be advised';

    const set = (key, val) => {
      const el = document.querySelector(`[data-sum="${key}"]`);
      if (el) el.textContent = val || '—';
    };
    set('mode', data.mode);
    set('direction', data.direction);
    set('route', data.origin && data.destination ? `${data.origin} → ${data.destination}` : '—');
    set('cargoType', data.cargoType);
    set('weight', data.weight);
  }

  // hook summary refresh when next3 clicked
  const next3 = document.getElementById('next3');
  if (next3) next3.addEventListener('click', () => { if (validateStep(3)) updateSummary(); });

  /* ---- submit ---- */
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.firstName.value.trim() || !form.email.value.trim() || !form.phone.value.trim()) {
      flash('Please complete your contact details.');
      return;
    }
    // In production this would POST to a backend / email service.
    form.style.display = 'none';
    document.getElementById('wizardProgress').style.display = 'none';
    const success = document.getElementById('wizardSuccess');
    document.getElementById('successName').textContent = form.firstName.value.trim();
    document.getElementById('successMode').textContent = (data.mode || 'shipment') + (data.direction ? ' (' + data.direction + ')' : '');
    success.classList.add('show');
    window.scrollTo({ top: success.getBoundingClientRect().top + window.scrollY - 160, behavior: 'smooth' });
  });

  /* ---- new quote ---- */
  const newBtn = document.getElementById('newQuote');
  if (newBtn) newBtn.addEventListener('click', () => {
    form.reset();
    Object.keys(data).forEach(k => delete data[k]);
    form.querySelectorAll('.option.selected').forEach(o => o.classList.remove('selected'));
    form.querySelectorAll('[data-next]').forEach(b => { if (b.id === 'next1' || b.id === 'next2') b.disabled = true; });
    document.getElementById('wizardSuccess').classList.remove('show');
    form.style.display = '';
    document.getElementById('wizardProgress').style.display = '';
    current = 1;
    render();
  });

  render();
})();
