import Link from "next/link";
import { siteConfig } from "@/app/site.config";

export function SiteHeader() {
  return (
    <>
      {/* Spacer to push header down when not scrolling */}
      <div className="h-5" />

      <header className="font-delius sticky top-4 z-50 mx-auto rounded-full border border-white/20 bg-[var(--accent)] backdrop-blur-lg transition-all duration-300">
        <div className="flex w-full items-center justify-between gap-2 px-3 py-2 sm:px-5 sm:py-3">
          <Link
            href="/"
            className="truncate rounded-full px-3 py-1.5 text-base font-semibold tracking-tight text-white transition-colors hover:bg-white/10 sm:text-xl"
          >
            {siteConfig.name}
          </Link>

          <nav className="flex shrink-0 items-center gap-1 text-base font-medium sm:text-xl">
            <Link
              href="/#skills"
              className="hidden rounded-full px-3 py-1.5 text-white transition-all hover:bg-white/10 md:inline-flex"
            >
              Skills
            </Link>
            <Link
              href="/#projects"
              className="rounded-full px-3 py-1.5 text-white transition-all hover:bg-white/10"
            >
              Projects
            </Link>
            <Link
              href="/#about"
              className="hidden rounded-full px-3 py-1.5 text-white transition-all hover:bg-white/10 md:inline-flex"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="rounded-full bg-white px-4 py-1.5 text-[var(--accent)] transition-all hover:bg-white/90"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
