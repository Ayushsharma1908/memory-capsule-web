"use client";

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

const logoFloatUp: Variants = {
  hidden: { y: 70, opacity: 0, scale: 0.92 },
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
   CONNECTING LINES — subtle visual flow pointing toward center
   ============================================================ */
function ConnectingLines() {
  return (
    <motion.svg
      className="lines-svg"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.25 }}
      transition={{ delay: 1.45, duration: 0.8, ease: "easeOut" }}
    >
      {/* Subtle dashed lines pointing from input cards toward center logo */}
      <line x1="28%" y1="14%" x2="84%" y2="45%" stroke="#D8C3A5" strokeWidth="1" strokeDasharray="4 6" />
      <line x1="30%" y1="42%" x2="84%" y2="48%" stroke="#D8C3A5" strokeWidth="1" strokeDasharray="4 6" />
      <line x1="29%" y1="70%" x2="84%" y2="52%" stroke="#D8C3A5" strokeWidth="1" strokeDasharray="4 6" />
      <line x1="68%" y1="26%" x2="84%" y2="46%" stroke="#D8C3A5" strokeWidth="1" strokeDasharray="3 5" />
      <line x1="64%" y1="56%" x2="84%" y2="50%" stroke="#D8C3A5" strokeWidth="1" strokeDasharray="3 5" />
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

// Sparkle background accents
const sparkleDots = [
  { top: "16%", left: "44%", dur: "2.2s", delay: "0s" },
  { top: "36%", left: "78%", dur: "3.0s", delay: "0.8s" },
  { top: "52%", left: "40%", dur: "2.6s", delay: "0.4s" },
  { top: "75%", left: "66%", dur: "2.8s", delay: "1.2s" },
  { top: "90%", left: "14%", dur: "3.2s", delay: "0.6s" },
];

/* ============================================================
   MEMORY CAPSULE LOGO PLACEHOLDER
   User can paste their exact Memory Capsule SVG icon inside this container!
   ============================================================ */
function PlaceholderIcon() {
  return (
    <div
      style={{
        width: 180,
        height: 180,
        borderRadius: "50%",
        border: "2px dashed #1F2421",
        backgroundColor: "#FAF8F4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        color: "#1F2421",
        boxShadow: "0 12px 36px rgba(31, 36, 33, 0.08)",
      }}
      aria-label="Memory Capsule Logo Container"
    >
      {/* 
        ============================================================
        PASTE YOUR MEMORY CAPSULE SVG LOGO HERE
        Replace this <svg> or paste your logo code directly inside!
        ============================================================
      */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
      <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.03em", opacity: 0.7 }}>
        Your Logo SVG
      </span>
    </div>
  );
}

/* ============================================================
   INNER NAVBAR — Clean, Apple/Linear style navbar
   ============================================================ */
function InnerNavbar() {
  return (
    <div className="inner-navbar">
      <div className="inner-navbar-container">
        {/* Left: Brand */}
        <a href="/" className="inner-navbar-brand" aria-label="Memory Capsule home">
          <div className="inner-navbar-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="2" y="2" width="12" height="12" rx="3" fill="#FAF8F4" fillOpacity="0.2" stroke="#FAF8F4" strokeWidth="1.2" />
              <circle cx="8" cy="8" r="2.5" fill="#D8C3A5" />
            </svg>
          </div>
          <span className="inner-navbar-wordmark">Memory Capsule</span>
        </a>

        {/* Right: Nav items */}
        <div className="inner-navbar-right">
          <a href="#features" className="inner-nav-link">Features</a>
          <a href="#demo" className="inner-nav-link">Demo</a>
          <a href="#roadmap" className="inner-nav-link">Roadmap</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inner-nav-link">GitHub</a>
          <a href="#" className="inner-nav-cta" id="nav-add-to-chrome">Add to Chrome</a>
        </div>
      </div>
    </div>
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
              ["--dur" as string]: sp.dur,
              ["--delay" as string]: sp.delay,
            }}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   CENTER ICON — Floating Hero Logo
   ============================================================ */
const sparklePositions = [
  { top: "-30px", right: "6px", delay: 0, size: 15, color: "#1F2421" },
  { top: "-8px", left: "2px", delay: 1.2, size: 9, color: "#1F2421" },
  { bottom: "-10px", right: "20px", delay: 0.6, size: 9, color: "#D8C3A5" },
] as const;

function CenterIcon() {
  return (
    <motion.div
      className="center-icon-wrap"
      initial="hidden"
      animate="visible"
      variants={logoFloatUp}
    >
      <div className="center-icon-container">
        {/* Soft beige ambient glow */}
        <div className="center-icon-glow" aria-hidden="true" />

        {/* Floating icon with calm infinite bounce */}
        <motion.div
          className="center-icon-img"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <PlaceholderIcon />
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
   RIGHT PANEL — Headline, Subheadline & CTAs
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

      {/* Step 9: Subheadline & CTAs */}
      <motion.p
        className="hero-subheadline"
        initial="hidden"
        animate="visible"
        variants={subheadlineAndCtaFade}
      >
        Capture conversations, generate structured knowledge, and build a searchable memory across your AI chats.
      </motion.p>

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
   EXPORTED HERO SECTION
   ============================================================ */
export default function HeroSection() {
  return (
    <section className="hero-stage" aria-label="Hero section" id="features">
      <div className="hero-card">
        {/* Inner navbar */}
        <InnerNavbar />

        {/* Two-panel body */}
        <div className="hero-body">
          {/* Step 1: Left panel slides in from left */}
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            animate="visible"
            style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
          >
            <LeftPanel />
          </motion.div>

          {/* Step 2: Right panel slides in from right */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            animate="visible"
            style={{ overflow: "hidden" }}
          >
            <RightPanel />
          </motion.div>

          {/* Step 3: Center logo rises from below */}
          <CenterIcon />
        </div>
      </div>
    </section>
  );
}
