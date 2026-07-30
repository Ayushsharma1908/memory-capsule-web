"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Navbar from "./Navbar";

/* ============================================================
   ANIMATION VARIANTS
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

/* Entry animation: rises from 60px below, no x/y centering here —
   centering is handled by the static wrapper div in CSS. */
const logoFloatUp: Variants = {
  hidden: { y: 60, opacity: 0, scale: 0.94 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { delay: 0.75, duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const quoteFadeIn: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.1 + i * 0.25,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const headlineFade: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 2.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const subheadlineAndCtaFade: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 2.4, duration: 0.6, ease: "easeOut" },
  },
};

/* ============================================================
   SPARKLE SVG
   ============================================================ */
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

function LeftPanel() {
  return (
    <div className="panel-left" aria-label="Hero message">
      <div className="panel-left-simple">
        <motion.h1
          className="left-hero-headline"
          initial="hidden"
          animate="visible"
          variants={headlineFade}
        >
          Your best ideas
          <br />
          shouldn't live
          <br />
          in forgotten{" "}
          <span className="chat-placeholder">
            chats.
            <span className="chat-cursor" aria-hidden="true" />
          </span>{" "}
        </motion.h1>

        <motion.p
          className="left-hero-subline"
          initial="hidden"
          animate="visible"
          variants={subheadlineAndCtaFade}
        >
          Keep the knowledge. Lose the clutter.
        </motion.p>
      </div>

      {/* Knowledge artifact */}
      <motion.div
        className="memory-artifact"
        initial={{ opacity: 0, y: 24, rotate: -1 }}
        animate={{ opacity: 1, y: 0, rotate: -1 }}
        transition={{
          delay: 2.8,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="memory-artifact-top">
          <span className="memory-artifact-icon">
            <StarSparkle size={11} color="#D8C3A5" />
          </span>

          <span className="memory-artifact-label">SAVED MEMORY</span>

          <span className="memory-artifact-status">CAPTURED</span>
        </div>

        <h3 className="memory-artifact-title">React Authentication</h3>

        <p className="memory-artifact-description">
          JWT authentication with protected routes, refresh tokens and secure
          sessions.
        </p>

        <div className="memory-artifact-tags">
          <span>React</span>
          <span>JWT</span>
          <span>Security</span>
        </div>

        <div className="memory-artifact-footer">
          <span className="memory-source-dot" />
          Captured from conversation
        </div>
      </motion.div>

      {/* Decorative path toward capsule */}
      <div className="memory-flow" aria-hidden="true">
        <span className="memory-flow-line" />
        <span className="memory-flow-dot memory-flow-dot-1" />
        <span className="memory-flow-dot memory-flow-dot-2" />
        <span className="memory-flow-dot memory-flow-dot-3" />
      </div>
    </div>
  );
}
/* ============================================================
   MEMORY CAPSULE LOGO FALLBACK
   ============================================================ */
function PlaceholderIcon() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        backgroundColor: "#FAF8F4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 16px 40px rgba(31, 36, 33, 0.10)",
      }}
      aria-label="Memory Capsule Logo"
    >
      <svg width="55%" height="55%" viewBox="0 0 100 100" fill="none">
        <rect x="15" y="15" width="70" height="70" rx="22" fill="#1F2421" />
        <rect
          x="25"
          y="25"
          width="50"
          height="50"
          rx="16"
          stroke="#D8C3A5"
          strokeWidth="2"
          strokeDasharray="3 3"
          opacity="0.6"
        />
        <circle cx="50" cy="50" r="16" fill="#D8C3A5" />
        <circle cx="50" cy="50" r="8" fill="#FAF8F4" />
        <path
          d="M50 30V36M50 64V70M30 50H36M64 50H70"
          stroke="#FAF8F4"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>
    </div>
  );
}

const sparklePositions = [
  { top: "-10px", right: "20px", size: 14, color: "#D8C3A5", delay: 0 },
  { bottom: "10px", left: "-12px", size: 12, color: "#1F2421", delay: 0.9 },
  { top: "35px", left: "-18px", size: 10, color: "#D8C3A5", delay: 1.4 },
  { bottom: "35px", right: "-16px", size: 15, color: "#D8C3A5", delay: 0.5 },
];

