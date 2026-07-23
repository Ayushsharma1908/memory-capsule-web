import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <Link href="/" className="navbar-brand" aria-label="Memory Capsule home">
        <div className="navbar-logo-icon" aria-hidden="true">
          <div className="navbar-logo-inner" />
        </div>
        <span className="navbar-wordmark">Memory Capsule</span>
      </Link>

      <ul className="navbar-nav" role="list">
        <li>
          <Link href="#features" className="navbar-link">
            Features
          </Link>
        </li>
        <li>
          <Link href="#demo" className="navbar-link">
            Demo
          </Link>
        </li>
        <li>
          <Link href="#roadmap" className="navbar-link">
            Roadmap
          </Link>
        </li>
        <li>
          <a
            href="https://github.com"
            className="navbar-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="#"
            className="navbar-cta"
            id="navbar-chrome-cta"
          >
            Add to Chrome
          </a>
        </li>
      </ul>
    </nav>
  );
}
