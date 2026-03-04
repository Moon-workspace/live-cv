# Live-CV

<p align="center">
  <sub>Ler em · Read in · Leer en</sub><br>
  <a href="README.pt.md">🇵🇹 Português</a> &nbsp;&nbsp;·&nbsp;&nbsp; <a href="README.en.md">🇬🇧 English</a> &nbsp;&nbsp;·&nbsp;&nbsp; <a href="README.es.md">🇪🇸 Español</a>
</p>

> **One-page** online CV, responsive and multilingual (PT / ES / EN), with a **visual theme that adapts to the selected language** · designed to be easy to navigate and quick to read.

<p align="center">
  <img src="public/lIVE-cv.png" alt="Live-CV on multiple devices" width="900" />
</p>

**[View demo](https://live-cv-lovat.vercel.app)** → **[Repository](https://github.com/Moon-workspace/live-cv)** → **[Run locally](#-run-locally)**

---

## ✨ About the project

**Live-CV** is a modern approach to professional presentation: an **interactive** CV, **quick to scan for recruiters**, accessible and adapted for desktop and mobile.

Highlights:

- Simple navigation (clear sections)
- Multilingual (PT / ES / EN)
- Visual theme that adapts to the selected language (background, gradients, UI)
- Accessibility and semantics considered from the start

---

## 🎯 Goal

To create a digital CV that:

- is **scannable** in seconds;
- works well on **any device**;
- shows **visual identity** without losing professionalism;
- demonstrates React organisation and architecture (components, context, i18n).

---

## 🧩 Features

- 🌍 **3 languages** (PT, ES, EN) with instant switching
- 🎨 **Theme per language** (background and gradients adapt to the selected language)
- 🧭 Sections: Experience, Education, Skills, Projects, Certificates, Languages, Contact
- 🔗 Direct contact: WhatsApp (opens chat), Email (mailto), LinkedIn, GitHub
- ♿ Accessibility: semantic structure and respect for `prefers-reduced-motion`
- ✨ Animated “N” icon in the header (CSS lava-lamp effect)

---

## 🖼️ Preview

The project cover is at the top. Below, a GIF of the site in action (hero, navigation and language switch).

**Site in action**
<p align="center">
  <img src="docs/LIVE-CV.gif" alt="Live-CV: hero, navigation and languages" width="900" />
</p>

*(Optional later: add `docs/preview-languages.gif` for the language switch in detail, and per-language screenshots in `docs/`.)*

---

## 🧱 Stack & decisions

| Technology   | Use                                      |
| ------------ | ---------------------------------------- |
| React        | Component-based UI                       |
| TypeScript   | Typing / code reliability                 |
| Vite         | Dev server and fast build                |
| Tailwind CSS | Styling system and consistency           |
| i18n (manual)| PT/ES/EN content and theme control       |

**Implementation notes**

- `LanguageContext` centralises the language and lets the theme follow that choice.
- Small, reusable components (nav, sections, cards).
- UI focused on readability and visual hierarchy.

---

## 🗂️ Project structure

```txt
public/                 # static assets (CV PDFs, favicon, mockup, etc.)
src/
  components/          # UI (NavLinks, LanguageSwitcher, FadeInSection, etc.)
  config/              # links (GitHub, LinkedIn, Email, WhatsApp, PDFs)
  context/             # LanguageContext (language state)
  i18n/                # translations.ts (PT/ES/EN)
  App.tsx
  main.tsx
  index.css            # theme, gradients, animations
```

---

## 🧪 Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

---

## 🚀 Deploy (Vercel)

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`

If you use PDFs per language, ensure they are in `public/` and that paths in `src/config/links.ts` match.

---

## 🗺️ Roadmap (next steps)

- Modal/popup for projects with preview and links (demo/repo)
- More README screenshots (desktop/mobile)
- GIF of language switch and scroll
- Micro-animations with `prefers-reduced-motion`

---

## 📄 License

Personal project · [Moon-Workspace](https://github.com/Moon-workspace).
