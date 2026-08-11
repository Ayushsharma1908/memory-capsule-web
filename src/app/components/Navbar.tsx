"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  Sparkles,
  Play,
  GitFork,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = (targetId: string) => {
    setIsOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("features");
            }}
          >
            <span className="pill-nav-link-icon">
              <Sparkles size={17} strokeWidth={2} />
            </span>
            <span>Features</span>
          </a>

          <a
            href="#how-it-works"
            className="pill-nav-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("how-it-works");
            }}
          >
            <span className="pill-nav-link-icon">
              <Play size={17} strokeWidth={2} />
            </span>
            <span>Demo</span>
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
          href="#hero"
          className="pill-nav-email"
          onClick={() => setIsOpen(false)}
        >
          <Image src="/chrome-icon.svg" alt="Chrome" width={18} height={18} />
          <span>Add to Chrome</span>
        </a>
      </div>
    </div>
  );
}