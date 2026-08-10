import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { Container } from "@/components/layout/Container";
import { blogPosts } from "@/lib/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insight on brand strategy, research, and communications from the Urban Brand Creatives team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insight"
        title="Ideas on building brands that last."
        description="Notes on strategy, research, and culture from the team at Urban Brand Creatives."
      />
      <section className="py-section-gap">
        <Container>
          <BlogGrid posts={blogPosts} />
        </Container>
      </section>
    </>
  );
}
