/* ════════════════════════════════════════════════════════
   main.js
   ════════════════════════════════════════════════════════ */

/* ── FontAwesome Icons für Kontakt ──────────────────── */
const kontaktIcons = {
  mail:      '<i class="fa-solid fa-envelope"></i>',
  facebook:  '<i class="fa-brands fa-facebook-f"></i>',
  instagram: '<i class="fa-brands fa-instagram"></i>',
  phone:     '<i class="fa-solid fa-phone"></i>',
  web:       '<i class="fa-solid fa-globe"></i>'
};

/* ── Kategorie-Definitionen ─────────────────────────── */
const newsKategorien = {
  konzerte:    { label: 'Konzerte',    icon: 'fa-solid fa-music',        color: '#D96704' },
  berichte:    { label: 'Berichte',    icon: 'fa-solid fa-newspaper',    color: '#8eb898' },
  allgemeines: { label: 'Allgemeines', icon: 'fa-solid fa-circle-info',  color: '#F29F05' },
};

/* ════════════════════════════════════════════════════════
   KONTAKT RENDERN
   ════════════════════════════════════════════════════════ */
function renderKontakt() {
  const container = document.getElementById('kontaktCards');
  if (!container || !kontaktData) return;

  container.innerHTML = kontaktData.map(item => `
    <a href="${item.href}" class="kontakt-card"
       ${item.target ? `target="${item.target}" rel="noopener"` : ''}>
      <div class="kontakt-bubble-outer">
        <div class="kontakt-bubble-inner">
          ${kontaktIcons[item.icon] || kontaktIcons.web}
        </div>
      </div>
      <div class="kontakt-connector">
        <div class="kontakt-connector-line"></div>
        <div class="kontakt-connector-dot"></div>
      </div>
      <div class="kontakt-card-label">${item.label}</div>
      <div class="kontakt-card-desc">${item.desc}</div>
    </a>
  `).join('');
}

/* ════════════════════════════════════════════════════════
   NEWS RENDERN
   ════════════════════════════════════════════════════════ */
function renderNewsFilterBar() {
  const bar = document.getElementById('newsFilterBar');
  if (!bar) return;

  // Welche Kategorien haben mindestens einen Eintrag?
  const vorhandene = new Set(newsData.map(n => n.kategorie));

  const alleBtn = `
    <button class="news-filter-btn active"
            data-filter="alle"
            style="--btn-color: var(--orange)">
      <i class="fa-solid fa-list"></i> Alle
    </button>`;

  const katBtns = Object.entries(newsKategorien)
    .filter(([key]) => vorhandene.has(key))   // nur Kategorien mit Einträgen
    .map(([key, kat]) => `
      <button class="news-filter-btn"
              data-filter="${key}"
              style="--btn-color: ${kat.color}">
        <i class="${kat.icon}"></i> ${kat.label}
      </button>`).join('');

  bar.innerHTML = alleBtn + katBtns;

  bar.addEventListener('click', e => {
    const btn = e.target.closest('.news-filter-btn');
    if (!btn) return;
    bar.querySelectorAll('.news-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderNewsList(btn.dataset.filter);
  });
}

function renderNewsList(filter = 'alle') {
  const list = document.getElementById('newsList');
  if (!list) return;

  const items = filter === 'alle'
    ? newsData
    : newsData.filter(n => n.kategorie === filter);

  if (items.length === 0) {
    list.innerHTML = `<p style="color:#aaa;font-size:0.9rem;">Keine Einträge in dieser Kategorie.</p>`;
    return;
  }

  list.innerHTML = items.map(item => {
    const kat = newsKategorien[item.kategorie] || newsKategorien.allgemeines;
    return `
      <div class="news-item fade-up"
           data-news-id="${item.id}"
           role="button" tabindex="0"
           aria-label="${item.title} – Details öffnen">
        <div class="news-dot" style="background:${kat.color}">
          <i class="${kat.icon}"></i>
        </div>
        <div class="news-body">
          <div class="news-category-badge" style="--badge-color:${kat.color}">
            <i class="${kat.icon}"></i> ${kat.label}
          </div>
          <h4>${item.title}</h4>
          <p>${item.text}</p>
          <span class="news-date"><i class="fa-regular fa-calendar" style="margin-right:0.3rem"></i>${item.date}</span>
        </div>
        <span class="news-item-arrow">→</span>
      </div>`;
  }).join('');

  // Klick-Handler
  list.querySelectorAll('.news-item').forEach(el => {
    el.addEventListener('click', () => openNewsDialog(parseInt(el.dataset.newsId)));
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openNewsDialog(parseInt(el.dataset.newsId)); }
    });
  });

  setTimeout(observeNewFadeUps, 50);
}

