import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { ArticleBody } from "@/components/sections/ArticleBody";
import { blogPosts } from "@/lib/data/blogPosts";

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} description={post.excerpt} />
      <ArticleBody post={post} />
    </>
  );
}
