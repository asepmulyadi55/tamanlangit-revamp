export function generateStaticParams() {
  return [{ slug: 'blog-post' }];
}

import BlogPostContent from "../../../components/BlogPostContent";

export default function Page() {
  return (
    <main className="pt-16">
      <BlogPostContent />
    </main>
  );
}