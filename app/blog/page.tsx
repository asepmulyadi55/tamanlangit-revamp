import Link from "next/link";
import Section from "../../components/Section";
import { listPosts } from "../../lib/blog";

export default function BlogPage() {
  const posts = listPosts();
  return (
    <Section title="Blog" description="Cerita dan informasi seputar Taman Langit.">
      <div className="space-y-4">
        {posts.length === 0 && <p className="meta-text">Belum ada artikel.</p>}
        {posts.map((p) => (
          <div key={p.slug} className="card-base">
            <h3 className="text-xl font-semibold"><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
            <p className="meta-text mt-1">{p.date}</p>
            {p.excerpt && <p className="mt-2">{p.excerpt}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
}