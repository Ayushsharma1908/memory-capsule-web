import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Changelog — Memory Capsule",
  description: "What's new in Memory Capsule. Follow our progress as we build in public.",
};

const releases = [
  {
    version: "v0.1.0",
    date: "August 2025",
    tag: "Launch",
    changes: [
      { type: "new", text: "Initial public release of Memory Capsule Chrome Extension" },
      { type: "new", text: "AI-powered memory capture from ChatGPT, Claude, and Gemini" },
      { type: "new", text: "Full-text search across all saved memories" },
      { type: "new", text: "Automatic tagging and categorization" },
      { type: "new", text: "Export to Markdown" },
    ],
  },
  {
    version: "v0.0.9",
    date: "July 2025",
    tag: "Beta",
    changes: [
      { type: "improved", text: "Significantly faster memory indexing (3× speed improvement)" },
      { type: "improved", text: "Better duplicate detection for repeated AI responses" },
      { type: "fix", text: "Fixed extension popup not opening on Firefox Nightly" },
      { type: "fix", text: "Resolved memory sync lag on slow connections" },
    ],
  },
  {
    version: "v0.0.5",
    date: "June 2025",
    tag: "Alpha",
    changes: [
      { type: "new", text: "First private alpha shipped to 50 testers" },
      { type: "new", text: "Core memory capture pipeline" },
      { type: "new", text: "Basic dashboard with timeline view" },
    ],
  },
];

const tagColors: Record<string, string> = {
  Launch: "changelog-tag--launch",
  Beta: "changelog-tag--beta",
  Alpha: "changelog-tag--alpha",
};

const typeLabels: Record<string, { label: string; cls: string }> = {
  new: { label: "New", cls: "cl-type--new" },
  improved: { label: "Improved", cls: "cl-type--improved" },
  fix: { label: "Fix", cls: "cl-type--fix" },
};

export default function ChangelogPage() {
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
          <p className="inner-page-eyebrow">Changelog</p>
          <h1 className="inner-page-title">Built in public</h1>
          <p className="inner-page-subtitle">
            Every release, every fix, every improvement — tracked openly as we build Memory Capsule.
          </p>
        </div>

        <div className="changelog-list">
          {releases.map((release) => (
            <div key={release.version} className="changelog-entry">
              <div className="changelog-meta">
                <span className={`changelog-tag ${tagColors[release.tag] ?? ""}`}>{release.tag}</span>
                <span className="changelog-version">{release.version}</span>
                <span className="changelog-date">{release.date}</span>
              </div>
              <ul className="changelog-changes">
                {release.changes.map((c, i) => {
                  const t = typeLabels[c.type] ?? { label: c.type, cls: "" };
                  return (
                    <li key={i} className="changelog-change">
                      <span className={`cl-type ${t.cls}`}>{t.label}</span>
                      <span className="cl-text">{c.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
