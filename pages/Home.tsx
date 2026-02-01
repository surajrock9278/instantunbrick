import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS } from '../constants';
import { Check, Shield, Clock, Wifi, Star } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm animate-fade-in-up">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span className="text-sm font-medium text-brand-300">Technicians Online Now</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Unbrick Your Dead <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-300">
              Xiaomi Phone
            </span> in Minutes
          </h1>
          
          <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Professional remote repair for Hard Brick, Bootloop, and EDL issues. 
            No technical skills required. We connect, we fix, you relax.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-brand-600 hover:bg-brand-500 shadow-lg shadow-brand-500/30 transition-all hover:-translate-y-1"
            >
              Start Repair Now
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 text-lg font-medium rounded-lg text-slate-300 bg-slate-800/50 hover:bg-slate-800 hover:text-white backdrop-blur-sm transition-all"
            >
              View Services
            </a>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-slate-500 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-brand-500" />
              <span>No Fix, No Fee</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-500" />
              <span>20 Min Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="w-5 h-5 text-brand-500" />
              <span>100% Remote</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-brand-400 uppercase tracking-wide">Our Expertise</h2>
            <p className="mt-2 text-3xl font-bold text-white sm:text-4xl">What We Fix</p>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              We specialize in Qualcomm-based Xiaomi devices. From software bricks to region changes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:bg-slate-800 transition-all duration-300 hover:border-brand-500/50 group">
                <div className="bg-slate-900 rounded-lg p-3 inline-block mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-4 min-h-[60px]">{service.description}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700">
                  <span className="text-brand-400 font-bold text-lg">{service.price}</span>
                  <Link to="/booking" className="text-sm font-medium text-white hover:text-brand-400 transition-colors">
                    Book &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Why Us */}
      <section className="py-20 bg-slate-950 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Instant Unbrick?</h2>
              <div className="space-y-6">
                {[
                  { title: "Authorized Technicians", desc: "We have access to Xiaomi Service Accounts for EDL flashing." },
                  { title: "Data Safety", desc: "We respect your privacy. All connections are secure and monitored." },
                  { title: "Global Support", desc: "We support users from any country. English & Spanish support available." },
                  { title: "Instant Response", desc: "Typical response time is under 10 minutes during business hours." }
                ].map((item, i) => (
                  <div key={i} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-900 text-brand-400 border border-brand-800">
                        <Check className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">{item.title}</h3>
                      <p className="mt-1 text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-500/20 blur-2xl rounded-full"></div>
              <img 
                src="https://picsum.photos/600/400" 
                alt="Technician working remotely" 
                className="relative rounded-xl shadow-2xl border border-slate-700 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-16">Trusted by 1000+ Users</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-slate-800 p-8 rounded-xl relative">
                <div className="flex space-x-1 text-yellow-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="fill-current w-4 h-4" />)}
                </div>
                <p className="text-slate-300 mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-brand-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-900 to-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to bring your phone back to life?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Don't let a bricked phone ruin your day. Our technicians are ready to help you right now.
          </p>
          <Link
            to="/booking"
            className="inline-block bg-white text-brand-600 hover:bg-slate-100 font-bold text-lg px-10 py-4 rounded-full shadow-xl transition-transform hover:scale-105"
          >
            Fix My Phone Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;