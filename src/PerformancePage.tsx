import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, Play, Check, Shield, ArrowUpRight,
  Menu, Sparkles, Database, Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HLSVideo } from './components/HLSVideo';
import { ChatDemoWidget, Message } from './components/ChatDemoWidget';

const Navbar = () => (
  <motion.nav initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center justify-between px-6 py-4 absolute w-full top-0 z-50 bg-transparent">
    <div className="flex items-center space-x-8">
      <Link to="/" className="flex items-center space-x-2 text-black hover:opacity-80 transition-opacity">
        <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <span className="font-bold text-lg tracking-tight">CAN&DID 2</span>
      </Link>
      <div className="hidden md:flex space-x-6 text-sm text-gray-800 font-medium font-sans">
        <a href="#" className="flex items-center hover:text-black/70 transition-colors">Product <ChevronRight className="w-4 h-4 ml-1 rotate-90" /></a>
        <Link to="/performance" className="flex items-center hover:text-black/70 transition-colors">AI Technology <ChevronRight className="w-4 h-4 ml-1 rotate-90" /></Link>
        <a href="#" className="hover:text-black/70 transition-colors">Customers</a>
        <a href="#" className="flex items-center hover:text-black/70 transition-colors">Resources <ChevronRight className="w-4 h-4 ml-1 rotate-90" /></a>
        <a href="#" className="hover:text-black/70 transition-colors">Pricing</a>
      </div>
    </div>
    <div className="hidden md:flex items-center space-x-6 font-sans text-sm font-medium">
      <a href="#" className="text-gray-800 hover:text-black/70 transition-colors">Log in</a>
      <a href="#" className="text-gray-800 hover:text-black/70 transition-colors">Contact sales</a>
      <a href="#" className="text-gray-800 hover:text-black/70 transition-colors">View demo</a>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-black text-white px-4 py-2 rounded-full font-semibold hover:bg-black/90 transition-colors">
        Start free trial
      </motion.button>
    </div>
    <div className="md:hidden">
      <Menu className="w-6 h-6 text-black" />
    </div>
  </motion.nav>
);

