export type Project = {
  slug: string;
  title: string;
  label?: string; // small tag above the title, e.g. "UI design study"
  problem: string; // one line: what the project solves
  whatIDid: string[]; // 2–3 bullets
  tags: string[];
  liveUrl: string;
  codeUrl?: string; // only set when the GitHub repo is public
  imageSrc?: string; // screenshots live in /public/projects/*
};

export const projects: Project[] = [
  {
    slug: "models-hostesses",
    title: "Models & Hostesses",
    problem:
      "A booking platform where clients find models and hostesses for events, and new talent can apply.",
    whatIDid: [
      "Built the model showcase, application form and admin dashboard in Next.js + TypeScript.",
      "Connected the front-end to a Go (Gin) REST API backed by PostgreSQL.",
      "Self-hosted it on my Ubuntu VPS behind Nginx with SSL, kept running by PM2.",
    ],
    tags: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Self-hosted"],
    liveUrl: "https://spy.modelshostesses.com/en",
    codeUrl: "https://github.com/azizben01/models-frontend",
    imageSrc: "/projects/models.png",
  },
  {
    slug: "general-consulting-group",
    title: "General Consulting Group",
    problem: "A company website presenting the group's services to clients.",
    whatIDid: [
      "Built the multilingual company site with Next.js and Tailwind.",
      "Deployed it on my own VPS with its own domain, Nginx and SSL.",
    ],
    tags: ["Next.js", "Tailwind CSS", "Self-hosted"],
    liveUrl: "https://generalsconsultinggroups.com/en",
    imageSrc: "/projects/gcg.png",
  },
  {
    slug: "softscreatix",
    title: "Softscreatix",
    problem: "A website for a software company to present its services.",
    whatIDid: [
      "Built the multilingual company site with Next.js and Tailwind.",
      "Deployed it on my own VPS with its own domain, Nginx and SSL.",
    ],
    tags: ["Next.js", "Tailwind CSS", "Self-hosted"],
    liveUrl: "https://softscreatix.com/en",
    imageSrc: "/projects/softscreatix.png",
  },
  {
    slug: "delices-est-ouest",
    title: "Délices Est-Ouest",
    problem:
      "A family restaurant needed an online snacks and catering catalog customers could order from.",
    whatIDid: [
      "Built the catalog with automatic price calculation as customers pick quantities.",
      "Added WhatsApp ordering: the cart becomes a pre-filled WhatsApp message.",
    ],
    tags: ["Next.js", "Tailwind CSS", "WhatsApp ordering"],
    liveUrl: "https://delices-est-ouest.vercel.app",
    codeUrl: "https://github.com/azizben01/delices-est-ouest",
    imageSrc: "/projects/delices.png",
  },
  {
    slug: "kly-plus-and-more",
    title: "Kly Plus & More",
    problem:
      "A website for a web agency founded by a friend in Rwanda, to present its work and services.",
    whatIDid: [
      "Designed and built the responsive site with Next.js and TypeScript.",
      "Deployed it on Vercel.",
    ],
    tags: ["Next.js", "TypeScript", "Vercel"],
    liveUrl: "https://kpmcompany.vercel.app",
    codeUrl: "https://github.com/azizben01/kpmcompany",
    imageSrc: "/projects/kpm.png",
  },
  {
    slug: "ai-web-dev-training",
    title: "AI web-dev training page",
    problem:
      "A landing page for a training session in Rwanda on building websites with AI.",
    whatIDid: [
      "Built the landing page with Next.js and simple scroll animations.",
      "Added analytics to see how many visitors came from each channel.",
    ],
    tags: ["Next.js", "Analytics", "Animations"],
    liveUrl: "https://softwaretraining-zeta.vercel.app",
    codeUrl: "https://github.com/azizben01/SoftwareTraining",
    imageSrc: "/projects/training.png",
  },
  {
    slug: "clothes-shop",
    title: "Clothes shop",
    label: "UI design study",
    problem:
      "A front-end design study for an online clothes shop — not a live product.",
    whatIDid: [
      "Turned a shop design into responsive pages with Next.js and Tailwind.",
    ],
    tags: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://clothes-shop-frontend-one.vercel.app",
    codeUrl: "https://github.com/azizben01/clothes-shop-frontend",
    imageSrc: "/projects/shoping.png",
  },
];
