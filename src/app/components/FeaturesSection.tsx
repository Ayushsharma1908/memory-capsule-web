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
      setTimeout(() => setShowToast(false), 2700);
    }
    const initialDelay = setTimeout(runCycle, 1000);
    const interval = setInterval(runCycle, 4500);
    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="relative w-full rounded-2xl border overflow-hidden flex flex-col"
      style={{ background: "#FDFCFA", borderColor: "var(--border)", height: 240, marginBottom: 28 }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-4 border-b flex-shrink-0"
        style={{ height: 32, background: "#F5F3EF", borderColor: "var(--border)" }}
      >
        <span className="w-2 h-2 rounded-full" style={{ background: "#E8E4DC" }} />
        <span className="w-2 h-2 rounded-full" style={{ background: "#E8E4DC" }} />
        <span className="w-2 h-2 rounded-full" style={{ background: "#E8E4DC" }} />
        <div className="flex-1 mx-4 h-3 rounded-md" style={{ background: "#EDEAE4" }} />
      </div>

      {/* Chat skeleton */}
      <div className="flex-1 p-5 flex flex-col gap-3 relative overflow-hidden">
        <div className="flex gap-3 items-start">
          <div className="w-6 h-6 rounded-full flex-shrink-0" style={{ background: "#E5E2DC" }} />
          <div className="h-2.5 rounded-md mt-1.5" style={{ width: "65%", background: "#F0EDE6" }} />
        </div>
        <div className="flex gap-3 items-start">
          <div className="w-6 h-6 rounded-md flex-shrink-0" style={{ background: "#D8C3A5" }} />
          <div className="flex-1 space-y-2 mt-1">
            <div className="h-2 rounded-md" style={{ width: "100%", background: "#F0EDE6" }} />
            <div className="h-2 rounded-md" style={{ width: "80%", background: "#F0EDE6" }} />
            <div className="h-2 rounded-md" style={{ width: "60%", background: "#F0EDE6" }} />
          </div>
        </div>

        {/* Toast + button */}
        <div className="absolute right-4 bottom-4 flex flex-col items-end gap-2">
          <AnimatePresence>
            {showToast && (
              <motion.div
                key="toast"
                initial={{ opacity: 0, y: 8, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.94 }}
                transition={{ duration: 0.22 }}
                className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-lg"
                style={{ background: "var(--primary)" }}
              >
                <FiCheck size={11} style={{ color: "#D8C3A5" }} />
                Saved to Memory Capsule
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium border select-none cursor-default"
            style={{
              background: "white",
              borderColor: "var(--border-strong)",
              color: "var(--primary)",
              boxShadow: "0 1px 4px rgba(31,36,33,0.04)",
            }}
            animate={
              clicking
                ? { scale: 0.93, background: "var(--accent-light)" }
                : { scale: [1, 1.03, 1] }
            }
            transition={
              clicking
                ? { duration: 0.14, ease: "easeOut" }
                : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
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
        height: 240,
        marginBottom: 28,
        background: "linear-gradient(135deg, #FAF8F4 0%, #F5F1EA 100%)",
        border: "1px solid var(--border)",
      }}
    >
      <div className="relative" style={{ width: 210, height: 170 }}>
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
              scale: 1 - i * 0.035,
              boxShadow: "0 2px 10px rgba(31,36,33,0.05)",
            }}
            animate={{ y: [i * 28 - 2, i * 28 + 3, i * 28 - 2] }}
            transition={floatTransition(3.8 + i * 0.6, i * 0.4)}
          >
            <div className="flex items-center gap-2 mb-2.5">
              <FiFolder size={13} style={{ color: "var(--text-tertiary)" }} />
              <span className="text-xs font-semibold" style={{ color: "var(--primary)" }}>
                {card.label}
              </span>
            </div>
            <div
              className="h-1.5 rounded-full"
              style={{ width: card.width, background: "var(--accent-light)" }}
            />
          </motion.div>
        ))}

        <motion.div
          className="absolute flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold shadow-lg"
          style={{
            background: "var(--primary)",
            color: "var(--accent)",
            top: -22,
            right: -30,
            zIndex: 30,
          }}
          animate={{
            scale: [1, 1.08, 1],
            boxShadow: [
              "0 4px 14px rgba(31,36,33,0.10)",
              "0 6px 22px rgba(31,36,33,0.18)",
              "0 4px 14px rgba(31,36,33,0.10)",
            ],
          }}
          transition={floatTransition(2.6)}
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
        t = setTimeout(() => setShown(full.slice(0, shown.length + 1)), 72);
      } else {
        t = setTimeout(() => setPhase("holding"), 1500);
      }
    } else if (phase === "holding") {
      t = setTimeout(() => setPhase("deleting"), 700);
    } else {
      if (shown.length > 0) {
        t = setTimeout(() => setShown(full.slice(0, shown.length - 1)), 40);
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
      className="relative w-full rounded-2xl flex flex-col gap-3 overflow-hidden"
      style={{ height: 240, marginBottom: 28, background: "var(--bg)", padding: "18px 20px", border: "1px solid var(--border)" }}
    >
      {/* Search bar */}
      <div
        className="flex items-center gap-3 rounded-xl border px-4 flex-shrink-0"
        style={{
          height: 44,
          background: "white",
          borderColor: "var(--border-strong)",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        <FiSearch size={16} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} />
        <div
          className="flex items-center flex-1 h-5 font-mono text-sm overflow-hidden"
          style={{ color: "var(--primary)" }}
        >
          <span>{shown}</span>
          <motion.span
            className="inline-block rounded-sm ml-px flex-shrink-0"
            style={{ width: 2, height: 15, background: "var(--primary)" }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.75, ease: "linear" }}
          />
        </div>
      </div>

      {/* Results */}
      <AnimatePresence mode="wait">
        {showResults && (
          <motion.div
            key={`${qIdx}-${showResults}`}
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2 }}
          >
            {q.results.map((r, i) => {
              const parts = r.hl ? r.title.split(r.hl) : [r.title];
              return (
                <div
                  key={i}
                  className="rounded-xl px-4 py-3"
                  style={{
                    background: "white",
                    border: "1px solid var(--border)",
                    borderLeftWidth: i === 0 ? 3 : 1,
                    borderLeftColor: i === 0 ? "var(--accent)" : "var(--border)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <p className="text-sm font-semibold" style={{ color: "var(--primary)" }}>
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
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
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
   VISUAL 4 — Build (Redesigned with light theme)
   ───────────────────────────────────────────── */
function useCountUp(target: number, inView: boolean) {
  const [val, setVal] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (!inView || done.current) return;
    done.current = true;
    const steps = 38;
    const stepMs = 1100 / steps;
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
        height: 240,
        marginBottom: 28,
        background: "var(--bg)",
        border: "1px solid var(--border)",
        padding: "16px",
      }}
    >
      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl flex flex-col gap-1 border"
            style={{
              background: "white",
              borderColor: "var(--border)",
              padding: "10px 12px",
            }}
          >
            <div className="flex items-center gap-1.5" style={{ color: "var(--text-tertiary)" }}>
              <s.icon size={11} />
              <span
                className="uppercase tracking-wider font-medium"
                style={{ fontSize: 9, color: "var(--text-tertiary)" }}
              >
                {s.label}
              </span>
            </div>
            <span className="font-bold" style={{ fontSize: 20, color: "var(--primary)" }}>
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
          style={{ fontSize: 9, color: "var(--text-tertiary)" }}
        >
          Knowledge Growth
        </span>
        <div className="flex items-end gap-1 w-full mt-2" style={{ height: 44 }}>
          {bars.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t-sm"
              style={{ background: "var(--accent)", opacity: 0.85 }}
              animate={{ height: [`${h * 3}%`, `${h * 5}%`, `${h * 3}%`] }}
              transition={floatTransition(3.5 + i * 0.18, i * 0.12)}
            />
          ))}
        </div>

        {/* Sweeping glow */}
        <motion.div
          className="absolute bottom-0 pointer-events-none"
          style={{
            height: 36,
            width: "35%",
            background: "linear-gradient(to top, rgba(216,195,165,0.25), transparent)",
            filter: "blur(10px)",
          }}
          animate={{ left: ["-5%", "70%", "-5%"] }}
          transition={floatTransition(5, 0)}
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
    body: "Save meaningful ChatGPT conversations with one click. Whether it's coding solutions, career advice, project ideas, or research — never lose valuable knowledge again.",
    floatDur: 7,
    floatDelay: 0,
  },
  {
    visual: <OrganizeVisual />,
    title: "Organized automatically",
    body: "Every saved conversation is intelligently categorized using AI. Generate titles, summaries, collections, and tags automatically without manual effort.",
    floatDur: 8,
    floatDelay: 0.5,
  },
  {
    visual: <FindVisual />,
    title: "Find anything instantly",
    body: "Search memories using keywords, natural language, tags, or topics. Your knowledge is always just seconds away.",
    floatDur: 6.5,
    floatDelay: 0.3,
  },
  {
    visual: <BuildVisual />,
    title: "Build your second brain",
    body: "Memory Capsule grows into your personal knowledge hub where your conversations become searchable, long-term knowledge instead of disappearing forever.",
    floatDur: 7.5,
    floatDelay: 0.7,
  },
];

/* ─────────────────────────────────────────────
   SECTION
   ───────────────────────────────────────────── */
export default function FeaturesSection() {
  return (
    <section
      className="relative w-full overflow-hidden flex justify-center"
      style={{ background: "var(--bg-outer)", paddingTop: 100, paddingBottom: 120 }}
      id="features"
      aria-label="Features"
    >
      {/* Ambient radial */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(216,195,165,0.055) 0%, transparent 70%)",
        }}
      />

      {/* Centered content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        {/* Section header */}
        <motion.div
          className="mb-16 md:mb-20 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE_SMOOTH }}
        >
          <span
            className="block uppercase font-semibold mb-4"
            style={{
              fontSize: 11,
              letterSpacing: "0.22em",
              color: "var(--accent)",
              fontFamily: "var(--font-body)",
            }}
          >
            Everything you need
          </span>
          <h2
            className="font-bold leading-[1.07]"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(36px, 5vw, 62px)",
              color: "#FAF8F4",
              letterSpacing: "-0.03em",
              marginBottom: 18,
            }}
          >
            Your knowledge,{" "}
            <span style={{ color: "var(--accent)" }}>amplified</span>
          </h2>
          <p
            className="leading-relaxed mx-auto"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(14.5px, 1.5vw, 17px)",
              color: "rgba(250,248,244,0.48)",
              maxWidth: 440,
            }}
          >
            From capturing to recalling — Memory Capsule handles the entire lifecycle of your knowledge.
          </p>
        </motion.div>

        {/* Outer rounded container — acts as a subtle frame */}
        <div
          className="w-full max-w-5xl mx-auto rounded-[32px] md:rounded-[44px] p-3 md:p-4"
          style={{ background: "rgba(236, 230, 220, 0.35)", border: "1px solid rgba(236, 230, 220, 0.15)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                className="h-full"
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: EASE_SMOOTH }}
              >
                <motion.div
                  className="relative flex flex-col overflow-hidden h-full"
                  style={{
                    background: "white",
                    borderRadius: 24,
                    padding: "36px 32px 40px",
                    border: "1px solid var(--border)",
                  }}
                  animate={{
                    y: [-2, 2, -2],
                    boxShadow: [
                      "0 2px 8px rgba(31,36,33,0.03), 0 1px 3px rgba(31,36,33,0.02)",
                      "0 12px 32px rgba(31,36,33,0.08), 0 4px 12px rgba(31,36,33,0.04)",
                      "0 2px 8px rgba(31,36,33,0.03), 0 1px 3px rgba(31,36,33,0.02)",
                    ],
                  }}
                  transition={{
                    y: floatTransition(card.floatDur, card.floatDelay),
                    boxShadow: floatTransition(card.floatDur, card.floatDelay),
                  }}
                >
                  {card.visual}
                  <div className="text-center mt-auto">
                    <h3
                      className="font-bold mb-3 leading-snug"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "clamp(18px, 2vw, 22px)",
                        color: "var(--primary)",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="leading-relaxed"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "clamp(13.5px, 1.1vw, 15px)",
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
        </div>
      </div>
    </section>
  );
}