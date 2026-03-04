# Live-CV

> Currículo online **one-page**, responsivo e multilingue (PT / ES / EN), com **tema visual que se adapta ao idioma** · feito para ser simples de navegar e rápido de ler.



**[Ver demo](https://live-cv-lovat.vercel.app)** → **[Repositório](https://github.com/Moon-workspace/live-cv)** → **[Correr em local](#-como-correr-em-local)**



---

## ✨ Sobre o projeto

O **Live-CV** é uma abordagem moderna à apresentação profissional: um currículo **interativo**, com **leitura rápida para recrutadores**, acessível e adaptado a desktop e mobile.

Destaques:

- Navegação simples (secções claras)
- Multilingue (PT / ES / EN)
- Tema visual adaptativo por idioma (fundo + gradientes + UI)
- Acessibilidade e semântica pensadas desde o início

---

## 🎯 Objetivo

Criar um CV digital que:

- seja **escaneável** em poucos segundos;
- funcione bem em **qualquer dispositivo**;
- mostre **identidade visual** sem perder profissionalismo;
- demonstre organização e arquitetura em React (componentização, contexto e i18n).

---

## 🧩 Funcionalidades

- 🌍 **3 idiomas** (PT, ES, EN) com troca instantânea
- 🎨 **Tema por idioma** (fundo + gradientes adaptam ao idioma selecionado)
- 🧭 Secções: Experiência, Formação, Competências, Projetos, Certificados, Línguas, Contacto
- 🔗 Contactos diretos: WhatsApp (abre conversa), Email (mailto), LinkedIn, GitHub
- ♿ Acessibilidade: estrutura semântica + respeito por `prefers-reduced-motion`
- ✨ Ícone animado “N” no header (lava-lamp em CSS)

---

## 🖼️ Preview

A capa do projeto está no topo. Em baixo, um GIF do site em ação (hero, navegação e troca de idioma).

**Site em ação**
<p align="center">
  <img src="docs/LIVE-CV.gif" alt="Live-CV: hero, navegação e idiomas" width="900" />
</p>

*(Se quiseres mais tarde: podes adicionar `docs/preview-languages.gif` para a troca de idioma em detalhe, e screenshots por idioma em `docs/`.)*

---

## 🧱 Stack & decisões


| Tecnologia    | Uso                                   |
| ------------- | ------------------------------------- |
| React         | UI componentizada                     |
| TypeScript    | Tipagem / confiança no código         |
| Vite          | Dev server + build rápido             |
| Tailwind CSS  | Sistema de estilos e consistência     |
| i18n (manual) | Conteúdos PT/ES/EN e controlo do tema |


**Notas de implementação**

- `LanguageContext` centraliza idioma e permite que o tema acompanhe essa escolha.
- Componentes pequenos e reutilizáveis (nav, secções, cards).
- UI focada em leitura e hierarquia visual.

---

## 🗂️ Estrutura do projeto

```txt
public/                 # assets estáticos (PDFs do CV, favicon, mockup, etc.)
src/
  components/           # UI (NavLinks, LanguageSwitcher, FadeInSection, etc.)
  config/               # links (GitHub, LinkedIn, Email, WhatsApp, PDFs)
  context/              # LanguageContext (estado do idioma)
  i18n/                 # translations.ts (PT/ES/EN)
  App.tsx
  main.tsx
  index.css             # tema, gradientes, animações
```

---

## 🧪 Como correr em local

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

---

## 🚀 Deploy (Vercel)

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`

Se estiveres a usar PDFs por idioma, garante que estão em `public/` e que os caminhos em `src/config/links.ts` estão corretos.

---

## 🗺️ Roadmap (próximos upgrades)

- Modal/Popup de projetos com preview + links (demo/repo)
- Mais screenshots no README (desktop/mobile)
- GIF da troca de idioma + scroll
- Micro animações com `prefers-reduced-motion`

---

## 📄 Licença

Projeto pessoal · [Moon-Workspace](https://github.com/Moon-workspace).