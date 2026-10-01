const MEDIA_VERSION = '1';

function versionedUrl(path) {
  const url = new URL(path, document.baseURI);
  url.searchParams.set('v', MEDIA_VERSION);
  return url.href;
}

const progress = document.getElementById('progress');
addEventListener('scroll', () => {
  const d = document.documentElement;
  const max = d.scrollHeight - d.clientHeight;
  progress.style.width = (max > 0 ? (d.scrollTop / max) * 100 : 0) + '%';
}, { passive: true });

const cursor = document.getElementById('cursorGlow');
addEventListener('pointermove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
}, { passive: true });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

const filterButtons = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.project')];

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    cards.forEach((c) => {
      const match = f === 'all' || c.dataset.cat.split(' ').includes(f);
      c.classList.toggle('hidden', !match);
    });
  });
});

for (const el of document.querySelectorAll('[data-tilt]')) {
  el.addEventListener('pointermove', (e) => {
    if (innerWidth < 800) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = (y / r.height - 0.5) * -5;
    const ry = (x / r.width - 0.5) * 6;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)`;
  });
  el.addEventListener('pointerleave', () => { el.style.transform = ''; });
}

const previewVideos = [...document.querySelectorAll('.video-preview')];

function attachPreviewSource(video) {
  const source = video.querySelector('source');
  if (!source || source.src) return false;
  source.src = versionedUrl(source.dataset.src);
  video.preload = 'auto';
  video.load();
  return true;
}

const preloadObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      attachPreviewSource(entry.target);
      preloadObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: '600px 0px', threshold: 0 });

for (const video of previewVideos) {
  const wrap = video.parentElement;
  const source = video.querySelector('source');
  const src = source?.dataset.src || '';

  const err = document.createElement('div');
  err.className = 'video-error';
  err.innerHTML = `Video not loading.<br><span style="opacity:.7">Check: ${src.replace('./', '')}</span>`;
  wrap.appendChild(err);

  video.addEventListener('error', () => err.classList.add('show'));
  video.addEventListener('loadeddata', () => err.classList.remove('show'));

  wrap.addEventListener('mouseenter', () => {
    attachPreviewSource(video);
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      video.play().catch(() => {});
    } else {
      video.dataset.pendingPlay = 'true';
    }
  });

  wrap.addEventListener('mouseleave', () => {
    video.dataset.pendingPlay = 'false';
    video.pause();
    video.currentTime = 0;
  });

  wrap.addEventListener('touchstart', () => {
    attachPreviewSource(video);
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, { passive: true });

  video.addEventListener('canplay', () => {
    if (video.dataset.pendingPlay === 'true' && wrap.matches(':hover')) {
      video.play().catch(() => {});
    }
  });

  preloadObserver.observe(video);
}

const modal = document.getElementById('modal');
const media = document.getElementById('modalMedia');
const modalTitle = document.getElementById('modalTitle');
const modalNote = document.getElementById('modalNote');

for (const card of cards) {
  card.addEventListener('click', () => {
    modalTitle.textContent = card.dataset.title || '';
    const path = card.dataset.video || '';
    media.innerHTML = '';

    if (path) {
      const video = document.createElement('video');
      video.controls = true;
      video.preload = 'auto';
      video.playsInline = true;
      video.muted = false;

      const posterEl = card.querySelector('.thumb');
      const posterUrl = posterEl ? getComputedStyle(posterEl).backgroundImage : '';
      if (posterUrl && posterUrl !== 'none') {
        const match = posterUrl.match(/url\(["']?(.*?)["']?\)/);
        if (match) video.poster = match[1];
      }

      video.src = versionedUrl(path);
      media.appendChild(video);

      modalNote.textContent = 'Buffering video…';
      video.play()
        .then(() => { modalNote.textContent = 'Playing with sound. Use the controls to pause or adjust volume.'; })
        .catch(() => { modalNote.textContent = 'Press play in the video controls to start playback with sound.'; });
    } else {
      modalNote.textContent = 'Make sure the MP4 filename matches the video file in the portfolio folder.';
    }

    modal.classList.add('open');
  });
}

function closeModal() {
  modal.classList.remove('open');
  media.innerHTML = '';
}

document.getElementById('modalClose').onclick = closeModal;
modal.onclick = (e) => { if (e.target === modal) closeModal(); };
addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

const form = document.getElementById('contactForm');
if (form) {
  form.onsubmit = (e) => {
    e.preventDefault();
    const b = form.querySelector('button');
    b.textContent = 'Inquiry Ready ✓';
    setTimeout(() => { b.textContent = 'Send Inquiry ↗'; }, 1600);
  };
}

const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let W, H, ps = [];

function resize() {
  W = innerWidth; H = innerHeight;
  const d = devicePixelRatio;
  canvas.width = W * d;
  canvas.height = H * d;
  canvas.style.width = W + 'px';
  canvas.style.height = H + 'px';
  ctx.setTransform(d, 0, 0, d, 0, 0);
  ps = Array.from(
    { length: Math.min(90, Math.floor(W / 15)) },
    () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.3 + 0.25,
      s: Math.random() * 0.25 + 0.04,
      a: Math.random() * 0.5 + 0.1,
    })
  );
}

function draw() {
  ctx.clearRect(0, 0, W, H);
  for (const p of ps) {
    p.y -= p.s;
    if (p.y < -5) p.y = H + 5;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(92,210,255,${p.a})`;
    ctx.fill();
  }
  requestAnimationFrame(draw);
}

addEventListener('resize', resize);
resize();
draw();