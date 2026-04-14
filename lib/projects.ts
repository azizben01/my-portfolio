export type Project = {
  slug: string;
  title: string;
  description: string;
  year: string;
  tags: string[];
  href: string;
  imageSrc?: string; // put your screenshots in /public/projects/*
};

export const projects: Project[] = [
  {
    slug: "project-1",
    title: "Company Site",
    description:
      "A company website showcasing their domain of work and expertise.",
    year: "2025",
    tags: ["Next.js", "TypeScript", "SEO"],
    href: "https://kpmcompany.vercel.app/",
    imageSrc: "/projects/kpm.png",
  },
  {
    slug: "project-2",
    title: "Construction company website",
    description:
      "A construction company website showcasing their work and services",
    year: "2025",
    tags: ["Booking slots", "Available services"],
    href: "https://kratosconstruction.netlify.app/",
    imageSrc: "/projects/kratos.png",
  },
  {
    slug: "project-3",
    title: "Cloth shoping design",
    description: "A web design for cloth shoping",
    year: "2024",
    tags: ["Nextjs", "Tailwind CSS"],
    href: "https://clothes-shop-frontend-one.vercel.app/",
    imageSrc: "/projects/shoping.png",
  },
  {
    slug: "project-4",
    title: "Training advertisement web page",
    description:
      "A web page advertising information about web page development using AI",
    year: "2026",
    tags: ["Next.js", "Analytics", "Animations"],
    href: "https://softwaretraining-zeta.vercel.app/",
    imageSrc: "/projects/training.png",
  },
  {
    slug: "project-5",
    title: "Snack catalog website ",
    description: "A web page advertising snakcs and catering orders",
    year: "2026",
    tags: ["automatic price calculation", "whatsapp order", "food catalog"],
    href: "https://delices-est-ouest.vercel.app/",
    imageSrc: "/projects/delices.png",
  },
  {
    slug: "project-6",
    title: "Models & Hostesses reservations",
    description: "A web page for reserving hostesses and models for events",
    year: "2026",
    tags: ["Models showcase", "Models applications", "Admin dashboard"],
    href: "https://models-rho-ten.vercel.app/en",
    imageSrc: "/projects/models.png",
  },
];
