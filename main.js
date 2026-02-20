/* ============================================================
   포트폴리오 메인 자바스크립트 — main.js
   ============================================================

   📌 내 정보로 바꾸려면?
      아래 portfolioData 객체만 수정하면 됩니다.
      HTML / CSS 는 건드릴 필요 없습니다!

============================================================ */

// ============================================================
// 📦 포트폴리오 데이터 — 여기만 수정하세요!
// ============================================================
const portfolioData = {

  // ── 강점 카드 (About 섹션) ─────────────────
  // TODO: 강점/가치관 키워드 교체
  strengths: [
    { emoji: "🎯", name: "사용자 중심",    desc: "기능보다 경험을 먼저 생각합니다" },
    { emoji: "🤝", name: "팀워크",         desc: "소통과 협업으로 함께 성장합니다" },
    { emoji: "📚", name: "꾸준한 학습",    desc: "매일 조금씩 더 나은 개발자가 됩니다" },
    { emoji: "🔍", name: "꼼꼼한 코드",   desc: "가독성과 유지보수를 항상 고려합니다" },
    { emoji: "💡", name: "문제 해결력",    desc: "막히면 파고드는 집요함이 있습니다" },
    { emoji: "🚀", name: "도전 정신",      desc: "새로운 기술 도전을 두려워하지 않습니다" },
  ],

  // ── 기술 스택 (Skills 섹션) ────────────────
  // TODO: 본인 기술로 교체
  // level: "주로 사용" | "사용 경험" | "학습 중"
  skills: [
    { icon: "🌐", name: "HTML",        level: "주로 사용" },
    { icon: "🎨", name: "CSS",         level: "주로 사용" },
    { icon: "⚡", name: "JavaScript",  level: "주로 사용" },
    { icon: "☕", name: "Java",         level: "주로 사용" },
    { icon: "🍃", name: "Spring Boot", level: "주로 사용" },
    { icon: "🗄",  name: "SQL",         level: "사용 경험" },
    { icon: "🐍", name: "Python",      level: "사용 경험" },
    { icon: "🐙", name: "Git",          level: "주로 사용" },
  ],

  // ── 프로젝트 (Projects 섹션) ───────────────
  // TODO: 본인 프로젝트 정보로 교체
  projects: [
    {
      title: "쇼핑몰 웹 앱",
      desc: "Spring Boot와 React를 이용한 풀스택 이커머스 플랫폼. 로그인, 상품 조회, 장바구니, 주문까지 전체 흐름을 구현했습니다.",
      tags: ["Java", "Spring Boot", "MySQL", "JavaScript"],
      githubUrl: "https://github.com/yourname", // TODO: 실제 GitHub URL 입력
    },
    {
      title: "날씨 대시보드",
      desc: "공공 API를 연동한 실시간 날씨 조회 앱. 현재 위치 기반으로 날씨 정보를 시각화하여 보여줍니다.",
      tags: ["JavaScript", "CSS", "REST API"],
      githubUrl: "https://github.com/yourname", // TODO: 실제 GitHub URL 입력
    },
    {
      title: "팀 협업 관리 도구",
      desc: "소규모 팀의 태스크를 관리하는 칸반 보드 앱. 드래그앤드롭 UI와 실시간 상태 동기화를 구현했습니다.",
      tags: ["Java", "Spring Boot", "JavaScript", "SQL"],
      githubUrl: "https://github.com/yourname", // TODO: 실제 GitHub URL 입력
    },
    {
      title: "개인 블로그",
      desc: "마크다운 기반 개인 블로그. 글 작성, 태그 분류, 검색 기능을 직접 구현한 정적 웹 프로젝트입니다.",
      tags: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/yourname", // TODO: 실제 GitHub URL 입력
    },
  ],

  // ── 연락처 (Contact 섹션) ──────────────────
  // TODO: 본인 연락처로 교체
  contacts: [
    {
      label: "GitHub",
      icon: "🐙",
      value: "github.com/yourname",              // TODO: 본인 GitHub 주소
      href: "https://github.com/yourname",       // TODO: 실제 URL
    },
    {
      label: "Email",
      icon: "📧",
      value: "your@email.com",                   // TODO: 본인 이메일
      href: "mailto:your@email.com",             // TODO: 실제 이메일
    },
    // 블로그나 LinkedIn이 있다면 아래 주석을 해제하고 수정하세요:
    // {
    //   label: "Blog",
    //   icon: "✍️",
    //   value: "yourblog.com",
    //   href: "https://yourblog.com",
    // },
  ],

};

// ============================================================
// 이하 코드는 수정하지 않아도 됩니다.
// 데이터를 화면에 자동으로 렌더링하고 기능을 추가합니다.
// ============================================================

