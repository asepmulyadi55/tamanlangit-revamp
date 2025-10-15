import BlogListItem from "../../../components/BlogListItem";
import { getBlogPosts } from "../../../lib/content";
import { getTranslations } from 'next-intl/server';

interface BlogPageProps {
  params: {
    locale: string;
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const posts = await getBlogPosts(locale);
  const t = await getTranslations('blog');

  return (
    <main className="pt-16">
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-center">{t('title')}</h1>
          <ul className="mt-10 space-y-4">
            {posts.map((post) => (
              <BlogListItem 
                key={post.slug} 
                href={`/${locale}/blog/${post.slug}`} 
                title={post.title} 
                date={post.date} 
                thumbSrc={post.cover || "https://picsum.photos/120/90"} 
              />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}