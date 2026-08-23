"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiSearch, FiArrowRight } from "react-icons/fi";
import { ChatGPTIcon, ClaudeIcon, GoogleChromeIcon } from "./BrandIcons";

const FULL_QUERY = "binary search java";

const RESULTS = [
  {
    title: "Binary Search — Java",
    sub: "Saved from ChatGPT",
    renderIcon: (size: number) => <ChatGPTIcon size={size} showBg />,
    tag: "Algorithms",
  },
  {
    title: "System Architecture Notes",
    sub: "Saved from Claude",
    renderIcon: (size: number) => <ClaudeIcon size={size} showBg />,
    tag: "Design",
  },
  {
    title: "Binary Search vs Linear Search",
    sub: "Saved via Chrome Extension",
    renderIcon: (size: number) => <GoogleChromeIcon size={size} />,
    tag: "Comparison",
  },
];

export default function SearchVisual() {
  const reducedMotion = useReducedMotion();
  const [query, setQuery] = useState(reducedMotion ? FULL_QUERY : "");
  const [showResults, setShowResults] = useState(reducedMotion ? true : false);

  useEffect(() => {
    if (reducedMotion) return;

    let alive = true;

    async function loop() {
      while (alive) {
        // Clear
        setQuery("");
        setShowResults(false);
        await sleep(700);

        // Type
        for (let i = 1; i <= FULL_QUERY.length && alive; i++) {
          setQuery(FULL_QUERY.slice(0, i));
          await sleep(65);
        }

        // Show results
        await sleep(280);
        if (alive) setShowResults(true);

        // Hold
        await sleep(3200);
      }
    }

    loop();
    return () => {
      alive = false;
    };
  }, [reducedMotion]);

  return (
    <div className="relative w-full h-full flex items-center justify-center px-4 py-3 select-none">
      <div className="w-full max-w-[400px] flex flex-col gap-2.5">

        {/* Search bar */}
        <div
          className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl border shadow-sm transition-colors duration-300"
          style={{
            background: "white",
            borderColor: showResults ? "var(--border-strong)" : "var(--border)",
          }}
        >
          <FiSearch size={15} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} />

          <div
            className="flex-1 flex items-center text-[12px] font-medium overflow-hidden"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {query ? (
              <span style={{ color: "var(--primary)" }}>{query}</span>
            ) : (
              <span style={{ color: "var(--text-tertiary)" }}>Search your memories...</span>
            )}
            <motion.span
              className="inline-block ml-px"
              style={{ width: 2, height: 14, background: "var(--primary)", borderRadius: 1 }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
            />
          </div>

          <kbd
            className="text-[9.5px] font-medium px-1.5 py-0.5 rounded"
            style={{
              background: "#F3F0EB",
              color: "var(--text-secondary)",
              border: "1px solid var(--border)",
              fontFamily: "monospace",
            }}
          >
            ⌘K
          </kbd>
        </div>

        {/* Results list */}
        <div className="flex flex-col gap-1.5" style={{ minHeight: 140 }}>
          <AnimatePresence>
            {showResults &&
              RESULTS.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.28, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center justify-between rounded-xl px-3 py-2 border cursor-pointer hover:border-[var(--border-strong)] transition-colors"
                  style={{ background: "white", borderColor: "var(--border)" }}
                >
                  {/* Left: icon + text */}
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <div className="flex items-center justify-center shrink-0">
                      {item.renderIcon(18)}
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span
                        className="text-[11.5px] font-semibold truncate"
                        style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
                      >
                        {item.title}
                      </span>
                      <span className="text-[10px] truncate" style={{ color: "var(--text-secondary)" }}>
                        {item.sub}
                      </span>
                    </div>
                  </div>

                  {/* Right: tag + arrow */}
                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    <span
                      className="text-[9.5px] font-medium px-2 py-0.5 rounded-lg"
                      style={{
                        background: "#F3F0EB",
                        color: "var(--text-secondary)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {item.tag}
                    </span>
                    <FiArrowRight size={12} style={{ color: "var(--text-tertiary)" }} />
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
