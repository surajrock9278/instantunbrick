import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Smartphone, Zap } from 'lucide-react';
import { APP_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/#services' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Smartphone className="h-8 w-8 text-slate-100 group-hover:text-brand-400 transition-colors" />
              <Zap className="h-4 w-4 text-brand-500 absolute -bottom-1 -right-1 animate-pulse" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              {APP_NAME}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-brand-400 bg-slate-800'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="bg-brand-600 hover:bg-brand-500 text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg shadow-brand-500/20 transition-all hover:scale-105"
              >
                Book Repair
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-brand-600 hover:bg-brand-500 text-white px-5 py-3 rounded-md text-base font-bold"
            >
              Start Repair
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;