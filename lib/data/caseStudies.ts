export interface CaseStudyImage {
  src: string;
  alt: string;
}

export interface CaseStudyKeyResult {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  projectType: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  keyResult: CaseStudyKeyResult;
  heroImage: CaseStudyImage;
  gallery: CaseStudyImage[];
  services: string[];
  year: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "kente-financial-rebrand",
    client: "Kente Financial",
    projectType: "Brand Identity & Strategy",
    summary:
      "A full brand overhaul for a pan-African fintech expanding into five new markets.",
    challenge:
      "Kente Financial had outgrown its founding identity. As the company expanded from a single-market lender into a pan-African fintech platform, its visual identity and market positioning no longer reflected its ambition or credibility with institutional partners.",
    approach:
      "We led a ground-up brand strategy engagement: market research across five target countries, a repositioning workshop with the executive team, and a new visual identity system designed to scale across digital products, physical branches, and partner co-branding.",
    outcome:
      "The rebrand launched alongside Kente's Series B raise, contributing to a reported 40% increase in brand recall across surveyed markets and a smoother rollout across new country launches.",
    keyResult: { value: "40%", label: "increase in brand recall" },
    heroImage: {
      src: "/images/case-studies/kente-financial-hero.jpg",
      alt: "Kente Financial rebrand hero visual",
    },
    gallery: [
      {
        src: "/images/case-studies/kente-financial-01.jpg",
        alt: "Kente Financial brand identity system",
      },
      {
        src: "/images/case-studies/kente-financial-02.jpg",
        alt: "Kente Financial branch signage",
      },
    ],
    services: ["brand-identity-internal-branding", "brand-marketing-strategy"],
    year: "2025",
  },
  {
    slug: "savannah-foods-launch",
    client: "Savannah Foods",
    projectType: "Go-to-Market & Experiential",
    summary:
      "Launch strategy and activation campaign for a new consumer packaged goods brand entering a crowded retail category.",
    challenge:
      "Savannah Foods needed to launch into one of the most competitive retail categories on the continent, with limited existing brand awareness and a tight go-to-market window ahead of the holiday season.",
    approach:
      "We built the go-to-market strategy from consumer research through launch, including a series of experiential retail activations designed to build trial and word-of-mouth ahead of a wider distribution rollout.",
    outcome:
      "The launch activations reached over 50,000 consumers directly and helped secure listings in three major retail chains within the first two quarters.",
    keyResult: { value: "50K+", label: "consumers reached at launch" },
    heroImage: {
      src: "/images/case-studies/savannah-foods-hero.jpg",
      alt: "Savannah Foods launch campaign hero visual",
    },
    gallery: [
      {
        src: "/images/case-studies/savannah-foods-01.jpg",
        alt: "Savannah Foods retail activation",
      },
    ],
    services: ["btl-experiential-advertising", "research-consumer-intelligence"],
    year: "2024",
  },
  {
    slug: "amara-okafor-executive-brand",
    client: "Amara Okafor",
    projectType: "Personal & Executive Branding",
    summary:
      "Executive brand positioning and public narrative development for a founder ahead of an international expansion announcement.",
    challenge:
      "As her company prepared to announce international expansion, Amara needed a public profile and narrative that matched the scale of the story, without an existing media presence to build from.",
    approach:
      "We developed her executive narrative, secured a phased media strategy across regional and international outlets, and built a thought-leadership content cadence to sustain visibility beyond the announcement news cycle.",
    outcome:
      "Coverage across six major business publications and a sustained increase in inbound speaking and partnership inquiries in the following six months.",
    keyResult: { value: "6", label: "major publications" },
    heroImage: {
      src: "/images/case-studies/amara-okafor-hero.jpg",
      alt: "Amara Okafor executive branding hero visual",
    },
    gallery: [
      {
        src: "/images/case-studies/amara-okafor-01.jpg",
        alt: "Amara Okafor media feature",
      },
    ],
    services: ["personal-executive-branding", "communications-pr"],
    year: "2025",
  },
];
