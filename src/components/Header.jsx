const navItems = ['Home', 'Studio', 'Services', 'Contact', 'FAQs'];

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Elementum home">
        Elementum
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a href={`#${item.toLowerCase()}`} key={item}>
            {item}
          </a>
        ))}
      </nav>
      <button className="menu-button" aria-label="Open navigation menu">
        <span />
        <span />
      </button>
    </header>
  );
}
