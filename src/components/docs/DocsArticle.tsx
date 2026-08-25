import Link from "next/link";
import {
  DocArticle,
  ContentBlock,
  getPrevArticle,
  getNextArticle,
} from "@/lib/docs";
import { ArrowLeft, ArrowRight } from "lucide-react";

function DocsNote({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="docs-callout docs-callout--note" role="note">
      <span className="docs-callout-label">{title ?? "Note"}</span>
      <p className="docs-callout-text">{children}</p>
    </aside>
  );
}

function DocsWarning({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="docs-callout docs-callout--warning" role="note">
      <span className="docs-callout-label">{title ?? "Warning"}</span>
      <p className="docs-callout-text">{children}</p>
    </aside>
  );
}

function DocsTip({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="docs-callout docs-callout--tip" role="note">
      <span className="docs-callout-label">{title ?? "Tip"}</span>
      <p className="docs-callout-text">{children}</p>
    </aside>
  );
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.kind) {
    case "paragraph":
      return (
        <p key={i} className="docs-body-p">
          {block.text}
        </p>
      );

    case "heading":
      if (block.level === 2) {
        return (
          <h2 key={i} className="docs-body-h2">
            {block.text}
          </h2>
        );
      }
      return (
        <h3 key={i} className="docs-body-h3">
          {block.text}
        </h3>
      );

    case "ordered-list":
      return (
        <ol key={i} className="docs-body-ol">
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ol>
      );

    case "unordered-list":
      return (
        <ul key={i} className="docs-body-ul">
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );

    case "code":
      return (
        <div key={i} className="docs-code-block">
          {block.language && (
            <span className="docs-code-lang">{block.language}</span>
          )}
          <pre>
            <code>{block.code}</code>
          </pre>
        </div>
      );

    case "callout":
      if (block.calloutType === "warning") {
        return (
          <DocsWarning key={i} title={block.title}>
            {block.text}
          </DocsWarning>
        );
      }
      if (block.calloutType === "tip") {
        return (
          <DocsTip key={i} title={block.title}>
            {block.text}
          </DocsTip>
        );
      }
      return (
        <DocsNote key={i} title={block.title}>
          {block.text}
        </DocsNote>
      );

    case "table":
      return (
        <div key={i} className="docs-table-wrap">
          <table className="docs-table">
            <thead>
              <tr>
                {block.headers.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
}

export default function DocsArticle({ article }: { article: DocArticle }) {
  const prev = getPrevArticle(article);
  const next = getNextArticle(article);

  return (
    <article className="docs-article-main">
      <nav className="docs-breadcrumb" aria-label="Breadcrumb">
        <Link href="/docs" className="docs-breadcrumb-item">
          Documentation
        </Link>
        <span className="docs-breadcrumb-sep" aria-hidden="true">
          /
        </span>
        <span className="docs-breadcrumb-item docs-breadcrumb-item--current">
          {article.category}
        </span>
        <span className="docs-breadcrumb-sep" aria-hidden="true">
          /
        </span>
        <span
          className="docs-breadcrumb-item docs-breadcrumb-item--page"
          aria-current="page"
        >
          {article.title}
        </span>
      </nav>

      <header className="docs-article-head">
        <p className="docs-article-category">{article.category}</p>
        <h1 className="docs-article-title">{article.title}</h1>
        <p className="docs-article-description">{article.description}</p>
        <p className="docs-article-updated">
          Last updated: {article.lastUpdated}
        </p>
      </header>

      <div className="docs-article-body">
        {article.content.map((block, i) => renderBlock(block, i))}
      </div>

      <nav className="docs-prevnext" aria-label="Previous and next articles">
        <div className="docs-prevnext-prev">
          {prev && (
            <Link href={prev.href} className="docs-prevnext-link">
              <span className="docs-prevnext-direction">
                <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" />
                Previous
              </span>
              <span className="docs-prevnext-title">{prev.title}</span>
            </Link>
          )}
        </div>
        <div className="docs-prevnext-next">
          {next && (
            <Link href={next.href} className="docs-prevnext-link docs-prevnext-link--next">
              <span className="docs-prevnext-direction">
                Next
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="docs-prevnext-title">{next.title}</span>
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}
