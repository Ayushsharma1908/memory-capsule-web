"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiMessageCircle,
  FiCode,
  FiBookOpen,
  FiTarget,
  FiStar,
  FiZap,
  FiTag,
  FiFolder,
  FiShield,
  FiLayers,
} from "react-icons/fi";

const EASE_SMOOTH = [0.4, 0, 0.2, 1] as const;

function floatTransition(duration: number, delay = 0, reducedMotion: boolean | null = false) {
  if (reducedMotion) return { duration: 0 };
  return { duration, repeat: Infinity, ease: "easeInOut" as const, delay };
}

/* ---------------------------------- 1. Universal Capture ---------------------------------- */

const SOURCE_ICONS = [FiMessageCircle, FiCode, FiBookOpen, FiTarget];

function CaptureVisual() {
  const reducedMotion = useReducedMotion();
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden flex flex-col items-center justify-center h-full"
      style={{ background: "transparent", padding: "24px" }}
    >
      <div className="flex flex-col items-center gap-6 w-full max-w-[200px]">
        {/* Source Icons */}
        <div className="flex items-center justify-between w-full">
          {SOURCE_ICONS.map((Icon, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-center rounded-full border bg-white relative z-10"
              style={{ width: 34, height: 34, borderColor: "var(--border-strong)", boxShadow: "var(--shadow-sm)" }}
              animate={reducedMotion ? {} : { y: [-1.5, 1.5, -1.5] }}
              transition={floatTransition(3 + i * 0.4, i * 0.2, reducedMotion)}
            >
              <Icon size={14} style={{ color: "var(--text-secondary)" }} />
            </motion.div>
          ))}
        </div>

        {/* Connection Line */}
        <div className="relative w-full flex justify-center h-10">
          <motion.div
            className="absolute top-0 w-px h-full"
            style={{ background: "linear-gradient(to bottom, transparent, var(--border-strong), transparent)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: EASE_SMOOTH }}
          />
        </div>

        {/* Destination Capsule */}
        <motion.div
          className="flex items-center justify-center rounded-2xl border bg-white relative z-10"
          style={{ width: 52, height: 52, borderColor: "var(--accent)", boxShadow: "var(--shadow-md)" }}
          animate={reducedMotion ? {} : {
            boxShadow: [
              "0 4px 16px rgba(31, 36, 33, 0.08)",
              "0 4px 24px rgba(216, 195, 165, 0.25)",
              "0 4px 16px rgba(31, 36, 33, 0.08)"
            ]
          }}
          transition={floatTransition(4, 0, reducedMotion)}
        >
          <FiZap size={22} style={{ color: "var(--primary)" }} />
        </motion.div>
      </div>
    </div>
  );
}

/* ---------------------------------- 2. Smart Dashboards ---------------------------------- */

function DashboardChart() {
  const reducedMotion = useReducedMotion();
  const path = "M0,32 L20,28 L40,30 L60,18 L80,22 L100,10 L120,12 L140,4";
  return (
    <svg viewBox="0 0 140 40" className="w-full mt-5" style={{ height: 42, overflow: "visible" }}>
      <motion.path
        d={path}
        fill="none"
        stroke="var(--accent)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={reducedMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: EASE_SMOOTH }}
      />
      <circle cx={140} cy={4} r={3} fill="var(--primary)" />
    </svg>
  );
}

function DashboardVisual() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden flex flex-col justify-center h-full"
      style={{ padding: "32px" }}
    >
      <div className="flex-1 w-full max-w-[260px] mx-auto flex flex-col gap-4">
        {/* Main Stat */}
        <div className="border bg-white rounded-xl p-5 flex flex-col" style={{ borderColor: "var(--border)", boxShadow: "var(--shadow-sm)" }}>
          <span className="text-[10px] font-medium tracking-[0.15em] uppercase mb-2" style={{ color: "var(--text-tertiary)" }}>
            Memories Saved
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-semibold" style={{ fontSize: 28, color: "var(--primary)", fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}>
              2,847
            </span>
          </div>
          <DashboardChart />
        </div>

        {/* Sub Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="border bg-white rounded-xl p-4 flex flex-col" style={{ borderColor: "var(--border)" }}>
            <span className="text-[9px] font-medium tracking-[0.15em] uppercase mb-2" style={{ color: "var(--text-tertiary)" }}>Tags</span>
            <span className="font-semibold" style={{ fontSize: 18, color: "var(--primary)", fontFamily: "var(--font-heading)" }}>48</span>
          </div>
          <div className="border bg-white rounded-xl p-4 flex flex-col" style={{ borderColor: "var(--border)" }}>
            <span className="text-[9px] font-medium tracking-[0.15em] uppercase mb-2" style={{ color: "var(--text-tertiary)" }}>Collections</span>
            <span className="font-semibold" style={{ fontSize: 18, color: "var(--primary)", fontFamily: "var(--font-heading)" }}>12</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------- 3. Connected Knowledge ---------------------------------- */

function spokePos(center: number, radius: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: center + radius * Math.cos(rad), y: center + radius * Math.sin(rad) };
}

const TOPIC_NODES = [
  { icon: FiCode, angle: -90, label: "Code" },
  { icon: FiMessageCircle, angle: -18, label: "Chats" },
  { icon: FiBookOpen, angle: 54, label: "Notes" },
  { icon: FiTarget, angle: 126, label: "Ideas" },
  { icon: FiStar, angle: 198, label: "Topics" },
];

function KnowledgeVisual() {
  const reducedMotion = useReducedMotion();
  const CENTER = 90;
  const RADIUS = 65;

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden flex items-center justify-center h-full"
      style={{ padding: "16px" }}
    >
      <div className="relative" style={{ width: CENTER * 2, height: CENTER * 2 }}>
        {/* Connection Lines */}
        {TOPIC_NODES.map((n, i) => (
          <div
            key={`line-${i}`}
            className="absolute"
            style={{
              left: CENTER,
              top: CENTER,
              width: RADIUS,
              height: 1,
              background: "var(--border-strong)",
              transformOrigin: "left center",
              transform: `rotate(${n.angle}deg)`,
              opacity: 0.25,
            }}
          />
        ))}

        {/* Surrounding Nodes */}
        {TOPIC_NODES.map((n, i) => {
          const pos = spokePos(CENTER, RADIUS, n.angle);
          return (
            <motion.div
              key={`node-${i}`}
              className="absolute flex items-center justify-center rounded-full border bg-white"
              style={{
                width: 32,
                height: 32,
                left: pos.x,
                top: pos.y,
                transform: "translate(-50%, -50%)",
                borderColor: "var(--border)",
                boxShadow: "var(--shadow-sm)",
              }}
              animate={reducedMotion ? {} : { scale: [1, 1.02, 1] }}
              transition={floatTransition(4 + i * 0.5, i * 0.3, reducedMotion)}
            >
              <n.icon size={13} style={{ color: "var(--text-secondary)" }} />
            </motion.div>
          );
        })}

        {/* Central Node */}
        <motion.div
          className="absolute flex items-center justify-center rounded-full border bg-white"
          style={{
            width: 48,
            height: 48,
            left: CENTER,
            top: CENTER,
            transform: "translate(-50%, -50%)",
            borderColor: "var(--accent)",
            boxShadow: "var(--shadow-md)"
          }}
          animate={reducedMotion ? {} : { scale: [1, 1.015, 1] }}
          transition={floatTransition(3, 0, reducedMotion)}
        >
          <FiZap size={20} style={{ color: "var(--primary)" }} />
        </motion.div>
      </div>
    </div>
  );
}