function renderNews() {
  renderNewsFilterBar();
  renderNewsList('alle');
}

/* ════════════════════════════════════════════════════════
   NEWS DIALOG
   ════════════════════════════════════════════════════════ */
function openNewsDialog(id) {
  const item = newsData.find(n => n.id === id);
  if (!item) return;

  const overlay   = document.getElementById('dialogOverlay');
  const imageArea = document.getElementById('dialogImageArea');
  const dateEl    = document.getElementById('dialogDate');
  const headline  = document.getElementById('dialogHeadline');
  const textEl    = document.getElementById('dialogText');
  const ctaArea   = document.getElementById('dialogCtaArea');

  imageArea.innerHTML = item.dialogImage
    ? `<img src="${item.dialogImage}" alt="${item.dialogTitle || item.title}" class="dialog-image" />`
    : `<div class="dialog-image-placeholder">${item.icon}</div>`;

  dateEl.innerHTML = `<span>📅</span> ${item.dialogDate || item.date}`;
  headline.textContent = item.dialogTitle || item.title;

  textEl.innerHTML = (item.dialogText || item.text)
    .split('\n\n')
    .map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`)
    .join('');

  ctaArea.innerHTML = (item.dialogLink && item.dialogLinkLabel)
    ? `<a href="${item.dialogLink}" class="dialog-cta">${item.dialogLinkLabel}</a>`
    : '';

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('dialogCloseTop')?.focus(), 50);
}

function closeNewsDialog() {
  document.getElementById('dialogOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function initNewsDialog() {
  const overlay = document.getElementById('dialogOverlay');
  document.getElementById('dialogCloseTop')?.addEventListener('click', closeNewsDialog);
  document.getElementById('dialogCloseBottom')?.addEventListener('click', closeNewsDialog);
  overlay?.addEventListener('click', e => { if (e.target === overlay) closeNewsDialog(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay?.classList.contains('open')) closeNewsDialog();
  });
}

/* ════════════════════════════════════════════════════════
   YOUTUBE URL → VIDEO-ID
   Unterstützt:
     https://www.youtube.com/watch?v=VIDEOID
     https://youtu.be/VIDEOID
     https://www.youtube.com/embed/VIDEOID
   ════════════════════════════════════════════════════════ */
function extractYouTubeId(url) {
  if (!url) return null;
  const patterns = [
    /[?&]v=([^&#]+)/,          // ?v=ID
    /youtu\.be\/([^?&#]+)/,    // youtu.be/ID
    /embed\/([^?&#]+)/         // embed/ID
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

/* ════════════════════════════════════════════════════════
   REPERTOIRE RENDERN
   ════════════════════════════════════════════════════════ */
function renderRepertoire(filter) {
  const grid = document.getElementById('repertoireGrid');
  if (!grid) return;

  const items = repertoireData.filter(r => r.genre === filter);
  grid.innerHTML = items.map(r => {
    const globalIdx = repertoireData.indexOf(r);
    const hasYT     = !!extractYouTubeId(r.youtube);
    const hasAudio  = !!r.audio;
    const hasMedia  = hasYT || hasAudio;
    const btnClass  = hasYT ? 'has-youtube' : 'has-audio';
    const btnIcon   = hasYT
      ? '<i class="fa-brands fa-youtube"></i>'
      : '<i class="fa-solid fa-headphones"></i>';

    const hasImg     = !!r.image;
    const thumbClass = hasImg ? `rep-thumb ${r.bg} has-image` : `rep-thumb ${r.bg}`;
    const thumbInner = hasImg
      ? `<img class="rep-thumb-img" src="${r.image}" alt="${r.title}"
              onerror="this.parentElement.classList.remove('has-image'); this.remove();">`
      : `<div class="rep-thumb-fallback"><i class="fa-solid fa-music"></i></div>`;

    return `
      <div class="rep-card"
           data-rep-index="${globalIdx}"
           ${hasMedia ? `role="button" tabindex="0" aria-label="${r.title} abspielen"` : ''}>
        <div class="${thumbClass}">
          ${thumbInner}
          ${hasMedia ? `
          <div class="rep-play-overlay">
            <div class="rep-play-btn ${btnClass}"
                 title="${hasYT ? 'YouTube öffnen' : 'Audio abspielen'}">${btnIcon}</div>
          </div>` : ''}
        </div>
        <div class="rep-info">
          <h4>${r.title}</h4>
          <span>${r.genre.charAt(0).toUpperCase() + r.genre.slice(1)}</span>
        </div>
      </div>`;
  }).join('');

  grid.querySelectorAll('.rep-card[role="button"]').forEach(card => {
    const idx = parseInt(card.dataset.repIndex);
    card.addEventListener('click',   () => openMediaDialog(idx));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openMediaDialog(idx); }
    });
  });
}

/* ════════════════════════════════════════════════════════
   MEDIA DIALOG (YouTube / Audio)
   ════════════════════════════════════════════════════════ */
function openMediaDialog(idx) {
  const item = repertoireData[idx];
  if (!item) return;

  const overlay     = document.getElementById('mediaDialogOverlay');
  const contentArea = document.getElementById('mediaDialogContent');
  const titleEl     = document.getElementById('mediaDialogTitle');
  const metaEl      = document.getElementById('mediaDialogMeta');

  titleEl.textContent = item.title;
  metaEl.innerHTML    = item.desc ? `<p>${item.desc}</p>` : '';

  const ytId = extractYouTubeId(item.youtube);

  if (ytId) {
    contentArea.innerHTML = `
      <div class="media-youtube-wrap">
        <img
          class="media-yt-thumb"
          src="https://img.youtube.com/vi/${ytId}/hqdefault.jpg"
          alt="${item.title}"
        />
        <a class="media-yt-play-btn"
           href="https://www.youtube.com/watch?v=${ytId}"
           target="_blank" rel="noopener"
           aria-label="Video auf YouTube öffnen">
          <svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M66.5 7.7A8.5 8.5 0 0 0 60.6 1.8C55.3 0 34 0 34 0S12.7 0 7.4 1.8A8.5 8.5 0 0 0 1.5 7.7C0 13 0 24 0 24s0 11 1.5 16.3a8.5 8.5 0 0 0 5.9 5.9C12.7 48 34 48 34 48s21.3 0 26.6-1.8a8.5 8.5 0 0 0 5.9-5.9C68 35 68 24 68 24s0-11-1.5-16.3z" fill="#FF0000"/>
            <path d="M27 34l18-10-18-10v20z" fill="#fff"/>
          </svg>
        </a>
        <div class="media-yt-hint">Auf YouTube ansehen ↗</div>
      </div>`;
  } else if (item.audio) {
    contentArea.innerHTML = `
      <div class="media-audio-wrap">
        <div class="media-audio-emoji">${item.emoji}</div>
        <audio controls autoplay src="${item.audio}">
          Dein Browser unterstützt kein Audio-Element.
        </audio>
      </div>`;
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMediaDialog() {
  const overlay     = document.getElementById('mediaDialogOverlay');
  const contentArea = document.getElementById('mediaDialogContent');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  // YouTube-iframe stoppen indem wir den Inhalt leeren
  setTimeout(() => { contentArea.innerHTML = ''; }, 300);
}

function initMediaDialog() {
  const overlay = document.getElementById('mediaDialogOverlay');
  document.getElementById('mediaDialogClose')?.addEventListener('click', closeMediaDialog);
  overlay?.addEventListener('click', e => { if (e.target === overlay) closeMediaDialog(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay?.classList.contains('open')) closeMediaDialog();
  });
}

/* ════════════════════════════════════════════════════════
   TABS — nur sichtbar wenn Einträge vorhanden
   ════════════════════════════════════════════════════════ */
function initTabs() {
  const tabBar = document.getElementById('tabBar');
  if (!tabBar) return;

  // Verstecke Tabs ohne Einträge
  tabBar.querySelectorAll('.tab-btn').forEach(btn => {
    const count = repertoireData.filter(r => r.genre === btn.dataset.filter).length;
    btn.style.display = count === 0 ? 'none' : '';
  });

  tabBar.addEventListener('click', e => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    tabBar.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderRepertoire(btn.dataset.filter);
    setTimeout(observeNewFadeUps, 50);
  });
}

/* ════════════════════════════════════════════════════════
   INFO CARD TOGGLE — Weiterlesen aufklappen
   ════════════════════════════════════════════════════════ */
function initInfoCardToggles() {
  document.querySelectorAll('.info-card-toggle').forEach(btn => {
    const more = btn.closest('.info-card-body').querySelector('.info-card-more');
    if (!more) return;

    // hidden-Attribut entfernen, Steuerung via CSS class
    more.removeAttribute('hidden');

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      if (isOpen) {
        more.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = btn.dataset.label + ' <i class="fa-solid fa-chevron-down"></i>';
      } else {
        more.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        btn.innerHTML = 'Weniger anzeigen <i class="fa-solid fa-chevron-up"></i>';
      }
    });

    // Initialen Label merken
    btn.dataset.label = btn.textContent.trim().replace(/[\u2303\u2304]/, '').trim();
  });
}

/* ════════════════════════════════════════════════════════
   SCROLL ANIMATIONEN
   ════════════════════════════════════════════════════════ */
function initFadeUps() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

function observeNewFadeUps() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up:not(.in)').forEach(el => observer.observe(el));
}

/* ════════════════════════════════════════════════════════
   STICKER
   ════════════════════════════════════════════════════════ */
function initStickers() {
  const pairs = [
    { sectionId: 'ueber-uns',  stickerId: 'sticker1' },
    { sectionId: 'info',       stickerId: 'sticker2' },
    { sectionId: 'repertoire', stickerId: 'sticker3' },
    { sectionId: 'news',       stickerId: 'sticker4' },
    { sectionId: 'kontakt',    stickerId: 'sticker5' },
  ].map(({ sectionId, stickerId }) => ({
    section: document.getElementById(sectionId),
    sticker: document.getElementById(stickerId),
  })).filter(p => p.section && p.sticker);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const pair = pairs.find(p => p.section === entry.target);
      if (pair && entry.isIntersecting) pair.sticker.classList.add('visible');
    });
  }, { threshold: 0.2 });

  pairs.forEach(({ section }) => observer.observe(section));
}

/* ════════════════════════════════════════════════════════
   MOBILE NAV
   ════════════════════════════════════════════════════════ */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });
}

/* ════════════════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderKontakt();
  renderNews();
  renderRepertoire('klassik');

  initTabs();
  initFadeUps();
  initStickers();
  initMobileNav();
  initNewsDialog();
  initMediaDialog();
  initInfoCardToggles();

  setTimeout(observeNewFadeUps, 100);
});
