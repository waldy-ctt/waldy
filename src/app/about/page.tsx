import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-6 mt-20 text-lg leading-relaxed text-primary-foreground mb-20">
        <h1 className="text-4xl text-primary-foreground">Hi, I'm waldy</h1>
        <p className="mt-10">
          I'm an engineer. I build and tinker with things I like.
        </p>
        <p>
          I made this website as my digital garden, where I can share my blog
          that I wrote, my thoughts, perspective, and experiments.
        </p>
        <p className="mt-10">
          I'm a person loving the style of minimal, where less is more in an
          elegant way.
        </p>
        <p className="">
          But I don't have an eye for visual art. And this website is my best
          attempt to visualize, bringing the style{" "}
          <span className="bg-primary">I think that I love</span> to real
          digital world.
        </p>
        <p className="mt-10">
          My current status:{" "}
          <span className="text-emerald-700">Opening For Opportunity</span>
        </p>
        <p>
          Current location:{" "}
          <span className="text-transparent bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text">
            Viet Nam / Phu Quoc
          </span>
        </p>
        <p>
          If you're interested,{" "}
          <span className="text-primary-foreground border-b-1 border-primary-foreground pointer">
            <Link href="/contact">contact</Link>
          </span>{" "}
          me.
        </p>
        <p className="mt-10">
          My current Resumé (HIDDEN SENSITIVE INFORMATION)
        </p>
        <div className="w-full h-[700px] mt-5 overflow-hidden border border-border bg-muted/20">
          <object
            data="/resume-hidden.pdf"
            type="application/pdf"
            className="w-full h-full"
          >
            {/* Fallback displayed on mobile devices that disable inline PDF rendering */}
            <div className="flex flex-col items-center justify-center h-full gap-3 p-6 text-center">
              <p className="text-sm text-muted-foreground">
                Your device doesn't support inline PDF previews.
              </p>
              <Button variant="secondary" size="sm">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  View PDF directly
                </a>
              </Button>
            </div>
          </object>
        </div>
      </div>
    </>
  );
}
