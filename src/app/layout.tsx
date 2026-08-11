import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Memory Capsule — The Memory Layer for AI Conversations",
  description:
    "Capture conversations, generate structured knowledge, and build a searchable memory across your AI chats. Never lose what you learn from AI.",
  keywords: [
    "AI memory",
    "conversation capture",
    "ChatGPT memory",
    "knowledge base",
    "AI assistant",
    "Chrome extension",
  ],
  openGraph: {
    title: "Memory Capsule — The Memory Layer for AI Conversations",
    description:
      "Never lose what you learn from AI. Capture, organize and search your AI conversations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="fixed top-0 left-0 right-0 z-50" aria-label="Global navigation">
          <Navbar />
        </nav>
        <main className="pt-[80px]">
          {children}
        </main>
      </body>
    </html>
  );
}
