/* =========================================================
   DELMAN SHIPPING — Interactive 3D Globe (Google Earth style)
   Powered by globe.gl (three.js). Lit-up served countries,
   animated routes, HQ ring. Falls back gracefully.
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

  // Countries we transport to (match ADMIN names in the GeoJSON)
  const SERVED = new Set([
    'United Arab Emirates', 'India', 'Netherlands', 'Australia',
    'United States of America', 'Brazil', 'Uganda', 'Nigeria',
    'Kenya', 'China', 'Hong Kong S.A.R.'
  ]);

  const points = [{ ...HQ }, ...destinations];
  const arcs = destinations.map(d => ({
    startLat: HQ.lat, startLng: HQ.lng, endLat: d.lat, endLng: d.lng
  }));

  const CDN = 'https://unpkg.com/three-globe@2.31.0/example/img';

  function buildGlobe(countries) {
    try {
      const features = (countries && countries.features) ? countries.features : [];

      const world = Globe()(el)
        .backgroundColor('rgba(0,0,0,0)')
        .backgroundImageUrl(`${CDN}/night-sky.png`)
        .globeImageUrl(`${CDN}/earth-blue-marble.jpg`)
        .bumpImageUrl(`${CDN}/earth-topology.png`)
        .showAtmosphere(true)
        .atmosphereColor('#1fbecf')
        .atmosphereAltitude(0.22)

        // ---- Lit-up served countries ----
        .polygonsData(features.filter(f => f.properties.ADMIN !== 'Antarctica'))
        .polygonAltitude(f => (SERVED.has(f.properties.ADMIN) ? 0.06 : 0.008))
        .polygonCapColor(f => (SERVED.has(f.properties.ADMIN)
          ? 'rgba(106,167,68,0.85)' : 'rgba(255,255,255,0.04)'))
        .polygonSideColor(f => (SERVED.has(f.properties.ADMIN)
          ? 'rgba(31,190,207,0.45)' : 'rgba(0,0,0,0)'))
        .polygonStrokeColor(f => (SERVED.has(f.properties.ADMIN)
          ? '#7dc451' : 'rgba(255,255,255,0.12)'))
        .polygonLabel(f => (SERVED.has(f.properties.ADMIN)
          ? `<div style="font-family:Inter,sans-serif;background:rgba(10,13,12,0.92);border:1px solid rgba(125,196,81,0.5);padding:6px 12px;border-radius:10px;color:#fff;font-size:12px;"><b>${f.properties.ADMIN}</b><br/><span style="color:#7dc451;">Delman destination</span></div>`
          : ''))

        // ---- Markers ----
        .pointsData(points)
        .pointLat('lat').pointLng('lng')
        .pointColor(d => (d.hq ? '#1fbecf' : '#eafff0'))
        .pointAltitude(d => (d.hq ? 0.09 : 0.05))
        .pointRadius(d => (d.hq ? 0.55 : 0.32))
        .pointLabel(d => `<div style="font-family:Inter,sans-serif;background:rgba(10,13,12,0.92);border:1px solid rgba(255,255,255,0.18);padding:6px 12px;border-radius:10px;color:#fff;font-size:12px;">${d.name}</div>`)

        // ---- Animated routes ----
        .arcsData(arcs)
        .arcColor(() => ['#6aa744', '#1fbecf'])
        .arcStroke(0.55)
        .arcAltitudeAutoScale(0.4)
        .arcDashLength(0.5)
        .arcDashGap(0.22)
        .arcDashAnimateTime(2600)

        // ---- HQ pulse ring ----
        .ringsData([{ ...HQ }])
        .ringLat('lat').ringLng('lng')
        .ringColor(() => (t => `rgba(31,190,207,${Math.sqrt(1 - t)})`))
        .ringMaxRadius(5)
        .ringPropagationSpeed(2.4)
        .ringRepeatPeriod(900);

      // material tweak for shininess (Google Earth feel)
      const globeMat = world.globeMaterial();
      if (globeMat) {
        globeMat.bumpScale = 8;
        if (window.THREE) {
          new THREE.TextureLoader().load(`${CDN}/earth-water.png`, tex => {
            globeMat.specularMap = tex;
            globeMat.specular = new THREE.Color('#143b3f');
            globeMat.shininess = 14;
          });
        }
      }

      function size() {
        const w = el.clientWidth || el.offsetWidth || 800;
        const h = Math.max(360, Math.min(560, Math.round(window.innerHeight * 0.62)));
        el.style.height = h + 'px';
        world.width(w).height(h);
      }
      size();
      window.addEventListener('resize', size);

      const controls = world.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.55;
      controls.enableZoom = true;
      controls.minDistance = 180;
      controls.maxDistance = 600;
      world.pointOfView({ lat: 22, lng: 50, altitude: 2.3 });
    } catch (err) {
      console.warn('Globe failed, using fallback.', err);
      showFallback();
    }
  }

  function showFallback() {
    el.innerHTML = `
      <div style="display:grid;place-items:center;height:100%;text-align:center;padding:40px;">
        <div>
          <img src="assets/img/world-map.webp" alt="Delman global network map" style="max-width:90%;border-radius:16px;opacity:.92;margin-bottom:18px;" />
          <h3 style="font-family:Poppins,sans-serif;">Delman Global Network</h3>
          <p style="color:#8a958f;max-width:420px;margin:10px auto 0;">Connecting Dubai with destinations across six continents. See the full list of hubs below.</p>
        </div>
      </div>`;
  }

  function start() {
    fetch('assets/countries.geojson')
      .then(r => r.ok ? r.json() : Promise.reject(r.status))
      .then(buildGlobe)
      .catch(() => buildGlobe(null)); // still render globe without polygons
  }

  // Wait for globe.gl library, then start.
  let tries = 0;
  (function waitForGlobe() {
    if (typeof Globe !== 'undefined') start();
    else if (tries++ < 50) setTimeout(waitForGlobe, 150);
    else showFallback();
  })();
})();
