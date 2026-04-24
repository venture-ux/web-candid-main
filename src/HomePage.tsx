import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ChevronRight, Play, ArrowRight, Check, X, Shield, Users, Target, ArrowUpRight,
  Menu, Sparkles, MessageCircle, Activity, Globe, Database, Cpu, Store
} from 'lucide-react';
import { SiWhatsapp, SiShopify, SiInstagram, SiThreads, SiZendesk, SiSalesforce, SiIntercom } from 'react-icons/si';
import { HLSVideo } from './components/HLSVideo';
import { ChatDemoWidget, type Message } from './components/ChatDemoWidget';

const TopBanner = () => (
  <div className="bg-[#1a1c23] border-b border-white/10 text-center py-2.5 text-xs text-gray-300 relative z-50">
    CAN&DID 2 can now engage your prospects and grow your sales pipeline.{' '}
    <a href="#" className="underline hover:text-white transition-colors">Learn more</a>
  </div>
);

const Navbar = () => (
  <nav className="flex items-center justify-between px-6 py-4 fixed w-full top-[38px] z-40 bg-black/50 backdrop-blur-md border-b border-white/5">
    <div className="flex items-center space-x-8">
      <Link to="/" className="flex items-center space-x-2 text-white hover:opacity-80 transition-opacity">
        <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-black" />
        </div>
        <span className="font-bold text-lg tracking-tight">CAN&DID</span>
      </Link>
      <div className="hidden lg:flex items-center space-x-6 text-sm font-sans font-medium text-gray-300">
        <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
        <a href="#performances" className="hover:text-white transition-colors">Performances</a>
        <a href="#features" className="hover:text-white transition-colors">Features</a>
        <a href="#system" className="hover:text-white transition-colors">System</a>
        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
      </div>
    </div>
    <div className="flex items-center space-x-6 font-sans text-sm">
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-colors">
        ONBOARD NOW
      </motion.button>
    </div>
  </nav>
);

