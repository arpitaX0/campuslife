import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = ({ onNavigate }) => {
  return (
    <section className="min-h-screen flex items-center pt-[160px] pb-24 overflow-hidden relative bg-soft-off-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] mb-10 text-[#3E3A36]">
            Tradition <br />
            <span className="italic text-[#253386] font-light">meets</span> <br />
            <span className="font-black text-[#253386]">Innovation</span>
          </h1>
          <p className="text-[1.25rem] font-medium text-[#3E3A36]/60 mb-10 max-w-[520px] leading-relaxed font-body">
            Immerse yourself in Odisha's premier technical ecosystem. Rigorous academics meet world-class innovation labs to forge the leaders of tomorrow.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <button 
              onClick={() => onNavigate('programs')}
              className="bg-white text-[#3E3A36] px-10 py-5 rounded-full font-bold transition-all hover:bg-[#253386] hover:text-white flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.05)] active:scale-95"
            >
              Our Programs <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className="bg-transparent border border-[#3E3A36]/20 text-[#3E3A36] px-10 py-5 rounded-full font-bold transition-all hover:border-[#253386] hover:text-[#253386] active:scale-95"
            >
              About Trident
            </button>
          </div>

          <div className="mt-16 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-200">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" />
                </div>
              ))}
            </div>
            <div className="text-[13px] font-bold text-[#3E3A36]/40 uppercase tracking-widest">
              Joined by <span className="text-[#253386]">10,000+</span> Alumni
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative h-full flex items-center"
        >
          <div className="absolute -top-12 -left-24 w-[400px] h-[400px] bg-[#E5AA3E]/10 blur-[100px] rounded-full -z-10 animate-pulse"></div>
          <div className="w-full aspect-[4/5] bg-[#070B2B] rounded-[40px] overflow-hidden shadow-[0_60px_100px_rgba(7,11,43,0.15)] relative">
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200" 
              alt="Elite Campus Environment" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B2B]/60 to-transparent"></div>
            
            {/* Live Progress Indicator */}
            <div className="absolute bottom-10 left-10 flex items-center gap-6 text-white/60 text-[12px] font-bold tracking-widest uppercase">
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === 2 ? 'w-12 bg-[#E5AA3E]' : 'w-6 bg-white/20'}`}></div>
                ))}
              </div>
              <span>02 / 05</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
