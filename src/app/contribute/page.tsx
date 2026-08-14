import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contribute — Memory Capsule",
  description: "Help build Memory Capsule. We're open source and love contributions.",
};

const ways = [
  {
    icon: "🐛",
    title: "Report a Bug",
    description: "Found something broken? Open an issue on GitHub and we'll triage it quickly.",
    cta: "Open Issue",
    href: "https://github.com/Ayushsharma1908/memory-capsule-web/issues/new",
    external: true,
  },
  {
    icon: "💡",
    title: "Request a Feature",
    description: "Have an idea to make Memory Capsule better? We'd love to hear it.",
    cta: "Suggest Feature",
    href: "https://github.com/Ayushsharma1908/memory-capsule-web/discussions",
    external: true,
  },
  {
    icon: "🔧",
    title: "Submit a PR",
    description: "Pick up an open issue, fork the repo, and submit a pull request.",
    cta: "View Open Issues",
    href: "https://github.com/Ayushsharma1908/memory-capsule-web/issues",
    external: true,
  },
  {
    icon: "📖",
    title: "Improve Docs",
    description: "Documentation can always be clearer. Fix typos, add examples, or write new guides.",
    cta: "Edit on GitHub",
    href: "https://github.com/Ayushsharma1908/memory-capsule-web",
    external: true,
  },
  {
    icon: "⭐",
    title: "Star the Repo",
    description: "The simplest way to show support and help others discover Memory Capsule.",
    cta: "Star on GitHub",
    href: "https://github.com/Ayushsharma1908/memory-capsule-web",
    external: true,
  },
  {
    icon: "💬",
    title: "Join the Community",
    description: "Chat with the team and other contributors. Share ideas, get help, and stay updated.",
    cta: "Coming Soon",
    href: "#",
    external: false,
  },
];

export default function ContributePage() {
  return (
    <div className="inner-page">
      <div className="inner-page-nav">
        <Link href="/" className="inner-page-back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back home
        </Link>
      </div>

      <div className="inner-page-content">
        <div className="inner-page-hero">
          <p className="inner-page-eyebrow">Contribute</p>
          <h1 className="inner-page-title">Build with us</h1>
          <p className="inner-page-subtitle">
            Memory Capsule is open source and built in public. Every contribution — code, docs, feedback — makes it better.
          </p>
          <a
            href="https://github.com/Ayushsharma1908/memory-capsule-web"
            className="inner-page-primary-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View on GitHub
          </a>
        </div>

        <div className="contribute-grid">
          {ways.map((w) => (
            <div key={w.title} className="contribute-card">
              <span className="contribute-icon">{w.icon}</span>
              <h2 className="contribute-title">{w.title}</h2>
              <p className="contribute-desc">{w.description}</p>
              <a
                href={w.href}
                className="contribute-cta"
                {...(w.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {w.cta}
                {w.external && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2.5 9.5l7-7M3.5 2.5h6v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
