"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/* ============================================================
   ANIMATION VARIANTS — exact sequence from brief
   1. Left panel slides in from LEFT
   2. Right panel slides in from RIGHT
   3. Center icon floats up from below
   4. Headline fades in
   5. CTA fades in
   6. Conversation cards appear one by one
   ============================================================ */

const slideFromLeft: Variants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideFromRight: Variants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const iconFloatUp: Variants = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.85,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headlineFade: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.45,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ctaFade: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.75,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* Stagger container for cards */
const cardContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1.9,
      staggerChildren: 0.13,
    },
  },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
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
   CONNECTING LINES — purely decorative
   ============================================================ */
function ConnectingLines() {
  return (
    <svg className="lines-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="10%" y1="22%" x2="44%" y2="46%" stroke="#D8C3A5" strokeWidth="0.7" strokeDasharray="4 7" />
      <line x1="55%" y1="18%" x2="30%" y2="48%" stroke="#D8C3A5" strokeWidth="0.7" strokeDasharray="4 7" />
      <line x1="15%" y1="65%" x2="48%" y2="55%" stroke="#D8C3A5" strokeWidth="0.7" strokeDasharray="3 8" />
      <line x1="68%" y1="72%" x2="45%" y2="60%" stroke="#D8C3A5" strokeWidth="0.7" strokeDasharray="3 8" />
    </svg>
  );
}

/* ============================================================
   DATA — floating elements for left panel
   ============================================================ */
const snippets = [
  { text: "How can I optimize this React component?", top: "10%", left: "6%",  animClass: "anim-float-1" },
  { text: "Explain Binary Search to me.",             top: "40%", left: "48%", animClass: "anim-float-2" },
  { text: "Help me with system design interviews.",   top: "65%", left: "7%",  animClass: "anim-float-3" },
];

const summaries = [
  { label: "Summary", text: "Optimized rendering via useMemo & React.memo.", top: "26%", left: "50%", animClass: "anim-drift-1" },
  { label: "Summary", text: "JWT authentication flow explained.",             top: "54%", left: "5%",  animClass: "anim-drift-2" },
];

const chips = [
  { label: "React",         top: "6%",  left: "56%", animClass: "anim-chip-1" },
  { label: "Node.js",       top: "19%", left: "33%", animClass: "anim-chip-2" },
  { label: "MongoDB",       top: "78%", left: "54%", animClass: "anim-chip-3" },
  { label: "AWS",           top: "47%", left: "24%", animClass: "anim-chip-4" },
  { label: "System Design", top: "86%", left: "26%", animClass: "anim-chip-1" },
  { label: "DSA",           top: "32%", left: "66%", animClass: "anim-chip-2" },
];

const quotes = [
  { text: "Learn once.\nRemember forever.",   top: "60%", left: "52%", animClass: "anim-drift-3" },
  { text: "Knowledge shouldn't disappear.",   top: "88%", left: "58%", animClass: "anim-drift-4" },
];

const sparkleDots = [
  { top: "16%", left: "44%", dur: "2.2s", delay: "0s"   },
  { top: "36%", left: "78%", dur: "3.0s", delay: "0.8s" },
  { top: "52%", left: "40%", dur: "2.6s", delay: "0.4s" },
  { top: "75%", left: "66%", dur: "2.8s", delay: "1.2s" },
  { top: "90%", left: "14%", dur: "3.2s", delay: "0.6s" },
];

/* ============================================================
   PLACEHOLDER ICON — shown until real SVG is added
   ============================================================ */
function PlaceholderIcon() {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Memory Capsule icon placeholder"
    >
      {/* Outer circle — white */}
      <circle cx="100" cy="100" r="96" fill="#FAF8F4" stroke="#ECE6DC" strokeWidth="1.5" />

      {/* Large black arc / letter-C shape */}
      <path
        d="M140 48 C140 48 64 48 64 100 C64 152 140 152 140 152"
        stroke="#1F2421"
        strokeWidth="38"
        strokeLinecap="round"
        fill="none"
      />

      {/* Chat bubble foreground */}
      <rect x="68" y="78" width="72" height="42" rx="9" fill="#1F2421" />
      <path d="M80 108 L74 120 L92 108Z" fill="#1F2421" />

      {/* Chat bubble dots */}
      <circle cx="88" cy="99" r="4" fill="#FAF8F4" />
      <circle cx="100" cy="99" r="4" fill="#FAF8F4" />
      <circle cx="112" cy="99" r="4" fill="#FAF8F4" />
    </svg>
  );
}

