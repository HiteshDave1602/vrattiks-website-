import { industries, services, useCases, contactDetails } from "../lib/content";
import { SITE_URL } from "../lib/site";

/* /llms.txt (llmstxt.org) — plain-Markdown summary for AI answer engines
   (ChatGPT, Claude, Perplexity, Gemini). Built from content.ts so it never
   drifts from the real pages. Static at build time. */
export const dynamic = "force-static";

export function GET() {
  const list = (base: string, items: { name: string; slug: string; description?: string }[]) =>
    items.map((i) => `- [${i.name}](${SITE_URL}${base}/${i.slug})${i.description ? `: ${i.description}` : ""}`).join("\n");

  const body = `# Vrattiks Intelligence

> Vrattiks Intelligence LLP is an Indian company that builds AI voice agents, chatbots, workflow automation, websites, WhatsApp automation and CRM systems for growing businesses.

Co-founders: Arpit Patel (CEO), Hitesh Dave (CTO), Ankur Rayka (CRO).
${contactDetails.email ? `Contact: ${contactDetails.email}` : ""}${contactDetails.phone ? `, ${contactDetails.phone}` : ""}

## Services

${list("/services", services)}

## Industries

${list("/industries", industries)}

## Use cases

${useCases.map((u) => `- ${u.name}`).join("\n")}: ${SITE_URL}/use-cases

## Company

- [About and founders](${SITE_URL}/company)
- [Contact](${SITE_URL}/contact)
- [Privacy policy](${SITE_URL}/privacy-policy)
- [Terms of service](${SITE_URL}/terms-of-service)
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
