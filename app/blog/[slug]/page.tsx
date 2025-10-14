import BlogPostContent from "../../../components/BlogPostContent";
import { BlogService } from "../../../lib/blog";

export function generateStaticParams() {
  return BlogService.slugs().map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: any }) {
  const { slug } = await params;
  const post = BlogService.getBySlug(slug);

  if (!post) {
    return (
      <main className="pt-16">
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4">
            <h1 className="font-display text-3xl font-semibold">Post not found</h1>
            <p className="text-slate-600 dark:text-slate-300 mt-2">Maaf, artikel tidak ditemukan.</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="pt-16">
      <BlogPostContent
        title={post.title}
        date={post.date}
        coverSrc={post.coverSrc}
        coverAlt={post.coverAlt}
        contentHtml={post.contentHtml}
      />
    </main>
  );
}