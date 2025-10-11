import fs from "node:fs";
import path from "node:path";

export type BlogMeta = { slug: string; title: string; date: string; excerpt?: string };

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function listPosts(): BlogMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  return files.map((file) => {
    const full = path.join(BLOG_DIR, file);
    const raw = fs.readFileSync(full, "utf8");
    const { meta } = parseFrontMatter(raw);
    return { slug: file.replace(/\.md$/, ""), title: meta.title ?? "Untitled", date: meta.date ?? "", excerpt: meta.excerpt };
  });
}

export function getPost(slug: string): { meta: BlogMeta; content: string } | null {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { meta, content } = parseFrontMatter(raw);
  return { meta: { slug, title: meta.title ?? "Untitled", date: meta.date ?? "", excerpt: meta.excerpt }, content };
}

function parseFrontMatter(src: string): { meta: Record<string, string>; content: string } {
  // very simple parser for --- key: value lines ---
  const match = src.match(/^---[\r\n]+([\s\S]*?)[\r\n]+---[\r\n]+([\s\S]*)$/);
  if (!match) return { meta: {}, content: src };
  const lines = match[1].split(/\r?\n/).filter(Boolean);
  const meta: Record<string, string> = {};
  for (const line of lines) {
    const [k, ...rest] = line.split(":");
    meta[k.trim()] = rest.join(":").trim();
  }
  return { meta, content: match[2] };
}