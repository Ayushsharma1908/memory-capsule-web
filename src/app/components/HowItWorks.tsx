"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    id: 1,
    stepNum: "01",
    badge: "STEP 01 • CAPTURE",
    title: "Capture what matters",
    description:
      "Save your important conversations and ideas before they disappear into your chat history.",
    image: "/how-it-works-1.png",
  },
  {
    id: 2,
    stepNum: "02",
    badge: "STEP 02 • ORGANIZE",
    title: "Organize your knowledge",
    description:
      "Keep your saved conversations and insights organized inside your personal knowledge space.",
    image: "/how-it-works-2.png",
  },
  {
    id: 3,
    stepNum: "03",
    badge: "STEP 03 • RECALL",
    title: "Recall it anytime",
    description:
      "Find that important idea again whenever you need it, without digging through old chats.",
    image: "/how-it-works-3.png",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden px-6 pt-24 pb-24 md:px-10 md:pt-36 md:pb-28 lg:px-16 lg:pt-44 lg:pb-36"
      style={{ background: "var(--bg-outer)" }}
      id="how-it-works"
    >
      {/* Top Ambient Blend Glow */}
      <div
        className="pointer-events-none absolute -top-36 left-1/2 -translate-x-1/2 h-[480px] w-full max-w-6xl opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(216, 195, 165, 0.14) 0%, rgba(216, 195, 165, 0.03) 50%, transparent 80%)",
          filter: "blur(36px)",
        }}
        aria-hidden="true"
      />

      {/* Central Flow Line connecting Hero into HowItWorks */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
        aria-hidden="true"
      >
        <div className="h-28 w-[1px] bg-gradient-to-b from-transparent via-[rgba(216,195,165,0.4)] to-[rgba(216,195,165,0.15)]" />
        <div className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)] animate-pulse" />
      </div>

      <div className="hiw-container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-20 mb-12 md:mb-16 pt-8 text-center md:text-left"
        >
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--accent)" }}
          >
            Your knowledge journey
          </p>

          <h2
            className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl lg:text-6xl"
            style={{ color: "#FAF8F4", fontFamily: "var(--font-heading)" }}
          >
            How it works
          </h2>

          <p
            className="mt-4 max-w-lg text-base leading-7 md:text-lg"
            style={{
              color: "rgba(250, 248, 244, 0.55)",
              fontFamily: "var(--font-body)",
            }}
          >
            Turn your best conversations into memories you can actually return to.
          </p>
        </motion.div>

        {/* Journey Area */}
        <div className="hiw-wrap">
          {/* Connector SVG — decorative sweeps + per-step dashed lines */}
          <svg
            viewBox="0 0 1000 600"
            className="hiw-connector-svg"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* decorative outer sweeps, purely ambient */}
            <path
              d="M -20 20 C 160 10, 260 90, 360 150"
              className="hiw-dash-decorative"
            />
            <path
              d="M 360 450 C 260 510, 160 590, -20 580"
              className="hiw-dash-decorative"
            />

            {/* per-step connectors, drawn in on scroll */}
            {[100, 300, 500].map((y, i) => (
              <motion.path
                key={i}
                d={`M 430 300 C 500 ${300 - (300 - y) * 0.6}, 520 ${y}, 600 ${y}`}
                stroke="rgba(216, 195, 165, 0.5)"
                strokeWidth="2"
                strokeDasharray="7 9"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.15, ease: "easeInOut" }}
              />
            ))}

            {[100, 300, 500].map((y, i) => (
              <circle
                key={`dot-${i}`}
                cx="600"
                cy={y}
                r="4"
                fill={activeStep === i ? "var(--accent)" : "rgba(216,195,165,0.35)"}
              />
            ))}
          </svg>

          <div className="hiw-grid">
            {/* Center floating circle */}
            <motion.div
              className="hiw-circle-wrap"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                className="hiw-circle-glow"
                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="hiw-circle"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="hiw-circle-header">
                  <span className="hiw-circle-badge">{steps[activeStep].badge}</span>
                </div>

                <div className="hiw-circle-canvas">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={steps[activeStep].id}
                      src={steps[activeStep].image}
                      alt={steps[activeStep].title}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      transition={{ duration: 0.55, ease: "easeOut" }}
                      className="hiw-circle-img"
                      style={{ mixBlendMode: "multiply" }}
                    />
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: numbered step list */}
            <div className="hiw-steps">
              {steps.map((step, index) => {
                const active = activeStep === index;
                return (
                  <motion.button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className={`hiw-step ${active ? "hiw-step-active" : ""}`}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.15 * index, ease: "easeOut" }}
                  >
                    <div className="hiw-step-badge-wrap">
                      <motion.div
                        className="hiw-step-badge"
                        animate={{ scale: active ? 1.05 : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span>{step.id}</span>
                      </motion.div>

                      {active && (
                        <svg className="hiw-progress-ring" viewBox="0 0 66 66">
                          <circle
                            cx="33"
                            cy="33"
                            r="30"
                            fill="none"
                            stroke="rgba(216, 195, 165, 0.45)"
                            strokeWidth="2"
                            strokeDasharray="188"
                            strokeDashoffset="188"
                            strokeLinecap="round"
                            className="how-step-progress"
                          />
                        </svg>
                      )}
                    </div>

                    <div className="hiw-step-text">
                      <h3 className="hiw-step-title">{step.title}</h3>
                      <p className="hiw-step-desc">{step.description}</p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}