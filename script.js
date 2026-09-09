const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');
const projectsGrid = document.querySelector('#projects-grid');

const projects = [
  {
    title: 'System-PITE',
    category: 'Colaborativo',
    imageClass: 'project-image-pite',
    image: 'image/pyte.png',
    imageAlt: 'Interface do projeto System-PITE',
    label: 'System-PITE',
    description: 'Plataforma de gestão pública para o turismo municipal, com portal para turistas, empreendedores e administração.',
    detail: 'Inclui roteiros personalizados, acessibilidade, geolocalização, indicadores ESG, painéis de gestão e controle de estabelecimentos.',
    technologies: 'Laravel · PHP · PostgreSQL · Docker',
    link: 'https://github.com/MiguelSouza0/System-PITE',
    linkLabel: 'Ver projeto ↗',
    featured: true,
  },
  {
    title: 'Slepy',
    category: 'Pessoal',
    imageClass: 'project-image-slepy',
    image: 'image/slepyIcon.png',
    imageAlt: 'Interface do bot Slepy no Discord',
    label: 'SLEPY',
    description: 'Bot de produtividade para Discord feito para transformar tempo de foco em progresso.',
    detail: 'Possui sessões de foco, Pomodoro, comandos Slash, perfil com minutos acumulados, badges e persistência em SQLite, organizado em Cogs.',
    technologies: 'Python · discord.py · asyncio · SQLite',
    link: 'https://github.com/JulioKennedyy/Slepy',
    linkLabel: 'Ver projeto ↗',
  },
  {
    title: 'SportHub',
    category: 'Acadêmico',
    imageClass: 'project-image-sport',
    label: 'SPORT<br>HUB',
    description: 'Aplicação web para gerenciamento e reserva de quadras esportivas.',
    detail: 'O projeto trabalha o fluxo de reservas, regras de negócio, uma API REST em Spring Boot e uma interface responsiva em React.',
    technologies: 'Java · Spring Boot · React',
    linkLabel: 'Projeto acadêmico',
  },
  {
    title: 'Mais projetos',
    category: 'Estudos',
    imageClass: 'project-image-lab',
    label: 'LAB<br>/ WEB',
    description: 'Experimentos que fizeram parte do meu aprendizado.',
    detail: 'link-em-QrCode explora bibliotecas Python para transformar links em QR Codes. Snake-game recria o jogo da cobrinha com HTML, CSS e JavaScript.',
    technologies: 'Python · HTML · CSS · JavaScript',
    link: 'https://github.com/JulioKennedyy',
    linkLabel: 'GitHub ↗',
  },
];

projectsGrid.innerHTML = projects.map((project, index) => `
  <article class="project-card${project.featured ? ' project-featured' : ''} reveal">
    <div class="project-image ${project.imageClass}">
      ${project.image ? `<img src="${project.image}" alt="${project.imageAlt}">` : ''}
      <span>${project.label}</span>
    </div>
    <div class="project-top"><span>${String(index + 1).padStart(2, '0')} / ${project.category}</span><span class="project-arrow">↗</span></div>
    <div><h3>${project.title}</h3><p>${project.description}</p><p class="project-detail">${project.detail}</p></div>
    <div class="project-bottom"><span>${project.technologies}</span>${project.link ? `<a href="${project.link}" target="_blank" rel="noreferrer">${project.linkLabel}</a>` : `<span>${project.linkLabel}</span>`}</div>
  </article>
`).join('');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? 'Fechar' : 'Menu';
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = 'Menu';
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
