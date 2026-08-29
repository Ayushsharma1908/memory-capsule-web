"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiCheckCircle, FiHash } from "react-icons/fi";
import { ChatGPTIcon } from "./BrandIcons";

type Stage = "raw" | "processing" | "summary";

const STAGE_DURATION = 2600;

export default function SummarizationVisual() {
  const reducedMotion = useReducedMotion();
  const [stage, setStage] = useState<Stage>(() => (reducedMotion ? "summary" : "raw"));
  const [dots, setDots] = useState(1);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      setStage((prev) => {
        if (prev === "raw") return "processing";
        if (prev === "processing") return "summary";
        return "raw";
      });
    }, STAGE_DURATION);
    return () => clearInterval(id);
  }, [reducedMotion]);

  useEffect(() => {
    if (stage !== "processing") return;
    const id = setInterval(() => setDots((d) => (d % 3) + 1), 500);
    return () => clearInterval(id);
  }, [stage]);

  const rawLines = [
    { user: true, text: "How does binary search work in Java?" },
    { user: false, text: "Binary search halves the sorted array each step — O(log n) time." },
    { user: true, text: "What about handling mid-point overflow?" },
    { user: false, text: "Use mid = low + (high - low) / 2 to avoid int overflow." },
  ];

  const tags = ["Binary Search", "DSA", "Java", "Algorithms"];

  const cardVariants = {
    hidden: { opacity: 0, y: 8, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -8, scale: 0.98 },
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center px-2 py-1 select-none overflow-hidden">
      <div className="w-full max-w-[320px]" style={{ minHeight: 155 }}>
        <AnimatePresence mode="wait">

          {stage === "raw" && (
            <motion.div
              key="raw"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-xl border overflow-hidden shadow-sm"
              style={{ background: "white", borderColor: "var(--border)" }}
            >
              <div
                className="flex items-center justify-between px-2.5 py-1.5 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-1.5">
                  <ChatGPTIcon size={14} />
                  <span
                    className="text-[10.5px] font-semibold tracking-wide"
                    style={{ color: "var(--primary)" }}
                  >
                    ChatGPT Conversation
                  </span>
                </div>
                <span className="text-[9.5px]" style={{ color: "var(--text-tertiary)" }}>
                  4 messages
                </span>
              </div>

              <div className="px-2.5 py-1.5 flex flex-col gap-1">
                {rawLines.map((line, i) => (
                  <div key={i} className={`flex ${line.user ? "justify-end" : "justify-start"}`}>
                    <div
                      className="text-[9.5px] leading-[1.35] px-2 py-1 rounded-lg max-w-[90%]"
                      style={{
                        background: line.user ? "var(--primary)" : "#F3F0EB",
                        color: line.user ? "#FAF8F4" : "var(--primary)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {line.text}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {stage === "processing" && (
            <motion.div
              key="processing"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-xl border flex flex-col items-center justify-center gap-2 py-5 shadow-sm"
              style={{ background: "#FAF7F2", borderColor: "var(--accent)" }}
            >
              <div className="relative flex items-center justify-center" style={{ width: 36, height: 36 }}>
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ background: "rgba(216,195,165,0.3)" }}
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                />
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shadow-md z-10"
                  style={{ background: "var(--primary)" }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L12 6M12 18L12 22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12L6 12M18 12L22 12M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" />
                  </svg>
                </div>
              </div>

              <div className="text-center px-3">
                <p
                  className="text-[11.5px] font-semibold"
                  style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
                >
                  Summarizing{".".repeat(dots)}
                </p>
                <p className="text-[9.5px] mt-0.5" style={{ color: "var(--text-secondary)" }}>
                  Extracting key insights from the conversation
                </p>
              </div>
            </motion.div>
          )}

          {stage === "summary" && (
            <motion.div
              key="summary"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-xl border overflow-hidden shadow-sm"
              style={{ background: "white", borderColor: "var(--border-strong)" }}
            >
              <div
                className="flex items-center justify-between px-2.5 py-1.5 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e" }} />
                  <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "#16a34a" }}>
                    Memory Saved
                  </span>
                </div>
                <span
                  className="inline-flex items-center gap-1 text-[8.5px] font-medium px-1.5 py-0.2 rounded-full"
                  style={{ background: "#dcfce7", color: "#15803d", border: "1px solid #bbf7d0" }}
                >
                  <FiCheckCircle size={9} /> Ready
                </span>
              </div>

              <div className="px-2.5 py-1.5 flex flex-col gap-1.5">
                <div>
                  <h4
                    className="text-[12px] font-bold tracking-tight leading-snug"
                    style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
                  >
                    Binary Search in Java
                  </h4>
                  <p className="text-[9.5px] leading-relaxed mt-0.5" style={{ color: "var(--text-secondary)" }}>
                    Binary search halves search space each step. Use{" "}
                    <code className="font-mono text-[9px] px-1 py-0.2 rounded" style={{ background: "#F3F0EB" }}>
                      mid = low + (high - low) / 2
                    </code>{" "}
                    to avoid overflow.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-1.5 border-t" style={{ borderColor: "var(--border)" }}>
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-[8.5px] font-medium px-1.5 py-0.2 rounded"
                      style={{
                        background: "#FAF8F4",
                        color: "var(--primary)",
                        border: "1px solid var(--border-strong)",
                      }}
                    >
                      <FiHash size={7.5} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
