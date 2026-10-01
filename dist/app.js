const cases = {
  ccb: {
    title: 'CCB BI', kicker: 'DADOS / APLICAÇÃO LOCAL',
    intro: 'Do registro semanal a indicadores capazes de revelar tendências.',
    description: 'Aplicação Flask e SQLite que digitaliza formulários e reúne indicadores em um painel. Computadores e celulares na mesma rede acessam o sistema por link ou QR code.',
    points: ['Operação cotidiana offline, com dados armazenados localmente.', 'No recorte demonstrado, o painel consolida 28 reuniões, 2.607 recitativos, 197 registros individuais e 126 visitas.', 'Filtros por período, presidência e localidade, com comparativos e evolução temporal.'],
    status: 'Os números exibidos no portfólio são agregados de um período demonstrativo; nenhuma base individual é publicada.',
    url: 'https://github.com/nicholasbirochi/BI-CCB-Young-Congregation'
  },
  ronda: {
    title: 'Análise Comportamental', kicker: 'DADOS / DASHBOARD CORPORATIVO',
    intro: 'Transformar registros operacionais em uma leitura semanal clara.',
    description: 'Dashboard em Dash e Plotly para analisar presença, recorrência e co-presença, com visões por período, área e pessoa. A arquitetura combina Parquet, SQLite e cache para manter a navegação rápida.',
    points: ['Filtros dinâmicos e carregamento progressivo dos gráficos.', 'Séries semanais, distribuições, boxplots, indicadores e mapas de co-presença.', 'Exportação de relatórios e separação em camadas MVC e serviços.'],
    status: 'Projeto interno. O portfólio mostra uma reprodução demonstrativa baseada nos gráficos reais; nenhum dado corporativo, nome ou identificador foi publicado.'
  },
  jarvis: {
    title: 'J.A.R.V.I.S.', kicker: 'IA LOCAL / ASSISTENTE DE VOZ',
    intro: 'Um assistente pessoal que conversa em português, no próprio computador.',
    description: 'Reconhecimento de voz, conversação via Ollama e organização de informações profissionais, com interface visual de estado e integração com a barra de menus do macOS.',
    points: ['Ativação por palavra-chave ou duas palmas, com reconhecimento local.', 'Perfil profissional estruturado com procedência dos fatos.', 'Adaptadores de sites com prévia das alterações antes da confirmação.'],
    status: 'Em desenvolvimento. A gestão completa de candidaturas continua em evolução.',
    url: 'https://github.com/nicholasbirochi/JARVIS-Assistant'
  },
  ias: {
    title: 'IA Local + Automação', kicker: 'IA / DOCUMENTOS / ORQUESTRAÇÃO',
    intro: 'Documentos entram; análises e respostas saem sem depender de uma IA em nuvem.',
    description: 'Pipeline auto-hospedado que conecta arquivos do Google Drive ou OneDrive ao Ollama, usando n8n para coordenar ingestão, processamento e entrega dos resultados.',
    points: ['n8n e PostgreSQL executados em contêineres Docker.', 'Inferência local via API do Ollama, mantendo o processamento na máquina.', 'Workflow importável e preparado para diferentes destinos de resposta.'],
    status: 'Integração experimental. Credenciais e documentos reais permanecem fora do repositório.',
    url: 'https://github.com/nicholasbirochi/Ollama-AI-Automation-n8n'
  },
  petshop: {
    title: 'Petshop E-Commerce', kicker: 'JAVA / SPRING MVC / E-COMMERCE',
    intro: 'Uma experiência completa de compra, da vitrine à gestão do pedido.',
    description: 'Aplicação web colaborativa construída com Spring Boot MVC e Thymeleaf. Reúne catálogo, carrinho persistido, autenticação, pedidos e administração de produtos.',
    points: ['Backend em Java 21 com Spring Data JPA e PostgreSQL.', 'Perfis USER e ADMIN com proteção de rotas por anotações AOP.', 'Upload de imagens, CRUD de produtos, histórico de pedidos e interface responsiva.'],
    status: 'Projeto acadêmico colaborativo desenvolvido por Nicholas Birochi, Henrico Birochi, Vítor Braghittoni, Edgar Ribeiro e Vinicius Yamaguti.',
    url: 'https://github.com/HenricoBirochi/Petshop-Spring-MVC'
  },
  fingerprint: {
    title: 'Standalone Fingerprint Key', kicker: 'HARDWARE / FIRMWARE / MODELAGEM 3D',
    intro: 'Uma chave biométrica independente para macOS.',
    description: 'O ESP32-S3 conversa com um sensor HLK-ZW111 e se apresenta ao computador como um teclado USB. Após uma correspondência biométrica, digita um segredo configurado localmente.',
    points: ['Protocolo UART separado do firmware, com testes de framing e checksum.', 'Gabinete paramétrico de 46,4 × 46,4 × 13 mm, em duas peças.', 'Documentação de montagem, testes de bancada e limitações de segurança.'],
    status: 'Projeto experimental. Não equivale a Touch ID ou a uma chave FIDO2; o segredo digitado exige cuidados descritos no repositório.',
    url: 'https://github.com/nicholasbirochi/Standalone-Fingerprint-Key'
  }
};