const Hero = () => (
  <div className="relative pt-40 pb-20 px-6 flex flex-col justify-center items-center text-center overflow-hidden min-h-[60vh]">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-xs font-mono uppercase tracking-widest text-[#ff5a00] mb-8 flex justify-center w-full">
         <span className="bg-[#ff5a00]/10 px-3 py-1.5 rounded-sm">CAN&DID'S DX MODEL SUITE: PURPOSE BUILT FOR CUSTOMER SERVICE</span>
    </motion.div>
    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-5xl md:text-7xl font-space font-medium tracking-tight text-[#111] mb-6 max-w-4xl leading-[1.1]">
      Meet CAN&DID Apex 1.0<br/>The best-performing model<br/>for customer service
    </motion.h1>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex items-center justify-center space-x-4 mt-8">
      <button className="bg-black text-white px-6 py-2.5 rounded-full font-semibold hover:bg-gray-800 transition-colors text-sm">
        Start free trial
      </button>
      <button className="bg-white/50 backdrop-blur-md text-black border border-black/20 px-6 py-2.5 rounded-full font-semibold hover:bg-white/60 transition-colors text-sm">
        View demo
      </button>
    </motion.div>
  </div>
);

const ChartSection = () => (
  <div className="border-t border-black/10 max-w-5xl mx-auto px-6 pt-20 mt-10">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[10px] font-mono tracking-widest text-[#ff5a00] uppercase mb-8 flex items-center">
         <span className="w-1.5 h-1.5 bg-[#ff5a00] rounded-full mr-2"></span> THE WORLD'S BEST SUITE OF MODELS FOR CX
      </motion.div>
      
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16 space-y-8">
         <h2 className="text-3xl md:text-4xl font-space font-medium leading-tight text-[#111]">
           Most models are built to be good at everything. <mark className="bg-[#ff5a00] text-black px-1.5 rounded-sm font-semibold">CAN&DID Apex 1.0</mark> is built to be exceptional at one thing: customer service.
         </h2>
         <p className="text-xl text-gray-700 font-sans leading-relaxed">
           CAN&DID Apex 1.0 is the flagship of the CAN&DID model suite - our first model that generates the final answer CAN&DID gives to every customer.
         </p>
         <p className="text-xl text-gray-700 font-sans leading-relaxed">
           Built by our world-class AI team and trained on years of support interactions, CAN&DID Apex 1.0 is optimized for customer service - always providing accurate answers, following your policies reliably, and <span className="text-gray-400 opacity-80">knowing when not to answer.</span>
         </p>
         <p className="text-xl font-sans leading-relaxed text-gray-400 mt-12 pb-4">
           In production, <span className="bg-[#ffdcc7] text-orange-900 px-1 font-medium rounded-sm">CAN&DID Apex 1.0 outperforms frontier models</span> with higher resolution rates, fewer hallucinations, and faster responses.
         </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-24 items-end">
         {/* Chart 1 - Height Interpolation & Staggered Reveal */}
         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true, margin: "-50px" }} className="flex flex-col justify-end">
            <h3 className="text-2xl font-space font-medium mb-6 tracking-tight min-h-[64px] flex items-end">
               <span><span className="text-[#ff5a00]">2.8%</span> higher resolution rate</span>
            </h3>
            <div className="border border-black/10 rounded-xl bg-[#fcfbf9] p-6 h-[250px] relative flex items-end shadow-sm">
               <div className="absolute inset-x-0 bottom-[20%] border-t border-dashed border-gray-200"></div>
               <div className="absolute inset-x-0 bottom-[50%] border-t border-dashed border-gray-200"></div>
               <div className="absolute inset-x-0 bottom-[80%] border-t border-dashed border-gray-200"></div>
               
               <div className="w-full flex justify-around items-end h-[85%] relative z-10 px-2 space-x-2">
                  <motion.div initial={{ height: 0 }} whileInView={{ height: '95%' }} transition={{ duration: 1 }} className="w-1/4 bg-[#ff5a00] relative rounded-t flex justify-center items-start pt-2"><span className="text-[10px] text-white font-mono bg-black/20 px-1 rounded">73.1%</span></motion.div>
                  <motion.div initial={{ height: 0 }} whileInView={{ height: '85%' }} transition={{ duration: 1, delay: 0.1 }} className="w-1/4 bg-[#ffdbc7] relative rounded-t flex justify-center items-start pt-2"><span className="text-[10px] text-orange-900 font-mono">69.6%</span></motion.div>
                  <motion.div initial={{ height: 0 }} whileInView={{ height: '90%' }} transition={{ duration: 1, delay: 0.2 }} className="w-1/4 bg-[#ffdbc7] relative rounded-t flex justify-center items-start pt-2"><span className="text-[10px] text-orange-900 font-mono">71.1%</span></motion.div>
                  <motion.div initial={{ height: 0 }} whileInView={{ height: '90%' }} transition={{ duration: 1, delay: 0.3 }} className="w-1/4 bg-[#ffdbc7] relative rounded-t flex justify-center items-start pt-2"><span className="text-[10px] text-orange-900 font-mono">71.1%</span></motion.div>
               </div>
               
               <div className="absolute bottom-2 inset-x-0 flex justify-around text-[9px] font-mono text-gray-500 uppercase px-6">
                  <div className="font-bold text-black border-t border-black pt-1">CAN&DID<br/>APEX<br/>1.0</div>
                  <div className="pt-1">SONNET<br/>4.0</div>
                  <div className="pt-1">GPT4<br/>4.5</div>
                  <div className="pt-1">GPT<br/>5.4</div>
               </div>
            </div>
         </motion.div>
         {/* Chart 2 - Height Interpolation & Staggered Reveal */}
         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true, margin: "-50px" }} className="flex flex-col justify-end">
            <h3 className="text-2xl font-space font-medium mb-6 tracking-tight min-h-[64px] flex items-end">
               <span><span className="text-[#ff5a00]">0.6 seconds</span> faster time to first token</span>
            </h3>
            <div className="border border-black/10 rounded-xl bg-[#fcfbf9] p-6 h-[250px] relative flex items-end shadow-sm">
               <div className="absolute inset-x-0 bottom-[20%] border-t border-dashed border-gray-200"></div>
               <div className="absolute inset-x-0 bottom-[50%] border-t border-dashed border-gray-200"></div>
               <div className="absolute inset-x-0 bottom-[80%] border-t border-dashed border-gray-200"></div>
               
               <div className="w-full flex justify-around items-end h-[85%] relative z-10 px-2 space-x-2">
                  <motion.div initial={{ height: 0 }} whileInView={{ height: '40%' }} transition={{ duration: 1 }} className="w-1/4 bg-[#ff5a00] relative rounded-t flex justify-center items-start pt-2"><span className="text-[10px] text-white font-mono bg-black/20 px-1 rounded">2.75</span></motion.div>
                  <motion.div initial={{ height: 0 }} whileInView={{ height: '65%' }} transition={{ duration: 1, delay: 0.1 }} className="w-1/4 bg-[#ffdbc7] relative rounded-t flex justify-center items-start pt-2"><span className="text-[10px] text-orange-900 font-mono">4.60</span></motion.div>
                  <motion.div initial={{ height: 0 }} whileInView={{ height: '80%' }} transition={{ duration: 1, delay: 0.2 }} className="w-1/4 bg-[#ffdbc7] relative rounded-t flex justify-center items-start pt-2"><span className="text-[10px] text-orange-900 font-mono">5.45</span></motion.div>
                  <motion.div initial={{ height: 0 }} whileInView={{ height: '60%' }} transition={{ duration: 1, delay: 0.3 }} className="w-1/4 bg-[#ffdbc7] relative rounded-t flex justify-center items-start pt-2"><span className="text-[10px] text-orange-900 font-mono">4.20</span></motion.div>
               </div>
               
               <div className="absolute bottom-2 inset-x-0 flex justify-around text-[9px] font-mono text-gray-500 uppercase px-6">
                  <div className="font-bold text-black border-t border-black pt-1">CAN&DID<br/>APEX<br/>1.0</div>
                  <div className="pt-1">SONNET<br/>4.0</div>
                  <div className="pt-1">GPT4<br/>4.5</div>
                  <div className="pt-1">GPT<br/>5.4</div>
               </div>
            </div>
         </motion.div>
         {/* Chart 3 - Height Interpolation & Staggered Reveal */}
         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true, margin: "-50px" }} className="flex flex-col justify-end">
            <h3 className="text-2xl font-space font-medium mb-6 tracking-tight min-h-[64px] flex items-end">
               <span><span className="text-[#ff5a00]">-65%</span> reduction in hallucinations*</span>
            </h3>
            <div className="border border-black/10 rounded-xl bg-[#fff] p-6 h-[250px] relative flex flex-col justify-start shadow-sm pt-8 overflow-hidden">
               <div className="absolute inset-x-0 top-[15%] border-t border-black"></div>
               <div className="absolute inset-x-0 top-[45%] border-t border-dashed border-gray-200"></div>
               <div className="absolute inset-x-0 top-[75%] border-t border-dashed border-gray-200"></div>
               
               <div className="w-full flex justify-around items-start h-[80%] relative z-10 px-2 space-x-2 mt-[-10px]">
                  <motion.div initial={{ height: 0 }} whileInView={{ height: '75%' }} transition={{ duration: 1 }} className="w-1/4 bg-[#ff5a00] relative rounded-b flex justify-center items-end pb-2"><span className="text-[9px] text-white font-mono bg-black/20 px-1 rounded">-64.7%</span></motion.div>
                  <motion.div initial={{ height: 0 }} whileInView={{ height: '5%' }} transition={{ duration: 1, delay: 0.1 }} className="w-1/4 bg-[#eee] relative rounded-b flex justify-center items-end pb-2">
                     <span className="text-[9px] text-gray-500 font-mono absolute -bottom-4">-2.8%</span>
                  </motion.div>
                  <motion.div initial={{ height: 0 }} whileInView={{ height: '85%' }} transition={{ duration: 1, delay: 0.2 }} className="w-1/4 bg-[#ffdbc7] relative rounded-b flex justify-center items-end pb-2"><span className="text-[9px] text-orange-900 font-mono">-70.6%</span></motion.div>
                  <motion.div initial={{ height: 0 }} whileInView={{ height: '85%' }} transition={{ duration: 1, delay: 0.3 }} className="w-1/4 bg-[#ffdbc7] relative rounded-b flex justify-center items-end pb-2"><span className="text-[9px] text-orange-900 font-mono">-70.6%</span></motion.div>
               </div>
               
               <div className="absolute bottom-2 inset-x-0 flex justify-around text-[9px] font-mono text-gray-500 uppercase px-6">
                  <div className="font-bold text-black border-t border-black pt-1">CAN&DID<br/>APEX<br/>1.0</div>
                  <div className="pt-1">SONNET<br/>4.0</div>
                  <div className="pt-1">GPT4<br/>4.5</div>
                  <div className="pt-1">GPT<br/>5.4</div>
               </div>
            </div>
            <p className="text-[10px] text-gray-400 mt-3 font-mono">*Compared to Sonnet 4.0</p>
         </motion.div>
      </div>
  </div>
);




