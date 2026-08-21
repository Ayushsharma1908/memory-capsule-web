"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiCpu, FiCheckCircle, FiFileText } from "react-icons/fi";

export default function SummarizationVisual() {
  const reducedMotion = useReducedMotion();
  const [stage, setStage] = useState<"raw" | "processing" | "summary">(() =>
    reducedMotion ? "summary" : "raw"
  );

  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      setStage((prev) => {
        if (prev === "raw") return "processing";
        if (prev === "processing") return "summary";
        return "raw";
      });
    }, 2800);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-3 select-none">
      <div className="w-full max-w-[340px] relative min-h-[175px] flex items-center justify-center">
        {/* Stage 1: Raw Conversation */}
        <motion.div
          className="absolute inset-0 bg-white border border-[var(--border)] rounded-xl p-3.5 shadow-2xs flex flex-col justify-between"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{
            opacity: stage === "raw" ? 1 : 0,
            scale: stage === "raw" ? 1 : 0.96,
            y: stage === "raw" ? 0 : -8,
            pointerEvents: stage === "raw" ? "auto" : "none",
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-2">
            <div className="flex items-center gap-1.5">
              <FiFileText className="w-3.5 h-3.5 text-[var(--text-tertiary)]" />
              <span className="text-[10.5px] font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                Raw Conversation
              </span>
            </div>
            <span className="text-[9.5px] text-[var(--text-tertiary)]">chat.openai.com</span>
          </div>

          <div className="space-y-1.5 text-[11px] text-[var(--text-secondary)] font-mono leading-tight">
            <p className="line-clamp-1 opacity-90">&gt; &quot;How does binary search work in Java?&quot;</p>
            <p className="line-clamp-1 text-[var(--primary)] font-sans font-medium">
              &quot;Time complexity is O(log n) with pointers...&quot;
            </p>
            <p className="line-clamp-1 opacity-70">&gt; &quot;Implementation with low &amp; high...&quot;</p>
            <p className="line-clamp-1 opacity-60">&gt; &quot;Handling edge cases &amp; mid overflow...&quot;</p>
          </div>

          <div className="mt-2.5 pt-2 border-t border-[var(--border)] flex items-center justify-between text-[10px] text-[var(--text-tertiary)]">
            <span>4 exchanges</span>
            <span className="font-medium text-[var(--primary)]">Unprocessed</span>
          </div>
        </motion.div>

        {/* Stage 2: AI Processing Pulse Indicator */}
        <motion.div
          className="absolute inset-0 bg-[#FAF7F2] border border-[var(--accent)] rounded-xl p-4 shadow-sm flex flex-col items-center justify-center gap-2.5 text-center"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{
            opacity: stage === "processing" ? 1 : 0,
            scale: stage === "processing" ? 1 : 0.96,
            pointerEvents: stage === "processing" ? "auto" : "none",
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="w-9 h-9 rounded-full bg-[var(--primary)] text-[var(--accent)] flex items-center justify-center shadow-md"
            animate={{ scale: [1, 1.12, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiCpu className="w-5 h-5" />
          </motion.div>
          <div className="flex flex-col items-center">
            <span className="text-[12px] font-semibold text-[var(--primary)] font-heading">
              Extracting Core Insights...
            </span>
            <span className="text-[10px] text-[var(--text-secondary)] mt-0.5">
              Converting 480 lines into structured knowledge
            </span>
          </div>
        </motion.div>

        {/* Stage 3: Structured Memory Card */}
        <motion.div
          className="absolute inset-0 bg-white border border-[var(--border-strong)] rounded-xl p-3.5 shadow-md flex flex-col justify-between"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{
            opacity: stage === "summary" ? 1 : 0,
            scale: stage === "summary" ? 1 : 0.96,
            y: stage === "summary" ? 0 : 8,
            pointerEvents: stage === "summary" ? "auto" : "none",
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent-dark,#8C7A5E)]">
                Structured Memory
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 font-medium px-2 py-0.5 rounded-full border border-emerald-200">
              <FiCheckCircle className="w-3 h-3" /> Ready
            </span>
          </div>

          <div>
            <h4 className="text-[13px] font-bold text-[var(--primary)] font-heading tracking-tight leading-snug">
              Binary Search
            </h4>
            <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed mt-1 line-clamp-2">
              Binary search finds an element in a sorted collection by repeatedly dividing the search space in half.
            </p>
          </div>

          <div className="flex items-center gap-1.5 pt-2 border-t border-[var(--border)] mt-2">
            <span className="text-[9.5px] font-medium px-2 py-0.5 rounded-md bg-[#FAF8F4] border border-[var(--border-strong)] text-[var(--primary)]">
              DSA
            </span>
            <span className="text-[9.5px] font-medium px-2 py-0.5 rounded-md bg-[#FAF8F4] border border-[var(--border-strong)] text-[var(--primary)]">
              Algorithms
            </span>
            <span className="text-[9.5px] font-medium px-2 py-0.5 rounded-md bg-[#FAF8F4] border border-[var(--border-strong)] text-[var(--primary)]">
              Java
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
