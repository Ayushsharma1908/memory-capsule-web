import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — Memory Capsule",
  description: "Simple, transparent pricing for Memory Capsule. Start free, upgrade when you're ready.",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for individuals exploring AI memory.",
    features: [
      "Up to 500 saved memories",
      "Chrome Extension",
      "Basic AI tagging",
      "7-day search history",
      "Community support",
    ],
    cta: "Get Started Free",
    href: "#",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    description: "For power users who live in AI conversations.",
    features: [
      "Unlimited saved memories",
      "Advanced AI summarization",
      "Full search history",
      "Priority AI processing",
      "Export to Notion / Obsidian",
      "Email support",
    ],
    cta: "Start Pro Trial",
    href: "#",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Team",
    price: "$29",
    period: "per month",
    description: "Shared knowledge base for teams building with AI.",
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Shared memory workspace",
      "Admin controls",
      "SSO / SAML (coming soon)",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    href: "mailto:hi@memorycapsule.app",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="inner-page">
      <div className="inner-page-nav">
        <Link href="/" className="inner-page-back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back home
        </Link>
      </div>

      <div className="inner-page-content">
        <div className="inner-page-hero">
          <p className="inner-page-eyebrow">Pricing</p>
          <h1 className="inner-page-title">Simple, honest pricing</h1>
          <p className="inner-page-subtitle">
            Start free. No credit card required. Upgrade when AI memory becomes indispensable.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.highlight ? "pricing-card--highlight" : ""}`}
            >
              {plan.badge && (
                <div className="pricing-badge">{plan.badge}</div>
              )}
              <div className="pricing-card-header">
                <p className="pricing-plan-name">{plan.name}</p>
                <div className="pricing-price-row">
                  <span className="pricing-price">{plan.price}</span>
                  <span className="pricing-period">/{plan.period}</span>
                </div>
                <p className="pricing-description">{plan.description}</p>
              </div>
              <ul className="pricing-features">
                {plan.features.map((f) => (
                  <li key={f} className="pricing-feature">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 7l3.5 3.5 5.5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={plan.href} className={`pricing-cta ${plan.highlight ? "pricing-cta--primary" : "pricing-cta--ghost"}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="pricing-faq">
          <h2 className="pricing-faq-title">Frequently asked questions</h2>
          <div className="pricing-faq-grid">
            {[
              { q: "Can I cancel anytime?", a: "Yes — cancel from your dashboard with one click. No questions asked." },
              { q: "What counts as a 'memory'?", a: "Any captured insight, summary, or snippet saved from your AI conversations." },
              { q: "Is there a student discount?", a: "Yes. Email us with your .edu address for 50% off Pro." },
              { q: "Will you raise prices?", a: "Grandfathered pricing for all early adopters. Your rate locks in forever." },
            ].map(({ q, a }) => (
              <div key={q} className="pricing-faq-item">
                <p className="pricing-faq-q">{q}</p>
                <p className="pricing-faq-a">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
