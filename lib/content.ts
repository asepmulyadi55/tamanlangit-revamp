import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Package {
  id: string;
  title: string;
  slug: string;
  imageSrc: string;
  imageAlt: string;
  bullets: string[];
  price: string;
  description: string;
  duration: string;
  maxGuests: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover: string;
  content: string;
}

// Load FAQ data with locale fallback
export async function getFAQs(locale: string = 'id'): Promise<FAQ[]> {
  try {
    const faqPath = path.join(contentDirectory, locale, 'faq.json');
    const fallbackPath = path.join(contentDirectory, 'id', 'faq.json');
    
    let filePath = faqPath;
    if (!fs.existsSync(faqPath) && fs.existsSync(fallbackPath)) {
      filePath = fallbackPath;
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error loading FAQ for locale ${locale}:`, error);
    return [];
  }
}

// Load packages data with locale fallback
export async function getPackages(locale: string = 'id'): Promise<Package[]> {
  try {
    const packagesPath = path.join(contentDirectory, locale, 'packages.json');
    const fallbackPath = path.join(contentDirectory, 'id', 'packages.json');
    
    let filePath = packagesPath;
    if (!fs.existsSync(packagesPath) && fs.existsSync(fallbackPath)) {
      filePath = fallbackPath;
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error loading packages for locale ${locale}:`, error);
    return [];
  }
}

// Get single package by slug
export async function getPackageBySlug(slug: string, locale: string = 'id'): Promise<Package | null> {
  const packages = await getPackages(locale);
  return packages.find(pkg => pkg.slug === slug) || null;
}

// Load all blog posts with locale fallback
export async function getBlogPosts(locale: string = 'id'): Promise<BlogPost[]> {
  try {
    const blogDirectory = path.join(contentDirectory, locale, 'blog');
    const fallbackDirectory = path.join(contentDirectory, 'id', 'blog');
    
    let postsDirectory = blogDirectory;
    if (!fs.existsSync(blogDirectory) && fs.existsSync(fallbackDirectory)) {
      postsDirectory = fallbackDirectory;
    }
    
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }
    
    const fileNames = fs.readdirSync(postsDirectory);
    const posts = fileNames
      .filter(name => name.endsWith('.md'))
      .map(name => {
        const fullPath = path.join(postsDirectory, name);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        
        return {
          slug: data.slug || name.replace(/\.md$/, ''),
          title: data.title || '',
          date: data.date instanceof Date ? data.date.toLocaleDateString() : (data.date || ''),
          excerpt: data.excerpt || '',
          cover: data.cover || '',
          content
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return posts;
  } catch (error) {
    console.error(`Error loading blog posts for locale ${locale}:`, error);
    return [];
  }
}

// Get single blog post by slug
export async function getBlogPostBySlug(slug: string, locale: string = 'id'): Promise<BlogPost | null> {
  try {
    const blogDirectory = path.join(contentDirectory, locale, 'blog');
    const fallbackDirectory = path.join(contentDirectory, 'id', 'blog');
    
    // Try to find the post in the requested locale first
    let postPath = path.join(blogDirectory, `${slug}.md`);
    if (!fs.existsSync(postPath)) {
      // Fallback to default locale
      postPath = path.join(fallbackDirectory, `${slug}.md`);
      if (!fs.existsSync(postPath)) {
        return null;
      }
    }
    
    const fileContents = fs.readFileSync(postPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug: data.slug || slug,
      title: data.title || '',
      date: data.date instanceof Date ? data.date.toLocaleDateString() : (data.date || ''),
      excerpt: data.excerpt || '',
      cover: data.cover || '',
      content
    };
  } catch (error) {
    console.error(`Error loading blog post ${slug} for locale ${locale}:`, error);
    return null;
  }
}

// Get all available blog slugs for static generation
export async function getAllBlogSlugs(): Promise<string[]> {
  const slugs = new Set<string>();
  
  // Get slugs from both locales
  const locales = ['id', 'en'];
  
  for (const locale of locales) {
    try {
      const blogDirectory = path.join(contentDirectory, locale, 'blog');
      if (fs.existsSync(blogDirectory)) {
        const fileNames = fs.readdirSync(blogDirectory);
        fileNames
          .filter(name => name.endsWith('.md'))
          .forEach(name => {
            const slug = name.replace(/\.md$/, '');
            slugs.add(slug);
          });
      }
    } catch (error) {
      console.error(`Error reading blog directory for locale ${locale}:`, error);
    }
  }
  
  return Array.from(slugs);
}