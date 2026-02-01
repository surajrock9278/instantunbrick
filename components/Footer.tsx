import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Mail, MessageCircle, Lock } from 'lucide-react';
import { APP_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Smartphone className="h-6 w-6 text-brand-500" />
              <span className="font-bold text-lg text-slate-200">{APP_NAME}</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Professional remote unbricking service for Xiaomi, Redmi, and POCO devices. We bring dead phones back to life.
            </p>
          </div>

          <div>
            <h3 className="text-slate-200 font-semibold mb-4 uppercase text-sm tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/#services" className="hover:text-brand-400 transition-colors">Hard Brick Fix</Link></li>
              <li><Link to="/#services" className="hover:text-brand-400 transition-colors">Bootloop Recovery</Link></li>
              <li><Link to="/#services" className="hover:text-brand-400 transition-colors">EDL Authorization</Link></li>
              <li><Link to="/#services" className="hover:text-brand-400 transition-colors">Region Change</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-200 font-semibold mb-4 uppercase text-sm tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-brand-400 transition-colors">FAQ</Link></li>
              <li><Link to="/terms" className="hover:text-brand-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/booking" className="hover:text-brand-400 transition-colors">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-200 font-semibold mb-4 uppercase text-sm tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-500" />
                <span>support@instantunbrick.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-brand-500" />
                <span>+1 (555) 123-4567 (WhatsApp)</span>
              </li>
              <li className="text-xs text-slate-500 mt-4">
                Available Mon-Sun: 08:00 - 22:00 UTC
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <div className="text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
            <p className="mt-2">Not affiliated with Xiaomi Inc.</p>
          </div>
          <Link to="/admin" className="mt-4 md:mt-0 flex items-center gap-1 hover:text-brand-500 transition-colors">
            <Lock className="w-3 h-3" /> Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;