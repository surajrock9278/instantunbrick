import React from 'react';
import { Target, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">About Instant Unbrick</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          We are a team of specialized software technicians dedicated to solving the most complex Xiaomi software issues remotely.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="prose prose-invert prose-lg">
          <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
          <p className="text-slate-300 mb-4">
            Started in 2020 when Xiaomi introduced stricter EDL (Emergency Download Mode) authentication, preventing users from unbricking their own devices. We realized there was a massive need for a reliable, trustworthy service that could perform these authorized repairs remotely.
          </p>
          <p className="text-slate-300">
            Since then, we have unbricked over 5,000 devices worldwide, saving our customers from expensive motherboard replacements or weeks of waiting for local service centers.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 p-6 rounded-xl text-center">
                <Target className="w-10 h-10 text-brand-500 mx-auto mb-3" />
                <h4 className="font-bold text-white text-3xl">5k+</h4>
                <p className="text-sm text-slate-400">Phones Fixed</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl text-center">
                <Globe className="w-10 h-10 text-brand-500 mx-auto mb-3" />
                <h4 className="font-bold text-white text-3xl">50+</h4>
                <p className="text-sm text-slate-400">Countries</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl text-center col-span-2">
                <Users className="w-10 h-10 text-brand-500 mx-auto mb-3" />
                <h4 className="font-bold text-white text-3xl">99.8%</h4>
                <p className="text-sm text-slate-400">Success Rate</p>
            </div>
        </div>
      </div>

      <div className="bg-slate-800 rounded-2xl p-8 md:p-12">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Mission</h3>
        <p className="text-slate-300 text-center max-w-4xl mx-auto text-lg">
          "To provide accessible, affordable, and transparent remote software repair services for smartphone users globally, eliminating the need for physical shipping and reducing electronic waste."
        </p>
      </div>
    </div>
  );
};

export default About;