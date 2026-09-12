import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const siteUrl = "https://mrittikasarkar.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mrittika Sarkar — React Native Developer",
  description:
    "React Native Developer with 4+ years of experience building cross-platform mobile applications for iOS and Android.",
  openGraph: {
    title: "Mrittika Sarkar — React Native Developer",
    description:
      "React Native Developer with 4+ years of experience building cross-platform mobile applications for iOS and Android.",
    url: siteUrl,
    siteName: "Mrittika Sarkar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mrittika Sarkar — React Native Developer",
    description:
      "React Native Developer with 4+ years of experience building cross-platform mobile applications for iOS and Android.",
  },
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
