# My Portfolio

Personal portfolio site for **Zaid Mushtaq** — Software Developer (backend engineering, distributed systems, AI interests).

**Live site:** [zaid-mushtaq-software-engineer.github.io/My_Portfolio/](https://zaid-mushtaq-software-engineer.github.io/My_Portfolio/)

## Stack

Vanilla HTML, CSS, and JavaScript. Content is data-driven from JSON under `data/`.

## Local preview

```bash
cd My_Portfolio
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080). Use relative paths so GitHub Pages (`/My_Portfolio/`) keeps working when served from the repo root on Pages.

## Editing content

| File | Purpose |
|------|---------|
| `data/profile.json` | Hero, about, contact, social links |
| `data/skills.json` | Skill categories (`items` string arrays — no percentages) |
| `data/projects.json` | Featured projects |

## GitHub Pages

Pages is configured from the **`main`** branch, root `/`. Pushes to `main` trigger a rebuild.

## Sections

Home, About, Skills, Projects, Contact (blog and certificates removed until new content is ready).
