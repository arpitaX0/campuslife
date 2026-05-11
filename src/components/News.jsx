import React from 'react';
import { motion } from 'framer-motion';

const News = () => {
  const highlights = [
    { title: 'Scholarships', desc: 'Comprehensive support systems including merit-based institutional scholarships.', img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=200', link: 'https://campuslife-tat.tekkzy.com/scholarship/' },
    { title: 'ICT Enable Classroom', desc: 'Digital-first learning environments equipped with modern smart tools.', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=200', link: 'https://campuslife-tat.tekkzy.com/ict-Enable-classroom/' },
    { title: 'Campus Security', desc: '24/7 campus surveillance and professional security personnel.', img: '/facilities/security_safety.png', link: 'https://campuslife-tat.tekkzy.com/campus-security/' },
  ];

  return (
    <section className="bg-navy-block text-white py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col mb-16 max-w-2xl">
          <h2 className="font-heading text-5xl mb-6 text-white">
            <span className="relative inline-block">
              <span className="bg-gradient-primary bg-clip-text text-transparent font-bold relative z-10">Institutional Highlights</span>
              <div className="absolute bottom-1 left-0 w-full h-4 bg-white/5 -z-10"></div>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20"></div>
            </span>
          </h2>
          <p className="text-white/70 text-lg">Current initiatives driving global technological impact.</p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
          {/* Main Featured Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative bg-[#0a0f3d] rounded-lg overflow-hidden shadow-2xl"
          >
            <div className="h-[450px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                alt="Advanced Engineering Research" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-10">
              <h4 className="font-heading text-3xl mb-4 text-white">Quantum Computing & AI: The Trident Lab Initiative</h4>
              <p className="text-white/80 leading-relaxed">Exploring the intersection of neural networks and hardware architecture in our flagship research facility.</p>
            </div>
          </motion.div>

          {/* Side News List */}
          <div className="flex flex-col gap-5">
            {highlights.map((item, idx) => (
              <motion.a 
                key={idx}
                href={item.link}
                target={item.link ? "_blank" : undefined}
                rel={item.link ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 p-6 bg-[#0a0f3d] rounded-md transition-all hover:translate-x-3 cursor-pointer group"
              >
                <img src={item.img} alt={item.title} className="w-20 h-20 rounded-xl object-cover shrink-0" />
                <div>
                  <h5 className="font-heading text-xl text-white mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h5>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
