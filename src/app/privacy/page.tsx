import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Memory Capsule",
  description: "How Memory Capsule collects, uses and protects your personal data.",
};

export default function PrivacyPage() {
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
          <h1 className="inner-page-title">Privacy Policy</h1>
          <p className="inner-page-subtitle">Last updated: {lastUpdated}</p>
        </div>

        <div className="legal-body">
          <p className="legal-intro">
            Memory Capsule (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use and share information about you when you use our Chrome Extension and website.
          </p>

          <section className="legal-section">
            <h2>1. What we collect</h2>
            <ul>
              <li><strong>Account information:</strong> Email address and name when you create an account.</li>
              <li><strong>Memory content:</strong> Text you choose to save from AI conversations. This is stored encrypted and is never used to train AI models.</li>
              <li><strong>Usage data:</strong> Anonymous analytics such as feature usage frequency. No personally identifiable information is attached.</li>
              <li><strong>Device data:</strong> Browser type and version, operating system, for debugging purposes only.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. What we do NOT collect</h2>
            <ul>
              <li>We do not read or store full AI conversation transcripts unless you explicitly capture them.</li>
              <li>We do not sell your data to third parties.</li>
              <li>We do not use your memory content to train any AI or ML model.</li>
              <li>We do not track you across other websites.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. How we use your data</h2>
            <ul>
              <li>To provide and improve the Memory Capsule service.</li>
              <li>To send transactional emails (e.g. account creation, password reset).</li>
              <li>To diagnose technical issues and improve reliability.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Data storage and security</h2>
            <p>
              Your memory content is encrypted at rest using AES-256. Data is stored on servers in the EU (Frankfurt region).
              We use HTTPS for all data in transit. We do not retain your data after account deletion — deletion is permanent and immediate.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Your rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access all data we hold about you (request via settings).</li>
              <li>Export your memories at any time in JSON or Markdown format.</li>
              <li>Delete your account and all associated data instantly.</li>
              <li>Opt out of anonymous analytics (toggle in extension settings).</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Third-party services</h2>
            <p>
              We use the following third-party services, each governed by their own privacy policies:
            </p>
            <ul>
              <li><strong>Vercel</strong> — web hosting</li>
              <li><strong>Plausible Analytics</strong> — privacy-friendly, cookieless analytics</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>7. Changes to this policy</h2>
            <p>
              We will notify users of material changes to this policy via email or an in-app notice at least 14 days before they take effect.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Contact</h2>
            <p>
              Questions about this policy? Email us at{" "}
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
