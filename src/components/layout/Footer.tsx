"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How it Works", href: "/#how-it-works" },
      { label: "Download Extension", href: "https://github.com/Ayushsharma1908/memory-capsule/releases/latest" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "GitHub Repository", href: "https://github.com/Ayushsharma1908/memory-capsule-web" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
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
        {/* BRAND & SUMMARY HEADER */}
        <div className="footer-brand-header">
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
          <p className="footer-brand-desc">
            Turn your AI chats into structured knowledge. Save conversations, generate memories, and find everything whenever you need it.
          </p>
        </div>

        {/* MIDDLE NAVIGATION GRID */}
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
              Get product updates and new AI integrations directly to your inbox.
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

