import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, LogIn, AlertCircle } from 'lucide-react';
import { apiFetch, ApiError } from '../../lib/api';
import Logo from '../../components/Logo';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await apiFetch('/login.php', { method: 'POST', body: JSON.stringify({ username, password }) });
      navigate('/admin', { replace: true });
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Unable to log in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-primary px-6">
      <div className="w-full max-w-sm rounded-2xl border border-gold/20 bg-navy-dark p-8 shadow-2xl">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <Logo light />
          <div className="flex items-center gap-2 text-gold">
            <Lock className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Admin Console</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="admin-username" className="text-xs font-bold uppercase tracking-widest text-gray-300">
              Username
            </label>
            <input
              id="admin-username"
              type="text"
              required
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="admin-password" className="text-xs font-bold uppercase tracking-widest text-gray-300">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>

          {error && (
            <div role="alert" className="flex items-start gap-2 rounded-lg bg-red-500/15 p-3 text-xs text-red-200">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="premium-button mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-primary hover:bg-gold-hover disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? <span>Signing in...</span> : <><span>Sign In</span><LogIn className="h-4 w-4" /></>}
          </button>
        </form>
      </div>
    </div>
  );
}