function CenterIcon() {
  const [imgError, setImgError] = useState(false);
  const iconSize = "25.3vh";

  return (
    /* Static positioner — CSS handles centering, framer-motion stays out */
    <div className="center-icon-wrap" aria-hidden="true">
      <motion.div
        className="center-icon-motion"
        initial="hidden"
        animate="visible"
        variants={logoFloatUp}
        style={{ width: iconSize, height: iconSize, position: "relative" }}
      >
        {/* Soft ambient glow */}
        <div className="center-icon-glow" />

        {/* Floating logo */}
        <motion.div
          className="center-icon-img"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: "100%", height: "100%" }}
        >
          {!imgError ? (
            <img
              src="/logo.svg"
              alt="Memory Capsule Logo"
              onError={() => setImgError(true)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 14px 32px rgba(31, 36, 33, 0.10))",
              }}
            />
          ) : (
            <PlaceholderIcon />
          )}
        </motion.div>

        {/* Sparkles */}
        {sparklePositions.map((sp, i) => {
          const { delay, size, color, ...posStyle } = sp;
          return (
            <motion.div
              key={i}
              className="icon-sparkle"
              style={{ ...posStyle }}
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.75, 1.25, 0.75] }}
              transition={{
                duration: 2.6,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <StarSparkle size={size} color={color} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

/* ============================================================
   RIGHT PANEL — Headline, Subheadline & CTAs
   ============================================================ */
function RightPanel() {
  return (
    <div className="panel-right">
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
        learn from <em className="quote-wiggle">AI.</em>
      </motion.h1>

      <motion.p
        className="hero-subheadline"
        initial="hidden"
        animate="visible"
        variants={subheadlineAndCtaFade}
      >
        {
          "Capture conversations.\nGenerate structured knowledge.\nSearch everything later."
        }
      </motion.p>

      <motion.div
        className="hero-cta-group"
        initial="hidden"
        animate="visible"
        variants={subheadlineAndCtaFade}
      >
        <a href="#" className="cta-button-primary" id="hero-chrome-cta">
          <span className="cta-icon" aria-hidden="true">
            <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
              <circle
                cx="10"
                cy="10"
                r="8.5"
                stroke="#FAF8F4"
                strokeWidth="1.5"
              />
              <circle cx="10" cy="10" r="3.2" fill="#FAF8F4" />
              <line
                x1="10"
                y1="1.5"
                x2="10"
                y2="6.8"
                stroke="#FAF8F4"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="1.5"
                y1="14"
                x2="6.1"
                y2="11.4"
                stroke="#FAF8F4"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="18.5"
                y1="14"
                x2="13.9"
                y2="11.4"
                stroke="#FAF8F4"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
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
      <div className="hero-split-container">
        {/* Left Card */}
        <motion.div
          className="hero-left-card"
          variants={slideFromLeft}
          initial="hidden"
          animate="visible"
        >
          <div className="left-card-header">
            <a
              href="/"
              className="inner-navbar-brand"
              aria-label="Memory Capsule home"
            >
              <div className="inner-navbar-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <rect
                    x="2"
                    y="2"
                    width="12"
                    height="12"
                    rx="3"
                    fill="#FAF8F4"
                    fillOpacity="0.2"
                    stroke="#FAF8F4"
                    strokeWidth="1.2"
                  />
                  <circle cx="8" cy="8" r="2.5" fill="#D8C3A5" />
                </svg>
              </div>
              <span className="inner-navbar-wordmark">Memory Capsule</span>
            </a>
            <div className="mobile-navbar-wrapper">
              <Navbar />
            </div>
          </div>
          <LeftPanel />
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="hero-right-card"
          variants={slideFromRight}
          initial="hidden"
          animate="visible"
        >
          <div className="right-card-header">
            <div className="desktop-navbar-wrapper">
              <Navbar />
            </div>
          </div>
          <RightPanel />
        </motion.div>

        {/* Center icon — floats in the gap, centered by CSS wrapper */}
        <CenterIcon />
      </div>

      {/* Bottom section blend light aura */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(216, 195, 165, 0.12) 0%, rgba(216, 195, 165, 0.02) 60%, transparent 80%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
