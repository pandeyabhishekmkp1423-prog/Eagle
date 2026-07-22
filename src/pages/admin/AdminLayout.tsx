import { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Users, Newspaper, LogOut } from 'lucide-react';
import { apiFetch } from '../../lib/api';
import Logo from '../../components/Logo';

export default function AdminLayout() {
  const [checking, setChecking] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    apiFetch<{ loggedIn: boolean }>('/me.php')
      .then((res) => {
        if (!res.loggedIn) navigate('/admin/login', { replace: true });
      })
      .catch(() => navigate('/admin/login', { replace: true }))
      .finally(() => setChecking(false));
  }, [navigate]);

  const handleLogout = async () => {
    await apiFetch('/logout.php', { method: 'POST' }).catch(() => {});
    navigate('/admin/login', { replace: true });
  };

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-medium">Loading admin console...</span>
      </div>
    );
  }

  const navItemClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 rounded-lg px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${
      isActive ? 'bg-gold text-primary' : 'text-gray-300 hover:bg-white/10 hover:text-white'
    }`;

  return (
    <div className="flex min-h-screen flex-col bg-surface md:flex-row" id="admin-console">
      <aside className="flex shrink-0 flex-col bg-primary p-6 md:w-64">
        <Logo light className="mb-8 hidden md:mb-10 md:flex" />
        <nav className="flex gap-2 md:flex-1 md:flex-col">
          <NavLink to="/admin" end className={navItemClass}>
            <Users className="h-4 w-4" />
            <span>Leads</span>
          </NavLink>
          <NavLink to="/admin/blog" className={navItemClass}>
            <Newspaper className="h-4 w-4" />
            <span>Blog Posts</span>
          </NavLink>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-300 hover:bg-white/10 hover:text-white md:mt-auto"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-6 md:p-10">
        <Outlet />
      </main>
    </div>
  );
}
