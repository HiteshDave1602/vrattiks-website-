import type { Metadata } from "next";
import Hero from "./components/Hero";
import KpiResults from "./components/KpiResults";
import WhyBusinessesNeedAI from "./components/WhyBusinessesNeedAI";
import WhyVrattiks from "./components/WhyVrattiks";
import ServicesOverview from "./components/ServicesOverview";
import UseCases from "./components/UseCases";
import Industries from "./components/Industries";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import ClientLogos from "./components/ClientLogos";
import FAQ, { faqs } from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import { ogImage, SITE_URL } from "./lib/site";
import { contactDetails } from "./lib/content";

export const metadata: Metadata = {
  title: {
    absolute: "Vrattiks Intelligence | AI Automation for Growing Businesses",
  },
  description:
    "Vrattiks builds AI voice agents, chatbots, workflow automation, websites, WhatsApp automation, and CRM systems for growing businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vrattiks Intelligence | AI Automation for Growing Businesses",
    description:
      "AI voice agents, chatbots, workflow automation, websites, WhatsApp automation, and CRM systems for growing businesses.",
    url: "/",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImage],
    title: "Vrattiks Intelligence | AI Automation for Growing Businesses",
    description:
      "AI voice agents, chatbots, workflow automation, websites, WhatsApp automation, and CRM systems for growing businesses.",
  },
};

/* Organization + founders (same people as app/company/page.tsx and
   Founders.tsx — keep in step), WebSite, and the on-page FAQ. Search engines
   and AI answer engines read this to know who runs Vrattiks and what it does. */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Vrattiks Intelligence",
      legalName: "Vrattiks Intelligence LLP",
      url: SITE_URL,
      logo: `${SITE_URL}/brand/vrattiks-logo.png`,
      description:
        "Vrattiks builds AI voice agents, chatbots, workflow automation, websites, WhatsApp automation, and CRM systems for growing businesses.",
      areaServed: "IN",
      sameAs: ["https://www.linkedin.com/company/vrattiks/"],
      ...(contactDetails.email && {
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: contactDetails.email,
          ...(contactDetails.phone && { telephone: contactDetails.phone }),
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      }),
      founder: [
        {
          "@type": "Person",
          name: "Arpit Patel",
          jobTitle: "Co-Founder & CEO",
          sameAs: ["https://www.linkedin.com/in/arpit-patel96/"],
        },
        {
          "@type": "Person",
          name: "Hitesh Dave",
          jobTitle: "Co-Founder & CTO",
          sameAs: ["https://www.linkedin.com/in/hitesh-dave-63591a143/"],
        },
        { "@type": "Person", name: "Ankur Rayka", jobTitle: "Co-Founder & CRO" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Vrattiks Intelligence",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Hero />
      <KpiResults />
      <WhyBusinessesNeedAI />
      <Testimonials />
      <ClientLogos />
      <WhyVrattiks />
      <ServicesOverview layout="slider" />
      <UseCases />
      <Industries layout="timeline" limit={6} />
      <Process />
      <FAQ />
      <FinalCTA />
    </>
  );
}
