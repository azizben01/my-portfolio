import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/app/site.config";
import { projects } from "@/lib/projects";
import LogoLoop from "@/components/LogoLoop";
import { ContactSection } from "@/components/ContactSection";

// This page is rendered at build time, so we can check the disk once to see
// which screenshots exist. Missing ones fall back to a gradient placeholder.
function hasPublicFile(src?: string) {
  return !!src && existsSync(join(process.cwd(), "public", src));
}

const skills = [
  {
    icon: "brush",
    title: "Front-end",
    items: [
      "Next.js, React, TypeScript",
      "Tailwind CSS",
      "Responsive UI built from Figma",
    ],
  },
  {
    icon: "server",
    title: "Deployment & Linux",
    items: [
      "Ubuntu VPS",
      "Nginx reverse proxy + SSL",
      "PM2, SSH keys",
      "Firewall + fail2ban",
      "Staging subdomains",
    ],
  },
  {
    icon: "code",
    title: "Back-end basics",
    items: ["REST APIs", "PostgreSQL", "Postman", "Go (Gin) in projects"],
  },
] as const;

const hostingSteps = [
  { name: "Browser", detail: "Visitor opens the site" },
  { name: "DNS", detail: "Domain + staging subdomain" },
  { name: "Nginx", detail: "SSL, reverse proxy" },
  { name: "PM2", detail: "Next.js app, Go API" },
  { name: "PostgreSQL", detail: "Data" },
];

const hostingChecklist = [
  "SSH key login with a non-root user",
  "Root login disabled",
  "Firewall rules (only the ports I need)",
  "fail2ban against brute-force logins",
  "Git-based deploys from GitHub",
];

