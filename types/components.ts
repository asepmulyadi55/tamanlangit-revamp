// Shared UI component prop types
export interface AboutSectionProps {
  title: string;
  titleTag?: "h1" | "h2";
  description: string;
  descClassName: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageClassName: string;
  bullets?: string[];
  ctaHref?: string;
  ctaText?: string;
}

// Blog list item props used in blog index page
export interface BlogListItemProps {
  href: string;
  title: string;
  date: string; // human-readable date string
  thumbSrc: string; // image URL or static path
}

// Blog post content props for dynamic blog page
export interface BlogPostContentProps {
  title: string;
  date: string; // human-readable date string
  coverSrc: string;
  coverAlt?: string;
  // HTML content or structured blocks; keeping simple for now
  contentHtml?: string;
}

export interface PackageCardProps {
  id?: string;
  title: string;
  imageSrc: string;
  imageAlt?: string;
  bullets: string[];
  price: string;
  ctaHref: string;
}

export interface PackageGridProps {
  items: PackageCardProps[];
  title?: string;
  subtitle?: string;
  headingTag?: "h1" | "h2";
  sectionClassName?: string;
}