const caseCopyEn = {
  ccb: {
    title: 'CCB BI', kicker: 'DATA / LOCAL APPLICATION',
    intro: 'From weekly records to indicators that reveal trends.',
    description: 'A Flask and SQLite application that digitizes forms and brings indicators together in one dashboard. Computers and phones on the same network can access it through a link or QR code.',
    points: ['Offline day-to-day operation with data stored locally.', 'In the featured period, the dashboard consolidates 28 meetings, 2,607 recitals, 197 individual records and 126 visits.', 'Filters by period, coordinator and location, with comparisons and trend analysis.'],
    status: 'The portfolio only displays aggregated figures from a demonstration period; no individual-level database is published.'
  },
  ronda: {
    title: 'Behavioral Analysis', kicker: 'DATA / CORPORATE DASHBOARD',
    intro: 'Turning operational records into a clear weekly view.',
    description: 'A Dash and Plotly dashboard for attendance, recurrence and co-presence analysis, with views by period, area and person. Its architecture combines Parquet, SQLite and caching for responsive navigation.',
    points: ['Dynamic filters and progressive chart loading.', 'Weekly series, distributions, box plots, indicators and co-presence maps.', 'Report export and a layered MVC and services architecture.'],
    status: 'Internal project. The portfolio uses a demonstrative reproduction based on the real charts; no corporate data, names or identifiers are published.'
  },
  jarvis: {
    title: 'J.A.R.V.I.S.', kicker: 'LOCAL AI / VOICE ASSISTANT',
    intro: 'A personal assistant that speaks Portuguese and runs on the computer itself.',
    description: 'Voice recognition, Ollama-powered conversation and structured professional information, with a visual status interface and macOS menu bar integration.',
    points: ['Wake-word or double-clap activation with local recognition.', 'A structured professional profile with fact provenance.', 'Website adapters with a preview before any change is confirmed.'],
    status: 'In development. Full application management remains under active development.'
  },
  ias: {
    title: 'Local AI + Automation', kicker: 'AI / DOCUMENTS / ORCHESTRATION',
    intro: 'Documents go in; analyses and answers come out without relying on cloud AI.',
    description: 'A self-hosted pipeline that connects Google Drive or OneDrive files to Ollama, using n8n to coordinate ingestion, processing and result delivery.',
    points: ['n8n and PostgreSQL running in Docker containers.', 'Local inference through the Ollama API, keeping processing on the machine.', 'An importable workflow prepared for different response destinations.'],
    status: 'Experimental integration. Credentials and real documents remain outside the repository.'
  },
  petshop: {
    title: 'Petshop E-Commerce', kicker: 'JAVA / SPRING MVC / E-COMMERCE',
    intro: 'A complete shopping experience, from storefront to order management.',
    description: 'A collaborative web application built with Spring Boot MVC and Thymeleaf. It combines a catalog, persistent cart, authentication, orders and product administration.',
    points: ['Java 21 backend with Spring Data JPA and PostgreSQL.', 'USER and ADMIN roles with annotation-based AOP route protection.', 'Image upload, product CRUD, order history and a responsive interface.'],
    status: 'Collaborative academic project developed by Nicholas Birochi, Henrico Birochi, Vítor Braghittoni, Edgar Ribeiro and Vinicius Yamaguti.'
  },
  fingerprint: {
    title: 'Standalone Fingerprint Key', kicker: 'HARDWARE / FIRMWARE / 3D MODELING',
    intro: 'An independent biometric key for macOS.',
    description: 'The ESP32-S3 communicates with an HLK-ZW111 sensor and presents itself to the computer as a USB keyboard. After a biometric match, it types a locally configured secret.',
    points: ['UART protocol separated from firmware, with framing and checksum tests.', 'A two-part, parametric 46.4 × 46.4 × 13 mm enclosure.', 'Assembly documentation, bench testing and clearly stated security limitations.'],
    status: 'Experimental project. It is not equivalent to Touch ID or a FIDO2 key; typing a secret requires the safeguards documented in the repository.'
  }
};

