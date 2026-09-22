"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  ["about", "/about"],
  ["blog", "/blog"],
  ["projects", "/projects"],
  ["contact", "/contact"],
] as const;

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 md:grid md:h-16 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-4 md:py-0">
        <div className="flex min-w-0 items-center justify-start">
          <Link href="/" className="inline-flex items-center" aria-label="Home">
            <span
              className="h-8 w-36 bg-foreground transition-colors hover:bg-muted-foreground sm:h-9 sm:w-44"
              style={{
                maskImage: 'url("/signature.png")',
                WebkitMaskImage: 'url("/signature.png")',
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "left center",
                WebkitMaskPosition: "left center",
              }}
            />
          </Link>
        </div>

        <nav
          aria-label="Primary"
          className="flex w-full items-center justify-between gap-2 md:w-auto md:justify-center md:gap-8"
        >
          {links.map(([label, href]) => {
            const active =
              pathname === href || pathname.startsWith(`${href}/`);

            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "shrink-0 text-[10px] font-medium uppercase tracking-[0.14em] transition-colors sm:text-[11px] sm:tracking-[0.2em]",
                  active
                    ? "text-foreground"
                    : "text-secondary-foreground hover:text-muted-foreground",
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div aria-hidden className="hidden md:block" />
      </div>
    </header>
  );
}
