
export type CalloutType = "note" | "warning" | "tip";

export interface DocCallout {
  type: CalloutType;
  text: string;
}

export type ContentBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "heading"; level: 2 | 3; text: string }
  | { kind: "ordered-list"; items: string[] }
  | { kind: "unordered-list"; items: string[] }
  | { kind: "code"; language: string; code: string }
  | { kind: "callout"; calloutType: CalloutType; title?: string; text: string }
  | { kind: "table"; headers: string[]; rows: string[][] };

export interface DocArticle {
  category: string;
  categorySlug: string;
  slug: string;
  href: string;
  title: string;
  description: string;
  lastUpdated: string;
  keywords: string[];
  content: ContentBlock[];
}

export interface DocCategory {
  id: string;
  title: string;
  articles: DocArticle[];
}

const DOCS: DocArticle[] = [

  {
    category: "Getting Started",
    categorySlug: "getting-started",
    slug: "install",
    href: "/docs/getting-started/install",
    title: "Installing the Chrome Extension",
    description:
      "Install Memory Capsule in Chrome and start capturing AI conversations in under two minutes.",
    lastUpdated: "August 2025",
    keywords: [
      "install",
      "chrome",
      "extension",
      "setup",
      "browser",
      "pin",
      "permissions",
    ],
    content: [
      {
        kind: "heading",
        level: 2,
        text: "What is Memory Capsule?",
      },
      {
        kind: "paragraph",
        text: "Memory Capsule is a Chrome extension that sits quietly in your browser and lets you capture, organize, and search the useful knowledge you generate inside AI conversations. Instead of losing insights to chat history, you save them as structured memories you can recall later.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Chrome Requirements",
      },
      {
        kind: "unordered-list",
        items: [
          "Google Chrome version 114 or later (recommended: latest stable)",
          "A Google account to sync extension settings (optional)",
          "An active internet connection for cloud sync (offline capture works locally)",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Installing from the Chrome Web Store",
      },
      {
        kind: "callout",
        calloutType: "note",
        text: "Memory Capsule is currently in active development. The Chrome Web Store listing will be available at public launch. Until then, follow the developer installation instructions below.",
      },
      {
        kind: "ordered-list",
        items: [
          "Visit the Chrome Web Store and search for \"Memory Capsule\".",
          "Click Add to Chrome on the extension listing.",
          "A permissions dialog will appear — review and click Add extension.",
          "Chrome will download and install the extension automatically.",
          "A confirmation toast will briefly appear in the top-right corner of your browser.",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Loading the Extension in Developer Mode",
      },
      {
        kind: "paragraph",
        text: "If the extension is not yet published on the Chrome Web Store, you can load it directly from the source repository.",
      },
      {
        kind: "ordered-list",
        items: [
          "Clone or download the Memory Capsule repository from GitHub.",
          "Open Chrome and navigate to chrome://extensions in your address bar.",
          "Enable Developer mode using the toggle in the top-right corner.",
          "Click Load unpacked.",
          "Select the extension build folder (usually /extension/dist or /build) from the cloned repository.",
          "The Memory Capsule extension will appear in your extensions list.",
        ],
      },
      {
        kind: "callout",
        calloutType: "warning",
        text: "Developer mode extensions are not automatically updated. You will need to reload the extension manually after pulling new changes from the repository.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Extension Permissions",
      },
      {
        kind: "paragraph",
        text: "Memory Capsule requests the following permissions to function correctly:",
      },
      {
        kind: "table",
        headers: ["Permission", "Why it is needed"],
        rows: [
          ["activeTab", "Read the current tab to detect AI chat pages"],
          [
            "storage",
            "Store your memories and settings locally in the browser",
          ],
          [
            "scripting",
            "Inject the capture interface into supported AI chat pages",
          ],
          [
            "tabs",
            "Detect navigation between pages to track source conversation URLs",
          ],
        ],
      },
      {
        kind: "callout",
        calloutType: "note",
        text: "Memory Capsule does not read or transmit the content of pages that are not supported AI chat platforms. Your general browsing activity is never accessed.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Pinning the Extension",
      },
      {
        kind: "paragraph",
        text: "Pinning Memory Capsule to your Chrome toolbar means it is always one click away when you want to save something from an AI conversation.",
      },
      {
        kind: "ordered-list",
        items: [
          "Click the Extensions icon (the puzzle piece) in the Chrome toolbar.",
          "Find Memory Capsule in the list.",
          "Click the pin icon next to it.",
          "The Memory Capsule icon will now appear permanently in your toolbar.",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Verifying the Installation",
      },
      {
        kind: "ordered-list",
        items: [
          "Open ChatGPT (chat.openai.com) or another supported AI platform.",
          "Click the Memory Capsule icon in the Chrome toolbar.",
          "If the extension popup opens correctly, the installation is working.",
          "You will see a welcome message on first launch.",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "First-Time Setup",
      },
      {
        kind: "paragraph",
        text: "On first launch, Memory Capsule will walk you through a brief onboarding flow:",
      },
      {
        kind: "ordered-list",
        items: [
          "Choose whether to enable cloud sync or keep memories local only.",
          "Select your preferred default AI platform (you can change this later).",
          "Optionally create your first collection to organize memories.",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Common Installation Problems",
      },
      {
        kind: "table",
        headers: ["Problem", "Solution"],
        rows: [
          [
            "Extension icon does not appear after install",
            "Click the puzzle icon in Chrome toolbar → pin Memory Capsule",
          ],
          [
            "Popup does not open on AI chat pages",
            "Refresh the AI chat page and try again",
          ],
          [
            "Load unpacked button is greyed out",
            "Enable Developer mode in chrome://extensions first",
          ],
          [
            "Extension crashes on open",
            "Try removing and reinstalling the extension, or check the GitHub issues page",
          ],
        ],
      },
    ],
  },

  {
    category: "Getting Started",
    categorySlug: "getting-started",
    slug: "connect-chat",
    href: "/docs/getting-started/connect-chat",
    title: "Connecting Your First AI Chat",
    description:
      "Learn how Memory Capsule connects to AI conversations and what gets captured.",
    lastUpdated: "August 2025",
    keywords: [
      "connect",
      "chat",
      "ai",
      "chatgpt",
      "capture",
      "conversation",
      "first",
      "source",
    ],
    content: [
      {
        kind: "heading",
        level: 2,
        text: "How Memory Capsule Connects to AI Conversations",
      },
      {
        kind: "paragraph",
        text: "Memory Capsule does not require you to create an account on any AI platform or grant special API access. It works directly inside your browser by detecting when you are on a supported AI chat page and making it easy to capture useful exchanges with a single action.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Supported AI Platforms",
      },
      {
        kind: "paragraph",
        text: "Memory Capsule currently supports the following AI platforms:",
      },
      {
        kind: "table",
        headers: ["Platform", "Status"],
        rows: [
          ["ChatGPT (chat.openai.com)", "Supported"],
          ["Claude (claude.ai)", "Coming Soon"],
          ["Gemini (gemini.google.com)", "Coming Soon"],
        ],
      },
      {
        kind: "callout",
        calloutType: "note",
        text: "Additional platform support is planned. Claude and Gemini integrations are in development and will be released in a future update.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Connecting Your First Chat",
      },
      {
        kind: "ordered-list",
        items: [
          "Open a supported AI platform (for example, ChatGPT at chat.openai.com).",
          "Have a conversation with the AI as you normally would.",
          "When you find a response worth keeping, click the Memory Capsule icon in your Chrome toolbar.",
          "The Memory Capsule popup will open, showing a capture panel.",
          "Select the portion of the conversation you want to save, or use the one-click capture to save the full exchange.",
          "Click Save Memory.",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "What Data Is Captured",
      },
      {
        kind: "unordered-list",
        items: [
          "The selected AI response or conversation exchange",
          "The source platform name (e.g. ChatGPT)",
          "The source URL of the conversation",
          "A timestamp of when the memory was captured",
          "Any tags or collections you assign at the time of capture",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "What Is NOT Captured",
      },
      {
        kind: "unordered-list",
        items: [
          "Your AI platform account credentials or session tokens",
          "Conversations you did not explicitly choose to capture",
          "Other browser tabs or pages unrelated to supported AI platforms",
          "Your general browsing history",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "How a Conversation Becomes a Memory",
      },
      {
        kind: "paragraph",
        text: "When you save a conversation segment, Memory Capsule processes it into a structured memory:",
      },
      {
        kind: "ordered-list",
        items: [
          "The raw conversation text is stored.",
          "The source URL and platform are attached as metadata.",
          "The content is analyzed and relevant tags are suggested.",
          "The memory becomes immediately searchable in your dashboard.",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Source Information",
      },
      {
        kind: "paragraph",
        text: "Every memory keeps a reference to where it came from. This means you can always return to the original AI conversation from within your Memory Capsule dashboard, even weeks after you first captured it.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Privacy Considerations",
      },
      {
        kind: "callout",
        calloutType: "tip",
        text: "Memory Capsule is built with privacy first. Only content you explicitly choose to save is ever stored. Nothing is captured passively or without your action.",
      },
      {
        kind: "paragraph",
        text: "You are always in control of what gets saved. Memories can be edited or deleted at any time from your dashboard.",
      },
    ],
  },

  {
    category: "Getting Started",
    categorySlug: "getting-started",
    slug: "first-memory",
    href: "/docs/getting-started/first-memory",
    title: "Your First Saved Memory",
    description:
      "Understand what happens when you save your first memory and how to find it again.",
    lastUpdated: "August 2025",
    keywords: [
      "memory",
      "save",
      "first",
      "tag",
      "search",
      "collection",
      "workflow",
      "example",
    ],
    content: [
      {
        kind: "heading",
        level: 2,
        text: "What Is a Memory?",
      },
      {
        kind: "paragraph",
        text: "A memory in Memory Capsule is a piece of structured knowledge extracted from an AI conversation. It is not just a copy of a chat log — it is something you intentionally chose to keep because it was useful, and it is organized so you can find it again quickly.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Example Workflow",
      },
      {
        kind: "paragraph",
        text: "Imagine you ask ChatGPT to explain binary search in Java. The AI gives you a clear explanation with a worked example. You know you will want to reference this in the future. Instead of starring the chat or copy-pasting into a notes app, you save it as a Memory Capsule memory.",
      },
      {
        kind: "callout",
        calloutType: "tip",
        text: "Good candidates for saving as memories: technical explanations, code patterns, decision frameworks, definitions, step-by-step instructions, and anything you can see yourself searching for again later.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Saving Your First Memory",
      },
      {
        kind: "ordered-list",
        items: [
          "Open ChatGPT and ask a question — for example: \"Explain binary search in Java with an example.\"",
          "Read the AI response and decide it is worth keeping.",
          "Click the Memory Capsule icon in your Chrome toolbar.",
          "The capture panel opens with the conversation segment pre-selected.",
          "Optionally add a title, tags, or assign it to a collection.",
          "Click Save Memory.",
          "A confirmation appears. Your memory is now saved.",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "What Happens After Saving",
      },
      {
        kind: "unordered-list",
        items: [
          "The memory is stored with its source URL and timestamp.",
          "Tags are suggested based on the content (you can edit these).",
          "The memory immediately appears in your dashboard.",
          "It is now searchable by keyword, tag, or date.",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Automatic Tagging",
      },
      {
        kind: "paragraph",
        text: "When you save a memory, Memory Capsule analyzes the content and suggests relevant tags. For the binary search example, suggested tags might include:",
      },
      {
        kind: "unordered-list",
        items: ["Java", "Algorithms", "Binary Search", "Data Structures"],
      },
      {
        kind: "paragraph",
        text: "You can accept these tags, remove any that are not relevant, or add your own before saving.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Memory Metadata",
      },
      {
        kind: "table",
        headers: ["Field", "Description"],
        rows: [
          ["Title", "A short label for the memory (auto-suggested or manual)"],
          ["Source", "The AI platform and URL where the memory came from"],
          ["Captured at", "The date and time the memory was saved"],
          ["Tags", "Topic labels for filtering and search"],
          ["Collection", "An optional group for organizing related memories"],
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Finding Your Memory Later",
      },
      {
        kind: "ordered-list",
        items: [
          "Open your Memory Capsule dashboard.",
          "Use the search bar to search for keywords — for example \"binary search\" or \"Java\".",
          "Your saved memory will appear in the results.",
          "Click it to read the full content and return to the original conversation.",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Editing and Deleting a Memory",
      },
      {
        kind: "paragraph",
        text: "All memories can be edited or deleted at any time from the dashboard. Open the memory, click the edit icon to change the title, tags, or collection, or click delete to remove it permanently.",
      },
    ],
  },

  {
    category: "Getting Started",
    categorySlug: "getting-started",
    slug: "dashboard",
    href: "/docs/getting-started/dashboard",
    title: "Understanding the Dashboard",
    description:
      "A walkthrough of every major area of the Memory Capsule dashboard.",
    lastUpdated: "August 2025",
    keywords: [
      "dashboard",
      "memories",
      "tags",
      "collections",
      "search",
      "activity",
      "settings",
      "overview",
    ],
    content: [
      {
        kind: "heading",
        level: 2,
        text: "Overview",
      },
      {
        kind: "paragraph",
        text: "The Memory Capsule dashboard is the central place to browse, search, and organize everything you have saved. It is designed to be fast and focused — you can find what you need in seconds rather than digging through old chat histories.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Memories",
      },
      {
        kind: "paragraph",
        text: "The Memories section shows all of your saved knowledge. Each memory displays its title, a preview of the content, the source platform, tags, and the date it was captured. You can sort memories by recency or relevance, and filter them by tag or collection.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Tags",
      },
      {
        kind: "paragraph",
        text: "The Tags section gives you an overview of all tags across your knowledge base. Clicking a tag filters your memories to show only items with that tag, making it easy to explore a specific topic area without searching.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Collections",
      },
      {
        kind: "paragraph",
        text: "Collections are named groups of related memories. Use them to organize memories by project, subject, or goal. Example collections you might create:",
      },
      {
        kind: "unordered-list",
        items: [
          "DSA — Data structures and algorithm problems",
          "React — Frontend patterns and component techniques",
          "Interview Prep — Questions and answers for technical interviews",
          "System Design — Architecture patterns and trade-offs",
          "Projects — Notes from ongoing project work",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Search",
      },
      {
        kind: "paragraph",
        text: "The search bar searches across all of your memories simultaneously. You can search by keyword, tag name, or topic. Results are ranked by relevance to the query.",
      },
      {
        kind: "callout",
        calloutType: "tip",
        text: "Use specific technical terms when searching — for example \"JWT authentication\" rather than just \"auth\" — to get the most precise results.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Activity",
      },
      {
        kind: "paragraph",
        text: "The Activity section shows a timeline of your recent memory captures. It gives you a quick view of what you have been learning and saving, organized chronologically.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Source Information",
      },
      {
        kind: "paragraph",
        text: "Every memory retains a link to its original source conversation. From any memory detail view, you can click the source link to return directly to the AI conversation where the memory was captured.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Settings",
      },
      {
        kind: "paragraph",
        text: "The Settings section lets you configure Memory Capsule to your preferences:",
      },
      {
        kind: "unordered-list",
        items: [
          "Toggle cloud sync on or off",
          "Manage connected AI platforms",
          "Set your default collection for new captures",
          "Export your entire memory library",
          "Delete your account and all data",
        ],
      },
    ],
  },

  {
    category: "Core Concepts",
    categorySlug: "core-concepts",
    slug: "memory",
    href: "/docs/core-concepts/memory",
    title: "What Is a Memory?",
    description:
      "The fundamental unit of knowledge in Memory Capsule — what it contains, how it is structured, and how it differs from raw chat history.",
    lastUpdated: "August 2025",
    keywords: [
      "memory",
      "knowledge",
      "concept",
      "structure",
      "metadata",
      "lifecycle",
      "conversation",
    ],
    content: [
      {
        kind: "heading",
        level: 2,
        text: "Definition",
      },
      {
        kind: "paragraph",
        text: "A memory in Memory Capsule is a unit of structured knowledge that you have intentionally captured from an AI conversation. It is not simply a copy of a chat message — it is something you chose to preserve because it was useful, enriched with metadata that makes it searchable and discoverable later.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Conversation vs. Memory",
      },
      {
        kind: "paragraph",
        text: "An AI conversation is a raw, unstructured exchange. It is long, contextual, and difficult to search across. A memory, by contrast, is a focused extract — the part of a conversation that contained useful knowledge — organized so that you can find it when you need it.",
      },
      {
        kind: "table",
        headers: ["AI Conversation", "Memory Capsule Memory"],
        rows: [
          ["Full chat history", "Focused extract of useful content"],
          ["Difficult to search", "Fully searchable by keyword and tag"],
          ["Platform-locked", "Lives in your personal knowledge base"],
          ["No structure", "Title, tags, source, timestamp, collection"],
          ["Lost when you scroll away", "Persistent and organized"],
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Memory Metadata",
      },
      {
        kind: "paragraph",
        text: "Every memory stores the following fields:",
      },
      {
        kind: "table",
        headers: ["Field", "Description"],
        rows: [
          ["Title", "A short, descriptive label for the memory"],
          ["Content", "The captured conversation text or extract"],
          ["Source platform", "The AI platform where it was captured"],
          ["Source URL", "A direct link back to the original conversation"],
          ["Tags", "Topic labels for filtering and discovery"],
          ["Collection", "The group or project this memory belongs to"],
          ["Captured at", "The date and time of capture"],
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Memory Lifecycle",
      },
      {
        kind: "paragraph",
        text: "A memory moves through this lifecycle from creation to recall:",
      },
      {
        kind: "ordered-list",
        items: [
          "Conversation — You have a useful exchange with an AI assistant.",
          "Capture — You use Memory Capsule to save the useful part.",
          "Process — Tags are suggested, metadata is attached.",
          "Store — The memory is saved to your personal knowledge base.",
          "Organize — You assign it to a collection or edit its tags.",
          "Search — Later, you search for a topic and the memory appears.",
          "Recall — You read the memory and optionally return to the original source.",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Why Memories Matter",
      },
      {
        kind: "paragraph",
        text: "Most people have hundreds of AI conversations. Most of the useful knowledge in those conversations is never seen again. Memory Capsule treats each AI conversation as a potential source of lasting knowledge — something worth keeping in a form that continues to serve you over time.",
      },
      {
        kind: "callout",
        calloutType: "tip",
        text: "Think of a memory as the distilled value of a conversation — everything you needed without everything you did not.",
      },
    ],
  },

  {
    category: "Core Concepts",
    categorySlug: "core-concepts",
    slug: "ai-tagging",
    href: "/docs/core-concepts/ai-tagging",
    title: "How AI Tagging Works",
    description:
      "Learn how memories get organized with intelligent tags and how tags improve search and discovery.",
    lastUpdated: "August 2025",
    keywords: [
      "tagging",
      "ai",
      "tags",
      "automatic",
      "topic",
      "search",
      "organization",
      "classification",
    ],
    content: [
      {
        kind: "heading",
        level: 2,
        text: "Why Tags Exist",
      },
      {
        kind: "paragraph",
        text: "Tags are the primary way to organize and discover memories. Without tags, finding a specific memory about, say, CSS grid layout would require remembering exact keywords from the conversation. With tags, you can browse all memories tagged \"CSS\" or \"Frontend\" and find it immediately.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Automatic Tag Generation",
      },
      {
        kind: "paragraph",
        text: "When you save a memory, Memory Capsule analyzes the content and suggests relevant tags automatically. The tag suggestions are based on topic detection applied to the captured text.",
      },
      {
        kind: "callout",
        calloutType: "note",
        text: "Automatic tags are suggestions only. You always review and approve them before they are applied. You can remove suggested tags or add your own before saving.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Topic Detection",
      },
      {
        kind: "paragraph",
        text: "The tagging system identifies topics from the captured conversation text. Technical terms, programming languages, frameworks, and subject areas are detected and converted into concise, consistent tags.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Example",
      },
      {
        kind: "paragraph",
        text: "A conversation about implementing JWT authentication in a React application with a Node.js backend might produce the following suggested tags:",
      },
      {
        kind: "unordered-list",
        items: ["React", "Node.js", "Authentication", "JWT", "Security"],
      },
      {
        kind: "heading",
        level: 2,
        text: "Manual Tag Editing",
      },
      {
        kind: "paragraph",
        text: "You have full control over tags at any time:",
      },
      {
        kind: "unordered-list",
        items: [
          "Add tags at save time via the capture panel",
          "Edit tags from the memory detail view in your dashboard",
          "Remove tags that are not relevant to how you want to organize the memory",
          "Add custom tags that reflect your personal organizational system",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Multiple Tags per Memory",
      },
      {
        kind: "paragraph",
        text: "A memory can have multiple tags. This is intentional — a conversation about React hooks and state management is equally useful when browsing your React memories and your state management memories. Multiple tags increase discoverability.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Tag Consistency",
      },
      {
        kind: "callout",
        calloutType: "tip",
        text: "Use consistent tag naming to get the most from your knowledge base. Decide whether to use 'React' or 'ReactJS' and stick with one. Memory Capsule will show you existing tags when you type, helping you stay consistent.",
      },
      {
        kind: "heading",
        level: 2,
        text: "How Tags Improve Search",
      },
      {
        kind: "paragraph",
        text: "Tags act as a second layer of search on top of full-text keyword search. When you click a tag in the dashboard, you immediately see all memories with that tag. This is faster than searching for keywords when you want to browse a topic area rather than find something specific.",
      },
    ],
  },

  {
    category: "Core Concepts",
    categorySlug: "core-concepts",
    slug: "memory-decay",
    href: "/docs/core-concepts/memory-decay",
    title: "Memory Decay & Relevance Scoring",
    description:
      "How relevance can change over time and why older memories do not simply disappear.",
    lastUpdated: "August 2025",
    keywords: [
      "decay",
      "relevance",
      "scoring",
      "recency",
      "frequency",
      "search",
      "prioritization",
    ],
    content: [
      {
        kind: "heading",
        level: 2,
        text: "Concept Status",
      },
      {
        kind: "callout",
        calloutType: "note",
        title: "Planned Feature",
        text: "Memory decay and relevance scoring is a planned feature. It is not currently implemented in the extension. This article describes the intended design and reasoning.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Why Relevance Changes Over Time",
      },
      {
        kind: "paragraph",
        text: "Not every saved memory remains equally important forever. A memory about a specific bug you fixed in a project you no longer work on is less relevant than a memory about a pattern you use every week. Relevance scoring aims to reflect this reality.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Factors That Influence Relevance",
      },
      {
        kind: "table",
        headers: ["Factor", "Effect"],
        rows: [
          ["Recency", "Memories you saved recently start with higher relevance"],
          [
            "Frequency of access",
            "Memories you view often stay more relevant",
          ],
          ["Search interaction", "Clicking a result in search increases its score"],
          [
            "Time without access",
            "Memories not accessed over long periods gradually reduce in prominence",
          ],
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Decay vs. Deletion",
      },
      {
        kind: "paragraph",
        text: "Memory decay is not the same as deletion. A memory with low relevance does not disappear — it simply appears lower in default sort order and search ranking. It remains fully accessible when you search for it directly or browse by tag.",
      },
      {
        kind: "callout",
        calloutType: "tip",
        text: "Think of relevance decay like a library's display shelf. The most recently returned and most popular books are prominently displayed. Older, less-used books are still there — they are just further back on the shelf.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Why Old Memories Should Not Disappear",
      },
      {
        kind: "paragraph",
        text: "The value of a knowledge base comes partly from its history. A memory about a programming concept you learned two years ago might still be exactly what you need when you return to that technology. Permanent deletion would destroy that long-term value.",
      },
      {
        kind: "paragraph",
        text: "The goal of relevance scoring is to surface the most useful knowledge first, not to discard what you have built up over time.",
      },
    ],
  },

  {
    category: "Core Concepts",
    categorySlug: "core-concepts",
    slug: "collections",
    href: "/docs/core-concepts/collections",
    title: "Collections & Workspaces",
    description:
      "Organize your memories into meaningful groups using collections.",
    lastUpdated: "August 2025",
    keywords: [
      "collections",
      "workspaces",
      "organize",
      "groups",
      "project",
      "folder",
      "dsa",
      "react",
    ],
    content: [
      {
        kind: "heading",
        level: 2,
        text: "What Are Collections?",
      },
      {
        kind: "paragraph",
        text: "Collections are named groups that let you organize related memories together. Where tags describe what a memory is about, collections describe where it belongs. A memory about a React hook might be tagged \"React\" and \"Hooks\", but it could live in your \"Frontend Projects\" collection.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Why Collections Are Useful",
      },
      {
        kind: "unordered-list",
        items: [
          "Group memories by project, course, or goal",
          "Keep interview prep notes separate from work project notes",
          "Create a focused view of a specific area of your knowledge",
          "Share a collection with collaborators (planned feature)",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Creating a Collection",
      },
      {
        kind: "ordered-list",
        items: [
          "Open the Memory Capsule dashboard.",
          "Click Collections in the left sidebar.",
          "Click New Collection.",
          "Give the collection a name and an optional description.",
          "Click Create.",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Moving Memories to a Collection",
      },
      {
        kind: "paragraph",
        text: "You can assign a memory to a collection at save time via the capture panel, or afterwards from the memory detail view in the dashboard. A memory can belong to one collection at a time.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Example Collections",
      },
      {
        kind: "paragraph",
        text: "Some common ways people organize their Memory Capsule knowledge base:",
      },
      {
        kind: "table",
        headers: ["Collection Name", "What goes in it"],
        rows: [
          ["DSA", "Algorithm explanations, problem patterns, time complexity notes"],
          [
            "React",
            "Component patterns, hooks, state management, performance tips",
          ],
          [
            "Interview Prep",
            "Technical questions, system design notes, behavioral frameworks",
          ],
          [
            "System Design",
            "Architecture patterns, scalability discussions, trade-off notes",
          ],
          ["Projects", "Notes specific to active or past projects"],
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Workspaces",
      },
      {
        kind: "callout",
        calloutType: "note",
        title: "Planned Feature",
        text: "Workspaces are a planned future feature. They are intended to provide higher-level separation between entirely different domains of your knowledge — for example, keeping work and personal learning completely separate. They are not yet available in the current version.",
      },
    ],
  },

  {
    category: "Integrations",
    categorySlug: "integrations",
    slug: "chatgpt",
    href: "/docs/integrations/chatgpt",
    title: "ChatGPT Integration",
    description:
      "How Memory Capsule captures knowledge from your ChatGPT conversations.",
    lastUpdated: "August 2025",
    keywords: [
      "chatgpt",
      "openai",
      "integration",
      "capture",
      "conversation",
      "source",
    ],
    content: [
      {
        kind: "heading",
        level: 2,
        text: "Overview",
      },
      {
        kind: "paragraph",
        text: "ChatGPT is the primary supported platform for Memory Capsule. The extension is designed and tested to work on chat.openai.com and correctly detects conversation exchanges, captures selected content, and preserves source links.",
      },
      {
        kind: "heading",
        level: 2,
        text: "How the Integration Works",
      },
      {
        kind: "paragraph",
        text: "Memory Capsule operates entirely within your browser. When you navigate to chat.openai.com, the extension becomes active and makes the capture interface available. You do not need to create any API keys or grant Memory Capsule access to your OpenAI account.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Capture Workflow",
      },
      {
        kind: "ordered-list",
        items: [
          "Open a ChatGPT conversation and get a response you want to keep.",
          "Click the Memory Capsule icon in the Chrome toolbar.",
          "The capture panel appears, showing the conversation content.",
          "Select or confirm the portion to save.",
          "Optionally add tags or assign to a collection.",
          "Click Save Memory.",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "What Gets Stored",
      },
      {
        kind: "unordered-list",
        items: [
          "The captured conversation text",
          "The ChatGPT conversation URL (preserved for later return)",
          "Source platform label: ChatGPT",
          "Capture timestamp",
          "Tags (suggested and confirmed by you)",
          "Collection assignment (if chosen)",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Source Tracking",
      },
      {
        kind: "paragraph",
        text: "Every memory captured from ChatGPT retains a link to the original conversation. You can return to the exact ChatGPT conversation from your dashboard by clicking the source link on any memory.",
      },
      {
        kind: "callout",
        calloutType: "warning",
        text: "ChatGPT conversation URLs require you to be logged in to your OpenAI account. If you are logged out, the source link will redirect to the ChatGPT login page rather than the conversation.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Troubleshooting",
      },
      {
        kind: "table",
        headers: ["Issue", "Solution"],
        rows: [
          [
            "Extension popup does not open on chat.openai.com",
            "Refresh the page. If the issue persists, disable and re-enable the extension from chrome://extensions.",
          ],
          [
            "Capture panel is empty or shows wrong content",
            "Scroll back to the conversation segment and reopen the capture panel.",
          ],
          [
            "Memory saves but has no source URL",
            "This can happen if the ChatGPT URL changes during the session. The memory content is still preserved.",
          ],
        ],
      },
    ],
  },

  {
    category: "Integrations",
    categorySlug: "integrations",
    slug: "claude",
    href: "/docs/integrations/claude",
    title: "Claude Integration",
    description:
      "Claude integration is coming soon. Learn about the planned capture workflow.",
    lastUpdated: "August 2025",
    keywords: ["claude", "anthropic", "integration", "coming soon", "planned"],
    content: [
      {
        kind: "heading",
        level: 2,
        text: "Coming Soon",
      },
      {
        kind: "callout",
        calloutType: "note",
        title: "Coming Soon",
        text: "Claude integration is not yet available. This article describes the planned integration workflow for when Claude support is released.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Intended Purpose",
      },
      {
        kind: "paragraph",
        text: "Many developers and researchers use Claude (claude.ai) alongside or instead of ChatGPT. The planned Claude integration will let Memory Capsule capture knowledge from Claude conversations using the same workflow that exists for ChatGPT today.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Planned Workflow",
      },
      {
        kind: "ordered-list",
        items: [
          "Open a Claude conversation at claude.ai.",
          "Get a useful response from Claude.",
          "Click the Memory Capsule icon in the Chrome toolbar.",
          "The capture panel appears with the conversation content.",
          "Select the portion to save, add tags, and click Save Memory.",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Expected Capture Behavior",
      },
      {
        kind: "paragraph",
        text: "When Claude integration is released, captured memories will store:",
      },
      {
        kind: "unordered-list",
        items: [
          "The captured conversation text from Claude",
          "Source URL linking back to the Claude conversation",
          "Source platform label: Claude",
          "Capture timestamp and tag suggestions",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Stay Updated",
      },
      {
        kind: "paragraph",
        text: "Follow the Memory Capsule changelog and GitHub repository for updates on Claude integration progress.",
      },
    ],
  },

  {
    category: "Integrations",
    categorySlug: "integrations",
    slug: "gemini",
    href: "/docs/integrations/gemini",
    title: "Gemini Integration",
    description:
      "Gemini integration is coming soon. Learn about the planned capture workflow for Google Gemini.",
    lastUpdated: "August 2025",
    keywords: ["gemini", "google", "integration", "coming soon", "planned"],
    content: [
      {
        kind: "heading",
        level: 2,
        text: "Coming Soon",
      },
      {
        kind: "callout",
        calloutType: "note",
        title: "Coming Soon",
        text: "Gemini integration is not yet available. This article describes the planned integration workflow for when Gemini support is released.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Intended Purpose",
      },
      {
        kind: "paragraph",
        text: "Google Gemini (gemini.google.com) is used by millions of people daily. The planned Gemini integration will extend Memory Capsule's knowledge capture to Gemini conversations, so your knowledge base is not limited to any single AI platform.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Planned Workflow",
      },
      {
        kind: "ordered-list",
        items: [
          "Open a Gemini conversation at gemini.google.com.",
          "Get a useful response from Gemini.",
          "Click the Memory Capsule icon in the Chrome toolbar.",
          "The capture panel appears with the conversation content.",
          "Select the portion to save, add tags, and click Save Memory.",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Expected Capture Behavior",
      },
      {
        kind: "unordered-list",
        items: [
          "Captured conversation text from Gemini",
          "Source URL linking to the Gemini conversation",
          "Source platform label: Gemini",
          "Capture timestamp and automatic tag suggestions",
        ],
      },
    ],
  },

  {
    category: "Integrations",
    categorySlug: "integrations",
    slug: "notion",
    href: "/docs/integrations/notion",
    title: "Notion Export",
    description:
      "Notion export is a planned feature. Learn about the intended export workflow.",
    lastUpdated: "August 2025",
    keywords: ["notion", "export", "planned", "markdown", "workflow"],
    content: [
      {
        kind: "heading",
        level: 2,
        text: "Planned Feature",
      },
      {
        kind: "callout",
        calloutType: "note",
        title: "Planned",
        text: "Notion export is not currently implemented. This article describes the intended design.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Intended Purpose",
      },
      {
        kind: "paragraph",
        text: "Many teams and individuals use Notion as their primary note-taking and documentation system. The planned Notion export will let you push selected memories or entire collections from Memory Capsule directly into your Notion workspace.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Intended Export Workflow",
      },
      {
        kind: "ordered-list",
        items: [
          "Connect your Notion workspace to Memory Capsule in Settings.",
          "Select one or more memories or an entire collection to export.",
          "Choose the target Notion page or database.",
          "Memory Capsule exports the memories as Notion pages with title, content, tags, and source link.",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Current Alternative",
      },
      {
        kind: "paragraph",
        text: "Until native Notion export is available, you can export memories as Markdown files and paste them into Notion manually. Notion accepts Markdown paste natively.",
      },
    ],
  },

  {
    category: "Integrations",
    categorySlug: "integrations",
    slug: "obsidian",
    href: "/docs/integrations/obsidian",
    title: "Obsidian Export",
    description:
      "Obsidian export is a planned feature. Learn about the intended Markdown vault export workflow.",
    lastUpdated: "August 2025",
    keywords: ["obsidian", "export", "planned", "markdown", "vault", "notes"],
    content: [
      {
        kind: "heading",
        level: 2,
        text: "Planned Feature",
      },
      {
        kind: "callout",
        calloutType: "note",
        title: "Planned",
        text: "Obsidian export is not currently implemented. This article describes the intended design.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Intended Purpose",
      },
      {
        kind: "paragraph",
        text: "Obsidian is a popular note-taking tool built around linked Markdown files. The planned Obsidian export will let Memory Capsule generate Markdown files compatible with your Obsidian vault, so you can bring your AI-captured knowledge into your existing note graph.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Intended Export Workflow",
      },
      {
        kind: "ordered-list",
        items: [
          "Select memories or collections to export.",
          "Click Export → Obsidian Vault.",
          "Memory Capsule generates a folder of Markdown files, one per memory.",
          "Each file includes YAML frontmatter with title, tags, source, and date.",
          "Move the exported folder into your Obsidian vault.",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Current Alternative",
      },
      {
        kind: "paragraph",
        text: "Until the native export is available, you can manually copy memory content from Memory Capsule and create Markdown files in your Obsidian vault. Each memory's tags can be used as Obsidian tags directly.",
      },
    ],
  },

  {
    category: "Advanced",
    categorySlug: "advanced",
    slug: "api",
    href: "/docs/advanced/api",
    title: "REST API Reference",
    description:
      "The Memory Capsule REST API reference. Currently being prepared.",
    lastUpdated: "August 2025",
    keywords: ["api", "rest", "endpoints", "authentication", "programmatic"],
    content: [
      {
        kind: "heading",
        level: 2,
        text: "API Status",
      },
      {
        kind: "callout",
        calloutType: "note",
        title: "In Progress",
        text: "The Memory Capsule REST API reference is currently being prepared. A public API will be documented here when it becomes available.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Overview",
      },
      {
        kind: "paragraph",
        text: "A REST API for Memory Capsule is planned to give developers programmatic access to memory capture, retrieval, tag management, and collection operations. This will make it possible to integrate Memory Capsule with other tools, build automations, or export data in custom formats.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Planned Capabilities",
      },
      {
        kind: "unordered-list",
        items: [
          "Read and list memories",
          "Create new memories programmatically",
          "Update memory tags and collections",
          "Delete memories",
          "Search memories by keyword or tag",
          "Manage collections",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Stay Updated",
      },
      {
        kind: "paragraph",
        text: "API documentation will be published here when available. Follow the Memory Capsule GitHub repository or changelog for updates.",
      },
    ],
  },

  {
    category: "Advanced",
    categorySlug: "advanced",
    slug: "webhooks",
    href: "/docs/advanced/webhooks",
    title: "Webhook Events",
    description:
      "Webhook event support is coming soon. Learn about the planned event-driven integration model.",
    lastUpdated: "August 2025",
    keywords: ["webhooks", "events", "coming soon", "planned", "automation"],
    content: [
      {
        kind: "heading",
        level: 2,
        text: "Coming Soon",
      },
      {
        kind: "callout",
        calloutType: "note",
        title: "Coming Soon",
        text: "Webhook events are not yet implemented. This article describes the intended concept.",
      },
      {
        kind: "heading",
        level: 2,
        text: "What Are Webhooks?",
      },
      {
        kind: "paragraph",
        text: "Webhooks allow external applications to receive real-time notifications when specific events occur in Memory Capsule. Instead of polling for changes, your application receives an HTTP POST request the moment something happens.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Intended Events",
      },
      {
        kind: "table",
        headers: ["Event", "Description"],
        rows: [
          ["memory.created", "Fired when a new memory is saved"],
          ["memory.updated", "Fired when a memory is edited"],
          ["memory.deleted", "Fired when a memory is deleted"],
          ["collection.created", "Fired when a new collection is created"],
          [
            "tag.added",
            "Fired when a tag is added to a memory",
          ],
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Intended Use Cases",
      },
      {
        kind: "unordered-list",
        items: [
          "Trigger a Notion sync whenever a memory is saved",
          "Post a summary to a Slack channel when a new memory is created",
          "Build a custom search index that stays in sync with Memory Capsule",
          "Log memory activity to an analytics system",
        ],
      },
    ],
  },

  {
    category: "Advanced",
    categorySlug: "advanced",
    slug: "custom-prompts",
    href: "/docs/advanced/custom-prompts",
    title: "Custom AI Prompts",
    description:
      "Custom prompts let you shape how AI processes and structures your saved knowledge. Currently planned.",
    lastUpdated: "August 2025",
    keywords: [
      "prompts",
      "ai",
      "custom",
      "planned",
      "summarization",
      "tagging",
    ],
    content: [
      {
        kind: "heading",
        level: 2,
        text: "Planned Feature",
      },
      {
        kind: "callout",
        calloutType: "note",
        title: "Planned",
        text: "Custom AI prompts are not yet available. This article describes the intended design.",
      },
      {
        kind: "heading",
        level: 2,
        text: "What Custom Prompts Are",
      },
      {
        kind: "paragraph",
        text: "Custom prompts let you define how Memory Capsule processes captured conversation content. Instead of using the default summarization and tagging behavior, you can provide instructions that shape the output to match your specific workflow.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Why They Matter",
      },
      {
        kind: "paragraph",
        text: "Different workflows need different kinds of structured output. A software engineer might want memories summarized as bullet points with a code snippet preserved. A researcher might want a formal abstract format. Custom prompts give you the control to decide.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Possible Use Cases",
      },
      {
        kind: "unordered-list",
        items: [
          "Summarize memories in a specific format (bullet points, numbered lists, TLDR)",
          "Always extract a key insight or one-line takeaway",
          "Generate tags using a specific vocabulary or taxonomy",
          "Extract action items from captured AI conversations",
          "Format technical content for a specific documentation style",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "How They Could Influence Output",
      },
      {
        kind: "paragraph",
        text: "When a custom prompt is set, Memory Capsule passes it as context during the processing step after capture. The resulting memory title, summary, and tag suggestions are shaped by your instructions rather than the defaults.",
      },
      {
        kind: "callout",
        calloutType: "tip",
        text: "Think of custom prompts as a way to give Memory Capsule a personal style guide for how you want your knowledge formatted.",
      },
    ],
  },

  {
    category: "Advanced",
    categorySlug: "advanced",
    slug: "self-hosting",
    href: "/docs/advanced/self-hosting",
    title: "Self-Hosting",
    description:
      "Self-hosting Memory Capsule is coming soon. Learn about the intended architecture.",
    lastUpdated: "August 2025",
    keywords: [
      "self-hosting",
      "infrastructure",
      "coming soon",
      "planned",
      "database",
      "api",
    ],
    content: [
      {
        kind: "heading",
        level: 2,
        text: "Coming Soon",
      },
      {
        kind: "callout",
        calloutType: "note",
        title: "Coming Soon",
        text: "Self-hosting is not yet supported. This article describes the intended architecture for when self-hosting is available.",
      },
      {
        kind: "heading",
        level: 2,
        text: "What Self-Hosting Would Mean",
      },
      {
        kind: "paragraph",
        text: "Self-hosting would allow you to run the entire Memory Capsule stack on infrastructure you control. Your memories, tags, and collections would never leave your own servers. This is intended primarily for users with strong data sovereignty requirements.",
      },
      {
        kind: "heading",
        level: 2,
        text: "Expected Architecture",
      },
      {
        kind: "paragraph",
        text: "The planned self-hosted deployment would consist of the following components:",
      },
      {
        kind: "table",
        headers: ["Component", "Role"],
        rows: [
          ["Chrome Extension", "Capture UI — unchanged from the standard version"],
          [
            "API Server",
            "Handles memory storage, tag management, and search",
          ],
          ["Database", "Stores memories, collections, and metadata"],
          ["Web Application", "Dashboard for browsing and managing memories"],
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Why Self-Host?",
      },
      {
        kind: "unordered-list",
        items: [
          "Full control over where your data is stored",
          "No dependency on Memory Capsule cloud infrastructure",
          "Ability to customize the backend processing pipeline",
          "Suitable for organizations with compliance requirements",
        ],
      },
      {
        kind: "heading",
        level: 2,
        text: "Stay Updated",
      },
      {
        kind: "paragraph",
        text: "Self-hosting documentation and setup guides will be published here when the feature becomes available. Follow the Memory Capsule GitHub repository for progress.",
      },
    ],
  },
];

export const ALL_DOCS: DocArticle[] = DOCS;

export const DOC_CATEGORIES: DocCategory[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    articles: DOCS.filter((d) => d.categorySlug === "getting-started"),
  },
  {
    id: "core-concepts",
    title: "Core Concepts",
    articles: DOCS.filter((d) => d.categorySlug === "core-concepts"),
  },
  {
    id: "integrations",
    title: "Integrations",
    articles: DOCS.filter((d) => d.categorySlug === "integrations"),
  },
  {
    id: "advanced",
    title: "Advanced",
    articles: DOCS.filter((d) => d.categorySlug === "advanced"),
  },
];

export function getDocArticle(
  category: string,
  slug: string
): DocArticle | undefined {
  return DOCS.find((d) => d.categorySlug === category && d.slug === slug);
}

export function getPrevArticle(article: DocArticle): DocArticle | undefined {
  const idx = DOCS.findIndex(
    (d) => d.categorySlug === article.categorySlug && d.slug === article.slug
  );
  return idx > 0 ? DOCS[idx - 1] : undefined;
}

export function getNextArticle(article: DocArticle): DocArticle | undefined {
  const idx = DOCS.findIndex(
    (d) => d.categorySlug === article.categorySlug && d.slug === article.slug
  );
  return idx < DOCS.length - 1 ? DOCS[idx + 1] : undefined;
}

export function searchDocs(query: string): DocArticle[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  return DOCS.filter((d) => {
    return (
      d.title.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q) ||
      d.keywords.some((k) => k.toLowerCase().includes(q)) ||
      d.content.some(
        (block) =>
          ("text" in block && block.text.toLowerCase().includes(q)) ||
          ("items" in block &&
            block.items.some((item) => item.toLowerCase().includes(q)))
      )
    );
  });
}
