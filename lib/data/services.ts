export interface Service {
  slug: string;
  name: string;
  description: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    slug: "brand-marketing-strategy",
    name: "Brand & Marketing Strategy",
    description:
      "We define the strategic foundation your brand needs to compete: positioning, narrative, and go-to-market direction built for African markets and global ambition alike.",
    deliverables: [
      "Brand positioning framework",
      "Go-to-market strategy",
      "Messaging architecture",
      "Marketing roadmap",
    ],
  },
  {
    slug: "research-consumer-intelligence",
    name: "Research & Consumer Intelligence",
    description:
      "Decisions grounded in evidence, not assumption. We surface the cultural, behavioral, and market insight that separates brands that resonate from brands that guess.",
    deliverables: [
      "Category and competitor analysis",
      "Consumer segmentation",
      "Qualitative & quantitative research",
      "Insight reports",
    ],
  },
  {
    slug: "personal-executive-branding",
    name: "Personal & Executive Branding",
    description:
      "For founders, executives, and public figures who need a presence as sharp as their ambition, built for boardrooms, headlines, and everything in between.",
    deliverables: [
      "Executive narrative development",
      "Public profile strategy",
      "Thought leadership content",
      "Media & speaker positioning",
    ],
  },
  {
    slug: "btl-experiential-advertising",
    name: "BTL & Experiential Advertising",
    description:
      "Campaigns and activations that put your brand directly in front of people, designed for memory, not just impressions.",
    deliverables: [
      "Activation concept & design",
      "Event & experiential production",
      "Field marketing campaigns",
      "On-ground execution",
    ],
  },
  {
    slug: "brand-identity-internal-branding",
    name: "Brand Identity & Internal Branding",
    description:
      "Visual identity systems and internal culture work that keep a brand consistent from the boardroom to the storefront to the team itself.",
    deliverables: [
      "Visual identity systems",
      "Brand guidelines",
      "Internal culture & values activation",
      "Employer brand assets",
    ],
  },
  {
    slug: "communications-pr",
    name: "Communications & PR",
    description:
      "We manage how your brand is heard: media relations, crisis readiness, and narrative control across every public-facing channel.",
    deliverables: [
      "Media relations strategy",
      "Press & press kit development",
      "Crisis communications planning",
      "Reputation management",
    ],
  },
  {
    slug: "content-direction-web-development",
    name: "Content Direction & Web Development",
    description:
      "From editorial direction to production-ready websites, we build the digital and content infrastructure your brand lives in day to day.",
    deliverables: [
      "Content strategy & direction",
      "Photo & video production",
      "Website design & development",
      "Digital asset systems",
    ],
  },
];
