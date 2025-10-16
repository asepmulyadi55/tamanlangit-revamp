// Centralized blog service and types
export interface BlogPost {
  slug: string;
  title: string;
  date: string; // human-readable date for now
  coverSrc: string;
  coverAlt?: string;
  excerpt?: string;
  contentHtml?: string;
  thumbSrc?: string;
}

const MOCK_POSTS: BlogPost[] = [
  {
    slug: "blog-post",
    title: "Tips Camping untuk Pemula",
    date: "12 Sept 2025",
    coverSrc: "/images/blog content 1.jpg",
    coverAlt: "Camping cover",
    excerpt: "Panduan singkat untuk memulai camping di Taman Langit.",
    contentHtml: undefined,
    thumbSrc: "/images/blog 1.jpg",
  },
  {
    slug: "camping-aman-nyaman",
    title: "Camping Aman dan Nyaman",
    date: "13 Sept 2025",
    coverSrc: "/images/blog content 2.jpg",
    coverAlt: "Camping safety",
    excerpt: "Tips menjaga keselamatan dan kenyamanan saat camping.",
    contentHtml: undefined,
    thumbSrc: "/images/blog 2.jpg",
  },
];

export class BlogService {
  // list posts for index page
  static list(): BlogPost[] {
    return MOCK_POSTS;
  }

  // get a single post by slug
  static getBySlug(slug: string): BlogPost | undefined {
    return MOCK_POSTS.find((p) => p.slug === slug);
  }

  // expose slugs for static params
  static slugs(): string[] {
    return MOCK_POSTS.map((p) => p.slug);
  }
}