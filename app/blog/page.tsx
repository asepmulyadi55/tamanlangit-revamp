import BlogListItem from "../../components/BlogListItem";
import { BlogService } from "../../lib/blog";

export default function Page() {
  const posts = BlogService.list();

  return (
    <main className="pt-16">
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-center">Blog</h1>
          <ul className="mt-10 space-y-4">
            {posts.map((p) => (
              <BlogListItem key={p.slug} href={`/blog/${p.slug}`} title={p.title} date={p.date} thumbSrc={p.thumbSrc ?? "https://picsum.photos/120/90"} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}