const Hero = () => {
  const messages: Message[] = [
    { id: '1', sender: 'user', text: "I need a gift for my wife's 30th. She's a designer who works from cafes.", delay: 900 },
    { id: '2', sender: 'bot', text: "A milestone birthday for a creative! Does she prefer carrying a full setup (laptop, tablet, sketching gear) or traveling light with just the essentials?", delay: 2400 },
    { id: '3', sender: 'user', text: "Usually a full setup. She carries an iPad pro, a MacBook, and tons of pens.", delay: 1800 },
    { id: '4', sender: 'bot', text: "Got it. Standard totes usually become a disorganized mess for that much gear. Have you considered a structured organizational tote like our 'Aero Commuter'? It has a padded drop-proof sleeve and a quick-access stylus pocket.", delay: 3000 },
    { id: '5', sender: 'user', text: "That sounds good. Does it look professional but not boring?", delay: 1500 },
    { id: '6', sender: 'bot', text: "Exactly. It's crafted from matte full-grain Italian leather—extremely durable and ages beautifully. Most designers gravitate towards 'Saddle Tan' or 'Midnight' because it fits a refined creative aesthetic. Which color fits her style better?", delay: 3000 },
    { id: '7', sender: 'user', text: "Midnight for sure. But is it heavy?", delay: 1500 },
    { id: '8', sender: 'bot', text: "It's surprisingly lightweight at 1.8 lbs, engineered with hollow-core hardware. Plus, for a 30th birthday, I'd highly recommend adding complimentary monogramming. Should we personalize it with her initials?", delay: 3000 },
    { id: '9', sender: 'user', text: "Yes, that's perfect! Initials are 'E.R.M'.", delay: 1500 },
    { 
      id: '10', 
      sender: 'bot', 
      text: "Beautiful choice. I've configured the Aero Commuter in Midnight with 'E.R.M' monogramming. Here is your secure fast-checkout link to review and finalize. It's ready to ship tomorrow!", 
      delay: 3000,
      productCard: {
        title: "Aero Commuter Tote (Midnight)",
        price: "$295.00",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=600"
      }
    }
  ];

  return (
    <div className="relative pt-40 pb-32 px-6 flex flex-col justify-center items-center text-center overflow-hidden min-h-[90vh]">
      {/* City Video Background */}
      <div className="absolute inset-0 z-0">
         <video src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 pointer-events-none" />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-[#000]/50 to-transparent z-10"></div>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#ff6a00]/30 via-[#8a2be2]/10 to-transparent blur-[120px] rounded-full -z-10" />

        <div className="text-[10px] tracking-widest text-[#ff5a00] font-mono uppercase mb-10 flex items-center bg-[#ff5a00]/10 px-5 py-2.5 rounded-full border border-[#ff5a00]/20 shadow-[0_0_20px_rgba(255,90,0,0.2)]">
           <span className="w-2 h-2 bg-[#ff5a00] rounded-full mr-3 animate-pulse"></span>
           SEE CANDID close deal in seconds
        </div>

      {/* Hero Entrance Animation / Staggered Fade In */}
      <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl lg:text-8xl font-space font-medium tracking-tight text-white mb-6 max-w-5xl leading-[1.1] relative z-20">
        Close more sales natively in chat
      </motion.h1>
      
      <motion.h2 initial={{ opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-gray-400 font-sans mb-10 max-w-2xl relative z-20">
        The #1 AI Agent for all your customer success
      </motion.h2>

      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-col items-center mb-16 relative z-20 w-full">


        {/* AI Centric Box added back */}
        <div className="bg-[#ff5a00] text-black rounded-lg p-5 max-w-sm flex items-start space-x-4 text-left border border-orange-400/50 shadow-[0_0_40px_rgba(255,90,0,0.3)] relative z-20 mb-12">
          <div className="flex-shrink-0 mt-1">
            <Sparkles className="w-8 h-8" />
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-widest font-bold mb-1 uppercase">#1 AI-CENTRIC CUSTOMER SUCCESS - POWERED BY APEX 1.0</div>
            <div className="text-sm font-semibold mb-2 leading-tight text-black/90">
              THE HIGHEST-PERFORMING, FASTEST MODEL FOR CUSTOMER SERVICE.
            </div>
            <a href="#" className="text-xs font-semibold underline decoration-2 underline-offset-2">Learn more</a>
          </div>
        </div>

        <div className="w-full max-w-4xl relative">
          
          {/* Device Mockup */}
          <div className="rounded-[2.5rem] p-2 md:p-3 bg-white/5 backdrop-blur-2xl flex items-center justify-center border border-white/20 shadow-[0_0_120px_rgba(255,90,0,0.15)] relative z-10 text-left">
             <ChatDemoWidget 
               messages={messages} 
               title="CAN&DID Sales Consultant" 
               theme="glass"
               bubbleColor="bg-[#ff5a00]"
               className="w-full h-[500px] md:h-[650px] !shadow-none border-none"
             />
          </div>
        </div>
      </motion.div>
      
    </div>
  );
};

const LogoGrid = () => {
  const logos = [
    { name: 'ANTHROPIC', icon: <Activity className="w-5 h-5 mr-2" /> },
    { name: 'asana', icon: <Target className="w-5 h-5 mr-2" /> },
    { name: 'AUTODESK', icon: <Cpu className="w-5 h-5 mr-2" /> },
    { name: 'clay', icon: <Database className="w-5 h-5 mr-2" /> }
  ];
  const moreLogos = ['Culture Amp', 'DOORDASH', 'GAMMA', 'glean', 'kajabi', 'LaunchDarkly', 'Linear', 'MERCURY', 'miro', 'monday.com', 'shutterstock', 'snowflake', 'synthesia', 'toast'];
  return (
    <div className="py-20 px-6 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 items-center opacity-70">
        {logos.map((l, i) => (
          <div key={i} className="flex items-center text-lg font-space font-semibold tracking-wider text-gray-400">
            {l.icon} {l.name}
          </div>
        ))}
        {moreLogos.map((name, i) => (
          <div key={`more-${i}`} className="text-sm font-semibold text-gray-500 tracking-wide font-sans flex items-center">
             {name}
          </div>
        ))}
      </div>
    </div>
  );
};

const CapabilitiesSection = () => {
  const complexQueryMessages: Message[] = [
    { id: '1', sender: 'user', text: "I need to return an item, but the original payment method was a prepaid visa gift card that I threw away. Can I get store credit instead?", delay: 800 },
    { id: '2', sender: 'bot', text: "That's a great question. According to our standard policy, refunds are issued to the original payment method. Let me check the specific procedure for lost prepaid cards.", delay: 2000 },
    { id: '3', sender: 'system', text: "Agent paused. Searching internal knowledge base for 'lost prepaid card refund policy'...", delay: 4000 },
    { id: '4', sender: 'bot', text: "I want to make sure I process this correctly for you. Since I cannot find a definitive answer in our policy for this exact situation, I am pausing here to ensure accuracy. No tokens or credits will be used for an incorrect guess. I'm routing this to our billing specialists right now.", delay: 3500 }
  ];

  return (
  <div id="capabilities" className="bg-[#f2f1f0] text-black w-full overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row justify-between items-start mb-16">
        <div className="mb-8 md:mb-0">
          <div className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4 flex items-center">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
            CAPABILITIES
          </div>
        </div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-space font-medium tracking-tight max-w-2xl leading-[1.1]">
          CAN&DID resolves the most complex queries on every channel
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative border-t border-black/10 pt-8">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-4">
          <div className="text-xs font-mono text-gray-500 mb-6">01</div>
          <p className="text-lg leading-relaxed text-gray-800 mb-8 font-sans">
            CAN&DID handles even the most complex queries through a continuous improvement loop called the CAN&DID Flywheel. Train CAN&DID on your Procedures, knowledge, and policies, test performance before launch, deploy across every channel, then analyze and improve with AI-powered insights—so every query is resolved accurately and consistently.
          </p>
          <button className="border border-black rounded-full px-6 py-2.5 font-semibold hover:bg-black hover:text-white transition-colors text-sm">
            Explore all capabilities
          </button>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-8 bg-white min-h-[400px] border border-black/5 rounded-xl flex items-center justify-center p-8 relative overflow-hidden shadow-sm">
          <div className="absolute inset-0 z-0">
             <HLSVideo src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" className="w-full h-full object-cover opacity-10 blur-sm mix-blend-multiply pointer-events-none" />
          </div>
          <div className="w-full max-w-lg relative z-10 flex justify-center">
             <ChatDemoWidget 
               messages={complexQueryMessages} 
               title="CAN&DID Support" 
               theme="light"
               bubbleColor="bg-[#ff5a00]"
               className="w-full h-[380px] !shadow-2xl border-black/10"
             />
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-black/10">
        {[
          { num: "1", title: "Train", desc: "Train CAN&DID to resolve even the most complex queries with your Procedures, knowledge and policies." },
          { num: "2", title: "Test", desc: "Run fully simulated customer conversations from start to finish to see exactly how CAN&DID will behave before going live." },
          { num: "3", title: "Deploy", desc: "Set CAN&DID live across every channel—voice, email, chat, and social—for consistent support wherever customers reach out." },
          { num: "4", title: "Analyze", desc: "Use AI-powered insights to analyze and improve CAN&DID's performance and deliver better customer experiences." },
        ].map((item, i) => (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} key={i}>
            <h3 className="font-semibold text-lg mb-2">{item.num}. {item.title}</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.desc}</p>
            <a href="#" className="text-xs font-semibold underline underline-offset-4 decoration-black/30 hover:decoration-black transition-colors">Learn more</a>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
  );
};

const PerformanceSection = () => (
  <div id="performances" className="bg-[#f2f1f0] text-black w-full overflow-hidden border-t border-black/10">
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row justify-between items-start mb-16">
        <div className="mb-8 md:mb-0">
          <div className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4 flex items-center">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
            UNRIVALED PERFORMANCE
          </div>
        </div>
        <div className="flex-1 flex justify-between items-end w-full max-w-4xl">
           <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-space font-medium tracking-tight leading-[1.1] max-w-xl">
             CAN&DID outperforms every competitor.
           </motion.h2>
           <motion.h2 initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-space font-medium tracking-tight leading-[1.1] text-right">
             Every time.
           </motion.h2>
        </div>
      </div>

      <div className="mt-2 mb-20 max-w-5xl">
        <p className="text-xl md:text-2xl font-sans text-gray-500 leading-relaxed font-semibold">
          In production, <span className="bg-[#ffdbcd] text-[#b84200] px-2 py-0.5 rounded-sm font-medium">CAN&DID Apex 1.0 outperforms frontier models</span> with higher resolution rates, fewer hallucinations, and faster responses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {/* Chart 1 */}
         <div>
            <h3 className="text-xl font-medium mb-6 font-sans"><span className="text-[#ff5a00] font-semibold">2.8%</span> higher resolution rate</h3>
            <div className="bg-white rounded-[1rem] p-4 md:p-6 shadow-[0_2px_10px_rgb(0,0,0,0.05)] border border-black/5 h-[300px] flex flex-col relative w-full overflow-hidden">
               {/* Grid lines */}
               <div className="absolute inset-x-6 inset-y-6 flex flex-col justify-between pointer-events-none">
                  {[...Array(4)].map((_, i) => (
                    <div key={`grid1-${i}`} className="w-full border-b border-dashed border-gray-200"></div>
                  ))}
               </div>
               {/* Bars */}
               <div className="relative flex-1 flex items-end justify-between px-2 gap-3 mt-6 pb-2">
                  <div className="w-full flex justify-center group h-full items-end">
                     <div className="w-full bg-[#ff5a00] rounded-sm relative flex flex-col justify-start items-center pt-3 text-white text-[10px] font-mono font-bold" style={{height: '100%'}}>73.1%</div>
                  </div>
                  <div className="w-full flex justify-center group h-full items-end">
                     <div className="w-full bg-[#fadbd0] rounded-sm relative flex flex-col justify-start items-center pt-3 text-[#b84200] text-[10px] font-mono font-bold" style={{height: '80%'}}>69.6%</div>
                  </div>
                  <div className="w-full flex justify-center group h-full items-end">
                     <div className="w-full bg-[#fadbd0] rounded-sm relative flex flex-col justify-start items-center pt-3 text-[#b84200] text-[10px] font-mono font-bold" style={{height: '88%'}}>71.1%</div>
                  </div>
                  <div className="w-full flex justify-center group h-full items-end">
                     <div className="w-full bg-[#fadbd0] rounded-sm relative flex flex-col justify-start items-center pt-3 text-[#b84200] text-[10px] font-mono font-bold" style={{height: '88%'}}>71.1%</div>
                  </div>
               </div>
               <div className="flex justify-between px-2 mt-2 text-[10px] font-mono font-bold text-black gap-2">
                  <div className="w-full text-center">1.0</div>
                  <div className="w-full text-center"></div>
                  <div className="w-full text-center"></div>
                  <div className="w-full text-center"></div>
               </div>
            </div>
         </div>

         {/* Chart 2 */}
         <div>
            <h3 className="text-xl font-medium mb-6 font-sans"><span className="text-[#ff5a00] font-semibold">0.6 seconds</span> faster time to first token</h3>
            <div className="bg-white rounded-[1rem] p-4 md:p-6 shadow-[0_2px_10px_rgb(0,0,0,0.05)] border border-black/5 h-[300px] flex flex-col relative w-full overflow-hidden">
               {/* Grid lines */}
               <div className="absolute inset-x-6 inset-y-6 flex flex-col justify-between pointer-events-none">
                  {[...Array(4)].map((_, i) => (
                    <div key={`grid2-${i}`} className="w-full border-b border-dashed border-gray-200"></div>
                  ))}
               </div>
               {/* Bars */}
               <div className="relative flex-1 flex items-end justify-between px-2 gap-3 mt-6 pb-2">
                  <div className="w-full flex justify-center group h-full items-end">
                     <div className="w-full bg-[#ff5a00] rounded-sm relative flex flex-col justify-start items-center pt-3 text-white text-[10px] font-mono font-bold" style={{height: '40%'}}>2.75</div>
                  </div>
                  <div className="w-full flex justify-center group h-full items-end">
                     <div className="w-full bg-[#fadbd0] rounded-sm relative flex flex-col justify-start items-center pt-3 text-[#b84200] text-[10px] font-mono font-bold" style={{height: '65%'}}>4.60</div>
                  </div>
                  <div className="w-full flex justify-center group h-full items-end">
                     <div className="w-full bg-[#fadbd0] rounded-sm relative flex flex-col justify-start items-center pt-3 text-[#b84200] text-[10px] font-mono font-bold" style={{height: '95%'}}>5.45</div>
                  </div>
                  <div className="w-full flex justify-center group h-full items-end">
                     <div className="w-full bg-[#fadbd0] rounded-sm relative flex flex-col justify-start items-center pt-3 text-[#b84200] text-[10px] font-mono font-bold" style={{height: '55%'}}>4.20</div>
                  </div>
               </div>
               <div className="flex justify-between px-2 mt-2 text-[10px] font-mono font-bold text-black gap-2">
                  <div className="w-full text-center">1.0</div>
                  <div className="w-full text-center"></div>
                  <div className="w-full text-center"></div>
                  <div className="w-full text-center"></div>
               </div>
            </div>
         </div>

         {/* Chart 3 */}
         <div>
            <h3 className="text-xl font-medium mb-6 font-sans"><span className="text-[#ff5a00] font-semibold">-65%</span> reduction in<br/>hallucinations*</h3>
            <div className="bg-white rounded-[1rem] p-4 md:p-6 shadow-[0_2px_10px_rgb(0,0,0,0.05)] border border-black/5 h-[300px] flex flex-col relative w-full overflow-hidden">
               {/* Grid lines */}
               <div className="absolute inset-x-6 inset-y-6 flex flex-col justify-between pointer-events-none mt-10">
                  <div className="w-full border-b-[1.5px] border-black"></div>
                  {[...Array(3)].map((_, i) => (
                    <div key={`grid3-${i}`} className="w-full border-b border-dashed border-gray-200"></div>
                  ))}
               </div>
               
               {/* Bars down from 0 */}
               <div className="relative flex-1 flex items-start justify-between px-2 gap-3 mt-10">
                  <div className="w-full flex justify-center group h-full">
                     <div className="w-full bg-[#ff5a00] rounded-sm relative flex flex-col justify-end items-center pb-3 text-white text-[10px] font-mono font-bold" style={{height: '55%'}}>-64.7%</div>
                  </div>
                  <div className="w-full flex justify-center group h-full">
                     <div className="w-full bg-[#fadbd0] rounded-sm relative flex flex-col justify-end items-center pb-3 text-[#b84200] text-[10px] font-mono font-bold" style={{height: '80%'}}>-70.6%</div>
                  </div>
                  <div className="w-full flex justify-center group h-full">
                     <div className="w-full bg-[#fadbd0] rounded-sm relative flex flex-col justify-end items-center pb-3 text-[#b84200] text-[10px] font-mono font-bold" style={{height: '80%'}}>-70.6%</div>
                  </div>
                  <div className="w-full flex justify-center group h-full">
                     <div className="w-full bg-[#fadbd0] rounded-sm relative flex flex-col justify-end items-center pb-3 text-[#b84200] text-[10px] font-mono font-bold" style={{height: '80%'}}>-70.6%</div>
                  </div>
               </div>
               <div className="flex justify-between px-2 mt-4 text-[9px] font-mono font-bold text-black gap-2 leading-tight">
                  <div className="w-full text-center text-[8px] uppercase">CAN&DID<br/>APEX<br/>1.0</div>
                  <div className="w-full text-center text-[8px] uppercase">SONNET<br/>4.0</div>
                  <div className="w-full text-center text-[8px] uppercase">GPT4<br/>4.5</div>
                  <div className="w-full text-center text-[8px] uppercase">GPT<br/>5.4</div>
               </div>
            </div>
            <div className="text-[9px] font-mono text-gray-400 font-bold tracking-wider uppercase mt-4">*Compared to Sonnet 4.0</div>
         </div>
      </div>
    </div>
  </div>
);



const EcommerceDemoSection = () => {
  const messages: Message[] = [
    { id: '1', sender: 'user', text: "Looking for a birthday gift for my wife, she likes outdoors and coffee.", delay: 500 },
    { id: '2', sender: 'bot', text: "Perfect combination. Is she more into hiking/camping, or patio/garden coffee mornings? We have amazing gear for both.", delay: 1500 },
    { id: '3', sender: 'user', text: "Mainly hiking and weekend camping.", delay: 1200 },
    { id: '4', sender: 'bot', text: "Got it. For weekend camping, I highly recommend our insulated French Press Travel Kit. It keeps coffee hot for 12 hours. Would you like me to check what colors are in stock?", delay: 2000 },
    { id: '5', sender: 'user', text: "Yes please, what colors do you have?", delay: 1000 },
    { id: '6', sender: 'bot', text: "We have Forest Green, Matte Black, and Sunrise Orange. Forest Green usually sells out fast and we only have 2 left. Shall I add it to your cart before it's gone?", delay: 2000 },
    { id: '7', sender: 'user', text: "Okay, add the Forest Green.", delay: 1500 },
    { id: '8', sender: 'bot', text: "Added to your cart! Also, many people pair this with our airtight coffee bean canister for freshness. It's normally $25, but I can bundle it for $15 right now. Interested?", delay: 2000 },
    { id: '9', sender: 'user', text: "Sure, let's do the bundle. Can it arrive by Friday?", delay: 1500 },
    { id: '10', sender: 'bot', text: "Added the bundle! Yes, if we finalize in the next hour, I can guarantee Friday delivery via Express shipping. Here is your checkout link to pay securely: [Checkout Link].", delay: 2500 }
  ];

  return (
    <div className="bg-[#0b0c10] text-white py-24 border-t border-white/5 relative overflow-hidden">
       {/* Background decorative elements */}
       <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#ff5a00]/10 to-transparent blur-3xl rounded-full pointer-events-none transform translate-x-1/4 -translate-y-1/4"></div>

       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-[10px] font-mono tracking-widest text-[#ff5a00] uppercase mb-6 flex items-center">
               <span className="w-1.5 h-1.5 bg-[#ff5a00] rounded-sm mr-2"></span> CAPTURE REVENUE
            </div>
            <h2 className="text-4xl md:text-6xl font-space font-medium tracking-tight mb-8 leading-[1.1]">
              Close more sales natively in chat
            </h2>
            <p className="text-gray-400 font-sans leading-relaxed text-lg mb-12">
              Don't just answer questions—sell. CAN&DID 2 behaves like your best sales rep: uncovering needs, suggesting bundles, creating urgency, and driving the customer to check out seamlessly.
            </p>

            <div className="space-y-6">
               {[
                 { title: "Smart Probing", desc: "Identifies the core need before suggesting a product." },
                 { title: "Inventory Awareness", desc: "Builds urgency based on real-time stock levels." },
                 { title: "Dynamic Bundling", desc: "Upsells related items with personalized discounts." },
                 { title: "Direct Checkout", desc: "Removes friction by generating secure payment links in the flow." }
               ].map((feature, i) => (
                  <div key={i} className="flex items-start">
                     <div className="w-6 h-6 rounded-full bg-white/5 text-white flex items-center justify-center text-xs font-mono mr-4 shrink-0 mt-0.5">{i+1}</div>
                     <div>
                        <div className="font-semibold text-white mb-1">{feature.title}</div>
                        <div className="text-sm text-gray-500 font-sans">{feature.desc}</div>
                     </div>
                  </div>
               ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20 pointer-events-none rounded-[2rem]"></div>
             
             {/* Device Mockup */}
             <div className="rounded-[2.5rem] p-2 bg-[#1c2128] border border-white/10 shadow-2xl relative z-10">
                <ChatDemoWidget 
                  messages={messages} 
                  title="CAN&DID Sales Rep" 
                  theme="transparent"
                  bubbleColor="bg-[#ff5a00]"
                  className="h-[600px] !shadow-none border-white/5"
                  bgVideo="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
                />
             </div>
          </motion.div>

       </div>
    </div>
  );
};

const IntegrationGridSection = () => (
  <div className="bg-[#0b0c10] text-white py-24">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
       <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
         <div className="text-xs font-mono uppercase tracking-widest text-[#ff5a00] mb-8 flex items-center">
            <span className="w-2 h-2 bg-[#ff5a00] rounded-full mr-3"></span>
            SEAMLESS INTEGRATION
         </div>
         <h2 className="text-4xl md:text-5xl font-space font-medium tracking-tight mb-8">
           CAN&DID works with any helpdesk
         </h2>
         <p className="text-gray-400 mb-8 font-mono text-xs tracking-wide uppercase">02 Set up CAN&DID with your existing helpdesk or as part of the CAN&DID Customer Service Suite—with support for additional platforms and custom channels.</p>
         
         <div className="space-y-4 mb-10">
            <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">KEY FEATURES</div>
            {[
              "Set up in under an hour.",
              "Integrates into your current support channels—tickets, email, live chat, and more.",
              "Follows your existing assignment rules, automations, and reporting.",
              "Escalates to agents in your preferred inbox."
            ].map((text, i) => (
              <div key={i} className="flex items-start text-sm text-gray-300">
                <Check className="w-4 h-4 text-[#ff5a00] mr-3 mt-0.5 flex-shrink-0" />
                <span>{text}</span>
              </div>
            ))}
         </div>
         <div className="flex space-x-6 text-sm font-semibold border-b border-white/10 inline-flex">
           <button className="pb-2 border-b-2 border-white">CAN&DID Suite</button>
           <button className="pb-2 text-gray-500 hover:text-white transition-colors">CAN&DID for Salesforce</button>
         </div>
       </motion.div>

       <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
          <div className="grid grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
             {[
               { icon: SiWhatsapp, name: "WhatsApp", color: "group-hover:text-[#25D366]", hoverBg: "hover:bg-[#25D366]/5" },
               { icon: SiShopify, name: "Shopify", color: "group-hover:text-[#95BF47]", hoverBg: "hover:bg-[#95BF47]/5" },
               { icon: Store, name: "Shopline", color: "group-hover:text-[#1E88E5]", hoverBg: "hover:bg-[#1E88E5]/5" },
               { icon: SiInstagram, name: "Instagram", color: "group-hover:text-[#E1306C]", hoverBg: "hover:bg-[#E1306C]/5" },
               { isCenter: true },
               { icon: SiThreads, name: "Threads", color: "group-hover:text-white", hoverBg: "hover:bg-white/5" },
               { icon: SiZendesk, name: "Zendesk", color: "group-hover:text-[#00363D] group-hover:drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]", hoverBg: "hover:bg-[#00363D]/40" },
               { icon: SiSalesforce, name: "Salesforce", color: "group-hover:text-[#00A1E0]", hoverBg: "hover:bg-[#00A1E0]/5" },
               { icon: SiIntercom, name: "Intercom", color: "group-hover:text-[#286EFA]", hoverBg: "hover:bg-[#286EFA]/5" },
             ].map((item, i) => (
                <div key={i} className={`bg-[#111] aspect-[4/3] flex items-center justify-center relative transition-all duration-300 cursor-pointer group ${item.hoverBg || 'hover:bg-[#1a1a1a]'}`}>
                  {item.isCenter ? (
                     <div className="text-[#ff5a00] font-space font-bold text-2xl md:text-3xl">CAN&DID</div>
                  ) : (
                     <div className="flex flex-col items-center justify-center relative w-full h-full">
                        <div className="w-12 h-12 border border-white/10 rounded-xl flex items-center justify-center text-gray-700 bg-white/5 group-hover:bg-transparent group-hover:border-transparent transition-all duration-300">
                           {item.icon && <item.icon className={`w-6 h-6 transition-all duration-300 ${item.color} group-hover:scale-110`} />}
                        </div>
                        <span className="text-[10px] sm:text-xs font-mono mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-400 absolute bottom-4">
                           {item.name}
                        </span>
                     </div>
                  )}
                </div>
             ))}
          </div>
       </motion.div>
    </div>
  </div>
);

const SuiteSection = () => {
  const suiteData = [
    {
      num: "1", title: "CAN&DID 2 Apex 1.0",
      desc: "CAN&DID 2 Apex 1.0 is the model that produces the final answer CAN&DID 2 gives to every customer. It takes the most relevant context surfaced by the CAN&DID 2 model suite, applies your policies, and produces a direct answer or decides the question needs a human. Every output is grounded in your knowledge base, not inferred from general training data.",
      specs: [
        { id: "1.1", text: "Grounded in your knowledge base, not general data" },
        { id: "1.2", text: "Answers directly, escalates honestly when it can't" },
        { id: "1.3", text: "Follows your configured guidelines every time" },
        { id: "1.4", text: "Trained to minimize hallucination at the source" },
        { id: "1.5", text: "Post-trained on CAN&DID 2's own production data" },
        { id: "1.6", text: "Compounds in accuracy as the suite improves" }
      ],
      chatTheme: 'light' as const,
      bubbleColor: 'bg-[#ff5a00]',
      messages: [
        { id: '1', sender: 'user', text: "Can you share my date of birth and the last 4 digits of my card?", delay: 500 },
        { id: '2', sender: 'bot', text: "Got it, thanks. I've pulled up your recent transactions - I see a charge from TechWorld Supplies on Sept 30 for $129. Do you recognize this merchant?", delay: 1500 },
        { id: '3', sender: 'user', text: "No, I've never heard of them", delay: 2000 },
        { id: '4', sender: 'bot', text: "Understood. I've frozen your card to prevent any further charges. I've also filed a dispute for this transaction - you'll see a temporary credit appear on your account within 5-10 business days.", delay: 1800 }
      ] as Message[],
      bgGraphic: (
         <div className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-color bg-[#ff5a00] z-0"></div>
      )
    },
    {
       num: "2", title: "CAN&DID 2 Retrieval",
       desc: "The CAN&DID 2 Retrieval model scans all available knowledge sources and pulls out a small set of useful information.",
       specs: [
         { id: "2.1", text: "Understand intent behind the question" },
         { id: "2.2", text: "Search across all available content sources" },
         { id: "2.3", text: "Match on semantics, not just keywords" },
         { id: "2.4", text: "Select top N most likely candidates" }
       ],
       chatTheme: 'dark' as const,
       bubbleColor: 'bg-indigo-600',
       messages: [
         { id: '1', sender: 'user', text: "What's the difference between your Free and Pro plans?", delay: 500 },
         { id: '2', sender: 'system', text: "Searching knowledge base...", delay: 500 },
         { id: '3', sender: 'bot', text: "Great question! Here's the key difference:\n• Free Plan - best for individuals exploring CRMs. Up to 3 users.\n• Pro Plan - designed for growing teams and includes unlimited records and Salesforce integration.", delay: 2000 },
         { id: '4', sender: 'bot', text: "Given your needs, Pro would suit you best. Would you like to book a call?", delay: 1500 }
       ] as Message[],
       bgGraphic: (
         <div className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-color bg-indigo-600"></div>
       )
    },
    { 
       num: "3", title: "CAN&DID 2 Reranker", 
       desc: "The CAN&DID 2 Reranker model takes the retrieved context and scores each piece for relevance, accuracy, and usefulness in context. It then selects the final piece(s) for the LLM to use.", 
       specs: [{id: "3.1", text: "Score relevance with respect to query"},{id: "3.2", text: "Evaluate context match and resolution fit"},{id: "3.3", text: "Downrank outdated or low-confidence sources"},{id: "3.4", text: "Output: final selected content for generation"}],
       chatTheme: 'light' as const,
       bubbleColor: 'bg-emerald-600',
       messages: [
         { id: '1', sender: 'user', text: "My tracking says delivered but I don't have it.", delay: 500 },
         { id: '2', sender: 'bot', text: "I can check that for you. Could you share your order number and the email you used to place it?", delay: 1000 },
         { id: '3', sender: 'user', text: "Order #44910, alex.lee@email.com", delay: 2000 },
         { id: '4', sender: 'bot', text: "Thanks, I've found your order. It was marked delivered today at 2:15 PM. Sometimes carriers scan early. Have you checked with neighbors or your building office?", delay: 2500 }
       ] as Message[],
       bgGraphic: (
         <div className="absolute inset-0 w-full h-full z-0 mix-blend-color opacity-30 bg-emerald-600"></div>
       )
    },
    { 
       num: "4", title: "CAN&DID 2 Issue Summarizer", 
       desc: "The CAN&DID 2 Issue Summarizer model detects and extracts the user's issue from conversation history. Built on a fine-tuned 14B model, it transforms unstructured chat exchanges into clear, actionable issue summaries for downstream retrieval.", 
       specs: [{id: "4.1", text: "Detect whether conversation contains an addressable issue"},{id: "4.2", text: "Extract summarized issue from multi-turn exchanges"},{id: "4.3", text: "Handle edge cases: greetings, feedback, and noise"},{id: "4.4", text: "12.5% cost reduction vs frontier LLMs"}],
       chatTheme: 'dark' as const,
       bubbleColor: 'bg-purple-600',
       messages: [
         { id: '1', sender: 'user', text: "Hi there, I need some help.", delay: 500 },
         { id: '2', sender: 'user', text: "I tried logging in today but it says my password expired.", delay: 800 },
         { id: '3', sender: 'user', text: "And the reset link never arrived in my email.", delay: 1000 },
         { id: '4', sender: 'system', text: "Issue Extracted: Password reset link not arriving", delay: 1500 },
         { id: '5', sender: 'bot', text: "I'm sorry to hear that. I can help you regain access. Can you confirm your email address?", delay: 1000 }
       ] as Message[],
       bgGraphic: (
         <div className="absolute inset-0 z-0 opacity-40 mix-blend-color bg-purple-600"></div>
       )
    },
    { 
       num: "5", title: "CAN&DID 2 Feedback Parser", 
       desc: "The CAN&DID 2 Feedback Parser model uses a multi-task ModernBERT architecture to interpret user responses. It classifies feedback sentiment, detects follow-up questions, and identifies conversation endings with state-of-the-art accuracy.", 
       specs: [{id: "5.1", text: "Classify feedback type: positive, negative, or none"},{id: "5.2", text: "Detect follow-up questions in user messages"},{id: "5.3", text: "Identify when conversations have ended"},{id: "5.4", text: "Match LLM accuracy at a fraction of the cost"}],
       chatTheme: 'light' as const,
       bubbleColor: 'bg-rose-500',
       messages: [
         { id: '1', sender: 'bot', text: "Your refund has been processed. It should appear in 3-5 days.", delay: 500 },
         { id: '2', sender: 'user', text: "Okay thanks! But what about the shipping cost?", delay: 1500 },
         { id: '3', sender: 'system', text: "Feedback parsed: Follow-up question detected", delay: 1000 },
         { id: '4', sender: 'bot', text: "Shipping costs are also fully refunded for returned items. I've confirmed that $5.99 was included in the total refund amount.", delay: 2000 }
       ] as Message[],
       bgGraphic: (
         <div className="absolute inset-0 z-0 opacity-30 mix-blend-color bg-rose-500"></div>
       )
    },
    { 
       num: "6", title: "CAN&DID 2 Language Detector", 
       desc: "The CAN&DID 2 Language Detector model uses XLM RoBERTa to accurately identify the user's language across 45 supported languages. It handles real-world challenges like typos, short messages, and script mismatches.", 
       specs: [{id: "6.1", text: "Support 45 languages with high accuracy"},{id: "6.2", text: "Handle spelling mistakes and short context"},{id: "6.3", text: "Process script mismatches (e.g., Romanized Hindi)"},{id: "6.4", text: "Enable intelligent language fallback logic"}],
       chatTheme: 'dark' as const,
       bubbleColor: 'bg-sky-600',
       messages: [
         { id: '1', sender: 'bot', text: "Hello! How can I help you today?", delay: 500 },
         { id: '2', sender: 'user', text: "Hola, necesito ayuda con mi factura.", delay: 1500 },
         { id: '3', sender: 'system', text: "Language detected: Spanish (es-ES)", delay: 1000 },
         { id: '4', sender: 'bot', text: "¡Hola! Con gusto te ayudaré con tu factura. ¿Me podrías indicar el número de factura o la fecha en que se emitió?", delay: 1500 }
       ] as Message[],
       bgGraphic: (
         <div className="absolute inset-0 z-0 opacity-40 mix-blend-color bg-sky-600"></div>
       )
    },
    { 
       num: "7", title: "CAN&DID 2 Escalation Router", 
       desc: "The CAN&DID 2 Escalation Router model uses a multi-task ModernBERT architecture to decide when conversations should be handed off to human agents. It provides reasoning and cites matching business guidelines with over 98% accuracy.", 
       specs: [{id: "7.1", text: "Decide: escalate, offer to escalate, or continue"},{id: "7.2", text: "Cite matching business escalation guidelines"},{id: "7.3", text: "Provide reasoning for escalation decisions"},{id: "7.4", text: "0.5s faster than LLM-based routing"}],
       chatTheme: 'glass' as const,
       bubbleColor: 'bg-slate-800',
       messages: [
         { id: '1', sender: 'user', text: "I've tried everything in your docs and my account is still locked.", delay: 500 },
         { id: '2', sender: 'user', text: "This is really urgent for my business.", delay: 1000 },
         { id: '3', sender: 'system', text: "Escalation triggered: Urgent business impact", delay: 1200 },
         { id: '4', sender: 'bot', text: "I understand this is critical. I'm transferring you to our Priority Support team right now.", delay: 1000 },
         { id: '5', sender: 'system', text: "Conversation transferred to human agent.", delay: 1500 }
       ] as Message[],
       bgGraphic: (
         <div className="absolute inset-0 z-0 opacity-30 mix-blend-color bg-slate-800"></div>
       )
    }
  ];

  return (
    <div id="features" className="bg-[#1a1c23] rounded-[2rem] p-8 md:p-16 text-white border border-white/5 shadow-2xl  max-w-6xl mx-auto mb-24 relative overflow-hidden">
      <div className="text-[10px] font-mono tracking-widest text-[#ff5a00] uppercase mb-8 flex items-center">
         <span className="w-1.5 h-1.5 bg-[#ff5a00] rounded-full mr-2"></span> CAN&DID 2 MODEL SUITE
      </div>
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-space font-medium tracking-tight mb-16 max-w-xl leading-[1.1]">
        Introducing the<br/>CAN&DID 2 model suite
      </motion.h2>

      <div className="space-y-0">
         {suiteData.map((item, i) => (
           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} key={item.title} className="flex flex-col lg:flex-row border-t border-white/10 py-12 gap-12">
              <div className="w-12 text-[10px] font-mono text-gray-500 shrink-0 mt-2">[ {item.num} ]</div>
              
              <div className="flex-1 lg:max-w-md w-full">
                 <h3 className="text-2xl flex items-center font-space mb-8">
                   {item.title}
                   {i===0 && <span className="ml-2 px-1 py-0.5 bg-[#ff5a00] text-[8px] text-white rounded-[2px] font-mono tracking-widest font-bold">APEX</span>}
                 </h3>
                 
                 <div className="mt-8 border border-white/10 rounded-[2rem] overflow-hidden bg-[#0f1115] relative flex justify-center items-center h-[500px]">
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
                       <video src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen scale-105" />
                    </div>
                    {item.bgGraphic}
                    <div className="w-full max-w-sm px-4 z-10">
                       <ChatDemoWidget 
                         messages={item.messages} 
                         title={item.title} 
                         theme={item.chatTheme} 
                         bubbleColor={item.bubbleColor}
                         className="shadow-2xl h-[420px]"
                       />
                    </div>
                 </div>
              </div>

              <div className="flex-1 lg:max-w-md w-full flex flex-col justify-center">
                 <p className="text-sm text-gray-300 font-sans leading-relaxed mb-8">{item.desc}</p>
                 <div className="text-[9px] font-mono tracking-widest text-gray-500 uppercase mb-4">SPECIFICATION</div>
                 <div className="border border-white/10 rounded-lg overflow-hidden bg-black/60  shadow-sm">
                    {item.specs.map((spec, j) => (
                      <div key={spec.id} className={"flex text-xs font-mono p-3 " + (j !== item.specs.length -1 ? 'border-b border-white/10' : '')}>
                         <span className="w-12 text-gray-500 text-[10px] shrink-0 mr-4">{spec.id}</span>
                         <span className="text-gray-300 text-[10px]">{spec.text}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </motion.div>
         ))}
      </div>
    </div>
  )
}


const TechnologySection = () => {
  const [activeTab, setActiveTab] = useState<'standard' | 'candid'>('candid');

  return (
    <div id="system" className="bg-[#f2f1f0] text-gray-900 py-32 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex-1">
              <div className="text-xs font-mono uppercase tracking-widest text-[#ff5a00] mb-8 flex items-center">
                 <span className="w-2 h-2 bg-[#ff5a00] border border-[#ff5a00]/30 rounded-full mr-3 relative">
                    <span className="absolute inset-0 bg-[#ff5a00] animate-ping rounded-full opacity-50"></span>
                 </span>
                 SYSTEM ARCHITECTURE
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-space font-medium tracking-tight mb-8">
                 Clinical Precision Engine
              </h2>
           </motion.div>
           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex-1 max-w-md">
              <p className="text-gray-600 text-sm xl:text-base leading-relaxed font-sans mb-8">
                The CAN&DID AI Engine prioritizes rigorous factual grounding over generative spontaneity. Built entirely for structural safety, it runs on isolated reasoning pathways with verifiable guardrails and constitutional checks.
              </p>
           </motion.div>
        </div>
        
        {/* Architecture Dashboard - Academic / Clinical Board Style */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-black/10 rounded-2xl bg-white shadow-xl overflow-hidden flex flex-col md:flex-row relative">
           
           {/* Sidebar */}
           <div className="w-full md:w-80 bg-[#f9f9f9] border-r border-black/5 p-8 flex flex-col relative z-20">
               <div className="text-[10px] sm:text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">FIG 4.A - ARCHITECTURE COMPARISON</div>
               
               <div className="flex space-x-2 mb-10 bg-gray-100 p-1.5 rounded-lg border border-black/5">
                 <button 
                   onClick={() => setActiveTab('candid')} 
                   className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors ${activeTab === 'candid' ? 'bg-white text-gray-900 shadow-sm border border-black/5' : 'text-gray-500 hover:text-gray-700'}`}>
                   CAN&DID 
                 </button>
                 <button 
                   onClick={() => setActiveTab('standard')} 
                   className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors ${activeTab === 'standard' ? 'bg-white text-gray-900 shadow-sm border border-black/5' : 'text-gray-500 hover:text-gray-700'}`}>
                   Standard LLM
                 </button>
               </div>

               <div className="space-y-6 flex-1">
                 <div>
                   <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Hallucination Rate</div>
                   <div className={`font-mono font-medium text-3xl tracking-tight ${activeTab === 'candid' ? 'text-green-600' : 'text-red-600'}`}>
                     {activeTab === 'candid' ? '< 0.05%' : '~ 6.4%'}
                   </div>
                 </div>
                 <div className="h-[1px] bg-black/5 w-full"></div>
                 <div>
                   <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Knowledge Grounding</div>
                   <div className="font-sans font-medium text-xl tracking-tight text-gray-900 mb-2">
                     {activeTab === 'candid' ? 'Strict Verification' : 'Loose Prediction'}
                   </div>
                   <div className="text-xs text-gray-500 leading-snug">
                     {activeTab === 'candid' ? 'Responses MUST map directly to semantic vector DB.' : 'Generative guesswork based on statistical weights.'}
                   </div>
                 </div>
                 <div className="h-[1px] bg-black/5 w-full"></div>
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Compute Cost / 1k</div>
                      <div className="font-mono text-lg text-gray-900">
                        {activeTab === 'candid' ? '$0.002' : '$0.015'}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Precision</div>
                      <div className="font-mono text-lg text-gray-900">
                        {activeTab === 'candid' ? '99.8%' : '78.2%'}
                      </div>
                    </div>
                 </div>
                 <div className="h-[1px] bg-black/5 w-full"></div>
                 <div>
                   <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Safety Protocols</div>
                   <div className="font-sans font-medium text-[13px] leading-tight text-gray-800">
                     {activeTab === 'candid' ? 'Multi-Stage Output Validation & Constitutional Gates' : 'Basic System Prompting'}
                   </div>
                 </div>
               </div>
           </div>

           {/* Main Visualization Area */}
           <div className="flex-1 p-8 md:p-12 relative min-h-[650px] flex items-center justify-center bg-white overflow-hidden">
               {/* Blueprint Grid Background */}
               <div className="absolute inset-0 z-0 opacity-30 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)", backgroundSize: "1.5rem 1.5rem", opacity: 0.04}}></div>
               
               {activeTab === 'candid' ? (
                 <div className="relative z-10 w-full max-w-2xl px-2">
                     <div className="flex flex-col items-center w-full">
                         {/* Step 1 */}
                         <div className="border border-black/10 bg-white rounded p-2 w-40 text-center text-[10px] font-mono font-bold tracking-widest shadow-sm z-20 text-gray-700">
                             INBOUND QUERY
                         </div>

                         <div className="h-6 w-0 border-l border-dashed border-gray-300 relative z-10">
                            <motion.div animate={{y:[0,24]}} transition={{duration: 1, repeat:Infinity, ease:"linear"}} className="absolute top-0 left-[-1.5px] w-[3px] h-3 bg-gray-400 rounded-full"></motion.div>
                         </div>

                         {/* Step 2 */}
                         <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} className="border border-gray-200 bg-white rounded-xl p-4 w-72 shadow-xl z-20 relative text-center">
                             <div className="flex items-center justify-center gap-3 mb-2 pb-2 border-b border-gray-100">
                                 <Cpu className="w-4 h-4 text-[#ff5a00]" />
                                 <div className="text-xs font-bold text-gray-900 tracking-wide uppercase">APEX Orchestrator</div>
                             </div>
                             <div className="text-[10px] text-gray-500">Deconstructs intent into parallel sub-tasks</div>
                         </motion.div>

                         {/* Junction Down */}
                         <div className="flex justify-center w-full relative h-10 z-10 text-gray-300">
                             {/* Center line */}
                             <div className="w-[1px] h-full bg-current absolute left-1/2 top-0 border-r border-dashed border-gray-300"></div>
                             {/* Horizontal line */}
                             <div className="w-[320px] h-[1px] bg-current absolute left-1/2 -translate-x-1/2 top-1/2 border-b border-dashed border-gray-300"></div>
                             {/* Left drop */}
                             <div className="w-[1px] h-1/2 bg-current absolute left-[calc(50%-160px)] top-1/2 border-r border-dashed border-gray-300"></div>
                             {/* Right drop */}
                             <div className="w-[1px] h-1/2 bg-current absolute right-[calc(50%-160px)] top-1/2 border-r border-dashed border-gray-300"></div>
                             
                             <motion.div animate={{y:[0,40]}} transition={{duration: 1.5, repeat:Infinity, ease:"linear"}} className="absolute top-0 left-[calc(50%-1.5px)] w-[3px] h-3 bg-[#ff5a00] rounded-full z-20"></motion.div>
                         </div>

                         {/* Multi-Agencies Row */}
                         <div className="flex justify-between w-full max-w-[440px] z-20">
                             {/* Left */}
                             <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="border border-blue-100 bg-blue-50/50 rounded-xl p-3 w-[120px] text-center shadow-sm">
                                 <Database className="w-3.5 h-3.5 text-blue-500 mx-auto mb-1.5" />
                                 <div className="text-[9px] font-mono text-blue-600 uppercase tracking-tight mb-0.5">Semantic Core</div>
                                 <div className="text-[11px] font-semibold text-gray-800">Policy RAG</div>
                             </motion.div>
                             
                             {/* Center */}
                             <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className="border border-gray-200 bg-white rounded-xl p-3 w-[120px] text-center shadow-sm">
                                 <Users className="w-3.5 h-3.5 text-gray-500 mx-auto mb-1.5" />
                                 <div className="text-[9px] font-mono text-gray-500 uppercase tracking-tight mb-0.5">Context Engine</div>
                                 <div className="text-[11px] font-semibold text-gray-800">User History</div>
                             </motion.div>

                             {/* Right */}
                             <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.3}} className="border border-amber-100 bg-amber-50/50 rounded-xl p-3 w-[120px] text-center shadow-sm">
                                 <Globe className="w-3.5 h-3.5 text-amber-500 mx-auto mb-1.5" />
                                 <div className="text-[9px] font-mono text-amber-600 uppercase tracking-tight mb-0.5">Action APIs</div>
                                 <div className="text-[11px] font-semibold text-gray-800">Live Integrations</div>
                             </motion.div>
                         </div>

                         {/* Junction Converging */}
                         <div className="flex justify-center w-full relative h-10 z-10 text-gray-300">
                             {/* Center line */}
                             <div className="w-[1px] h-full bg-current absolute left-1/2 top-0 border-r border-dashed border-gray-300"></div>
                             {/* Horizontal line */}
                             <div className="w-[320px] h-[1px] bg-current absolute left-1/2 -translate-x-1/2 top-1/2 border-b border-dashed border-gray-300"></div>
                             {/* Left rise */}
                             <div className="w-[1px] h-1/2 bg-current absolute left-[calc(50%-160px)] top-0 border-r border-dashed border-gray-300"></div>
                             {/* Right rise */}
                             <div className="w-[1px] h-1/2 bg-current absolute right-[calc(50%-160px)] top-0 border-r border-dashed border-gray-300"></div>
                             
                             <motion.div animate={{y:[0,40]}} transition={{duration: 1.5, delay:0.5, repeat:Infinity, ease:"linear"}} className="absolute top-0 left-[calc(50%-1.5px)] w-[3px] h-3 bg-teal-400 rounded-full z-20"></motion.div>
                         </div>

                         {/* Guardrail node */}
                         <div className="relative">
                             <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.4}} className="border border-teal-200 bg-teal-50/30 rounded-xl p-4 w-72 shadow-md relative z-20 flex flex-col items-center">
                                 <div className="flex items-center gap-2 mb-2">
                                     <Shield className="w-4 h-4 text-teal-600" />
                                     <div className="text-xs font-bold text-gray-900 tracking-wide uppercase">Constitutional Gate</div>
                                 </div>
                                 <div className="flex gap-4 text-[9px] font-mono text-teal-700/80">
                                     <span className="flex items-center gap-1"><Check className="w-2.5 h-2.5" /> Fidelity Verified</span>
                                     <span className="flex items-center gap-1"><Check className="w-2.5 h-2.5" /> No Hallucinations</span>
                                 </div>
                             </motion.div>
                             
                             {/* Banning rejection path */}
                             <div className="absolute top-1/2 -right-[120px] -translate-y-1/2 flex items-center z-10 w-[120px]">
                                 <div className="h-[1px] w-full border-t border-dashed border-red-300 relative">
                                     <motion.div animate={{x:[0, 90]}} transition={{duration: 1.5, repeat:Infinity, ease:"linear"}} className="absolute top-[-1.5px] left-0 w-3 h-[3px] bg-red-400 rounded-full"></motion.div>
                                     <div className="absolute right-[-20px] top-[-12px] text-[8px] font-mono text-red-600 bg-red-50 border border-red-200 px-1.5 py-1 rounded shadow-sm flex items-center whitespace-nowrap"><X className="w-2 h-2 mr-1"/> POLICY REJECT</div>
                                 </div>
                             </div>
                         </div>

                         <div className="h-6 w-0 border-l border-dashed border-teal-300 relative z-10">
                             <motion.div animate={{y:[0,24]}} transition={{duration: 1, delay:1, repeat:Infinity, ease:"linear"}} className="absolute top-0 left-[-1.5px] w-[3px] h-3 bg-teal-500 rounded-full"></motion.div>
                         </div>

                         <div className="border border-teal-500 bg-teal-500 text-white rounded p-2.5 w-48 text-center text-[10px] font-mono font-bold tracking-widest shadow-lg shadow-teal-500/20 z-20 relative overflow-hidden">
                             <motion.div animate={{x:[-100, 200]}} transition={{duration: 2, repeat:Infinity, ease:"linear"}} className="absolute top-0 bottom-0 w-8 bg-white/30 transform skew-x-12"></motion.div>
                             CLINICAL RESPONSE
                         </div>
                     </div>
                 </div>
               ) : (
                 <div className="relative z-10 w-full max-w-lg">
                     <div className="flex flex-col items-center">
                        <div className="border border-black/10 bg-white rounded p-3 w-48 text-center text-[10px] font-mono font-bold tracking-widest shadow-sm">
                           INBOUND QUERY
                        </div>
                        <div className="h-20 border-l border-dashed border-gray-300 w-0 relative">
                           <motion.div animate={{y:[0,80]}} transition={{duration: 1.5, repeat:Infinity, ease:"linear"}} className="absolute top-0 left-[-1.5px] w-[3px] h-3 bg-gray-400 rounded-full"></motion.div>
                        </div>
                        
                        {/* Standard LLM Step */}
                        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}} className="border border-black/5 bg-[#fafafa] rounded-xl p-8 w-80 shadow-md relative overflow-hidden flex flex-col items-center text-center">
                           <div className="absolute left-0 top-0 w-1 h-full bg-red-500"></div>
                           <div className="w-16 h-16 border border-gray-200 rounded-full flex items-center justify-center mb-4 relative bg-white">
                              <motion.div animate={{rotate:360}} transition={{repeat:Infinity, duration:4, ease:"linear"}} className="absolute inset-0 rounded-full border-r border-red-400"></motion.div>
                              <Cpu className="w-6 h-6 text-gray-500" />
                           </div>
                           <div className="text-[10px] font-mono text-red-500 uppercase tracking-widest mb-2">Unregulated Model</div>
                           <div className="text-sm font-semibold text-gray-900 mb-2">Stochastic Generation</div>
                           <div className="text-xs text-gray-500">Generates text probabilistically without required verification against grounding documents.</div>
                        </motion.div>

                        <div className="h-20 border-l border-dashed border-red-300 w-0 relative">
                           <motion.div animate={{y:[0,80]}} transition={{duration: 1.5, delay: 0.5, repeat:Infinity, ease:"linear"}} className="absolute top-0 left-[-1.5px] w-[3px] h-3 bg-red-400 rounded-full"></motion.div>
                        </div>
                        
                        <div className="border border-red-500/30 bg-red-50 rounded p-3 w-48 text-center text-[10px] font-mono font-bold tracking-widest shadow-sm text-red-700 relative">
                           HIGH HALLUCINATION RISK
                        </div>
                     </div>
                 </div>
               )}
           </div>
        </motion.div>
      </div>
    </div>
  );
};

const PricingSection = () => (
  <div id="pricing" className="bg-[#050505] text-white py-32 border-t border-white/10">
    <div className="max-w-5xl mx-auto px-6">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl lg:text-5xl font-space font-medium tracking-tight mb-8 text-center">
        Get the #1 AI Agent for<br />all your customer service
      </motion.h2>
      <div className="flex justify-center mb-16">
         <div className="text-xs font-mono uppercase tracking-widest text-gray-400 border border-white/10 px-4 py-1.5 rounded-full flex items-center">
            <Check className="w-3 h-3 text-[#ff5a00] mr-2" /> CAN&DID MILLION DOLLAR GUARANTEE
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-2xl border border-white/10 overflow-hidden">
        {/* Core Plan */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#0a0a0a] p-10 hover:bg-[#111] transition-colors relative flex flex-col h-full">
           <h3 className="text-2xl font-space mb-4">CAN&DID Platform<br/>Core Intelligence</h3>
           <p className="text-sm text-gray-400 mb-8 min-h-[60px]">Everything you need to automate support securely and effectively with verifiable AI generation.</p>
           
           <div className="flex items-baseline space-x-2 mb-8">
              <span className="text-5xl font-space tracking-tight">HK$5,000</span>
              <span className="text-[10px] font-mono text-gray-500 uppercase flex flex-col justify-end">
                 PER MONTH
              </span>
           </div>

           <div className="space-y-4 mb-12 flex-1">
             <div className="flex items-center text-sm text-gray-300">
               <Check className="w-4 h-4 text-[#ff5a00] mr-3" /> Constitutional Gate Active
             </div>
             <div className="flex items-center text-sm text-gray-300">
               <Check className="w-4 h-4 text-[#ff5a00] mr-3" /> Live Knowledge Retrieval
             </div>
             <div className="flex items-center text-sm text-gray-300">
               <Check className="w-4 h-4 text-[#ff5a00] mr-3" /> Core APEX Orchestrator
             </div>
           </div>
           
           <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
              <button className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-gray-200 transition-colors text-sm w-full text-center">
                ONBOARD NOW
              </button>
           </div>
        </motion.div>
        
        {/* Add-ons */}
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#0a0a0a] p-10 hover:bg-[#111] transition-colors flex flex-col h-full">
           <h3 className="text-2xl font-space mb-4">Performance<br/>Add-ons</h3>
           <p className="text-sm text-gray-400 mb-8 min-h-[60px]">Boost your system's capabilities with specialized modules for complex operational logic.</p>
           
           <div className="flex flex-col space-y-6 mb-8 flex-1">
              <div className="flex justify-between items-start border-b border-white/5 pb-4">
                 <div>
                   <div className="font-semibold text-white mb-1">Advanced Automation Integrations</div>
                   <div className="text-xs text-gray-500">Read & write live customer data to CRM</div>
                 </div>
                 <div className="text-right">
                   <div className="font-space text-lg text-[#ff5a00]">HK$2,000</div>
                   <div className="text-[10px] font-mono text-gray-500">/MO</div>
                 </div>
              </div>
              <div className="flex justify-between items-start border-b border-white/5 pb-4">
                 <div>
                   <div className="font-semibold text-white mb-1">Multi-Lingual Engine</div>
                   <div className="text-xs text-gray-500">Real-time tone & cultural localization</div>
                 </div>
                 <div className="text-right">
                   <div className="font-space text-lg text-[#ff5a00]">HK$1,500</div>
                   <div className="text-[10px] font-mono text-gray-500">/MO</div>
                 </div>
              </div>
              <div className="flex justify-between items-start">
                 <div>
                   <div className="font-semibold text-white mb-1">Custom Semantic Database</div>
                   <div className="text-xs text-gray-500">Dedicated partition for rapid retrieval</div>
                 </div>
                 <div className="text-right">
                   <div className="font-space text-lg text-[#ff5a00]">HK$3,000</div>
                   <div className="text-[10px] font-mono text-gray-500">/MO</div>
                 </div>
              </div>
           </div>
           
           <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
              <button className="bg-transparent border border-white/20 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-white/10 transition-colors text-sm w-full text-center">
                Contact for Add-ons
              </button>
           </div>
        </motion.div>
      </div>
    </div>
  </div>
);

const tabData: Record<string, any> = {
  'ALL INDUSTRIES': {
    company: 'Enterprise Retail',
    title: 'AI at every touchpoint: Scaling personalized support across channels',
    description: 'With dozens of new markets opening each year and support spread across chat, email, social, and phone, delivering a high-touch service at scale became a challenge. By redesigning support with CAN&DID 2, they created a unified, 24/7 support experience.',
    author: 'ENTERPRISE SUPPORT',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    stat1Label: 'COSTS SAVED YEARLY',
    stat1Value: '$569k',
    stat2Label: 'HOURS SAVED',
    stat2Value: '12.6k'
  },
  'RETAIL & ECOMMERCE': {
    company: 'Global Beauty Brand',
    title: 'Transforming beauty e-commerce: Delivering perfect matches via AI',
    description: 'Needed a way to guide customers to their perfect match securely and instantly. CAN&DID 2 steps in as a virtual advisor, boosting conversion rates and reducing return logistics.',
    author: 'ECOMMERCE TEAM',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    stat1Label: 'LIFT IN CONVERSION',
    stat1Value: '32%',
    stat2Label: 'RETURN RATE DROP',
    stat2Value: '-45%'
  },
  'FINANCIAL SERVICES': {
    company: 'Modern Banking App',
    title: 'Banking on speed: Resolving 80% of card disputes autonomously',
    description: 'When users lose a card or see a strange charge, they want instant help. CAN&DID 2 strictly adheres to financial policies to freeze cards and issue provisional credits without human agents.',
    author: 'RISK & COMPLIANCE',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    stat1Label: 'DISPUTES AUTOMATED',
    stat1Value: '80%',
    stat2Label: 'AVG HANDLE TIME',
    stat2Value: '< 2m'
  },
  'GAMING': {
    company: 'AAA Game Studio',
    title: 'Handling the spike: Supporting millions during season launches',
    description: 'Every major season update brings a flood of account recovery and bug reporting tickets. CAN&DID 2 triages server status queries and authenticates users effortlessly during peak traffic.',
    author: 'PLAYER SUCCESS',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    stat1Label: 'FASTER RESOLUTION',
    stat1Value: '2.5x',
    stat2Label: 'SPIKE UPTIME',
    stat2Value: '99.9%'
  },
  'SOFTWARE & TECHNOLOGY': {
    company: 'Cloud Infrastructure',
    title: 'Deploying faster support: Helping developers debug deployments with AI',
    description: 'Developers need highly technical answers. CAN&DID 2 was trained on the entire framework documentation to help users debug build failures directly within the chat interface.',
    author: 'ENGINEERING SUPPORT',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    stat1Label: 'DEFLECTION RATE',
    stat1Value: '40%',
    stat2Label: 'CSAT SCORE',
    stat2Value: '95%'
  }
};

const TestimonialSection = () => {
  const [activeTab, setActiveTab] = useState('ALL INDUSTRIES');
  const tabs = Object.keys(tabData);
  const currentContent = tabData[activeTab];

  return (
    <div className="bg-[#0b0c10] py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
           {tabs.map((tab) => (
             <button 
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`text-[10px] font-mono tracking-widest uppercase px-4 py-2 rounded-sm border ${
                 activeTab === tab 
                 ? 'bg-[#ff5a00] border-[#ff5a00] text-black font-bold' 
                 : 'bg-transparent border-white/20 text-white hover:border-white/50'
               } transition-colors`}
             >
               {tab}
             </button>
           ))}
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           
           {/* Main Spotlight Panel */}
           <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
               <div className="bg-[#2b3038] p-8 md:p-12 flex flex-col justify-between">
                  <motion.div 
                    key={currentContent.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-white font-bold text-2xl tracking-tight mb-8 flex items-center">
                       <span className="font-space tracking-tighter">{currentContent.company}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-space font-medium text-white leading-[1.2] mb-4">
                      {currentContent.title}
                    </h3>
                    <p className="text-gray-300 font-sans leading-relaxed text-sm max-w-sm">
                      {currentContent.description}
                    </p>
                  </motion.div>
                  <div className="mt-8 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                     {currentContent.author}
                  </div>
               </div>

               <div className="relative flex flex-col justify-between p-8">
                  <motion.div 
                     key={currentContent.image}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 0.5 }}
                     className="absolute inset-0 z-0"
                  >
                     <img src={currentContent.image} alt={currentContent.company} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10]/90 via-[#0b0c10]/40 to-transparent"></div>
                  </motion.div>
                  
                  <div className="relative z-10 flex justify-end">
                     <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors border border-white/10">
                        Read full story
                     </button>
                  </div>

                  <motion.div 
                    key={currentContent.stat1Value}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="relative z-10 grid grid-cols-2 gap-4 mt-auto pt-24"
                  >
                     <div>
                        <div className="text-3xl md:text-4xl font-space text-white mb-1">{currentContent.stat1Value}</div>
                        <div className="text-[9px] font-mono uppercase tracking-widest text-[#d5d7e0]">{currentContent.stat1Label}</div>
                     </div>
                     <div>
                        <div className="text-3xl md:text-4xl font-space text-white mb-1">{currentContent.stat2Value}</div>
                        <div className="text-[9px] font-mono uppercase tracking-widest text-[#d5d7e0]">{currentContent.stat2Label}</div>
                     </div>
                  </motion.div>
               </div>
           </div>

           {/* Side Compact Cards */}
           <div className="flex flex-col gap-6">
              <div className="bg-[#111216] rounded-2xl border border-white/10 p-8 flex flex-col justify-between flex-1 hover:bg-[#16181d] transition-colors relative group overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5a00]/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-[#ff5a00]/20 transition-colors"></div>
                 <div>
                    <h4 className="text-xl font-space text-white mb-3">CAN&DID for Retail</h4>
                    <p className="text-sm text-gray-400 font-sans">See how leading e-commerce brands use CAN&DID to boost sales and resolve tickets faster.</p>
                 </div>
                 <div className="mt-8 flex items-center text-sm font-semibold text-[#ff5a00]">
                    View playbook <ArrowRight className="w-4 h-4 ml-1" />
                 </div>
              </div>
              <div className="bg-[#111216] rounded-2xl border border-white/10 p-8 flex flex-col justify-between flex-1 hover:bg-[#16181d] transition-colors">
                 <div>
                    <div className="text-3xl font-space text-white mb-2">85%</div>
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">AVERAGE RESOLUTION RATE</p>
                    <p className="text-sm text-gray-400 font-sans">Across over 2,000 retail deployments, CAN&DID resolves the vast majority of customer inquiries autonomously.</p>
                 </div>
              </div>
           </div>

        </div>

      </div>
    </div>
  );
}