const englishCopy = {
  skip: 'Skip to projects', headerNote: 'DATA & DEVELOPMENT', navProjects: 'Projects', navAbout: 'About', navJourney: 'Journey', navContact: 'Let\'s talk',
  heroLabel: 'PERSONAL PORTFOLIO / 2026', heroLead: 'Data, code<br>& curiosity.', heroCopy: 'I turn problems into analyses,<br>automations and applications.', heroCta: 'Explore my work', heroCourse: 'COMPUTER ENGINEERING',
  fieldData: 'DATA ANALYSIS', fieldDev: 'DEVELOPMENT', fieldAi: 'AUTOMATION & AI', workEyebrow: '01 / SELECTED WORK', workQuiet: 'From insight to prototype.', workTitle: 'IDEAS THAT<br><em>TAKE SHAPE.</em>', workIntro: 'A selection of what I have been building across data, software and experimentation.',
  filterAll: 'All', filterData: 'Data', filterAi: 'AI & automation', allGithub: 'All on GitHub', ccbDescription: 'From records to diagnosis: forms, filters and analyses supporting decisions in a local application.', rondaTitle: 'Behavioral Analysis', rondaDescription: 'Attendance, co-presence and weekly trend dashboards with filters, caching and report exports.', jarvisDescription: 'A local multimodal assistant with voice, structured professional memory and supervised automations.', iasTitle: 'Local AI + Automation', iasDescription: 'A self-hosted pipeline that turns documents into analyses and answers using local AI.', petshopDescription: 'A complete store with catalog, cart, orders, authentication, access roles and an administration panel.', fingerprintDescription: 'A biometric key for macOS: electronics, protocol, firmware and a parametric enclosure in one product.',
  numberRepos: 'public repositories', numberFields: 'areas of practice', numberEnglish: 'certified English', numberGraduation: 'expected graduation',
  aboutEyebrow: '02 / A LITTLE ABOUT ME', aboutQuiet: 'Beyond the code.', aboutTitle: 'CURIOUS BY<br><em>NATURE.</em><br>INNOVATIVE<br><em>BY CHOICE.</em>', aboutP1: 'I am Nicholas, a Computer Engineering student at Faculdade Engenheiro Salvador Arena and a Data Analytics intern at Volkswagen do Brasil.', aboutP2: 'My work connects data and development: understanding a problem, finding patterns and creating solutions that help someone decide or work better.', aboutP3: 'That curiosity also drives my personal projects. I explore local AI, web applications, music and hardware while turning ideas into useful experiences.', aboutLinkedin: 'More about me on LinkedIn', skillData: 'Data & analytics', skillAi: 'Automation & AI', skillExperiment: 'Experimentation',
  journeyEyebrow: '03 / JOURNEY', journeyQuiet: 'Learning and practice in motion.', journeyTitle: 'TWO PATHS.<br><em>ONE EVOLUTION.</em>', journeyIntro: 'Education and experience move forward together: what I learn becomes practice, and every professional challenge guides the next subject I study.', learning: 'Learning', professional: 'Professional',
  learning2023Tag: 'EDUCATION + LANGUAGE', learning2023Title: 'Computer Engineering & Cambridge B2', learning2023Body: 'Started Computer Engineering at Faculdade Engenheiro Salvador Arena and earned B2 First certification with a score of 153.', work2023Title: 'Data Analytics Intern', work2023Body: 'Spreadsheet automation, data analysis and internal reporting improvements using Excel and VBA.',
  learning2024Tag: 'ANALYTICAL FOUNDATION', learning2024Title: 'Python, R, Power BI & Machine Learning', learning2024Body: 'Courses and projects in statistics, modeling, data science and a 40-hour Power BI elective.', work2024Title: 'More reliable processes', work2024Body: 'Automation and workflow reviews helped improve the accuracy of internal reports.',
  learning2025Tag: 'SOFTWARE + AUTOMATION', learning2025Title: 'Clean Code, n8n & local AI', learning2025Body: 'Deeper work in Python, Power Automate, AI agents and self-hosted solutions.', current: 'CURRENT', work2025Title: 'Data Analytics Intern', work2025Body: 'Python and Power BI dashboards, SAP data analysis and local AI supporting Special Audit.',
  learning2026Tag: 'APPLIED SPECIALIZATION', learning2026Title: 'AI for data, SAP & audit', learning2026Body: 'Continuous education in data science, enterprise tools and the VW SAM Region Internal Audit Workshop.', work2026Tag: 'ROLE EVOLUTION', work2026Title: 'Analytical solutions in production', work2026Body: 'Progress toward projects involving architecture, caching, reports, anomaly detection and AI-assisted documentation.',
  planned: 'PLANNED', learning2027Title: 'Graduation', learning2027Body: 'Computer Engineering degree expected in December 2027.', goal: 'GOAL', work2027Title: 'Next step: Junior Data Analyst', work2027Body: 'The desired progression after the internship, combining hands-on experience, education and technical autonomy.',
  recommendationEyebrow: 'PROFESSIONAL RECOMMENDATIONS', recommendationQuiet: 'Perspectives from people who trust my work.', quoteHenrico: 'I recommend Nicholas for his curiosity, dedication and ability to turn problems into practical solutions. He learns quickly, communicates well and takes every project seriously.', quoteEdgar: 'A longtime friend, always willing to put in the work and deliver the product.', quoteVitor: 'I followed Nicholas throughout the development of the church project (CCB-BI). He knew how to listen, evolve the solution and turn a real need into a clear, useful and well-built tool.', quoteEduardo: 'I recommend Nicholas for his dedication and willingness to understand the area\'s needs, contributing disruptive ideas and solutions that demonstrate future-oriented thinking.', linkedinRecommendation: 'Recommendation via LinkedIn', connections: 'PROFESSIONAL CONNECTIONS', newRecommendations: 'More recommendations coming soon.',
  contactEyebrow: '04 / CONTACT', contactQuiet: 'A CONVERSATION CAN BE THE BEGINNING.', contactTitle: 'LET\'S<br>TALK?', contactIntro: 'I am open to opportunities, collaborations and projects in data, automation, local AI and software development.', formTitle: 'WRITE YOUR MESSAGE', formEmail: 'YOUR EMAIL', formSubject: 'SUBJECT', formMessage: 'MESSAGE', formSubmit: 'PREPARE EMAIL', location: 'São Bernardo do Campo, SP · Brazil', availability: 'Available to discuss new challenges', backTop: 'Back to top',
  caseProject: 'The project', caseDecisions: 'Technical decisions', caseGithub: 'Explore on GitHub'
};

