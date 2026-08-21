"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { FiGlobe } from "react-icons/fi";

function OpenAiIcon({ className = "w-5 h-5", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.56a4.512 4.512 0 0 1-2.89-1.045l.142-.08 4.793-2.766a.765.765 0 0 0 .384-.663v-6.757l2.025 1.17a.747.747 0 0 0 .383.104v5.535a4.544 4.544 0 0 1-4.837 4.507zM3.483 17.51a4.512 4.512 0 0 1-.532-3.027l.142.086 4.793 2.766a.763.763 0 0 0 .767 0l5.852-3.38v2.34a.754.754 0 0 0 .384.662l-4.793 2.766A4.544 4.544 0 0 1 3.483 17.51zm-1.12-10.23a4.514 4.514 0 0 1 2.36-1.982v5.694a.753.754 0 0 0 .383.663l5.852 3.378-2.025 1.17a.766.766 0 0 0-.384.103L3.756 13.54a4.544 4.544 0 0 1-1.393-6.26zm16.59 3.956L13.1 7.856l2.025-1.17a.766.766 0 0 0 .384-.103l4.793 2.766a4.536 4.536 0 0 1-.72 8.16v-5.695a.755.755 0 0 0-.383-.663zm1.96-3.195l-.142-.086-4.793-2.766a.764.764 0 0 0-.767 0L9.36 8.569V6.229a.754.754 0 0 0-.384-.662l4.793-2.766a4.544 4.544 0 0 1 6.782 4.439zM8.337 14.615l-2.025-1.17a.747.747 0 0 0-.383-.104V7.806a4.538 4.538 0 0 1 4.837-4.507 4.512 4.512 0 0 1 2.89 1.045l-.142.08-4.793 2.766a.765.765 0 0 0-.384.663v6.757zm1.183-2.58l2.48-1.43 2.48 1.43v2.86l-2.48 1.43-2.48-1.43v-2.86z" />
    </svg>
  );
}

function AnthropicIcon({ className = "w-5 h-5", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 1.5H6.528L0 22.5h4.632l2.368-7.6h10.002l2.368 7.6H24L17.472 1.5zm-8.824 10.4L12 1.76l3.352 10.14H8.648z" />
    </svg>
  );
}

export default function CaptureVisual() {
  const reducedMotion = useReducedMotion();

  // Real product supported sources
  const sources = [
    {
      id: "chatgpt",
      name: "ChatGPT",
      sub: "Supported",
      icon: OpenAiIcon,
      active: true,
      color: "#10a37f",
    },
    {
      id: "claude",
      name: "Claude",
      sub: "Coming Soon",
      icon: AnthropicIcon,
      active: false,
      color: "#d97706",
    },
    {
      id: "extension",
      name: "Browser Extension",
      sub: "Chrome v114+",
      icon: FiGlobe,
      active: true,
      color: "#3b82f6",
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-2 select-none overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-[340px]">
        {/* Source Nodes Row */}
        <div className="flex items-center justify-between w-full gap-3 z-10">
          {sources.map((item, i) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.id}
                className="flex flex-col items-center flex-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className={`flex items-center justify-center w-11 h-11 rounded-xl border transition-all duration-300 ${
                    item.active
                      ? "bg-white shadow-sm border-[var(--border-strong)]"
                      : "bg-[#F4F1EA] border-[var(--border)] opacity-70"
                  }`}
                  style={{
                    borderColor: item.active ? "var(--border-strong)" : "var(--border)",
                  }}
                >
                  <IconComp
                    className="w-5 h-5"
                    style={{ color: item.active ? "var(--primary)" : "var(--text-tertiary)" }}
                  />
                </div>

                <span className="text-[11px] font-semibold tracking-tight text-[var(--primary)] mt-1.5">
                  {item.name}
                </span>

                <span
                  className={`text-[9px] font-medium tracking-tight px-1.5 py-0.5 rounded-full mt-0.5 ${
                    item.active
                      ? "bg-[rgba(31,36,33,0.06)] text-[var(--primary)]"
                      : "bg-[rgba(216,195,165,0.2)] text-[var(--text-secondary)]"
                  }`}
                >
                  {item.sub}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Dotted Flow Connections SVG */}
        <div className="relative w-full h-12 my-1 pointer-events-none">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 300 48" fill="none">
            {/* Path 1: Left Node to Center */}
            <path
              d="M 50 0 C 50 24, 150 16, 150 48"
              stroke="var(--border-strong)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.6"
            />
            {/* Path 2: Center Node to Center */}
            <path
              d="M 150 0 L 150 48"
              stroke="var(--border-strong)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.6"
            />
            {/* Path 3: Right Node to Center */}
            <path
              d="M 250 0 C 250 24, 150 16, 150 48"
              stroke="var(--border-strong)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.6"
            />

            {/* Animated Flow Particles */}
            {!reducedMotion && (
              <>
                <motion.circle
                  r="3.5"
                  fill="var(--accent)"
                  animate={{
                    cx: [50, 80, 150],
                    cy: [0, 24, 48],
                    opacity: [0, 1, 0],
                  }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.circle
                  r="3.5"
                  fill="var(--primary)"
                  animate={{
                    cx: [150, 150, 150],
                    cy: [0, 24, 48],
                    opacity: [0, 1, 0],
                  }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: 0.8, ease: "easeInOut" }}
                />
                <motion.circle
                  r="3.5"
                  fill="var(--accent)"
                  animate={{
                    cx: [250, 220, 150],
                    cy: [0, 24, 48],
                    opacity: [0, 1, 0],
                  }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: 1.6, ease: "easeInOut" }}
                />
              </>
            )}
          </svg>
        </div>

        {/* Central Memory Capsule Hub */}
        <motion.div
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white border border-[var(--accent)] shadow-md z-10"
          animate={
            reducedMotion
              ? {}
              : {
                  boxShadow: [
                    "0 4px 16px rgba(31, 36, 33, 0.06)",
                    "0 6px 24px rgba(216, 195, 165, 0.4)",
                    "0 4px 16px rgba(31, 36, 33, 0.06)",
                  ],
                }
          }
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-7 h-7 rounded-lg bg-[var(--primary)] flex items-center justify-center p-1">
            <Image src="/logo.svg" alt="Memory Capsule" width={18} height={18} />
          </div>
          <div className="flex flex-col">
            <span
              className="text-[12px] font-bold tracking-tight text-[var(--primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Memory Capsule
            </span>
            <span className="text-[10px] text-[var(--text-secondary)] font-medium">
              Single Knowledge Hub
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
