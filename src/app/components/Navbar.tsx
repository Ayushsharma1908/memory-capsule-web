"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Sparkles,
  Play,
  Map,
  GitFork,
  Download,
} from "lucide-react";

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
      {/* Menu / Close button */}
      <button
        type="button"
        className="pill-nav-icon"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X size={19} strokeWidth={2.5} />
        ) : (
          <Menu size={19} strokeWidth={2.5} />
        )}
      </button>

      {/* Navigation */}
      <div className="pill-nav-collapsible">
        <div className="pill-nav-links">
          <a
            href="#features"
            className="pill-nav-link"
            onClick={() => setIsOpen(false)}
          >
            <span className="pill-nav-link-icon">
              <Sparkles size={17} strokeWidth={2} />
            </span>
            <span>Features</span>
          </a>

          <a
            href="#demo"
            className="pill-nav-link"
            onClick={() => setIsOpen(false)}
          >
            <span className="pill-nav-link-icon">
              <Play size={17} strokeWidth={2} />
            </span>
            <span>Demo</span>
          </a>

          <a
            href="#roadmap"
            className="pill-nav-link"
            onClick={() => setIsOpen(false)}
          >
            <span className="pill-nav-link-icon">
              <Map size={17} strokeWidth={2} />
            </span>
            <span>Roadmap</span>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-nav-link"
            onClick={() => setIsOpen(false)}
          >
            <span className="pill-nav-link-icon">
              <GitFork size={17} strokeWidth={2} />
            </span>
            <span>GitHub</span>
          </a>
        </div>

        <a
          href="#"
          className="pill-nav-email"
          id="nav-add-to-chrome"
          onClick={() => setIsOpen(false)}
        >
          <Download size={17} strokeWidth={2} />
          <span>Add to Chrome</span>
        </a>
      </div>
    </div>
  );
}