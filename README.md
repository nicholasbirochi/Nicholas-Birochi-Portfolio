# Portfolio Nicholas Birochi

Site estatico profissional para `nicolasbirochi.com.br`, criado para apresentar quatro projetos academicos/profissionais com foco em clareza visual, motion design e seguranca por superficie.

## Estrutura

- `index.html`: pagina principal.
- `styles.css`: sistema visual responsivo.
- `app.js`: animacao do hero calculada a partir do tempo.
- `assets/`: imagens locais dos projetos.
- `dist/`: saida estatica usada para publicacao no Sites.
- `CNAME`: dominio customizado.
- `robots.txt`, `sitemap.xml`, `.well-known/security.txt`: publicacao e metadados.

## Motion Design

Base: 120 BPM, 7 barras em 4/4, 28 batidas, loop de 14 segundos.

Grade de estados:

| Beat | Estado |
| ---: | --- |
| 0 | Button |
| 2 | Loader |
| 4 | Check |
| 6 | Dynamic island |
| 8 | Music player |
| 10 | Scrub progress |
| 12 | Volume slider |
| 14 | Toggle |
| 16 | Tabs |
| 19 | Chart |
| 22 | Command palette |
| 25 | Toast |
| 26 | Back to button |
| 28 | Primeiro frame |

Notas de implementacao:

- Sem bibliotecas externas.
- Sem CSS transitions na animacao principal.
- `seek(t)` recalcula a interface a cada frame a partir do tempo.
- Springs usam resposta fechada e os valores mudam como soma das respostas por alvo.
- O cursor e a forma principal tambem derivam apenas do tempo.

## Seguranca

O portfolio foi desenhado como site estatico:

- Sem banco de dados.
- Sem formulario com backend.
- Sem autenticacao.
- Sem upload.
- Sem cookies.
- Sem scripts de terceiros.
- CSP via meta tag bloqueando scripts externos, frames e objetos.

Os 19 pontos de seguranca do checklist foram mantidos na pagina em formato de matriz por projeto.
