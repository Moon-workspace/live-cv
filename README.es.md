# Live-CV

[🇵🇹 Português](README.pt.md) · [🇬🇧 English](README.en.md) · [🇪🇸 Español](README.es.md)

> Currículo online **one-page**, responsive y multilingüe (PT / ES / EN), con **tema visual que se adapta al idioma** · pensado para navegar fácil y leer rápido.

<p align="center">
  <img src="public/lIVE-cv.png" alt="Live-CV en varios dispositivos" width="900" />
</p>

**[Ver demo](https://live-cv-lovat.vercel.app)** → **[Repositorio](https://github.com/Moon-workspace/live-cv)** → **[Ejecutar en local](#-ejecutar-en-local)**

---

## ✨ Sobre el proyecto

**Live-CV** es un enfoque moderno de presentación profesional: un currículum **interactivo**, **rápido de escanear para reclutadores**, accesible y adaptado a escritorio y móvil.

Puntos fuertes:

- Navegación sencilla (secciones claras)
- Multilingüe (PT / ES / EN)
- Tema visual que se adapta al idioma (fondo, gradientes, UI)
- Accesibilidad y semántica desde el inicio

---

## 🎯 Objetivo

Crear un CV digital que:

- sea **escaneable** en segundos;
- funcione bien en **cualquier dispositivo**;
- muestre **identidad visual** sin perder profesionalidad;
- demuestre organización y arquitectura en React (componentes, contexto e i18n).

---

## 🧩 Funcionalidades

- 🌍 **3 idiomas** (PT, ES, EN) con cambio instantáneo
- 🎨 **Tema por idioma** (fondo y gradientes se adaptan al idioma elegido)
- 🧭 Secciones: Experiencia, Formación, Competencias, Proyectos, Certificados, Idiomas, Contacto
- 🔗 Contacto directo: WhatsApp (abre chat), Email (mailto), LinkedIn, GitHub
- ♿ Accesibilidad: estructura semántica y respeto a `prefers-reduced-motion`
- ✨ Icono animado “N” en el header (efecto lava-lamp en CSS)

---

## 🖼️ Preview

La portada del proyecto está arriba. Abajo, un GIF del sitio en acción (hero, navegación y cambio de idioma).

**Sitio en acción**
<p align="center">
  <img src="docs/LIVE-CV.gif" alt="Live-CV: hero, navegación e idiomas" width="900" />
</p>

*(Opcional más adelante: añadir `docs/preview-languages.gif` para el cambio de idioma en detalle, y capturas por idioma en `docs/`.)*

---

## 🧱 Stack y decisiones

| Tecnología   | Uso                                      |
| ------------ | ---------------------------------------- |
| React       | UI componentizada                        |
| TypeScript  | Tipado y fiabilidad del código            |
| Vite        | Servidor de desarrollo y build rápido    |
| Tailwind CSS| Sistema de estilos y consistencia        |
| i18n (manual)| Contenidos PT/ES/EN y control del tema   |

**Notas de implementación**

- `LanguageContext` centraliza el idioma y permite que el tema siga esa elección.
- Componentes pequeños y reutilizables (nav, secciones, cards).
- UI centrada en legibilidad y jerarquía visual.

---

## 🗂️ Estructura del proyecto

```txt
public/                 # assets estáticos (PDFs del CV, favicon, mockup, etc.)
src/
  components/          # UI (NavLinks, LanguageSwitcher, FadeInSection, etc.)
  config/              # enlaces (GitHub, LinkedIn, Email, WhatsApp, PDFs)
  context/             # LanguageContext (estado del idioma)
  i18n/                # translations.ts (PT/ES/EN)
  App.tsx
  main.tsx
  index.css            # tema, gradientes, animaciones
```

---

## 🧪 Ejecutar en local

```bash
npm install
npm run dev
```

Build de producción:

```bash
npm run build
npm run preview
```

---

## 🚀 Deploy (Vercel)

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`

Si usas PDFs por idioma, asegúrate de que estén en `public/` y que las rutas en `src/config/links.ts` coincidan.

---

## 🗺️ Roadmap (próximos pasos)

- Modal/popup de proyectos con preview y enlaces (demo/repo)
- Más capturas en el README (desktop/móvil)
- GIF del cambio de idioma y scroll
- Micro animaciones con `prefers-reduced-motion`

---

## 📄 Licencia

Proyecto personal · [Moon-Workspace](https://github.com/Moon-workspace).
