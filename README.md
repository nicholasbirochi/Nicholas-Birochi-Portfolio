# Portfolio Nicholas Birochi

Site estatico profissional publicado em `nicholasbirochi.com.br`, criado para apresentar os projetos mais recentes e fortes de Nicholas Birochi com foco em produto, dados, hardware, automacao e seguranca aplicada.

## Estrutura

- `index.html`: pagina principal.
- `styles.css`: sistema visual responsivo.
- `app.js`: progresso de scroll e microinteracoes.
- `assets/`: imagens locais dos projetos.
- `dist/`: saida estatica usada no Cloudflare Pages.
- `CNAME`: dominio customizado.
- `robots.txt`, `sitemap.xml`, `.well-known/security.txt`: publicacao e metadados.

## Projetos em destaque

- Standalone Fingerprint Key
- CCB BI
- Ollama AI Automation n8n
- Corporate BI Automation
- Petshop E-Commerce
- Haven Game

## Seguranca

O portfolio foi desenhado como site estatico:

- Sem banco de dados.
- Sem formulario com backend.
- Sem autenticacao.
- Sem upload.
- Sem cookies.
- Sem scripts de terceiros.
- CSP via meta tag bloqueando scripts externos, frames e objetos.

Os pontos de seguranca aparecem de forma contextual por superficie, evitando aplicar controles que nao fazem sentido para sites estaticos.
