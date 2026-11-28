import type { TechStack } from "../types/tech-stack"

// Icon SVG paths sourced from https://simpleicons.org (via /icons/tech-stack-v1.svg)
export const TECH_STACK: TechStack[] = [
  // Frontend & UI
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    iconId: "js",
    categories: ["Frontend"],
  },
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    iconId: "typescript",
    categories: ["Frontend"],
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    iconId: "react",
    categories: ["Frontend"],
  },
  {
    key: "nextjs2",
    title: "Next.js",
    href: "https://nextjs.org/",
    iconId: "nextjs2",
    categories: ["Frontend"],
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    iconId: "tailwindcss",
    categories: ["Frontend"],
  },

  // Backend & Database
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    iconId: "python",
    categories: ["Backend & Data"],
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    iconId: "nodejs",
    categories: ["Backend & Data"],
  },
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    iconId: "postgresql",
    categories: ["Backend & Data"],
  },
  {
    key: "mysql",
    title: "SQL",
    href: "https://www.iso.org/standard/76583.html",
    iconId: "mysql",
    categories: ["Backend & Data"],
  },
  {
    key: "cplusplus",
    title: "C++",
    href: "https://isocpp.org/",
    iconId: "cplusplus",
    categories: ["Backend & Data"],
  },

  // Data Science & AI
  {
    key: "pandas",
    title: "Pandas",
    href: "https://pandas.pydata.org/",
    iconId: "pandas",
    categories: ["Data & AI"],
  },
  {
    key: "numpy",
    title: "NumPy",
    href: "https://numpy.org/",
    iconId: "numpy",
    categories: ["Data & AI"],
  },
  {
    key: "scikitlearn",
    title: "Scikit-Learn",
    href: "https://scikit-learn.org/",
    iconId: "scikitlearn",
    categories: ["Data & AI"],
  },
  {
    key: "gemini",
    title: "Gemini",
    href: "https://gemini.google.com/",
    iconId: "gemini",
    categories: ["Data & AI"],
  },
  {
    key: "claude",
    title: "Claude",
    href: "https://claude.ai/",
    iconId: "claude",
    categories: ["Data & AI"],
  },
  {
    key: "chatgpt",
    title: "ChatGPT",
    href: "https://chatgpt.com/",
    iconId: "chatgpt",
    categories: ["Data & AI"],
  },

  // Tools
  {
    key: "github",
    title: "GitHub",
    href: "https://github.com/",
    iconId: "github",
    categories: ["Tools"],
  },
  {
    key: "vscode",
    title: "Visual Studio Code",
    href: "https://code.visualstudio.com/",
    iconId: "vscode",
    categories: ["Tools"],
  },
]

export const STACK_CATEGORIES = [
  "Frontend",
  "Backend & Data",
  "Data & AI",
  "Tools",
]