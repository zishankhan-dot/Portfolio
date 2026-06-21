import React, { useState, useEffect } from "react";
import { profile } from "../data/portfolio_data.js";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  const navItems = [
    { label: "About Me", href: "#home" },
    { label: "Portfolio", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`navbar${scrolled ? " navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo" onClick={close}>
          Zishan <span className="logo-bold">Khan</span>
        </a>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={close}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={`tel:${profile.phone}`} className="navbar-cta">
          <div className="cta-icon-wrap">📞</div>
          <div className="cta-text-wrap">
            <span className="cta-label">Call Anytime</span>
            <span className="cta-number">{profile.phone}</span>
          </div>
        </a>

        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
