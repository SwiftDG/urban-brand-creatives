import Link from "next/link";
import type { BlogPost } from "@/lib/data/blogPosts";
import { formatDate } from "@/lib/formatDate";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

interface ArticleBodyProps {
  post: BlogPost;
}

export function ArticleBody({ post }: ArticleBodyProps) {
  return (
    <article className="py-section-gap">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Reveal variant="media">
            <div className="aspect-[16/9] w-full bg-purple-wash" />
          </Reveal>

          <Reveal>
            <p className="mt-10 text-xs uppercase tracking-widest text-silver">
              {formatDate(post.publishDate)} &middot; {post.readTime}
            </p>
            <div className="mt-8 space-y-6 text-base text-black/70">
              <p>{post.body}</p>
            </div>

            <div className="mt-16 border-t border-silver-light pt-8">
              <Link
                href="/blog"
                className="text-sm font-medium text-orange-red hover:text-orange-red-dark transition-colors"
              >
                &larr; Back to all articles
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </article>
  );
}
