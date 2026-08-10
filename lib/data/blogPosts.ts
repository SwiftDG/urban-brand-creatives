export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  readTime: string;
  publishDate: string;
  coverImage: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-brands-for-the-next-africa",
    title: "Building Brands for the Next Africa",
    excerpt:
      "The continent's consumer base is shifting faster than most brand strategies account for. Here's what that means for positioning.",
    body: "Placeholder article body. This will contain the full long-form content of the article, covering market shifts, consumer behavior, and strategic implications for brands operating across African markets.",
    category: "Strategy",
    readTime: "6 min read",
    publishDate: "2026-06-12",
    coverImage: "/images/blog/building-brands-for-the-next-africa.jpg",
  },
  {
    slug: "the-case-for-local-insight",
    title: "The Case for Local Insight Over Global Templates",
    excerpt:
      "Why brand playbooks built for other markets keep underperforming, and what local consumer research looks like instead.",
    body: "Placeholder article body. This will unpack why localized research consistently outperforms adapted global templates, with reference to consumer intelligence methodology.",
    category: "Research",
    readTime: "5 min read",
    publishDate: "2026-05-28",
    coverImage: "/images/blog/the-case-for-local-insight.jpg",
  },
  {
    slug: "executive-visibility-in-a-noisy-market",
    title: "Executive Visibility in a Noisy Market",
    excerpt:
      "Founders and executives are brands in their own right. Here's how to build a public presence that gets stronger the longer you keep at it.",
    body: "Placeholder article body. This will cover executive branding fundamentals, media strategy, and long-term thought leadership positioning.",
    category: "Personal Branding",
    readTime: "4 min read",
    publishDate: "2026-05-09",
    coverImage: "/images/blog/executive-visibility-in-a-noisy-market.jpg",
  },
];
