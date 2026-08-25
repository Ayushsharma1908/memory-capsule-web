import type { Metadata } from "next";
import DocsSidebar from "@/components/docs/DocsSidebar";

export const metadata: Metadata = {
  title: "Documentation — Memory Capsule",
  description:
    "Guides, references, and examples to help you build your personal AI memory layer.",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="docs-layout">
      <DocsSidebar />
      <main className="docs-main" id="docs-main-content">
        {children}
      </main>
    </div>
  );
}
