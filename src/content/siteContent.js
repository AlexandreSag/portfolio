export const PROJECT_KEYS = {
  ichiGo: 'ichi-go-ichi-go',
  shikigami: 'shikigami',
};

export const PROJECT_HASHES = {
  [PROJECT_KEYS.ichiGo]: '#project-ichi-go-ichi-go',
  [PROJECT_KEYS.shikigami]: '#project-shikigami',
};

export const projectMedia = {
  [PROJECT_KEYS.ichiGo]: {
    video: `${import.meta.env.BASE_URL}projects/ichi-go-ichi-go/app-presentation.mp4`,
    images: [
      { src: `${import.meta.env.BASE_URL}projects/ichi-go-ichi-go/home.png`, key: 'home' },
      { src: `${import.meta.env.BASE_URL}projects/ichi-go-ichi-go/lexicon.png`, key: 'lexicon' },
      { src: `${import.meta.env.BASE_URL}projects/ichi-go-ichi-go/learn.png`, key: 'learn' },
      { src: `${import.meta.env.BASE_URL}projects/ichi-go-ichi-go/quiz.png`, key: 'quiz' },
      { src: `${import.meta.env.BASE_URL}projects/ichi-go-ichi-go/results.png`, key: 'results' },
    ],
  },
  [PROJECT_KEYS.shikigami]: {
    images: [
      { src: `${import.meta.env.BASE_URL}projects/shikigami/light-ui.png`, key: 'lightUi' },
      { src: `${import.meta.env.BASE_URL}projects/shikigami/dark-ui.png`, key: 'darkUi' },
    ],
  },
};

export const languages = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'ja', label: 'JP' },
];

export const CONTACT_EMAIL = 'alexandre.sagepro@gmail.com';

export const contactLinks = {
  email: `mailto:${CONTACT_EMAIL}`,
  linkedin: 'https://www.linkedin.com/in/alexandre-sage-08aa57227/',
  cv: `${import.meta.env.BASE_URL}documents/cv-alexandre-sage.pdf`,
};

export const getProjectFromHash = (hash) =>
  Object.entries(PROJECT_HASHES).find(([, value]) => value === hash)?.[0] ?? null;

export const getHashFromProject = (projectKey) => PROJECT_HASHES[projectKey] ?? '#projects';

