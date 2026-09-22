import { ogContentType, ogSize, renderOgImage } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    label: "Digital garden",
    title: `Waldy — ${site.author}`,
    subtitle: `${site.jobTitle} · ${site.location}`,
  });
}
