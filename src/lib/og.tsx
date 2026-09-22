import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/**
 * Satori cannot resolve CSS variables, so these literals mirror the tokens in
 * globals.css. Keep them in sync when the palette changes.
 */
const color = {
  background: "#0a0908",
  foreground: "#f5f4f1",
  muted: "#a5a099",
  border: "#2a2826",
  accent: "#b8a4ec",
};

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

function titleSize(title: string): number {
  if (title.length <= 28) return 76;
  if (title.length <= 48) return 64;
  if (title.length <= 72) return 54;
  return 46;
}

export function renderOgImage({
  label,
  title,
  subtitle,
  meta,
}: {
  label: string;
  title: string;
  subtitle?: string;
  meta?: string;
}) {
  const clamped = title.length > 96 ? `${title.slice(0, 95)}…` : title;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: color.background,
          color: color.foreground,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 32,
              height: 2,
              backgroundColor: color.accent,
              marginRight: 20,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 8,
              color: color.muted,
            }}
          >
            {label.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: titleSize(clamped),
              lineHeight: 1.08,
              letterSpacing: -1.5,
            }}
          >
            {clamped}
          </div>
          {subtitle ? (
            <div
              style={{
                display: "flex",
                marginTop: 24,
                fontSize: 28,
                color: color.muted,
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: `1px solid ${color.border}`,
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 24 }}>
            {site.url.replace(/^https?:\/\//, "")}
          </div>
          {meta ? (
            <div style={{ display: "flex", fontSize: 22, color: color.muted }}>
              {meta}
            </div>
          ) : null}
        </div>
      </div>
    ),
    ogSize,
  );
}
