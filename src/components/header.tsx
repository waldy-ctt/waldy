import Link from "next/link";

export default function Header() {
  const headerList: Map<string, string> = new Map<string, string>([
    ["about", "/about"],
    ["blog", "/blog"],
    ["projects", "/projects"],
    ["contact", "/contact"],
  ]);

  return (
    <header className="grid grid-cols-3 items-center px-6 h-18 w-full">
      {/* Left: Logo */}
      <div className="flex items-center justify-start">
        <Link href="/" className="inline-flex items-center">
          <div
            className="h-10 w-48 bg-foreground transition-colors hover:bg-muted-foreground"
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
            aria-label="Home"
          />
        </Link>
      </div>

      {/* Center: Always dead-center of the entire viewport */}
      <nav className="flex flex-row items-center justify-center space-x-10 text-xl">
        {Array.from(headerList.entries()).map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="text-secondary-foreground hover:cursor-pointer hover:text-muted-foreground transition-colors"
          >
            {label.toUpperCase()}
          </Link>
        ))}
      </nav>

      {/* Right: Empty balance spacer (or spot for theme toggle / social icons later) */}
      <div className="flex items-center justify-end" />
    </header>
  );
}
