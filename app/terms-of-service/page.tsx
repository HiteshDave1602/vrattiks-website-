import type { Metadata } from "next";
import LegalDocument from "../components/LegalDocument";
import { termsOfService, termsOfServiceMeta } from "../lib/termsOfService";
import { ogImage } from "../lib/site";

/* Legal page, linked from the footer's Legal column. Same layout as the
   Privacy Policy; text lives in app/lib/termsOfService.ts. */

const description =
  "The terms that govern use of Vrattiks Intelligence LLP's website, WhatsApp CRM, Lead Ads integration and AI automation services.";

export const metadata: Metadata = {
  title: "Terms of Service",
  description,
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | Vrattiks Intelligence",
    description,
    url: "/terms-of-service",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImage],
    title: "Terms of Service | Vrattiks Intelligence",
    description,
  },
};

export default function TermsOfServicePage() {
  return <LegalDocument title="Terms of Service" meta={termsOfServiceMeta} sections={termsOfService} />;
}
