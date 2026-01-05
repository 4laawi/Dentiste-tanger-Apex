
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  lang: 'en' | 'fr';
}

const GeminiChat: React.FC<Props> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const greeting = lang === 'fr'
    ? 'Bonjour ! Je suis l\'assistant IA du Dr. Reda Saoui. Comment puis-je vous aider pour vos soins dentaires à Tanger ?'
    : 'Hello! I am Dr. Reda Saoui\'s AI assistant. How can I help you with your dental care in Tangier today?';

  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: greeting }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const genAI = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || '' });
      const response = await genAI.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: userMessage,
        config: {
          systemInstruction: `
            You are a helpful and professional AI assistant for "Dr. Reda Saoui - Dentiste Tanger" in Tangier, Morocco.
            Current Language: ${lang === 'fr' ? 'French' : 'English'}. PLEASE RESPOND IN ${lang === 'fr' ? 'FRENCH' : 'ENGLISH'}.
            Clinic details:
            - Doctor: Dr. Reda Saoui.
            - Location: Résidence El Amal, 1er Étage, Bd Mohamed V, Tanger.
            - Phone: +212 539-322132.
            - Keywords: Dentiste Tanger, Cabinet Dentaire Tanger, Dr. Saoui Reda.
            - Services: Dental Implants, Cosmetic Dentistry (Veneers, Emax), Laser Whitening, Invisalign, Dental Emergencies.
            - Vibe: High-end, luxury, painless, expert, modern Moroccan hospitality.
            - Schedule: Mon-Fri 9-18, Sat 9-14.
            
            Guidelines:
            - Be extremely professional, warm, and reassuring.
            - Use a luxury tone (concierge-like).
            - Always encourage booking a consultation for personalized advice.
            - If asked about prices, explain that a clinical examination is necessary for an accurate quote.
            - Mention the "Solea Laser" for pain-free treatments if relevant.
          `
        }
      });

      const botResponse = response.text || (lang === 'fr' ? "Désolé, j'ai un problème technique." : "Sorry, I'm having technical issues.");
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      console.error('Gemini error:', error);
      setMessages(prev => [...prev, { role: 'bot', text: lang === 'fr' ? "Erreur de connexion." : "Connection error." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] hidden md:block">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-100 overflow-hidden"
          >
            <div className="p-4 bg-brand-dark text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-cyan rounded-full flex items-center justify-center">
                  <Bot className="text-brand-dark" size={20} />
                </div>
                <div>
                  <p className="font-bold leading-none">Assistant Dr. Saoui</p>
                  <p className="text-xs text-brand-cyan mt-1 flex items-center gap-1">
                    <Sparkles size={10} /> Powered by Gemini
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:opacity-70">
                <X size={24} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-accent/30">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-sans shadow-sm ${msg.role === 'user'
                    ? 'bg-gradient-to-br from-brand-teal to-brand-cyan text-brand-dark rounded-tr-none'
                    : 'bg-white text-brand-dark border border-gray-100 rounded-tl-none'
                    }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-1.5">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                      className="w-2 h-2 bg-brand-cyan rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, delay: 0.2, repeat: Infinity }}
                      className="w-2 h-2 bg-brand-cyan rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, delay: 0.4, repeat: Infinity }}
                      className="w-2 h-2 bg-brand-cyan rounded-full"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-white border-t flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={lang === 'fr' ? "Posez votre question..." : "Type your question..."}
                className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-cyan"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 bg-brand-cyan text-brand-dark rounded-full flex items-center justify-center hover:bg-brand-teal transition-all disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-brand-dark text-brand-cyan rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 relative group"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};

export default GeminiChat;
