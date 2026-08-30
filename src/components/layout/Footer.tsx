"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function StarSparkle({
  size = 14,
  color = "#1F2421",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 0L8.2 5.8L14 7L8.2 8.2L7 14L5.8 8.2L0 7L5.8 5.8L7 0Z"
        fill={color}
      />
    </svg>
  );
}

const sparklePositions = [
  { top: "28px", right: "48px", size: 14, color: "#D8C3A5", delay: 0 },
  { top: "90px", right: "120px", size: 10, color: "#1F2421", delay: 0.8 },
  { top: "45px", left: "40%", size: 12, color: "#D8C3A5", delay: 1.2 },
];

const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How it Works", href: "/#how-it-works" },
      { label: "Chrome Extension", href: "#" },
      { label: "Pricing", href: "/pricing" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/api-reference" },
      { label: "GitHub Repository", href: "https://github.com/Ayushsharma1908/memory-capsule-web" },
      { label: "Open Source", href: "/contribute" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const TRUST_BADGES = [
  "Open Source",
  "Privacy First",
  "Chrome Extension",
  "Cross Platform",
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-stage" aria-label="Site footer" id="footer">
      <motion.div
        className="footer-single-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Floating sparkles background accents */}
        {sparklePositions.map((sp, i) => {
          const { delay, size, color, ...posStyle } = sp;
          return (
            <motion.div
              key={i}
              className="footer-ambient-sparkle"
              style={{ ...posStyle }}
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.75, 1.2, 0.75] }}
              transition={{
                duration: 2.8,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <StarSparkle size={size} color={color} />
            </motion.div>
          );
        })}

        {/* TOP HERO-VIBE CTA BANNER INSIDE SINGLE CARD */}
        <div className="footer-top-banner">
          <div className="footer-banner-header">
            <Link href="/" className="inner-navbar-brand" aria-label="Memory Capsule home">
              <div className="inner-navbar-icon" aria-hidden="true">
                <Image
                  src="/logo.svg"
                  alt="Memory Capsule Logo"
                  width={24}
                  height={24}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
              <span className="inner-navbar-wordmark">Memory Capsule</span>
            </Link>

            <div className="footer-version-badge">
              <span className="footer-version-dot" aria-hidden="true" />
              <span>v0.1 — Built in public</span>
            </div>
          </div>

          <div className="footer-banner-main">
            <div className="footer-banner-text">
              <h2 className="footer-banner-title">
                Turn your AI chats into{" "}
                <span className="chat-placeholder">
                  knowledge.
                  <span className="chat-cursor" aria-hidden="true" />
                </span>
              </h2>

              <p className="footer-banner-subline">
                Save useful conversations, generate structured memories, and search everything whenever you need it.
              </p>
            </div>

            <div className="footer-banner-ctas">

              <a
                href="https://github.com/Ayushsharma1908/memory-capsule-web"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-secondary"
                id="footer-banner-github"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 6 }}>
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>Star on GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* MIDDLE EXPANSIVE NAVIGATION GRID */}
        <div className="footer-middle-grid">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="footer-column">
              <p className="footer-col-title">{col.title}</p>
              <ul className="footer-col-list" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        className="footer-col-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="footer-col-link">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* COLUMN 4: NEWSLETTER & STAY CONNECTED */}
          <div className="footer-column footer-connect-column">
            <p className="footer-col-title">Stay Updated</p>
            <p className="footer-connect-desc">
              Get major product updates and new AI integrations directly to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="footer-subscribe-form">
              <div className="footer-input-wrapper">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="footer-email-input"
                  required
                />
                <button type="submit" className="footer-submit-btn" aria-label="Subscribe">
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.166 10h11.668M10.833 4.166L16.666 10l-5.833 5.833" />
                  </svg>
                </button>
              </div>
              {subscribed && (
                <span className="footer-success-msg">✓ Subscribed! Thank you.</span>
              )}
            </form>

            <div className="footer-social-box">
              <span className="footer-social-heading">COMMUNITY</span>
              <div className="footer-social-links">
                <a
                  href="https://github.com/Ayushsharma1908/memory-capsule-web"
                  className="footer-social-icon"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* TRUST BADGES STRIP */}
        <div className="footer-trust-strip">
          <span className="footer-trust-label">BUILT WITH REASONING & INTEGRITY:</span>
          <div className="footer-trust-badges">
            {TRUST_BADGES.map((badge) => (
              <span key={badge} className="footer-trust-pill">
                <span className="trust-pill-dot" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Memory Capsule Inc. All rights reserved.
          </p>

          <div className="footer-legal-links">
            <Link href="/privacy" className="footer-legal-link">Privacy Policy</Link>
            <span className="footer-legal-sep">•</span>
            <Link href="/terms" className="footer-legal-link">Terms of Service</Link>
            <span className="footer-legal-sep">•</span>
            <Link href="/cookies" className="footer-legal-link">Cookies</Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-scroll-top-btn"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 13V3M3 8l5-5 5 5" />
            </svg>
          </button>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
