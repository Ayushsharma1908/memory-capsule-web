import Link from "next/link";
import { notFound } from "next/navigation";

const docs = {
    "installing-chrome-extension": {
        section: "Getting Started",
        title: "Installing the Chrome Extension",
        description:
            "Install Memory Capsule and start saving your AI conversations in a single click.",
        content: [
            {
                heading: "Install the extension",
                paragraphs: [
                    "Memory Capsule works as a Chrome extension that lets you capture useful AI conversations while you work.",
                    "Open the Chrome Web Store and install the Memory Capsule extension.",
                ],
            },
            {
                heading: "Pin Memory Capsule",
                paragraphs: [
                    "After installation, pin Memory Capsule to your Chrome toolbar so it is always available when you need to save something.",
                ],
            },
            {
                heading: "You're ready",
                paragraphs: [
                    "Once installed, open an AI conversation and use Memory Capsule to save useful knowledge for later.",
                ],
            },
        ],
    },

    "connecting-first-ai-chat": {
        section: "Getting Started",
        title: "Connecting your first AI chat",
        description:
            "Learn how Memory Capsule connects to your AI conversations.",
        content: [
            {
                heading: "Open an AI conversation",
                paragraphs: [
                    "Open a supported AI chat and navigate to the conversation you want to remember.",
                ],
            },
            {
                heading: "Capture the conversation",
                paragraphs: [
                    "Use the Memory Capsule extension to capture the conversation and add it to your knowledge base.",
                ],
            },
            {
                heading: "Keep the source",
                paragraphs: [
                    "Memory Capsule keeps the original source associated with your saved knowledge so you can return to it later.",
                ],
            },
        ],
    },

    "first-saved-memory": {
        section: "Getting Started",
        title: "Your first saved memory",
        description:
            "Understand what happens when you save your first piece of knowledge.",
        content: [
            {
                heading: "Save something useful",
                paragraphs: [
                    "When you find an important explanation, solution, idea, or piece of information, save it as a memory.",
                ],
            },
            {
                heading: "Memory processing",
                paragraphs: [
                    "The saved content becomes part of your personal knowledge base and can be organized for future retrieval.",
                ],
            },
            {
                heading: "Find it later",
                paragraphs: [
                    "Instead of searching through old conversations, you can return to your saved memories when you need them.",
                ],
            },
        ],
    },

    "understanding-dashboard": {
        section: "Getting Started",
        title: "Understanding the dashboard",
        description:
            "Learn how to navigate your Memory Capsule knowledge dashboard.",
        content: [
            {
                heading: "Your knowledge overview",
                paragraphs: [
                    "The dashboard gives you an overview of the memories you have collected.",
                ],
            },
            {
                heading: "Memories, tags and collections",
                paragraphs: [
                    "Use the dashboard to understand how your knowledge is organized across memories, tags and collections.",
                ],
            },
            {
                heading: "Track your knowledge",
                paragraphs: [
                    "As your knowledge base grows, the dashboard provides a central place to explore what you have saved.",
                ],
            },
        ],
    },

    "what-is-a-memory": {
        section: "Core Concepts",
        title: "What is a Memory?",
        description:
            "Understand the fundamental unit of knowledge inside Memory Capsule.",
        content: [
            {
                heading: "A memory is reusable knowledge",
                paragraphs: [
                    "A memory represents useful knowledge captured from your AI conversations and other connected sources.",
                ],
            },
            {
                heading: "Why memories matter",
                paragraphs: [
                    "AI conversations can disappear into your chat history. Memories turn useful information into something you can intentionally keep and revisit.",
                ],
            },
        ],
    },

    "how-ai-tagging-works": {
        section: "Core Concepts",
        title: "How AI tagging works",
        description:
            "Learn how memories can be organized using intelligent tags.",
        content: [
            {
                heading: "Automatic organization",
                paragraphs: [
                    "Memory Capsule can associate relevant tags with saved knowledge to make your memories easier to discover.",
                ],
            },
            {
                heading: "Discover related knowledge",
                paragraphs: [
                    "Tags provide another way to navigate your knowledge base without remembering exactly where the original conversation happened.",
                ],
            },
        ],
    },

    "memory-decay-relevance-scoring": {
        section: "Core Concepts",
        title: "Memory decay & relevance scoring",
        description:
            "Understand how relevance can help prioritize useful knowledge.",
        content: [
            {
                heading: "Relevance",
                paragraphs: [
                    "Not every saved memory remains equally important forever. Relevance scoring can help prioritize information when your knowledge base grows.",
                ],
            },
            {
                heading: "Memory decay",
                paragraphs: [
                    "Memory decay represents the idea that older or less relevant information may gradually become less prominent compared with knowledge that continues to matter.",
                ],
            },
        ],
    },

    "collections-workspaces": {
        section: "Core Concepts",
        title: "Collections and workspaces",
        description:
            "Organize your memories into meaningful groups.",
        content: [
            {
                heading: "Collections",
                paragraphs: [
                    "Collections let you group related memories together around a project, subject, or area of interest.",
                ],
            },
            {
                heading: "Workspaces",
                paragraphs: [
                    "Use workspaces to keep different areas of your knowledge separate and easier to manage.",
                ],
            },
        ],
    },

    "chatgpt-integration": {
        section: "Integrations",
        title: "ChatGPT integration",
        description:
            "Learn how to capture knowledge from your ChatGPT conversations.",
        content: [
            {
                heading: "Capture from ChatGPT",
                paragraphs: [
                    "Memory Capsule is designed to capture useful information directly from your AI conversations.",
                ],
            },
            {
                heading: "Save what matters",
                paragraphs: [
                    "When a conversation contains something worth remembering, save it instead of relying on your chat history to find it again.",
                ],
            },
        ],
    },

    "claude-integration": {
        section: "Integrations",
        title: "Claude integration",
        description:
            "Learn how Memory Capsule can be used with Claude conversations.",
        content: [
            {
                heading: "Capture Claude conversations",
                paragraphs: [
                    "Use Memory Capsule to preserve useful knowledge generated during your Claude conversations.",
                ],
            },
            {
                heading: "Build one knowledge base",
                paragraphs: [
                    "Keep knowledge from different AI tools organized in one place instead of maintaining separate memories for every platform.",
                ],
            },
        ],
    },

    "gemini-integration": {
        section: "Integrations",
        title: "Gemini integration",
        description:
            "Learn how to preserve useful knowledge from Gemini.",
        content: [
            {
                heading: "Save useful conversations",
                paragraphs: [
                    "Capture valuable Gemini conversations and preserve the knowledge you want to keep.",
                ],
            },
            {
                heading: "Centralize your knowledge",
                paragraphs: [
                    "Memory Capsule gives you a single place to organize knowledge collected from different AI sources.",
                ],
            },
        ],
    },

    "notion-export": {
        section: "Integrations",
        title: "Notion export",
        description:
            "Learn how your Memory Capsule knowledge can be exported to Notion.",
        content: [
            {
                heading: "Export your knowledge",
                paragraphs: [
                    "Notion export allows your saved knowledge to move into your existing documentation workflow.",
                ],
            },
            {
                heading: "Keep your structure",
                paragraphs: [
                    "Use your exported memories inside Notion alongside the rest of your notes and documentation.",
                ],
            },
        ],
    },

    "obsidian-export": {
        section: "Integrations",
        title: "Obsidian export",
        description:
            "Learn how to move your memories into an Obsidian knowledge workflow.",
        content: [
            {
                heading: "Export memories",
                paragraphs: [
                    "Move useful memories into your Obsidian vault and continue building your personal knowledge graph.",
                ],
            },
            {
                heading: "Build beyond Memory Capsule",
                paragraphs: [
                    "Your knowledge should remain useful wherever you choose to work with it.",
                ],
            },
        ],
    },

    "api-reference": {
        section: "Advanced",
        title: "Using the REST API",
        description:
            "Integrate Memory Capsule with your own applications using the REST API.",
        content: [
            {
                heading: "API overview",
                paragraphs: [
                    "The REST API provides programmatic access to Memory Capsule functionality.",
                ],
            },
            {
                heading: "Authentication",
                paragraphs: [
                    "API requests should be authenticated using the credentials provided by your Memory Capsule setup.",
                ],
            },
            {
                heading: "Endpoints",
                paragraphs: [
                    "Refer to the API reference for available endpoints, request parameters and response formats.",
                ],
            },
        ],
    },

    "webhook-events": {
        section: "Advanced",
        title: "Webhook events",
        description:
            "Use webhook events to react to changes in your knowledge base.",
        content: [
            {
                heading: "What are webhooks?",
                paragraphs: [
                    "Webhooks allow external applications to receive notifications when specific events occur.",
                ],
            },
            {
                heading: "Memory events",
                paragraphs: [
                    "Use webhook events to connect Memory Capsule activity with your own applications and automation workflows.",
                ],
            },
        ],
    },

    "custom-ai-prompts": {
        section: "Advanced",
        title: "Custom AI prompts",
        description:
            "Customize how AI processes and structures your saved knowledge.",
        content: [
            {
                heading: "Why customize prompts?",
                paragraphs: [
                    "Different workflows require different ways of summarizing, tagging and structuring information.",
                ],
            },
            {
                heading: "Build your workflow",
                paragraphs: [
                    "Custom prompts can help you shape AI-generated output around the way you learn and organize information.",
                ],
            },
        ],
    },

    "self-hosting": {
        section: "Advanced",
        title: "Self-hosting",
        description:
            "Run Memory Capsule on your own infrastructure.",
        content: [
            {
                heading: "Coming soon",
                paragraphs: [
                    "Self-hosting support is currently planned for a future release.",
                ],
            },
            {
                heading: "Why self-host?",
                paragraphs: [
                    "Self-hosting will give users greater control over where their Memory Capsule instance and knowledge infrastructure run.",
                ],
            },
        ],
    },
} as const;

