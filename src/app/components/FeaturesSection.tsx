"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiMessageCircle,
  FiCode,
  FiBookOpen,
  FiTarget,
  FiZap,
  FiTag,
  FiFolder,
  FiShield,
  FiLayers,
  FiCheckCircle,
  FiTrendingUp,
  FiSearch,
} from "react-icons/fi";

const EASE_SMOOTH = [0.4, 0, 0.2, 1] as const;

function floatTransition(duration: number, delay = 0, reducedMotion: boolean | null = false) {
  if (reducedMotion) return { duration: 0 };
  return { duration, repeat: Infinity, ease: "easeInOut" as const, delay };
}

/* ============================================================
   VISUAL 1: UNIVERSAL CAPTURE
   ============================================================ */
const SOURCE_ICONS = [
  { icon: FiMessageCircle, name: "ChatGPT" },
  { icon: FiCode, name: "VS Code" },
  { icon: FiBookOpen, name: "Articles" },
  { icon: FiTarget, name: "Notes" },
];

function CaptureVisual() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-[240px]">
        {/* Source Icons Floating Row */}
        <div className="flex items-center justify-between w-full gap-2">
          {SOURCE_ICONS.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-1"
              animate={reducedMotion ? {} : { y: [-2, 2, -2] }}
              transition={floatTransition(3.2 + i * 0.35, i * 0.2, reducedMotion)}
            >
              <div
                className="flex items-center justify-center rounded-xl bg-white border shadow-xs"
                style={{
                  width: 36,
                  height: 36,
                  borderColor: "var(--border)",
                }}
              >
                <item.icon size={15} style={{ color: "var(--text)" }} />
              </div>
              <span
                className="text-[9px] font-medium tracking-tight"
                style={{ color: "var(--text-tertiary)" }}
              >
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Animated Connector Lines */}
        <div className="relative w-full flex justify-center h-8 my-1">
          <svg className="w-full h-full" viewBox="0 0 200 32" fill="none">
            <path
              d="M 25 2 C 25 18, 95 14, 98 30"
              stroke="var(--border-strong)"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <path
              d="M 75 2 C 75 16, 96 20, 99 30"
              stroke="var(--border-strong)"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <path
              d="M 125 2 C 125 16, 104 20, 101 30"
              stroke="var(--border-strong)"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <path
              d="M 175 2 C 175 18, 105 14, 102 30"
              stroke="var(--border-strong)"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        {/* Destination Capsule */}
        <motion.div
          className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border relative z-10"
          style={{
            borderColor: "var(--accent)",
            boxShadow: "0 4px 16px rgba(31, 36, 33, 0.06), 0 0 0 1px rgba(216, 195, 165, 0.2)",
          }}
          animate={
            reducedMotion
              ? {}
              : {
                  boxShadow: [
                    "0 4px 14px rgba(31, 36, 33, 0.05)",
                    "0 4px 20px rgba(216, 195, 165, 0.35)",
                    "0 4px 14px rgba(31, 36, 33, 0.05)",
                  ],
                }
          }
          transition={floatTransition(3.5, 0, reducedMotion)}
        >
          <div
            className="w-6 h-6 rounded-lg flex items-center justify-center"
            style={{ background: "var(--primary)" }}
          >
            <FiZap size={13} style={{ color: "var(--accent)" }} />
          </div>
          <span
            className="text-[11.5px] font-semibold tracking-tight"
            style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
          >
            Memory Capsule
          </span>
        </motion.div>
      </div>
    </div>
  );
}

/* ============================================================
   VISUAL 2: SMART DASHBOARDS
   ============================================================ */
function DashboardChart() {
  const reducedMotion = useReducedMotion();
  const path = "M 0,26 Q 30,28 50,18 T 100,12 T 150,6 T 200,2";

  return (
    <div className="relative w-full mt-2.5">
      <svg viewBox="0 0 200 32" className="w-full h-8 overflow-visible">
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 0,26 Q 30,28 50,18 T 100,12 T 150,6 T 200,2 L 200,32 L 0,32 Z"
          fill="url(#chartGrad)"
        />
        <motion.path
          d={path}
          fill="none"
          stroke="var(--accent)"
          strokeWidth={2}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE_SMOOTH }}
        />
        <circle cx={200} cy={2} r={3} fill="var(--primary)" />
      </svg>
    </div>
  );
}

