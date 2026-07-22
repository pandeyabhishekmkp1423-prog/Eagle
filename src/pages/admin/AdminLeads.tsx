import { useEffect, useMemo, useState } from 'react';
import { Trash2, RefreshCw, Phone, Mail, MapPin, Search } from 'lucide-react';
import { apiFetch, ApiError } from '../../lib/api';

interface Lead {
  id: number;
  name: string;
  phone: string;
  email: string;
  plot_location: string | null;
  service_type: string | null;
  message: string | null;
  source: string;
  status: 'new' | 'contacted' | 'won' | 'lost';
  created_at: string;
}

const STATUS_OPTIONS: Lead['status'][] = ['new', 'contacted', 'won', 'lost'];

const STATUS_STYLES: Record<Lead['status'], string> = {
  new: 'bg-blue-100 text-blue-700',
  contacted: 'bg-amber-100 text-amber-700',
  won: 'bg-emerald-100 text-emerald-700',
  lost: 'bg-gray-200 text-gray-600',
};

const STATUS_DOT: Record<Lead['status'], string> = {
  new: 'bg-blue-500',
  contacted: 'bg-amber-500',
  won: 'bg-emerald-500',
  lost: 'bg-gray-400',
};

type FilterValue = 'all' | Lead['status'];

export default function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState<FilterValue>('all');
  const [search, setSearch] = useState('');

  const loadLeads = () => {
    setLoading(true);
    setError('');
    apiFetch<Lead[]>('/leads.php')
      .then(setLeads)
      .catch((err) => setError(err instanceof ApiError ? err.message : 'Unable to load leads.'))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadLeads();
  }, []);

  const updateStatus = async (id: number, status: Lead['status']) => {
    setLeads((prev) => prev.map((lead) => (lead.id === id ? { ...lead, status } : lead)));
    try {
      await apiFetch(`/leads.php?id=${id}`, { method: 'PATCH', body: JSON.stringify({ status }) });
    } catch {
      loadLeads();
    }
  };

  const deleteLead = async (id: number) => {
    if (!window.confirm('Delete this lead permanently?')) return;
    try {
      await apiFetch(`/leads.php?id=${id}`, { method: 'DELETE' });
      setLeads((prev) => prev.filter((lead) => lead.id !== id));
    } catch {
      loadLeads();
    }
  };

  const counts = useMemo(() => {
    const base: Record<FilterValue, number> = { all: leads.length, new: 0, contacted: 0, won: 0, lost: 0 };
    leads.forEach((lead) => { base[lead.status] += 1; });
    return base;
  }, [leads]);

  const visibleLeads = useMemo(() => {
    const term = search.trim().toLowerCase();
    return leads.filter((lead) => {
      if (filter !== 'all' && lead.status !== filter) return false;
      if (!term) return true;
      return (
        lead.name.toLowerCase().includes(term) ||
        lead.phone.toLowerCase().includes(term) ||
        (lead.email || '').toLowerCase().includes(term)
      );
    });
  }, [leads, filter, search]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-extrabold text-primary uppercase tracking-tight">Leads</h1>
          <p className="text-xs text-gray-medium mt-1">Every consultation request submitted from the website.</p>
        </div>
        <button
          onClick={loadLeads}
          className="flex shrink-0 items-center gap-2 rounded-lg border border-gray-light bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-primary hover:border-gold/40"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Refresh</span>
        </button>
      </div>

      {/* Summary stat cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {(['all', ...STATUS_OPTIONS] as FilterValue[]).map((key) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`flex flex-col gap-1 rounded-xl border p-4 text-left transition-all ${
              filter === key ? 'border-gold bg-primary text-white shadow-md' : 'border-gray-light bg-white text-primary hover:border-gold/40'
            }`}
          >
            <span className="font-display text-2xl font-extrabold">{counts[key]}</span>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${filter === key ? 'text-gray-300' : 'text-gray-medium'}`}>
              {key === 'all' ? 'Total Leads' : key}
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
          placeholder="Search by name, phone or email..."
          className="w-full rounded-lg border border-gray-light bg-white py-2.5 pl-10 pr-4 text-sm text-primary focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>

      {error && <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-xs text-red-700">{error}</div>}

      {loading ? (
        <div className="rounded-2xl border border-gray-light bg-white p-10 text-center text-xs text-gray-medium">Loading leads...</div>
      ) : visibleLeads.length === 0 ? (
        <div className="rounded-2xl border border-gray-light bg-white p-10 text-center text-xs text-gray-medium">
          {leads.length === 0 ? 'No leads yet.' : 'No leads match this filter.'}
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-gray-light bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-light bg-surface text-[10px] font-bold uppercase tracking-wider text-gray-medium">
                <th className="px-5 py-3">Contact</th>
                <th className="px-5 py-3">Service / Location</th>
                <th className="px-5 py-3">Message</th>
                <th className="px-5 py-3">Received</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody>
              {visibleLeads.map((lead) => (
                <tr key={lead.id} className="border-b border-gray-light/60 align-top last:border-0 hover:bg-surface/60">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${STATUS_DOT[lead.status]}`} />
                      <span className="font-bold text-primary">{lead.name}</span>
                    </div>
                    <a href={`tel:${lead.phone}`} className="mt-1.5 flex items-center gap-1.5 text-xs text-gray-medium hover:text-gold">
                      <Phone className="h-3 w-3" /> {lead.phone}
                    </a>
                    {lead.email && (
                      <a href={`mailto:${lead.email}`} className="mt-0.5 flex items-center gap-1.5 text-xs text-gray-medium hover:text-gold">
                        <Mail className="h-3 w-3" /> {lead.email}
                      </a>
                    )}
                  </td>
                  <td className="px-5 py-4 text-xs">
                    <div className="font-semibold text-primary">{lead.service_type || '—'}</div>
                    {lead.plot_location && (
                      <div className="mt-1 flex items-center gap-1.5 text-gray-medium">
                        <MapPin className="h-3 w-3" /> {lead.plot_location}
                      </div>
                    )}
                    <div className="mt-1.5 text-[10px] uppercase tracking-wider text-gray-400">{lead.source}</div>
                  </td>
                  <td className="max-w-xs px-5 py-4 text-xs text-gray-medium">{lead.message || '—'}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-xs text-gray-medium">
                    {new Date(lead.created_at).toLocaleString()}
                  </td>
                  <td className="px-5 py-4">
                    <select
                      value={lead.status}
                      onChange={(e) => updateStatus(lead.id, e.target.value as Lead['status'])}
                      className={`rounded-md border-0 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider focus:outline-none focus:ring-1 focus:ring-gold ${STATUS_STYLES[lead.status]}`}
                    >
                      {STATUS_OPTIONS.map((status) => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => deleteLead(lead.id)}
                      className="rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-600"
                      aria-label="Delete lead"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
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
