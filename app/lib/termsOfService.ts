import type { PolicySection } from "./privacyPolicy";

/* Terms of Service v1.0, carried over word for word from the old vrattiks.io
   site (public/terms-of-service.html). It is a legal document — have the
   client sign off any change before it ships (vrattiks-standards §3).
   Only deviation: §7.1 linked to "Privacy Policy (Section 4)" of the old
   v1.0 policy; the same Meta-permissions content is now §8 of the v2.0
   policy, so the reference points there. Inline markup: [label](href),
   **bold**; bare emails and URLs are linked automatically. */

export const termsOfServiceMeta = {
  effectiveDate: "May 5, 2026",
  lastUpdated: "May 7, 2026",
  version: "1.0",
  entity: "Vrattiks Intelligence LLP",
  copyright: "© 2026 Vrattiks Intelligence LLP. All rights reserved.",
  tagline: "Adaptive Intelligence. Built with Purpose.",
};

const whatsappBusinessPolicy = "[WhatsApp Business Policy](https://www.whatsapp.com/legal/business-policy)";
const whatsappCommercePolicy = "[WhatsApp Commerce Policy](https://www.whatsapp.com/legal/commerce-policy)";

export const termsOfService: PolicySection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    blocks: [
      {
        type: "p",
        text: 'By accessing or using any website, product, or service offered by Vrattiks Intelligence LLP ("Vrattiks", "we", "our", or "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not access or use our services.',
      },
      {
        type: "p",
        text: "These Terms apply to all visitors, users, clients, and others who access or use the Vrattiks platform, including our WhatsApp CRM, Lead Ads integration, and AI automation services available at www.vrattiks.io.",
      },
      {
        type: "p",
        text: "We reserve the right to update these Terms at any time. Material changes will be communicated via email or a notice on our website at least 30 days before they take effect.",
      },
    ],
  },
  {
    id: "company-information",
    title: "Company Information",
    blocks: [
      {
        type: "fields",
        items: [
          { label: "Legal Entity Name", value: "Vrattiks Intelligence LLP" },
          { label: "Type of Entity", value: "Limited Liability Partnership (LLP), registered in India" },
          { label: "Primary Business", value: "WhatsApp CRM, Lead Management, and AI Automation SaaS Platform" },
          { label: "Contact", value: ["Email: hitesh@vrattiks.io", "Website: www.vrattiks.io"] },
        ],
      },
    ],
  },
  {
    id: "services",
    title: "Description of Services",
    blocks: [
      { type: "p", text: "Vrattiks provides a B2B SaaS platform with the following core capabilities:" },
      {
        type: "list",
        items: [
          "Automatic capture of leads from Facebook and Instagram Lead Ad forms via the Meta Lead Ads API",
          "Lead management and CRM dashboard for organising, tracking, and following up on leads",
          "WhatsApp Business API integration for sending messages to leads and customers",
          "AI-driven customer tagging, segmentation, and workflow automation",
          "Support automation, chatbot development, and human agent handoff tools",
          "Analytics, reporting, and campaign performance dashboards",
          "Multi-tenant infrastructure enabling businesses to manage their own leads and communication channels",
        ],
      },
      {
        type: "p",
        text: "Our services are available to registered business clients only. By registering, you confirm that you are authorised to act on behalf of your organisation and that your use is lawful in your jurisdiction.",
      },
    ],
  },
  {
    id: "accounts",
    title: "Accounts & Registration",
    blocks: [
      { type: "p", text: "To access certain features of our platform, you are required to create an account. You agree to:" },
      {
        type: "list",
        items: [
          "Provide accurate, complete, and up-to-date registration information",
          "Maintain the confidentiality of your account credentials",
          "Notify us immediately of any unauthorised use of your account",
          "Be responsible for all activity that occurs under your account",
        ],
      },
      {
        type: "p",
        text: "We reserve the right to suspend or terminate accounts that violate these Terms, provide false information, or are inactive for an extended period.",
      },
    ],
  },
  {
    id: "prohibited-uses",
    title: "Prohibited Uses",
    blocks: [
      {
        type: "p",
        text: "You agree to use Vrattiks services only for lawful, legitimate business purposes. The following uses are strictly prohibited:",
      },
      { type: "h3", text: "5.1 Messaging Violations" },
      {
        type: "list",
        items: [
          "Sending WhatsApp messages to individuals who have not given explicit opt-in consent",
          "Sending spam, unsolicited bulk messages, or messages from purchased or scraped contact lists",
          "Failing to honour opt-out requests within 24 hours",
          "Sending messages that are deceptive, misleading, or designed to surprise or pressure recipients",
        ],
      },
      { type: "h3", text: "5.2 Restricted Product Categories" },
      { type: "p", text: "You must not use Vrattiks to promote, sell, or facilitate any of the following restricted categories:" },
      {
        type: "list",
        items: [
          "Cryptocurrency, crypto exchanges, initial coin offerings (ICOs), or unregulated financial products",
          "Pharmaceuticals, prescription drugs, or controlled substances without proper regulatory authorisation",
          "Weapons, firearms, ammunition, or explosive materials",
          "Adult content, pornography, or sexually explicit material",
          "Gambling, betting, or wagering services not properly licensed in applicable jurisdictions",
          "Tobacco, alcohol, or other age-restricted products marketed to minors",
          `Any product or service prohibited under the ${whatsappCommercePolicy} or Meta Platform Policies`,
        ],
      },
      { type: "h3", text: "5.3 Platform Abuse" },
      {
        type: "list",
        items: [
          "Harassing, threatening, or deceiving end-users or third parties",
          "Distributing malware, phishing content, or fraudulent communications",
          "Attempting to gain unauthorised access to our systems or another user's account",
          "Reverse-engineering, decompiling, or disassembling any part of our platform",
          "Using our services in a manner that could damage, disable, or impair platform operation",
          "Violating Meta's WhatsApp Business Policy, WhatsApp Commerce Policy, or any applicable platform policies",
        ],
      },
      {
        type: "p",
        text: "Violation of this policy may result in immediate suspension of your account and services. We reserve the right to report violations to relevant authorities or Meta/WhatsApp.",
      },
    ],
  },
  {
    id: "whatsapp-terms",
    title: "WhatsApp-Specific Terms",
    blocks: [
      { type: "h3", text: "6.1 Client Opt-In Obligations" },
      {
        type: "p",
        text: "As a Vrattiks client, you are solely responsible for collecting, maintaining, and honouring user consent for all WhatsApp communications sent through our platform. This includes:",
      },
      {
        type: "list",
        items: [
          "Obtaining explicit opt-in consent before sending any WhatsApp messages to end-users",
          "Clearly identifying your business when collecting consent",
          "Informing users of the nature and frequency of messages they will receive",
          "Honouring opt-out requests within 24 hours",
          "Maintaining verifiable consent records for audit purposes",
          "Ensuring your opt-in mechanisms comply with applicable law and Meta's policies",
        ],
      },
      { type: "h3", text: "6.2 Message Content Responsibility" },
      {
        type: "p",
        text: "You are solely responsible for the content of all WhatsApp messages sent through your account. Vrattiks does not review or pre-approve message content. You must ensure all messages comply with:",
      },
      {
        type: "list",
        items: [whatsappBusinessPolicy, whatsappCommercePolicy, "All applicable laws in your jurisdiction"],
      },
      { type: "h3", text: "6.3 Account Suspension for Policy Violations" },
      { type: "p", text: "Vrattiks may suspend or terminate your account immediately if:" },
      {
        type: "list",
        items: [
          "You send spam or messages to users who have not opted in",
          "You violate WhatsApp's Business Policy or Commerce Policy",
          "Your WhatsApp Business Account receives excessive user complaints or blocks",
          "Meta restricts or suspends your WhatsApp Business Account",
          "You promote restricted product categories listed in Section 5.2",
        ],
      },
      { type: "p", text: "Accounts sending spam will be immediately terminated without refund." },
      { type: "h3", text: "6.4 Opt-Out Compliance" },
      {
        type: "p",
        text: 'You must honour all opt-out requests within 24 hours. If an end-user replies "STOP", "Unsubscribe", or any equivalent, they must be removed from all future non-transactional messaging. Failure to comply constitutes a material breach of these Terms.',
      },
    ],
  },
  {
    id: "meta-platform-terms",
    title: "Meta Platform Terms Compliance",
    blocks: [
      {
        type: "p",
        text: "Our services are built on the Meta WhatsApp Business API and Meta Lead Ads API. By using Vrattiks, you also agree to comply with Meta's terms and policies, including:",
      },
      {
        type: "list",
        items: [
          "[Meta Platform Terms](https://developers.facebook.com/terms/)",
          "[Meta Platform Policies](https://developers.facebook.com/devpolicy/)",
          whatsappBusinessPolicy,
          whatsappCommercePolicy,
        ],
      },
      { type: "h3", text: "7.1 Permission to Access Meta Data" },
      {
        type: "p",
        text: "By connecting your Facebook or Instagram account to Vrattiks, you explicitly grant Vrattiks permission to access your Meta platform data — including lead form submissions, page metadata, and engagement data — using the permissions described in our [Privacy Policy (Section 8)](/privacy-policy#whatsapp-and-meta).",
      },
      {
        type: "p",
        text: "You confirm that you have the legal authority to grant this access and that doing so does not violate any agreement with Meta or any applicable law.",
      },
      { type: "h3", text: "7.2 Permitted Use of Meta API Data" },
      {
        type: "p",
        text: "Data accessed via the Meta Lead Ads API is used **exclusively** for the CRM and lead management functionality within Vrattiks. Specifically:",
      },
      {
        type: "list",
        items: [
          "Lead form data (name, phone, email, custom responses) is imported into your Vrattiks CRM dashboard only",
          "Lead data is not transferred to other advertising platforms, data brokers, or third parties",
          "Lead data is not used for retargeting, advertising, or profiling beyond the contracted CRM service",
          "Meta platform data is not combined with data from other sources to build advertising profiles",
        ],
      },
      {
        type: "note",
        label: "Compliance commitment",
        text: "Vrattiks complies with all restrictions on Meta platform data use as set out in the Meta Platform Terms. Clients who use our Lead Ads integration must also ensure their use of lead data complies with Meta's policies and applicable privacy laws.",
      },
      { type: "h3", text: "7.3 Meta Service Interruptions" },
      {
        type: "p",
        text: "Meta may independently suspend, restrict, or terminate access to the WhatsApp Business API or Lead Ads API. Vrattiks is not liable for any service interruption caused by Meta's actions or policy changes.",
      },
    ],
  },
  {
    id: "data-ownership",
    title: "Data Ownership",
    blocks: [
      {
        type: "p",
        text: "You retain full ownership of all lead data, customer data, and contact information that is imported into or generated through your use of Vrattiks. Vrattiks processes this data on your behalf as a data processor, not as a data controller.",
      },
      {
        type: "p",
        text: "We grant you a limited, non-exclusive, non-transferable licence to access and use our platform solely for your internal business operations under these Terms.",
      },
      {
        type: "p",
        text: "All content, technology, trademarks, logos, and materials on the Vrattiks platform are the exclusive property of Vrattiks Intelligence LLP. You may not copy, reproduce, distribute, or create derivative works from our platform without prior written consent.",
      },
    ],
  },
  {
    id: "suspension-policy",
    title: "Account Suspension Policy",
    blocks: [
      { type: "p", text: "Vrattiks reserves the right to suspend or terminate your account with or without notice if:" },
      {
        type: "list",
        items: [
          "You violate these Terms or the Acceptable Use Policy in Section 5",
          "You violate WhatsApp's Business Policy or Meta's Platform Policies",
          "Your account sends spam or messages without recipient opt-in",
          "Your account is used to promote restricted product categories (crypto, pharma, weapons, adult content)",
          "We are required to act by law, regulation, or Meta's platform policies",
          "Your account poses a risk to our platform, other clients, or end-users",
          "You fail to pay fees when due after reasonable notice",
        ],
      },
      {
        type: "p",
        text: "**Accounts found sending spam will be immediately and permanently terminated** without liability to Vrattiks and without refund. Upon suspension or termination, your right to access the platform ceases immediately.",
      },
    ],
  },
  {
    id: "payment",
    title: "Payment & Refund Policy",
    blocks: [
      { type: "p", text: "Access to certain Vrattiks services requires payment. By subscribing to a paid plan, you agree to:" },
      {
        type: "list",
        items: [
          "Pay all applicable fees as outlined in your service agreement or subscription plan",
          "Provide accurate billing information and keep it up to date",
          "Authorise Vrattiks (or our payment processor) to charge your payment method on the agreed schedule",
        ],
      },
      {
        type: "p",
        text: "All fees are exclusive of applicable taxes unless stated otherwise. We reserve the right to change pricing with at least 30 days' notice. Refunds are handled on a case-by-case basis as outlined in your service agreement. We are not responsible for charges arising from third-party services (such as Meta's WhatsApp API messaging fees) incurred through your use of our platform.",
      },
      {
        type: "note",
        label: "Note",
        text: "Detailed refund terms will be provided in your individual service agreement. For billing queries, contact hitesh@vrattiks.io.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    blocks: [
      {
        type: "p",
        text: "All content, technology, trademarks, logos, and materials on the Vrattiks platform — including software, AI models, dashboards, and documentation — are the exclusive property of Vrattiks Intelligence LLP and are protected by applicable intellectual property laws.",
      },
      {
        type: "p",
        text: "You retain all rights to your own data and content that you upload or process through our platform. By using our services, you grant Vrattiks a limited licence to process your data solely to provide and improve the contracted services.",
      },
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    blocks: [
      {
        type: "p",
        text: "Both parties agree to keep confidential all non-public information exchanged in connection with the services, including business data, technical details, pricing, and customer information. This obligation does not apply to information that is publicly available, independently developed, or required to be disclosed by law or regulation. Confidentiality obligations survive termination of these Terms for a period of 3 years.",
      },
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers & Warranties",
    blocks: [
      {
        type: "p",
        text: 'Our platform is provided on an "as is" and "as available" basis. To the fullest extent permitted by applicable law, Vrattiks makes no warranties — express or implied — including warranties of merchantability, fitness for a particular purpose, or uninterrupted, error-free operation.',
      },
      { type: "p", text: "We do not warrant that:" },
      {
        type: "list",
        items: [
          "The platform will meet all your specific business requirements",
          "Meta will approve any WhatsApp Business Account or message template you submit",
          "Delivery of all WhatsApp messages is guaranteed (subject to Meta's infrastructure)",
          "The platform will be free of bugs, errors, or security vulnerabilities at all times",
        ],
      },
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    blocks: [
      {
        type: "p",
        text: "To the maximum extent permitted by applicable law, Vrattiks Intelligence LLP and its officers, directors, employees, and partners shall not be liable for any:",
      },
      {
        type: "list",
        items: [
          "Indirect, incidental, consequential, or punitive damages",
          "Loss of profits, revenue, data, goodwill, or business opportunities",
          "Damages arising from your use of, or inability to use, our platform",
          "Damages caused by actions or policies of Meta or other third-party providers",
        ],
      },
      {
        type: "p",
        text: "In no event shall our total aggregate liability exceed the amount you paid to Vrattiks in the three months preceding the event giving rise to the claim.",
      },
    ],
  },
  {
    id: "indemnification",
    title: "Indemnification",
    blocks: [
      {
        type: "p",
        text: "You agree to indemnify, defend, and hold harmless Vrattiks Intelligence LLP and its affiliates, officers, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable legal fees) arising out of or related to: (a) your use of our services in violation of these Terms; (b) your WhatsApp messaging activities, including non-compliant opt-in or messaging practices; (c) your infringement of any third-party rights; or (d) any violation of applicable law by you or your organisation.",
      },
    ],
  },
  {
    id: "termination",
    title: "Termination",
    blocks: [
      {
        type: "p",
        text: "Either party may terminate the service relationship by providing written notice as specified in the applicable service agreement. Vrattiks may suspend or terminate your access immediately and without notice if you materially breach these Terms, we are required to do so by law or Meta's platform policies, or your account poses a risk to our platform or other users.",
      },
      {
        type: "p",
        text: "Upon termination, your right to access the platform ceases immediately. We will retain and delete your data in accordance with our Privacy Policy and applicable data retention obligations.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law & Dispute Resolution",
    blocks: [
      {
        type: "p",
        text: "These Terms are governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any disputes arising out of or relating to these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Surat, Gujarat, India.",
      },
      {
        type: "p",
        text: "Before initiating formal legal proceedings, both parties agree to attempt to resolve any dispute through good-faith negotiation. If unresolved within 30 days, the parties may proceed to formal dispute resolution.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy",
    blocks: [
      {
        type: "p",
        text: "Your use of our services is also governed by our [Privacy Policy](/privacy-policy), which is incorporated into these Terms by reference. By using our services, you acknowledge that you have read and understood our Privacy Policy and consent to the collection and use of your data as described therein.",
      },
    ],
  },
  {
    id: "general",
    title: "General Provisions",
    blocks: [
      {
        type: "terms",
        sep: "—",
        items: [
          { term: "Entire Agreement", text: "These Terms, together with any applicable service agreement and our Privacy Policy, constitute the entire agreement between you and Vrattiks." },
          { term: "Severability", text: "If any provision is found to be unenforceable, the remaining provisions will continue in full force and effect." },
          { term: "Waiver", text: "Failure by Vrattiks to enforce any right or provision shall not constitute a waiver of that right." },
          { term: "Assignment", text: "You may not assign your rights or obligations without our prior written consent. Vrattiks may assign these Terms in connection with a merger, acquisition, or sale of assets." },
          { term: "Force Majeure", text: "Neither party shall be liable for delays or failures in performance resulting from circumstances beyond their reasonable control, including Meta/WhatsApp outages, natural disasters, or government actions." },
        ],
      },
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    blocks: [
      { type: "p", text: "If you have any questions about these Terms of Service, please contact us:" },
      {
        type: "fields",
        items: [
          { label: "Entity", value: "Vrattiks Intelligence LLP" },
          { label: "Email", value: ["hitesh@vrattiks.io", "arpit@vrattiks.io", "vrattiks@gmail.com"] },
          { label: "Website", value: "www.vrattiks.io" },
          { label: "Address", value: "912, International Finance Centre, VIP Road, Vesu, Surat, Gujarat, India – 395007" },
        ],
      },
    ],
  },
];