function DashboardVisual() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center">
      <div className="w-full max-w-[270px] flex flex-col gap-2.5">
        {/* Main Stat Card */}
        <div
          className="bg-white border rounded-xl p-3.5 flex flex-col shadow-xs"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex items-center justify-between">
            <span
              className="text-[9.5px] font-semibold tracking-[0.12em] uppercase"
              style={{ color: "var(--text-tertiary)" }}
            >
              Memories Saved
            </span>
            <span
              className="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded-full"
              style={{ background: "rgba(34, 197, 94, 0.1)", color: "#16a34a" }}
            >
              <FiTrendingUp size={10} />
              +24%
            </span>
          </div>

          <div className="flex items-baseline gap-2 mt-1">
            <span
              className="font-bold tracking-tight"
              style={{
                fontSize: 24,
                color: "var(--primary)",
                fontFamily: "var(--font-heading)",
                lineHeight: 1.1,
              }}
            >
              2,847
            </span>
          </div>

          <DashboardChart />
        </div>

        {/* Sub Stats Grid */}
        <div className="grid grid-cols-2 gap-2.5">
          <div
            className="bg-white border rounded-lg px-3 py-2 flex items-center justify-between shadow-2xs"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex flex-col">
              <span className="text-[8.5px] font-medium uppercase tracking-wider text-[#A3A3A3]">
                Tags
              </span>
              <span
                className="font-bold text-[15px]"
                style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
              >
                48
              </span>
            </div>
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center"
              style={{ background: "var(--bg)" }}
            >
              <FiTag size={11} style={{ color: "var(--text-secondary)" }} />
            </div>
          </div>

          <div
            className="bg-white border rounded-lg px-3 py-2 flex items-center justify-between shadow-2xs"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex flex-col">
              <span className="text-[8.5px] font-medium uppercase tracking-wider text-[#A3A3A3]">
                Collections
              </span>
              <span
                className="font-bold text-[15px]"
                style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
              >
                12
              </span>
            </div>
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center"
              style={{ background: "var(--bg)" }}
            >
              <FiFolder size={11} style={{ color: "var(--text-secondary)" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   VISUAL 3: CONNECTED KNOWLEDGE
   ============================================================ */
function spokePos(center: number, radius: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: center + radius * Math.cos(rad), y: center + radius * Math.sin(rad) };
}

const TOPIC_NODES = [
  { icon: FiCode, angle: -90, label: "Code" },
  { icon: FiMessageCircle, angle: -18, label: "Chats" },
  { icon: FiBookOpen, angle: 54, label: "Notes" },
  { icon: FiTarget, angle: 126, label: "Ideas" },
  { icon: FiSearch, angle: 198, label: "Links" },
];

function KnowledgeVisual() {
  const reducedMotion = useReducedMotion();
  const CENTER = 70;
  const RADIUS = 48;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
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
              opacity: 0.35,
            }}
          />
        ))}

        {/* Orbit Ring */}
        <div
          className="absolute rounded-full border border-dashed"
          style={{
            width: RADIUS * 2,
            height: RADIUS * 2,
            left: CENTER,
            top: CENTER,
            transform: "translate(-50%, -50%)",
            borderColor: "rgba(216, 195, 165, 0.4)",
          }}
        />

        {/* Surrounding Nodes */}
        {TOPIC_NODES.map((n, i) => {
          const pos = spokePos(CENTER, RADIUS, n.angle);
          return (
            <motion.div
              key={`node-${i}`}
              className="absolute flex items-center justify-center rounded-full border bg-white shadow-xs"
              style={{
                width: 28,
                height: 28,
                left: pos.x,
                top: pos.y,
                transform: "translate(-50%, -50%)",
                borderColor: "var(--border)",
              }}
              animate={reducedMotion ? {} : { scale: [1, 1.06, 1] }}
              transition={floatTransition(3.6 + i * 0.4, i * 0.25, reducedMotion)}
            >
              <n.icon size={12} style={{ color: "var(--text-secondary)" }} />
            </motion.div>
          );
        })}

        {/* Central Hub Node */}
        <motion.div
          className="absolute flex items-center justify-center rounded-full border bg-white shadow-sm"
          style={{
            width: 42,
            height: 42,
            left: CENTER,
            top: CENTER,
            transform: "translate(-50%, -50%)",
            borderColor: "var(--accent)",
          }}
          animate={reducedMotion ? {} : { scale: [1, 1.04, 1] }}
          transition={floatTransition(2.8, 0, reducedMotion)}
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ background: "var(--primary)" }}
          >
            <FiZap size={14} style={{ color: "var(--accent)" }} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ============================================================
   VISUAL 4: ADVANCED AUTOMATION
   ============================================================ */
const FLOW_STEPS = [
  { label: "Capture Stream", icon: FiLayers },
  { label: "AI Summary", icon: FiMessageCircle },
  { label: "Smart Categorization", icon: FiTag },
  { label: "Instant Recall", icon: FiCheckCircle },
];

