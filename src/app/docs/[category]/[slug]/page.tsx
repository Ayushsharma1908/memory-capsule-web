import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDocArticle, ALL_DOCS } from "@/lib/docs";
import DocsArticle from "@/components/docs/DocsArticle";

export function generateStaticParams() {
  return ALL_DOCS.map((doc) => ({
    category: doc.categorySlug,
    slug: doc.slug,
  }));
}

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
