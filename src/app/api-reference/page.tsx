import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "API Reference — Memory Capsule",
  description: "Full REST API reference for Memory Capsule. Programmatically access your AI memories.",
};

const endpoints = [
  {
    method: "GET",
    path: "/v1/memories",
    description: "List all saved memories, sorted by recency.",
    params: [
      { name: "limit", type: "integer", required: false, desc: "Max results to return (default 20, max 100)" },
      { name: "cursor", type: "string", required: false, desc: "Pagination cursor from previous response" },
      { name: "tag", type: "string", required: false, desc: "Filter by tag name" },
    ],
  },
  {
    method: "POST",
    path: "/v1/memories",
    description: "Create a new memory from raw text or a conversation snapshot.",
    params: [
      { name: "content", type: "string", required: true, desc: "The raw text to save as a memory" },
      { name: "source", type: "string", required: false, desc: "Origin label (e.g. 'chatgpt', 'claude')" },
      { name: "tags", type: "string[]", required: false, desc: "Manual tags to apply" },
    ],
  },
  {
    method: "GET",
    path: "/v1/memories/:id",
    description: "Retrieve a single memory by its ID.",
    params: [
      { name: "id", type: "string", required: true, desc: "The unique memory ID" },
    ],
  },
  {
    method: "DELETE",
    path: "/v1/memories/:id",
    description: "Permanently delete a memory.",
    params: [
      { name: "id", type: "string", required: true, desc: "The unique memory ID to delete" },
    ],
  },
  {
    method: "GET",
    path: "/v1/search",
    description: "Full-text and semantic search across all memories.",
    params: [
      { name: "q", type: "string", required: true, desc: "Search query string" },
      { name: "mode", type: "string", required: false, desc: "'full-text' or 'semantic' (default: 'semantic')" },
    ],
  },
];

const methodColor: Record<string, string> = {
  GET: "api-method--get",
  POST: "api-method--post",
  DELETE: "api-method--delete",
};

export default function ApiReferencePage() {
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
          <p className="inner-page-eyebrow">API Reference</p>
          <h1 className="inner-page-title">REST API</h1>
          <p className="inner-page-subtitle">
            Programmatically read, write and search your AI memories. Base URL:{" "}
            <code className="api-base-url">https://api.memorycapsule.app</code>
          </p>
        </div>

        <div className="api-auth-notice">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 2a3 3 0 0 1 3 3v2H5V5a3 3 0 0 1 3-3z" stroke="currentColor" strokeWidth="1.4" />
            <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="8" cy="10.5" r="1" fill="currentColor" />
          </svg>
          <span>
            All requests require an <strong>Authorization</strong> header with your API key:{" "}
            <code>Authorization: Bearer mc_&lt;your-key&gt;</code>
          </span>
        </div>

        <div className="api-endpoints">
          {endpoints.map((ep) => (
            <div key={ep.path + ep.method} className="api-endpoint">
              <div className="api-endpoint-header">
                <span className={`api-method ${methodColor[ep.method] ?? ""}`}>{ep.method}</span>
                <code className="api-path">{ep.path}</code>
              </div>
              <p className="api-endpoint-desc">{ep.description}</p>
              {ep.params.length > 0 && (
                <table className="api-params-table">
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Type</th>
                      <th>Required</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ep.params.map((p) => (
                      <tr key={p.name}>
                        <td><code>{p.name}</code></td>
                        <td><code>{p.type}</code></td>
                        <td>{p.required ? <span className="api-required">Yes</span> : <span className="api-optional">No</span>}</td>
                        <td>{p.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          ))}
        </div>

        <div className="docs-cta-strip">
          <p className="docs-cta-text">Found a bug or missing endpoint?</p>
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
