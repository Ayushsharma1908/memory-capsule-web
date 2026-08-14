import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Memory Capsule",
  description: "The story behind Memory Capsule — why we built it and where we're going.",
};

export default function AboutPage() {
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
          <p className="inner-page-eyebrow">About</p>
          <h1 className="inner-page-title">The memory layer for the AI era</h1>
          <p className="inner-page-subtitle">
            We believe AI conversations hold some of your most valuable thinking. They shouldn&apos;t disappear.
          </p>
        </div>

        <div className="about-story">
          <div className="about-section">
            <h2 className="about-section-title">The problem we&apos;re solving</h2>
            <p className="about-section-body">
              Every day, millions of people have breakthrough moments inside AI chatbots — a clean explanation of a complex topic, a solution to a hard problem, a framework that changes how they think. Then they close the tab, and it&apos;s gone.
            </p>
            <p className="about-section-body">
              Chat history doesn&apos;t scale. You can&apos;t search across conversations. You can&apos;t see patterns. You can&apos;t resurface the insight you need at the right moment.
            </p>
          </div>

          <div className="about-section">
            <h2 className="about-section-title">Our solution</h2>
            <p className="about-section-body">
              Memory Capsule sits quietly in your browser, watching as you learn. When you have an insight worth keeping, it captures it, extracts the key ideas, tags it intelligently, and makes it searchable — instantly.
            </p>
            <p className="about-section-body">
              Think of it as a second brain that specifically understands how you think in conversation with AI. Not just a bookmark manager. An actual memory layer.
            </p>
          </div>

          <div className="about-section">
            <h2 className="about-section-title">Built in public</h2>
            <p className="about-section-body">
              Memory Capsule is open source. We believe the tools that handle your most personal knowledge should be transparent, auditable, and community-owned. Follow our progress on{" "}
              <a
                href="https://github.com/Ayushsharma1908/memory-capsule-web"
                className="about-inline-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>
          </div>

          <div className="about-values">
            {[
              { icon: "🔒", title: "Privacy first", body: "Your memories never train our models. You own your data completely." },
              { icon: "🌐", title: "Open source", body: "Full transparency. Fork it, audit it, self-host it." },
              { icon: "⚡", title: "Instant recall", body: "Search across all your AI learnings in milliseconds." },
              { icon: "🔗", title: "Works everywhere", body: "ChatGPT, Claude, Gemini — capture from any AI assistant." },
            ].map((v) => (
              <div key={v.title} className="about-value-card">
                <span className="about-value-icon">{v.icon}</span>
                <h3 className="about-value-title">{v.title}</h3>
                <p className="about-value-body">{v.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-cta-row">
          <Link href="/pricing" className="inner-page-primary-cta">
            See Pricing
          </Link>
          <a
            href="https://github.com/Ayushsharma1908/memory-capsule-web"
            className="inner-page-secondary-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Star on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
