import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Pencil, Trash2, Eye, EyeOff, Search } from 'lucide-react';
import { apiFetch, ApiError } from '../../lib/api';

interface AdminBlogPost {
  id: string;
  title: string;
  category: string;
  author: string;
  post_date: string;
  published: number;
}

type FilterValue = 'all' | 'published' | 'draft';

export default function AdminBlogList() {
  const [posts, setPosts] = useState<AdminBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState<FilterValue>('all');
  const [search, setSearch] = useState('');

  const load = () => {
    setLoading(true);
    setError('');
    apiFetch<AdminBlogPost[]>('/blog.php?all=1')
      .then(setPosts)
      .catch((err) => setError(err instanceof ApiError ? err.message : 'Unable to load posts.'))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const togglePublished = async (post: AdminBlogPost) => {
    setPosts((prev) => prev.map((p) => (p.id === post.id ? { ...p, published: post.published ? 0 : 1 } : p)));
    try {
      await apiFetch(`/blog.php?id=${post.id}`, { method: 'PATCH', body: JSON.stringify({ published: !post.published }) });
    } catch {
      load();
    }
  };

  const deletePost = async (id: string) => {
    if (!window.confirm('Delete this blog post permanently?')) return;
    try {
      await apiFetch(`/blog.php?id=${id}`, { method: 'DELETE' });
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch {
      load();
    }
  };

  const counts = useMemo(
    () => ({
      all: posts.length,
      published: posts.filter((p) => p.published).length,
      draft: posts.filter((p) => !p.published).length,
    }),
    [posts]
  );

  const visiblePosts = useMemo(() => {
    const term = search.trim().toLowerCase();
    return posts.filter((post) => {
      if (filter === 'published' && !post.published) return false;
      if (filter === 'draft' && post.published) return false;
      if (!term) return true;
      return post.title.toLowerCase().includes(term) || post.author.toLowerCase().includes(term);
    });
  }, [posts, filter, search]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-extrabold text-primary uppercase tracking-tight">Blog Posts</h1>
          <p className="text-xs text-gray-medium mt-1">Published posts appear on the public blog and homepage preview.</p>
        </div>
        <Link
          to="/admin/blog/new"
          className="premium-button flex shrink-0 items-center gap-2 rounded-lg bg-primary px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-navy-dark"
        >
          <Plus className="h-4 w-4" />
          <span>New Post</span>
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:max-w-md">
        {(['all', 'published', 'draft'] as FilterValue[]).map((key) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`flex flex-col gap-1 rounded-xl border p-4 text-left transition-all ${
              filter === key ? 'border-gold bg-primary text-white shadow-md' : 'border-gray-light bg-white text-primary hover:border-gold/40'
            }`}
          >
            <span className="font-display text-2xl font-extrabold">{counts[key]}</span>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${filter === key ? 'text-gray-300' : 'text-gray-medium'}`}>
              {key === 'all' ? 'All Posts' : key}
            </span>
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-sm">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title or author..."
          className="w-full rounded-lg border border-gray-light bg-white py-2.5 pl-10 pr-4 text-sm text-primary focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>

      {error && <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-xs text-red-700">{error}</div>}

      {loading ? (
        <div className="rounded-2xl border border-gray-light bg-white p-10 text-center text-xs text-gray-medium">Loading posts...</div>
      ) : visiblePosts.length === 0 ? (
        <div className="rounded-2xl border border-gray-light bg-white p-10 text-center text-xs text-gray-medium">
          {posts.length === 0 ? 'No blog posts yet.' : 'No posts match this filter.'}
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-gray-light bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-light bg-surface text-[10px] font-bold uppercase tracking-wider text-gray-medium">
                <th className="px-5 py-3">Title</th>
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3">Author</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody>
              {visiblePosts.map((post) => (
                <tr key={post.id} className="border-b border-gray-light/60 last:border-0 hover:bg-surface/60">
                  <td className="px-5 py-4 font-bold text-primary">{post.title}</td>
                  <td className="px-5 py-4 text-xs text-gray-medium">{post.category}</td>
                  <td className="px-5 py-4 text-xs text-gray-medium">{post.author}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-xs text-gray-medium">{post.post_date}</td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => togglePublished(post)}
                      className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider ${
                        post.published ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {post.published ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
                      {post.published ? 'Published' : 'Draft'}
                    </button>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1">
                      <Link
                        to={`/admin/blog/${post.id}/edit`}
                        className="rounded-lg p-2 text-gray-400 hover:bg-primary/5 hover:text-primary"
                        aria-label="Edit post"
                      >
                        <Pencil className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => deletePost(post.id)}
                        className="rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-600"
                        aria-label="Delete post"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
