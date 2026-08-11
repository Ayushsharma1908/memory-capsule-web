export default function TrustStrip() {
  const badges = [
    {
      icon: (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 1l1.8 3.6L14 5.4l-3 2.9.7 4.1L8 10.4l-3.7 2 .7-4.1-3-2.9 4.2-.8z" />
        </svg>
      ),
      label: "Open Source",
      soon: false,
    },
    {
      icon: (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="12" height="9" rx="1.5" />
          <path d="M5 12v1M11 12v1M5 13h6" />
        </svg>
      ),
      label: "Chrome Extension",
      soon: false,
    },
    {
      icon: (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="8" cy="8" r="5.5" />
          <path d="M8 5v3l2 1.5" />
        </svg>
      ),
      label: "AI Memory",
      soon: false,
    },
    {
      icon: (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 2l1 3h3l-2.5 2 1 3L8 8.5 5.5 10l1-3L4 5h3z" />
          <path d="M8 2v12M2 8h12" strokeOpacity="0.3" />
        </svg>
      ),
      label: "Privacy First",
      soon: false,
    },
    {
      icon: (
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="5" width="5" height="7" rx="1" />
          <rect x="9" y="3" width="5" height="9" rx="1" />
          <path d="M7 9h2" />
        </svg>
      ),
      label: "Cross Platform",
      soon: true,
    },
  ];

  const footerItems = [
    "Memory Capsule v0.1",
    "Built in public",
    "© 2025 Memory Capsule",
  ];

  return (
    <footer className="trust-strip" aria-label="Product trust indicators">
      <div className="trust-strip-inner">
        <p className="trust-eyebrow">What&apos;s inside</p>

        <div className="trust-badges" role="list">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="trust-badge"
              role="listitem"
              
            >
              <span className="trust-badge-icon" aria-hidden="true">
                {badge.icon}
              </span>
              <span className="trust-badge-label">{badge.label}</span>
              {badge.soon && (
                <span className="trust-badge-soon">Soon</span>
              )}
            </div>
          ))}
        </div>

        <div className="trust-divider" aria-hidden="true" />

        <div className="trust-footer" role="contentinfo">
          {footerItems.map((item) => (
            <span key={item} className="trust-footer-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
