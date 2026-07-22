import { useEffect, useState } from 'react';
import { apiFetch } from '../lib/api';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';

interface ApiBlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  read_time: string;
  author: string;
  image: string;
  post_date: string;
}

function formatDate(isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(date.getTime())) return isoDate;
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function mapPost(post: ApiBlogPost): BlogPost {
  return {
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    category: post.category,
    readTime: post.read_time,
    date: formatDate(post.post_date),
    image: post.image,
    author: post.author,
  };
}

// Blog posts now live in the admin-managed database. If the API is unreachable
// (e.g. static preview, backend not deployed yet), fall back to the seed data
// in src/data/index.ts so the blog pages never render empty.
export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    apiFetch<ApiBlogPost[]>('/blog.php')
      .then((data) => {
        if (active && Array.isArray(data) && data.length > 0) {
          setPosts(data.map(mapPost));
        }
      })
      .catch(() => {
        // Keep the static fallback already in state.
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { posts, loading };
}
