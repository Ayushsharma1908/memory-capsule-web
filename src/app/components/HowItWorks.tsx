"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="how-container">
        {/* Section Header */}
        <div className="how-header">
          <div className="how-eyebrow">Seamless Knowledge Workflow</div>
          <h2 className="how-title">How Memory Capsule Works</h2>
          <p className="how-subtitle">
            Turn fragmented AI chats across multiple platforms into an organized, searchable personal knowledge base.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="how-grid">
          {/* Step 1 */}
          <motion.div
            className="how-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="how-step-num">STEP 01</div>
            <h3 className="how-card-title">Capture Conversations</h3>
            <p className="how-card-desc">
              Automatically save your prompts and AI answers from ChatGPT, Claude, Gemini, and Perplexity without friction.
            </p>

            {/* Extension Popup Visual Mockup */}
            <div className="how-visual-box">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981" }} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#1F2421", letterSpacing: "0.02em" }}>Extension Active</span>
                </div>
                <span style={{ fontSize: 10, background: "#EAE0CE", padding: "2px 8px", borderRadius: 999, fontWeight: 600, color: "#1F2421" }}>Auto-Sync</span>
              </div>
              <div style={{ background: "#FFFFFF", borderRadius: 10, padding: 12, border: "1px solid #ECE6DC", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 600, color: "#1F2421" }}>
                  <span style={{ background: "#1F2421", color: "#FFF", borderRadius: 4, padding: "2px 6px", fontSize: 10 }}>ChatGPT</span>
                  <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>React Component Performance</span>
                </div>
                <div style={{ fontSize: 11, color: "#71717A", marginTop: 4 }}>Saved 4 key insights & 1 code snippet</div>
              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="how-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="how-step-num">STEP 02</div>
            <h3 className="how-card-title">Generate Memory Capsule</h3>
            <p className="how-card-desc">
              AI synthesizes lengthy threads into structured key takeaways, executive summaries, and searchable topic tags.
            </p>

            {/* Structured Capsule Visual Mockup */}
            <div className="how-visual-box">
              <div style={{ fontSize: 9, fontWeight: 700, color: "#D8C3A5", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
                CAPSULE GENERATED
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#1F2421", marginBottom: 8 }}>
                Binary Search & Time Complexity
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                <span style={{ background: "#F7F4EE", border: "1px solid #ECE6DC", padding: "3px 8px", borderRadius: 999, fontSize: 10, fontWeight: 500, color: "#1F2421" }}>#Algorithms</span>
                <span style={{ background: "#F7F4EE", border: "1px solid #ECE6DC", padding: "3px 8px", borderRadius: 999, fontSize: 10, fontWeight: 500, color: "#1F2421" }}>#DSA</span>
                <span style={{ background: "#F7F4EE", border: "1px solid #ECE6DC", padding: "3px 8px", borderRadius: 999, fontSize: 10, fontWeight: 500, color: "#1F2421" }}>#O(log n)</span>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="how-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="how-step-num">STEP 03</div>
            <h3 className="how-card-title">Search & Continue Anywhere</h3>
            <p className="how-card-desc">
              Instantly find any past solution with command-palette search and resume conversations seamlessly.
            </p>

            {/* Command Palette Visual Mockup */}
            <div className="how-visual-box" style={{ padding: 14 }}>
              <div style={{ background: "#FFFFFF", borderRadius: 10, padding: "8px 12px", border: "1px solid #D8C3A5", display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <span style={{ color: "#71717A", fontSize: 12 }}>🔍</span>
                <span style={{ fontSize: 12, fontWeight: 500, color: "#1F2421" }}>JWT Auth Implementation</span>
                <span style={{ marginLeft: "auto", fontSize: 10, background: "#F7F4EE", padding: "2px 6px", borderRadius: 4, color: "#71717A" }}>⌘K</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 11, color: "#71717A" }}>
                <span>Found in 2.4ms</span>
                <span style={{ fontWeight: 600, color: "#1F2421", cursor: "pointer" }}>Continue Chat ➔</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
