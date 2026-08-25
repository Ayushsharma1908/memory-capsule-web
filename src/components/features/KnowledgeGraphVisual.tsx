"use client";

import { motion, useReducedMotion } from "framer-motion";

const NODES = [
  { id: "react", label: "React", x: 0.15, y: 0.18 },
  { id: "hooks", label: "Hooks", x: 0.12, y: 0.48 },
  { id: "binary", label: "Binary Search", x: 0.20, y: 0.80 },
  { id: "algos", label: "Algorithms", x: 0.38, y: 0.86 },
  { id: "java", label: "Java", x: 0.35, y: 0.14 },
  { id: "dsa", label: "DSA", x: 0.65, y: 0.14 },
  { id: "nodejs", label: "Node.js", x: 0.85, y: 0.18 },
  { id: "jwt", label: "JWT Auth", x: 0.88, y: 0.48 },
  { id: "caching", label: "Caching", x: 0.80, y: 0.80 },
  { id: "sysdesign", label: "System Design", x: 0.62, y: 0.86 },
];

const HUB = { x: 0.50, y: 0.50 };

const EDGES = NODES.map((node) => ({
  from: node.id,
  to: "hub",
}));

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
    <div
      className="relative w-full h-full flex items-center justify-center select-none overflow-hidden"
      style={{ minHeight: 230 }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${W} ${H}`}
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {EDGES.map((edge, i) => {
          const from = nodePos(edge.from, W, H);
          const to = nodePos(edge.to, W, H);
          return (
            <line
              key={i}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="var(--border-strong)"
              strokeWidth="1.2"
              strokeDasharray="3.5 3.5"
              opacity="0.55"
            />
          );
        })}

        {!reducedMotion &&
          EDGES.map((edge, i) => {
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
                  opacity: [0, 0.9, 0],
                }}
                transition={{
                  duration: 2.2 + (i % 3) * 0.4,
                  delay: i * 0.25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}
      </svg>

      {NODES.map((node, i) => (
        <motion.div
          key={node.id}
          className="absolute flex items-center rounded-full"
          style={{
            left: `${node.x * 100}%`,
            top: `${node.y * 100}%`,
            transform: "translate(-50%, -50%)",
            background: "white",
            border: "1px solid var(--border-strong)",
            padding: "3.5px 11px",
            boxShadow: "0 1.5px 6px rgba(0,0,0,0.06)",
            zIndex: 10,
          }}
          animate={reducedMotion ? {} : { y: [0, -3, 0] }}
          transition={{
            duration: 3.2 + (i % 3) * 0.5,
            delay: i * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span
            className="text-[10px] font-semibold whitespace-nowrap"
            style={{ color: "var(--primary)", fontFamily: "var(--font-body)" }}
          >
            {node.label}
          </span>
        </motion.div>
      ))}

      <motion.div
        className="absolute z-20 flex items-center gap-2.5 rounded-2xl"
        style={{
          left: `${HUB.x * 100}%`,
          top: `${HUB.y * 100}%`,
          transform: "translate(-50%, -50%)",
          background: "var(--primary)",
          border: "1.5px solid var(--accent)",
          padding: "7.5px 15px 7.5px 11px",
        }}
        animate={
          reducedMotion
            ? {}
            : {
                boxShadow: [
                  "0 4px 16px rgba(31,36,33,0.12)",
                  "0 6px 28px rgba(216,195,165,0.45)",
                  "0 4px 16px rgba(31,36,33,0.12)",
                ],
              }
        }
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "rgba(216,195,165,0.22)" }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z" />
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0-.34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z" />
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
            Brain Hub
          </span>
        </div>
      </motion.div>
    </div>
  );
}