const englishPlaceholders = {formEmailPlaceholder: 'you@company.com', formSubjectPlaceholder: 'About an opportunity', formMessagePlaceholder: 'Briefly tell me how I can help.'};
const originalCopy = new Map([...document.querySelectorAll('[data-i18n]')].map(element => [element.dataset.i18n, element.innerHTML]));
const originalPlaceholders = new Map([...document.querySelectorAll('[data-i18n-placeholder]')].map(element => [element.dataset.i18nPlaceholder, element.placeholder]));
let currentLanguage = 'pt';
let activeProjectKey = null;

function setLanguage(language, persist = true) {
  currentLanguage = language === 'en' ? 'en' : 'pt';
  document.documentElement.lang = currentLanguage === 'en' ? 'en' : 'pt-BR';
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    element.innerHTML = currentLanguage === 'en' && englishCopy[key] ? englishCopy[key] : originalCopy.get(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.dataset.i18nPlaceholder;
    element.placeholder = currentLanguage === 'en' ? englishPlaceholders[key] : originalPlaceholders.get(key);
  });
  document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === currentLanguage)));
  document.title = currentLanguage === 'en' ? 'Nicholas Birochi | Data, code & curiosity' : 'Nicholas Birochi | Dados, código & curiosidade';
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = currentLanguage === 'en' ? 'Nicholas Birochi. Data, development and automation. Explore my projects in BI, local AI, software and hardware.' : 'Nicholas Birochi. Dados, desenvolvimento e automação. Conheça meus projetos em BI, inteligência artificial local, software e hardware.';
  const visibleCount = projects.filter(project => !project.hidden).length;
  updateFilterStatus(visibleCount);
  if (document.querySelector('.case-dialog')?.open && activeProjectKey) renderCase(activeProjectKey);
  closeMenu();
  if (persist) {
    try { localStorage.setItem('portfolio-language', currentLanguage); } catch {}
  }
}

