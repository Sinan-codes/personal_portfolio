export const profile = {
  name: "Mohamed Kassim Sinan",
  shortName: "Sinan",
  initials: "MS",
  photo: "/profile.jpg",
  title: "Full Stack Developer",
  tagline:
    "I build fast, reliable products end-to-end — from database schema to pixel-perfect UI.",
  location: "Available for remote & on-site work",
  email: "mohamed.kassim.sinan@gmail.com",
  resumeUrl: "#",
  social: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://x.com/",
  },
};

export const about = {
  paragraphs: [
    "I'm a full stack developer who enjoys owning a product from idea to production — designing the data model, building the API, and shipping an interface people actually enjoy using.",
    "I care about clean architecture, fast feedback loops, and details that make software feel effortless. Comfortable moving between frontend polish and backend systems work, and I like picking up whatever a project actually needs.",
    "Outside of client work, I'm usually deep in a side project, reading about system design, or tinkering with new tools in the JavaScript and Python ecosystems.",
  ],
  stats: [
    { label: "Years building software", value: "5+" },
    { label: "Projects shipped", value: "20+" },
    { label: "Technologies", value: "15+" },
  ],
};

export const skills = [
  {
    group: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    group: "Backend",
    items: ["FastAPI", "Python", "REST & GraphQL"],
  },
  {
    group: "Data & Infra",
    items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS"],
  },
  {
    group: "Tooling",
    items: ["Git", "CI/CD"],
  },
];

export const marqueeSkills = [
  "React",
  "FastAPI",
  "TypeScript",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Python",
  "GraphQL",
  "Tailwind CSS",
];

export const projects = [
  {
    title: "Cortex",
    description:
      "Full-stack RAG app — upload documents and chat with them, with cited answers grounded in your own content.",
    tags: ["FastAPI", "PostgreSQL", "React"],
    color: "from-blue-500 to-cyan-500",
    image: "/projects/cortex.png",
    href: "https://cortex-jgp9.onrender.com",
    repo: "https://github.com/Sinan-codes/cortex",
    featured: true,
  },
  {
    title: "BoardCollab",
    description:
      "BoardCollab helps multiple people draw on the same canvas over a WebSocket connection. Create a room, share the 6-character code, and everyone sees strokes, cursors, and chat messages appear instantly — no page refresh, no polling.",
    tags: ["FastAPI", "React", "WebSocket", "Konva.js"],
    color: "from-cyan-500 to-teal-500",
    image: "/projects/boardcollab.png",
    href: "https://boardcollab.onrender.com",
    repo: "https://github.com/Sinan-codes/board_collab",
    featured: true,
  },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "Middle East College",
    period: "2022 — 2026",
    description:
      "Graduated with a foundation in software engineering, data structures, and systems design.",
  },
];
