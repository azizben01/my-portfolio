import Link from "next/link";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/app/site.config";

export default function ContactPage() {
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    `Project inquiry — ${siteConfig.name}`,
  )}`;

  return (
    <div className="container-x py-14 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold tracking-tight text-black/70">
            <Icon name="mail" className="h-4 w-4" />
            Contact
          </div>
          <h1 className="font-garamond mt-6 text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl">
            Let’s ship a web app you’re proud of.
          </h1>
          <p className="font-garamond font-semibold mt-5 max-w-xl text-lg leading-8 text-black/60">
            Email me with a quick overview, timeline, and any links. I’ll reply
            with a plan and next steps.
          </p>

          <div className="font-delius mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={mailto}
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white hover:bg-black/90 sm:w-auto"
            >
              Email me
            </a>
            <Link
              href="/"
              className=" font-delius inline-flex h-12 w-full items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-black/80 hover:bg-black/5 sm:w-auto"
            >
              Back to home
            </Link>
          </div>
        </div>

        <div className="font-garamond soft-card p-6 sm:p-8">
          <div className="text-sm font-semibold text-black/50">Email</div>
          <a
            href={mailto}
            className="mt-2 inline-flex items-center gap-2 text-xl font-semibold tracking-tight hover:underline"
          >
            {siteConfig.email}
            <Icon name="arrowRight" className="h-5 w-5 text-black/50" />
          </a>

          <div className="mt-8 rounded-2xl border border-black/10 bg-white p-5">
            <div className="text-md font-semibold tracking-tight">
              What to include
            </div>
            <ul className="mt-3 space-y-2 text-lg font-semibold leading-6 text-black/60">
              <li>- What you’re building (and who it’s for)</li>
              <li>- Timeline + budget range (if available)</li>
              <li>- Links, references, or screenshots</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