/* ============================================================
   INNER NAVBAR
   ============================================================ */
function InnerNavbar() {
  return (
    <div className="inner-navbar">
      {/* Left: brand */}
      <a href="/" className="inner-navbar-brand" aria-label="Memory Capsule home">
        <div className="inner-navbar-icon" aria-hidden="true">
          {/* Placeholder: will be replaced with user SVG */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="12" height="12" rx="3" fill="#FAF8F4" fillOpacity="0.15" stroke="#FAF8F4" strokeWidth="1" strokeOpacity="0.5" />
            <circle cx="8" cy="8" r="2.5" fill="#D8C3A5" />
          </svg>
        </div>
        <span className="inner-navbar-wordmark">Memory Capsule</span>
      </a>

      {/* Right: nav items */}
      <div className="inner-navbar-right">
        {/* Pill search field */}
        <div className="inner-nav-search" role="button" aria-label="Read Documentation">
          <span style={{ color: "var(--text-tertiary)" }}>Read Documentation...</span>
          {/* Doc icon */}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ color: "var(--text-tertiary)", opacity: 0.6, marginLeft: 4 }}>
            <rect x="2" y="1" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1" />
            <path d="M4 4h6M4 7h6M4 10h4" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
          </svg>
        </div>

        {/* Icon button 1 — Features */}
        <button className="inner-nav-icon-btn" aria-label="Features" title="Features">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1" />
            <circle cx="6.5" cy="6.5" r="2" fill="currentColor" />
          </svg>
        </button>

        {/* Icon button 2 — GitHub */}
        <button className="inner-nav-icon-btn" aria-label="GitHub" title="GitHub">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path
              d="M6.5 1a5.5 5.5 0 00-1.74 10.72c.28.05.38-.12.38-.26v-.93c-1.54.33-1.86-.74-1.86-.74-.25-.64-.61-.81-.61-.81-.5-.34.04-.33.04-.33.55.04.84.57.84.57.49.84 1.28.6 1.59.46.05-.36.19-.6.35-.74-1.22-.14-2.51-.61-2.51-2.73 0-.6.21-1.09.57-1.48-.06-.14-.25-.7.05-1.46 0 0 .46-.15 1.52.57a5.3 5.3 0 012.76 0c1.06-.72 1.52-.57 1.52-.57.3.76.11 1.32.05 1.46.36.39.57.88.57 1.48 0 2.12-1.29 2.59-2.52 2.73.2.17.37.51.37 1.03v1.53c0 .14.1.31.38.26A5.5 5.5 0 006.5 1z"
              fill="currentColor"
            />
          </svg>
        </button>

        {/* Icon button 3 — Menu */}
        <button className="inner-nav-icon-btn" aria-label="Menu" title="Menu">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M2 4h9M2 6.5h9M2 9h9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   LEFT PANEL
   ============================================================ */
function LeftPanel() {
  return (
    <div className="panel-left" aria-label="Storytelling panel">
      <div className="panel-left-inner">
        <ConnectingLines />

        {/* Floating cards — revealed one by one */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardContainer}
          style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
        >
          {/* Snippet cards */}
          {snippets.map((s) => (
            <motion.div
              key={s.text}
              className={`snippet-card ${s.animClass}`}
              style={{ top: s.top, left: s.left, pointerEvents: "auto" }}
              variants={cardReveal}
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
              <span className="snippet-text">{s.text}</span>
            </motion.div>
          ))}

          {/* Summary cards */}
          {summaries.map((s) => (
            <motion.div
              key={s.text}
              className={`summary-card ${s.animClass}`}
              style={{ top: s.top, left: s.left, pointerEvents: "auto" }}
              variants={cardReveal}
            >
              <div className="summary-label">{s.label}</div>
              <div className="summary-text">{s.text}</div>
            </motion.div>
          ))}

          {/* Topic chips */}
          {chips.map((c) => (
            <motion.div
              key={c.label}
              className={`topic-chip ${c.animClass}`}
              style={{ top: c.top, left: c.left, pointerEvents: "auto" }}
              variants={cardReveal}
            >
              {c.label}
            </motion.div>
          ))}

          {/* Quotes */}
          {quotes.map((q) => (
            <motion.div
              key={q.text}
              className={`left-quote ${q.animClass}`}
              style={{ top: q.top, left: q.left, pointerEvents: "auto" }}
              variants={cardReveal}
            >
              <p className="left-quote-text">
                {q.text.split("\n").map((line, li, arr) => (
                  <span key={li}>
                    {line}
                    {li < arr.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Sparkle dots */}
        {sparkleDots.map((sp, i) => (
          <div
            key={i}
            className="sparkle-dot"
            style={{
              top: sp.top,
              left: sp.left,
              ["--dur" as string]: sp.dur,
              ["--delay" as string]: sp.delay,
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Bottom CTA — inside left panel */}
      <motion.div className="panel-left-cta" initial="hidden" animate="visible" variants={ctaFade}>
        <a href="#" className="cta-pill" id="hero-explore-cta">
          <span className="cta-pill-label">Explore Capsule</span>
          <span className="cta-pill-icon" aria-hidden="true">
            {/* Arrow-sparkle icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path
                d="M7.5 1.5L13 7.5L7.5 13.5"
                stroke="rgba(255,255,255,0.85)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 7.5H13"
                stroke="rgba(255,255,255,0.85)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </a>
        <a href="#demo" className="cta-ghost" id="hero-demo-cta">
          See Demo
        </a>
      </motion.div>
    </div>
  );
}

/* ============================================================
   CENTER ICON — overlaps the panel divider
   ============================================================ */
const sparklePositions = [
  { top: "-32px", right: "4px",  delay: 0,    size: 16, color: "#1F2421" },
  { top: "-10px", left: "2px",   delay: 1.2,  size: 9,  color: "#1F2421" },
  { bottom: "-8px", right: "24px", delay: 0.6, size: 8,  color: "#D8C3A5" },
] as const;

function CenterIcon() {
  return (
    <motion.div
      className="center-icon-wrap"
      initial="hidden"
      animate="visible"
      variants={iconFloatUp}
    >
      <div className="center-icon-container">
        {/* Ambient glow */}
        <div className="center-icon-glow" aria-hidden="true" />

        {/* Floating icon */}
        <motion.div
          className="center-icon-img"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/*
            USER: Replace this <PlaceholderIcon /> with your own SVG icon.
            Add your SVG file to /public/ and use:
            <img src="/your-icon.svg" alt="Memory Capsule" />
          */}
          <PlaceholderIcon />
        </motion.div>

        {/* Sparkles around icon */}
        {sparklePositions.map((sp, i) => {
          const { delay, size, color, ...posStyle } = sp;
          return (
            <motion.div
              key={i}
              className="icon-sparkle"
              style={{ ...posStyle }}
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.75, 1.2, 0.75] }}
              transition={{ duration: 2.4, delay, repeat: Infinity, ease: "easeInOut" }}
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
   RIGHT PANEL
   ============================================================ */
function RightPanel() {
  return (
    <div className="panel-right">
      {/* Headline */}
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
    </div>
  );
}

/* ============================================================
   EXPORTED HERO SECTION
   ============================================================ */
export default function HeroSection() {
  return (
    <section className="hero-stage" aria-label="Hero section" id="features">
      <div className="hero-card">
        {/* Inner navbar */}
        <InnerNavbar />

        {/* Two-panel body — panels slide in from sides */}
        <div className="hero-body">
          {/* Left panel — slides in from left */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            animate="visible"
            style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
          >
            <LeftPanel />
          </motion.div>

          {/* Right panel — slides in from right */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            animate="visible"
            style={{ overflow: "hidden" }}
          >
            <RightPanel />
          </motion.div>

          {/* Center icon — floats up after panels settle */}
          <CenterIcon />
        </div>
      </div>
    </section>
  );
}
