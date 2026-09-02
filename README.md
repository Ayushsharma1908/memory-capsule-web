```markdown
# 🧠 Memory Capsule

> **Your best ideas shouldn't live in forgotten chats.**  
> Keep the knowledge. Lose the clutter.

Memory Capsule is a modern web platform built to introduce and showcase the **Memory Capsule Chrome Extension** — a tool designed to help users preserve valuable knowledge from AI conversations.

The website serves as the public-facing experience for the product, explaining its features, workflow, and documentation while providing a direct path to install the Chrome Extension.

---

## ✨ What is Memory Capsule?

We have more conversations with AI than ever before.

We learn concepts, solve problems, brainstorm ideas, and discover useful information — but once a conversation ends, that knowledge often gets buried under hundreds of other chats.

**Memory Capsule helps preserve what matters.**

The product transforms valuable AI conversations into structured memories that are easier to revisit and remember.

### The Memory Capsule Workflow

```text
Capture → Summarize → Organize → Search → Remember
```

---

## 🚀 Features

- **📥 Universal Capture**  
  Save valuable knowledge from supported AI conversations instead of letting useful information disappear into old chats.

- **✨ AI-Powered Summarization**  
  Transform long conversations into concise and meaningful capsules that are easier to revisit.

- **🗂️ Smart Organization**  
  Structure saved knowledge with relevant topics, tags, metadata, and contextual information.

- **🔎 Search & Recall**  
  Quickly find knowledge you have previously saved instead of manually searching through old conversations.

- **🧠 Knowledge That Stays**  
  Every saved capsule becomes part of your growing collection of knowledge.

---

## 🖥️ Website Features

The Memory Capsule website includes:

- Modern landing page
- Product introduction
- Feature showcase
- Documentation
- Product workflow
- Responsive design
- Chrome Extension installation CTA

The website acts as the entry point for users who want to discover and install Memory Capsule.

---

## 🧩 Product Architecture

```
                 Memory Capsule
                        │
          ┌─────────────┴─────────────┐
          │                           │
          ▼                           ▼
   Web Application              Chrome Extension
   Marketing & Docs             Core Product
          │                           │
          │                    Capture Conversations
          │                           │
          └──── Add to Chrome ────────┘
```

The web application and Chrome Extension are maintained as separate projects.

### Web Application
Responsible for:
- Product presentation
- Features
- Documentation
- Installation guidance

### Chrome Extension
Responsible for:
- Capturing conversations
- Generating memory capsules
- Organizing saved knowledge
- Searching and recalling memories
- Viewing generated capsules

---

## 🛠️ Tech Stack

This project is built with:

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

## 📂 Project Structure

```
memory-capsule-web/
│
├── app/
│   ├── docs/
│   │   └── page.tsx
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│
├── public/
│
├── package.json
│
└── README.md
```

The project structure may evolve as Memory Capsule grows.

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Ayushsharma1908/memory-capsule-web.git
```

### 2. Navigate to the project
```bash
cd memory-capsule-web
```

### 3. Install dependencies
```bash
npm install
```

### 4. Start the development server
```bash
npm run dev
```

Open the application in your browser:
```
http://localhost:3000
```

---

## 🧩 Chrome Extension

The Memory Capsule Chrome Extension is maintained in a separate repository.

The extension handles the core Memory Capsule functionality, while this repository contains the public-facing web experience.

🔗 **Extension Repository:**  
[https://github.com/Ayushsharma1908/memory-capsule](https://github.com/Ayushsharma1908/memory-capsule)

---

## 🌐 Deployment

The application can be deployed on platforms that support Next.js, such as:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- Other Node.js-compatible hosting platforms

Once the Chrome Extension is published, the **Add to Chrome** button will direct users to the official Chrome Web Store listing.

---

## 🗺️ Roadmap

Future improvements may include:

- [ ] Chrome Web Store release
- [ ] Improved documentation
- [ ] Support for additional AI platforms
- [ ] Enhanced knowledge organization
- [ ] Advanced memory search
- [ ] Optional cloud synchronization
- [ ] Cross-device access

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

If you find an issue or have an idea for improving Memory Capsule, feel free to open an issue.

---

## 👨‍💻 Author

**Ayush Kumar Sharma**  
GitHub: [https://github.com/Ayushsharma1908](https://github.com/Ayushsharma1908)

---

🧠 **Memory Capsule**  
*Your conversations contain knowledge. Don't let it disappear.*
```