"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiFolder, FiTag, FiShare2 } from "react-icons/fi";
import { ChatGPTIcon } from "./BrandIcons";

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
    <div className="relative w-full h-full flex items-center justify-center px-4 py-3 select-none">
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
          className="flex items-center justify-between px-3.5 py-2.5 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex items-center gap-2 min-w-0">
            <div
              className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "var(--primary)" }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
            className="text-[9.5px] font-semibold px-2 py-0.5 rounded-full shrink-0 ml-2"
            animate={{
              background: organized ? "rgba(216,195,165,0.25)" : "rgba(0,0,0,0.05)",
              color: organized ? "var(--primary)" : "var(--text-tertiary)",
            }}
            transition={{ duration: 0.5 }}
          >
            {organized ? "Organized ✓" : "Unsorted"}
          </motion.span>
        </div>

        {/* Rows */}
        <div className="px-3.5 py-1.5 flex flex-col divide-y divide-[var(--border)]">

          {/* Topic row */}
          <div className="flex items-center justify-between py-2">
            <span
              className="flex items-center gap-1.5 text-[11px] font-medium shrink-0"
              style={{ color: "var(--text-secondary)" }}
            >
              <FiFolder size={12} style={{ color: "var(--text-tertiary)" }} />
              Topic
            </span>
            <motion.span
              className="text-[10.5px] font-semibold px-2 py-0.5 rounded-lg"
              style={{
                background: "#FAF8F4",
                border: "1px solid var(--border-strong)",
                color: "var(--primary)",
              }}
              animate={{ opacity: organized ? 1 : 0.2, x: organized ? 0 : 6 }}
              transition={{ duration: 0.4, delay: organized ? 0.1 : 0 }}
            >
              DSA
            </motion.span>
          </div>

          {/* Tags row */}
          <div className="py-2 flex flex-col gap-1.5">
            <span
              className="flex items-center gap-1.5 text-[11px] font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
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
                  className="text-[9.5px] font-medium px-2 py-0.5 rounded-lg"
                  style={{
                    background: "#FAF8F4",
                    color: "var(--primary)",
                    border: "1px solid var(--border-strong)",
                  }}
                  animate={{ opacity: organized ? 1 : 0, scale: organized ? 1 : 0.8 }}
                  transition={{ duration: 0.3, delay: organized ? 0.25 + idx * 0.07 : 0 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Source row */}
          <div className="flex items-center justify-between py-2">
            <span
              className="flex items-center gap-1.5 text-[11px] font-medium shrink-0"
              style={{ color: "var(--text-secondary)" }}
            >
              <FiShare2 size={12} style={{ color: "var(--text-tertiary)" }} />
              Source
            </span>
            <motion.span
              className="flex items-center gap-1.5 text-[10.5px] font-semibold"
              style={{ color: "var(--primary)" }}
              animate={{ opacity: organized ? 1 : 0.2 }}
              transition={{ duration: 0.4, delay: organized ? 0.4 : 0 }}
            >
              <ChatGPTIcon size={14} />
              ChatGPT
            </motion.span>
          </div>

        </div>
      </div>
    </div>
  );
}
