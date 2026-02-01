import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = FAQS.filter(f => 
    f.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    f.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl font-bold text-white text-center mb-8">Frequently Asked Questions</h1>
      
      {/* Search Bar */}
      <div className="relative mb-12">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-500" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-4 border border-slate-700 rounded-lg leading-5 bg-slate-800 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 sm:text-sm transition-all"
          placeholder="Search for answers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-slate-700 rounded-lg bg-slate-800/50 overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-lg text-slate-200">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-brand-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 pt-0">
                  <p className="text-slate-400 leading-relaxed border-t border-slate-700/50 pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center text-slate-500 py-10">
            No results found for "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;