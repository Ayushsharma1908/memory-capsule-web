"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiFolder, FiTag, FiShare2 } from "react-icons/fi";

function OpenAIIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 41 41" fill="currentColor">
      <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.675-2.981 10.079 10.079 0 0 0-9.612 6.988 9.967 9.967 0 0 0-6.664 4.834 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.676 2.98 10.079 10.079 0 0 0 9.617-6.981 9.967 9.967 0 0 0 6.663-4.834 10.079 10.079 0 0 0-1.243-11.82zm-22.061 15.55a7.478 7.478 0 0 1-4.799-1.735l.236-.134 7.964-4.6a1.298 1.298 0 0 0 .655-1.134v-11.23l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.49 7.498zM6.392 22.06a7.479 7.479 0 0 1-.894-5.023l.236.141 7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103L16.628 25.1a7.505 7.505 0 0 1-10.237-3.04zm-1.055-16.523A7.48 7.48 0 0 1 9.28 2.118l-.005.252-.005 9.201a1.297 1.297 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.012L8.105 15.3A7.504 7.504 0 0 1 5.337 5.537zm27.503 6.44l-9.724-5.615 3.367-1.943a.121.121 0 0 1 .114-.012l8.082 4.872a7.5 7.5 0 0 1-1.158 13.528v-9.454a1.297 1.297 0 0 0-.68-1.376zm3.35-5.043-.236-.141-7.965-4.6a1.298 1.298 0 0 0-1.308 0L17.058 7.8V3.912a.12.12 0 0 1 .048-.103l8.078-4.868a7.5 7.5 0 0 1 11.106 7.775zm-21.063 6.929-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.501 7.501 0 0 1 12.293-5.756l-.236.134-7.965 4.6a1.298 1.298 0 0 0-.654 1.132l-.006 11.225zm1.829-3.943 4.33-2.501 4.332 2.5v4.999l-4.331 2.5-4.331-2.5V9.92z" />
    </svg>
  );
}

export default function OrganizationVisual() {
  const reducedMotion = useReducedMotion();
  const [organized, setOrganized] = useState(() => (reducedMotion ? true : false));

  useEffect(() => {
    if (reducedMotion) return;
    const initial = setTimeout(() => setOrganized(true), 900);
    const interval = setInterval(() => {
      setOrganized((prev) => !prev);
    }, 3400);
    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, [reducedMotion]);

  return (
    <div className="relative w-full h-full flex items-center justify-center px-5 py-4 select-none">
      <div
        className="w-full rounded-2xl border overflow-hidden shadow-sm"
        style={{
          background: "white",
          borderColor: organized ? "var(--border-strong)" : "var(--border)",
          maxWidth: 290,
        }}
      >
        {/* Card header */}
        <div
          className="flex items-center justify-between px-4 py-3 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex items-center gap-2 min-w-0">
            <div
              className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "var(--primary)" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <span
              className="text-[12px] font-bold truncate"
              style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
            >
              Binary Search
            </span>
          </div>

          <motion.span
            className="text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ml-2"
            animate={{
              background: organized ? "rgba(216,195,165,0.2)" : "rgba(0,0,0,0.05)",
              color: organized ? "var(--primary)" : "var(--text-tertiary)",
            }}
            transition={{ duration: 0.5 }}
          >
            {organized ? "Organized ✓" : "Unsorted"}
          </motion.span>
        </div>

        {/* Rows */}
        <div className="px-4 py-2 flex flex-col divide-y divide-[var(--border)]">

          {/* Topic row */}
          <div className="flex items-center justify-between py-2.5">
            <span className="flex items-center gap-1.5 text-[11px] font-medium shrink-0" style={{ color: "var(--text-secondary)" }}>
              <FiFolder size={12} style={{ color: "var(--text-tertiary)" }} />
              Topic
            </span>
            <motion.span
              className="text-[11px] font-semibold px-2 py-0.5 rounded-lg"
              style={{ background: "#FAF8F4", border: "1px solid var(--border-strong)", color: "var(--primary)" }}
              animate={{ opacity: organized ? 1 : 0.2, x: organized ? 0 : 6 }}
              transition={{ duration: 0.4, delay: organized ? 0.1 : 0 }}
            >
              DSA
            </motion.span>
          </div>

          {/* Tags row — stacked so tags wrap below the label */}
          <div className="py-2.5 flex flex-col gap-1.5">
            <span className="flex items-center gap-1.5 text-[11px] font-medium" style={{ color: "var(--text-secondary)" }}>
              <FiTag size={12} style={{ color: "var(--text-tertiary)" }} />
              Tags
            </span>
            <motion.div
              className="flex flex-wrap gap-1"
              animate={{ opacity: organized ? 1 : 0.15 }}
              transition={{ duration: 0.4, delay: organized ? 0.2 : 0 }}
            >
              {["Binary Search", "Algorithms", "Java"].map((tag, idx) => (
                <motion.span
                  key={tag}
                  className="text-[10px] font-medium px-2 py-0.5 rounded-lg"
                  style={{ background: "#FAF8F4", color: "var(--primary)", border: "1px solid var(--border-strong)" }}
                  animate={{ opacity: organized ? 1 : 0, scale: organized ? 1 : 0.8 }}
                  transition={{ duration: 0.3, delay: organized ? 0.25 + idx * 0.07 : 0 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Source row */}
          <div className="flex items-center justify-between py-2.5">
            <span className="flex items-center gap-1.5 text-[11px] font-medium shrink-0" style={{ color: "var(--text-secondary)" }}>
              <FiShare2 size={12} style={{ color: "var(--text-tertiary)" }} />
              Source
            </span>
            <motion.span
              className="flex items-center gap-1.5 text-[11px] font-semibold"
              style={{ color: "var(--primary)" }}
              animate={{ opacity: organized ? 1 : 0.2 }}
              transition={{ duration: 0.4, delay: organized ? 0.4 : 0 }}
            >
              <OpenAIIcon size={13} />
              ChatGPT
            </motion.span>
          </div>

        </div>
      </div>
    </div>
  );
}
