# Inope83 — Personal Portfolio

Static one-page portfolio for **Angelino Rosales Lopes** — software developer and engineering
student based in Dili, Timor-Leste. The goal is contributing to the country's digital
transformation with clean, reliable web applications.

[![GitHub](https://img.shields.io/badge/GitHub-Inope83-14B8A6?style=flat-square&logo=github)](https://github.com/Inope83)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-angelino-14B8A6?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/ange-lopes-61977b3b6/)
[![Email](https://img.shields.io/badge/Email-angelinorosaleslopes1234@gmail.com-14B8A6?style=flat-square&logo=gmail)](mailto:angelinorosaleslopes1234@gmail.com)

---

## Stack

Plain HTML, CSS and vanilla JavaScript — no build step, no framework, no runtime dependency.

```
index.html      markup + section copy
styles.css      design tokens, layout, responsive rules
script.js       typewriter, scroll reveal, mobile menu, stat counters
fonts/          self-hosted WOFF2 (Plus Jakarta Sans, Inter, JetBrains Mono)
images/         responsive WebP with srcset
DESING.MD       design system reference (palette, type scale, spacing)
```

## Run locally

The site is static, so any HTTP server works — do **not** open `index.html` over `file://`,
the reveal animations and fonts need a real origin.

```bash
git clone https://github.com/Inope83/inope_portfolio.git
cd inope_portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

## Design system

Warm teal on ivory, built around hairline rules instead of card containers.

| Token | Value |
| --- | --- |
| Canvas | `#FEFCE8` |
| Primary | `#14B8A6` |
| Primary hover | `#0D9488` |
| Ink | `#134E4A` |
| Ink muted | `#688E8B` |
| Border | `#E8E6D5` |

Type: Plus Jakarta Sans for headings, Inter for body, JetBrains Mono for labels and code.

Accessibility and performance behaviour:

- Every animation is `prefers-reduced-motion` aware and sits on the compositor
  (`opacity` / `transform` only).
- A `<noscript>` rule keeps the scroll-reveal sections visible if JavaScript is unavailable.
- Images use WebP + `srcset`; fonts are self-hosted and preloaded.

## Featured work

| Project | Stack |
| --- | --- |
| Correspondence Management System — letter workflows with hierarchical approvals, tracking codes and role-based access | Python, Django |
| E-commerce Website — product catalog, cart, order management and checkout | HTML, CSS, JavaScript, Django, MySQL |
| Personal Portfolio Website — this site: projects, skills and career timeline | HTML, CSS, JavaScript |
| APORTIL — ticket and booking management for boat trips, with payment states and periodic reports | PHP, MySQL |

## Skills

| Area | Level | Stack |
| --- | --- | --- |
| Frontend | 85% | HTML, CSS, JavaScript, Bootstrap, Responsive Design |
| Backend | 70% | Python, Django, REST API, MySQL, Database Management |
| Tools | 75% | Git, GitHub, VS Code, Figma, Command Line |

## Services

- **Web Development** — responsive, modern sites with HTML, CSS, JavaScript and Django,
  from landing pages to complete web applications.
- **Backend Development** — backend systems and APIs with Python and Django.
- **UI / UX Design** — simple, user-friendly interfaces.

## Experience

**Engineering Student** — Universidade Nacional Timor Lorosa'e (UNTL), 2023 – present
Faculty of Engineering, Science and Technology. Focus on software development, web
development and computer systems.

**Self-Taught Developer** — Personal Projects, 2024 – present
Learning through online courses and building projects: HTML, CSS, JavaScript, Python
and Django.

## Contact

[angelinorosaleslopes1234@gmail.com](mailto:angelinorosaleslopes1234@gmail.com) ·
[GitHub](https://github.com/Inope83) ·
[LinkedIn](https://www.linkedin.com/in/ange-lopes-61977b3b6/)

## License

All rights reserved.