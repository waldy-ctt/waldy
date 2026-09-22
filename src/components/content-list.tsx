import Link from "next/link";

type ContentItem = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

export function ContentList({
  items,
  basePath,
}: {
  items: ContentItem[];
  basePath: "/blog" | "/projects";
}) {
  return (
    <ul className="mt-10 border-y border-border divide-y divide-border sm:mt-12">
      {items.map((item) => (
        <li key={item.slug}>
          <Link
            href={`${basePath}/${item.slug}`}
            className="group block py-5 transition-colors sm:py-6"
          >
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h2 className="text-base font-medium tracking-tight text-foreground transition-colors group-hover:text-accent-violet sm:text-lg">
                {item.title}
              </h2>
              <time className="font-mono text-xs tabular-nums tracking-wide text-muted-foreground sm:shrink-0">
                {item.date}
              </time>
            </div>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
