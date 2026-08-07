"use client";

import { motion, AnimatePresence } from "framer-motion";
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
  FiCheckCircle,
} from "react-icons/fi";

const EASE_SMOOTH = [0.4, 0, 0.2, 1] as const;

function floatTransition(duration: number, delay = 0) {
  return { duration, repeat: Infinity, ease: "easeInOut" as const, delay };
}

/** angle in degrees, 0 = pointing right, clockwise — matches CSS rotate() directly */
function spokePos(center: number, radius: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: center + radius * Math.cos(rad), y: center + radius * Math.sin(rad) };
}

function Spoke({ center, radius, angle }: { center: number; radius: number; angle: number }) {
  return (
    <div
      className="absolute"
      style={{
        left: center,
        top: center,
        width: radius,
        height: 1,
        background: "var(--border-strong)",
        transformOrigin: "left center",
        transform: `rotate(${angle}deg)`,
        opacity: 0.45,
      }}
    />
  );
}

function Shimmer({ width, height = 8, radius = 5, delay = 0 }: { width: string; height?: number; radius?: number; delay?: number }) {
  return (
    <div className="relative overflow-hidden" style={{ width, height, borderRadius: radius, background: "var(--border)" }}>
      <motion.div
        className="absolute inset-y-0 left-0"
        style={{ width: "40%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)" }}
        animate={{ x: ["-40%", "220%"] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay }}
      />
    </div>
  );
}

/* ---------------------------------- 1. Universal Capture ---------------------------------- */

const SOURCE_ICONS = [FiMessageCircle, FiCode, FiBookOpen, FiTarget];

function CaptureVisual() {
  return (
    <div
      className="relative w-full rounded-2xl border overflow-hidden flex flex-col items-center"
      style={{ background: "var(--bg)", borderColor: "var(--border)", height: 208, padding: "20px 20px 16px" }}
    >
      <div className="flex items-center gap-2.5">
        {SOURCE_ICONS.map((Icon, i) => (
          <motion.div
            key={i}
            className="flex items-center justify-center rounded-full border bg-white"
            style={{ width: 28, height: 28, borderColor: "var(--border-strong)", boxShadow: "var(--shadow-sm)" }}
            animate={{ y: [-2, 2, -2] }}
            transition={floatTransition(2.6 + i * 0.3, i * 0.2)}
          >
            <Icon size={12} style={{ color: "var(--primary)" }} />
          </motion.div>
        ))}
      </div>

      <div style={{ width: 1, height: 14, background: "var(--border-strong)" }} />

      <motion.div
        className="rounded-full px-4 py-1.5 text-xs font-semibold mb-3"
        style={{ background: "var(--primary)", color: "white" }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(216,195,165,0.35)",
            "0 0 0 8px rgba(216,195,165,0)",
            "0 0 0 0 rgba(216,195,165,0)",
          ],
        }}
        transition={floatTransition(2.4)}
      >
        Connect
      </motion.div>

      <div
        className="relative w-full flex-1 rounded-xl"
        style={{ border: "1.5px dashed var(--border-strong)", background: "white", padding: "12px 14px" }}
      >
        <motion.div
          className="absolute rounded-full px-2 py-0.5 text-[9.5px] font-bold shadow-md"
          style={{ background: "var(--primary)", color: "var(--accent)", top: -10, right: 10 }}
          animate={{ scale: [1, 1.07, 1] }}
          transition={floatTransition(2.6, 0.3)}
        >
          +12 today
        </motion.div>
        <p className="text-[10.5px] font-medium mb-2" style={{ color: "var(--text-tertiary)" }}>
          Saved from ChatGPT
        </p>
        <div className="space-y-1.5">
          <Shimmer width="90%" />
          <Shimmer width="70%" delay={0.2} />
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------- 2. Smart Dashboards ---------------------------------- */

function LineChart() {
  const path = "M0,32 L14,26 L28,29 L42,18 L56,22 L70,10 L84,15 L98,6 L112,12 L126,4 L140,8";
  return (
    <svg viewBox="0 0 140 40" className="w-full" style={{ height: 42, overflow: "visible" }}>
      <motion.path
        d={path}
        fill="none"
        stroke="var(--accent)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />
      <line x1={112} y1={0} x2={112} y2={40} stroke="var(--border-strong)" strokeWidth={1} strokeDasharray="3 3" />
      <circle cx={126} cy={4} r={3} fill="var(--primary)" />
    </svg>
  );
}

