import type { Metadata } from "next";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.author} (Waldy) — ${site.jobTitle} based in ${site.location}, currently open for opportunities.`,
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <main className="page-column text-base leading-[1.75] text-foreground sm:text-lg">
      <h1 className="page-title">Hi, I&apos;m waldy</h1>

      <div className="mt-6 h-px w-14 bg-foreground/50 sm:mt-8" aria-hidden />

      <p className="mt-8 sm:mt-10">
        I&apos;m an engineer. I build and tinker with things I like.
      </p>
      <p className="mt-4">
        I made this website as my digital garden, where I can share my blog that
        I wrote, my thoughts, perspective, and experiments.
      </p>
      <p className="mt-8 sm:mt-10">
        I&apos;m a person loving the style of minimal, where less is more in an
        elegant way.
      </p>
      <p className="mt-4">
        But I don&apos;t have an eye for visual art. And this website is my best
        attempt to visualize, bringing the style{" "}
        <mark className="bg-primary px-1 text-primary-foreground">
          I think that I love
        </mark>{" "}
        to real digital world.
      </p>
      <p className="mt-8 sm:mt-10">
        My current status:{" "}
        <span className="font-medium text-emerald-400">
          Opening For Opportunity
        </span>
      </p>
      <p className="mt-2">
        Current location:{" "}
        <span className="bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text font-medium text-transparent">
          Viet Nam / Phu Quoc
        </span>
      </p>
      <p className="mt-2">
        If you&apos;re interested,{" "}
        <Link
          href="/contact"
          className="border-b border-foreground transition-colors hover:border-muted-foreground hover:text-muted-foreground"
        >
          contact
        </Link>{" "}
        me.
      </p>

      <p className="mt-12 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground sm:mt-14 sm:text-sm">
        Resumé
        <span className="mt-1 block font-normal normal-case tracking-normal sm:mt-0 sm:ml-2 sm:inline">
          (sensitive information hidden)
        </span>
      </p>

      {/* Mobile browsers often block inline PDF — give a direct open action */}
      <a
        href="/resume-hidden.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ variant: "secondary", size: "sm" }),
          "mt-4 inline-flex sm:hidden",
        )}
      >
        Open PDF
      </a>

      <div className="mt-4 hidden h-[min(70vh,700px)] w-full overflow-hidden border border-border bg-muted/30 sm:block">
        <object
          data="/resume-hidden.pdf"
          type="application/pdf"
          className="h-full w-full"
        >
          <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              Your device doesn&apos;t support inline PDF previews.
            </p>
            <Button variant="secondary" size="sm">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                View PDF directly
              </a>
            </Button>
          </div>
        </object>
      </div>
    </main>
  );
}
