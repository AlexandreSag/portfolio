<div align="center">

**Langue / Language / 言語**  
**FR** · [EN](./README.en.md) · [JA](./README.ja.md)

</div>

<div align="center">
  <h1>/ Alexandre Sage — Portfolio</h1>
  <p>Portfolio personnel de développeur Fullstack · Web · Blockchain · Automatisation</p>

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

## / Présentation

Ce dépôt contient le code source de mon portfolio professionnel.  
Il s'agit d'une Single Page Application (SPA) construite sans framework complexe (pas de Next.js ou autre), dans le but d'être **rapide**, **maintenable** et d'offrir un contrôle total sur l'architecture et les performances.

## / Fonctionnalités phares

- **Internationalisation complète (i18n)** — Disponible en français, anglais et japonais. Le contenu est totalement découplé de la logique et de l'UI.
- **Thèmes dynamiques** — Support natif du mode clair / sombre, géré à 100 % via des variables CSS sans re-render lourd en JS.
- **Responsive et mobile-first** — Design fluide utilisant `clamp()`, `min()` et des breakpoints optimisés pour toutes les tailles d'écran.
- **Architecture découplée** — Utilisation d'un custom hook (`usePortfolioApp`) pour séparer totalement la logique d'état des composants de présentation.
- **Navigation intelligente** — Changement de projet sans rechargement de page via le hash history natif et scroll restoration.
- **SEO ready** — Changement dynamique de la balise `lang` et des métadonnées.

## / Stack technique

- **Core** : [React 19](https://react.dev/)
- **Build tool** : [Vite](https://vitejs.dev/)
- **Styling** : Vanilla CSS (CSS Variables, Flexbox, CSS Grid)
- **Déploiement** : prêt pour déploiement statique (Vercel, Netlify, Nginx ou GitHub Pages)

## / Architecture du projet

```
src/
├── assets/       # Images, vidéos, documents (CV)
├── components/   # Composants d'interface (Header, PortfolioHome, ProjectDetail…)
├── content/      # Données statiques et traductions (siteContent.js)
├── hooks/        # Logique front-end (usePortfolioApp.js)
├── App.jsx       # Point d'entrée de l'application (orchestration)
├── main.jsx      # Point de montage React
└── index.css     # Design system, tokens CSS et media queries
```

## / Lancement en local

[Node.js](https://nodejs.org/en/) est requis.

1. **Cloner le repository**
   ```bash
   git clone https://github.com/VOTRE_USER/VOTRE_REPO.git
   cd VOTRE_REPO
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```
   L'application sera accessible sur `http://127.0.0.1:5184`.

4. **Build pour la production**
   ```bash
   npm run build
   ```
   Le build se trouvera dans le dossier `dist/`.

## / Principes de développement

1. **Front-end clair** — Hiérarchie visuelle forte, lisibilité et finitions typographiques.
2. **Structure évolutive** — Extraction stricte des données (`siteContent.js`) et des hooks, pensée pour être reliée à un CMS headless à terme.
3. **Zéro dépendance UI** — Pas de Material-UI, pas de Bootstrap. Le design system est fait sur mesure.

## / Contact

- **Email** : [alexandre.sagepro@gmail.com](mailto:alexandre.sagepro@gmail.com)
- **LinkedIn** : [Alexandre Sage](https://www.linkedin.com/in/alexandre-sage-08aa57227/)

---
<div align="center">
  <sub>Fait avec soin par Alexandre Sage</sub>
</div>
