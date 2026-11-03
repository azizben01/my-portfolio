const githubUrl = "https://github.com/azizben01";
const linkedinUrl =
  "https://www.linkedin.com/in/ben-aziz-sangar%C3%A9-a0758a275";

export const siteConfig = {
  name: "Ben Aziz SANGARE",
  role: "Junior Web Developer",
  location: "Budapest, Hungary",
  url: "https://benazizportfolio.vercel.app",
  email: "benazizsangare2@gmail.com",
  cvPath: "/Ben-Aziz-Sangare-CV.pdf",
  githubUrl,
  linkedinUrl,
  description:
    "Foundation year for the MSc in Computer Science at ELTE, Budapest. Junior web developer building Next.js + TypeScript apps and hosting them on my own Linux server. Open to part-time student roles.",
  heroImage: {
    src: "/images/Profile2.jpg",
    alt: "Portrait of Ben Aziz Sangare",
  },
  mission:
    " I work on practical projects like an online catalog for a local snack shop with WhatsApp ordering. I figure out what's needed, find solutions when things break, and get the site live.",
  socials: [
    { label: "LinkedIn", href: linkedinUrl },
    { label: "GitHub", href: githubUrl },
  ],
} as const;
