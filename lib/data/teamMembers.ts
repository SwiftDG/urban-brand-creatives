export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  photo: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    slug: "founder-name",
    name: "Founder Name",
    title: "Founder & Chief Strategist",
    photo: "/images/team/founder-name.jpg",
    bio: "Placeholder bio — founder background, years of experience, and the vision behind Urban Brand Creatives goes here.",
  },
  {
    slug: "head-of-strategy",
    name: "Head of Strategy Name",
    title: "Head of Brand Strategy",
    photo: "/images/team/head-of-strategy.jpg",
    bio: "Placeholder bio — leads brand strategy engagements across client portfolio, background in market research and positioning.",
  },
  {
    slug: "creative-director",
    name: "Creative Director Name",
    title: "Creative Director",
    photo: "/images/team/creative-director.jpg",
    bio: "Placeholder bio — oversees visual identity and creative output across all client work.",
  },
  {
    slug: "head-of-pr",
    name: "Head of PR Name",
    title: "Head of Communications & PR",
    photo: "/images/team/head-of-pr.jpg",
    bio: "Placeholder bio — leads media relations and communications strategy for the agency's client roster.",
  },
];
