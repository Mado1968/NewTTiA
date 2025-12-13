import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { sendChatMessage } from '../services/geminiService';
import { ChatMessage, ChatRole } from '../types';

export const Contact: React.FC = () => {
  const [mode, setMode] = useState<'menu' | 'form' | 'chat'>('menu');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  // Chat State
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: ChatRole.MODEL, text: "System online. How can TTiA assist your digital transformation today?" }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (mode === 'chat') scrollToBottom();
  }, [messages, mode]);

  const handleSendMessage = async () => {
    if (!input.trim() || isThinking) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: ChatRole.USER, text: userMsg }]);
    setIsThinking(true);
    const responseText = await sendChatMessage(userMsg);
    setMessages(prev => [...prev, { role: ChatRole.MODEL, text: responseText }]);
    setIsThinking(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  // MENU VIEW
  if (mode === 'menu') {
    return (
      <div className="space-y-8 text-center py-8">
        <h2 className="text-3xl font-display font-bold">Initiate Protocol</h2>
        <div className="grid gap-4">
          <button 
            onClick={() => setMode('chat')}
            className="group flex items-center justify-between p-6 border border-white/20 hover:border-ttia-green hover:bg-white/5 transition-all text-left"
          >
            <div>
              <div className="font-bold flex items-center gap-2">
                <Sparkles size={16} className="text-ttia-green" />
                AI Assistant
              </div>
              <div className="text-xs opacity-60 mt-1 font-mono">Interactive Inquiry • Instant Response</div>
            </div>
            <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
          </button>

          <button 
            onClick={() => setMode('form')}
            className="group flex items-center justify-between p-6 border border-white/20 hover:border-ttia-orange hover:bg-white/5 transition-all text-left"
          >
            <div>
              <div className="font-bold">Project Application</div>
              <div className="text-xs opacity-60 mt-1 font-mono">Formal Request • Quote Generation</div>
            </div>
            <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
          </button>
        </div>
      </div>
    );
  }

  // CHAT VIEW
  if (mode === 'chat') {
    return (
      <div className="h-[400px] flex flex-col">
        <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 text-ttia-green font-mono text-xs">
             <div className="w-2 h-2 bg-ttia-green rounded-full animate-pulse"></div>
             LIVE CONNECTION
          </div>
          <button onClick={() => setMode('menu')} className="text-xs hover:underline opacity-60">EXIT</button>
        </div>
        
        <div className="flex-1 overflow-y-auto space-y-4 pr-2 mb-4 scrollbar-hide">
          {messages.map((msg, idx) => (
             <div key={idx} className={`flex ${msg.role === ChatRole.USER ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 text-sm font-mono ${msg.role === ChatRole.USER ? 'bg-white/10 border border-white/20' : 'text-ttia-green'}`}>
                   <span className="opacity-50 mr-2 text-xs">[{msg.role === 'user' ? 'USR' : 'SYS'}]</span>
                   {msg.text}
                </div>
             </div>
          ))}
          {isThinking && <div className="text-ttia-green text-xs font-mono animate-pulse">Processing...</div>}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex gap-2 border-t border-white/10 pt-4">
           <input 
             value={input}
             onChange={(e) => setInput(e.target.value)}
             onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
             placeholder="Enter command..."
             className="flex-1 bg-transparent border-b border-white/20 focus:border-ttia-green outline-none font-mono text-sm py-2"
             autoFocus
           />
           <button onClick={handleSendMessage} disabled={isThinking} className="text-ttia-green hover:text-white">
             <Send size={18} />
           </button>
        </div>
      </div>
    );
  }

  // FORM VIEW
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-display font-bold text-2xl">Project Uplink</h3>
        <button onClick={() => setMode('menu')} className="text-xs hover:underline opacity-60">BACK</button>
      </div>
      
      {formStatus === 'success' ? (
        <div className="text-center py-12 border border-ttia-green/30 bg-ttia-green/10">
          <div className="text-ttia-green font-mono text-xl mb-2">TRANSMISSION RECEIVED</div>
          <p className="opacity-70 text-sm">We will establish contact shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono opacity-60 mb-1">IDENTIFIER</label>
            <input required className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-ttia-orange outline-none transition-colors" placeholder="Name or Org" />
          </div>
          <div>
            <label className="block text-xs font-mono opacity-60 mb-1">COMM CHANNEL</label>
            <input required type="email" className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-ttia-orange outline-none transition-colors" placeholder="Email" />
          </div>
          <div>
            <label className="block text-xs font-mono opacity-60 mb-1">PAYLOAD</label>
            <textarea required rows={3} className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-ttia-orange outline-none transition-colors" placeholder="Project details..."></textarea>
          </div>
          <button 
             disabled={formStatus === 'submitting'}
             className="w-full bg-ttia-orange text-white py-3 font-bold text-sm tracking-widest hover:bg-white hover:text-black transition-colors flex justify-center items-center gap-2"
          >
            {formStatus === 'submitting' ? <Loader2 className="animate-spin" size={16} /> : 'INITIATE UPLOAD'}
          </button>
        </form>
      )}
    </div>
  );
};
