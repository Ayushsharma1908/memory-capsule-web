import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy — Memory Capsule",
  description: "How Memory Capsule uses cookies and similar tracking technologies.",
};

export default function CookiesPage() {
  const lastUpdated = "August 1, 2025";

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
          <p className="inner-page-eyebrow">Legal</p>
          <h1 className="inner-page-title">Cookie Policy</h1>
          <p className="inner-page-subtitle">Last updated: {lastUpdated}</p>
        </div>

        <div className="legal-body">
          <p className="legal-intro">
            This Cookie Policy explains how Memory Capsule uses cookies and similar technologies on our website (memorycapsule.app).
            The Chrome Extension itself does not use cookies.
          </p>

          <section className="legal-section">
            <h2>1. What are cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help websites remember preferences, maintain sessions, and understand how visitors use the site.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Cookies we use</h2>
            <div className="cookies-table-wrapper">
              <table className="api-params-table">
                <thead>
                  <tr>
                    <th>Cookie name</th>
                    <th>Type</th>
                    <th>Purpose</th>
                    <th>Expires</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>mc_session</code></td>
                    <td>Essential</td>
                    <td>Maintains your logged-in session</td>
                    <td>7 days</td>
                  </tr>
                  <tr>
                    <td><code>mc_theme</code></td>
                    <td>Preference</td>
                    <td>Remembers your preferred color theme</td>
                    <td>1 year</td>
                  </tr>
                  <tr>
                    <td><code>_plausible</code></td>
                    <td>Analytics</td>
                    <td>Cookieless analytics via Plausible (no PII collected)</td>
                    <td>Session</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="legal-section">
            <h2>3. Cookies we do NOT use</h2>
            <ul>
              <li>We do not use advertising cookies or retargeting pixels.</li>
              <li>We do not use third-party social media tracking cookies.</li>
              <li>We do not use Google Analytics or similar surveillance-level analytics.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Managing cookies</h2>
            <p>
              You can control cookies through your browser settings. Disabling essential cookies (e.g. <code>mc_session</code>) will prevent you from logging in.
            </p>
            <p>
              To opt out of Plausible analytics, you can enable &ldquo;Do Not Track&rdquo; in your browser — Plausible respects this setting by default.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Changes to this policy</h2>
            <p>
              We&apos;ll notify you of any changes to this policy via the website or email at least 14 days in advance.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Contact</h2>
            <p>
              Cookie questions? Email{" "}
              <a href="mailto:privacy@memorycapsule.app" className="about-inline-link">
                privacy@memorycapsule.app
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
