const cases = {
  ccb: {
    title: 'CCB BI', kicker: 'DADOS / APLICAÇÃO LOCAL',
    intro: 'Do registro semanal a indicadores capazes de revelar tendências.',
    description: 'Aplicação Flask e SQLite que digitaliza formulários e reúne indicadores em um painel. Computadores e celulares na mesma rede acessam o sistema por link ou QR code.',
    points: ['Operação cotidiana offline, com dados armazenados localmente.', 'No recorte demonstrado, o painel consolida 28 reuniões, 2.607 recitativos, 197 registros individuais e 126 visitas.', 'Filtros por período, presidência e localidade, com comparativos e evolução temporal.'],
    status: 'Os números exibidos no portfólio são agregados de um período demonstrativo; nenhuma base individual é publicada.',
    url: 'https://github.com/nicholasbirochi/BI-CCB-Young-Congregation'
  },
  behavior: {
    title: 'Análise Comportamental', kicker: 'DADOS / PAINEL SINTÉTICO',
    intro: 'Transformar padrões simulados em uma leitura semanal clara.',
    description: 'Painel demonstrativo em Dash e Plotly para analisar presença, recorrência e co-presença em cenários inteiramente fictícios. A arquitetura combina Parquet, SQLite e cache para manter a navegação rápida.',
    points: ['Filtros dinâmicos e carregamento progressivo dos gráficos.', 'Séries semanais, distribuições, boxplots, indicadores e mapas de co-presença.', 'Exportação de relatórios e separação em camadas MVC e serviços.'],
    status: 'Todos os valores, categorias e rótulos exibidos são fictícios e não derivam de qualquer base real.'
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

const journeyCases = {
  'learning-2027': {
    pt: {title: 'Conclusão da graduação', kicker: 'FORMAÇÃO / ENGENHARIA DA COMPUTAÇÃO', intro: 'Uma formação multidisciplinar conectada à prática.', description: 'Graduação em Engenharia da Computação na Faculdade Engenheiro Salvador Arena, com conclusão prevista para dezembro de 2027.', points: ['Fundamentos de software, eletrônica, dados, redes e sistemas embarcados.', 'Projetos acadêmicos aplicados a problemas concretos.', 'Aprendizado reforçado pela experiência profissional e pelos projetos pessoais.'], status: 'Formação em andamento · conclusão prevista para dezembro de 2027.'},
    en: {title: 'Expected graduation', kicker: 'EDUCATION / COMPUTER ENGINEERING', intro: 'A multidisciplinary education connected to hands-on practice.', description: 'Computer Engineering degree at Faculdade Engenheiro Salvador Arena, expected to be completed in December 2027.', points: ['Foundations in software, electronics, data, networks and embedded systems.', 'Academic projects applied to concrete problems.', 'Learning reinforced by professional experience and personal projects.'], status: 'In progress · expected completion in December 2027.'},
    es: {title: 'Finalización de la carrera', kicker: 'FORMACIÓN / INGENIERÍA INFORMÁTICA', intro: 'Una formación multidisciplinaria conectada con la práctica.', description: 'Carrera de Ingeniería Informática en la Faculdade Engenheiro Salvador Arena, con finalización prevista para diciembre de 2027.', points: ['Fundamentos de software, electrónica, datos, redes y sistemas embebidos.', 'Proyectos académicos aplicados a problemas concretos.', 'Aprendizaje reforzado por la experiencia profesional y los proyectos personales.'], status: 'Formación en curso · finalización prevista para diciembre de 2027.'}
  },
  'learning-2023': {
    pt: {title: 'Cambridge English B2', kicker: 'IDIOMAS / CERTIFICAÇÃO', intro: 'Proficiência comprovada para estudar, colaborar e comunicar em inglês.', description: 'Certificação Cambridge B2 First concluída em 2023 com score 153.', points: ['Leitura e compreensão de documentação técnica.', 'Comunicação escrita e conversação em contexto profissional.', 'Autonomia para acompanhar conteúdos e comunidades internacionais.'], status: 'Certificação concluída em 2023.'},
    en: {title: 'Cambridge English B2', kicker: 'LANGUAGES / CERTIFICATION', intro: 'Verified proficiency to study, collaborate and communicate in English.', description: 'Cambridge B2 First certification completed in 2023 with a score of 153.', points: ['Reading and understanding technical documentation.', 'Written communication and conversation in professional settings.', 'Independence when following international content and communities.'], status: 'Certification completed in 2023.'},
    es: {title: 'Cambridge English B2', kicker: 'IDIOMAS / CERTIFICACIÓN', intro: 'Dominio comprobado para estudiar, colaborar y comunicarse en inglés.', description: 'Certificación Cambridge B2 First completada en 2023 con una puntuación de 153.', points: ['Lectura y comprensión de documentación técnica.', 'Comunicación escrita y conversación en contextos profesionales.', 'Autonomía para seguir contenidos y comunidades internacionales.'], status: 'Certificación completada en 2023.'}
  },
  'professional-2027': {
    pt: {title: 'Próximo passo: Analista de Dados Júnior', kicker: 'OBJETIVO / DADOS', intro: 'Evoluir da prática supervisionada para maior autonomia técnica.', description: 'Próximo passo profissional desejado após o estágio, reunindo experiência prática, formação e responsabilidade sobre entregas de dados.', points: ['Condução de análises do problema à recomendação.', 'Construção e manutenção de produtos de dados confiáveis.', 'Colaboração próxima com áreas de negócio e tecnologia.'], status: 'Objetivo profissional; não representa uma posição atual.'},
    en: {title: 'Next step: Junior Data Analyst', kicker: 'GOAL / DATA', intro: 'Moving from supervised practice toward greater technical autonomy.', description: 'The desired next professional step after the internship, combining hands-on experience, education and ownership of data deliverables.', points: ['Taking analyses from problem framing to recommendation.', 'Building and maintaining reliable data products.', 'Working closely with business and technology teams.'], status: 'Professional goal; this is not a current position.'},
    es: {title: 'Próximo paso: Analista de Datos Junior', kicker: 'OBJETIVO / DATOS', intro: 'Evolucionar de la práctica supervisada hacia una mayor autonomía técnica.', description: 'El siguiente paso profesional deseado después de la pasantía, reuniendo experiencia práctica, formación y responsabilidad sobre entregas de datos.', points: ['Llevar análisis desde el planteamiento del problema hasta la recomendación.', 'Construir y mantener productos de datos confiables.', 'Colaborar de cerca con equipos de negocio y tecnología.'], status: 'Objetivo profesional; no representa un puesto actual.'}
  },
  'professional-2025': {
    pt: {title: 'Estagiário em Análise de Dados', kicker: 'EXPERIÊNCIA ATUAL / DADOS', intro: 'Dados e automação aplicados a desafios reais de auditoria.', description: 'Atuação com dashboards em Python e Power BI, análises de dados do SAP e experimentos de IA local para apoiar a Auditoria Especial.', points: ['Desenvolvimento de painéis e análises recorrentes.', 'Tratamento e exploração de dados para apoiar decisões.', 'Prototipação de automações e recursos de IA local.'], status: 'Experiência atual · desde 2025.'},
    en: {title: 'Data Analytics Intern', kicker: 'CURRENT EXPERIENCE / DATA', intro: 'Data and automation applied to real audit challenges.', description: 'Work involving Python and Power BI dashboards, SAP data analysis and local AI experiments supporting Special Audit.', points: ['Development of dashboards and recurring analyses.', 'Data preparation and exploration to support decisions.', 'Prototyping automation and local AI capabilities.'], status: 'Current experience · since 2025.'},
    es: {title: 'Pasante de Análisis de Datos', kicker: 'EXPERIENCIA ACTUAL / DATOS', intro: 'Datos y automatización aplicados a desafíos reales de auditoría.', description: 'Trabajo con paneles en Python y Power BI, análisis de datos de SAP y experimentos de IA local para apoyar a Auditoría Especial.', points: ['Desarrollo de paneles y análisis recurrentes.', 'Preparación y exploración de datos para apoyar decisiones.', 'Prototipado de automatizaciones y recursos de IA local.'], status: 'Experiencia actual · desde 2025.'}
  },
  'professional-2023': {
    pt: {title: 'Estagiário em Análise de Dados', kicker: 'EXPERIÊNCIA / AUTOMAÇÃO', intro: 'O início profissional transformando rotinas manuais em fluxos melhores.', description: 'Experiência com automação de planilhas, análise de dados e melhoria de relatórios internos usando Excel e VBA.', points: ['Automação de tarefas repetitivas em planilhas.', 'Organização e análise de informações operacionais.', 'Evolução de relatórios para facilitar leitura e acompanhamento.'], status: 'Experiência iniciada em 2023.'},
    en: {title: 'Data Analytics Intern', kicker: 'EXPERIENCE / AUTOMATION', intro: 'The professional starting point: turning manual routines into better workflows.', description: 'Experience with spreadsheet automation, data analysis and internal reporting improvements using Excel and VBA.', points: ['Automation of repetitive spreadsheet tasks.', 'Organization and analysis of operational information.', 'Report improvements for clearer reading and tracking.'], status: 'Experience started in 2023.'},
    es: {title: 'Pasante de Análisis de Datos', kicker: 'EXPERIENCIA / AUTOMATIZACIÓN', intro: 'El inicio profesional: convertir rutinas manuales en mejores flujos.', description: 'Experiencia con automatización de hojas de cálculo, análisis de datos y mejora de informes internos usando Excel y VBA.', points: ['Automatización de tareas repetitivas en hojas de cálculo.', 'Organización y análisis de información operativa.', 'Mejora de informes para facilitar su lectura y seguimiento.'], status: 'Experiencia iniciada en 2023.'}
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
  behavior: {
    title: 'Behavioral Analysis', kicker: 'DATA / SYNTHETIC DASHBOARD',
    intro: 'Turning simulated patterns into a clear weekly view.',
    description: 'A demonstrative Dash and Plotly dashboard for attendance, recurrence and co-presence analysis using entirely fictional scenarios. Its architecture combines Parquet, SQLite and caching for responsive navigation.',
    points: ['Dynamic filters and progressive chart loading.', 'Weekly series, distributions, box plots, indicators and co-presence maps.', 'Report export and a layered MVC and services architecture.'],
    status: 'Every value, category and label shown is fictional and does not derive from any real dataset.'
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

const caseCopyEs = {
  ccb: {
    title: 'CCB BI', kicker: 'DATOS / APLICACIÓN LOCAL',
    intro: 'De los registros semanales a indicadores capaces de revelar tendencias.',
    description: 'Aplicación Flask y SQLite que digitaliza formularios y reúne indicadores en un panel. Los computadores y celulares de la misma red acceden al sistema mediante un enlace o código QR.',
    points: ['Operación cotidiana sin conexión, con los datos almacenados localmente.', 'En el período presentado, el panel consolida 28 reuniones, 2.607 recitaciones, 197 registros individuales y 126 visitas.', 'Filtros por período, coordinación y localidad, con comparaciones y evolución temporal.'],
    status: 'El portafolio solo muestra cifras agregadas de un período demostrativo; no se publica ninguna base de datos individual.'
  },
  behavior: {
    title: 'Análisis de Comportamiento', kicker: 'DATOS / PANEL SINTÉTICO',
    intro: 'Transformar patrones simulados en una lectura semanal clara.',
    description: 'Panel demostrativo en Dash y Plotly para analizar presencia, recurrencia y copresencia mediante escenarios totalmente ficticios. La arquitectura combina Parquet, SQLite y caché para mantener una navegación ágil.',
    points: ['Filtros dinámicos y carga progresiva de gráficos.', 'Series semanales, distribuciones, diagramas de caja, indicadores y mapas de copresencia.', 'Exportación de informes y separación por capas MVC y servicios.'],
    status: 'Todos los valores, categorías y rótulos mostrados son ficticios y no provienen de ninguna base real.'
  },
  jarvis: {
    title: 'J.A.R.V.I.S.', kicker: 'IA LOCAL / ASISTENTE DE VOZ',
    intro: 'Un asistente personal que conversa en portugués y funciona en el propio computador.',
    description: 'Reconocimiento de voz, conversación mediante Ollama e información profesional estructurada, con una interfaz visual de estado e integración con la barra de menús de macOS.',
    points: ['Activación por palabra clave o dos palmadas, con reconocimiento local.', 'Perfil profesional estructurado con procedencia de los datos.', 'Adaptadores de sitios web con vista previa antes de confirmar cualquier cambio.'],
    status: 'En desarrollo. La gestión completa de candidaturas continúa evolucionando.'
  },
  ias: {
    title: 'IA Local + Automatización', kicker: 'IA / DOCUMENTOS / ORQUESTACIÓN',
    intro: 'Entran documentos; salen análisis y respuestas sin depender de una IA en la nube.',
    description: 'Pipeline autoalojado que conecta archivos de Google Drive o OneDrive con Ollama y utiliza n8n para coordinar la ingesta, el procesamiento y la entrega de resultados.',
    points: ['n8n y PostgreSQL ejecutados en contenedores Docker.', 'Inferencia local mediante la API de Ollama, manteniendo el procesamiento en la máquina.', 'Flujo importable y preparado para diferentes destinos de respuesta.'],
    status: 'Integración experimental. Las credenciales y los documentos reales permanecen fuera del repositorio.'
  },
  petshop: {
    title: 'Petshop E-Commerce', kicker: 'JAVA / SPRING MVC / COMERCIO ELECTRÓNICO',
    intro: 'Una experiencia completa de compra, desde el escaparate hasta la gestión del pedido.',
    description: 'Aplicación web colaborativa creada con Spring Boot MVC y Thymeleaf. Reúne catálogo, carrito persistente, autenticación, pedidos y administración de productos.',
    points: ['Backend en Java 21 con Spring Data JPA y PostgreSQL.', 'Perfiles USER y ADMIN con protección de rutas mediante anotaciones AOP.', 'Carga de imágenes, CRUD de productos, historial de pedidos e interfaz responsiva.'],
    status: 'Proyecto académico colaborativo desarrollado por Nicholas Birochi, Henrico Birochi, Vítor Braghittoni, Edgar Ribeiro y Vinicius Yamaguti.'
  },
  fingerprint: {
    title: 'Standalone Fingerprint Key', kicker: 'HARDWARE / FIRMWARE / MODELADO 3D',
    intro: 'Una llave biométrica independiente para macOS.',
    description: 'El ESP32-S3 se comunica con un sensor HLK-ZW111 y se presenta ante el computador como un teclado USB. Tras una coincidencia biométrica, escribe un secreto configurado localmente.',
    points: ['Protocolo UART separado del firmware, con pruebas de tramas y checksum.', 'Carcasa paramétrica de 46,4 × 46,4 × 13 mm en dos piezas.', 'Documentación de montaje, pruebas de banco y limitaciones de seguridad claramente indicadas.'],
    status: 'Proyecto experimental. No equivale a Touch ID ni a una llave FIDO2; escribir un secreto exige las precauciones documentadas en el repositorio.'
  }
};

const englishCopy = {
  skip: 'Skip to projects', headerNote: 'DATA & DEVELOPMENT', navProjects: 'Projects', navAbout: 'About', navJourney: 'Journey', navContact: 'Let\'s talk',
  heroLabel: 'PERSONAL PORTFOLIO', heroLead: 'Data, code<br>& curiosity.', heroCopy: 'I turn problems into analyses,<br>automations and applications.', heroCta: 'Explore my work', heroCourse: 'COMPUTER ENGINEERING',
  fieldData: 'DATA ANALYSIS', fieldDev: 'DEVELOPMENT', fieldAi: 'AUTOMATION & AI', workEyebrow: '01 / SELECTED WORK', workQuiet: 'From insight to prototype.', workTitle: 'IDEAS THAT<br><em>TAKE SHAPE.</em>', workIntro: 'A selection of what I have been building across data, software and experimentation.',
  filterAll: 'All', filterData: 'Data', filterAi: 'AI & automation', allGithub: 'All on GitHub', ccbDescription: 'From records to diagnosis: forms, filters and analyses supporting decisions in a local application.', behaviorTitle: 'Behavioral Analysis', behaviorDescription: 'Attendance, co-presence and weekly trend dashboards with filters, caching and report exports.', jarvisDescription: 'A local multimodal assistant with voice, structured professional memory and supervised automations.', iasTitle: 'Local AI + Automation', iasDescription: 'A self-hosted pipeline that turns documents into analyses and answers using local AI.', petshopDescription: 'A complete store with catalog, cart, orders, authentication, access roles and an administration panel.', fingerprintDescription: 'A biometric key for macOS: electronics, protocol, firmware and a parametric enclosure in one product.',
  numberRepos: 'public repositories', numberFields: 'areas of practice', numberEnglish: 'certified English', numberGraduation: 'expected graduation',
  aboutEyebrow: '02 / A LITTLE ABOUT ME', aboutQuiet: 'Beyond the code.', aboutTitle: 'CURIOUS BY<br><em>NATURE.</em><br>INNOVATIVE<br><em>BY CHOICE.</em>', aboutP1: '<strong>I\'m Nicholas Birochi.</strong> I\'m {{age}} years old and a Computer Engineering student at Faculdade Engenheiro Salvador Arena. I also work as a Data Analytics intern at Volkswagen do Brasil.', aboutP2: 'My work connects data and development: understanding a problem, finding patterns and creating solutions that help someone decide or work better.', aboutP3: 'That curiosity also drives my personal projects. I explore local AI, web applications, music and hardware while turning ideas into useful experiences.', aboutLinkedin: 'More about me on LinkedIn', skillData: 'Data & analytics', skillAi: 'Automation & AI', skillExperiment: 'Experimentation',
  journeyEyebrow: '03 / JOURNEY', journeyQuiet: 'Learning and practice in motion.', journeyTitle: 'TWO PATHS.<br><em>ONE EVOLUTION.</em>', journeyIntro: 'Education and experience move forward together: what I learn becomes practice, and every professional challenge guides the next subject I study.', learning: 'Learning', professional: 'Professional',
  learning2023Tag: 'LANGUAGE', learning2023Title: 'Cambridge English B2', learning2023Body: 'Cambridge B2 First certification completed with a score of 153.', work2023Title: 'Data Analytics Intern', work2023Body: 'Spreadsheet automation, data analysis and internal reporting improvements using Excel and VBA.',
  current: 'CURRENT', work2025Title: 'Data Analytics Intern', work2025Body: 'Python and Power BI dashboards, SAP data analysis and local AI supporting Special Audit.',
  planned: 'PLANNED', learning2027Title: 'Graduation', learning2027Body: 'Computer Engineering degree expected in December 2027.', goal: 'GOAL', work2027Title: 'Next step: Junior Data Analyst', work2027Body: 'The desired progression after the internship, combining hands-on experience, education and technical autonomy.',
  recommendationEyebrow: 'PROFESSIONAL RECOMMENDATIONS', recommendationQuiet: 'Perspectives from people who trust my work.', quoteAzarias: 'Nicholas is an outstanding professional: committed and responsible. He is also innovative, adding significant value to our area\'s processes and to the quality of the work he delivers.', quoteEduardo: 'I recommend Nicholas for his dedication and willingness to listen to the area\'s needs, contributing ideas and disruptive solutions that demonstrate forward-looking technological thinking.', quoteVitor: 'I followed Nicholas during the development of the church project (CCB-BI). He knew how to listen, improve the solution and turn a real need into a clear, useful and well-built tool.', quoteBraghittoni: 'Top-notch.', quoteEdgar: 'A longtime friend who is always willing to put in the work and deliver the product.', quoteHenrico: 'I recommend Nicholas for his curiosity, dedication and ability to turn problems into practical solutions. He learns quickly, communicates clearly and takes every project seriously.', linkedinRecommendation: 'Recommendation via LinkedIn',
  contactEyebrow: '04 / CONTACT', contactQuiet: 'A CONVERSATION CAN BE THE BEGINNING.', contactTitle: 'LET\'S<br>TALK?', contactIntro: 'I am open to opportunities, collaborations and projects in data, automation, local AI and software development.', formTitle: 'WRITE YOUR MESSAGE', formEmail: 'YOUR EMAIL', formSubject: 'SUBJECT', formMessage: 'MESSAGE', formSubmit: 'SEND MESSAGE', contactSocial: 'CONTACT & SOCIAL', contactProfessional: 'PROFESSIONAL PROFILES', location: 'São Bernardo do Campo, SP · Brazil', availability: 'Available to discuss new challenges', backTop: 'Back to top',
  caseOverview: 'Overview', caseHighlights: 'Key points', caseGithub: 'Explore on GitHub'
};

const spanishCopy = {
  skip: 'Ir a los proyectos', headerNote: 'DATOS & DESARROLLO', navProjects: 'Proyectos', navAbout: 'Sobre mí', navJourney: 'Trayectoria', navContact: 'Hablemos',
  heroLabel: 'PORTAFOLIO PERSONAL', heroLead: 'Datos, código<br>y curiosidad.', heroCopy: 'Transformo problemas en análisis,<br>automatizaciones y aplicaciones.', heroCta: 'Explorar mi trabajo', heroCourse: 'INGENIERÍA INFORMÁTICA',
  fieldData: 'ANÁLISIS DE DATOS', fieldDev: 'DESARROLLO', fieldAi: 'AUTOMATIZACIÓN & IA', workEyebrow: '01 / TRABAJOS SELECCIONADOS', workQuiet: 'De la idea al prototipo.', workTitle: 'IDEAS QUE<br><em>TOMAN FORMA.</em>', workIntro: 'Una selección de lo que vengo construyendo entre datos, software y experimentación.',
  filterAll: 'Todos', filterData: 'Datos', filterAi: 'IA & automatización', allGithub: 'Todos en GitHub', ccbDescription: 'Del registro al diagnóstico: formularios, filtros y análisis para apoyar decisiones en una aplicación local.', behaviorTitle: 'Análisis de Comportamiento', behaviorDescription: 'Paneles de presencia, copresencia y evolución semanal con filtros, caché y exportación de informes.', jarvisDescription: 'Un asistente multimodal local con voz, memoria profesional estructurada y automatizaciones supervisadas.', iasTitle: 'IA Local + Automatización', iasDescription: 'Un pipeline autoalojado que convierte documentos en análisis y respuestas mediante IA local.', petshopDescription: 'Una tienda completa con catálogo, carrito, pedidos, autenticación, perfiles de acceso y panel administrativo.', fingerprintDescription: 'Una llave biométrica para macOS: electrónica, protocolo, firmware y carcasa paramétrica en un solo producto.',
  numberRepos: 'repositorios públicos', numberFields: 'áreas de actuación', numberEnglish: 'inglés certificado', numberGraduation: 'graduación prevista',
  aboutEyebrow: '02 / UN POCO SOBRE MÍ', aboutQuiet: 'Más allá del código.', aboutTitle: 'CURIOSO POR<br><em>NATURALEZA.</em><br>INNOVADOR<br><em>POR ELECCIÓN.</em>', aboutP1: '<strong>Soy Nicholas Birochi.</strong> Tengo {{age}} años y estudio Ingeniería Informática en la Faculdade Engenheiro Salvador Arena. También trabajo como pasante de Análisis de Datos en Volkswagen do Brasil.', aboutP2: 'Mi trabajo conecta datos y desarrollo: investigar un problema, encontrar patrones y crear soluciones que ayuden a alguien a decidir o trabajar mejor.', aboutP3: 'Esa curiosidad también impulsa mis proyectos personales. Exploro IA local, aplicaciones web, música y hardware mientras convierto ideas en experiencias útiles.', aboutLinkedin: 'Más sobre mí en LinkedIn', skillData: 'Datos & análisis', skillAi: 'Automatización & IA', skillExperiment: 'Experimentación',
  journeyEyebrow: '03 / TRAYECTORIA', journeyQuiet: 'Aprendizaje y práctica en movimiento.', journeyTitle: 'DOS CAMINOS.<br><em>UNA EVOLUCIÓN.</em>', journeyIntro: 'La formación y la experiencia avanzan juntas: lo que aprendo se convierte en práctica y cada desafío profesional orienta el siguiente estudio.', learning: 'Aprendizaje', professional: 'Profesional',
  learning2023Tag: 'IDIOMA', learning2023Title: 'Cambridge English B2', learning2023Body: 'Certificación Cambridge B2 First completada con una puntuación de 153.', work2023Title: 'Pasante de Análisis de Datos', work2023Body: 'Automatización de hojas de cálculo, análisis de datos y mejora de informes internos con Excel y VBA.',
  current: 'ACTUAL', work2025Title: 'Pasante de Análisis de Datos', work2025Body: 'Paneles en Python y Power BI, análisis de datos de SAP e IA local para apoyar a Auditoría Especial.',
  planned: 'PREVISTO', learning2027Title: 'Finalización de la carrera', learning2027Body: 'Graduación en Ingeniería Informática prevista para diciembre de 2027.', goal: 'OBJETIVO', work2027Title: 'Próximo paso: Analista de Datos Junior', work2027Body: 'La progresión deseada después de la pasantía, reuniendo experiencia práctica, formación y autonomía técnica.',
  recommendationEyebrow: 'RECOMENDACIONES PROFESIONALES', recommendationQuiet: 'Perspectivas de quienes confían en mi trabajo.', quoteAzarias: 'Nicholas es un profesional excepcional: comprometido y responsable. Además, es innovador y aporta mucho valor a los procesos de nuestra área y a la calidad de las actividades que entrega.', quoteEduardo: 'Recomiendo a Nicholas por su dedicación y disposición para escuchar las necesidades del área, aportando ideas y soluciones disruptivas que demuestran una visión orientada a las tecnologías del futuro.', quoteVitor: 'Acompañé a Nicholas durante el desarrollo del proyecto para la iglesia (CCB-BI). Supo escuchar, mejorar la solución y transformar una necesidad real en una herramienta clara, útil y bien construida.', quoteBraghittoni: 'Excelente.', quoteEdgar: 'Un amigo de muchos años, siempre dispuesto a esforzarse y entregar el producto.', quoteHenrico: 'Recomiendo a Nicholas por su curiosidad, dedicación y capacidad para transformar problemas en soluciones prácticas. Aprende rápido, se comunica con claridad y se toma cada proyecto en serio.', linkedinRecommendation: 'Recomendación vía LinkedIn',
  contactEyebrow: '04 / CONTACTO', contactQuiet: 'UNA CONVERSACIÓN PUEDE SER EL COMIENZO.', contactTitle: '¿HABLAMOS?', contactIntro: 'Estoy abierto a oportunidades, colaboraciones y proyectos de datos, automatización, IA local y desarrollo de software.', formTitle: 'ESCRIBE TU MENSAJE', formEmail: 'TU E-MAIL', formSubject: 'ASUNTO', formMessage: 'MENSAJE', formSubmit: 'ENVIAR MENSAJE', contactSocial: 'CONTACTO & REDES SOCIALES', contactProfessional: 'PERFILES PROFESIONALES', location: 'São Bernardo do Campo, SP · Brasil', availability: 'Disponible para conversar sobre nuevos desafíos', backTop: 'Volver arriba',
  caseOverview: 'Resumen', caseHighlights: 'Puntos principales', caseGithub: 'Explorar en GitHub'
};

const englishPlaceholders = {formEmailPlaceholder: 'you@company.com', formSubjectPlaceholder: 'About an opportunity', formMessagePlaceholder: 'Briefly tell me how I can help.'};
const spanishPlaceholders = {formEmailPlaceholder: 'tu@empresa.com', formSubjectPlaceholder: 'Sobre una oportunidad', formMessagePlaceholder: 'Cuéntame brevemente cómo puedo ayudar.'};
const originalCopy = new Map([...document.querySelectorAll('[data-i18n]')].map(element => [element.dataset.i18n, element.innerHTML]));
const originalPlaceholders = new Map([...document.querySelectorAll('[data-i18n-placeholder]')].map(element => [element.dataset.i18nPlaceholder, element.placeholder]));
function getCurrentAge(today = new Date()) {
  let age = today.getFullYear() - 2005;
  if (today.getMonth() < 4 || (today.getMonth() === 4 && today.getDate() < 16)) age -= 1;
  return age;
}
function interpolateCopy(value) {
  return value.replace('{{age}}', String(getCurrentAge()));
}
let currentLanguage = 'pt';
let activeDetail = null;
const languageConfigs = {
  pt: {
    htmlLang: 'pt-BR', code: 'PT', name: 'Português', flag: 'assets/icons/flag-br.svg', copy: null, placeholders: null,
    title: 'Nicholas Birochi | Portfólio', description: 'Nicholas Birochi. Dados, desenvolvimento e automação. Conheça meus projetos em BI, inteligência artificial local, software e hardware.',
    menuOpen: 'Abrir menu', menuClose: 'Fechar menu', pickerLabel: 'Selecionar idioma. Atual: Português', socialLabel: 'Contato e redes sociais', professionalLabel: 'Perfis profissionais', recommendationAction: 'Ler a indicação e abrir o LinkedIn de', recommendationPagesLabel: 'Páginas de indicações', recommendationPrevious: 'Página anterior', recommendationNext: 'Próxima página', recommendationPage: 'Página', recommendationOf: 'de', formSending: 'Enviando mensagem…', formSuccess: 'Mensagem enviada. Obrigado pelo contato!', formError: 'Não foi possível enviar agora. Tente novamente ou use o e-mail abaixo.'
  },
  en: {
    htmlLang: 'en', code: 'EN', name: 'English', flag: 'assets/icons/flag-us.svg', copy: englishCopy, placeholders: englishPlaceholders,
    title: 'Nicholas Birochi | Portfólio', description: 'Nicholas Birochi. Data, development and automation. Explore my projects in BI, local AI, software and hardware.',
    menuOpen: 'Open menu', menuClose: 'Close menu', pickerLabel: 'Select language. Current: English', socialLabel: 'Contact and social profiles', professionalLabel: 'Professional profiles', recommendationAction: 'Read the recommendation and open the LinkedIn profile of', recommendationPagesLabel: 'Recommendation pages', recommendationPrevious: 'Previous page', recommendationNext: 'Next page', recommendationPage: 'Page', recommendationOf: 'of', formSending: 'Sending message…', formSuccess: 'Message sent. Thank you for reaching out!', formError: 'The message could not be sent. Please try again or use the email below.'
  },
  es: {
    htmlLang: 'es', code: 'ES', name: 'Español', flag: 'assets/icons/flag-es.svg', copy: spanishCopy, placeholders: spanishPlaceholders,
    title: 'Nicholas Birochi | Portfólio', description: 'Nicholas Birochi. Datos, desarrollo y automatización. Conoce mis proyectos de BI, IA local, software y hardware.',
    menuOpen: 'Abrir menú', menuClose: 'Cerrar menú', pickerLabel: 'Seleccionar idioma. Actual: Español', socialLabel: 'Contacto y redes sociales', professionalLabel: 'Perfiles profesionales', recommendationAction: 'Leer la recomendación y abrir el perfil de LinkedIn de', recommendationPagesLabel: 'Páginas de recomendaciones', recommendationPrevious: 'Página anterior', recommendationNext: 'Página siguiente', recommendationPage: 'Página', recommendationOf: 'de', formSending: 'Enviando mensaje…', formSuccess: 'Mensaje enviado. ¡Gracias por escribir!', formError: 'No se pudo enviar el mensaje. Inténtalo de nuevo o usa el e-mail de abajo.'
  }
};

function setLanguage(language, persist = true) {
  currentLanguage = languageConfigs[language] ? language : 'pt';
  const config = languageConfigs[currentLanguage];
  document.documentElement.lang = config.htmlLang;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    element.innerHTML = interpolateCopy(config.copy?.[key] ?? originalCopy.get(key));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.dataset.i18nPlaceholder;
    element.placeholder = config.placeholders?.[key] ?? originalPlaceholders.get(key);
  });
  document.querySelectorAll('[data-language]').forEach(button => {
    const isCurrent = button.dataset.language === currentLanguage;
    button.hidden = isCurrent;
    button.setAttribute('aria-selected', String(isCurrent));
  });
  const currentFlag = document.querySelector('.language-current-flag');
  if (currentFlag) currentFlag.src = config.flag;
  const currentCode = document.querySelector('.language-current-code');
  if (currentCode) currentCode.textContent = config.code;
  const languageTrigger = document.querySelector('.language-trigger');
  if (languageTrigger) languageTrigger.setAttribute('aria-label', config.pickerLabel);
  const socialGroup = document.querySelector('.contact-channel-group:first-child');
  if (socialGroup) socialGroup.setAttribute('aria-label', config.socialLabel);
  const professionalGroup = document.querySelector('.contact-channel-group:last-child');
  if (professionalGroup) professionalGroup.setAttribute('aria-label', config.professionalLabel);
  document.querySelectorAll('.recommendation-card').forEach(card => {
    const name = card.querySelector('.recommender h3')?.textContent.trim();
    if (name) card.setAttribute('aria-label', `${config.recommendationAction} ${name}`);
  });
  updateRecommendationPaginationLabels();
  const copyVerb = currentLanguage === 'en' ? 'Copy' : 'Copiar';
  document.querySelectorAll('.copy-contact').forEach(button => {
    const label = `${copyVerb} ${button.dataset.copyName}`;
    button.setAttribute('aria-label', label);
    button.title = label;
  });
  document.title = config.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = config.description;
  const visibleCount = projects.filter(project => !project.hidden).length;
  updateFilterStatus(visibleCount);
  if (document.querySelector('.case-dialog')?.open && activeDetail) renderCase(activeDetail.key, activeDetail.type);
  closeMenu();
  if (persist) {
    try { localStorage.setItem('portfolio-language', currentLanguage); } catch {}
  }
}

function updateFilterStatus(count) {
  const status = document.querySelector('#filter-status');
  if (!status) return;
  if (currentLanguage === 'en') status.textContent = `${count} visible ${count === 1 ? 'project' : 'projects'}`;
  else if (currentLanguage === 'es') status.textContent = `${count} ${count === 1 ? 'proyecto visible' : 'proyectos visibles'}`;
  else status.textContent = `${count} ${count === 1 ? 'projeto visível' : 'projetos visíveis'}`;
}

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  const label = languageConfigs[currentLanguage].menuOpen;
  menuButton.setAttribute('aria-label', label);
  menuButton.title = label;
  menuButton.querySelector('img').src = 'assets/icons/menu.svg';
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  const config = languageConfigs[currentLanguage];
  const label = open ? config.menuClose : config.menuOpen;
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
function renderCase(key, type = 'project') {
  const project = type === 'journey' ? journeyCases[key]?.[currentLanguage] : cases[key];
  if (!project) return;
  const localizedCases = currentLanguage === 'en' ? caseCopyEn : currentLanguage === 'es' ? caseCopyEs : null;
  const copy = type === 'project' && localizedCases ? {...project, ...localizedCases[key]} : project;
  for (const [id, value] of Object.entries({title: copy.title, kicker: copy.kicker, intro: copy.intro, description: copy.description, status: copy.status})) {
    document.querySelector(`#case-${id}`).textContent = value;
  }
  document.querySelector('#case-points').replaceChildren(...copy.points.map(point => {
    const li = document.createElement('li');
    li.textContent = point;
    return li;
  }));
  const repoLink = document.querySelector('#case-repo');
  repoLink.hidden = type === 'journey' || !project.url;
  if (type === 'project' && project.url) repoLink.href = project.url;
  else repoLink.removeAttribute('href');
}

function openCase(trigger, key, type) {
  dialogTrigger = trigger;
  activeDetail = {key, type};
  renderCase(key, type);
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('modal-open');
  document.querySelector('.dialog-close').focus();
}

document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    if (!cases[button.dataset.project]) return;
    openCase(button, button.dataset.project, 'project');
  });
});
document.querySelectorAll('[data-journey]').forEach(event => {
  const openJourney = () => openCase(event, event.dataset.journey, 'journey');
  event.addEventListener('click', openJourney);
  event.addEventListener('keydown', keyboardEvent => {
    if (!['Enter', ' '].includes(keyboardEvent.key)) return;
    keyboardEvent.preventDefault();
    openJourney();
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
  activeDetail = null;
});

const recommendationPages = [...document.querySelectorAll('[data-recommendation-page]')];
const recommendationPageButtons = [...document.querySelectorAll('[data-recommendation-target]')];
const recommendationPagination = document.querySelector('.recommendation-pagination');
const recommendationPageTabs = document.querySelector('.recommendation-page-tabs');
let activeRecommendationPage = 0;

function updateRecommendationPaginationLabels() {
  if (!recommendationPagination) return;
  const config = languageConfigs[currentLanguage];
  const total = recommendationPages.length;
  recommendationPagination.setAttribute('aria-label', config.recommendationPagesLabel);
  recommendationPageButtons.forEach((button, index) => button.setAttribute('aria-label', `${config.recommendationPage} ${index + 1}`));
  recommendationPages.forEach((page, index) => page.setAttribute('aria-label', `${config.recommendationPage} ${index + 1} ${config.recommendationOf} ${total}`));
  document.querySelector('#recommendation-page-status').textContent = `${config.recommendationPage} ${activeRecommendationPage + 1} ${config.recommendationOf} ${total}`;
}

function showRecommendationPage(index) {
  activeRecommendationPage = Math.max(0, Math.min(index, recommendationPages.length - 1));
  recommendationPages.forEach((page, pageIndex) => {
    const isActive = pageIndex === activeRecommendationPage;
    page.hidden = false;
    page.classList.toggle('is-active', isActive);
    page.inert = !isActive;
    page.setAttribute('aria-hidden', String(!isActive));
  });
  recommendationPageButtons.forEach((button, pageIndex) => {
    if (pageIndex === activeRecommendationPage) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
  recommendationPageTabs?.style.setProperty('--active-page', activeRecommendationPage);
  updateRecommendationPaginationLabels();
}

recommendationPageButtons.forEach(button => button.addEventListener('click', () => showRecommendationPage(Number(button.dataset.recommendationTarget))));
recommendationPagination?.addEventListener('keydown', event => {
  if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  event.preventDefault();
  showRecommendationPage(activeRecommendationPage + (event.key === 'ArrowRight' ? 1 : -1));
  recommendationPageButtons[activeRecommendationPage]?.focus();
});
showRecommendationPage(0);

const languagePicker = document.querySelector('.language-picker');
const languageTrigger = document.querySelector('.language-trigger');
const languageMenu = document.querySelector('.language-options');
const languageItems = [...document.querySelectorAll('[data-language]')];
const availableLanguageItems = () => languageItems.filter(item => !item.hidden);
function openLanguagePicker(focusPosition = -1) {
  languageMenu.hidden = false;
  languageTrigger.setAttribute('aria-expanded', 'true');
  if (focusPosition >= 0) availableLanguageItems()[focusPosition]?.focus();
}
function closeLanguagePicker(restoreFocus = false) {
  languageMenu.hidden = true;
  languageTrigger.setAttribute('aria-expanded', 'false');
  if (restoreFocus) languageTrigger.focus();
}
languageTrigger.addEventListener('click', () => {
  if (languageMenu.hidden) openLanguagePicker();
  else closeLanguagePicker();
});
languageTrigger.addEventListener('keydown', event => {
  if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return;
  event.preventDefault();
  const availableItems = availableLanguageItems();
  openLanguagePicker(event.key === 'ArrowDown' ? 0 : availableItems.length - 1);
});
languageItems.forEach(item => item.addEventListener('click', () => {
  setLanguage(item.dataset.language);
  closeLanguagePicker(true);
}));
languageMenu.addEventListener('keydown', event => {
  const availableItems = availableLanguageItems();
  const index = availableItems.indexOf(document.activeElement);
  if (event.key === 'Escape') {
    event.preventDefault();
    closeLanguagePicker(true);
  } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    const step = event.key === 'ArrowDown' ? 1 : -1;
    availableItems[(index + step + availableItems.length) % availableItems.length].focus();
  } else if (event.key === 'Home' || event.key === 'End') {
    event.preventDefault();
    availableItems[event.key === 'Home' ? 0 : availableItems.length - 1].focus();
  } else if (event.key === 'Tab') closeLanguagePicker();
});
document.addEventListener('click', event => {
  if (!event.target.closest('.language-picker')) closeLanguagePicker();
});
let savedLanguage = 'pt';
try { savedLanguage = localStorage.getItem('portfolio-language') || 'pt'; } catch {}
const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
setLanguage(requestedLanguage || savedLanguage, false);

async function writeToClipboard(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }
  const field = document.createElement('textarea');
  field.value = value;
  field.setAttribute('readonly', '');
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.append(field);
  field.select();
  const copied = document.execCommand('copy');
  field.remove();
  if (!copied) throw new Error('Clipboard unavailable');
}

const copyTimers = new WeakMap();
document.querySelectorAll('.copy-contact').forEach(button => {
  button.addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    const icon = button.querySelector('img');
    const value = button.dataset.copy;
    const name = button.dataset.copyName;
    try {
      await writeToClipboard(value);
      const message = currentLanguage === 'en' ? `${name} copied` : `${name} copiado`;
      status.textContent = message;
      button.setAttribute('aria-label', message);
      button.title = message;
      icon.src = 'assets/icons/check.svg';
      clearTimeout(copyTimers.get(button));
      copyTimers.set(button, setTimeout(() => {
        const copyVerb = currentLanguage === 'en' ? 'Copy' : 'Copiar';
        const label = `${copyVerb} ${name}`;
        button.setAttribute('aria-label', label);
        button.title = label;
        icon.src = 'assets/icons/copy.svg';
        status.textContent = '';
      }, 1800));
    } catch {
      const prefix = currentLanguage === 'en' ? 'Copy manually:' : currentLanguage === 'es' ? 'Copia manualmente:' : 'Copie manualmente:';
      status.textContent = `${prefix} ${value}`;
    }
  });
});

