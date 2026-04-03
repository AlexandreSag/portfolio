export function SiteHeader({
  closeDrawer,
  contactEmail,
  controls,
  currentLanguage,
  isDrawerOpen,
  languages,
  navItems,
  onLanguageChange,
  theme,
  toggleDrawer,
  toggleTheme,
}) {
  return (
    <>
      <header className="topbar">
        <a href="#home" className="brand" onClick={closeDrawer}>
          Alexandre Sage
        </a>

        <nav className="nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeDrawer}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="topbar-controls">
          <button type="button" className="theme-toggle" onClick={toggleTheme}>
            <span>{controls.theme}</span>
            <strong>{theme === 'dark' ? controls.dark : controls.light}</strong>
          </button>

          <div className="lang-switch" aria-label="Language switcher">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                className={item.code === currentLanguage ? 'active' : ''}
                onClick={() => onLanguageChange(item.code)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={isDrawerOpen}
            aria-controls="mobile-drawer"
            onClick={toggleDrawer}
          >
            {isDrawerOpen ? controls.close : controls.menu}
          </button>
        </div>
      </header>

      <div className={`drawer-backdrop ${isDrawerOpen ? 'is-open' : ''}`} onClick={closeDrawer} />
      <aside
        id="mobile-drawer"
        className={`nav-drawer ${isDrawerOpen ? 'is-open' : ''}`}
        aria-hidden={!isDrawerOpen}
      >
        <div className="drawer-head">
          <span className="eyebrow">{controls.menu}</span>
          <button type="button" className="drawer-close" onClick={closeDrawer}>
            {controls.close}
          </button>
        </div>

        <nav className="drawer-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeDrawer}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="drawer-meta">
          <span>{theme === 'dark' ? controls.dark : controls.light}</span>
          <span>{contactEmail}</span>
        </div>
      </aside>
    </>
  );
}
