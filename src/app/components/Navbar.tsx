import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="pill-navbar">
      <div className="pill-nav-icon">
        <Menu size={18} strokeWidth={2.5} color="#1C1C1C" />
      </div>
      <div className="pill-nav-collapsible">
        <div className="pill-nav-links">
          <a href="#features" className="pill-nav-link">Features</a>
          <a href="#demo" className="pill-nav-link">Demo</a>
          <a href="#roadmap" className="pill-nav-link">Roadmap</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="pill-nav-link">GitHub</a>
        </div>
        <a href="#" className="pill-nav-email" id="nav-add-to-chrome">
          Add to Chrome
        </a>
      </div>
    </div>
  );
}
