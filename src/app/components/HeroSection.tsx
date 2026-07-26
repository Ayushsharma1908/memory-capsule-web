"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/* ============================================================
   ANIMATION VARIANTS — Luxury Product Launch Sequence
   1. Left panel slides in from LEFT (delay 0s)
   2. Right panel slides in from RIGHT (delay 0s)
   3. Center logo rises from below (delay 0.75s)
   4. Conversation cards fade in (delay 1.1s)
   5. Connecting lines appear (delay 1.45s)
   6. Summary cards appear (delay 1.6s)
   7. Topic chips fade in (delay 1.85s)
   8. Headline fades in (delay 2.15s)
   9. CTAs fade in (delay 2.4s)
   ============================================================ */

const slideFromLeft: Variants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideFromRight: Variants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const logoFloatUp: Variants = {
  hidden: { y: 100, opacity: 0, scale: 0.92 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.75,
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const conversationFade: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 1.1 + custom * 0.1,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const summaryFade: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.95 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 1.6 + custom * 0.12,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const chipFade: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 10 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 1.85 + custom * 0.07,
      duration: 0.45,
      ease: "easeOut",
    },
  }),
};

const quoteFade: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.95 + custom * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const headlineFade: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.15,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const subheadlineAndCtaFade: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.4,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* ============================================================
   SPARKLE SVG
   ============================================================ */
