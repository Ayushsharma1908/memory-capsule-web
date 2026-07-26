import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
