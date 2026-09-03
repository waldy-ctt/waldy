import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { Analytics } from "@vercel/analytics/next";

const geistHeading = Geist({ subsets: ["latin"], variable: "--font-heading" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Waldy's digital garden",
  description:
    "Welcome to Waldy's digital garden, we can know each other more if you want.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        geistHeading.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          enableColorScheme={false}
        >
          <Analytics />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
