import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Memory Capsule",
  description: "Thoughts on AI, memory, knowledge management and building in public from the Memory Capsule team.",
};

const posts = [
  {
    slug: "why-ai-conversations-are-ephemeral",
    title: "Why your best AI conversations keep disappearing",
    excerpt: "We've all been there — a breakthrough conversation that produced a perfect framework, and then… nothing. The problem isn't AI. It's memory.",
    date: "August 10, 2025",
    readTime: "5 min read",
    tag: "Product",
  },
  {
    slug: "building-in-public-week-1",
    title: "Building in public: Week 1",
    excerpt: "We committed to shipping Memory Capsule in the open. Here's what the first week looked like, including a mistake we made with our Chrome extension manifest.",
    date: "August 5, 2025",
    readTime: "4 min read",
    tag: "Building in Public",
  },
  {
    slug: "ai-memory-vs-context-windows",
    title: "AI memory vs. context windows: they're not the same thing",
    excerpt: "A lot of people confuse 'long context' with 'memory'. They're fundamentally different, and understanding the distinction changes how you think about personal knowledge.",
    date: "July 28, 2025",
    readTime: "7 min read",
    tag: "Deep Dive",
  },
  {
    slug: "the-case-for-open-source-memory",
    title: "The case for open-source AI memory tools",
    excerpt: "When the tool knows everything you've thought about, it should be transparent and auditable. Here's why we chose to open source Memory Capsule from day one.",
    date: "July 15, 2025",
    readTime: "6 min read",
    tag: "Philosophy",
  },
];

const tagColors: Record<string, string> = {
  "Product": "blog-tag--product",
  "Building in Public": "blog-tag--bip",
  "Deep Dive": "blog-tag--deep",
  "Philosophy": "blog-tag--phil",
};

export default function BlogPage() {
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
          <p className="inner-page-eyebrow">Blog</p>
          <h1 className="inner-page-title">Thinking out loud</h1>
          <p className="inner-page-subtitle">
            Ideas on AI, memory, knowledge management and what it means to build in public.
          </p>
        </div>

        <div className="blog-list">
          {posts.map((post) => (
            <article key={post.slug} className="blog-card">
              <div className="blog-card-meta">
                <span className={`blog-tag ${tagColors[post.tag] ?? ""}`}>{post.tag}</span>
                <span className="blog-date">{post.date}</span>
                <span className="blog-read-time">{post.readTime}</span>
              </div>
              <h2 className="blog-card-title">
                <a href={`/blog/${post.slug}`} className="blog-card-link">{post.title}</a>
              </h2>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <a href={`/blog/${post.slug}`} className="blog-card-cta">
                Read post →
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
