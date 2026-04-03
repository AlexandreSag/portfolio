import profileImage from './assets/profile-alexandre-sage.jpg';
import { PortfolioHome } from './components/PortfolioHome';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { SiteHeader } from './components/SiteHeader';
import { CONTACT_EMAIL, contactLinks, languages, projectMedia } from './content/siteContent';
import { usePortfolioApp } from './hooks/usePortfolioApp';

function App() {
  const {
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
  } = usePortfolioApp();

  const activeProjectDetail = activeProject ? t.projectDetails[activeProject] : null;
  const activeProjectMedia = activeProject ? projectMedia[activeProject] : null;

  return (
    <div className="page-shell">
      <div className="background-grid" />

      <SiteHeader
        closeDrawer={closeDrawer}
        contactEmail={CONTACT_EMAIL}
        controls={t.controls}
        currentLanguage={language}
        isDrawerOpen={isDrawerOpen}
        languages={languages}
        navItems={navItems}
        theme={theme}
        toggleDrawer={toggleDrawer}
        toggleTheme={toggleTheme}
        onLanguageChange={setLanguage}
      />

      {activeProjectDetail && activeProjectMedia ? (
        <ProjectDetailPage
          closeLabel={t.controls.close}
          detail={activeProjectDetail}
          media={activeProjectMedia}
          onBack={closeProject}
        />
      ) : (
        <PortfolioHome
          contactLinks={contactLinks}
          content={t}
          onOpenProject={openProject}
          profileImage={profileImage}
        />
      )}

      <footer className="footer">
        <span>{t.footer}</span>
        <span>{CONTACT_EMAIL}</span>
      </footer>
    </div>
  );
}

export default App;
