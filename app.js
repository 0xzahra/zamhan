// Change the company name here only.
const STUDIO_NAME = "Zamhan";
document.title = STUDIO_NAME + " | app studio";
document.querySelectorAll("[data-name]").forEach(e => e.textContent = STUDIO_NAME);
document.getElementById("yr").textContent = new Date().getFullYear();
// scroll reveals
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll(".reveal").forEach((el, i) => { el.style.transitionDelay = (i % 4) * 80 + "ms"; io.observe(el); });
// soft glow field
const c = document.getElementById("bg"), x = c.getContext("2d"); let w, h, t = 0;
const fit = () => { w = c.width = innerWidth; h = c.height = innerHeight; }; fit(); addEventListener("resize", fit);
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
(function draw() {
  x.clearRect(0, 0, w, h);
  [["57,255,136", .25, .3], ["45,226,230", .75, .6]].forEach(([col, px, py], i) => {
    const cx = w * px + Math.sin(t + i) * 60, cy = h * py + Math.cos(t * .8 + i) * 40, r = Math.max(w, h) * .45;
    const g = x.createRadialGradient(cx, cy, 0, cx, cy, r); g.addColorStop(0, `rgba(${col},.12)`); g.addColorStop(1, "rgba(0,0,0,0)");
    x.fillStyle = g; x.fillRect(0, 0, w, h);
  });
  t += .004; if (!still) requestAnimationFrame(draw);
})();
