import { useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <img
            src="/images/kristall-logo.png"
            alt="Kristall Akademiyasi Logotipi"
            className="logo-img"
          />
          <div>
            <h1 className="logo-title">Kristall Akademiyasi</h1>
            <p className="logo-subtitle">Ta'limda yuksaklik sari</p>
          </div>
        </div>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            Biz haqimizda
          </a>
          <a href="#programs" onClick={() => setMenuOpen(false)}>
            Dasturlar
          </a>
          <a href="#admissions" onClick={() => setMenuOpen(false)}>
            Qabul
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Aloqa
          </a>
          <button className="apply-btn">Hozir ariza topshiring</button>
        </nav>

        <button
          className="menu-toggle hidden-desktop"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
