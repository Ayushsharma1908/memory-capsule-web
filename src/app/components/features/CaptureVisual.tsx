"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ChatGPTIcon, ClaudeIcon, GoogleChromeIcon } from "./BrandIcons";

export default function CaptureVisual() {
  const reducedMotion = useReducedMotion();

  const sources = [
    {
      id: "chatgpt",
      name: "ChatGPT",
      sub: "Supported",
      renderIcon: (size: number) => <ChatGPTIcon size={size} showBg />,
      active: true,
    },
    {
      id: "claude",
      name: "Claude",
      sub: "Coming Soon",
      renderIcon: (size: number) => <ClaudeIcon size={size} showBg />,
      active: false,
    },
    {
      id: "chrome",
      name: "Extension",
      sub: "Chrome v114+",
      renderIcon: (size: number) => <GoogleChromeIcon size={size} />,
      active: true,
    },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden px-4 py-3">
      <div className="flex flex-col items-center gap-3 w-full max-w-[320px]">

        {/* Source node row */}
        <div className="grid grid-cols-3 w-full gap-2 items-center">
          {sources.map((item, i) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center gap-1.5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Icon badge */}
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-sm border transition-transform duration-200 hover:scale-105"
                style={{
                  background: item.active ? "white" : "#F5F2EE",
                  borderColor: item.active ? "var(--border-strong)" : "var(--border)",
                  opacity: item.active ? 1 : 0.65,
                }}
              >
                {item.renderIcon(22)}
              </div>

              {/* Label */}
              <div className="flex flex-col items-center gap-0.5 text-center">
                <span className="text-[11px] font-semibold text-[var(--primary)] tracking-tight">
                  {item.name}
                </span>
                <span
                  className="text-[9px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap"
                  style={{
                    background: item.active ? "rgba(31,36,33,0.07)" : "rgba(216,195,165,0.25)",
                    color: item.active ? "var(--primary)" : "var(--text-tertiary)",
                  }}
                >
                  {item.sub}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flow SVG — convergence lines with moving particles */}
        <div className="w-full h-9 pointer-events-none relative my-0.5">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 320 36" fill="none">
            {/* Three curved dotted paths meeting center */}
            <path
              d="M 53.3 0 C 53.3 18, 160 12, 160 36"
              stroke="var(--border-strong)"
              strokeWidth="1.3"
              strokeDasharray="3.5 3.5"
              opacity="0.65"
            />
            <path
              d="M 160 0 L 160 36"
              stroke="var(--border-strong)"
              strokeWidth="1.3"
              strokeDasharray="3.5 3.5"
              opacity="0.65"
            />
            <path
              d="M 266.7 0 C 266.7 18, 160 12, 160 36"
              stroke="var(--border-strong)"
              strokeWidth="1.3"
              strokeDasharray="3.5 3.5"
              opacity="0.65"
            />

            {/* Animated flow dots */}
            {!reducedMotion && (
              <>
                <motion.circle
                  r="3"
                  fill="var(--accent)"
                  animate={{ cx: [53.3, 106.6, 160], cy: [0, 18, 36], opacity: [0, 1, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                />
                <motion.circle
                  r="3"
                  fill="var(--accent)"
                  animate={{ cx: [160, 160, 160], cy: [0, 18, 36], opacity: [0, 1, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.73 }}
                />
                <motion.circle
                  r="3"
                  fill="var(--accent)"
                  animate={{ cx: [266.7, 213.3, 160], cy: [0, 18, 36], opacity: [0, 1, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1.46 }}
                />
              </>
            )}
          </svg>
        </div>

        {/* Central Memory Capsule hub */}
        <motion.div
          className="flex items-center gap-3.5 px-4 py-2.5 rounded-2xl border shadow-sm"
          style={{
            background: "white",
            borderColor: "var(--accent)",
          }}
          animate={
            reducedMotion
              ? {}
              : {
                  boxShadow: [
                    "0 2px 10px rgba(216,195,165,0.15)",
                    "0 4px 20px rgba(216,195,165,0.45)",
                    "0 2px 10px rgba(216,195,165,0.15)",
                  ],
                }
          }
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="w-8 h-8 rounded-xl bg-[var(--primary)] flex items-center justify-center shrink-0"
            style={{ padding: 4.5 }}
          >
            <Image
              src="/logo.svg"
              alt="Memory Capsule"
              width={20}
              height={20}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span
              className="text-[12.5px] font-bold text-[var(--primary)] tracking-tight"
              style={{ fontFamily: "var(--font-heading)", lineHeight: 1.2 }}
            >
              Memory Capsule
            </span>
            <span
              className="text-[10px] text-[var(--text-secondary)] font-medium"
              style={{ lineHeight: 1.3 }}
            >
              All knowledge, one place
            </span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