const GuaranteeSection = () => (
  <div className="max-w-6xl mx-auto my-24 border border-black/10 rounded-[2rem] p-8 md:p-14 relative overflow-hidden h-[450px] flex flex-col justify-between" style={{ backgroundColor: '#fcfaf6' }}>
    <div className="absolute inset-0" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200')`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15, mixBlendMode: 'multiply' }}></div>
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#ff6a00] via-[#ffdbe6] to-transparent blur-[100px] rounded-full opacity-40 -z-10 translate-x-1/4 -translate-y-1/4" />
    
    <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-8 flex items-center relative z-10">
         <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span> OUR GUARANTEE
    </div>
    <div className="flex flex-col md:flex-row justify-between items-end h-full mt-auto relative z-10">
       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex-1 max-w-sm mb-6 md:mb-0 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-black/5 shadow-sm">
          <p className="text-sm font-sans text-gray-800 leading-relaxed">
            CAN&DID is the highest-performing Agent for customer service. We know others make the same claim, which is why we back ours with the CAN&DID Million Dollar Guarantee.
          </p>
          <a href="#" className="text-xs font-semibold underline underline-offset-4 mt-6 inline-block text-black">Learn more</a>
       </motion.div>
       <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 text-right">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-space font-medium tracking-tight mb-2 text-black">Performance backed by our</h2>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-space font-medium tracking-tight"><span className="text-black border-b-[3px] border-black border-dashed leading-tight pb-2">$1 million guarantee</span></h2>
       </motion.div>
    </div>
  </div>
);

