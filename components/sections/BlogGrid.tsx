import Link from "next/link";
import type { BlogPost } from "@/lib/data/blogPosts";
import { formatDate } from "@/lib/formatDate";
import { Reveal } from "@/components/motion/Reveal";

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <Reveal variant="media" key={post.slug} delay={index * 60}>
          <Link href={`/blog/${post.slug}`} className="group block">
            <div className="aspect-[4/3] w-full overflow-hidden bg-purple-wash">
              <div className="h-full w-full bg-purple-wash transition-transform duration-500 group-hover:scale-105" />
            </div>
            <p className="mt-5 text-xs uppercase tracking-widest text-orange-red">
              {post.category}
            </p>
            <h3 className="mt-2 font-display text-2xl group-hover:text-orange-red transition-colors">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-black/70">{post.excerpt}</p>
            <p className="mt-4 text-xs text-silver">
              {formatDate(post.publishDate)} &middot; {post.readTime}
            </p>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
