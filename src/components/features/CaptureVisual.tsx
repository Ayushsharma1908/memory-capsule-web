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
      renderIcon: (size: number) => <ChatGPTIcon size={size} />,
      active: true,
    },
    {
      id: "claude",
      name: "Claude",
      sub: "Coming Soon",
      renderIcon: (size: number) => <ClaudeIcon size={size} />,
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
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden px-2 py-1">
      <div className="flex flex-col items-center gap-1.5 w-full max-w-[320px]">

        <div className="grid grid-cols-3 w-full gap-1.5 items-center">
          {sources.map((item, i) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center gap-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm border transition-transform duration-200 hover:scale-105"
                style={{
                  background: item.active ? "white" : "#F5F2EE",
                  borderColor: item.active ? "var(--border-strong)" : "var(--border)",
                  opacity: item.active ? 1 : 0.65,
                }}
              >
                {item.renderIcon(19)}
              </div>

              <div className="flex flex-col items-center gap-0.5 text-center">
                <span className="text-[10.5px] font-semibold text-[var(--primary)] tracking-tight">
                  {item.name}
                </span>
                <span
                  className="text-[8.5px] font-medium px-1.5 py-0.2 rounded-full whitespace-nowrap"
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

        <div className="w-full h-5 pointer-events-none relative my-0">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 340 32" fill="none">
            <path
              d="M 56.6 0 C 56.6 16, 170 10, 170 32"
              stroke="var(--border-strong)"
              strokeWidth="1.3"
              strokeDasharray="3.5 3.5"
              opacity="0.65"
            />
            <path
              d="M 170 0 L 170 32"
              stroke="var(--border-strong)"
              strokeWidth="1.3"
              strokeDasharray="3.5 3.5"
              opacity="0.65"
            />
            <path
              d="M 283.3 0 C 283.3 16, 170 10, 170 32"
              stroke="var(--border-strong)"
              strokeWidth="1.3"
              strokeDasharray="3.5 3.5"
              opacity="0.65"
            />

            {!reducedMotion && (
              <>
                <motion.circle
                  r="3"
                  fill="var(--accent)"
                  animate={{ cx: [56.6, 113.3, 170], cy: [0, 16, 32], opacity: [0, 1, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                />
                <motion.circle
                  r="3"
                  fill="var(--accent)"
                  animate={{ cx: [170, 170, 170], cy: [0, 16, 32], opacity: [0, 1, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.73 }}
                />
                <motion.circle
                  r="3"
                  fill="var(--accent)"
                  animate={{ cx: [283.3, 226.6, 170], cy: [0, 16, 32], opacity: [0, 1, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1.46 }}
                />
              </>
            )}
          </svg>
        </div>

        <motion.div
          className="flex items-center gap-2 px-3 py-1 rounded-full border shadow-sm shrink-0"
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
          <Image
            src="/logo.svg"
            alt="Memory Capsule"
            width={22}
            height={22}
            className="w-5 h-5 object-contain shrink-0"
          />
          <div className="flex flex-col shrink-0">
            <span
              className="text-[11px] font-bold text-[var(--primary)] tracking-tight whitespace-nowrap"
              style={{ fontFamily: "var(--font-heading)", lineHeight: 1.2 }}
            >
              Memory Capsule
            </span>
            <span
              className="text-[8.5px] text-[var(--text-secondary)] font-medium whitespace-nowrap"
              style={{ lineHeight: 1.2 }}
            >
              All knowledge, one place
            </span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