type DocSlug = keyof typeof docs;

export function generateStaticParams() {
    return Object.keys(docs).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const doc = docs[slug as DocSlug];

    if (!doc) {
        return {
            title: "Documentation — Memory Capsule",
        };
    }

    return {
        title: `${doc.title} — Memory Capsule`,
        description: doc.description,
    };
}

export default async function DocumentationArticle({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const doc = docs[slug as DocSlug];

    if (!doc) {
        notFound();
    }

    return (
        <div className="inner-page docs-article-page">
            <div className="inner-page-nav">
                <Link href="/docs" className="inner-page-back">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                            d="M10 12L6 8l4-4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    Documentation
                </Link>
            </div>

            <article className="docs-article">
                <div className="docs-article-header">
                    <p className="inner-page-eyebrow">{doc.section}</p>

                    <h1 className="inner-page-title">{doc.title}</h1>

                    <p className="inner-page-subtitle">{doc.description}</p>
                </div>

                <div className="docs-article-content">
                    {doc.content.map((block) => (
                        <section key={block.heading} className="docs-content-section">
                            <h2>{block.heading}</h2>

                            {block.paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </section>
                    ))}
                </div>

                <div className="docs-article-footer">
                    <Link href="/docs" className="docs-back-link">
                        ← Back to documentation
                    </Link>
                </div>
            </article>
        </div>
    );
}