/* ── 다크 모드 ──────────────────────────────── */
(function initTheme() {
  // 저장된 테마 불러오기 (없으면 light)
  const saved = localStorage.getItem('portfolio-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
})();

function updateThemeIcon(theme) {
  const icon = document.querySelector('.theme-icon');
  if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

document.getElementById('themeBtn').addEventListener('click', function () {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
  updateThemeIcon(next);
});

/* ── 모바일 햄버거 메뉴 ──────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', function () {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen.toString());
});

// 메뉴 항목 클릭 시 닫기
navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

/* ── 스크롤 스파이 (현재 섹션 활성 표시) ──────── */
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');
  let active = '';

  sections.forEach(function (sec) {
    if (sec.getBoundingClientRect().top <= 90) {
      active = sec.id;
    }
  });

  links.forEach(function (a) {
    a.classList.toggle('active', a.getAttribute('href') === '#' + active);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

/* ── 페이드인 (스크롤 시 요소 등장) ─────────── */
function initFadeIn() {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target); // 한 번만 실행
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.fade-up').forEach(function (el) {
    observer.observe(el);
  });
}

/* ── 강점 카드 렌더링 ──────────────────────── */
function renderStrengths() {
  const grid = document.getElementById('strengthsGrid');
  if (!grid) return;

  portfolioData.strengths.forEach(function (item, i) {
    const el = document.createElement('div');
    el.className = 'strength-card fade-up delay-' + Math.min(i + 1, 4);
    el.innerHTML =
      '<div class="strength-emoji">' + item.emoji + '</div>' +
      '<div class="strength-name">'  + item.name  + '</div>' +
      '<div class="strength-desc">'  + item.desc  + '</div>';
    grid.appendChild(el);
  });
}

/* ── 스킬 카드 렌더링 ──────────────────────── */
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;

  portfolioData.skills.forEach(function (skill, i) {
    const el = document.createElement('div');
    el.className = 'skill-card fade-up delay-' + Math.min((i % 4) + 1, 4);
    el.setAttribute('role', 'listitem');
    el.innerHTML =
      '<span class="skill-icon">' + skill.icon + '</span>' +
      '<div class="skill-name">'  + skill.name  + '</div>' +
      '<div class="skill-level">' + skill.level + '</div>';
    grid.appendChild(el);
  });
}

/* ── 프로젝트 카드 렌더링 ───────────────────── */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  portfolioData.projects.forEach(function (project, i) {
    // 태그 HTML
    const tagsHtml = project.tags
      .map(function (t) { return '<span class="project-tag">' + t + '</span>'; })
      .join('');

    const el = document.createElement('div');
    el.className = 'project-card fade-up delay-' + Math.min((i % 3) + 1, 4);

    el.innerHTML =
      '<div class="project-number">PROJECT ' + String(i + 1).padStart(2, '0') + '</div>' +
      '<div class="project-title">'  + project.title + '</div>' +
      '<div class="project-desc">'   + project.desc  + '</div>' +
      '<div class="project-tags">'   + tagsHtml       + '</div>' +
      '<div class="project-footer">' +
        '<a href="' + project.githubUrl + '" target="_blank" rel="noopener noreferrer" class="project-btn">' +
          '🐙 GitHub' +
        '</a>' +
      '</div>';

    grid.appendChild(el);
  });
}

/* ── 연락처 렌더링 ─────────────────────────── */
function renderContacts() {
  const list = document.getElementById('contactList');
  if (!list) return;

  portfolioData.contacts.forEach(function (c, i) {
    const el = document.createElement('a');
    el.href  = c.href;
    el.className = 'contact-item fade-up delay-' + Math.min(i + 1, 4);

    // 이메일이 아닌 경우 새 탭에서 열기
    if (!c.href.startsWith('mailto:')) {
      el.target = '_blank';
      el.rel    = 'noopener noreferrer';
    }

    el.innerHTML =
      '<div class="contact-icon-box">' + c.icon + '</div>' +
      '<div>' +
        '<div class="contact-label">' + c.label + '</div>' +
        '<div class="contact-value">' + c.value + '</div>' +
      '</div>';

    list.appendChild(el);
  });
}

/* ── Hero 섹션 페이드인 트리거 ──────────────── */
function triggerHeroFade() {
  const targets = document.querySelectorAll('.hero .fade-up');
  targets.forEach(function (el, i) {
    setTimeout(function () {
      el.classList.add('visible');
    }, i * 150);
  });
}

/* ── 초기화 ─────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  // 데이터 렌더링
  renderStrengths();
  renderSkills();
  renderProjects();
  renderContacts();

  // 애니메이션 초기화
  initFadeIn();

  // Hero 요소에 fade-up 클래스 부여 후 즉시 실행
  document.querySelectorAll('.hero-eyebrow, .hero-name, .hero-role, .hero-desc, .hero-btns, .hero-photo-wrap')
    .forEach(function (el) { el.classList.add('fade-up'); });
  triggerHeroFade();
});
