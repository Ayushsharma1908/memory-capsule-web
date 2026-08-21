"use client";

import { motion, useReducedMotion } from "framer-motion";

// Each concept node in the graph
const NODES = [
  // Left cluster
  { id: "react",    label: "React",         x: 0.10, y: 0.15 },
  { id: "hooks",    label: "Hooks",         x: 0.18, y: 0.42 },

  // Top cluster  
  { id: "java",     label: "Java",          x: 0.50, y: 0.07 },
  { id: "dsa",      label: "DSA",           x: 0.68, y: 0.22 },

  // Right cluster
  { id: "nodejs",   label: "Node.js",       x: 0.85, y: 0.12 },
  { id: "jwt",      label: "JWT Auth",      x: 0.88, y: 0.42 },

  // Bottom clusters
  { id: "sysdesign",label: "System Design", x: 0.60, y: 0.82 },
  { id: "caching",  label: "Caching",       x: 0.80, y: 0.72 },
  { id: "binary",   label: "Binary Search", x: 0.22, y: 0.78 },
  { id: "algos",    label: "Algorithms",    x: 0.40, y: 0.88 },
];

// Hub is at the center
const HUB = { x: 0.50, y: 0.50 };

// Explicit edges (from node id → hub or another node)
const EDGES = [
  { from: "react",    to: "hooks" },
  { from: "hooks",    to: "hub" },
  { from: "java",     to: "dsa" },
  { from: "dsa",      to: "hub" },
  { from: "nodejs",   to: "jwt" },
  { from: "jwt",      to: "hub" },
  { from: "sysdesign",to: "caching" },
  { from: "caching",  to: "hub" },
  { from: "binary",   to: "hub" },
  { from: "algos",    to: "hub" },
];

function nodePos(id: string, W: number, H: number) {
  if (id === "hub") return { x: HUB.x * W, y: HUB.y * H };
  const n = NODES.find((n) => n.id === id);
  if (!n) return { x: HUB.x * W, y: HUB.y * H };
  return { x: n.x * W, y: n.y * H };
}

const W = 440;
const H = 230;

export default function KnowledgeGraphVisual() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden" style={{ minHeight: 230 }}>
      {/* Full-bleed SVG canvas */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${W} ${H}`}
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Edge lines */}
        {EDGES.map((edge, i) => {
          const from = nodePos(edge.from, W, H);
          const to = nodePos(edge.to, W, H);
          return (
            <line
              key={i}
              x1={from.x} y1={from.y}
              x2={to.x}   y2={to.y}
              stroke="var(--border-strong)"
              strokeWidth="1"
              strokeDasharray="3 4"
              opacity="0.5"
            />
          );
        })}

        {/* Animated flow pulses along edges */}
        {!reducedMotion && EDGES.map((edge, i) => {
          const from = nodePos(edge.from, W, H);
          const to = nodePos(edge.to, W, H);
          return (
            <motion.circle
              key={`pulse-${i}`}
              r="2.5"
              fill="var(--accent)"
              animate={{
                cx: [from.x, to.x],
                cy: [from.y, to.y],
                opacity: [0, 0.85, 0],
              }}
              transition={{
                duration: 2.5 + (i % 4) * 0.5,
                delay: i * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>

      {/* Concept node pills */}
      {NODES.map((node, i) => (
        <motion.div
          key={node.id}
          className="absolute flex items-center rounded-full"
          style={{
            left: `${node.x * 100}%`,
            top: `${node.y * 100}%`,
            transform: "translate(-50%, -50%)",
            background: "white",
            border: "1px solid var(--border)",
            padding: "3px 10px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            zIndex: 10,
          }}
          animate={reducedMotion ? {} : { y: [0, -3, 0] }}
          transition={{
            duration: 3.5 + (i % 3) * 0.6,
            delay: i * 0.18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span
            className="text-[10.5px] font-semibold whitespace-nowrap"
            style={{ color: "var(--primary)", fontFamily: "var(--font-body)" }}
          >
            {node.label}
          </span>
        </motion.div>
      ))}

      {/* Central hub */}
      <motion.div
        className="absolute z-20 flex items-center gap-2.5 rounded-2xl"
        style={{
          left: `${HUB.x * 100}%`,
          top: `${HUB.y * 100}%`,
          transform: "translate(-50%, -50%)",
          background: "var(--primary)",
          border: "1.5px solid var(--accent)",
          padding: "8px 16px 8px 12px",
        }}
        animate={reducedMotion ? {} : {
          boxShadow: [
            "0 4px 16px rgba(31,36,33,0.12)",
            "0 6px 28px rgba(216,195,165,0.4)",
            "0 4px 16px rgba(31,36,33,0.12)",
          ],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Brain-like memory icon */}
        <div
          className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "rgba(216,195,165,0.2)" }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z" />
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z" />
          </svg>
        </div>

        <div className="flex flex-col">
          <span
            className="text-[12px] font-bold tracking-tight"
            style={{ color: "#FAF8F4", fontFamily: "var(--font-heading)", lineHeight: 1.2 }}
          >
            Your Knowledge
          </span>
          <span
            className="text-[9.5px] font-medium"
            style={{ color: "var(--accent)", lineHeight: 1.3 }}
          >
            Growing every day
          </span>
        </div>
      </motion.div>
    </div>
  );
}
