import type { Metadata } from "next";
import Script from "next/script";
import { Urbanist, IBM_Plex_Sans } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { themeInitScript } from "./lib/theme";
import { SITE_URL } from "./lib/site";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600"],
});

// metadataBase resolves every page's relative canonical/OG/Twitter URLs against
// the same origin the sitemap uses (NEXT_PUBLIC_SITE_URL, see app/lib/site.ts).
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vrattiks Intelligence",
    template: "%s | Vrattiks Intelligence",
  },
  description: "AI automation solutions for growing businesses",
  applicationName: "Vrattiks Intelligence",
  authors: [{ name: "Vrattiks Intelligence LLP", url: SITE_URL }],
  creator: "Vrattiks Intelligence LLP",
  publisher: "Vrattiks Intelligence LLP",
  keywords: [
    "AI automation",
    "business automation",
    "AI voice agent",
    "AI chatbot",
    "WhatsApp automation",
    "workflow automation",
    "CRM",
    "Vrattiks",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: { siteName: "Vrattiks Intelligence", locale: "en_IN", type: "website" },
  twitter: { site: "@vrattiks" },
};

/* Same GA4 property as the old vrattiks.io site, so history carries over. */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-K3JG8XP5QH";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: the inline script sets data-theme before React
    // hydrates, so <html> legitimately differs from the server render.
    <html lang="en" className={`${urbanist.variable} ${ibmPlexSans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className="flex min-h-screen flex-col"
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}