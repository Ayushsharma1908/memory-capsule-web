import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Memory Capsule",
  description: "The terms and conditions governing use of Memory Capsule.",
};

export default function TermsPage() {
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
          <h1 className="inner-page-title">Terms of Service</h1>
          <p className="inner-page-subtitle">Last updated: {lastUpdated}</p>
        </div>

        <div className="legal-body">
          <p className="legal-intro">
            Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully before using Memory Capsule.
            By accessing or using our service, you agree to be bound by these Terms.
          </p>

          <section className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By installing the Memory Capsule Chrome Extension or creating an account, you agree to these Terms and our{" "}
              <Link href="/privacy" className="about-inline-link">Privacy Policy</Link>.
              If you do not agree, do not use the service.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Description of service</h2>
            <p>
              Memory Capsule provides a Chrome Extension and web dashboard that allows users to capture, store, search and manage insights from AI chat conversations.
              We reserve the right to modify, suspend or discontinue any part of the service at any time with reasonable notice.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. User accounts</h2>
            <ul>
              <li>You must be at least 13 years of age to use Memory Capsule.</li>
              <li>You are responsible for maintaining the security of your account credentials.</li>
              <li>You must notify us immediately of any unauthorized use of your account.</li>
              <li>One person may not maintain more than one free account.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Acceptable use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use Memory Capsule for any unlawful purpose.</li>
              <li>Attempt to reverse-engineer, scrape, or extract data from the service at scale.</li>
              <li>Use the service to store or transmit malware, harmful code, or illegal content.</li>
              <li>Resell or sublicense access to Memory Capsule without our written consent.</li>
              <li>Interfere with the integrity or performance of the service.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Your content</h2>
            <p>
              You retain full ownership of all memories and content you save. By using Memory Capsule, you grant us a limited, non-exclusive license to store and process your content solely for the purpose of delivering the service.
              We will never use your content for advertising or AI training.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Intellectual property</h2>
            <p>
              The Memory Capsule name, logo, and application code (excluding open-source components) are owned by us.
              The open-source portions are governed by the MIT License, available in our{" "}
              <a href="https://github.com/Ayushsharma1908/memory-capsule-web" className="about-inline-link" target="_blank" rel="noopener noreferrer">
                GitHub repository
              </a>
              .
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Termination</h2>
            <p>
              We may terminate or suspend your account for violations of these Terms. You may delete your account at any time from your dashboard.
              Upon deletion, all your data is permanently removed within 24 hours.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Disclaimer of warranties</h2>
            <p>
              Memory Capsule is provided &ldquo;as is&rdquo; without warranty of any kind.
              We do not guarantee that the service will be uninterrupted, error-free, or that data will never be lost.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, Memory Capsule shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Contact</h2>
            <p>
              Questions about these Terms? Email{" "}
              <a href="mailto:legal@memorycapsule.app" className="about-inline-link">
                legal@memorycapsule.app
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