function AutomationVisual() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % FLOW_STEPS.length), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-[190px] gap-1.5">
        {FLOW_STEPS.map((step, i) => {
          const isActive = active === i;
          return (
            <div key={step.label} className="w-full flex flex-col items-center">
              <motion.div
                className="flex items-center justify-between rounded-lg border bg-white w-full px-3 py-1.5 shadow-2xs transition-all duration-300"
                style={{
                  borderColor: isActive ? "var(--accent)" : "var(--border)",
                  boxShadow: isActive
                    ? "0 2px 8px rgba(216, 195, 165, 0.3)"
                    : "0 1px 2px rgba(0,0,0,0.02)",
                  opacity: isActive ? 1 : 0.55,
                }}
                animate={{ scale: isActive ? 1.02 : 1 }}
                transition={{ duration: 0.3, ease: EASE_SMOOTH }}
              >
                <div className="flex items-center gap-2">
                  <step.icon
                    size={12}
                    style={{ color: isActive ? "var(--primary)" : "var(--text-tertiary)" }}
                  />
                  <span
                    className="text-[11.5px] font-medium tracking-tight"
                    style={{
                      color: isActive ? "var(--primary)" : "var(--text-secondary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {step.label}
                  </span>
                </div>
                {isActive && (
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ============================================================
   VISUAL 5: PRIVATE & SECURE
   ============================================================ */
const ORBIT_POINTS = [{ angle: 0 }, { angle: 120 }, { angle: 240 }];

function SecurityVisual() {
  const reducedMotion = useReducedMotion();
  const CENTER = 70;
  const RADIUS = 42;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Delicate background grid */}
      <div
        className="absolute inset-2 opacity-[0.2] rounded-xl pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--border-strong) 1px, transparent 1px), linear-gradient(90deg, var(--border-strong) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
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
            opacity: 0.35,
          }}
        />

        {/* Orbiting particles */}
        {!reducedMotion &&
          ORBIT_POINTS.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-full"
              style={{ left: 0, top: 0, transformOrigin: "center center" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: i * -4 }}
            >
              <div
                className="absolute rounded-full shadow-2xs"
                style={{
                  width: 5,
                  height: 5,
                  background: "var(--accent)",
                  left: CENTER + RADIUS,
                  top: CENTER,
                  transform: "translate(-50%, -50%)",
                }}
              />
            </motion.div>
          ))}

        {/* Central Shield Card */}
        <motion.div
          className="absolute flex items-center justify-center rounded-xl bg-white border shadow-sm"
          style={{
            width: 44,
            height: 44,
            left: CENTER,
            top: CENTER,
            transform: "translate(-50%, -50%)",
            borderColor: "var(--border)",
          }}
          animate={reducedMotion ? {} : { scale: [1, 1.03, 1] }}
          transition={floatTransition(3.8, 0, reducedMotion)}
        >
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "rgba(216, 195, 165, 0.15)" }}
          >
            <FiShield size={16} style={{ color: "var(--primary)" }} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ============================================================
   BENTO CARDS CONFIGURATION
   ============================================================ */
const CARDS = [
  {
    visual: <CaptureVisual />,
    title: "Universal Capture",
    body: "Save conversations from ChatGPT, Claude, and your favorite tools with a single click.",
    colClass: "features-col-3",
  },
  {
    visual: <DashboardVisual />,
    title: "Smart Dashboards",
    body: "Monitor your knowledge growth, tracked topics, and active collections in real time.",
    colClass: "features-col-3",
  },
  {
    visual: <KnowledgeVisual />,
    title: "Connected Knowledge",
    body: "Discover unexpected links and synthesize insights across isolated memories.",
    colClass: "features-col-2",
  },
  {
    visual: <AutomationVisual />,
    title: "Automated Processing",
    body: "Autonomous summarization and smart indexing happen silently in the background.",
    colClass: "features-col-2",
  },
  {
    visual: <SecurityVisual />,
    title: "Private & Local-First",
    body: "Your memories stay encrypted and strictly private under your complete ownership.",
    colClass: "features-col-2",
  },
];

/* ============================================================
   MAIN COMPONENT
   ============================================================ */
export default function FeaturesSection() {
  return (
    <section className="features-section" id="features" aria-label="Features">
      {/* Hairline Separator at top edge matching HowItWorks */}
      <div className="features-separator" aria-hidden="true" />

      {/* Subtle ambient radial glow for soft depth */}
      <div className="features-ambient-glow" aria-hidden="true" />

      <div className="features-container">
        {/* Section Header */}
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE_SMOOTH }}
        >
          <span className="features-eyebrow">Everything you need</span>

          <h2 className="features-title">
            Your knowledge, <span style={{ color: "var(--accent)" }}>amplified</span>
          </h2>

          <p className="features-subtitle">
            From capturing to recalling — Memory Capsule handles the entire lifecycle of your knowledge
            seamlessly.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="features-grid">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              className={card.colClass}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_SMOOTH }}
            >
              <div className="features-card">
                {/* Visual Area */}
                <div className="features-card-visual">{card.visual}</div>

                {/* Divider Line */}
                <div className="features-card-divider" aria-hidden="true" />

                {/* Text Content */}
                <div className="features-card-content">
                  <h3 className="features-card-title">{card.title}</h3>
                  <p className="features-card-desc">{card.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}