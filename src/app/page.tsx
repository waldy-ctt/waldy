import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { absoluteUrl, site } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 sm:py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": absoluteUrl("/#person"),
              name: site.author,
              alternateName: site.handle,
              url: site.url,
              email: `mailto:${site.email}`,
              jobTitle: site.jobTitle,
              description: site.description,
              sameAs: [...site.sameAs],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Phu Quoc",
                addressCountry: "VN",
              },
            },
            {
              "@type": "WebSite",
              "@id": absoluteUrl("/#website"),
              name: site.name,
              url: site.url,
              description: site.description,
              inLanguage: "en",
              author: { "@id": absoluteUrl("/#person") },
              publisher: { "@id": absoluteUrl("/#person") },
            },
          ],
        }}
      />

      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
          Waldy
          <span className="mt-1 block text-lg font-normal tracking-normal text-muted-foreground sm:text-xl md:text-2xl">
            Le Thanh Hieu
          </span>
        </h1>

        <div className="mt-6 h-px w-14 bg-foreground/50 sm:mt-8" aria-hidden />

        <div className="mt-6 space-y-2 text-sm leading-relaxed sm:mt-8 sm:text-base">
          <p className="text-foreground">
            Software engineer. Building things I like.
          </p>
          <p className="text-muted-foreground">
            Personal workspace and digital garden.
          </p>
        </div>

        <Link
          href="/about"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-8 inline-flex h-auto min-h-11 max-w-full whitespace-normal px-4 py-3 text-center text-sm tracking-wide sm:mt-10 sm:px-6",
          )}
        >
          Let&apos;s understand me a bit further?
        </Link>
      </div>
    </main>
  );
}
