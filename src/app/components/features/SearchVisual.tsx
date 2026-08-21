"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiSearch, FiClock, FiCornerDownRight } from "react-icons/fi";

function OpenAiIcon({ className = "w-3.5 h-3.5", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.56a4.512 4.512 0 0 1-2.89-1.045l.142-.08 4.793-2.766a.765.765 0 0 0 .384-.663v-6.757l2.025 1.17a.747.747 0 0 0 .383.104v5.535a4.544 4.544 0 0 1-4.837 4.507zM3.483 17.51a4.512 4.512 0 0 1-.532-3.027l.142.086 4.793 2.766a.763.763 0 0 0 .767 0l5.852-3.38v2.34a.754.754 0 0 0 .384.662l-4.793 2.766A4.544 4.544 0 0 1 3.483 17.51zm-1.12-10.23a4.514 4.514 0 0 1 2.36-1.982v5.694a.753.754 0 0 0 .383.663l5.852 3.378-2.025 1.17a.766.766 0 0 0-.384.103L3.756 13.54a4.544 4.544 0 0 1-1.393-6.26zm16.59 3.956L13.1 7.856l2.025-1.17a.766.766 0 0 0 .384-.103l4.793 2.766a4.536 4.536 0 0 1-.72 8.16v-5.695a.755.755 0 0 0-.383-.663zm1.96-3.195l-.142-.086-4.793-2.766a.764.764 0 0 0-.767 0L9.36 8.569V6.229a.754.754 0 0 0-.384-.662l4.793-2.766a4.544 4.544 0 0 1 6.782 4.439zM8.337 14.615l-2.025-1.17a.747.747 0 0 0-.383-.104V7.806a4.538 4.538 0 0 1 4.837-4.507 4.512 4.512 0 0 1 2.89 1.045l-.142.08-4.793 2.766a.765.765 0 0 0-.384.663v6.757zm1.183-2.58l2.48-1.43 2.48 1.43v2.86l-2.48 1.43-2.48-1.43v-2.86z" />
    </svg>
  );
}

export default function SearchVisual() {
  const reducedMotion = useReducedMotion();
  const fullText = "binary search java";

  const [displayedQuery, setDisplayedQuery] = useState(() => (reducedMotion ? fullText : ""));
  const [showResults, setShowResults] = useState(() => (reducedMotion ? true : false));

  const results = [
    {
      title: "Binary Search — Java",
      sub: "Saved from ChatGPT",
      icon: OpenAiIcon,
      tag: "Code & Logic",
    },
    {
      title: "Binary Search Edge Cases",
      sub: "Saved 3 days ago",
      icon: FiClock,
      tag: "Notes",
    },
    {
      title: "Binary Search vs Linear Search",
      sub: "Saved from ChatGPT",
      icon: OpenAiIcon,
      tag: "Comparison",
    },
  ];

  useEffect(() => {
    if (reducedMotion) return;

    let isSubscribed = true;

    const runLoop = async () => {
      while (isSubscribed) {
        // Reset state
        setDisplayedQuery("");
        setShowResults(false);

        // Wait before typing
        await new Promise((r) => setTimeout(r, 600));

        // Type query character by character
        for (let i = 1; i <= fullText.length; i++) {
          if (!isSubscribed) return;
          setDisplayedQuery(fullText.substring(0, i));
          await new Promise((r) => setTimeout(r, 70));
        }

        // Delay before revealing search results
        await new Promise((r) => setTimeout(r, 300));
        if (!isSubscribed) return;
        setShowResults(true);

        // Hold results on screen
        await new Promise((r) => setTimeout(r, 3200));
      }
    };

    runLoop();

    return () => {
      isSubscribed = false;
    };
  }, [reducedMotion]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-3 select-none">
      <div className="w-full max-w-[420px] flex flex-col gap-2.5">
        {/* Search Bar Input */}
        <div className="relative w-full">
          <div className="flex items-center gap-2 px-3.5 py-2.5 bg-white border border-[var(--border-strong)] rounded-xl shadow-xs">
            <FiSearch className="w-4 h-4 text-[var(--accent-dark,#8C7A5E)] shrink-0" />

            <div className="flex-1 font-mono text-[12px] text-[var(--primary)] font-medium tracking-tight overflow-hidden">
              {displayedQuery ? (
                <span>{displayedQuery}</span>
              ) : (
                <span className="text-[var(--text-tertiary)] font-sans">
                  Search your memories...
                </span>
              )}
              <motion.span
                className="inline-block w-0.5 h-3.5 bg-[var(--primary)] ml-0.5 align-middle"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </div>

            <span className="text-[9.5px] font-medium text-[var(--text-tertiary)] bg-[#FAF8F4] px-1.5 py-0.5 rounded border border-[var(--border)] font-mono">
              ⌘K
            </span>
          </div>
        </div>

        {/* Search Results List */}
        <div className="flex flex-col gap-1.5 min-h-[145px]">
          {results.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-[var(--border)] shadow-2xs hover:border-[var(--border-strong)] transition-all cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: showResults ? 1 : 0,
                  y: showResults ? 0 : 10,
                }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
              >
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="w-6 h-6 rounded-md bg-[#FAF8F4] border border-[var(--border)] flex items-center justify-center shrink-0">
                    <IconComp className="w-3.5 h-3.5 text-[var(--primary)]" />
                  </div>

                  <div className="flex flex-col overflow-hidden">
                    <span className="text-[11.5px] font-semibold text-[var(--primary)] truncate font-heading">
                      {item.title}
                    </span>
                    <span className="text-[10px] text-[var(--text-secondary)] truncate">
                      {item.sub}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 ml-2">
                  <span className="text-[9px] font-medium px-2 py-0.5 rounded-md bg-[#FAF8F4] border border-[var(--border)] text-[var(--text-secondary)]">
                    {item.tag}
                  </span>
                  <FiCornerDownRight className="w-3 h-3 text-[var(--text-tertiary)]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
