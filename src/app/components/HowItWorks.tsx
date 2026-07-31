"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ============================================================
   STEPS DATA
   ============================================================ */
const STEPS = [
  {
    id: 1,
    num: "01",
    badge: "STEP 01 - CAPTURE",
    title: "Capture what matters",
    desc: "Save your important conversations and ideas before they disappear into your chat history.",
    img: "/how-it-works-1.png",
  },
  {
    id: 2,
    num: "02",
    badge: "STEP 02 - ORGANIZE",
    title: "Organize your knowledge",
    desc: "Keep your saved conversations and insights organized inside your personal knowledge space.",
    img: "/how-it-works-2.png",
  },
  {
    id: 3,
    num: "03",
    badge: "STEP 03 - RECALL",
    title: "Recall it anytime",
    desc: "Find that important idea again whenever you need it, without digging through old chats.",
    img: "/how-it-works-3.png",
  },
] as const;

const CYCLE_MS = 3000;

/* ============================================================
   COMPONENT
   ============================================================ */
export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCycle = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % STEPS.length);
    }, CYCLE_MS);
  }, []);

  useEffect(() => {
    startCycle();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startCycle]);

  const handleClick = (index: number) => {
    setActive(index);
    startCycle();
  };

  return (
    <section className="hiw-section" id="how-it-works" aria-label="How it works">
      {/* Ambient hairline separator at top of section */}
      <div className="hiw-separator" aria-hidden="true" />

      <div className="hiw-container">
        {/* Section heading */}
        <motion.div
          className="hiw-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <span className="hiw-eyebrow">Your knowledge journey</span>
          <h2 className="hiw-title">How it works</h2>
          <p className="hiw-subtitle">
            Turn your best conversations into memories you can actually return to.
          </p>
        </motion.div>

        {/* Journey layout */}
        <div className="hiw-journey">
          {/* LEFT: Illustration column */}
          <motion.div
            className="hiw-illus-col"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Animated step badge chip */}
            <div className="hiw-chip-wrap" aria-live="polite" aria-atomic="true">
              <AnimatePresence mode="wait">
                <motion.span
                  key={active}
                  className="hiw-chip"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <span className="hiw-chip-dot" aria-hidden="true" />
                  {STEPS[active].badge}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Illustration stage — NO card, NO white background */}
            <div className="hiw-illus-stage">
              <div className="hiw-illus-glow" aria-hidden="true" />
              <AnimatePresence mode="wait">
                <motion.img
                  key={STEPS[active].id}
                  src={STEPS[active].img}
                  alt={STEPS[active].title}
                  className="hiw-illus-img"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                />
              </AnimatePresence>
            </div>

            {/* Step dot indicators */}
            <div className="hiw-dots" role="tablist" aria-label="Navigate steps">
              {STEPS.map((step, i) => (
                <button
                  key={step.id}
                  role="tab"
                  aria-selected={active === i}
                  aria-label={`Go to step ${i + 1}: ${step.title}`}
                  className={`hiw-dot${active === i ? " hiw-dot-active" : ""}`}
                  onClick={() => handleClick(i)}
                />
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Steps column */}
          <div className="hiw-steps-col">
            {/* Vertical spine — desktop only */}
            <div className="hiw-spine-wrap" aria-hidden="true">
              <div className="hiw-spine-line" />
              <div className="hiw-spine-traveler" />
            </div>

            {STEPS.map((step, i) => (
              <div key={step.id} className="hiw-step-row">
                <motion.button
                  type="button"
                  className={`hiw-step-btn${active === i ? " hiw-step-active" : ""}`}
                  onClick={() => handleClick(i)}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.55, delay: 0.1 * i, ease: "easeOut" }}
                  aria-pressed={active === i}
                >
                  {/* Number badge */}
                  <div className="hiw-badge-wrap">
                    <div className="hiw-badge-num">{step.num}</div>
                    {active === i && (
                      <svg
                        key={`ring-${active}`}
                        className="hiw-progress-ring"
                        viewBox="0 0 56 56"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          cx="28"
                          cy="28"
                          r="22"
                          stroke="rgba(216,195,165,0.45)"
                          strokeWidth="1.5"
                          strokeDasharray="138.2"
                          strokeDashoffset="138.2"
                          strokeLinecap="round"
                          className="hiw-progress-arc"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Step copy */}
                  <div className="hiw-step-text">
                    <h3 className="hiw-step-title">{step.title}</h3>
                    <p className="hiw-step-desc">{step.desc}</p>
                  </div>
                </motion.button>

                {/* Mobile connector between steps */}
                {i < STEPS.length - 1 && (
                  <div className="hiw-mobile-connector" aria-hidden="true">
                    <div className="hiw-mobile-line" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
