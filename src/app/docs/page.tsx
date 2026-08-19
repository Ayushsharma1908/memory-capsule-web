import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation — Memory Capsule",
  description: "Learn how to set up and use Memory Capsule to build your personal AI knowledge base.",
};

const sections = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: "🚀",
    articles: [
      {
        title: "Installing the Chrome Extension",
        href: "/docs/installing-chrome-extension",
      },
      {
        title: "Connecting your first AI chat",
        href: "/docs/connecting-first-ai-chat",
      },
      {
        title: "Your first saved memory",
        href: "/docs/first-saved-memory",
      },
      {
        title: "Understanding the dashboard",
        href: "/docs/understanding-dashboard",
      },
    ],
  },
  {
    id: "core-concepts",
    title: "Core Concepts",
    icon: "🧠",
    articles: [
      {
        title: "What is a Memory?",
        href: "/docs/what-is-a-memory",
      },
      {
        title: "How AI tagging works",
        href: "/docs/how-ai-tagging-works",
      },
      {
        title: "Memory decay & relevance scoring",
        href: "/docs/memory-decay-relevance-scoring",
      },
      {
        title: "Collections and workspaces",
        href: "/docs/collections-workspaces",
      },
    ],
  },
  {
    id: "integrations",
    title: "Integrations",
    icon: "🔗",
    articles: [
      {
        title: "ChatGPT integration",
        href: "/docs/chatgpt-integration",
      },
      {
        title: "Claude integration",
        href: "/docs/claude-integration",
      },
      {
        title: "Gemini integration",
        href: "/docs/gemini-integration",
      },
      {
        title: "Notion export",
        href: "/docs/notion-export",
      },
      {
        title: "Obsidian export",
        href: "/docs/obsidian-export",
      },
    ],
  },
  {
    id: "advanced",
    title: "Advanced",
    icon: "⚡",
    articles: [
      {
        title: "Using the REST API",
        href: "/docs/api-reference",
      },
      {
        title: "Webhook events",
        href: "/docs/webhook-events",
      },
      {
        title: "Custom AI prompts",
        href: "/docs/custom-ai-prompts",
      },
      {
        title: "Self-hosting (coming soon)",
        href: "/docs/self-hosting",
      },
    ],
  },
];

export default function DocsPage() {
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
          <p className="inner-page-eyebrow">Documentation</p>
          <h1 className="inner-page-title">Everything you need to know</h1>
          <p className="inner-page-subtitle">
            Guides, references and examples to help you build your AI memory layer.
          </p>
        </div>

        <div className="docs-search-bar">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.4" />
            <path d="M10.5 10.5l2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <span className="docs-search-placeholder">Search documentation…</span>
          <kbd className="docs-search-kbd">⌘K</kbd>
        </div>

        <div className="docs-grid">
          {sections.map((section) => (
            <div key={section.id} className="docs-section-card">
              <div className="docs-section-icon">{section.icon}</div>
              <h2 className="docs-section-title">{section.title}</h2>
              <ul className="docs-article-list">
                {section.articles.map((article) => (
                  <li key={article.title}>
                    <Link href={article.href} className="docs-article-link">
                      {article.title}
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.5 9.5l7-7M3.5 2.5h6v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="docs-cta-strip">
          <p className="docs-cta-text">Can&apos;t find what you&apos;re looking for?</p>
          <a
            href="https://github.com/Ayushsharma1908/memory-capsule-web/issues"
            className="docs-cta-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open an issue on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}
