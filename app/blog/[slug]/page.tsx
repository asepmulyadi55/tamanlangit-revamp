import Section from "../../../components/Section";
import { getPost } from "../../../lib/blog";

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  const post = getPost(p.slug);
  if (!post) return (
    <Section title="Artikel tidak ditemukan">
      <p className="meta-text">Maaf, artikel tidak tersedia.</p>
    </Section>
  );
  return (
    <Section title={post.meta.title} description={post.meta.date}>
      <article className="prose max-w-none dark:prose-invert whitespace-pre-wrap">
        {post.content}
      </article>
    </Section>
  );
}