import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/app/site.config";
import { projects } from "@/lib/projects";
import LogoLoop from "@/components/LogoLoop";

export default function Home() {
  const partnerLogos = [
    { src: "/logos/next.png", alt: "Partenaire 1", width: 50, height: 60 },
    { src: "/logos/postgres.png", alt: "Partenaire 2", width: 50, height: 60 },
    { src: "/logos/cursor.png", alt: "Partenaire 3", width: 50, height: 60 },
    { src: "/logos/golang.png", alt: "Partenaire 4", width: 50, height: 60 },
    { src: "/logos/tailwind.png", alt: "Partenaire 5", width: 50, height: 60 },
  ];

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(46,155,178,0.25),rgba(255,255,255,0)_60%)]" />

        <div className="container-x relative py-16 sm:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col gap-7">
              <div className="font-delius inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm tracking-tight text-black/70 shadow-sm">
                <span className="inline-flex h-6 items-center rounded-full bg-black px-3 font-semibold text-white">
                  Available for your projects
                </span>
                {/* <span className="hidden sm:inline">
                  Available for select projects
                </span> */}
              </div>

              <h1 className="text-balance font-garamond text-[54px] font-semibold leading-[0.95] tracking-tight text-black sm:text-[72px] lg:text-[84px]">
                Hi, I’m a
                <br />
                web app
                <br />
                developer
              </h1>

              <p className="font-garamond font-semibold max-w-xl text-xl leading-8 text-black/60">
                I build modern web apps with efficient tools and clean component
                architecture — focused on performance, accessibility, and
                maintainability.
              </p>

              <div className="font-delius flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white hover:bg-black/90 sm:w-auto"
                >
                  Contact me
                </Link>
                <a
                  href="#work"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-black/80 hover:bg-black/5 sm:w-auto"
                >
                  See selected work
                  <Icon name="arrowRight" className="h-5 w-5" />
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
                    {/* <div className="text-sm font-semibold text-black/70">
                      {siteConfig.location}
                    </div> */}
                    <div className="mt-1 flex items-center justify-between">
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

              <div className="font-garamond w-full rounded-3xl bg-[linear-gradient(135deg,rgba(46,155,178,0.20),rgba(124,58,237,0.16))] p-[1px]">
                <div className="rounded-3xl bg-white px-6 py-5">
                  <div className="text-sm font-semibold text-black/60">
                    Recent projects I've worked on
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold tracking-tight text-black/35">
                    <span>Digital Loan Management System</span>
                    <span>Borrower tracking</span>
                    <span>Payment scheduling</span>
                    <span>Dashboard analytics</span>
                  </div>
                </div>
              </div>

              <div className="font-delius flex w-full flex-wrap gap-2 lg:justify-end">
                {siteConfig.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/70 hover:bg-black/5"
                  >
                    <Icon name="link" className="h-4 w-4" />
                    {s.label}
                  </a>
                ))}
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

      <section id="services" className="container-x py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="font-garamond">
            <h2 className="text-5xl font-semibold tracking-tight sm:text-5xl">
              How Can I
              <br />
              Assist You?
            </h2>
            <p className="mt-4 font-semibold max-w-md text-lg leading-8 text-black/60">
              Focused help across full-stack web apps, front-end architecture,
              and UI engineering with modern visuals on a clean white base.
            </p>
          </div>

          <div className="font-garamond font-semibold grid gap-4 sm:grid-cols-2">
            <div className="soft-card p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black/5 text-black/70">
                  <Icon name="brush" className="h-5 w-5" />
                </div>
                <div className="text-sm font-semibold text-black/40">01</div>
              </div>
              <div className="mt-4 text-lg font-semibold tracking-tight">
                Frontend Engineering
              </div>
              <p className="mt-2 text-sm leading-6 text-black/60">
                Component systems, responsive layouts, and delightful
                interactions — built with accessibility and performance in mind.
              </p>
            </div>

            <div className="soft-card p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black/5 text-black/70">
                  <Icon name="code" className="h-5 w-5" />
                </div>
                <div className="text-sm font-semibold text-black/40">02</div>
              </div>
              <div className="mt-4 text-lg font-semibold tracking-tight">
                Full-stack Web Apps
              </div>
              <p className="mt-2 text-sm leading-6 text-black/60">
                Next.js apps with auth, APIs, databases, and deployments — built
                to scale with clean patterns and pragmatic trade-offs.
              </p>
            </div>

            <div className="soft-card p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black/5 text-black/70">
                  <Icon name="penTool" className="h-5 w-5" />
                </div>
                <div className="text-sm font-semibold text-black/40">03</div>
              </div>
              <div className="mt-4 text-lg font-semibold tracking-tight">
                UI Implementation
              </div>
              <p className="mt-2 text-sm leading-6 text-black/60">
                Pixel-tight builds from Figma with reusable components and
                design tokens — without the “template” look.
              </p>
            </div>

            <div className="soft-card p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black/5 text-black/70">
                  <Icon name="type" className="h-5 w-5" />
                </div>
                <div className="text-sm font-semibold text-black/40">04</div>
              </div>
              <div className="mt-4 text-lg font-semibold tracking-tight">
                Performance & Quality
              </div>
              <p className="mt-2 text-sm leading-6 text-black/60">
                Core Web Vitals, testing, and production hardening — so your app
                stays fast, stable, and easy to evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="font-garamond font-semibold container-x pb-20"
      >
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-lg font-semibold text-black/50">
              Selected work
            </div>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              A few projects I’m proud of
            </h2>
          </div>
          <Link
            href="/contact"
            className="font-delius hidden rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black/80 hover:bg-black/5 sm:inline-flex"
          >
            Let’s work together
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.slug}
              href={p.href}
              className="group soft-card overflow-hidden"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[linear-gradient(120deg,rgba(46,155,178,0.22),rgba(0,0,0,0.02),rgba(124,58,237,0.16))]">
                {p.imageSrc && (
                  <Image
                    src={p.imageSrc}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                )}
                <div className="absolute inset-0 " />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-md font-semibold tracking-tight text-black/45">
                    {p.year}
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-black/50">
                    View
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-3 text-xl font-semibold tracking-tight">
                  {p.title}
                </div>
                <p className="mt-2 text-sm leading-6 text-black/60">
                  {p.description}
                </p>
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
              </div>
            </a>
          ))}
        </div>
        <div className="mt-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-lg font-semibold text-black/50">
                Stack application
              </div>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
                Frequently used stack{" "}
              </h2>
            </div>
          </div>
          <LogoLoop logos={partnerLogos} />
        </div>
      </section>
    </div>
  );
}
