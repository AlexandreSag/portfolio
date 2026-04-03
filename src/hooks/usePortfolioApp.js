import { startTransition, useEffect, useState } from 'react';
import { getHashFromProject, getProjectFromHash, translations } from '../content/siteContent';

const DEFAULT_LANGUAGE = 'fr';
const DEFAULT_THEME = 'light';
const LANGUAGE_STORAGE_KEY = 'portfolio-language';
const THEME_STORAGE_KEY = 'portfolio-theme';

const forceScrollTop = () => {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

const scrollToProjectsSection = () => {
  const projectsSection = document.querySelector('#projects');

  if (projectsSection) {
    projectsSection.scrollIntoView({ block: 'start' });
    return;
  }

  forceScrollTop();
};

const readInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return storedLanguage && translations[storedLanguage] ? storedLanguage : DEFAULT_LANGUAGE;
};

const readInitialTheme = () => {
  if (typeof window === 'undefined') {
    return DEFAULT_THEME;
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const readInitialProject = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  return getProjectFromHash(window.location.hash);
};

export function usePortfolioApp() {
  const [language, setLanguageState] = useState(readInitialLanguage);
  const [theme, setTheme] = useState(readInitialTheme);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(readInitialProject);
  const t = translations[language];

  const navItems = [
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ];

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    document.title = 'Alexandre Sage | Portfolio';
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language, t.htmlLang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    const syncProjectFromLocation = () => {
      const nextProject = getProjectFromHash(window.location.hash);
      setActiveProject(nextProject);
      setIsDrawerOpen(false);

      if (nextProject) {
        requestAnimationFrame(() => {
          requestAnimationFrame(forceScrollTop);
        });
      }
    };

    syncProjectFromLocation();
    window.addEventListener('hashchange', syncProjectFromLocation);
    window.addEventListener('popstate', syncProjectFromLocation);

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
      window.removeEventListener('hashchange', syncProjectFromLocation);
      window.removeEventListener('popstate', syncProjectFromLocation);
    };
  }, []);

  useEffect(() => {
    if (activeProject) {
      forceScrollTop();
    }
  }, [activeProject]);

  const setLanguage = (nextLanguage) => {
    if (!translations[nextLanguage] || nextLanguage === language) {
      return;
    }

    startTransition(() => {
      setLanguageState(nextLanguage);
    });
  };

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((currentValue) => !currentValue);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openProject = (projectKey) => {
    const projectHash = getHashFromProject(projectKey);

    if (projectHash === '#projects') {
      return;
    }

    window.history.pushState({ projectKey }, '', projectHash);
    closeDrawer();

    startTransition(() => {
      setActiveProject(projectKey);
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(forceScrollTop);
    });
  };

  const closeProject = () => {
    window.history.pushState({}, '', '#projects');
    closeDrawer();

    startTransition(() => {
      setActiveProject(null);
    });

    requestAnimationFrame(scrollToProjectsSection);
  };

  return {
    activeProject,
    closeDrawer,
    closeProject,
    isDrawerOpen,
    language,
    navItems,
    openProject,
    setLanguage,
    t,
    theme,
    toggleDrawer,
    toggleTheme,
  };
}
