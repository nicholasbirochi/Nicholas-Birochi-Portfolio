# Nicholas Birochi Portfolio

Personal portfolio at https://nicholasbirochi.com.br. Static HTML, CSS and JavaScript, deployed through Cloudflare Pages from `dist/`.

## Content

Selected projects: CCB BI, Standalone Fingerprint Key, JARVIS, Language Lyrics Lab, TechGrow churn analysis and Ollama + n8n. An additional project index links to public repositories. Professional background is based on Nicholas's supplied resume; private business documents and datasets are not published.

## Development

Open `index.html` in a browser, or serve the folder with `python -m http.server 8080` for HTTP checks. No package installation or build step is required. Keep root publication files and `dist/` synchronized before pushing to `main`.

## Interaction and accessibility

- Project filters, project detail dialogs, mobile navigation and email copy.
- Keyboard focus, Escape dismissal, reduced-motion support and local fonts.
- Responsive layouts for mobile, tablet and desktop.
- No analytics, authentication, external runtime scripts or cookies.
- CSP and security headers in `_headers`; no secrets or client-side credentials.

## Assets

Barlow Condensed and Manrope are distributed with their OFL licenses. Icons are from Lucide (license in `assets/icons/LICENSE`). Project imagery is sourced from public project documentation or captured from project previews; the n8n diagram describes the documented workflow. The hero photograph uses Nicholas's provided LinkedIn portrait, edited for layout, with the original retained in the About section.

Hero image editing used the built-in image generation tool. Prompt: preserve the subject's exact identity, smile, hair and polo; replace the wall with flat charcoal #202221; compose a wide photograph with the subject on the right and empty background on the left, without text or props.

Release marker: `2026-09-30-editorial`.
