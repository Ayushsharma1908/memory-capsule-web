"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

/* ─── Brand-accurate inline SVG icons ─── */
function ChatGPTIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.675-2.981 10.079 10.079 0 0 0-9.612 6.988 9.967 9.967 0 0 0-6.664 4.834 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.676 2.98 10.079 10.079 0 0 0 9.617-6.981 9.967 9.967 0 0 0 6.663-4.834 10.079 10.079 0 0 0-1.243-11.82zm-22.061 15.55a7.478 7.478 0 0 1-4.799-1.735l.236-.134 7.964-4.6a1.298 1.298 0 0 0 .655-1.134v-11.23l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.49 7.498zM6.392 22.06a7.479 7.479 0 0 1-.894-5.023l.236.141 7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103L16.628 25.1a7.505 7.505 0 0 1-10.237-3.04zm-1.055-16.523A7.48 7.48 0 0 1 9.28 2.118l-.005.252-.005 9.201a1.297 1.297 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.012L8.105 15.3A7.504 7.504 0 0 1 5.337 5.537zm27.503 6.44l-9.724-5.615 3.367-1.943a.121.121 0 0 1 .114-.012l8.082 4.872a7.5 7.5 0 0 1-1.158 13.528v-9.454a1.297 1.297 0 0 0-.68-1.376zm3.35-5.043-.236-.141-7.965-4.6a1.298 1.298 0 0 0-1.308 0L17.058 7.8V3.912a.12.12 0 0 1 .048-.103l8.078-4.868a7.5 7.5 0 0 1 11.106 7.775zm-21.063 6.929-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.501 7.501 0 0 1 12.293-5.756l-.236.134-7.965 4.6a1.298 1.298 0 0 0-.654 1.132l-.006 11.225zm1.829-3.943 4.33-2.501 4.332 2.5v4.999l-4.331 2.5-4.331-2.5V9.92z"
        fill="currentColor"
      />
    </svg>
  );
}

function ClaudeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 1.5H6.528L0 22.5h4.632l2.368-7.6h10.002l2.368 7.6H24L17.472 1.5zm-8.824 10.4L12 1.76l3.352 10.14H8.648z" />
    </svg>
  );
}

function ChromeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" fill="#4A90D9" />
      <path d="M12 8h8.5a10 10 0 0 1 0 8H12" stroke="#E44235" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M12 16L7.5 23.5A10 10 0 0 1 3.5 4.5L7.5 8" stroke="#FAB908" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M12 8L7.5 4.5A10 10 0 0 1 20.5 12H16" stroke="#34A853" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" fill="white" />
    </svg>
  );
}

export default function CaptureVisual() {
  const reducedMotion = useReducedMotion();

  const sources = [
    { id: "chatgpt", name: "ChatGPT", sub: "Supported", Icon: ChatGPTIcon, active: true },
    { id: "claude", name: "Claude", sub: "Coming Soon", Icon: ClaudeIcon, active: false },
    { id: "chrome", name: "Extension", sub: "Chrome v114+", Icon: ChromeIcon, active: true },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden px-6 py-4">
      <div className="flex flex-col items-center gap-5 w-full max-w-[320px]">

        {/* Source node row */}
        <div className="flex items-end justify-between w-full">
          {sources.map((item, i) => {
            const { Icon } = item;
            return (
              <motion.div
                key={item.id}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Icon badge */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm border"
                  style={{
                    background: item.active ? "white" : "#F5F2EE",
                    borderColor: item.active ? "var(--border-strong)" : "var(--border)",
                    opacity: item.active ? 1 : 0.55,
                  }}
                >
                  <Icon size={20} />
                </div>

                {/* Label */}
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-[11.5px] font-semibold text-[var(--primary)] tracking-tight">
                    {item.name}
                  </span>
                  <span
                    className="text-[9.5px] font-medium px-2 py-0.5 rounded-full"
                    style={{
                      background: item.active ? "rgba(31,36,33,0.07)" : "rgba(216,195,165,0.25)",
                      color: item.active ? "var(--primary)" : "var(--text-tertiary)",
                    }}
                  >
                    {item.sub}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Flow SVG — convergence lines with moving particles */}
        <div className="w-full h-10 pointer-events-none relative">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 320 40" fill="none">
            {/* Three curved dotted paths meeting center */}
            <path d="M 53 0 C 53 20, 160 14, 160 40" stroke="var(--border-strong)" strokeWidth="1.3" strokeDasharray="3.5 3.5" opacity="0.7" />
            <path d="M 160 0 L 160 40" stroke="var(--border-strong)" strokeWidth="1.3" strokeDasharray="3.5 3.5" opacity="0.7" />
            <path d="M 267 0 C 267 20, 160 14, 160 40" stroke="var(--border-strong)" strokeWidth="1.3" strokeDasharray="3.5 3.5" opacity="0.7" />

            {/* Animated dots */}
            {!reducedMotion && (
              <>
                <motion.circle r="3" fill="var(--accent)"
                  animate={{ cx: [53, 106, 160], cy: [0, 20, 40], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                />
                <motion.circle r="3" fill="var(--accent)"
                  animate={{ cx: [160, 160, 160], cy: [0, 20, 40], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                />
                <motion.circle r="3" fill="var(--accent)"
                  animate={{ cx: [267, 214, 160], cy: [0, 20, 40], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
                />
              </>
            )}
          </svg>
        </div>

        {/* Central Memory Capsule hub */}
        <motion.div
          className="flex items-center gap-6 pl-5 pr-3 py-2.5 rounded-2xl border"
          style={{
            background: "white",
            borderColor: "var(--accent)",
          }}
          animate={reducedMotion ? {} : {
            boxShadow: [
              "0 2px 12px rgba(216,195,165,0.15)",
              "0 4px 22px rgba(216,195,165,0.45)",
              "0 2px 12px rgba(216,195,165,0.15)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-8 h-8 rounded-xl bg-[var(--primary)] flex items-center justify-center shrink-0" style={{ padding: 5 }}>
            <Image src="/logo.svg" alt="Memory Capsule" width={20} height={20} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-bold text-[var(--primary)]" style={{ fontFamily: "var(--font-heading)", lineHeight: 1.2 }}>
              Memory Capsule
            </span>
            <span className="text-[10.5px] text-[var(--text-secondary)] font-medium" style={{ lineHeight: 1.3 }}>
              All knowledge, one place
            </span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
