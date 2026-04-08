const revealItems = document.querySelectorAll('.reveal');

const io = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach(item => io.observe(item));

const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let width;
let height;

const particles = Array.from({ length: 120 }, () => ({
  x: Math.random(),
  y: Math.random(),
  r: Math.random() * 2 + 0.6,
  vx: (Math.random() - 0.5) * 0.0008,
  vy: (Math.random() - 0.5) * 0.0008
}));

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

function draw() {
  ctx.clearRect(0, 0, width, height);

  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > 1) p.vx *= -1;
    if (p.y < 0 || p.y > 1) p.vy *= -1;

    const px = p.x * width;
    const py = p.y * height;

    const gradient = ctx.createRadialGradient(px, py, 0, px, py, p.r * 18);
    gradient.addColorStop(0, 'rgba(122,148,255,0.75)');
    gradient.addColorStop(1, 'rgba(122,148,255,0)');

    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.arc(px, py, p.r * 18, 0, Math.PI * 2);
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

window.addEventListener('resize', resize);
resize();
draw();