function updateFilterStatus(count) {
  const status = document.querySelector('#filter-status');
  if (!status) return;
  status.textContent = currentLanguage === 'en' ? `${count} visible ${count === 1 ? 'project' : 'projects'}` : `${count} ${count === 1 ? 'projeto visível' : 'projetos visíveis'}`;
}

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  const label = currentLanguage === 'en' ? 'Open menu' : 'Abrir menu';
  menuButton.setAttribute('aria-label', label);
  menuButton.title = label;
  menuButton.querySelector('img').src = 'assets/icons/menu.svg';
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  const label = currentLanguage === 'en' ? (open ? 'Close menu' : 'Open menu') : (open ? 'Fechar menu' : 'Abrir menu');
  menuButton.setAttribute('aria-label', label);
  menuButton.title = label;
  menuButton.querySelector('img').src = `assets/icons/${open ? 'x' : 'menu'}.svg`;
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header')) closeMenu();
});
window.matchMedia('(min-width: 641px)').addEventListener('change', closeMenu);

const projects = [...document.querySelectorAll('.project')];
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    projects.forEach(project => {
      project.hidden = filter !== 'all' && !project.dataset.category.split(' ').includes(filter);
    });
    const count = projects.filter(project => !project.hidden).length;
    updateFilterStatus(count);
  });
});

const dialog = document.querySelector('.case-dialog');
let dialogTrigger;
function renderCase(key) {
  const project = cases[key];
  if (!project) return;
  const copy = currentLanguage === 'en' ? {...project, ...caseCopyEn[key]} : project;
  for (const [id, value] of Object.entries({title: copy.title, kicker: copy.kicker, intro: copy.intro, description: copy.description, status: copy.status})) {
    document.querySelector(`#case-${id}`).textContent = value;
  }
  document.querySelector('#case-points').replaceChildren(...copy.points.map(point => {
    const li = document.createElement('li');
    li.textContent = point;
    return li;
  }));
  const repoLink = document.querySelector('#case-repo');
  repoLink.hidden = !project.url;
  if (project.url) repoLink.href = project.url;
  else repoLink.removeAttribute('href');
}
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    if (!cases[button.dataset.project]) return;
    dialogTrigger = button;
    activeProjectKey = button.dataset.project;
    renderCase(activeProjectKey);
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('modal-open');
    document.querySelector('.dialog-close').focus();
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  dialogTrigger?.focus({preventScroll: true});
});

