"use client";

import { motion } from "framer-motion";
import CaptureVisual from "./features/CaptureVisual";
import SummarizationVisual from "./features/SummarizationVisual";
import OrganizationVisual from "./features/OrganizationVisual";
import SearchVisual from "./features/SearchVisual";
import KnowledgeGraphVisual from "./features/KnowledgeGraphVisual";

const EASE_SMOOTH = [0.4, 0, 0.2, 1] as const;

const CARDS = [
  {
    index: "01",
    title: "Universal Capture",
    body: "Save useful conversations and knowledge from the AI tools you already use.",
    visual: <CaptureVisual />,
    colClass: "features-col-3",
  },
  {
    index: "02",
    title: "AI Summarization",
    body: "Turn long conversations into concise knowledge you can actually remember.",
    visual: <SummarizationVisual />,
    colClass: "features-col-3",
  },
  {
    index: "03",
    title: "Smart Organization",
    body: "Automatically turn saved conversations into structured, discoverable knowledge.",
    visual: <OrganizationVisual />,
    colClass: "features-col-2",
  },
  {
    index: "04",
    title: "Search & Recall",
    body: "Find the knowledge you've already learned instead of searching through old chats again.",
    visual: <SearchVisual />,
    colClass: "features-col-4",
  },
  {
    index: "05",
    title: "Knowledge That Stays",
    body: "Your saved conversations become a personal knowledge base that grows with everything you learn.",
    visual: <KnowledgeGraphVisual />,
    colClass: "features-col-6",
  },
];

export default function FeaturesSection() {
  return (
    <section className="features-section" id="features" aria-label="Features">
      {/* Hairline Separator at top edge matching design system */}
      <div className="features-separator" aria-hidden="true" />

      {/* Subtle ambient radial glow for soft depth */}
      <div className="features-ambient-glow" aria-hidden="true" />

      <div className="features-container">
        {/* Section Header */}
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE_SMOOTH }}
        >
          <span className="features-eyebrow">EVERYTHING YOU LEARN</span>

          <h2 className="features-title">Your conversations become knowledge.</h2>

          <p className="features-subtitle">
            Memory Capsule captures the useful parts of your AI conversations, organizes them, and
            makes them easy to find when you need them again.
          </p>
        </motion.div>

        {/* Asymmetric Editorial Grid */}
        <div className="features-grid">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              className={card.colClass}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_SMOOTH }}
            >
              <div className="features-card">
                {/* Visual Area (approx 55-65% height) */}
                <div className="features-card-visual">{card.visual}</div>

                {/* Divider Line */}
                <div className="features-card-divider" aria-hidden="true" />

                {/* Text Content Area */}
                <div className="features-card-content">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="features-card-num">{card.index}</span>
                  </div>
                  <h3 className="features-card-title">{card.title}</h3>
                  <p className="features-card-desc">{card.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}