const SecuritySection = () => (
  <div className="max-w-6xl mx-auto my-24 border border-black/10 rounded-[2rem] p-8 md:p-16 relative overflow-hidden bg-[#e8e6df] h-[450px] flex flex-col justify-end">
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />
    <motion.div animate={{ rotate: [12, -12, 12] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 text-black/5 w-96 h-96 scale-150 blur-sm">
       <Database className="w-full h-full stroke-1" />
    </motion.div>

    <div className="absolute top-8 left-8 text-[10px] font-mono tracking-widest text-[#ff5a00] uppercase flex items-center">
         <span className="w-1.5 h-1.5 bg-[#ff5a00] rounded-full mr-2"></span> SECURITY
    </div>
    
    <div className="flex flex-col md:flex-row justify-between items-end relative z-10 w-full">
       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex-1 mb-12 md:mb-0 pr-8">
          <h2 className="text-5xl md:text-6xl font-space font-medium tracking-tight leading-[1.1] text-black">
             Customer-first approach<br/>to data privacy and security
          </h2>
       </motion.div>
       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} className="flex-1 max-w-md bg-white/40 backdrop-blur-sm p-8 rounded-2xl border border-black/5">
          <p className="text-sm font-sans text-gray-800 leading-relaxed mb-6">
            We have invested heavily in data privacy and security. These models are trained on deidentified data from past CAN&DID interactions.
          </p>
          <p className="text-sm font-sans text-gray-800 leading-relaxed mb-4">
            The following existing customers are automatically excluded from our training process:
          </p>
          <ul className="text-xs text-gray-800 space-y-3 mb-6 font-medium">
             <li className="flex items-start"><div className="w-1 h-1 bg-[#ff5a00] rounded-full mt-1.5 mr-3 shrink-0" /> Customers that signed an MSSA</li>
             <li className="flex items-start"><div className="w-1 h-1 bg-[#ff5a00] rounded-full mt-1.5 mr-3 shrink-0" /> Customers that have a BAA in place with us</li>
             <li className="flex items-start"><div className="w-1 h-1 bg-[#ff5a00] rounded-full mt-1.5 mr-3 shrink-0" /> Customer using an EU/AU regionally hosted workspace</li>
             <li className="flex items-start"><div className="w-1 h-1 bg-[#ff5a00] rounded-full mt-1.5 mr-3 shrink-0" /> Any customer that was previously granted an opt-out</li>
          </ul>
          <a href="#" className="text-[10px] font-mono uppercase tracking-widest border-b border-black text-black">Learn more</a>
       </motion.div>
    </div>
  </div>
);

const BottomCTA = () => (
  <div className="relative py-40 px-6 flex flex-col justify-center items-center text-center overflow-hidden h-[600px] border-b border-t border-black/10 bg-[#f8f7f5]">
    <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-br from-[#ff6a00]/30 via-[#00f]/10 to-[#8a2be2]/20 blur-[100px] rounded-full point-events-none" />

    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-7xl font-space font-medium tracking-tight text-black mb-8 max-w-3xl leading-[1.1]">
      Get purpose built models for industry-leading performance
    </motion.h2>

    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-center space-x-4 mt-8 relative z-10">
      <button className="bg-black text-white px-8 py-3.5 rounded-full font-semibold hover:bg-gray-800 transition-colors text-sm shadow-xl">
        Start free trial
      </button>
      <button className="bg-white/80 backdrop-blur-md text-black px-8 py-3.5 rounded-full font-semibold border border-black/10 hover:bg-white transition-colors text-sm shadow-sm">
        View demo
      </button>
    </motion.div>
  </div>
);

const Footer = () => (
  <div className="max-w-7xl mx-auto py-20 px-8 flex justify-between bg-[#f1efe9]">
     <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-[11px] font-sans text-gray-500 w-full">
        <div>
           <div className="font-semibold text-black mb-6 uppercase tracking-widest text-[9px] font-mono">PRODUCT</div>
           <ul className="space-y-4">
              <li>Home</li><li>CAN&DID Overview</li><li>Customer Agent</li><li>Sales role</li><li>Channels</li><li>Trust and Reliability</li><li>Integrations</li><li>Voice</li><li>Procedures</li><li>Analyze</li><li>Train</li>
           </ul>
        </div>
        <div>
           <div className="font-semibold text-black mb-6 uppercase tracking-widest text-[9px] font-mono">AI TECHNOLOGY</div>
           <ul className="space-y-4">
              <li>AI Engine</li><li>Models</li><li>API Platform</li><li>AI Research</li>
           </ul>
        </div>
        <div>
           <div className="font-semibold text-black mb-6 uppercase tracking-widest text-[9px] font-mono">SOLUTIONS</div>
           <ul className="space-y-4">
              <li>Financial Services</li><li>Retail and ecommerce</li><li>Technology</li><li>Enterprise</li><li>Gaming</li>
           </ul>
        </div>
        <div>
           <div className="font-semibold text-black mb-6 uppercase tracking-widest text-[9px] font-mono">RESOURCES</div>
           <ul className="space-y-4">
              <li>Customers</li><li>Pioneer</li><li>Building frontier AI products</li><li>Webinars</li><li>CAN&DID 3</li><li>Built For You</li><li>Product Updates</li><li>Help Center</li>
           </ul>
        </div>
        <div>
           <div className="font-semibold text-black mb-6 uppercase tracking-widest text-[9px] font-mono">CAN&DID IN ACTION</div>
           <ul className="space-y-4 mb-10">
              <li>View demo</li><li>Free trial</li><li>Contact sales</li><li>Sign in</li>
           </ul>
           <div className="font-semibold text-black mb-6 uppercase tracking-widest text-[9px] font-mono">COMPANY</div>
           <ul className="space-y-4">
              <li>Careers</li>
           </ul>
        </div>
     </div>
  </div>
);

export default function PerformancePage() {
  return (
    <div className="min-h-screen bg-[#f1efe9] font-sans antialiased text-black relative z-0 selection:bg-[#ff5a00] selection:text-white">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-br from-[#ff6a00]/10 via-[#ffdbe6]/50 to-[#e6f4ff]/50 blur-[120px] rounded-[100%] point-events-none -z-10" />
       
       <Navbar />
       <main>
         <Hero />
         <ChartSection />
         
         <GuaranteeSection />
         <SecuritySection />
         <BottomCTA />
       </main>
       <Footer />
    </div>
  );
}
