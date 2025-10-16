import BlogPostContent from "../../../../components/BlogPostContent";
import { getBlogPostBySlug, getAllBlogSlugs } from "../../../../lib/content";
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  const locales = ['id', 'en'];
  
  return locales.flatMap(locale => 
    slugs.map(slug => ({
      locale,
      slug
    }))
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  const post = await getBlogPostBySlug(slug, locale);
  const t = await getTranslations('blog');

  if (!post) {
    notFound();
  }

  return (
    <main className="pt-16">
      <BlogPostContent
        title={post.title}
        date={post.date}
        coverSrc={post.cover}
        coverAlt={post.title}
        contentHtml={post.content}
      />
    </main>
  );
}