const BottomCTA = () => (
  <div className="relative py-32 px-6 flex flex-col justify-center items-center text-center overflow-hidden border-t border-white/10 bg-[#000]">
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-[#ff6a00]/30 via-[#8a2be2]/10 to-transparent blur-[120px] rounded-full -z-10 pointer-events-none" />

    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-7xl font-space font-medium tracking-tight text-white mb-10 max-w-4xl leading-[1.1]">
      Get started with the<br />#1 AI Agent today
    </motion.h2>

    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex items-center space-x-4">
      <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg tracking-wide uppercase">
        ONBOARD NOW
      </button>
    </motion.div>
  </div>
);

const Footer = () => (
  <footer className="bg-black py-12 border-t border-white/10 text-gray-400 font-sans text-sm">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center space-x-2 text-white mb-4">
          <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-black" />
          </div>
          <span className="font-bold tracking-tight">CAN&DID</span>
        </div>
        <p className="text-xs text-gray-500">The #1 AI Agent for Customer Support.</p>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">Platform</h4>
        <ul className="space-y-2">
          <li><a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a></li>
          <li><a href="#performances" className="hover:text-white transition-colors">Performances</a></li>
          <li><a href="#system" className="hover:text-white transition-colors">System</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">Company</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">Legal</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
      <p>© {new Date().getFullYear()} CAN&DID, Inc. All rights reserved.</p>
    </div>
  </footer>
);

const FloatingChat = () => (
  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-50">
    <div className="bg-white text-black rounded-full shadow-2xl flex items-center p-2 pr-4 border border-black/10">
       <div className="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center mr-3 shrink-0">
          <Sparkles className="w-5 h-5 text-black" />
       </div>
       <input 
          type="text" 
          placeholder="What can CAN&DID do for..." 
          className="flex-1 text-sm bg-transparent outline-none placeholder:text-gray-400 font-sans font-medium"
       />
       <button className="w-8 h-8 rounded-full bg-black text-white flex justify-center items-center shrink-0 hover:bg-gray-800 transition-colors">
          <ArrowUpRight className="w-4 h-4" />
       </button>
    </div>
    <div className="text-center mt-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest flex justify-center items-center bg-black/50 backdrop-blur rounded px-2 w-fit mx-auto">
       <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> CUSTOMER AGENT
    </div>
  </div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black font-sans antialiased selection:bg-[#ff5a00] selection:text-white pb-32">
      <TopBanner />
      <Navbar />
      <main>
        <Hero />
        <CapabilitiesSection />
        <PerformanceSection />
        <EcommerceDemoSection />
        <SuiteSection />
        <TechnologySection />
        <PricingSection />
        <TestimonialSection />
        <BottomCTA />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
}