function StarSparkle({ size = 14, color = "#1F2421" }: { size?: number; color?: string }) {
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

/* ============================================================
   CONNECTING LINES — subtle visual flow pointing toward center (~10% opacity)
   ============================================================ */
function ConnectingLines() {
  return (
    <motion.svg
      className="lines-svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.10 }}
      transition={{ delay: 1.45, duration: 0.8, ease: "easeOut" }}
    >
      {/* Soft curved bezier paths pointing from input cards toward center logo */}
      <path d="M 28 14 Q 55 25, 84 45" stroke="#D8C3A5" strokeWidth="1" strokeDasharray="3 5" fill="none" />
      <path d="M 30 38 Q 58 42, 84 48" stroke="#D8C3A5" strokeWidth="1" strokeDasharray="3 5" fill="none" />
      <path d="M 29 66 Q 56 60, 84 52" stroke="#D8C3A5" strokeWidth="1" strokeDasharray="3 5" fill="none" />
      <path d="M 68 24 Q 76 35, 84 46" stroke="#D8C3A5" strokeWidth="1" strokeDasharray="2 4" fill="none" />
      <path d="M 64 54 Q 74 52, 84 50" stroke="#D8C3A5" strokeWidth="1" strokeDasharray="2 4" fill="none" />
    </motion.svg>
  );
}

/* ============================================================
   LEFT PANEL STORYTELLING DATA
   ============================================================ */
// 1. Conversation cards (3)
const conversations = [
  { text: "How can I optimize this React component?", top: "10%", left: "6%", animClass: "anim-float-1" },
  { text: "Explain Binary Search.", top: "38%", left: "8%", animClass: "anim-float-2" },
  { text: "Help me prepare for interviews.", top: "66%", left: "7%", animClass: "anim-float-3" },
];

// 2. AI Summary cards (2)
const summaries = [
  { label: "AI SUMMARY", text: "Optimized rendering using useMemo.", top: "22%", left: "48%", animClass: "anim-drift-1" },
  { label: "AI SUMMARY", text: "JWT authentication explained.", top: "52%", left: "44%", animClass: "anim-drift-2" },
];

// 3. Topic chips (5)
const chips = [
  { label: "React", top: "6%", left: "54%", animClass: "anim-chip-1" },
  { label: "Node.js", top: "36%", left: "48%", animClass: "anim-chip-2" },
  { label: "MongoDB", top: "76%", left: "42%", animClass: "anim-chip-3" },
  { label: "DSA", top: "44%", left: "72%", animClass: "anim-chip-4" },
  { label: "AWS", top: "84%", left: "12%", animClass: "anim-chip-1" },
];

// 4. Inspirational quotes (2)
const quotes = [
  { line1: "Learn once.", line2: "Remember forever.", top: "14%", left: "72%", animClass: "anim-drift-3" },
  { line1: "Knowledge shouldn't", line2: "disappear.", top: "88%", left: "58%", animClass: "anim-drift-4" },
];

// Sparkle background accents (Requirement 8: Extremely subtle)
const sparkleDots = [
  { top: "16%", left: "44%", dur: "2.2s", delay: "0s" },
  { top: "36%", left: "78%", dur: "3.0s", delay: "0.8s" },
  { top: "52%", left: "40%", dur: "2.6s", delay: "0.4s" },
  { top: "75%", left: "66%", dur: "2.8s", delay: "1.2s" },
  { top: "90%", left: "14%", dur: "3.2s", delay: "0.6s" },
];

/* ============================================================
   MEMORY CAPSULE LOGO FALLBACK (Requirement 2)
   Handcrafted luxury emblem icon — floating focal point
   ============================================================ */
function PlaceholderIcon() {
  return (
    <div
      style={{
        width: 216,
        height: 216,
        borderRadius: "50%",
        backgroundColor: "#FAF8F4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 16px 40px rgba(31, 36, 33, 0.10)",
        position: "relative",
      }}
      aria-label="Memory Capsule Logo"
    >
      <svg
        width="110"
        height="110"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="15" y="15" width="70" height="70" rx="22" fill="#1F2421" />
        <rect x="25" y="25" width="50" height="50" rx="16" stroke="#D8C3A5" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
        <circle cx="50" cy="50" r="16" fill="#D8C3A5" />
        <circle cx="50" cy="50" r="8" fill="#FAF8F4" />
        <path d="M50 30V36M50 64V70M30 50H36M64 50H70" stroke="#FAF8F4" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      </svg>
    </div>
  );
}

// Sparkles around logo
const sparklePositions = [
  { top: "-10px", right: "20px", size: 14, color: "#D8C3A5", delay: 0 },
  { bottom: "10px", left: "-12px", size: 12, color: "#1F2421", delay: 0.9 },
  { top: "35px", left: "-18px", size: 10, color: "#D8C3A5", delay: 1.4 },
  { bottom: "35px", right: "-16px", size: 15, color: "#D8C3A5", delay: 0.5 },
];

/* ============================================================
   CENTER ICON — Floating Logo Hero (Requirement 2)
   ============================================================ */
function CenterIcon() {
  const [imgError, setImgError] = useState(false);
  const iconSize = '22vh'; // Increased to 22% of viewport height for 20-25% range

  return (
    <motion.div
      className="center-icon-wrap"
      initial="hidden"
      animate="visible"
      variants={logoFloatUp}
      style={{ width: iconSize, height: iconSize }}
    >
      <div className="center-icon-container" style={{ width: '100%', height: '100%' }}>
        {/* Soft beige ambient glow */}
        <div className="center-icon-glow" aria-hidden="true" />

        {/* Floating logo — responsive size (~22% of viewport height) */}
        <motion.div
          className="center-icon-img"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {!imgError ? (
            <img
              src="/logo.svg"
              alt="Memory Capsule Logo"
              onError={() => setImgError(true)}
              style={{
                width: '100%',
                height: '100%',
                objectFit: "contain",
                filter: "drop-shadow(0 14px 32px rgba(31, 36, 33, 0.10))",
              }}
            />
          ) : (
            <PlaceholderIcon />
          )}
        </motion.div>

        {/* Sparkles around logo */}
        {sparklePositions.map((sp, i) => {
          const { delay, size, color, ...posStyle } = sp;
          return (
            <motion.div
              key={i}
              className="icon-sparkle"
              style={{ ...posStyle }}
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.75, 1.25, 0.75] }}
              transition={{ duration: 2.6, delay, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            >
              <StarSparkle size={size} color={color} />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ============================================================
   LEFT PANEL — Storytelling Composition
   ============================================================ */
function LeftPanel() {
  return (
    <div className="panel-left" aria-label="Product storytelling panel">
      <div className="panel-left-inner">
        {/* Connecting lines step 5 */}
        <ConnectingLines />

        {/* Step 4: Conversation Cards */}
        {conversations.map((c, i) => (
          <motion.div
            key={c.text}
            className={`snippet-card ${c.animClass}`}
            style={{ top: c.top, left: c.left }}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={conversationFade}
          >
            <div className="snippet-icon" aria-hidden="true">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 2h8a1 1 0 011 1v5a1 1 0 01-1 1H4L2 11V3a1 1 0 011-1z"
                  stroke="#D8C3A5"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>
            <span className="snippet-text">{c.text}</span>
          </motion.div>
        ))}

        {/* Step 6: AI Summary Cards */}
        {summaries.map((s, i) => (
          <motion.div
            key={s.text}
            className={`summary-card ${s.animClass}`}
            style={{ top: s.top, left: s.left }}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={summaryFade}
          >
            <div className="summary-label">{s.label}</div>
            <div className="summary-text">{s.text}</div>
          </motion.div>
        ))}

        {/* Step 7: Topic Chips */}
        {chips.map((chip, i) => (
          <motion.div
            key={chip.label}
            className={`topic-chip ${chip.animClass}`}
            style={{ top: chip.top, left: chip.left }}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={chipFade}
          >
            {chip.label}
          </motion.div>
        ))}

        {/* Editorial Quotes */}
        {quotes.map((q, i) => (
          <motion.div
            key={q.line1}
            className={`left-quote ${q.animClass}`}
            style={{ top: q.top, left: q.left }}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={quoteFade}
          >
            <p className="left-quote-text">
              {q.line1}<br />{q.line2}
            </p>
          </motion.div>
        ))}

        {/* Sparkle background dots */}
        {sparkleDots.map((sp, i) => (
          <div
            key={i}
            className="sparkle-dot"
            style={{
              top: sp.top,
              left: sp.left,
              '--dur': sp.dur,
              '--delay': sp.delay,
            } as React.CSSProperties}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   RIGHT PANEL — Headline, Subheadline & CTAs (Requirement 4 & 5)
   ============================================================ */
function RightPanel() {
  return (
    <div className="panel-right">
      {/* Step 8: Headline */}
      <motion.h1
        className="hero-headline"
        initial="hidden"
        animate="visible"
        variants={headlineFade}
      >
        <strong>Never lose</strong>
        <br />
        what you
        <br />
        learn from <em>AI.</em>
      </motion.h1>

      {/* Requirement 4: Paragraph text */}
      <motion.p
        className="hero-subheadline"
        initial="hidden"
        animate="visible"
        variants={subheadlineAndCtaFade}
      >
        {"Capture conversations.\nGenerate structured knowledge.\nSearch everything later."}
      </motion.p>

      {/* Requirement 5: 56px CTAs */}
      <motion.div
        className="hero-cta-group"
        initial="hidden"
        animate="visible"
        variants={subheadlineAndCtaFade}
      >
        <a href="#" className="cta-button-primary" id="hero-chrome-cta">
          <span className="cta-icon">🧩</span>
          <span>Add to Chrome</span>
        </a>
        <a href="#demo" className="cta-button-secondary" id="hero-demo-cta">
          <span>Watch Demo</span>
        </a>
      </motion.div>
    </div>
  );
}

/* ============================================================
   EXPORTED HERO SECTION — Two independent main cards on dark bg
   ============================================================ */
export default function HeroSection() {
  return (
    <section className="hero-stage" aria-label="Hero section" id="features">
      <div className="hero-split-container">
        {/* Step 1: Left Card — slides in from left */}
        <motion.div
          className="hero-left-card"
          variants={slideFromLeft}
          initial="hidden"
          animate="visible"
        >
          {/* Header inside Left Card (Brand) */}
          <div className="left-card-header">
            <a href="/" className="inner-navbar-brand" aria-label="Memory Capsule home">
              <div className="inner-navbar-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <rect x="2" y="2" width="12" height="12" rx="3" fill="#FAF8F4" fillOpacity="0.2" stroke="#FAF8F4" strokeWidth="1.2" />
                  <circle cx="8" cy="8" r="2.5" fill="#D8C3A5" />
                </svg>
              </div>
              <span className="inner-navbar-wordmark">Memory Capsule</span>
            </a>
          </div>

          {/* Storytelling canvas inside Left Card */}
          <LeftPanel />
        </motion.div>

        {/* Step 2: Right Card — slides in from right */}
        <motion.div
          className="hero-right-card"
          variants={slideFromRight}
          initial="hidden"
          animate="visible"
        >
          {/* Header inside Right Card (Nav links + CTA) */}
          <div className="right-card-header">
            <div className="inner-navbar-right">
              <a href="#features" className="inner-nav-link">Features</a>
              <a href="#demo" className="inner-nav-link">Demo</a>
              <a href="#roadmap" className="inner-nav-link">Roadmap</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inner-nav-link">GitHub</a>
              <a href="#" className="inner-nav-cta" id="nav-add-to-chrome">Add to Chrome</a>
            </div>
          </div>

          {/* Headline, Subheadline & CTAs inside Right Card */}
          <RightPanel />
        </motion.div>

        {/* Step 3: Center logo rises in middle gap between cards */}
        <CenterIcon />
      </div>
    </section>
  );
}
