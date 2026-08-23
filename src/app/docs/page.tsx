import type { Metadata } from "next";
import Link from "next/link";
import { DOC_CATEGORIES } from "@/lib/docs";
import DocsSearch from "@/app/components/docs/DocsSearch";
import {
  Rocket,
  Lightbulb,
  Puzzle,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation — Memory Capsule",
  description:
    "Guides, references, and examples to help you build your personal AI memory layer.",
};

const CATEGORY_ICONS = {
  "getting-started": Rocket,
  "core-concepts": Lightbulb,
  integrations: Puzzle,
  advanced: Wrench,
};

export default function DocsPage() {
  return (
    <div className="docs-index-page">
      {/* Page hero */}
      <header className="docs-index-hero">
        <p className="docs-index-eyebrow">Documentation</p>
        <h1 className="docs-index-title">Everything you need to know</h1>
        <p className="docs-index-subtitle">
          Guides, references, and examples to help you build your personal AI
          memory layer.
        </p>
      </header>

      {/* Search */}
      <DocsSearch />

      {/* Category grid */}
      <div className="docs-index-grid">
        {DOC_CATEGORIES.map((cat) => {
          const Icon =
            CATEGORY_ICONS[cat.id as keyof typeof CATEGORY_ICONS] ?? Lightbulb;
          return (
            <div key={cat.id} className="docs-index-card">
              <div className="docs-index-card-header">
                <span className="docs-index-card-icon" aria-hidden="true">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <h2 className="docs-index-card-title">{cat.title}</h2>
              </div>
              <ul className="docs-index-article-list">
                {cat.articles.map((article) => (
                  <li key={article.href}>
                    <Link
                      href={article.href}
                      className="docs-index-article-link"
                    >
                      <span className="docs-index-article-title">
                        {article.title}
                      </span>
                      <span className="docs-index-article-arrow" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* CTA strip */}
      <div className="docs-cta-strip">
        <p className="docs-cta-text">
          Can&apos;t find what you&apos;re looking for?
        </p>
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
  );
}
