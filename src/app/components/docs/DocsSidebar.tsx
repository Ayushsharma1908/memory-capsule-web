"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { DOC_CATEGORIES } from "@/lib/docs";
import { Menu, X, BookOpen } from "lucide-react";

export default function DocsSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebar = (
    <nav className="docs-sidebar-inner" aria-label="Documentation navigation">
      <div className="docs-sidebar-logo">
        <Link href="/docs" className="docs-sidebar-brand">
          <BookOpen size={15} strokeWidth={2} />
          <span>Documentation</span>
        </Link>
        <Link href="/" className="docs-sidebar-home">
          ← Home
        </Link>
      </div>

      <div className="docs-sidebar-nav">
        {DOC_CATEGORIES.map((cat) => (
          <div key={cat.id} className="docs-sidebar-section">
            <p className="docs-sidebar-category">{cat.title}</p>
            <ul className="docs-sidebar-list">
              {cat.articles.map((article) => {
                const isActive = pathname === article.href;
                return (
                  <li key={article.href}>
                    <Link
                      href={article.href}
                      className={`docs-sidebar-link${isActive ? " docs-sidebar-link--active" : ""}`}
                      onClick={() => setMobileOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {article.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );

  return (
    <>
      <aside className="docs-sidebar" aria-label="Documentation sidebar">
        {sidebar}
      </aside>

      <div className="docs-mobile-header">
        <Link href="/docs" className="docs-mobile-brand">
          <BookOpen size={15} strokeWidth={2} />
          <span>Documentation</span>
        </Link>
        <button
          type="button"
          className="docs-mobile-toggle"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={18} strokeWidth={2} /> : <Menu size={18} strokeWidth={2} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="docs-mobile-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Documentation navigation"
        >
          <div className="docs-mobile-drawer">{sidebar}</div>
          <button
            type="button"
            className="docs-mobile-backdrop"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation"
          />
        </div>
      )}
    </>
  );
}
