import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MoreHorizontal, X, ChevronLeft, Maximize2, ArrowUp } from 'lucide-react';

export type Message = {
  id: string;
  sender: 'bot' | 'user' | 'system';
  text: string;
  delay: number; // Delay before this message appears
  internalId?: string; // Automatically set for keys
  productCard?: {
     title: string;
     price: string;
     image: string;
  }
};

interface ChatDemoWidgetProps {
  messages: Message[];
  title?: string;
  theme?: 'light' | 'dark' | 'glass' | 'transparent';
  className?: string;
  bubbleColor?: string; // Tailwind class for user bubble color
  bgVideo?: string; // Optional video background url
}

export const ChatDemoWidget: React.FC<ChatDemoWidgetProps> = ({ 
  messages, 
  title = "CAN&DID 2", 
  theme = 'light',
  className = "",
  bubbleColor = "bg-[#ff5a00]",
  bgVideo
}) => {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [loopId, setLoopId] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    let cumulativeDelay = 1000;

    const runSimulation = () => {
      setVisibleMessages([]);
      setLoopId(prev => prev + 1);
      cumulativeDelay = 1000;

      messages.forEach((msg, index) => {
        cumulativeDelay += msg.delay;
        
        // Show typing indicator a bit before bot messages
        if (msg.sender === 'bot') {
            timeouts.push(setTimeout(() => {
                setIsTyping(true);
            }, cumulativeDelay - Math.min(800, msg.delay / 2)));
        }

        timeouts.push(setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages(prev => [...prev, { ...msg, internalId: `${msg.id}-${Math.random().toString(36).slice(2)}` }]);
        }, cumulativeDelay));
      });
      
      // Loop simulation
      timeouts.push(setTimeout(() => {
          runSimulation();
      }, cumulativeDelay + 4000));
    };

    runSimulation();

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [messages]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleMessages, isTyping]);

  const bgClass = theme === 'dark' ? 'bg-[#182128]' : theme === 'glass' ? 'bg-[#0f1115]/50 backdrop-blur-2xl border-white/20 shadow-2xl' : theme === 'transparent' ? 'bg-transparent shadow-none border-none' : 'bg-[#f8f7f5]';
  const textClass = theme === 'dark' ? 'text-white' : theme === 'glass' ? 'text-white' : theme === 'transparent' ? 'text-white' : 'text-black';
  const headerClass = theme === 'dark' ? 'border-[#ffffff1a]' : theme === 'glass' || theme === 'transparent' ? 'border-white/10' : 'border-black/5';
  const botBubbleClass = theme === 'dark' ? 'bg-[#2a3640] text-gray-100' : theme === 'glass' || theme === 'transparent' ? 'bg-white/10 text-white backdrop-blur-md shadow-sm border border-white/10' : 'bg-white text-gray-800 shadow-sm border border-black/5';
  const userBubbleClass = `${bubbleColor} text-white`;

  return (
    <div className={`flex flex-col relative rounded-2xl overflow-hidden shadow-2xl border ${bgClass} ${textClass} ${className}`}>
      {bgVideo && (
        <div className="absolute inset-0 z-0 pointer-events-none">
           <video src={bgVideo} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
           <div className="absolute inset-0 bg-black/40 mix-blend-overlay"></div>
        </div>
      )}
      {/* Header */}
      <div className={`p-4 flex items-center justify-between border-b relative z-10 ${headerClass}`}>
        <div className="flex items-center space-x-3">
          <ChevronLeft className="w-5 h-5 opacity-50" />
          <div className="flex items-center space-x-2">
            <div className={`p-1 rounded ${theme === 'dark' ? 'bg-black text-white' : 'bg-black text-white'}`}>
                <Sparkles className="w-3 h-3" />
            </div>
            <span className="font-semibold text-sm">{title}</span>
          </div>
        </div>
        <div className="flex items-center space-x-3 opacity-50">
          <MoreHorizontal className="w-5 h-5" />
          <Maximize2 className="w-4 h-4" />
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth min-h-[300px] max-h-[400px] flex flex-col relative z-10">
          <AnimatePresence>
            {visibleMessages.map((msg, idx) => (
                <motion.div 
                   key={msg.internalId || `${msg.id}-${idx}`}
                   initial={{ opacity: 0, y: 10, scale: 0.95 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   transition={{ duration: 0.2 }}
                   className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                    {msg.sender === 'system' ? (
                        <div className="w-full text-center text-xs font-mono opacity-50 mt-2 mb-2">
                            {msg.text}
                        </div>
                    ) : (
                        <div className="flex items-start max-w-[85%] space-x-2">
                            {msg.sender === 'bot' && (
                                <div className={`mt-1 p-1 rounded ${theme === 'dark' ? 'bg-black text-white' : 'bg-black text-white'}`}>
                                    <Sparkles className="w-3 h-3" />
                                </div>
                            )}
                            <div className={`px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed ${msg.sender === 'user' ? userBubbleClass : botBubbleClass}`}>
                                {msg.text}
                                {msg.productCard && (
                                   <div className="mt-4 bg-black/30 rounded-xl overflow-hidden border border-white/10 flex flex-col cursor-pointer hover:bg-black/40 transition-colors pointer-events-auto">
                                      <div className="h-32 overflow-hidden">
                                         <img src={msg.productCard.image} alt={msg.productCard.title} className="w-full h-full object-cover" />
                                      </div>
                                      <div className="p-3">
                                         <div className="font-semibold text-white text-xs mb-1">{msg.productCard.title}</div>
                                         <div className="text-xs text-[#ff5a00] font-mono mb-3">{msg.productCard.price}</div>
                                         <div className="bg-[#ff5a00] text-black text-center text-xs font-bold py-2 rounded-lg w-full">Complete Checkout</div>
                                      </div>
                                   </div>
                                )}
                            </div>
                        </div>
                    )}
                </motion.div>
            ))}
            
            {isTyping && (
                <motion.div 
                   key="typing-indicator"
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0 }}
                   className="flex justify-start"
                >
                    <div className="flex items-start space-x-2">
                        <div className={`mt-1 p-1 rounded ${theme === 'dark' ? 'bg-black text-white' : 'bg-black text-white'}`}>
                            <Sparkles className="w-3 h-3" />
                        </div>
                        <div className={`px-4 py-3 rounded-2xl flex space-x-1 ${botBubbleClass}`}>
                            <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 bg-current rounded-full opacity-50" />
                            <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 bg-current rounded-full opacity-50" />
                            <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 bg-current rounded-full opacity-50" />
                        </div>
                    </div>
                </motion.div>
            )}
            
            {/* Dummy element for auto-scroll spacing */}
            <div key="custom-spacer" className="h-2 w-full shrink-0" />
          </AnimatePresence>
      </div>

      {/* Input */}
      <div className={`p-4 border-t relative z-10 ${headerClass}`}>
        <div className={`flex items-center rounded-full px-4 py-2 ${theme === 'dark' ? 'bg-[#2a3640]' : theme === 'glass' || theme === 'transparent' ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white' : 'bg-white border border-black/10'}`}>
            <span className="text-sm opacity-50 flex-1">Write a message...</span>
            <div className={`p-1.5 rounded-full ${theme === 'dark' ? 'bg-white text-black' : theme === 'transparent' || theme === 'glass' ? 'bg-white text-black' : 'bg-black text-white'}`}>
                <ArrowUp className="w-4 h-4" />
            </div>
        </div>
      </div>
    </div>
  );
};
