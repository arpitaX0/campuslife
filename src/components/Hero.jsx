import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-[160px] pb-24 overflow-hidden relative">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h1 className="font-heading text-5xl md:text-7xl lg:text-[4.5rem] leading-[1.1] mb-6 text-charcoal">
            Engineering the <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent font-bold">
              Future of <br /> Technical Mastery
            </span>
          </h1>
          <p className="text-[1.25rem] font-light text-charcoal/80 mb-10 max-w-[480px] leading-relaxed">
            Trident Academy of Technology is where visionary research meets institutional luxury, cultivating the next lineage of global technical leaders.
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-royal-blue text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20">
              Discover the Legacy
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-12 -left-24 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full -z-10 animate-pulse"></div>
          <div className="w-full aspect-[4/5] bg-navy-block rounded-lg overflow-hidden shadow-[0_40px_100px_rgba(7,11,43,0.1)]">
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200" 
              alt="Modern University Campus Building" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
          {/* Subtle Glow Overlay */}
          <div className="absolute inset-0 bg-radial-gradient(circle at 70% 30%, rgba(31,197,224,0.15) 0%, transparent 60%) pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
