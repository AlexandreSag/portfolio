<div align="center">

**Langue / Language / 言語**  
[FR](./README.md) · **EN** · [JA](./README.ja.md)

</div>

<div align="center">
  <h1>/ Alexandre Sage — Portfolio</h1>
  <p>Personal portfolio — Fullstack Developer · Web · Blockchain · Automation</p>

  <p>
    <a href="https://react.dev/" target="_blank">
      <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    </a>
    <a href="https://vitejs.dev/" target="_blank">
      <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    </a>
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" />
    <a href="https://eslint.org/" target="_blank">
      <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
    </a>
  </p>
</div>

---

## / Overview

This repository contains the source code for my professional portfolio.  
It is a Single Page Application (SPA) built without heavy frameworks (no Next.js or similar), designed to be **fast**, **maintainable** and to provide full control over architecture and performance.

## / Key features

- **Full internationalisation (i18n)** — Available in French, English and Japanese. Content is fully decoupled from logic and UI.
- **Dynamic themes** — Native light / dark mode support, handled entirely through CSS variables with no heavy JS re-renders.
- **Responsive and mobile-first** — Fluid design using `clamp()`, `min()` and optimised breakpoints for all screen sizes.
- **Decoupled architecture** — A custom hook (`usePortfolioApp`) cleanly separates state logic from presentational components.
- **Smart navigation** — Project switching without page reload via the native hash history API and scroll restoration.
- **SEO ready** — Dynamic `lang` attribute and metadata updates.

## / Tech stack

- **Core** : [React 19](https://react.dev/)
- **Build tool** : [Vite](https://vitejs.dev/)
- **Styling** : Vanilla CSS (CSS Variables, Flexbox, CSS Grid)
- **Deployment** : ready for static hosting (Vercel, Netlify, Nginx or GitHub Pages)

## / Project structure

```
src/
├── assets/       # Images, videos, documents (resume)
├── components/   # UI components (Header, PortfolioHome, ProjectDetail…)
├── content/      # Static data and translations (siteContent.js)
├── hooks/        # Front-end logic (usePortfolioApp.js)
├── App.jsx       # Application entry point (orchestration)
├── main.jsx      # React mount point
└── index.css     # Design system, CSS tokens and media queries
```

## / Running locally

[Node.js](https://nodejs.org/en/) is required.

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USER/YOUR_REPO.git
   cd YOUR_REPO
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://127.0.0.1:5184`.

4. **Production build**
   ```bash
   npm run build
   ```
   The output will be in the `dist/` folder.

## / Development principles

1. **Clear front-end** — Strong visual hierarchy, readability and typographic polish.
2. **Scalable structure** — Strict extraction of data (`siteContent.js`) and hooks, designed to connect to a headless CMS down the line.
3. **Zero UI dependencies** — No Material-UI, no Bootstrap. The design system is fully custom.

## / Contact

- **Email** : [alexandre.sagepro@gmail.com](mailto:alexandre.sagepro@gmail.com)
- **LinkedIn** : [Alexandre Sage](https://www.linkedin.com/in/alexandre-sage-08aa57227/)

---
<div align="center">
  <sub>Crafted with care by Alexandre Sage</sub>
</div>
