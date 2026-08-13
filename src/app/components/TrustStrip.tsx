export default function TrustStrip() {
  const badges = [
    {
      icon: (
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2l2.2 4.4L17 7.6l-3.5 3.4.82 4.8L10 13.5l-4.32 2.3.82-4.8L3 7.6l4.8-.96z" />
        </svg>
      ),
      label: "Open Source",
    },
    {
      icon: (
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2.5" y="4" width="15" height="11" rx="2" />
          <path d="M6 15v1.5M14 15v1.5M6 16.5h8" />
        </svg>
      ),
      label: "Chrome Extension",
    },
    {
      icon: (
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 3C6.686 3 4 5.686 4 9s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z" />
          <path d="M10 6v3l2 1.5" />
        </svg>
      ),
      label: "AI Memory",
    },
    {
      icon: (
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2.5L4 5v6c0 3.31 2.686 6 6 7 3.314-1 6-3.69 6-7V5l-6-2.5z" />
        </svg>
      ),
      label: "Privacy First",
    },
    {
      icon: (
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2.5" y="6.5" width="6" height="9" rx="1.5" />
          <rect x="11.5" y="4" width="6" height="11.5" rx="1.5" />
          <path d="M8.5 11h3" />
        </svg>
      ),
      label: "Cross Platform",
      soon: true,
    },
  ];

  const footerLinks = [
    {
      heading: "Product",
      links: [
        { label: "Features", href: "#" },
        { label: "How it Works", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Changelog", href: "#" },
      ],
    },
    {
      heading: "Developers",
      links: [
        { label: "Documentation", href: "#" },
        { label: "API Reference", href: "#" },
        { label: "GitHub", href: "#" },
        { label: "Contribute", href: "#" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    }
  ];

  return (
    <footer className="footer-root" aria-label="Site footer">
      {/* Top ambient separator */}
      <div className="footer-separator" aria-hidden="true" />

      <div className="footer-inner">

        {/* ── Brand column ── */}
        <div className="footer-brand-col">
          {/* Logo mark */}
          <div className="footer-logo-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="rgba(216,195,165,0.1)" />
              <path
                d="M16 8C11.58 8 8 11.58 8 16s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z"
                stroke="rgba(216,195,165,0.7)"
                strokeWidth="1.5"
              />
              <circle cx="16" cy="16" r="3" fill="var(--accent)" opacity="0.8" />
            </svg>
          </div>

          <p className="footer-brand-name">Memory Capsule</p>
          <p className="footer-brand-tagline">
            The memory layer for your<br />AI conversations.
          </p>

          {/* Social links */}
          <div className="footer-social-row" aria-label="Social links">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="footer-social-btn"
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Version badge */}
          <div className="footer-version-badge">
            <span className="footer-version-dot" aria-hidden="true" />
            <span>v0.1 — Built in public</span>
          </div>
        </div>

        {/* ── Navigation columns ── */}
        <nav className="footer-nav-cols" aria-label="Footer navigation">
          {footerLinks.map((col) => (
            <div key={col.heading} className="footer-nav-col">
              <p className="footer-nav-heading">{col.heading}</p>
              <ul className="footer-nav-list" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

      </div>

      {/* ── Trust badges row ── */}
      <div className="footer-badges-row" aria-label="Product trust indicators">
        <div className="footer-badges-inner">
          {badges.map((badge) => (
            <div key={badge.label} className="footer-badge">
              <span className="footer-badge-icon" aria-hidden="true">
                {badge.icon}
              </span>
              <span className="footer-badge-label">{badge.label}</span>
              {badge.soon && (
                <span className="footer-badge-soon">Soon</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Memory Capsule. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy</a>
            <span className="footer-bottom-sep" aria-hidden="true">·</span>
            <a href="#" className="footer-bottom-link">Terms</a>
            <span className="footer-bottom-sep" aria-hidden="true">·</span>
            <a href="#" className="footer-bottom-link">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
