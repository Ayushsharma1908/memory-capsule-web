"use client";

import { useState } from "react";
import Link from "next/link";
import { searchDocs, DocArticle } from "@/lib/docs";
import { Search } from "lucide-react";

export default function DocsSearch() {
  const [query, setQuery] = useState("");
  const results: DocArticle[] = query.trim() ? searchDocs(query) : [];
  const showResults = query.trim().length > 0;

  return (
    <div className="docs-index-search-wrap" role="search">
      <label htmlFor="docs-search-input" className="sr-only">
        Search documentation
      </label>
      <div className="docs-index-search-bar">
        <Search
          size={15}
          strokeWidth={2}
          className="docs-index-search-icon"
          aria-hidden="true"
        />
        <input
          id="docs-search-input"
          type="search"
          className="docs-index-search-input"
          placeholder="Search documentation…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
          spellCheck={false}
        />
      </div>

      {showResults && (
        <div
          className="docs-search-results"
          role="region"
          aria-label="Search results"
          aria-live="polite"
        >
          {results.length === 0 ? (
            <p className="docs-search-empty">
              No results for &ldquo;{query}&rdquo;
            </p>
          ) : (
            <ul className="docs-search-list">
              {results.map((doc) => (
                <li key={doc.href}>
                  <Link href={doc.href} className="docs-search-result">
                    <span className="docs-search-result-category">
                      {doc.category}
                    </span>
                    <span className="docs-search-result-title">
                      {doc.title}
                    </span>
                    <span className="docs-search-result-desc">
                      {doc.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
