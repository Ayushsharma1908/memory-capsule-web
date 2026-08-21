"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiTag, FiFolder, FiShare2, FiZap } from "react-icons/fi";

function OpenAiIcon({ className = "w-3 h-3", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.56a4.512 4.512 0 0 1-2.89-1.045l.142-.08 4.793-2.766a.765.765 0 0 0 .384-.663v-6.757l2.025 1.17a.747.747 0 0 0 .383.104v5.535a4.544 4.544 0 0 1-4.837 4.507zM3.483 17.51a4.512 4.512 0 0 1-.532-3.027l.142.086 4.793 2.766a.763.763 0 0 0 .767 0l5.852-3.38v2.34a.754.754 0 0 0 .384.662l-4.793 2.766A4.544 4.544 0 0 1 3.483 17.51zm-1.12-10.23a4.514 4.514 0 0 1 2.36-1.982v5.694a.753.754 0 0 0 .383.663l5.852 3.378-2.025 1.17a.766.766 0 0 0-.384.103L3.756 13.54a4.544 4.544 0 0 1-1.393-6.26zm16.59 3.956L13.1 7.856l2.025-1.17a.766.766 0 0 0 .384-.103l4.793 2.766a4.536 4.536 0 0 1-.72 8.16v-5.695a.755.755 0 0 0-.383-.663zm1.96-3.195l-.142-.086-4.793-2.766a.764.764 0 0 0-.767 0L9.36 8.569V6.229a.754.754 0 0 0-.384-.662l4.793-2.766a4.544 4.544 0 0 1 6.782 4.439zM8.337 14.615l-2.025-1.17a.747.747 0 0 0-.383-.104V7.806a4.538 4.538 0 0 1 4.837-4.507 4.512 4.512 0 0 1 2.89 1.045l-.142.08-4.793 2.766a.765.765 0 0 0-.384.663v6.757zm1.183-2.58l2.48-1.43 2.48 1.43v2.86l-2.48 1.43-2.48-1.43v-2.86z" />
    </svg>
  );
}

export default function OrganizationVisual() {
  const reducedMotion = useReducedMotion();
  const [organized, setOrganized] = useState(() => (reducedMotion ? true : false));

  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      setOrganized((prev) => !prev);
    }, 3200);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-3 select-none">
      <div className="w-full max-w-[320px]">
        {/* Main Memory Card Being Classified */}
        <motion.div
          className="bg-white border rounded-xl p-3.5 shadow-sm transition-all duration-500"
          style={{
            borderColor: organized ? "var(--border-strong)" : "var(--border)",
          }}
          animate={{ y: organized ? 0 : 2 }}
        >
          {/* Card Header */}
          <div className="flex items-center justify-between pb-2 border-b border-[var(--border)] mb-2.5">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-md bg-[var(--primary)] text-white flex items-center justify-center">
                <FiZap className="w-3 h-3 text-[var(--accent)]" />
              </div>
              <span className="text-[11px] font-bold text-[var(--primary)] font-heading">
                Binary Search Algorithm
              </span>
            </div>

            <motion.span
              className="text-[9.5px] font-medium px-2 py-0.5 rounded-full"
              animate={{
                backgroundColor: organized ? "rgba(216, 195, 165, 0.25)" : "rgba(0,0,0,0.04)",
                color: organized ? "var(--primary)" : "var(--text-tertiary)",
              }}
            >
              {organized ? "Organized" : "Unclassified"}
            </motion.span>
          </div>

          {/* Classified Attributes Flow */}
          <div className="space-y-2 text-[11px]">
            {/* Topic Field */}
            <div className="flex items-center justify-between py-1">
              <span className="flex items-center gap-1.5 text-[var(--text-secondary)] font-medium">
                <FiFolder className="w-3.5 h-3.5 text-[var(--text-tertiary)]" />
                Topic
              </span>
              <motion.span
                className="font-semibold text-[var(--primary)] px-2 py-0.5 rounded-md bg-[#FAF8F4] border border-[var(--border)]"
                initial={{ opacity: 0.4, x: -6 }}
                animate={{
                  opacity: organized ? 1 : 0.4,
                  x: organized ? 0 : -6,
                }}
                transition={{ duration: 0.4 }}
              >
                DSA
              </motion.span>
            </div>

            {/* Tags Field */}
            <div className="flex items-start justify-between py-1">
              <span className="flex items-center gap-1.5 text-[var(--text-secondary)] font-medium mt-0.5">
                <FiTag className="w-3.5 h-3.5 text-[var(--text-tertiary)]" />
                Tags
              </span>

              <div className="flex flex-wrap items-center justify-end gap-1 max-w-[170px]">
                {["Binary Search", "Algorithms", "Java"].map((tag, idx) => (
                  <motion.span
                    key={tag}
                    className="text-[9.5px] font-medium px-1.5 py-0.5 rounded-md bg-white border border-[var(--border-strong)] text-[var(--primary)] shadow-2xs"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: organized ? 1 : 0.2,
                      scale: organized ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.35, delay: idx * 0.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Source Field */}
            <div className="flex items-center justify-between py-1 pt-1.5 border-t border-[var(--border)] text-[10.5px]">
              <span className="flex items-center gap-1.5 text-[var(--text-secondary)] font-medium">
                <FiShare2 className="w-3.5 h-3.5 text-[var(--text-tertiary)]" />
                Source
              </span>
              <motion.span
                className="inline-flex items-center gap-1 font-semibold text-[var(--primary)]"
                animate={{ opacity: organized ? 1 : 0.5 }}
              >
                <OpenAiIcon className="w-3 h-3 text-[#10a37f]" />
                ChatGPT
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
