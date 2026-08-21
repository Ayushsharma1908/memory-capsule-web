"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiSearch, FiClock, FiArrowRight } from "react-icons/fi";

function OpenAIIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 41 41" fill="currentColor">
      <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.675-2.981 10.079 10.079 0 0 0-9.612 6.988 9.967 9.967 0 0 0-6.664 4.834 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.676 2.98 10.079 10.079 0 0 0 9.617-6.981 9.967 9.967 0 0 0 6.663-4.834 10.079 10.079 0 0 0-1.243-11.82zm-22.061 15.55a7.478 7.478 0 0 1-4.799-1.735l.236-.134 7.964-4.6a1.298 1.298 0 0 0 .655-1.134v-11.23l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.49 7.498zM6.392 22.06a7.479 7.479 0 0 1-.894-5.023l.236.141 7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103L16.628 25.1a7.505 7.505 0 0 1-10.237-3.04zm-1.055-16.523A7.48 7.48 0 0 1 9.28 2.118l-.005.252-.005 9.201a1.297 1.297 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.012L8.105 15.3A7.504 7.504 0 0 1 5.337 5.537zm27.503 6.44l-9.724-5.615 3.367-1.943a.121.121 0 0 1 .114-.012l8.082 4.872a7.5 7.5 0 0 1-1.158 13.528v-9.454a1.297 1.297 0 0 0-.68-1.376zm3.35-5.043-.236-.141-7.965-4.6a1.298 1.298 0 0 0-1.308 0L17.058 7.8V3.912a.12.12 0 0 1 .048-.103l8.078-4.868a7.5 7.5 0 0 1 11.106 7.775zm-21.063 6.929-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.501 7.501 0 0 1 12.293-5.756l-.236.134-7.965 4.6a1.298 1.298 0 0 0-.654 1.132l-.006 11.225zm1.829-3.943 4.33-2.501 4.332 2.5v4.999l-4.331 2.5-4.331-2.5V9.92z" />
    </svg>
  );
}

const FULL_QUERY = "binary search java";
const RESULTS = [
  { title: "Binary Search — Java", sub: "Saved from ChatGPT", Icon: OpenAIIcon, tag: "Algorithms" },
  { title: "Binary Search Edge Cases", sub: "Saved 3 days ago", Icon: FiClock, tag: "Notes" },
  { title: "Binary Search vs Linear Search", sub: "Saved from ChatGPT", Icon: OpenAIIcon, tag: "Comparison" },
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
        await sleep(3000);
      }
    }

    loop();
    return () => { alive = false; };
  }, [reducedMotion]);

  return (
    <div className="relative w-full h-full flex items-center justify-center px-5 py-4 select-none">
      <div className="w-full max-w-[400px] flex flex-col gap-3">

        {/* Search bar */}
        <div
          className="flex items-center gap-2.5 px-4 py-3 rounded-2xl border shadow-sm"
          style={{ background: "white", borderColor: showResults ? "var(--border-strong)" : "var(--border)" }}
        >
          <FiSearch size={15} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} />

          <div className="flex-1 flex items-center text-[12.5px] font-medium overflow-hidden" style={{ fontFamily: "var(--font-body)" }}>
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

          <kbd className="text-[10px] font-medium px-1.5 py-0.5 rounded"
            style={{ background: "#F3F0EB", color: "var(--text-secondary)", border: "1px solid var(--border)", fontFamily: "monospace" }}>
            ⌘K
          </kbd>
        </div>

        {/* Results list */}
        <div className="flex flex-col gap-1.5" style={{ minHeight: 138 }}>
          <AnimatePresence>
            {showResults && RESULTS.map((item, idx) => {
              const { Icon } = item;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 border cursor-pointer"
                  style={{ background: "white", borderColor: "var(--border)" }}
                >
                  {/* Left: icon + text */}
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "#FAF8F4", border: "1px solid var(--border)" }}
                    >
                      <Icon size={13} style={{ color: "var(--primary)" }} />
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-[12px] font-semibold truncate" style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}>
                        {item.title}
                      </span>
                      <span className="text-[10.5px] truncate" style={{ color: "var(--text-secondary)" }}>
                        {item.sub}
                      </span>
                    </div>
                  </div>

                  {/* Right: tag + arrow */}
                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-lg"
                      style={{ background: "#F3F0EB", color: "var(--text-secondary)", border: "1px solid var(--border)" }}>
                      {item.tag}
                    </span>
                    <FiArrowRight size={13} style={{ color: "var(--text-tertiary)" }} />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)); }
