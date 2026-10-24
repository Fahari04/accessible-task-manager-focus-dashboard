const views = [
  { key: 'today', label: 'Today' },
  { key: 'upcoming', label: 'Upcoming' },
  { key: 'completed', label: 'Completed' },
  { key: 'progress', label: 'Progress' },
]

function ViewTabs({ activeView, setActiveView, isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <nav aria-label="Task views" className="view-nav">
      <button
        type="button"
        className="mobile-nav-toggle"
        aria-expanded={isMobileMenuOpen}
        aria-controls="view-list"
        onClick={() => setIsMobileMenuOpen((current) => !current)}
      >
        Views
      </button>
      <ul id="view-list" className={isMobileMenuOpen ? 'view-list open' : 'view-list'}>
        {views.map((view) => (
          <li key={view.key}>
            <button
              type="button"
              className={activeView === view.key ? 'active-tab' : ''}
              aria-current={activeView === view.key ? 'page' : undefined}
              onClick={() => {
                setActiveView(view.key)
                setIsMobileMenuOpen(false)
              }}
            >
              {view.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default ViewTabs
