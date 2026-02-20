/* ============================================================
   포트폴리오 메인 자바스크립트 — main.js
   (이모지 제거 버전)
============================================================ */

const portfolioData = {

  strengths: [
    { name: "사용자 중심", desc: "사용 흐름을 먼저 정리하고 기능을 설계합니다." },
    { name: "협업", desc: "기록과 공유를 통해 팀과 정보를 맞춥니다." },
    { name: "문제 해결", desc: "재현 → 원인 분석 → 해결 순서로 접근합니다." },
    { name: "코드 품질", desc: "읽기 쉬운 구조와 일관된 코드를 지향합니다." },
    { name: "학습", desc: "배운 내용은 프로젝트에 바로 적용해봅니다." },
    { name: "책임감", desc: "맡은 기능은 끝까지 구현하고 정리합니다." },
  ],

  skills: [
    { name: "HTML", level: "주로 사용" },
    { name: "CSS", level: "주로 사용" },
    { name: "JavaScript", level: "주로 사용" },
    { name: "Java", level: "주로 사용" },
    { name: "Spring Boot", level: "주로 사용" },
    { name: "SQL", level: "사용 경험" },
    { name: "Python", level: "사용 경험" },
    { name: "Git", level: "주로 사용" },
  ],

  projects: [
    {
      title: "쇼핑 추천 챗봇",
      desc: "사용자 대화를 기반으로 추천 조건을 생성하고, 네이버 쇼핑 API를 통해 상품을 조회하는 백엔드 시스템을 구현했습니다.",
      tags: ["Java", "Spring Boot", "OpenAI", "SQL"],
      githubUrl: "https://github.com/lshasd610-del/recommendation-backend",
    }
  ],

  contacts: [
    {
      label: "GitHub",
      value: "github.com/lshasd610-del",
      href: "https://github.com/lshasd610-del",
    },
    {
      label: "Email",
      value: "your@email.com",
      href: "mailto:your@email.com",
    }
  ]
};


/* ── 강점 렌더링 ───────────────── */
function renderStrengths() {

  const grid = document.getElementById('strengthsGrid');
  if (!grid) return;

  portfolioData.strengths.forEach(function (item) {

    const el = document.createElement('div');

    el.className = 'strength-card';

    el.innerHTML =
      '<div class="strength-name">' + item.name + '</div>' +
      '<div class="strength-desc">' + item.desc + '</div>';

    grid.appendChild(el);

  });

}


/* ── 스킬 렌더링 ───────────────── */
function renderSkills() {

  const grid = document.getElementById('skillsGrid');
  if (!grid) return;

  portfolioData.skills.forEach(function (skill) {

    const el = document.createElement('div');

    el.className = 'skill-card';

    el.innerHTML =
      '<div class="skill-name">' + skill.name + '</div>' +
      '<div class="skill-level">' + skill.level + '</div>';

    grid.appendChild(el);

  });

}


/* ── 프로젝트 렌더링 ───────────── */
function renderProjects() {

  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  portfolioData.projects.forEach(function (project, i) {

    const tagsHtml = project.tags
      .map(tag => '<span class="project-tag">' + tag + '</span>')
      .join('');

    const el = document.createElement('div');

    el.className = 'project-card';

    el.innerHTML =

      '<div class="project-number">PROJECT ' + String(i + 1).padStart(2, '0') + '</div>' +

      '<div class="project-title">' + project.title + '</div>' +

      '<div class="project-desc">' + project.desc + '</div>' +

      '<div class="project-tags">' + tagsHtml + '</div>' +

      '<div class="project-footer">' +

      '<a href="' + project.githubUrl + '" target="_blank" class="project-btn">GitHub</a>' +

      '</div>';

    grid.appendChild(el);

  });

}


/* ── 연락처 렌더링 ───────────── */
function renderContacts() {

  const list = document.getElementById('contactList');
  if (!list) return;

  portfolioData.contacts.forEach(function (c) {

    const el = document.createElement('a');

    el.href = c.href;

    el.className = 'contact-item';

    if (!c.href.startsWith('mailto:')) {

      el.target = '_blank';

    }

    el.innerHTML =

      '<div>' +

      '<div class="contact-label">' + c.label + '</div>' +

      '<div class="contact-value">' + c.value + '</div>' +

      '</div>';

    list.appendChild(el);

  });

}


/* ── 실행 ───────────── */

document.addEventListener('DOMContentLoaded', function () {

  renderStrengths();

  renderSkills();

  renderProjects();

  renderContacts();

});