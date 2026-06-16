/* =========================================================
   DELMAN SHIPPING — Interactive 3D Globe
   Powered by globe.gl (three.js). Falls back gracefully.
   ========================================================= */
(function () {
  const el = document.getElementById('globeViz');
  if (!el) return;

  const HQ = { name: 'Dubai (HQ)', lat: 25.2048, lng: 55.2708, hq: true };

  const destinations = [
    { name: 'Al Garhoud, Dubai', lat: 25.2475, lng: 55.3530 },
    { name: 'Jebel Ali, Dubai', lat: 25.0119, lng: 55.0610 },
    { name: 'Mumbai, India', lat: 19.0760, lng: 72.8777 },
    { name: 'Cochin, India', lat: 9.9312, lng: 76.2673 },
    { name: 'Amsterdam, Netherlands', lat: 52.3676, lng: 4.9041 },
    { name: 'Melbourne, Australia', lat: -37.8136, lng: 144.9631 },
    { name: 'New York, USA', lat: 40.7128, lng: -74.0060 },
    { name: 'São Paulo, Brazil', lat: -23.5505, lng: -46.6333 },
    { name: 'Kampala, Uganda', lat: 0.3476, lng: 32.5825 },
    { name: 'Lagos, Nigeria', lat: 6.5244, lng: 3.3792 },
    { name: 'Nairobi, Kenya', lat: -1.2921, lng: 36.8219 },
    { name: 'Hong Kong', lat: 22.3193, lng: 114.1694 },
    { name: 'Shanghai, China', lat: 31.2304, lng: 121.4737 }
  ];

  const points = [{ ...HQ }, ...destinations];

  const arcs = destinations.map(d => ({
    startLat: HQ.lat, startLng: HQ.lng,
    endLat: d.lat, endLng: d.lng
  }));

  function buildGlobe() {
    try {
      const world = Globe()(el)
        .backgroundColor('rgba(0,0,0,0)')
        .showAtmosphere(true)
        .atmosphereColor('#1fbecf')
        .atmosphereAltitude(0.18)
        .globeImageUrl('https://unpkg.com/three-globe@2.31.0/example/img/earth-dark.jpg')
        .pointsData(points)
        .pointLat('lat')
        .pointLng('lng')
        .pointColor(d => (d.hq ? '#1fbecf' : '#6aa744'))
        .pointAltitude(d => (d.hq ? 0.08 : 0.045))
        .pointRadius(d => (d.hq ? 0.6 : 0.4))
        .pointLabel(d => `<div style="font-family:Inter,sans-serif;background:rgba(10,13,12,0.9);border:1px solid rgba(255,255,255,0.15);padding:6px 12px;border-radius:10px;color:#fff;font-size:12px;">${d.name}</div>`)
        .arcsData(arcs)
        .arcColor(() => ['#6aa744', '#1fbecf'])
        .arcStroke(0.5)
        .arcAltitude(0.22)
        .arcDashLength(0.5)
        .arcDashGap(0.25)
        .arcDashAnimateTime(2600)
        .ringsData([{ ...HQ }])
        .ringLat('lat')
        .ringLng('lng')
        .ringColor(() => '#1fbecf')
        .ringMaxRadius(4)
        .ringPropagationSpeed(2)
        .ringRepeatPeriod(1100);

      function size() {
        const w = el.clientWidth || el.offsetWidth;
        world.width(w).height(560);
      }
      size();
      window.addEventListener('resize', size);

      const controls = world.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.6;
      controls.enableZoom = true;
      world.pointOfView({ lat: 22, lng: 50, altitude: 2.2 });
    } catch (err) {
      console.warn('Globe failed, using fallback.', err);
      showFallback();
    }
  }

  function showFallback() {
    el.innerHTML = `
      <div style="display:grid;place-items:center;height:100%;text-align:center;padding:40px;">
        <div>
          <div style="font-size:4rem;margin-bottom:14px;">🌍</div>
          <h3 style="font-family:Poppins,sans-serif;">Delman Global Network</h3>
          <p style="color:#8a958f;max-width:420px;margin:10px auto 0;">Connecting Dubai with 13+ destinations across six continents. See the full list of hubs below.</p>
        </div>
      </div>`;
  }

  // Wait for globe.gl; fallback if not available shortly.
  let tries = 0;
  (function waitForGlobe() {
    if (typeof Globe !== 'undefined') {
      buildGlobe();
    } else if (tries++ < 40) {
      setTimeout(waitForGlobe, 150);
    } else {
      showFallback();
    }
  })();
})();