const contactForm = document.querySelector('#contact-form');
let emailResetTimer;
contactForm?.addEventListener('submit', async event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const submitButton = contactForm.querySelector('.form-submit');
  const submitIcon = submitButton.querySelector('img');
  const formStatus = document.querySelector('#form-status');
  formStatus.dataset.state = 'sending';
  formStatus.textContent = languageConfigs[currentLanguage].formSending;
  clearTimeout(emailResetTimer);
  submitButton.classList.remove('is-launching');
  submitButton.disabled = true;

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: {Accept: 'application/json'}
    });
    if (!response.ok) throw new Error(`Formspree returned ${response.status}`);

    formStatus.dataset.state = 'success';
    formStatus.textContent = languageConfigs[currentLanguage].formSuccess;
    contactForm.reset();
    submitButton.classList.add('is-launching');

    const iconRect = submitIcon.getBoundingClientRect();
    const flight = document.createElement('img');
    flight.className = 'email-flight';
    flight.src = 'assets/icons/send.svg';
    flight.alt = '';
    flight.setAttribute('aria-hidden', 'true');
    flight.style.left = `${iconRect.left}px`;
    flight.style.top = `${iconRect.top}px`;
    document.body.append(flight);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reducedMotion ? 220 : 980;
    const flightAnimation = flight.animate([
      {opacity: 1, transform: 'translate3d(0, 0, 0) rotate(-18deg) scale(.9)'},
      {opacity: 1, transform: 'translate3d(16px, -10px, 0) rotate(-4deg) scale(1.04)', offset: .2},
      {opacity: .96, transform: `translate3d(${Math.max(180, window.innerWidth - iconRect.left - 40)}px, ${Math.min(-120, -(iconRect.top + 60))}px, 0) rotate(16deg) scale(.78)`, offset: .86},
      {opacity: 0, transform: `translate3d(${window.innerWidth - iconRect.left + 90}px, ${-(iconRect.top + 100)}px, 0) rotate(20deg) scale(.68)`}
    ], {duration, easing: 'cubic-bezier(.2,.72,.2,1)', fill: 'forwards'});
    flightAnimation.finished.catch(() => {}).then(() => flight.remove());

    emailResetTimer = setTimeout(() => {
      flight.remove();
      submitButton.classList.remove('is-launching');
      submitButton.disabled = false;
    }, duration + 120);
  } catch {
    formStatus.dataset.state = 'error';
    formStatus.textContent = languageConfigs[currentLanguage].formError;
    submitButton.disabled = false;
  }
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
    const turnOn = jarvisVideo.muted || jarvisVideo.paused;
    jarvisVideo.muted = !turnOn;
    if (turnOn) {
      jarvisVideo.volume = 1;
      jarvisVideo.currentTime = 0;
    }
    jarvisSound.setAttribute('aria-pressed', String(turnOn));
    jarvisSound.setAttribute('aria-label', turnOn ? 'Silenciar a demonstração do JARVIS' : 'Ouvir a demonstração do JARVIS');
    jarvisSound.querySelector('img').src = `assets/icons/${turnOn ? 'volume-x' : 'volume-2'}.svg`;
    jarvisSound.querySelector('span').textContent = turnOn ? 'SILENCIAR' : 'OUVIR JARVIS';
    try {
      await jarvisVideo.play();
    } catch {
      jarvisVideo.muted = true;
      jarvisSound.setAttribute('aria-pressed', 'false');
      jarvisSound.querySelector('img').src = 'assets/icons/volume-2.svg';
      jarvisSound.querySelector('span').textContent = 'TOCAR VÍDEO';
    }
  });
}

document.querySelectorAll('img').forEach(image => image.draggable = false);

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
  document.querySelectorAll('.project, .about-grid, [data-journey]').forEach(element => observer.observe(element));
}
