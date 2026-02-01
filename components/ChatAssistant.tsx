import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';
import { diagnoseIssue } from '../services/gemini';
import { ChatMessage, DiagnosticStatus } from '../types';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Hi! I'm the Instant Unbrick AI. Describe your phone's problem (e.g., 'stuck on fastboot' or 'black screen'), and I'll tell you if we can fix it." }
  ]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<DiagnosticStatus>(DiagnosticStatus.Idle);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || status === DiagnosticStatus.Analyzing) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setStatus(DiagnosticStatus.Analyzing);

    const result = await diagnoseIssue(userMsg, '');
    
    if (result.text) {
        setMessages(prev => [...prev, { role: 'model', content: result.text }]);
    }
    
    setStatus(DiagnosticStatus.Complete);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-brand-600 hover:bg-brand-500 text-white p-4 rounded-full shadow-lg shadow-brand-500/30 transition-transform hover:scale-110 flex items-center justify-center"
      >
        <MessageSquare className="h-6 w-6 animate-pulse" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">AI</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 w-80 md:w-96 bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[500px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-700 to-brand-600 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Bot className="h-5 w-5 text-white" />
          <h3 className="font-semibold text-white">Repair Diagnostic AI</h3>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-slate-900 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-lg px-4 py-2 text-sm ${
              msg.role === 'user' 
                ? 'bg-brand-600 text-white rounded-br-none' 
                : 'bg-slate-700 text-slate-200 rounded-bl-none border border-slate-600'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {status === DiagnosticStatus.Analyzing && (
          <div className="flex justify-start">
            <div className="bg-slate-700 rounded-lg rounded-bl-none px-4 py-2 flex items-center space-x-2">
              <Loader2 className="h-4 w-4 animate-spin text-brand-400" />
              <span className="text-xs text-slate-400">Analyzing symptoms...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-3 bg-slate-800 border-t border-slate-700 flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe issue (e.g., stuck on logo)..."
          className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-500"
        />
        <button 
          type="submit" 
          disabled={status === DiagnosticStatus.Analyzing}
          className="bg-brand-600 hover:bg-brand-500 disabled:opacity-50 text-white p-2 rounded-lg transition-colors"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
};

export default ChatAssistant;