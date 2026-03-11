import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className="portfolio-navbar">
      <div className="nav-inner">
        <Link to="/" className="nav-brand" onClick={() => window.scrollTo(0, 0)}>
          Simardeep Singh
        </Link>
        <button className="nav-toggle" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button type="button" className="nav-link" onClick={() => scrollTo(id)}>
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
