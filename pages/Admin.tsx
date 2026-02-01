import React, { useState, useEffect } from 'react';
import { Booking } from '../types';
import { Lock, Trash2, Check, Mail, Smartphone, Calendar, Search } from 'lucide-react';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');

  useEffect(() => {
    // Load bookings from local storage simulation
    const saved = localStorage.getItem('bookings');
    if (saved) {
      try {
        setBookings(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse bookings", e);
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid Password');
    }
  };

  const updateStatus = (id: string, newStatus: 'pending' | 'completed') => {
    const updated = bookings.map(b => b.id === id ? { ...b, status: newStatus } : b);
    setBookings(updated);
    localStorage.setItem('bookings', JSON.stringify(updated));
  };

  const deleteBooking = (id: string) => {
    if (confirm('Are you sure you want to delete this request?')) {
      const updated = bookings.filter(b => b.id !== id);
      setBookings(updated);
      localStorage.setItem('bookings', JSON.stringify(updated));
    }
  };

  const filteredBookings = bookings.filter(b => filter === 'all' || b.status === filter);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
        <form onSubmit={handleLogin} className="bg-slate-800 p-8 rounded-xl border border-slate-700 shadow-2xl max-w-sm w-full">
          <div className="flex justify-center mb-6">
            <div className="bg-slate-700 p-3 rounded-full">
              <Lock className="w-8 h-8 text-brand-400" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white text-center mb-6">Admin Access</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white mb-4 focus:ring-2 focus:ring-brand-500 outline-none"
            autoFocus
          />
          <button
            type="submit"
            className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 rounded-lg transition-colors"
          >
            Login
          </button>
          <p className="text-xs text-slate-500 text-center mt-4">Hint: admin123</p>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-white">Repair Requests</h1>
          <div className="flex bg-slate-800 rounded-lg p-1 border border-slate-700">
            {['all', 'pending', 'completed'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-all ${
                  filter === f ? 'bg-brand-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {bookings.length === 0 ? (
          <div className="text-center py-20 bg-slate-800 rounded-2xl border border-slate-700 border-dashed">
            <Mail className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-slate-300">No requests yet</h3>
            <p className="text-slate-500">Booking submissions will appear here.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredBookings.map((booking) => (
              <div 
                key={booking.id} 
                className={`bg-slate-800 rounded-xl border p-6 transition-all ${
                  booking.status === 'completed' ? 'border-green-900/50 opacity-75' : 'border-slate-700'
                }`}
              >
                <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-6">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-1 text-xs font-bold uppercase tracking-wider rounded border ${
                        booking.status === 'completed' 
                          ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                          : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                      }`}>
                        {booking.status}
                      </span>
                      <span className="text-slate-500 text-sm flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(booking.date).toLocaleString()}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white">{booking.fullName}</h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-400">
                        <span className="flex items-center gap-1">
                          <Mail className="w-4 h-4" /> {booking.email}
                        </span>
                        <span className="flex items-center gap-1 text-brand-400 font-medium">
                          <Smartphone className="w-4 h-4" /> {booking.whatsapp}
                        </span>
                      </div>
                    </div>

                    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                      <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Device Model</p>
                      <p className="text-white font-medium mb-3">{booking.model}</p>
                      
                      <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Issue Description</p>
                      <p className="text-slate-300 text-sm leading-relaxed">{booking.issueDescription}</p>
                    </div>
                  </div>

                  <div className="flex lg:flex-col gap-3 pt-2">
                     {booking.status === 'pending' ? (
                       <button 
                        onClick={() => updateStatus(booking.id, 'completed')}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white text-sm font-medium rounded-lg transition-colors"
                       >
                         <Check className="w-4 h-4" /> Mark Done
                       </button>
                     ) : (
                       <button 
                        onClick={() => updateStatus(booking.id, 'pending')}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition-colors"
                       >
                         Mark Pending
                       </button>
                     )}
                     
                     <button 
                      onClick={() => deleteBooking(booking.id)}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-red-900/20 hover:bg-red-900/40 text-red-400 border border-red-900/30 text-sm font-medium rounded-lg transition-colors"
                     >
                       <Trash2 className="w-4 h-4" /> Delete
                     </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;