import Link from "next/link";
import { siteConfig } from "@/app/site.config";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <div className="text-lg font-garamond font-semibold tracking-tight text-black">
              {siteConfig.name}
            </div>
            {/* <div className="text-sm text-black/60">
              {siteConfig.role} · {siteConfig.location}
            </div> */}
          </div>
          <div className="font-delius flex flex-wrap items-center gap-2">
            {siteConfig.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="rounded-full border border-black/10 px-4 py-2 text-sm text-black/70 hover:bg-black/5 hover:text-black"
              >
                {s.label}
              </a>
            ))}
            <Link
              href="/contact"
              className=" rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 text-sm text-black/50 font-garamond font-bold">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
