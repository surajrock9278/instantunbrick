import React, { useState } from 'react';
import { BookingFormData } from '../types';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    whatsapp: '',
    model: '',
    issueDescription: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API call to PHP backend
    setTimeout(() => {
      // In a real scenario, this would POST to /api/book_repair.php
      console.log("Form Submitted:", formData);
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center animate-fade-in">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
        <p className="text-slate-400 mb-6">
          Thank you, {formData.fullName}. We have received your unbrick request. 
          A technician will contact you via WhatsApp at <span className="text-brand-400">{formData.whatsapp}</span> within 15 minutes.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-sm text-slate-500 hover:text-white underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800 p-6 md:p-8 rounded-2xl border border-slate-700 shadow-xl">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
        <span className="bg-brand-500 w-1.5 h-6 mr-3 rounded-full"></span>
        Start Your Repair
      </h3>

      <div className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
            placeholder="John Doe"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-brand-500 outline-none"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-300 mb-1">WhatsApp Number</label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              required
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-brand-500 outline-none"
              placeholder="+1 234 567 890"
            />
          </div>
        </div>

        <div>
          <label htmlFor="model" className="block text-sm font-medium text-slate-300 mb-1">Xiaomi Model</label>
          <select 
            id="model"
            name="model" 
            required
            value={formData.model}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-brand-500 outline-none appearance-none"
          >
            <option value="">Select your model</option>
            <option value="Xiaomi 14/14 Pro">Xiaomi 14 / 14 Pro</option>
            <option value="Xiaomi 13/13 Pro/Ultra">Xiaomi 13 / 13 Pro / Ultra</option>
            <option value="Xiaomi 12/12 Pro">Xiaomi 12 / 12 Pro</option>
            <option value="Redmi Note 13 Series">Redmi Note 13 Series</option>
            <option value="Redmi Note 12 Series">Redmi Note 12 Series</option>
            <option value="POCO F5 / F5 Pro">POCO F5 / F5 Pro</option>
            <option value="POCO X6 / X6 Pro">POCO X6 / X6 Pro</option>
            <option value="Other">Other Model</option>
          </select>
        </div>

        <div>
          <label htmlFor="issueDescription" className="block text-sm font-medium text-slate-300 mb-1">Problem Description</label>
          <textarea
            id="issueDescription"
            name="issueDescription"
            required
            rows={4}
            value={formData.issueDescription}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-brand-500 outline-none"
            placeholder="e.g. Stuck on 'MI' logo, black screen but vibrates, PC detects as QDLoader 9008..."
          ></textarea>
        </div>

        {status === 'error' && (
          <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 flex items-start space-x-2">
            <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
            <p className="text-sm text-red-200">Something went wrong. Please check your connection and try again.</p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-brand-500/25 transition-all transform hover:scale-[1.01] flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="animate-spin h-5 w-5" />
              <span>Processing...</span>
            </>
          ) : (
            <span>Get Instant Help</span>
          )}
        </button>
        
        <p className="text-xs text-center text-slate-500 mt-4">
          By submitting, you agree to our Terms of Service. Your data is secure.
        </p>
      </div>
    </form>
  );
};

export default BookingForm;