"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiSearch, FiFolder, FiTag, FiStar, FiDatabase, FiCheck } from "react-icons/fi";

const EASE_SMOOTH = [0.4, 0, 0.2, 1] as const;

function floatTransition(duration: number, delay = 0) {
  return { duration, repeat: Infinity, ease: "easeInOut" as const, delay };
}

/* ─────────────────────────────────────────────
   VISUAL 1 — Capture
   ───────────────────────────────────────────── */
function CaptureVisual() {
  const [clicking, setClicking] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    function runCycle() {
      setClicking(true);
      setTimeout(() => {
        setClicking(false);
        setShowToast(true);
      }, 380);
      setTimeout(() => setShowToast(false), 2400);
    }
    const initialDelay = setTimeout(runCycle, 800);
    const interval = setInterval(runCycle, 4200);
    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="relative w-full rounded-2xl border overflow-hidden flex flex-col"
      style={{ background: "#FDFCFA", borderColor: "var(--border)", height: 220 }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-3 border-b flex-shrink-0"
        style={{ height: 28, background: "#F5F3EF", borderColor: "var(--border)" }}
      >
        <span className="w-2 h-2 rounded-full" style={{ background: "#DDD8CF" }} />
        <span className="w-2 h-2 rounded-full" style={{ background: "#DDD8CF" }} />
        <span className="w-2 h-2 rounded-full" style={{ background: "#DDD8CF" }} />
        <div className="flex-1 mx-3 h-2 rounded" style={{ background: "#E8E4DC" }} />
      </div>

      {/* Chat skeleton */}
      <div className="flex-1 p-4 flex flex-col gap-2.5 relative overflow-hidden">
        <div className="flex gap-2.5 items-start">
          <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5" style={{ background: "#E5E2DC" }} />
          <div className="flex-1 space-y-1.5">
            <div className="h-2 rounded" style={{ width: "55%", background: "#F0EDE6" }} />
            <div className="h-2 rounded" style={{ width: "40%", background: "#F0EDE6" }} />
          </div>
        </div>
        <div className="flex gap-2.5 items-start">
          <div className="w-5 h-5 rounded-md flex-shrink-0 mt-0.5" style={{ background: "#D8C3A5" }} />
          <div className="flex-1 space-y-1.5">
            <div className="h-2 rounded" style={{ width: "90%", background: "#F0EDE6" }} />
            <div className="h-2 rounded" style={{ width: "75%", background: "#F0EDE6" }} />
            <div className="h-2 rounded" style={{ width: "50%", background: "#F0EDE6" }} />
          </div>
        </div>

        {/* Toast + button */}
        <div className="absolute right-3 bottom-3 flex flex-col items-end gap-2">
          <AnimatePresence>
            {showToast && (
              <motion.div
                key="toast"
                initial={{ opacity: 0, y: 6, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -4, scale: 0.96 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold text-white shadow-md"
                style={{ background: "var(--primary)" }}
              >
                <FiCheck size={10} style={{ color: "#D8C3A5" }} />
                Saved to Memory Capsule
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-medium border select-none cursor-default"
            style={{
              background: "white",
              borderColor: "var(--border-strong)",
              color: "var(--primary)",
              boxShadow: "0 1px 3px rgba(31,36,33,0.04)",
            }}
            animate={
              clicking
                ? { scale: 0.94, background: "var(--accent-light)" }
                : { scale: [1, 1.02, 1] }
            }
            transition={
              clicking
                ? { duration: 0.12, ease: "easeOut" }
                : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
            }
          >
            Save Memory <span style={{ color: "var(--accent)" }}>✨</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   VISUAL 2 — Organize
   ───────────────────────────────────────────── */
function OrganizeVisual() {
  const items = [
    { label: "Interview Prep", width: "75%" },
    { label: "React Hooks", width: "60%" },
    { label: "OS Notes", width: "80%" },
    { label: "HR Questions", width: "55%" },
  ];

  return (
    <div
      className="relative w-full rounded-2xl flex items-center justify-center overflow-hidden"
      style={{
        height: 220,
        background: "linear-gradient(135deg, #FAF8F4 0%, #F5F1EA 100%)",
        border: "1px solid var(--border)",
      }}
    >
      <div className="relative" style={{ width: 200, height: 160 }}>
        {items.map((card, i) => (
          <motion.div
            key={card.label}
            className="absolute w-full rounded-xl p-3 border"
            style={{
              background: "white",
              borderColor: "var(--border)",
              top: 0,
              left: 0,
              zIndex: 10 - i,
              scale: 1 - i * 0.03,
              boxShadow: "0 1px 6px rgba(31,36,33,0.04)",
            }}
            animate={{ y: [i * 26 - 1, i * 26 + 2, i * 26 - 1] }}
            transition={floatTransition(3.2 + i * 0.5, i * 0.35)}
          >
            <div className="flex items-center gap-2 mb-2">
              <FiFolder size={12} style={{ color: "var(--text-tertiary)" }} />
              <span className="text-[11px] font-semibold" style={{ color: "var(--primary)" }}>
                {card.label}
              </span>
            </div>
            <div
              className="h-1 rounded-full"
              style={{ width: card.width, background: "var(--accent-light)" }}
            />
          </motion.div>
        ))}

        <motion.div
          className="absolute flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold shadow-md"
          style={{
            background: "var(--primary)",
            color: "var(--accent)",
            top: -18,
            right: -24,
            zIndex: 30,
          }}
          animate={{
            scale: [1, 1.06, 1],
            boxShadow: [
              "0 3px 10px rgba(31,36,33,0.08)",
              "0 5px 18px rgba(31,36,33,0.14)",
              "0 3px 10px rgba(31,36,33,0.08)",
            ],
          }}
          transition={floatTransition(2.4)}
        >
          ✨ Auto Tagged
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   VISUAL 3 — Find
   ───────────────────────────────────────────── */
const QUERIES = [
  {
    text: "binary search interview",
    results: [
      { title: "Binary Search Pattern", sub: "Saved from LeetCode conversation", hl: "Binary Search" },
      { title: "Java Interview Questions", sub: "Saved from Mock Interview", hl: "Interview" },
    ],
  },
  {
    text: "react hooks",
    results: [
      { title: "React Hooks Deep Dive", sub: "Saved from React conversation", hl: "React Hooks" },
      { title: "useEffect Patterns", sub: "Saved from ChatGPT session", hl: "" },
    ],
  },
  {
    text: "resume review",
    results: [
      { title: "Resume Feedback — v3", sub: "Saved from Career Advice", hl: "Resume" },
      { title: "Portfolio Projects List", sub: "Saved from Planning session", hl: "" },
    ],
  },
];

type Phase = "typing" | "holding" | "deleting";

function FindVisual() {
  const [qIdx, setQIdx] = useState(0);
  const [shown, setShown] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    const full = QUERIES[qIdx].text;
    let t: NodeJS.Timeout;

    if (phase === "typing") {
      if (shown.length < full.length) {
        t = setTimeout(() => setShown(full.slice(0, shown.length + 1)), 65);
      } else {
        t = setTimeout(() => setPhase("holding"), 1200);
      }
    } else if (phase === "holding") {
      t = setTimeout(() => setPhase("deleting"), 600);
    } else {
      if (shown.length > 0) {
        t = setTimeout(() => setShown(full.slice(0, shown.length - 1)), 35);
      } else {
        setQIdx((q) => (q + 1) % QUERIES.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(t);
  }, [phase, shown, qIdx]);

  const q = QUERIES[qIdx];
  const showResults = shown.length >= 4;

  return (
    <div
      className="relative w-full rounded-2xl flex flex-col gap-2.5 overflow-hidden"
      style={{ height: 220, background: "var(--bg)", padding: "16px 18px", border: "1px solid var(--border)" }}
    >
      {/* Search bar */}
      <div
        className="flex items-center gap-2.5 rounded-xl border px-3 flex-shrink-0"
        style={{
          height: 40,
          background: "white",
          borderColor: "var(--border-strong)",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        <FiSearch size={14} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} />
        <div
          className="flex items-center flex-1 h-5 font-mono text-xs overflow-hidden"
          style={{ color: "var(--primary)" }}
        >
          <span>{shown}</span>
          <motion.span
            className="inline-block rounded-sm ml-px flex-shrink-0"
            style={{ width: 2, height: 14, background: "var(--primary)" }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
          />
        </div>
      </div>

      {/* Results */}
      <AnimatePresence mode="wait">
        {showResults && (
          <motion.div
            key={`${qIdx}-${showResults}`}
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 3 }}
            transition={{ duration: 0.18 }}
          >
            {q.results.map((r, i) => {
              const parts = r.hl ? r.title.split(r.hl) : [r.title];
              return (
                <div
                  key={i}
                  className="rounded-xl px-3.5 py-2.5"
                  style={{
                    background: "white",
                    border: "1px solid var(--border)",
                    borderLeftWidth: i === 0 ? 3 : 1,
                    borderLeftColor: i === 0 ? "var(--accent)" : "var(--border)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <p className="text-xs font-semibold" style={{ color: "var(--primary)" }}>
                    {r.hl ? (
                      <>
                        {parts[0]}
                        <span className="px-1 rounded" style={{ background: "var(--accent-light)" }}>
                          {r.hl}
                        </span>
                        {parts[1]}
                      </>
                    ) : (
                      r.title
                    )}
                  </p>
                  <p className="text-[11px] mt-0.5" style={{ color: "var(--text-secondary)" }}>
                    {r.sub}
                  </p>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────
   VISUAL 4 — Build
   ───────────────────────────────────────────── */
function useCountUp(target: number, inView: boolean) {
  const [val, setVal] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (!inView || done.current) return;
    done.current = true;
    const steps = 30;
    const stepMs = 1000 / steps;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setVal(Math.round((i / steps) * target));
      if (i >= steps) clearInterval(id);
    }, stepMs);
    return () => clearInterval(id);
  }, [inView, target]);

  return val;
}

function BuildVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  const stats = [
    { label: "Memories", value: useCountUp(126, inView), icon: FiDatabase },
    { label: "Collections", value: useCountUp(14, inView), icon: FiFolder },
    { label: "Tags", value: useCountUp(48, inView), icon: FiTag },
    { label: "Favorites", value: useCountUp(19, inView), icon: FiStar },
  ];

  const bars = [4, 6, 5, 8, 7, 10, 12, 11, 15, 14, 18, 20];

  return (
    <div
      ref={ref}
      className="relative w-full rounded-2xl flex flex-col overflow-hidden"
      style={{
        height: 220,
        background: "var(--bg)",
        border: "1px solid var(--border)",
        padding: "14px",
      }}
    >
      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-2 mb-2.5">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl flex flex-col gap-0.5 border"
            style={{
              background: "white",
              borderColor: "var(--border)",
              padding: "10px 12px",
            }}
          >
            <div className="flex items-center gap-1.5" style={{ color: "var(--text-tertiary)" }}>
              <s.icon size={10} />
              <span
                className="uppercase tracking-wider font-medium"
                style={{ fontSize: 8, color: "var(--text-tertiary)" }}
              >
                {s.label}
              </span>
            </div>
            <span className="font-bold" style={{ fontSize: 18, color: "var(--primary)" }}>
              {s.value}
            </span>
          </div>
        ))}
      </div>

      {/* Growth bar */}
      <div
        className="flex-1 rounded-xl border relative overflow-hidden"
        style={{
          background: "white",
          borderColor: "var(--border)",
          padding: "8px 12px 10px",
        }}
      >
        <span
          className="uppercase tracking-wider font-medium"
          style={{ fontSize: 8, color: "var(--text-tertiary)" }}
        >
          Knowledge Growth
        </span>
        <div className="flex items-end gap-[3px] w-full mt-2" style={{ height: 40 }}>
          {bars.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t-sm"
              style={{ background: "var(--accent)", opacity: 0.8 }}
              animate={{ height: [`${h * 3}%`, `${h * 4.5}%`, `${h * 3}%`] }}
              transition={floatTransition(3 + i * 0.15, i * 0.1)}
            />
          ))}
        </div>

        {/* Sweeping glow */}
        <motion.div
          className="absolute bottom-0 pointer-events-none"
          style={{
            height: 32,
            width: "30%",
            background: "linear-gradient(to top, rgba(216,195,165,0.2), transparent)",
            filter: "blur(8px)",
          }}
          animate={{ left: ["-5%", "75%", "-5%"] }}
          transition={floatTransition(4.5, 0)}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */
const CARDS = [
  {
    visual: <CaptureVisual />,
    title: "Capture what matters",
    body: "One click saves your most valuable ChatGPT conversations. Code snippets, career advice, project ideas — everything stays forever.",
    floatDur: 6,
    floatDelay: 0,
  },
  {
    visual: <OrganizeVisual />,
    title: "Organized automatically",
    body: "AI categorizes every saved chat into collections with smart titles, summaries, and tags. Zero manual sorting required.",
    floatDur: 7,
    floatDelay: 0.4,
  },
  {
    visual: <FindVisual />,
    title: "Find anything instantly",
    body: "Search by keyword, topic, or natural language. Your entire knowledge base is accessible in seconds, not minutes.",
    floatDur: 5.5,
    floatDelay: 0.2,
  },
  {
    visual: <BuildVisual />,
    title: "Build your second brain",
    body: "Transform fleeting chat history into a permanent, searchable knowledge hub that grows smarter with every save.",
    floatDur: 6.5,
    floatDelay: 0.6,
  },
];

/* ─────────────────────────────────────────────
   SECTION
   ───────────────────────────────────────────── */
export default function FeaturesSection() {
  return (
    <section
      className="relative w-full overflow-hidden flex justify-center"
      style={{ background: "var(--bg-outer)", paddingTop: 96, paddingBottom: 112 }}
      id="features"
      aria-label="Features"
    >
      {/* Ambient radial */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 0%, rgba(216,195,165,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Centered content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 lg:px-8 flex flex-col items-center">
        {/* Section header */}
        <motion.div
          className="mb-14 md:mb-18 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE_SMOOTH }}
        >
          <motion.span
            className="block uppercase font-semibold mb-4"
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              color: "var(--accent)",
              fontFamily: "var(--font-body)",
            }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE_SMOOTH }}
          >
            Everything you need
          </motion.span>
          <h2
            className="font-bold leading-[1.08]"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(34px, 4.5vw, 58px)",
              color: "#FAF8F4",
              letterSpacing: "-0.03em",
              marginBottom: 16,
            }}
          >
            Your knowledge,{" "}
            <span style={{ color: "var(--accent)" }}>amplified</span>
          </h2>
          <p
            className="leading-relaxed mx-auto"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(14px, 1.4vw, 16px)",
              color: "rgba(250,248,244,0.45)",
              maxWidth: 420,
            }}
          >
            From capturing to recalling — Memory Capsule handles the entire lifecycle of your knowledge.
          </p>
        </motion.div>

        {/* Outer rounded container */}
        <motion.div
          className="w-full max-w-5xl mx-auto rounded-[28px] md:rounded-[40px] p-2.5 md:p-3.5"
          style={{ background: "rgba(236, 230, 220, 0.25)", border: "1px solid rgba(236, 230, 220, 0.12)" }}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: EASE_SMOOTH }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3.5">
            {CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                className="h-full"
                initial={{ opacity: 0, y: 32, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: EASE_SMOOTH }}
              >
                <motion.div
                  className="relative flex flex-col overflow-hidden h-full"
                  style={{
                    background: "white",
                    borderRadius: 22,
                    padding: "28px 26px 32px",
                    border: "1px solid var(--border)",
                  }}
                  animate={{
                    y: [-1.5, 1.5, -1.5],
                    boxShadow: [
                      "0 1px 4px rgba(31,36,33,0.03), 0 1px 2px rgba(31,36,33,0.02)",
                      "0 10px 28px rgba(31,36,33,0.07), 0 3px 10px rgba(31,36,33,0.03)",
                      "0 1px 4px rgba(31,36,33,0.03), 0 1px 2px rgba(31,36,33,0.02)",
                    ],
                  }}
                  transition={{
                    y: floatTransition(card.floatDur, card.floatDelay),
                    boxShadow: floatTransition(card.floatDur, card.floatDelay),
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 16px 40px rgba(31,36,33,0.1), 0 6px 16px rgba(31,36,33,0.05)",
                    transition: { duration: 0.3, ease: EASE_SMOOTH },
                  }}
                >
                  {card.visual}
                  <div className="text-center mt-auto pt-2">
                    <h3
                      className="font-bold mb-2 leading-snug"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "clamp(17px, 1.8vw, 20px)",
                        color: "var(--primary)",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="leading-relaxed"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "clamp(13px, 1vw, 14.5px)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {card.body}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}