export const translations = {
  fr: {
    htmlLang: 'fr',
    nav: {
      about: 'À propos',
      experience: 'Expérience',
      projects: 'Projets',
      contact: 'Contact',
    },
    controls: {
      theme: 'Thème',
      light: 'Clair',
      dark: 'Sombre',
      menu: 'Menu',
      close: 'Fermer',
    },
    hero: {
      eyebrow: 'Développeur fullstack · Web · Blockchain · Automatisation',
      availability: 'Disponible pour une alternance en développement web et blockchain',
      titleLead: 'Développeur Fullstack',
      titleAccent: 'Applications web · Automatisation · Blockchain',
      description:
        "Développeur fullstack avec 3 ans d'expérience, actuellement en Bachelor 3 à l'ESGI avec une spécialisation en ingénierie blockchain. Je travaille à l'intersection du produit, de la technique et de l'automatisation.",
      primaryCta: 'Me contacter',
      secondaryCta: 'Voir le CV',
      stats: [
        { value: '3 ans', label: "d'expérience en conditions réelles" },
        { value: 'React / Node', label: 'stack moderne front-end et back-end' },
        { value: 'FR / EN / JP', label: 'travail en contexte international' },
      ],
    },
    profileCard: {
      role: 'Développeur Fullstack',
      location: 'Ballancourt-sur-Essonne, France',
      note: "Fort intérêt pour les LLM locaux, l'automatisation et la conception d'interfaces claires.",
    },
    about: {
      eyebrow: 'Profil',
      title: 'Une approche technique axée sur la livraison.',
      body:
        "J'interviens sur des produits web de bout en bout : interfaces React, API, scripts d'automatisation, déploiements Linux et intégrations métier. Mon parcours combine relation client, production web concrète et spécialisation blockchain.",
      highlights: [
        'PHP, JavaScript/TypeScript et Python en production',
        'Expérience Docker, Git, Linux, SQL et NoSQL',
        'Intérêt marqué pour Ethereum, Solidity et les smart contracts',
        '1 an vécu à Tokyo, avec une immersion linguistique et culturelle complète',
      ],
      pillars: [
        {
          title: 'Front-end clair',
          text: 'Interfaces lisibles, hiérarchie forte, détails de finition et performance perçue.',
        },
        {
          title: 'Back-end utile',
          text: "API, logique métier, scripts et outillage orientés résultat plutôt qu'effet démo.",
        },
        {
          title: 'Exécution autonome',
          text: 'Recueil du besoin, maquettage, livraison, SEO, déploiement et itération en conditions réelles.',
        },
      ],
    },
    stack: {
      eyebrow: 'Stack',
      title: 'Technologies et terrains de jeu',
      groups: [
        {
          title: 'Web',
          items: ['React', 'Next.js', 'Node.js', 'Laravel', 'Symfony', 'Flask'],
        },
        {
          title: 'Langages',
          items: ['TypeScript', 'JavaScript', 'PHP', 'Python', 'Solidity'],
        },
        {
          title: 'Infra & Data',
          items: ['Docker', 'Linux', 'Azure', 'Git', 'MySQL', 'MongoDB'],
        },
      ],
    },
    experience: {
      eyebrow: 'Expérience',
      title: 'Parcours récent',
      items: [
        {
          period: 'Sep 2025 - Jan 2026',
          role: 'Développeur Fullstack',
          company: 'Daelia Digital',
          location: 'Évry · Partiellement en télétravail',
          points: [
            'Développement de sites sur mesure en HTML/CSS, JavaScript, PHP et WordPress.',
            'Mise en place de boutiques e-commerce et de sites vitrines performants.',
            'Optimisation technique pour le SEO et suivi de projet en direct avec les clients.',
          ],
        },
        {
          period: 'Jan 2023 - Jan 2024',
          role: 'Développeur Fullstack',
          company: 'M2i Informatique',
          location: 'Marolles-en-Hurepoix',
          points: [
            'Conception de sites et d’outils avec Laravel, Python, HTML/CSS, PHP et JavaScript.',
            'Recueil des besoins, présentation des maquettes et gestion des retours clients.',
            'Déploiement sur serveurs Linux et création d’un outil de suivi des liaisons fibre optique.',
          ],
        },
        {
          period: 'Mar 2022 - Jan 2023',
          role: 'Développeur Web & Automatisation',
          company: 'PM Groupe France',
          location: 'Paris',
          points: [
            'Création de sites vitrines WordPress pour des professionnels de santé.',
            'Optimisation SEO, intégration de formulaires de contact et de systèmes de prise de rendez-vous.',
            'Automatisation avec Node.js et Puppeteer pour accélérer les opérations répétitives.',
          ],
        },
      ],
    },
    education: {
      eyebrow: 'Formation',
      title: 'Base académique',
      items: [
        {
          period: 'Depuis sep 2025',
          degree: 'Bachelor 3 · Ingénierie de la Blockchain',
          school: 'ESGI',
          detail:
            'Cryptographie, smart contracts, protocoles Bitcoin/Ethereum, React/Node.js, Docker, bases de données SQL/NoSQL et Linux.',
        },
        {
          period: 'Avr 2024 - Juin 2025',
          degree: 'Études intensives de japonais',
          school: 'Intercultural Institute of Japan',
          detail: 'Immersion complète à Tokyo, conversation, grammaire, kanji et adaptabilité interculturelle.',
        },
        {
          period: 'Sep 2021 - Jan 2024',
          degree: 'Bachelor Concepteur de projets SI',
          school: 'ETNA',
          detail: 'Projets PHP, Flask, Node, React, Docker et CI/CD.',
        },
      ],
    },
    certifications: {
      eyebrow: 'Certifications',
      title: 'Formations certifiantes',
      items: [
        {
          title: 'Claude 101',
          source: 'Skilljar',
          detail: 'Certification autour de l’écosystème Claude.',
          href: 'https://verify.skilljar.com/c/sf8zysnjgi7n',
          cta: 'Voir le certificat',
        },
        {
          title: 'Certificat professionnel Google AI',
          source: 'Coursera',
          detail: 'Certification professionnelle orientée IA appliquée.',
          href: 'https://www.coursera.org/account/accomplishments/professional-cert/6X1DX8F4SNTX',
          cta: 'Voir le certificat',
        },
      ],
    },
    projects: {
      eyebrow: 'Projets',
      title: 'Projets sélectionnés',
      intro: 'Voici une sélection de mes projets récents.',
      items: [
        {
          key: PROJECT_KEYS.ichiGo,
          index: '01',
          title: 'Ichi-Go Ichi-Go',
          summary:
            'PWA mobile-first pour apprendre 1 500 mots japonais fréquents avec audio, fiches d’apprentissage, quiz en deux étapes et progression SRS.',
          meta: 'React · TypeScript · Express · SQLite · PWA',
          cta: 'Voir plus',
        },
        {
          key: PROJECT_KEYS.shikigami,
          index: '02',
          title: 'Shikigami',
          summary:
            "Interface web pour piloter Codex depuis le navigateur, avec sessions persistantes, streaming en temps réel, validations (approvals), diff d'espace de travail et bridge local.",
          meta: 'React · Vite · Node.js · SSE · Codex Bridge',
          cta: 'Voir plus',
        },
      ],
    },
    projectDetails: {
      [PROJECT_KEYS.ichiGo]: {
        back: 'Retour au portfolio',
        nameTitle: 'Nom',
        title: 'Ichi-Go Ichi-Go',
        subtitle: 'Application web mobile-first pour apprendre 1 500 mots japonais fréquents.',
        summary:
          'Application web mobile-first pour apprendre 1 500 mots japonais fréquents avec audio, fiches d’apprentissage, quiz en deux étapes et progression SRS.',
        meta: ['PWA installable', 'React + TypeScript', 'Express + SQLite', 'Docker', 'Remotion'],
        nameMeaning:
          'Nom inspiré de l’idée d’avancer un mot à la fois, avec un écho volontaire à l’expression japonaise 一期一会.',
        sections: {
          productTitle: 'Produit',
          productItems: [
            'Catalogue de 1 500 mots japonais fréquents, organisé par niveaux.',
            "Page d'accueil mobile avec mot actif, progression, série (streak) et appels à l'action principaux.",
            'Lexique filtrable par niveau, recherche, écoute mot par mot et fiches détaillées.',
            'Fiches d’apprentissage avec lecture, signification, exemples et composants.',
            'Quiz mobile en deux étapes : QCM puis lecture kana.',
            'Résultats de session avec score, précision détaillée et reprise des erreurs.',
            'Audio MP3 généré hors-ligne et mis en cache pour l’usage PWA.',
            'Synchronisation backend de la progression et authentification par compte.',
          ],
          stackTitle: 'Stack technique',
          stackItems: [
            'Frontend : React 19, TypeScript, Vite, React Router, vite-plugin-pwa, Font Awesome et web-haptics.',
            'Backend : Express 5, SQLite, API auth + profil + progression, cookies de session.',
            'Données : import CSV source, base SQLite de contenu, export JSON front, scripts de migration et de reprise de données (backfill).',
            'Audio : Google Cloud Text-to-Speech, voix Chirp 3 HD, MP3 statiques et préchauffage du cache pour le hors-ligne.',
            'Démo / média : Remotion pour générer localement la vidéo de présentation à partir des vrais écrans React.',
            'Infra : Docker, nginx, compatibilité Traefik et backup SQLite périodique.',
          ],
          mediaTitle: 'Captures et vidéo',
          mediaIntro:
            'Les médias ci-dessous reprennent directement ceux du README : vidéo de présentation générée avec Remotion, puis captures de l’accueil, du lexique, de l’apprentissage, du quiz et des résultats.',
          ctaVideo: 'Voir la vidéo',
        },
        gallery: {
          home: 'Accueil',
          lexicon: 'Lexique',
          learn: 'Apprendre',
          quiz: 'Quiz',
          results: 'Résultats',
        },
      },
      [PROJECT_KEYS.shikigami]: {
        back: 'Retour au portfolio',
        nameTitle: 'Nom',
        title: 'Shikigami',
        subtitle: 'Interface web pour piloter Codex depuis le navigateur.',
        summary:
          'UI web pensée pour exploiter Codex au quotidien avec sessions persistantes, réponses en streaming, validations (approvals), événements d’exécution et bridge local vers le runtime officiel.',
        meta: ['React + Vite', 'Bridge Node.js', 'SSE', 'Sessions persistantes', 'Codex runtime'],
        nameMeaning:
          'Shikigami signifie 式神 : un esprit familier ou serviteur dans le folklore japonais. Le nom évoque ici un agent opérationnel qu’on pilote depuis une interface dédiée.',
        sections: {
          productTitle: 'Produit',
          productItems: [
            'Chat temps réel avec rendu progressif des réponses Codex.',
            'Sessions persistantes liées au workspace courant.',
            'Threads par projet : changer de path recharge les sessions associées.',
            'Streaming SSE des événements du bridge.',
            "États d'exécution clairs : idle, running, completed, interrupted, failed.",
            'Validations (approvals) intégrées directement dans le flux.',
            'Diff de workspace et git diff --stat en direct.',
            "Ajout de pièces jointes (images/fichiers) depuis l'éditeur.",
            "Fenêtre de contexte (context window) et utilisation du runtime visibles dans l'interface.",
            'Auth locale avec whitelist et sessions signées.',
          ],
          stackTitle: 'Stack technique',
          stackItems: [
            'UI React + Vite SPA côté navigateur.',
            'Bridge Node.js en HTTP + SSE entre le navigateur et Codex.',
            'Runtime officiel @openai/codex lancé en JSON-RPC stdio.',
            'État local dans .shikigami/ pour auth, sessions et pièces jointes.',
            'Déploiement perso compatible Traefik, Tailscale et HTTPS.',
          ],
          mediaTitle: 'Captures',
          mediaIntro:
            'Le premier visuel montre l’interface claire complète. Le second montre le même produit en thème sombre.',
        },
        gallery: {
          lightUi: 'Interface claire',
          darkUi: 'Interface sombre',
        },
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Parlons d’une alternance ou d’un projet.',
      text:
        "Je recherche une alternance orientée développement web et blockchain. Pour me contacter, le plus simple reste l’email ou LinkedIn.",
      email: 'Envoyer un email',
      linkedin: 'LinkedIn',
      city: 'Basé en Essonne · Mobile selon le projet',
    },
    footer: 'Portfolio conçu en React, pensé pour évoluer facilement.',
  },
  en: {
    htmlLang: 'en',
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    controls: {
      theme: 'Theme',
      light: 'Light',
      dark: 'Dark',
      menu: 'Menu',
      close: 'Close',
    },
    hero: {
      eyebrow: 'Fullstack developer · Web · Blockchain · Automation',
      availability: 'Open to a web + blockchain apprenticeship',
      titleLead: 'Fullstack Developer',
      titleAccent: 'Web apps · Automation · Blockchain',
      description:
        'Fullstack developer with 3 years of experience, currently in a third-year Bachelor focused on blockchain engineering at ESGI. I work across product, engineering and automation.',
      primaryCta: 'Get in touch',
      secondaryCta: 'View resume',
      stats: [
        { value: '3 years', label: 'of hands-on experience' },
        { value: 'React / Node', label: 'modern frontend and backend stack' },
        { value: 'FR / EN / JP', label: 'comfortable in international contexts' },
      ],
    },
    profileCard: {
      role: 'Fullstack Developer',
      location: 'Ballancourt-sur-Essonne, France',
      note: 'Strong interest in local LLMs, automation, and clean interface design.',
    },
    about: {
      eyebrow: 'Profile',
      title: 'A technical approach centered on delivery.',
      body:
        'I work end-to-end on web products: React interfaces, APIs, automation scripts, Linux deployments and business integrations. My background combines client-facing work, practical web production and blockchain specialization.',
      highlights: [
        'Production experience with PHP, JavaScript/TypeScript and Python',
        'Hands-on with Docker, Git, Linux, SQL and NoSQL',
        'Strong interest in Ethereum, Solidity and smart contracts',
        'One year spent in Tokyo with language and cultural immersion',
      ],
      pillars: [
        {
          title: 'Clear front-end',
          text: 'Readable interfaces, strong hierarchy, crafted details and perceived performance.',
        },
        {
          title: 'Useful back-end',
          text: 'APIs, business logic, scripts and tooling built for outcomes rather than demos.',
        },
        {
          title: 'Autonomous execution',
          text: 'Gathering requirements, wireframing, delivery, SEO, deployment, and real-world iteration.',
        },
      ],
    },
    stack: {
      eyebrow: 'Stack',
      title: 'Technologies and focus areas',
      groups: [
        {
          title: 'Web',
          items: ['React', 'Next.js', 'Node.js', 'Laravel', 'Symfony', 'Flask'],
        },
        {
          title: 'Languages',
          items: ['TypeScript', 'JavaScript', 'PHP', 'Python', 'Solidity'],
        },
        {
          title: 'Infra & Data',
          items: ['Docker', 'Linux', 'Azure', 'Git', 'MySQL', 'MongoDB'],
        },
      ],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Recent track record',
      items: [
        {
          period: 'Sep 2025 - Jan 2026',
          role: 'Fullstack Developer',
          company: 'Daelia Digital',
          location: 'Evry · Hybrid',
          points: [
            'Built custom websites with HTML/CSS, JavaScript, PHP and WordPress.',
            'Delivered e-commerce stores and high-performing showcase websites.',
            'Handled technical SEO and direct client communication.',
          ],
        },
        {
          period: 'Jan 2023 - Jan 2024',
          role: 'Fullstack Developer',
          company: 'M2i Informatique',
          location: 'Marolles-en-Hurepoix',
          points: [
            'Designed websites and tools with Laravel, Python, HTML/CSS, PHP and JavaScript.',
            'Gathered requirements, presented mockups and managed client feedback.',
            'Deployed sites on Linux servers and built a custom fiber-optic link tracking tool.',
          ],
        },
        {
          period: 'Mar 2022 - Jan 2023',
          role: 'Web Developer & Automation',
          company: 'PM Groupe France',
          location: 'Paris',
          points: [
            'Created custom WordPress websites for healthcare professionals.',
            'Worked on SEO, contact forms and online booking systems.',
            'Built automation scripts with Node.js and Puppeteer.',
          ],
        },
      ],
    },
    education: {
      eyebrow: 'Education',
      title: 'Academic background',
      items: [
        {
          period: 'Since Sep 2025',
          degree: 'Bachelor Year 3 · Blockchain Engineering',
          school: 'ESGI',
          detail:
            'Cryptography, smart contracts, Bitcoin/Ethereum protocols, React/Node.js, Docker, SQL/NoSQL and Linux.',
        },
        {
          period: 'Apr 2024 - Jun 2025',
          degree: 'Intensive Japanese studies',
          school: 'Intercultural Institute of Japan',
          detail: 'Full immersion in Tokyo with conversation, grammar, kanji and intercultural adaptability.',
        },
        {
          period: 'Sep 2021 - Jan 2024',
          degree: 'Bachelor in Information Systems Project Design',
          school: 'ETNA',
          detail: 'Projects in PHP, Flask, Node, React, Docker and CI/CD.',
        },
      ],
    },
    certifications: {
      eyebrow: 'Certifications',
      title: 'Certified learning',
      items: [
        {
          title: 'Claude 101',
          source: 'Skilljar',
          detail: 'Certification focused on the Claude ecosystem.',
          href: 'https://verify.skilljar.com/c/sf8zysnjgi7n',
          cta: 'View certificate',
        },
        {
          title: 'Google AI Professional Certificate',
          source: 'Coursera',
          detail: 'Professional certificate focused on applied AI skills.',
          href: 'https://www.coursera.org/account/accomplishments/professional-cert/6X1DX8F4SNTX',
          cta: 'View certificate',
        },
      ],
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected projects',
      intro: 'Here is a selection of my recent projects.',
      items: [
        {
          key: PROJECT_KEYS.ichiGo,
          index: '01',
          title: 'Ichi-Go Ichi-Go',
          summary:
            'A mobile-first PWA to learn 1,500 frequent Japanese words with audio, learning cards, two-step quizzes and SRS progress tracking.',
          meta: 'React · TypeScript · Express · SQLite · PWA',
          cta: 'View more',
        },
        {
          key: PROJECT_KEYS.shikigami,
          index: '02',
          title: 'Shikigami',
          summary:
            'Web interface to operate Codex from the browser with persistent sessions, realtime streaming, approvals, workspace diff and a local bridge.',
          meta: 'React · Vite · Node.js · SSE · Codex Bridge',
          cta: 'View more',
        },
      ],
    },
    projectDetails: {
      [PROJECT_KEYS.ichiGo]: {
        back: 'Back to portfolio',
        nameTitle: 'Name',
        title: 'Ichi-Go Ichi-Go',
        subtitle: 'A mobile-first web app designed to learn 1,500 frequent Japanese words.',
        summary:
          'A mobile-first web app to learn 1,500 frequent Japanese words with audio, study cards, two-step quizzes and SRS progress tracking.',
        meta: ['Installable PWA', 'React + TypeScript', 'Express + SQLite', 'Docker', 'Remotion'],
        nameMeaning:
          'The name is framed as a nod to learning one word at a time, with a deliberate echo of the Japanese expression 一期一会.',
        sections: {
          productTitle: 'Product',
          productItems: [
            'A catalog of 1,500 frequent Japanese words, organized by level.',
            'A mobile home screen with active word, progress, streak and primary CTAs.',
            'A filterable lexicon with level filters, search, per-word audio and detailed cards.',
            'Learning cards with reading, meaning, examples and components.',
            'A two-step mobile quiz: multiple choice first, then kana reading.',
            'Session results with score, detailed accuracy and retry flow for mistakes.',
            'Offline-generated MP3 audio cached for PWA usage.',
            'Backend sync for progress and account-based authentication.',
          ],
          stackTitle: 'Technical stack',
          stackItems: [
            'Frontend: React 19, TypeScript, Vite, React Router, vite-plugin-pwa, Font Awesome and web-haptics.',
            'Backend: Express 5, SQLite, auth/profile/progress API and session cookies.',
            'Data: CSV import, SQLite content database, frontend JSON export and backfill scripts.',
            'Audio: Google Cloud Text-to-Speech, Chirp 3 HD voice, static MP3 delivery and offline cache warmup.',
            'Demo / media: Remotion to generate the presentation video locally from real React screens.',
            'Infra: Docker, nginx, Traefik compatibility and periodic SQLite backups.',
          ],
          mediaTitle: 'Screens and video',
          mediaIntro:
            'The media below directly reuses the README assets: the Remotion-generated presentation video, then screens for home, lexicon, learning, quiz and results.',
          ctaVideo: 'Open video',
        },
        gallery: {
          home: 'Home',
          lexicon: 'Lexicon',
          learn: 'Learn',
          quiz: 'Quiz',
          results: 'Results',
        },
      },
      [PROJECT_KEYS.shikigami]: {
        back: 'Back to portfolio',
        nameTitle: 'Name',
        title: 'Shikigami',
        subtitle: 'Web interface to operate Codex from the browser.',
        summary:
          'A web UI built to use Codex day to day with persistent sessions, streaming responses, approvals, execution events and a local bridge to the official runtime.',
        meta: ['React + Vite', 'Node.js Bridge', 'SSE', 'Persistent sessions', 'Codex runtime'],
        nameMeaning:
          'Shikigami means 式神, a familiar or servant spirit in Japanese folklore. Here the name suggests an operational agent controlled from a dedicated interface.',
        sections: {
          productTitle: 'Product',
          productItems: [
            'Real-time chat with progressive Codex response rendering.',
            'Persistent sessions tied to the current workspace.',
            'Project-based threads reloaded from the current path.',
            'Bridge event streaming over SSE.',
            'Readable run state: idle, running, completed, interrupted or failed.',
            'Approvals integrated directly inside the main feed.',
            'Live workspace diff and git diff --stat summary.',
            'Image and file attachments from the composer.',
            'Visible runtime usage and context window in the UI.',
            'Local auth with whitelist and signed sessions.',
          ],
          stackTitle: 'Technical stack',
          stackItems: [
            'React + Vite SPA in the browser.',
            'Node.js bridge over HTTP + SSE between browser and Codex.',
            'Official @openai/codex runtime through JSON-RPC stdio.',
            'Local state stored in .shikigami/ for auth, sessions and attachments.',
            'Personal deployment compatible with Traefik, Tailscale and HTTPS.',
          ],
          mediaTitle: 'Screens',
          mediaIntro:
            'The first visual shows the full light UI. The second shows the same product in dark theme.',
        },
        gallery: {
          lightUi: 'Light interface',
          darkUi: 'Dark interface',
        },
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk about an apprenticeship or project.",
      text:
        'I am looking for a web and blockchain apprenticeship. Email or LinkedIn are the easiest ways to reach me.',
      email: 'Send an email',
      linkedin: 'LinkedIn',
      city: 'Based in Essonne · Mobile depending on the project',
    },
    footer: 'Built in React and designed to remain easy to update.',
  },
  ja: {
    htmlLang: 'ja',
    nav: {
      about: 'プロフィール',
      experience: '経歴',
      projects: 'プロジェクト',
      contact: '連絡先',
    },
    controls: {
      theme: 'テーマ',
      light: 'ライト',
      dark: 'ダーク',
      menu: 'メニュー',
      close: '閉じる',
    },
    hero: {
      eyebrow: 'フルスタック開発者 · Web · ブロックチェーン · 自動化',
      availability: 'Webおよびブロックチェーン分野での長期インターンを探しています',
      titleLead: 'フルスタック開発者',
      titleAccent: 'Webアプリ · 自動化 · ブロックチェーン',
      description:
        '3年の実務経験を持つフルスタック開発者です。現在は ESGI の Blockchain Engineering 専攻で学びながら、プロダクト、実装、自動化を横断して取り組んでいます。',
      primaryCta: '連絡する',
      secondaryCta: '履歴書を見る',
      stats: [
        { value: '3年', label: '実務経験' },
        { value: 'React / Node', label: 'モダンなフロントエンドとバックエンド' },
        { value: '仏 / 英 / 日', label: '多言語環境での対応' },
      ],
    },
    profileCard: {
      role: 'Fullstack Developer',
      location: 'フランス、Ballancourt-sur-Essonne',
      note: 'ローカル LLM、自動化、クリーンなUI設計に強い関心があります。',
    },
    about: {
      eyebrow: 'プロフィール',
      title: '実装まで見据えた技術志向のアプローチ。',
      body:
        'React の UI、API、業務自動化スクリプト、Linux デプロイ、業務連携まで Web プロダクトを一貫して担当できます。クライアントワーク、実運用の Web 制作、ブロックチェーン専攻が強みです。',
      highlights: [
        'PHP、JavaScript/TypeScript、Python の実務経験',
        'Docker、Git、Linux、SQL、NoSQL を日常的に使用',
        'Ethereum、Solidity、スマートコントラクトへの強い関心',
        '東京での1年間の生活による言語・文化面の適応力',
      ],
      pillars: [
        {
          title: '明快なフロントエンド',
          text: '読みやすさ、明確な情報設計、仕上げの精度、体感性能を重視します。',
        },
        {
          title: '実用的なバックエンド',
          text: 'API、業務ロジック、スクリプト、ツールを成果につながる形で実装します。',
        },
        {
          title: '自走できる実行力',
          text: '要件整理、モック、納品、SEO、デプロイ、改善まで一貫して対応できます。',
        },
      ],
    },
    stack: {
      eyebrow: '技術',
      title: '使用技術と専門領域',
      groups: [
        {
          title: 'Web',
          items: ['React', 'Next.js', 'Node.js', 'Laravel', 'Symfony', 'Flask'],
        },
        {
          title: '言語',
          items: ['TypeScript', 'JavaScript', 'PHP', 'Python', 'Solidity'],
        },
        {
          title: 'インフラ & Data',
          items: ['Docker', 'Linux', 'Azure', 'Git', 'MySQL', 'MongoDB'],
        },
      ],
    },
    experience: {
      eyebrow: '経歴',
      title: '最近の実務',
      items: [
        {
          period: '2025年9月 - 2026年1月',
          role: 'Fullstack Developer',
          company: 'Daelia Digital',
          location: 'Evry · ハイブリッド',
          points: [
            'HTML/CSS、JavaScript、PHP、WordPress を用いたカスタムサイト制作。',
            'EC サイトとコーポレートサイトの構築。',
            '技術的 SEO とクライアントとの直接的なプロジェクト進行を担当。',
          ],
        },
        {
          period: '2023年1月 - 2024年1月',
          role: 'Fullstack Developer',
          company: 'M2i Informatique',
          location: 'Marolles-en-Hurepoix',
          points: [
            'Laravel、Python、HTML/CSS、PHP、JavaScript によるサイトとツール開発。',
            '要件整理、モック提示、クライアントフィードバック対応。',
            'Linux サーバーへのデプロイと光ファイバー回線管理ツールの開発。',
          ],
        },
        {
          period: '2022年3月 - 2023年1月',
          role: 'Web Developer & Automation',
          company: 'PM Groupe France',
          location: 'Paris',
          points: [
            '医療系クライアント向けの WordPress サイト制作。',
            'SEO、問い合わせフォーム、オンライン予約システムを実装。',
            'Node.js と Puppeteer による自動化スクリプトを開発。',
          ],
        },
      ],
    },
    education: {
      eyebrow: '学歴',
      title: '学習背景',
      items: [
        {
          period: '2025年9月から',
          degree: 'Bachelor 3 · Blockchain Engineering',
          school: 'ESGI',
          detail:
            '暗号技術、スマートコントラクト、Bitcoin/Ethereum プロトコル、React/Node.js、Docker、SQL/NoSQL、Linux。',
        },
        {
          period: '2024年4月 - 2025年6月',
          degree: '日本語集中課程',
          school: 'Intercultural Institute of Japan',
          detail: '東京での完全没入型学習。会話、文法、漢字、異文化適応力を強化。',
        },
        {
          period: '2021年9月 - 2024年1月',
          degree: '情報システム設計 Bachelor',
          school: 'ETNA',
          detail: 'PHP、Flask、Node、React、Docker、CI/CD のプロジェクトを経験。',
        },
      ],
    },
    certifications: {
      eyebrow: '認定',
      title: '取得済みの認定資格',
      items: [
        {
          title: 'Claude 101',
          source: 'Skilljar',
          detail: 'Claude のエコシステムに関する認定です。',
          href: 'https://verify.skilljar.com/c/sf8zysnjgi7n',
          cta: '認定を見る',
        },
        {
          title: 'Google AI Professional Certificate',
          source: 'Coursera',
          detail: '実践的な AI スキルに関するプロフェッショナル認定です。',
          href: 'https://www.coursera.org/account/accomplishments/professional-cert/6X1DX8F4SNTX',
          cta: '認定を見る',
        },
      ],
    },
    projects: {
      eyebrow: 'プロジェクト',
      title: '選択したプロジェクト',
      intro: '最近の代表的なプロジェクトを紹介します。',
      items: [
        {
          key: PROJECT_KEYS.ichiGo,
          index: '01',
          title: 'Ichi-Go Ichi-Go',
          summary:
            '音声、学習カード、2段階クイズ、SRS進捗管理を備えた、1,500語の頻出日本語を学ぶためのモバイルファーストPWAです。',
          meta: 'React · TypeScript · Express · SQLite · PWA',
          cta: '詳しく見る',
        },
        {
          key: PROJECT_KEYS.shikigami,
          index: '02',
          title: 'Shikigami',
          summary:
            '永続セッション、リアルタイムストリーミング、approvals、workspace diff、ローカル bridge を備えた Codex 操作用のWebインターフェースです。',
          meta: 'React · Vite · Node.js · SSE · Codex Bridge',
          cta: '詳しく見る',
        },
      ],
    },
    projectDetails: {
      [PROJECT_KEYS.ichiGo]: {
        back: 'ポートフォリオに戻る',
        nameTitle: '名前',
        title: 'Ichi-Go Ichi-Go',
        subtitle: '頻出の日本語1,500語を学ぶために設計したモバイルファーストのWebアプリです。',
        summary:
          '音声、学習カード、2段階クイズ、SRS進捗管理を備えた、頻出の日本語1,500語学習向けモバイルファーストWebアプリです。',
        meta: ['インストール可能PWA', 'React + TypeScript', 'Express + SQLite', 'Docker', 'Remotion'],
        nameMeaning:
          '一語ずつ積み上げていく学習のイメージと、日本語表現の 一期一会 を重ねた名前として扱っています。',
        sections: {
          productTitle: 'プロダクト',
          productItems: [
            'レベル別に整理された頻出の日本語1,500語カタログ。',
            'アクティブ単語、進捗、連続学習記録 (ストリーク)、主要CTAを置いたモバイルホーム。',
            'レベル絞り込み、検索、単語ごとの音声再生を備えた語彙一覧。',
            '読み、意味、例文、構成要素を含む学習カード。',
            '選択式の後にかな読解を行う2段階のモバイルクイズ。',
            'スコア、詳細精度、ミスの再挑戦を含む結果画面。',
            'PWA利用を想定したオフライン生成MP3とキャッシュ。',
            '進捗同期とアカウント認証を行うバックエンド。',
          ],
          stackTitle: '技術スタック',
          stackItems: [
            'Frontend: React 19、TypeScript、Vite、React Router、vite-plugin-pwa、Font Awesome、web-haptics。',
            'Backend: Express 5、SQLite、認証 / プロフィール / 進捗API、セッションCookie。',
            'Data: CSV取り込み、SQLiteコンテンツDB、フロント向けJSON書き出し、backfillスクリプト。',
            'Audio: Google Cloud Text-to-Speech、Chirp 3 HD、静的MP3配信、オフライン用キャッシュウォームアップ。',
            'Demo / media: RemotionでReact画面を再利用した紹介動画をローカル生成。',
            'Infra: Docker、nginx、Traefik互換、定期SQLiteバックアップ。',
          ],
          mediaTitle: '画面と動画',
          mediaIntro:
            '以下のメディアは README で使っていたものをそのまま再利用しています。Remotionで生成した紹介動画と、ホーム、語彙一覧、学習、クイズ、結果の各画面です。',
          ctaVideo: '動画を見る',
        },
        gallery: {
          home: 'ホーム',
          lexicon: '語彙一覧',
          learn: '学習',
          quiz: 'クイズ',
          results: '結果',
        },
      },
      [PROJECT_KEYS.shikigami]: {
        back: 'ポートフォリオに戻る',
        nameTitle: '名前',
        title: 'Shikigami',
        subtitle: 'ブラウザから Codex を操作するためのWebインターフェースです。',
        summary:
          '永続セッション、ストリーミング応答、approvals、実行イベント、ローカル bridge を備え、日常的に Codex を使うために設計した Web UI です。',
        meta: ['React + Vite', 'Node.js Bridge', 'SSE', '永続セッション', 'Codex runtime'],
        nameMeaning:
          'Shikigami は 式神 を意味し、日本の伝承で使い魔や従う霊的存在を指します。ここでは、専用UIから操作する実務的なエージェントという含みです。',
        sections: {
          productTitle: 'プロダクト',
          productItems: [
            'Codex の応答を段階表示するリアルタイムチャット。',
            '現在の workspace に紐づく永続セッション。',
            'path を変えると関連スレッドが切り替わるプロジェクト別スレッド。',
            'bridge イベントの SSE ストリーミング。',
            'idle / running / completed / interrupted / failed の明確な run state。',
            'メインフィード内に統合された approvals。',
            'workspace diff と git diff --stat の表示。',
            'composer からの画像・ファイル添付。',
            'UI 上で確認できる runtime usage と context window。',
            'whitelist と署名付きセッションによるローカル認証。',
          ],
          stackTitle: '技術スタック',
          stackItems: [
            'ブラウザ側は React + Vite SPA。',
            'ブラウザと Codex の間は Node.js bridge が HTTP + SSE で接続。',
            '公式の @openai/codex runtime を JSON-RPC stdio で利用。',
            '.shikigami/ に auth、sessions、attachments などのローカル状態を保存。',
            'Traefik、Tailscale、HTTPS を使った個人運用にも対応。',
          ],
          mediaTitle: '画面',
          mediaIntro:
            '1枚目は実際のライトUIスクリーンショット、2枚目は同じプロダクトのダークテーマです。',
        },
        gallery: {
          lightUi: 'ライトUI',
          darkUi: 'ダークUI',
        },
      },
    },
    contact: {
      eyebrow: '連絡先',
      title: '長期インターンやプロジェクトに関するご相談はこちら。',
      text:
        'Webおよびブロックチェーンの領域で長期インターンを探しています。連絡はメールか LinkedIn が最も確実です。',
      email: 'メールを送る',
      linkedin: 'LinkedIn',
      city: 'Essonne 拠点 · プロジェクトに応じて移動可能',
    },
    footer: 'React で構築し、今後の更新もしやすい設計にしています。',
  },
};
