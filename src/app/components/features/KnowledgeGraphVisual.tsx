"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FiCpu, FiDatabase, FiCode, FiLayers, FiZap } from "react-icons/fi";

export default function KnowledgeGraphVisual() {
  const reducedMotion = useReducedMotion();

  // Nodes positioned neatly in an editorial layout around central "Your Knowledge" hub
  const nodes = [
    { id: "react", label: "React", icon: FiCode, x: 70, y: 35, connected: "hooks" },
    { id: "hooks", label: "Hooks", icon: FiLayers, x: 140, y: 22, connected: "hub" },

    { id: "java", label: "Java", icon: FiCode, x: 260, y: 40, connected: "dsa" },
    { id: "dsa", label: "DSA", icon: FiDatabase, x: 330, y: 70, connected: "binary" },
    { id: "binary", label: "Binary Search", icon: FiZap, x: 370, y: 135, connected: "hub" },

    { id: "nodejs", label: "Node.js", icon: FiCode, x: 75, y: 145, connected: "jwt" },
    { id: "jwt", label: "JWT Auth", icon: FiLayers, x: 145, y: 165, connected: "hub" },

    { id: "sysdesign", label: "System Design", icon: FiDatabase, x: 265, y: 165, connected: "caching" },
    { id: "caching", label: "Caching", icon: FiZap, x: 335, y: 195, connected: "hub" },
  ];

  const lines = [
    // React path
    { x1: 70, y1: 35, x2: 140, y2: 22 },
    { x1: 140, y1: 22, x2: 215, y2: 105 },

    // Java path
    { x1: 260, y1: 40, x2: 330, y2: 70 },
    { x1: 330, y1: 70, x2: 370, y2: 135 },
    { x1: 370, y1: 135, x2: 215, y2: 105 },

    // Node.js path
    { x1: 75, y1: 145, x2: 145, y2: 165 },
    { x1: 145, y1: 165, x2: 215, y2: 105 },

    // System design path
    { x1: 265, y1: 165, x2: 335, y2: 195 },
    { x1: 335, y1: 195, x2: 215, y2: 105 },
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-2 select-none overflow-hidden min-h-[220px]">
      <div className="relative w-full max-w-[450px] h-[215px] flex items-center justify-center">
        {/* SVG Connecting Lines & Pulsing Nodes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 430 215" fill="none">
          {lines.map((line, idx) => (
            <line
              key={idx}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="var(--border-strong)"
              strokeWidth="1.2"
              strokeDasharray="3 3"
              opacity="0.55"
            />
          ))}

          {/* Animated signal pulses flowing toward hub */}
          {!reducedMotion &&
            lines.map((line, idx) => (
              <motion.circle
                key={`pulse-${idx}`}
                r="2.5"
                fill="var(--accent)"
                animate={{
                  cx: [line.x1, line.x2],
                  cy: [line.y1, line.y2],
                  opacity: [0, 0.9, 0],
                }}
                transition={{
                  duration: 3 + (idx % 3) * 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.4,
                }}
              />
            ))}
        </svg>

        {/* Outer Concept Nodes */}
        {nodes.map((node) => {
          const IconComp = node.icon;
          return (
            <motion.div
              key={node.id}
              className="absolute flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[var(--border)] shadow-2xs z-10"
              style={{
                left: node.x,
                top: node.y,
                transform: "translate(-50%, -50%)",
              }}
              animate={
                reducedMotion
                  ? {}
                  : {
                      y: [0, -3, 0],
                    }
              }
              transition={{
                duration: 4 + (node.x % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: (node.y % 2) * 0.5,
              }}
            >
              <IconComp className="w-3 h-3 text-[var(--accent-dark,#8C7A5E)]" />
              <span className="text-[10px] font-semibold text-[var(--primary)] whitespace-nowrap">
                {node.label}
              </span>
            </motion.div>
          );
        })}

        {/* Central Hub Node — "Your Knowledge" */}
        <motion.div
          className="absolute z-20 flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-[var(--primary)] text-white border border-[var(--accent)] shadow-lg"
          style={{
            left: 215,
            top: 105,
            transform: "translate(-50%, -50%)",
          }}
          animate={
            reducedMotion
              ? {}
              : {
                  boxShadow: [
                    "0 4px 20px rgba(31, 36, 33, 0.15)",
                    "0 8px 28px rgba(216, 195, 165, 0.35)",
                    "0 4px 20px rgba(31, 36, 33, 0.15)",
                  ],
                }
          }
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-6 rounded-lg bg-[rgba(216,195,165,0.2)] flex items-center justify-center">
            <FiCpu className="w-3.5 h-3.5 text-[var(--accent)]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold tracking-tight font-heading text-[#FAF8F4]">
              Your Knowledge
            </span>
            <span className="text-[9px] text-[var(--accent)] font-medium">
              Ever-growing graph
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