const stackLogos = [
  { src: "/logos/next.png", alt: "Next.js", width: 50, height: 60 },
  { src: "/logos/postgres.png", alt: "PostgreSQL", width: 50, height: 60 },
  { src: "/logos/cursor.png", alt: "Cursor", width: 50, height: 60 },
  { src: "/logos/golang.png", alt: "Go", width: 50, height: 60 },
  { src: "/logos/tailwind.png", alt: "Tailwind CSS", width: 50, height: 60 },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(46,155,178,0.25),rgba(255,255,255,0)_60%)]" />

        <div className="container-x relative py-16 sm:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col gap-7">
              <div className="font-delius inline-flex w-fit items-center rounded-full border border-black/10 bg-white p-1.5 text-sm tracking-tight shadow-sm">
                <span className="inline-flex min-h-6 items-center gap-2 rounded-full bg-black px-3 py-0.5 font-semibold text-white">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                  Open to part-time student roles · Budapest
                </span>
              </div>

              <h1 className="text-balance font-garamond text-[46px] font-semibold leading-[0.95] tracking-tight text-black sm:text-[64px] lg:text-[76px]">
                Junior web developer who ships to production.
              </h1>

              <p className="font-garamond font-semibold max-w-xl text-xl leading-8 text-black/60">
                MSc Computer Science (Autonomous Systems) student at ELTE,
                Budapest. I build web apps with Next.js and TypeScript, and run
                the Linux server that hosts them.
              </p>

              <div className="font-delius flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={siteConfig.cvPath}
                  download
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black px-6 text-sm font-semibold text-white hover:bg-black/90 sm:w-auto"
                >
                  <Icon name="download" className="h-5 w-5" />
                  Download CV
                </a>
                <a
                  href="#projects"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-black/80 hover:bg-black/5 sm:w-auto"
                >
                  See projects
                  <Icon name="arrowRight" className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.githubUrl}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-black/80 hover:bg-black/5 sm:w-auto"
                >
                  <Icon name="code" className="h-5 w-5" />
                  GitHub
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <div className="soft-card w-full overflow-hidden p-3 sm:p-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[linear-gradient(120deg,rgba(0,0,0,0.02),rgba(46,155,178,0.22),rgba(0,0,0,0.03))]">
                  <Image
                    src={siteConfig.heroImage.src}
                    alt={siteConfig.heroImage.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(0,0,0,0.10))]" />
                  <div className="font-garamond absolute bottom-4 left-4 right-4 rounded-2xl border border-black/10 bg-white/80 px-4 py-3 backdrop-blur">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="text-sm font-semibold tracking-tight">
                        {siteConfig.name}
                      </div>
                      <div className="rounded-full bg-black px-3 py-1 text-[11px] font-semibold text-white">
                        {siteConfig.role.toUpperCase()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-8 sm:py-10">
        <div className="overflow-hidden rounded-[28px] bg-[var(--accent)]">
          <div className="px-7 py-10 sm:px-10 sm:py-12">
            <p className="font-garamond max-w-5xl text-pretty text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              {siteConfig.mission}
            </p>
            <div className="font-delius mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-semibold text-white/70">
              <span>Plan</span>
              <span>Design</span>
              <span>Build</span>
              <span>Debug</span>
              <span>Deploy</span>
              <span>Maintain</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── What I can do ── */}
      <section id="skills" className="container-x scroll-mt-28 py-14 sm:py-16">
        <div className="font-garamond">
          <h2 className="text-5xl font-semibold tracking-tight">What I can do</h2>
          <p className="mt-4 max-w-xl text-lg font-semibold leading-8 text-black/60">
            The tools I use on real projects — and can talk through in detail.
          </p>
        </div>

        <div className="font-garamond font-semibold mt-10 grid gap-4 md:grid-cols-3">
          {skills.map((s, i) => (
            <div key={s.title} className="soft-card p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black/5 text-black/70">
                  <Icon name={s.icon} className="h-5 w-5" />
                </div>
                <div className="text-sm font-semibold text-black/40">
                  0{i + 1}
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                {s.title}
              </h3>
              <ul className="mt-3 space-y-1.5 text-base leading-6 text-black/60">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Icon
                      name="check"
                      className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ── */}
      <section
        id="projects"
        className="font-garamond font-semibold container-x scroll-mt-28 pb-20"
      >
        <div className="text-lg font-semibold text-black/50">Projects</div>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          Sites I built and run in production
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.slug}
              className="group soft-card flex flex-col overflow-hidden"
            >
              <a
                href={p.liveUrl}
                aria-label={`Open the live ${p.title} site`}
                className="relative block aspect-[16/10] w-full overflow-hidden bg-[linear-gradient(120deg,rgba(46,155,178,0.22),rgba(0,0,0,0.02),rgba(124,58,237,0.16))]"
              >
                {hasPublicFile(p.imageSrc) ? (
                  <Image
                    src={p.imageSrc!}
                    alt={`Screenshot of the ${p.title} website`}
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-2xl tracking-tight text-black/50">
                    {new URL(p.liveUrl).hostname}
                  </div>
                )}
              </a>

              <div className="flex flex-1 flex-col p-6">
                {p.label && (
                  <div className="font-delius w-fit rounded-full bg-black/5 px-3 py-1 text-xs text-black/60">
                    {p.label}
                  </div>
                )}
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-base leading-6 text-black/60">
                  {p.problem}
                </p>

                <div className="mt-4 text-sm uppercase tracking-wide text-black/45">
                  What I did
                </div>
                <ul className="mt-2 space-y-1.5 text-base leading-6 text-black/70">
                  {p.whatIDid.map((b) => (
                    <li key={b} className="flex gap-2">
                      <Icon
                        name="check"
                        className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]"
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-black/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-sm italic leading-5 text-black/45">
                  Built with AI assistance — I handled structure, integration
                  and deployment.
                </p>

                <div className="font-delius mt-auto flex flex-wrap gap-2 pt-5">
                  <a
                    href={p.liveUrl}
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-black px-5 text-sm text-white hover:bg-black/90"
                  >
                    Live
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </a>
                  {p.codeUrl && (
                    <a
                      href={p.codeUrl}
                      className="inline-flex h-11 items-center gap-2 rounded-full border border-black/10 bg-white px-5 text-sm text-black/80 hover:bg-black/5"
                    >
                      <Icon name="code" className="h-4 w-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── How I host my projects ── */}
      <section
        id="hosting"
        className="font-garamond font-semibold container-x scroll-mt-28 pb-20"
      >
        <div className="text-lg text-black/50">Infrastructure</div>
        <h2 className="mt-2 text-4xl tracking-tight sm:text-5xl">
          How I host my projects
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-black/60">
          My self-hosted sites run on one Ubuntu VPS that I set up and maintain
          myself. This is the path a request takes:
        </p>

        {/* Diagram: stacked vertically on phones, one row on large screens */}
        <ol className="mt-10 flex flex-col items-stretch gap-2 lg:flex-row lg:items-center">
          {hostingSteps.map((step, i) => (
            <li
              key={step.name}
              className="flex flex-col items-center gap-2 lg:flex-1 lg:flex-row"
            >
              <div className="soft-card w-full px-5 py-4 text-center">
                <div className="text-xl tracking-tight">{step.name}</div>
                <div className="mt-1 text-sm text-black/55">{step.detail}</div>
              </div>
              {i < hostingSteps.length - 1 && (
                <Icon
                  name="arrowRight"
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 rotate-90 text-[var(--accent)] lg:rotate-0"
                />
              )}
            </li>
          ))}
        </ol>

        <div className="soft-card mt-8 p-6 sm:p-8">
          <h3 className="text-xl tracking-tight">Server hardening checklist</h3>
          <ul className="mt-4 grid gap-3 text-base text-black/70 sm:grid-cols-2">
            {hostingChecklist.map((item) => (
              <li key={item} className="flex gap-2">
                <Icon
                  name="check"
                  className="mt-1 h-4 w-4 shrink-0 text-emerald-600"
                />
                {item}
              </li>
            ))}
            <li className="flex gap-2 text-black/50">
              <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-black/30 text-[10px]">
                …
              </span>
              Backups: next on my list.
            </li>
          </ul>
        </div>
      </section>

      {/* ── About ── */}
      <section
        id="about"
        className="font-garamond font-semibold container-x scroll-mt-28 pb-20"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-lg text-black/50">About</div>
            <h2 className="mt-2 text-4xl tracking-tight sm:text-5xl">
              A bit about me
            </h2>
          </div>
          <ul className="space-y-3 text-lg leading-8 text-black/65">
            <li>
              I’m from Burkina Faso, studied in Rwanda, and now live in Budapest,
              where I’m doing an MSc in Computer Science at ELTE.
            </li>
            <li>
              I speak French and English fluently, and I’m learning Hungarian.
            </li>
            <li>
              I started with mobile front-end in React Native, then moved to the
              web.
            </li>
            <li>
              At university I’m currently strengthening my Python, algorithms
              and data structures.
            </li>
          </ul>
        </div>

        <div className="mt-20">
          <div className="text-lg text-black/50">Stack</div>
          <h2 className="mt-2 text-4xl tracking-tight sm:text-5xl">
            Tools I use most
          </h2>
          <LogoLoop logos={stackLogos} />
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="container-x scroll-mt-28 pb-20">
        <ContactSection />
      </section>
    </div>
  );
}
