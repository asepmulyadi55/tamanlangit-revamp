import BlogListItem from "../../components/BlogListItem";

export default function Page() {
  const posts = [
    { href: "/blog/blog-post", title: "Tips Camping untuk Pemula 1", date: "12 Sept 2025", thumbSrc: "https://picsum.photos/120/90?random=300" },
    { href: "/blog/blog-post", title: "Tips Camping untuk Pemula 2", date: "12 Sept 2025", thumbSrc: "https://picsum.photos/120/90?random=301" },
    { href: "/blog/blog-post", title: "Tips Camping untuk Pemula 3", date: "12 Sept 2025", thumbSrc: "https://picsum.photos/120/90?random=302" },
    { href: "/blog/blog-post", title: "Tips Camping untuk Pemula 4", date: "12 Sept 2025", thumbSrc: "https://picsum.photos/120/90?random=303" },
  ];

  return (
    <main className="pt-16">
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-center">Blog</h1>
          <ul className="mt-10 space-y-4">
            {posts.map((p) => (
              <BlogListItem key={p.thumbSrc} href={p.href} title={p.title} date={p.date} thumbSrc={p.thumbSrc} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}