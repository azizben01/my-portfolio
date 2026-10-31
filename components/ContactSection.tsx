import { Icon } from "@/components/Icon";
import { siteConfig } from "@/app/site.config";

// Used on the home page (#contact) and on /contact, so both stay in sync.
export function ContactSection({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    "Part-time developer role",
  )}`;

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <div className="font-delius inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold tracking-tight text-black/70">
          <Icon name="mail" className="h-4 w-4" />
          Contact
        </div>
        <Heading className="font-garamond mt-6 text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl">
          Hiring a part-time student developer?
        </Heading>
        <p className="font-garamond font-semibold mt-5 max-w-xl text-lg leading-8 text-black/60">
          I’m based in Budapest and can work alongside my studies at ELTE.
          Email me and I’ll reply quickly.
        </p>

        <div className="font-delius mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={mailto}
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white hover:bg-black/90 sm:w-auto"
          >
            Email me
          </a>
          <a
            href={siteConfig.cvPath}
            download
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-black/80 hover:bg-black/5 sm:w-auto"
          >
            <Icon name="download" className="h-5 w-5" />
            Download CV
          </a>
        </div>
      </div>

      <div className="font-garamond soft-card p-6 sm:p-8">
        <div className="text-sm font-semibold text-black/50">Email</div>
        <a
          href={mailto}
          className="mt-2 inline-flex items-center gap-2 break-all text-xl font-semibold tracking-tight hover:underline"
        >
          {siteConfig.email}
          <Icon name="arrowRight" className="h-5 w-5 shrink-0 text-black/50" />
        </a>

        <ul className="mt-8 space-y-4 rounded-2xl border border-black/10 bg-white p-5 text-lg font-semibold">
          <li className="flex items-center gap-3">
            <Icon name="link" className="h-5 w-5 shrink-0 text-black/50" />
            <a href={siteConfig.linkedinUrl} className="hover:underline">
              LinkedIn
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Icon name="code" className="h-5 w-5 shrink-0 text-black/50" />
            <a href={siteConfig.githubUrl} className="hover:underline">
              GitHub — azizben01
            </a>
          </li>
          <li className="flex items-center gap-3 text-black/70">
            <Icon name="mapPin" className="h-5 w-5 shrink-0 text-black/50" />
            {siteConfig.location}
          </li>
        </ul>
      </div>
    </div>
  );
}
