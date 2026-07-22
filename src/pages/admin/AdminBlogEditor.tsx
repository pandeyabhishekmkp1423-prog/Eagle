import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Save, ArrowLeft } from 'lucide-react';
import { apiFetch, ApiError } from '../../lib/api';
import RichTextEditor from '../../components/admin/RichTextEditor';

function isContentEmpty(html: string): boolean {
  return html.replace(/<[^>]*>/g, '').trim() === '';
}

interface BlogFormState {
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  readTime: string;
  date: string;
  published: boolean;
}

interface ApiBlogPostFull {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  read_time: string;
  post_date: string;
  published: number;
}

const EMPTY_FORM: BlogFormState = {
  title: '',
  category: 'Home Building Guide',
  excerpt: '',
  content: '',
  image: '',
  author: 'Eagle Tiger Team',
  readTime: '5 Min Read',
  date: new Date().toISOString().slice(0, 10),
  published: true,
};

const inputClass =
  'rounded-lg border border-gray-light bg-surface px-4 py-3 text-sm text-primary focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold';

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-xs font-bold uppercase tracking-widest text-primary">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function AdminBlogEditor() {
  const { id } = useParams();
  const isEditing = Boolean(id);
  const navigate = useNavigate();

  const [form, setForm] = useState<BlogFormState>(EMPTY_FORM);
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;
    apiFetch<ApiBlogPostFull>(`/blog.php?id=${id}`)
      .then((post) => {
        setForm({
          title: post.title,
          category: post.category,
          excerpt: post.excerpt,
          content: post.content,
          image: post.image,
          author: post.author,
          readTime: post.read_time,
          date: post.post_date,
          published: Boolean(post.published),
        });
      })
      .catch((err) => setError(err instanceof ApiError ? err.message : 'Unable to load post.'))
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = <K extends keyof BlogFormState>(field: K, value: BlogFormState[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isContentEmpty(form.content)) {
      setError('Content cannot be empty.');
      return;
    }

    setSaving(true);

    try {
      if (isEditing) {
        await apiFetch(`/blog.php?id=${id}`, { method: 'PATCH', body: JSON.stringify(form) });
      } else {
        await apiFetch('/blog.php', { method: 'POST', body: JSON.stringify(form) });
      }
      navigate('/admin/blog');
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Unable to save this post.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="rounded-2xl border border-gray-light bg-white p-10 text-center text-xs text-gray-medium">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex max-w-4xl flex-col gap-6">
      <div className="flex items-center gap-3">
        <Link to="/admin/blog" className="rounded-lg p-2 text-gray-400 hover:bg-primary/5 hover:text-primary">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <h1 className="font-display text-2xl font-extrabold text-primary uppercase tracking-tight">
          {isEditing ? 'Edit Post' : 'New Post'}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-2xl border border-gray-light bg-white p-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Title *" htmlFor="blog-title">
            <input
              id="blog-title"
              required
              value={form.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className={inputClass}
            />
          </Field>
          <Field label="Category *" htmlFor="blog-category">
            <select
              id="blog-category"
              value={form.category}
              onChange={(e) => handleChange('category', e.target.value)}
              className={inputClass}
            >
              <option>Local Bylaws</option>
              <option>Engineering Superiority</option>
              <option>Home Building Guide</option>
            </select>
          </Field>
        </div>

        <Field label="Excerpt *" htmlFor="blog-excerpt">
          <textarea
            id="blog-excerpt"
            required
            rows={2}
            value={form.excerpt}
            onChange={(e) => handleChange('excerpt', e.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label="Content *" htmlFor="blog-content">
          <RichTextEditor
            value={form.content}
            onChange={(html) => handleChange('content', html)}
            placeholder="Write your post here — use the toolbar for headings, bold, links, highlights and more."
          />
        </Field>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Cover Image URL *" htmlFor="blog-image">
            <input
              id="blog-image"
              required
              value={form.image}
              onChange={(e) => handleChange('image', e.target.value)}
              className={inputClass}
              placeholder="https://..."
            />
          </Field>
          <Field label="Author *" htmlFor="blog-author">
            <input
              id="blog-author"
              required
              value={form.author}
              onChange={(e) => handleChange('author', e.target.value)}
              className={inputClass}
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Field label="Read Time *" htmlFor="blog-read-time">
            <input
              id="blog-read-time"
              required
              value={form.readTime}
              onChange={(e) => handleChange('readTime', e.target.value)}
              className={inputClass}
            />
          </Field>
          <Field label="Publish Date *" htmlFor="blog-date">
            <input
              id="blog-date"
              required
              type="date"
              value={form.date}
              onChange={(e) => handleChange('date', e.target.value)}
              className={inputClass}
            />
          </Field>
          <label htmlFor="blog-published" className="flex items-center gap-2 self-end pb-3 text-xs font-bold uppercase tracking-widest text-primary">
            <input
              id="blog-published"
              type="checkbox"
              checked={form.published}
              onChange={(e) => handleChange('published', e.target.checked)}
              className="h-4 w-4 accent-gold"
            />
            Published
          </label>
        </div>

        {error && <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-xs text-red-700">{error}</div>}

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="premium-button inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-navy-dark disabled:opacity-60"
          >
            <Save className="h-4 w-4" />
            <span>{saving ? 'Saving...' : 'Save Post'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
