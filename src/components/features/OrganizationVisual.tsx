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
    <div className="relative w-full h-full flex items-center justify-center px-2 py-1 select-none">
      <div
        className="w-full rounded-xl border overflow-hidden shadow-sm"
        style={{
          background: "white",
          borderColor: organized ? "var(--border-strong)" : "var(--border)",
          maxWidth: 280,
        }}
      >
        <div
          className="flex items-center justify-between px-2.5 py-1.5 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex items-center gap-1.5 min-w-0">
            <div
              className="w-5 h-5 rounded flex items-center justify-center shrink-0"
              style={{ background: "var(--primary)" }}
            >
              <svg
                width="10"
                height="10"
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
              className="text-[11px] font-bold truncate"
              style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
            >
              Binary Search
            </span>
          </div>

          <motion.span
            className="text-[8.5px] font-semibold px-1.5 py-0.2 rounded-full shrink-0 ml-1.5"
            animate={{
              background: organized ? "rgba(216,195,165,0.25)" : "rgba(0,0,0,0.05)",
              color: organized ? "var(--primary)" : "var(--text-tertiary)",
            }}
            transition={{ duration: 0.5 }}
          >
            {organized ? "Organized ✓" : "Unsorted"}
          </motion.span>
        </div>

        <div className="px-2.5 py-1 flex flex-col divide-y divide-[var(--border)]">

          <div className="flex items-center justify-between py-1">
            <span
              className="flex items-center gap-1 text-[10px] font-medium shrink-0"
              style={{ color: "var(--text-secondary)" }}
            >
              <FiFolder size={11} style={{ color: "var(--text-tertiary)" }} />
              Topic
            </span>
            <motion.span
              className="text-[9.5px] font-semibold px-1.5 py-0.2 rounded"
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

          <div className="py-1 flex flex-col gap-1">
            <span
              className="flex items-center gap-1 text-[10px] font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              <FiTag size={11} style={{ color: "var(--text-tertiary)" }} />
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
                  className="text-[8.5px] font-medium px-1.5 py-0.2 rounded"
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

          <div className="flex items-center justify-between py-1">
            <span
              className="flex items-center gap-1 text-[10px] font-medium shrink-0"
              style={{ color: "var(--text-secondary)" }}
            >
              <FiShare2 size={11} style={{ color: "var(--text-tertiary)" }} />
              Open Source
            </span>
            <motion.span
              className="flex items-center gap-1 text-[9.5px] font-semibold"
              style={{ color: "var(--primary)" }}
              animate={{ opacity: organized ? 1 : 0.2 }}
              transition={{ duration: 0.4, delay: organized ? 0.4 : 0 }}
            >
              <ChatGPTIcon size={12} />
              ChatGPT
            </motion.span>
          </div>

        </div>
      </div>
    </div>
  );
}