/* ---------------------------------- 4. Advanced Automation ---------------------------------- */

const FLOW_STEPS = [
  { label: "Capture", icon: FiLayers },
  { label: "Summarize", icon: FiMessageCircle },
  { label: "Tag", icon: FiTag },
  { label: "Organize", icon: FiFolder },
  { label: "Remember", icon: FiStar },
];

function AutomationVisual() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % FLOW_STEPS.length), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden flex flex-col items-center justify-center h-full gap-2"
      style={{ padding: "20px" }}
    >
      {FLOW_STEPS.map((step, i) => (
        <div key={step.label} className="flex flex-col items-center w-full max-w-[160px]">
          <motion.div
            className="flex items-center gap-3 rounded-lg border bg-white w-full"
            style={{
              padding: "10px 14px",
              borderColor: active === i ? "var(--accent)" : "var(--border)",
              boxShadow: active === i ? "var(--shadow-sm)" : "none",
              opacity: active === i ? 1 : 0.5
            }}
            animate={{ scale: active === i ? 1.02 : 1 }}
            transition={{ duration: 0.5, ease: EASE_SMOOTH }}
          >
            <step.icon size={13} style={{ color: active === i ? "var(--primary)" : "var(--text-tertiary)" }} />
            <span className="text-[12px] font-medium tracking-wide" style={{ color: active === i ? "var(--primary)" : "var(--text-secondary)" }}>
              {step.label}
            </span>
          </motion.div>
          {i < FLOW_STEPS.length - 1 && (
            <div style={{ width: 1, height: 14, borderLeft: "1px solid var(--border)", opacity: 0.5 }} />
          )}
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------- 5. Private & Secure ---------------------------------- */

const ORBIT_POINTS = [
  { angle: 0 },
  { angle: 120 },
  { angle: 240 },
];

function SecurityVisual() {
  const reducedMotion = useReducedMotion();
  const CENTER = 90;
  const RADIUS = 50;

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden flex items-center justify-center h-full"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border-strong) 1px, transparent 1px), linear-gradient(90deg, var(--border-strong) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="relative" style={{ width: CENTER * 2, height: CENTER * 2 }}>
        {/* Orbit track */}
        <div
          className="absolute rounded-full border"
          style={{
            width: RADIUS * 2,
            height: RADIUS * 2,
            left: CENTER,
            top: CENTER,
            transform: "translate(-50%, -50%)",
            borderColor: "var(--border-strong)",
            opacity: 0.2
          }}
        />

        {/* Orbiting points */}
        {!reducedMotion && ORBIT_POINTS.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-full"
            style={{ left: 0, top: 0, transformOrigin: "center center" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear", delay: i * -5 }}
          >
            <div
              className="absolute rounded-full"
              style={{
                width: 4,
                height: 4,
                background: "var(--accent)",
                left: CENTER + RADIUS,
                top: CENTER,
                transform: "translate(-50%, -50%)"
              }}
            />
          </motion.div>
        ))}

        {/* Central Shield */}
        <motion.div
          className="absolute flex items-center justify-center rounded-xl bg-white border"
          style={{
            width: 52,
            height: 52,
            left: CENTER,
            top: CENTER,
            transform: "translate(-50%, -50%)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow-sm)"
          }}
          animate={reducedMotion ? {} : { scale: [1, 1.02, 1] }}
          transition={floatTransition(4, 0, reducedMotion)}
        >
          <FiShield size={22} style={{ color: "var(--primary)" }} />
        </motion.div>
      </div>
    </div>
  );
}

/* ---------------------------------- Cards ---------------------------------- */

const CARDS = [
  {
    visual: <CaptureVisual />,
    title: "Universal Capture",
    body: "Save any AI conversation in one click.",
    span: "md:col-span-3",
    height: "min-h-[380px] md:h-[440px]",
    visualHeight: "h-[60%] md:h-[65%]",
    textHeight: "h-[40%] md:h-[35%]"
  },
  {
    visual: <DashboardVisual />,
    title: "Smart Dashboards",
    body: "See your entire knowledge base grow at a glance.",
    span: "md:col-span-3",
    height: "min-h-[380px] md:h-[440px]",
    visualHeight: "h-[60%] md:h-[65%]",
    textHeight: "h-[40%] md:h-[35%]"
  },
  {
    visual: <KnowledgeVisual />,
    title: "Connected Knowledge",
    body: "Discover relationships between ideas automatically.",
    span: "md:col-span-2",
    height: "min-h-[320px] md:h-[360px]",
    visualHeight: "h-[55%] md:h-[60%]",
    textHeight: "h-[45%] md:h-[40%]"
  },
  {
    visual: <AutomationVisual />,
    title: "Advanced Automation",
    body: "Summarize, tag, and organize every new memory.",
    span: "md:col-span-2",
    height: "min-h-[320px] md:h-[360px]",
    visualHeight: "h-[55%] md:h-[60%]",
    textHeight: "h-[45%] md:h-[40%]"
  },
  {
    visual: <SecurityVisual />,
    title: "Private & Secure",
    body: "Keep your memories yours, from capture to recall.",
    span: "md:col-span-2",
    height: "min-h-[320px] md:h-[360px]",
    visualHeight: "h-[55%] md:h-[60%]",
    textHeight: "h-[45%] md:h-[40%]"
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--bg-outer)", paddingTop: 140, paddingBottom: 140 }}
      id="features"
      aria-label="Features"
    >
      {/* Minimal ambient radial for subtle depth */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(216,195,165,0.02) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mb-16 md:mb-24 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE_SMOOTH }}
        >
          <span
            className="inline-flex items-center gap-2 uppercase font-medium tracking-[0.2em]"
            style={{ fontSize: 11, color: "var(--accent)", fontFamily: "var(--font-body)", marginBottom: 24 }}
          >
            Everything you need
          </span>
          <h2
            className="font-bold leading-[1.05]"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(36px, 4.5vw, 56px)",
              color: "#FAF8F4",
              letterSpacing: "-0.02em",
              marginBottom: 28,
            }}
          >
            Your knowledge,{" "}
            <span style={{ color: "var(--accent)" }}>amplified</span>
          </h2>
          <p
            className="leading-relaxed mx-auto"
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 1.5vw, 17px)", color: "rgba(250,248,244,0.6)", maxWidth: 500 }}
          >
            From capturing to recalling — Memory Capsule handles the entire lifecycle of your knowledge.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              className={card.span}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_SMOOTH }}
            >
              <motion.div
                className={`group relative flex flex-col overflow-hidden bg-white rounded-3xl ${card.height}`}
                style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
                whileHover={{ y: -3, borderColor: "var(--border-strong)", boxShadow: "0 12px 40px rgba(0,0,0,0.06)" }}
                transition={{ duration: 0.3, ease: EASE_SMOOTH }}
              >
                {/* Visual Area */}
                <motion.div
                  className={`w-full flex items-center justify-center pt-8 ${card.visualHeight}`}
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.4, ease: EASE_SMOOTH }}
                >
                  {card.visual}
                </motion.div>

                {/* Text Area */}
                <div className={`w-full flex flex-col justify-end px-8 pb-10 ${card.textHeight}`}>
                  <h3
                    className="font-semibold mb-2"
                    style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(19px, 2vw, 22px)", color: "var(--primary)", letterSpacing: "-0.01em" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-secondary)" }}
                  >
                    {card.body}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}