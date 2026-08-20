import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDocArticle, ALL_DOCS } from "@/lib/docs";
import DocsArticle from "../../components/DocsArticle";

// ── Static params ───────────────────────────────────────────
// Pre-generate all [category]/[slug] combinations at build time.

export function generateStaticParams() {
  return ALL_DOCS.map((doc) => ({
    category: doc.categorySlug,
    slug: doc.slug,
  }));
}

// ── Per-page metadata ───────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getDocArticle(category, slug);

  if (!article) {
    return {
      title: "Documentation — Memory Capsule",
    };
  }

  return {
    title: `${article.title} — Memory Capsule`,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      title: `${article.title} — Memory Capsule`,
      description: article.description,
    },
  };
}

// ── Page component ──────────────────────────────────────────

export default async function DocArticlePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const article = getDocArticle(category, slug);

  if (!article) {
    notFound();
  }

  return <DocsArticle article={article} />;
}
