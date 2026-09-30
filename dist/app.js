const cases = {
  ccb: {
    title: 'CCB BI', kicker: 'DADOS / APLICAÇÃO LOCAL',
    intro: 'Do registro semanal a indicadores capazes de revelar tendências.',
    description: 'Aplicação Flask e SQLite que digitaliza formulários e reúne indicadores em um painel. Computadores e celulares na mesma rede acessam o sistema por link ou QR code.',
    points: ['Operação cotidiana offline, com dados armazenados localmente.', 'No recorte demonstrado, o painel consolida 28 reuniões, 2.607 recitativos e 126 visitas.', 'Filtros por período, presidência e localidade, com comparativos e evolução temporal.'],
    status: 'Os números exibidos no portfólio são agregados de um período demonstrativo; nenhuma base individual é publicada.',
    repo: 'BI-CCB-Young-Congregation'
  },
  fingerprint: {
    title: 'Standalone Fingerprint Key', kicker: 'HARDWARE / FIRMWARE / MODELAGEM 3D',
    intro: 'Uma chave biométrica independente para macOS.',
    description: 'O ESP32-S3 conversa com um sensor HLK-ZW111 e se apresenta ao computador como um teclado USB. Após uma correspondência biométrica, digita um segredo configurado localmente.',
    points: ['Protocolo UART separado do firmware, com testes de framing e checksum.', 'Gabinete paramétrico de 46,4 × 46,4 × 13 mm, em duas peças.', 'Documentação de montagem, testes de bancada e limitações de segurança.'],
    status: 'Projeto experimental. Não equivale a Touch ID ou a uma chave FIDO2; o segredo digitado exige cuidados descritos no repositório.',
    repo: 'Standalone-Fingerprint-Key'
  },
  jarvis: {
    title: 'J.A.R.V.I.S.', kicker: 'IA LOCAL / ASSISTENTE DE VOZ',
    intro: 'Um assistente pessoal que conversa em português, no próprio computador.',
    description: 'Reconhecimento de voz, conversação via Ollama e organização de informações profissionais, com interface visual de estado e integração com a barra de menus do macOS.',
    points: ['Ativação por palavra-chave ou duas palmas, com reconhecimento local.', 'Perfil profissional estruturado com procedência dos fatos.', 'Adaptadores de sites com prévia das alterações antes da confirmação.'],
    status: 'Em desenvolvimento. A gestão completa de candidaturas continua em evolução.',
    repo: 'JARVIS-Assistant'
  },
  lyrics: {
    title: 'Language Lyrics Lab', kicker: 'APLICAÇÃO / MÚSICA / IDIOMAS',
    intro: 'Um laboratório para estudar idiomas através de letras de músicas.',
    description: 'Aplicação Expo para web e iOS com letras sincronizadas, traduções para português e modos de revisão. O estudo acontece linha por linha, com vocabulário transformado em flashcards.',
    points: ['Interface compartilhada com React Native e React Native Web.', 'Adaptador para letras sincronizadas via LRCLIB.', 'Tradução opcional com LibreTranslate e catálogo de exemplo.'],
    status: 'Protótipo em desenvolvimento. Integrações e conteúdo de áudio dependem das fontes e licenças aplicáveis.',
    repo: 'Language-Lyrics-Lab'
  },
  churn: {
    title: 'TechGrow / Churn', kicker: 'CIÊNCIA DE DADOS / MACHINE LEARNING',
    intro: 'Investigar os sinais que antecedem o cancelamento de clientes.',
    description: 'Estudo de churn em SaaS com análise exploratória, preparação de dados e comparação de modelos preditivos. O objetivo é conectar padrões de uso a decisões de Produto e Customer Success.',
    points: ['Exploração de variáveis e comportamento de clientes com Pandas.', 'Comparação de Regressão Logística, Random Forest e XGBoost.', 'Interpretação de características e discussão dos resultados.'],
    status: 'Projeto de estudo. Os resultados se referem ao conjunto de dados analisado, não a métricas de uma operação real.',
    repo: 'SAAS-Churn-Analysis-Techgrow'
  },
  n8n: {
    title: 'Ollama + n8n', kicker: 'AUTOMAÇÃO / DOCUMENTOS / IA',
    intro: 'Conectar documentos e inteligência artificial em um fluxo local.',
    description: 'Ambiente com n8n e PostgreSQL em Docker que integra arquivos do Google Drive ou OneDrive à inferência do Ollama. O fluxo organiza leitura, processamento e encaminhamento das respostas.',
    points: ['Orquestração visual com um workflow exportável do n8n.', 'Processamento pelo modelo local através da API do Ollama.', 'Serviços definidos em Docker Compose para reproduzir o ambiente.'],
    status: 'Integração experimental. A inferência é local; os conectores de armazenamento utilizam seus respectivos serviços.',
    repo: 'Ollama-AI-Automation-n8n'
  }
};

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
  menuButton.querySelector('img').src = 'assets/icons/menu.svg';
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
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
    document.querySelector('#filter-count').textContent = `${String(count).padStart(2, '0')} ${count === 1 ? 'PROJETO' : 'PROJETOS'}`;
  });
});

const dialog = document.querySelector('.case-dialog');
let dialogTrigger;
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = cases[button.dataset.project];
    if (!project) return;
    dialogTrigger = button;
    for (const [id, value] of Object.entries({title: project.title, kicker: project.kicker, intro: project.intro, description: project.description, status: project.status})) {
      document.querySelector(`#case-${id}`).textContent = value;
    }
    document.querySelector('#case-points').replaceChildren(...project.points.map(point => {
      const li = document.createElement('li');
      li.textContent = point;
      return li;
    }));
    document.querySelector('#case-repo').href = `https://github.com/nicholasbirochi/${project.repo}`;
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

document.querySelectorAll('.copy-contact').forEach(button => {
  button.addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    const icon = button.querySelector('img');
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      status.textContent = button.dataset.label;
      icon.src = 'assets/icons/check.svg';
      window.setTimeout(() => {
        status.textContent = '';
        icon.src = 'assets/icons/plus.svg';
      }, 2200);
    } catch {
      status.textContent = button.dataset.copy;
    }
  });
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
