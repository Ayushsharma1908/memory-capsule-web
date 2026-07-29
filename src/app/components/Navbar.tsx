"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`pill-navbar ${isOpen ? "is-open" : ""}`}
      role="navigation"
      aria-label="Site navigation"
    >
      {/* Hamburger / Close icon button */}
      <button
        type="button"
        className="pill-nav-icon"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X size={18} strokeWidth={2.5} color="#1C1C1C" />
        ) : (
          <Menu size={18} strokeWidth={2.5} color="#1C1C1C" />
        )}
      </button>

      {/* Nav Content: Horizontal landscape expansion on Desktop, Vertical dropdown below on Mobile/Tablet */}
      <div className="pill-nav-collapsible">
        <div className="pill-nav-links">
          <a href="#features" className="pill-nav-link" onClick={() => setIsOpen(false)}>
            Features
          </a>
          <a href="#demo" className="pill-nav-link" onClick={() => setIsOpen(false)}>
            Demo
          </a>
          <a href="#roadmap" className="pill-nav-link" onClick={() => setIsOpen(false)}>
            Roadmap
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-nav-link"
            onClick={() => setIsOpen(false)}
          >
            GitHub
          </a>
        </div>
        <a
          href="#"
          className="pill-nav-email"
          id="nav-add-to-chrome"
          onClick={() => setIsOpen(false)}
        >
          Add to Chrome
        </a>
      </div>
    </div>
  );
}