function DashboardVisual() {
  const [pct, setPct] = useState(68);
  useEffect(() => {
    const id = setInterval(() => setPct((p) => (p === 68 ? 74 : 68)), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative w-full rounded-2xl border overflow-hidden flex flex-col"
      style={{ background: "var(--bg)", borderColor: "var(--border)", height: 208, padding: 16 }}
    >
      {/* top bar */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5">
          <div className="rounded-md flex items-center justify-center" style={{ width: 18, height: 18, background: "var(--primary)" }}>
            <FiZap size={9} style={{ color: "var(--accent)" }} />
          </div>
          <span className="text-[11px] font-bold" style={{ color: "var(--primary)" }}>
            Memory Capsule
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="rounded-full px-2 py-0.5 text-[9px] font-semibold" style={{ background: "var(--primary)", color: "white" }}>
            Overview
          </span>
          <span className="rounded-full px-2 py-0.5 text-[9px] font-semibold border" style={{ borderColor: "var(--border-strong)", color: "var(--text-tertiary)" }}>
            Reports
          </span>
        </div>
      </div>

      {/* main grid */}
      <div className="flex-1 grid grid-cols-3 gap-2">
        <div className="col-span-2 rounded-xl border bg-white flex flex-col justify-between" style={{ borderColor: "var(--border)", padding: "10px 12px" }}>
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-bold" style={{ fontSize: 19, color: "var(--primary)" }}>
                1,284
              </span>
              <span className="text-[9.5px] font-bold" style={{ color: "#2E9E5B" }}>
                +18%
              </span>
            </div>
            <span className="text-[9px] font-medium" style={{ color: "var(--text-tertiary)" }}>
              Memories saved
            </span>
          </div>
          <LineChart />
        </div>

        <div className="col-span-1 flex flex-col gap-2">
          <div className="rounded-xl border bg-white flex-1 flex flex-col justify-center" style={{ borderColor: "var(--border)", padding: "8px 10px" }}>
            <span className="font-bold" style={{ fontSize: 14, color: "var(--primary)" }}>
              48
            </span>
            <span className="text-[8.5px] font-medium" style={{ color: "var(--text-tertiary)" }}>
              Tags
            </span>
          </div>
          <div className="rounded-xl border bg-white flex-1 flex flex-col justify-center" style={{ borderColor: "var(--border)", padding: "8px 10px" }}>
            <span className="font-bold" style={{ fontSize: 14, color: "var(--primary)" }}>
              14
            </span>
            <span className="text-[8.5px] font-medium" style={{ color: "var(--text-tertiary)" }}>
              Collections
            </span>
          </div>
        </div>
      </div>

      {/* split bar */}
      <div className="mt-2.5">
        <div className="flex h-2 w-full rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
          <motion.div
            style={{ background: "var(--accent)" }}
            animate={{ width: [`${pct}%`, `${pct}%`] }}
            transition={{ duration: 1, ease: EASE_SMOOTH }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[8.5px] font-medium" style={{ color: "var(--text-tertiary)" }}>
            Text notes {pct}%
          </span>
          <span className="text-[8.5px] font-medium" style={{ color: "var(--text-tertiary)" }}>
            Code {100 - pct}%
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------- 3. Connected Knowledge ---------------------------------- */

const TOPIC_NODES = [
  { icon: FiCode, angle: -90 },
  { icon: FiMessageCircle, angle: -18 },
  { icon: FiBookOpen, angle: 54 },
  { icon: FiTarget, angle: 126 },
  { icon: FiStar, angle: 198 },
];

function KnowledgeVisual() {
  const CENTER = 78;
  const RADIUS = 60;

  return (
    <div
      className="relative w-full rounded-2xl border overflow-hidden flex items-center justify-center"
      style={{
        background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(216,195,165,0.10) 0%, var(--bg) 70%)",
        borderColor: "var(--border)",
        height: 180,
      }}
    >
      <div className="relative" style={{ width: CENTER * 2, height: CENTER * 2 }}>
        {TOPIC_NODES.map((n, i) => (
          <Spoke key={i} center={CENTER} radius={RADIUS} angle={n.angle} />
        ))}

        {TOPIC_NODES.map((n, i) => {
          const pos = spokePos(CENTER, RADIUS, n.angle);
          return (
            <motion.div
              key={i}
              className="absolute flex items-center justify-center rounded-full border bg-white"
              style={{
                width: 30,
                height: 30,
                left: pos.x,
                top: pos.y,
                transform: "translate(-50%, -50%)",
                borderColor: "var(--border-strong)",
                boxShadow: "var(--shadow-sm)",
              }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={floatTransition(3 + i * 0.3, i * 0.25)}
            >
              <n.icon size={12} style={{ color: "var(--primary)" }} />
            </motion.div>
          );
        })}

        <motion.div
          className="absolute flex items-center justify-center rounded-full"
          style={{ width: 48, height: 48, left: CENTER, top: CENTER, transform: "translate(-50%, -50%)", background: "var(--primary)" }}
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(216,195,165,0.35)",
              "0 0 0 12px rgba(216,195,165,0)",
              "0 0 0 0 rgba(216,195,165,0)",
            ],
          }}
          transition={floatTransition(2.2)}
        >
          <FiZap size={18} style={{ color: "var(--accent)" }} />
        </motion.div>
      </div>
    </div>
  );
}

/* ---------------------------------- 4. Advanced Automation ---------------------------------- */

const FLOW_STEPS = [
  { label: "New save", icon: FiLayers },
  { label: "Summarize", icon: FiMessageCircle },
  { label: "Auto-tag", icon: FiTag },
  { label: "Store", icon: FiFolder },
];

function AutomationVisual() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % FLOW_STEPS.length), 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative w-full rounded-2xl border overflow-hidden flex flex-col items-center justify-center gap-1.5"
      style={{ background: "var(--bg)", borderColor: "var(--border)", height: 180, padding: "16px 22px" }}
    >
      {FLOW_STEPS.map((step, i) => (
        <div key={step.label} className="flex flex-col items-center">
          <motion.div
            className="flex items-center gap-2 rounded-lg border bg-white w-full"
            style={{ padding: "6px 12px", minWidth: 132, borderColor: active === i ? "var(--accent)" : "var(--border)", boxShadow: "var(--shadow-sm)" }}
            animate={{ scale: active === i ? 1.04 : 1 }}
            transition={{ duration: 0.3, ease: EASE_SMOOTH }}
          >
            <div
              className="flex items-center justify-center rounded-md flex-shrink-0"
              style={{ width: 20, height: 20, background: active === i ? "var(--primary)" : "var(--accent-light)" }}
            >
              <step.icon size={10} style={{ color: active === i ? "var(--accent)" : "var(--primary)" }} />
            </div>
            <span className="text-[11px] font-semibold" style={{ color: "var(--primary)" }}>
              {step.label}
            </span>
            {active === i && <FiCheckCircle size={12} style={{ color: "var(--accent)", marginLeft: "auto" }} />}
          </motion.div>
          {i < FLOW_STEPS.length - 1 && (
            <div style={{ width: 1, height: 10, borderLeft: "1.5px dashed var(--border-strong)" }} />
          )}
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------- 5. Private & Secure ---------------------------------- */

const LOCK_NODES = [
  { angle: -90 },
  { angle: 30 },
  { angle: 150 },
];

function SecurityVisual() {
  const CENTER = 78;
  const RADIUS = 58;

  return (
    <div
      className="relative w-full rounded-2xl border overflow-hidden flex items-center justify-center"
      style={{ background: "var(--bg)", borderColor: "var(--border)", height: 180 }}
    >
      {/* faint facet backdrop */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--border) 0, var(--border) 1px, transparent 1px, transparent 18px), repeating-linear-gradient(-45deg, var(--border) 0, var(--border) 1px, transparent 1px, transparent 18px)",
        }}
      />

      <div className="relative" style={{ width: CENTER * 2, height: CENTER * 2 }}>
        {[0, 1].map((i) => (
          <motion.span
            key={i}
            className="absolute rounded-full border"
            style={{
              borderColor: "var(--accent)",
              width: 60,
              height: 60,
              left: CENTER,
              top: CENTER,
              transform: "translate(-50%, -50%)",
            }}
            animate={{ scale: [1, 1.7, 1.7], opacity: [0.5, 0, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: i * 1.4 }}
          />
        ))}

        {LOCK_NODES.map((n, i) => {
          const pos = spokePos(CENTER, RADIUS, n.angle);
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{ width: 8, height: 8, left: pos.x, top: pos.y, transform: "translate(-50%, -50%)", background: "var(--accent)" }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={floatTransition(2.4, i * 0.4)}
            />
          );
        })}

        <motion.div
          className="absolute flex items-center justify-center rounded-2xl"
          style={{ width: 56, height: 56, left: CENTER, top: CENTER, transform: "translate(-50%, -50%)", background: "var(--primary)" }}
          animate={{ y: [-2, 2, -2] }}
          transition={floatTransition(3.2)}
        >
          <FiShield size={22} style={{ color: "var(--accent)" }} />
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
    body: "Connect every AI chat, note, and workspace you use. Save any conversation in a single click and keep the source close at hand.",
    span: "md:col-span-3",
  },
  {
    visual: <DashboardVisual />,
    title: "Smart Dashboards",
    body: "Track how your knowledge base grows with live stats, tag breakdowns, and collection trends — all in one customizable view.",
    span: "md:col-span-3",
  },
  {
    visual: <KnowledgeVisual />,
    title: "Connected Knowledge",
    body: "Every memory links to related topics automatically, so ideas stay discoverable instead of scattered across saves.",
    span: "md:col-span-2",
  },
  {
    visual: <AutomationVisual />,
    title: "Advanced Automation",
    body: "New saves are summarized, tagged, and filed the moment they land — zero manual sorting required.",
    span: "md:col-span-2",
  },
  {
    visual: <SecurityVisual />,
    title: "Private & Secure",
    body: "Every memory is encrypted end-to-end, aggregated safely from every source you connect.",
    span: "md:col-span-2",
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--bg-outer)", paddingTop: 88, paddingBottom: 104 }}
      id="features"
      aria-label="Features"
    >
      {/* Ambient radial */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(216,195,165,0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 85% 100%, rgba(216,195,165,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mb-14 md:mb-16 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE_SMOOTH }}
        >
          <span
            className="inline-flex items-center gap-2 uppercase font-semibold"
            style={{ fontSize: 10.5, letterSpacing: "0.22em", color: "var(--accent)", fontFamily: "var(--font-body)", marginBottom: 24 }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
            Everything you need
          </span>
          <h2
            className="font-bold leading-[1.07]"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(36px, 5vw, 58px)",
              color: "#FAF8F4",
              letterSpacing: "-0.03em",
              marginBottom: 26,
            }}
          >
            Your knowledge,{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, var(--accent), #F0DFC4, var(--accent))",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                display: "inline-block",
                animation: "featuresGradientShift 6s ease-in-out infinite",
              }}
            >
              amplified
            </span>
          </h2>
          <p
            className="leading-relaxed mx-auto"
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(14.5px, 1.5vw, 17px)", color: "rgba(250,248,244,0.5)", maxWidth: 440 }}
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
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_SMOOTH }}
            >
              <motion.div
                className="relative flex flex-col overflow-hidden bg-white rounded-[22px] p-6 md:p-7 h-full"
                style={{ border: "1px solid var(--border)" }}
                whileHover={{ y: -4, borderColor: "var(--border-strong)", boxShadow: "0 14px 30px rgba(31,36,33,0.10)" }}
                transition={{ duration: 0.25, ease: EASE_SMOOTH }}
              >
                <div className="mb-5 flex justify-center w-full">{card.visual}</div>
                <div className="text-center flex flex-col items-center w-full">
                  <h3
                    className="font-bold mb-2 leading-snug"
                    style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(16px, 1.6vw, 19px)", color: "var(--primary)" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", fontSize: "clamp(12.5px, 1vw, 14px)", color: "var(--text-secondary)" }}
                  >
                    {card.body}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes featuresGradientShift {
          0% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
          100% {
            background-position: 0% center;
          }
        }
      `}</style>
    </section>
  );
}