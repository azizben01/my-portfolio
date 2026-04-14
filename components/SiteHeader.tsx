import Link from "next/link";
import { siteConfig } from "@/app/site.config";

export function SiteHeader() {
  return (
    <>
      {/* Spacer to push header down when not scrolling */}
      <div className="h-5" />

      <header className="font-delius sticky top-4 z-50 mx-auto rounded-full border border-white/20 bg-[var(--accent)] backdrop-blur-lg transition-all duration-300">
        <div className="flex w-full items-center justify-between px-5 py-3">
          <Link
            href="/"
            className="rounded-full px-3 py-1.5 text-xl font-semibold tracking-tight text-white transition-colors hover:bg-white/10"
          >
            {siteConfig.name}
          </Link>

          <nav className="flex items-center gap-1 text-xl font-medium">
            <Link
              href="/#services"
              className="rounded-full px-3 py-1.5 text-white transition-all hover:bg-white/10"
            >
              Services
            </Link>
            <Link
              href="/#work"
              className="rounded-full px-3 py-1.5 text-white transition-all hover:bg-white/10"
            >
              Work
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-white px-4 py-1.5 text-[var(--accent)] transition-all hover:bg-white/90"
            >
              {siteConfig.ctaLabel}
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
