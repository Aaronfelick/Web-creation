/* =========================================================
   DELMAN SHIPPING — Track My Package
   Reads shipments saved by the quote wizard (localStorage).
   For any valid-format number it also synthesizes a
   deterministic demo timeline so shared links always work.
   ========================================================= */
(function () {
  const form = document.getElementById('trackForm');
  if (!form) return;

  const input = document.getElementById('trackInput');
  const errorEl = document.getElementById('trackError');
  const result = document.getElementById('trackResult');
  const samplesEl = document.getElementById('trackSamples');

  const STAGE_SECONDS = 14; // demo: shipment advances one stage every ~14s
  let liveTimer = null;

  /* ---- stage definitions per direction ---- */
  function stagesFor(rec) {
    const isImport = (rec.direction || '').toLowerCase() === 'import';
    const mode = rec.mode || 'Air Freight';
    const transit = mode === 'Sea Freight'
      ? 'Vessel sailing — cargo on the water'
      : mode === 'Land Freight'
        ? 'On the road — cross-border transit'
        : mode === 'Personal Shipping'
          ? 'In transit to destination country'
          : 'Airborne — flight in transit';

    return [
      { t: 'Quote Requested', d: 'Your request was received and logged in our system.' },
      { t: 'Quote Reviewed & Confirmed', d: 'Our team reviewed your shipment and confirmed pricing & routing.' },
      { t: 'Booking Created · Bill Generated', d: 'Booking confirmed and your Bill of Lading / AWB reference was issued.' },
      { t: 'Cargo Picked Up', d: 'Cargo collected and moving to the ' + (isImport ? 'origin' : 'Delman') + ' handling hub.' },
      { t: 'At Origin Hub · Documentation', d: 'Cargo received, inspected, packed and documentation prepared.' },
      { t: 'Export Customs Clearance', d: 'Export declaration filed and cleared by customs authorities.' },
      { t: transit, d: 'Shipment dispatched and en route to the destination.' },
      { t: 'Arrived at Destination Hub', d: 'Cargo arrived at the destination gateway and offloaded.' },
      { t: 'Import Customs Clearance', d: 'Import duties processed and cargo released by customs.' },
      { t: 'Out for Delivery', d: 'Cargo loaded for final-mile delivery to the consignee.' },
      { t: 'Delivered', d: 'Shipment delivered successfully. Thank you for shipping with Delman!' }
    ];
  }

  /* ---- simple deterministic hash from a string ---- */
  function hash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) { h = (h << 5) - h + str.charCodeAt(i); h |= 0; }
    return Math.abs(h);
  }

  function getStored(no) {
    try {
      const all = JSON.parse(localStorage.getItem('delman_shipments') || '{}');
      // direct match by tracking number
      if (all[no]) return all[no];
      // match by bill number
      for (const k in all) if (all[k].billNo && all[k].billNo.toUpperCase() === no) return all[k];
    } catch (e) {}
    return null;
  }

  /* ---- synthesize a record for any valid-format number ---- */
  function synth(no) {
    const h = hash(no);
    const modes = ['Air Freight', 'Sea Freight', 'Land Freight', 'Personal Shipping'];
    const routes = [
      ['Dubai, UAE', 'Mumbai, India'], ['Shanghai, China', 'Dubai, UAE'],
      ['Dubai, UAE', 'Amsterdam, Netherlands'], ['New York, USA', 'Dubai, UAE'],
      ['Dubai, UAE', 'Nairobi, Kenya'], ['Dubai, UAE', 'Melbourne, Australia']
    ];
    const cargo = ['General Cargo', 'Perishables', 'Project / Heavy Lift', 'Pharmaceuticals', 'AOG / Aerospace'];
    const r = routes[h % routes.length];
    // start time offset so it shows partial, realistic progress
    const offsetStages = (h % 8); // 0..7 stages already elapsed
    return {
      trackingNo: no,
      billNo: 'BL-' + String(10000000 + (h % 89999999)),
      createdAt: Date.now() - offsetStages * STAGE_SECONDS * 1000 - 5000,
      mode: modes[h % modes.length],
      direction: (h % 2 === 0) ? 'Export' : 'Import',
      origin: r[0], destination: r[1],
      cargoType: cargo[h % cargo.length],
      synthetic: true
    };
  }

  function fmt(ts) {
    const d = new Date(ts);
    return d.toLocaleString(undefined, { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  function render(rec) {
    const stages = stagesFor(rec);
    const elapsed = (Date.now() - rec.createdAt) / 1000;
    let currentIdx = Math.floor(elapsed / STAGE_SECONDS);
    if (currentIdx > stages.length - 1) currentIdx = stages.length - 1;
    if (currentIdx < 0) currentIdx = 0;
    const delivered = currentIdx >= stages.length - 1;

    document.getElementById('trHeadNo').textContent = rec.trackingNo;
    document.getElementById('trBill').textContent = rec.billNo || '—';
    document.getElementById('trMode').textContent = rec.mode || '—';
    document.getElementById('trDir').textContent = rec.direction || '—';
    document.getElementById('trRoute').textContent = (rec.origin && rec.destination) ? (rec.origin + ' → ' + rec.destination) : '—';
    document.getElementById('trCargo').textContent = rec.cargoType || '—';

    const statusEl = document.getElementById('trStatus');
    statusEl.textContent = delivered ? 'Delivered' : stages[currentIdx].t;
    statusEl.classList.toggle('delivered', delivered);

    const pct = (currentIdx / (stages.length - 1)) * 100;
    document.getElementById('trBar').style.width = pct + '%';

    const tl = document.getElementById('trTimeline');
    tl.innerHTML = stages.map((s, i) => {
      let cls = 'pending', icon = '', time = '';
      if (i < currentIdx) {
        cls = 'done'; icon = '✓';
        time = '<span class="tl-time">' + fmt(rec.createdAt + i * STAGE_SECONDS * 1000) + '</span>';
      } else if (i === currentIdx) {
        cls = delivered ? 'done' : 'current';
        icon = delivered ? '✓' : '';
        time = '<span class="tl-time">' + (delivered ? fmt(rec.createdAt + i * STAGE_SECONDS * 1000) : 'In progress · just now') + '</span>';
      } else {
        const eta = rec.createdAt + i * STAGE_SECONDS * 1000;
        time = '<span class="tl-time">Est. ' + fmt(eta) + '</span>';
      }
      return `<div class="tl-item ${cls}">
        <div class="tl-dot">${icon}</div>
        <div class="tl-card"><h4>${s.t}</h4><p>${s.d}</p>${time}</div>
      </div>`;
    }).join('');

    result.classList.add('show');

    // keep it live until delivered
    if (liveTimer) clearTimeout(liveTimer);
    if (!delivered) liveTimer = setTimeout(() => render(rec), 4000);
  }

  function track(raw) {
    const no = (raw || '').trim().toUpperCase();
    errorEl.textContent = '';
    if (!no) { errorEl.textContent = 'Please enter a tracking or bill number.'; return; }
    const valid = /^DLMN-\d{8}-[A-Z0-9]{4}$/.test(no) || /^BL-\d{6,10}$/.test(no);
    if (!valid) {
      errorEl.textContent = 'That doesn\u2019t look like a valid Delman number. Format: DLMN-YYYYMMDD-XXXX or BL-XXXXXXXX.';
      result.classList.remove('show');
      return;
    }
    const rec = getStored(no) || synth(no);
    history.replaceState(null, '', 'track.html?id=' + encodeURIComponent(rec.trackingNo));
    render(rec);
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  form.addEventListener('submit', (e) => { e.preventDefault(); track(input.value); });

  /* ---- show recent shipments as quick samples ---- */
  function buildSamples() {
    let recents = [];
    try {
      const all = JSON.parse(localStorage.getItem('delman_shipments') || '{}');
      recents = Object.values(all).sort((a, b) => b.createdAt - a.createdAt).slice(0, 3);
    } catch (e) {}
    if (recents.length) {
      samplesEl.innerHTML = 'Your recent shipments: ' + recents.map(r =>
        `<button type="button" data-no="${r.trackingNo}">${r.trackingNo}</button>`).join(' · ');
    } else {
      samplesEl.innerHTML = 'No shipment yet? <a href="quote.html" style="color:var(--cyan-bright);">Get a quote</a> to receive a tracking number, or try a sample: <button type="button" data-no="DLMN-20260616-DM01">DLMN-20260616-DM01</button>';
    }
    samplesEl.querySelectorAll('button[data-no]').forEach(b =>
      b.addEventListener('click', () => { input.value = b.dataset.no; track(b.dataset.no); }));
  }
  buildSamples();

  /* ---- auto-track from ?id= ---- */
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  if (id) { input.value = id; track(id); }
})();