document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
let savedLanguage = 'pt';
try { savedLanguage = localStorage.getItem('portfolio-language') || 'pt'; } catch {}
const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
setLanguage(requestedLanguage || savedLanguage, false);

document.querySelectorAll('.copy-contact').forEach(button => {
  button.addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    const icon = button.querySelector('img');
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      status.textContent = currentLanguage === 'en' ? 'Email copied' : button.dataset.label;
      icon.src = 'assets/icons/check.svg';
      window.setTimeout(() => {
        status.textContent = '';
        icon.src = 'assets/icons/copy.svg';
      }, 2200);
    } catch {
      status.textContent = button.dataset.copy;
    }
  });
});

const contactForm = document.querySelector('#contact-form');
contactForm?.addEventListener('submit', event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const data = new FormData(contactForm);
  const sender = String(data.get('from') || '').trim();
  const subject = String(data.get('subject') || '').trim();
  const message = String(data.get('message') || '').trim();
  const senderLabel = currentLanguage === 'en' ? 'Sender email' : 'E-mail para retorno';
  const body = `${message}\n\n${senderLabel}: ${sender}`;
  document.querySelector('#form-status').textContent = currentLanguage === 'en' ? 'Opening your email app…' : 'Abrindo seu aplicativo de e-mail…';
  window.location.href = `mailto:nicholas.birochi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

const jarvisVideo = document.querySelector('.jarvis-video');
const jarvisSound = document.querySelector('.jarvis-sound');
const jarvisTranscript = document.querySelector('.jarvis-transcript');
const jarvisLines = [
  [0, 'Olá, Nicholas. Sistemas locais ativos.'],
  [3.4, 'Posso organizar tarefas e consultar informações.'],
  [8.2, 'Inteligência artificial sem enviar seus dados para a nuvem.']
];

function updateJarvisTranscript() {
  const current = [...jarvisLines].reverse().find(([time]) => jarvisVideo.currentTime >= time);
  jarvisTranscript.textContent = current?.[1] || jarvisLines[0][1];
}

if (jarvisVideo && jarvisSound) {
  jarvisVideo.addEventListener('timeupdate', updateJarvisTranscript);
  jarvisVideo.addEventListener('ended', () => {
    jarvisVideo.muted = true;
    jarvisSound.setAttribute('aria-pressed', 'false');
    jarvisSound.setAttribute('aria-label', 'Ouvir a demonstração do JARVIS');
    jarvisSound.querySelector('img').src = 'assets/icons/volume-2.svg';
    jarvisSound.querySelector('span').textContent = 'OUVIR JARVIS';
    jarvisVideo.currentTime = 0;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) jarvisVideo.play().catch(() => {});
  });
  jarvisSound.addEventListener('click', async () => {
    const turnOn = jarvisVideo.muted;
    jarvisVideo.muted = !turnOn;
    jarvisSound.setAttribute('aria-pressed', String(turnOn));
    jarvisSound.setAttribute('aria-label', turnOn ? 'Silenciar a demonstração do JARVIS' : 'Ouvir a demonstração do JARVIS');
    jarvisSound.querySelector('img').src = `assets/icons/${turnOn ? 'volume-x' : 'volume-2'}.svg`;
    jarvisSound.querySelector('span').textContent = turnOn ? 'SILENCIAR' : 'OUVIR JARVIS';
    if (turnOn) jarvisVideo.currentTime = 0;
    try {
      await jarvisVideo.play();
    } catch {
      jarvisSound.querySelector('span').textContent = 'TOCAR VÍDEO';
    }
  });
}

// Progressive enhancement keeps all content visible without JavaScript or motion.
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (motion.matches) jarvisVideo?.pause();
if (!motion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.animate([{transform: 'translateY(18px)', opacity: .6}, {transform: 'translateY(0)', opacity: 1}], {duration: 650, easing: 'cubic-bezier(.22,.61,.36,1)'});
      observer.unobserve(entry.target);
    });
  }, {threshold: .08});
  document.querySelectorAll('.project, .about-grid, .timeline article').forEach(element => observer.observe(element));
}
