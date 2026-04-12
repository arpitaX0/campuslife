import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white/5 to-transparent skew-y-3 -translate-y-1/2 pointer-events-none opacity-20"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl mb-20 backdrop-blur-sm"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="font-heading text-3xl md:text-4xl mb-3 leading-tight">
                Stay informed, <span className="text-[#E5AA3E]">stay ahead.</span>
              </h3>
              <p className="text-white/50 text-base max-w-md">
                Subscribe to our newsletter for the latest updates on research, events, and campus life.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex bg-white/5 border border-white/10 p-1.5 rounded-2xl focus-within:border-[#E5AA3E]/50 transition-all">
                <input 
                  type="email" 
                  placeholder="Your official email" 
                  className="flex-grow bg-transparent px-5 py-3 text-white outline-none placeholder:text-white/20"
                />
                <button className="bg-[#E5AA3E] hover:bg-white text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all group">
                  Subscribe <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium ml-2">No spam. Only essential updates.</p>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand & Info */}
          <div className="space-y-8">
            <a href="https://tat.tekkzy.com/" className="flex items-center gap-3.5 no-underline flex-shrink-0">
              <img src="https://site-generator-documents.s3.eu-north-1.amazonaws.com/TAT+Logoo.png" alt="TAT Logo" className="w-[52px] h-[52px] object-contain block" />
              <div className="flex flex-col justify-center">
                <div className="font-heading text-[22px] font-black text-white leading-none tracking-[0.04em] uppercase">Trident</div>
                <div className="w-full h-[1px] bg-gradient-to-r from-royal-blue to-transparent my-1"></div>
                <div className="text-[9px] font-bold text-royal-blue tracking-[0.22em] uppercase leading-none">Academy of Technology</div>
              </div>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Trident Academy of Technology is a premier institution dedicated to excellence in technical education and research.
            </p>
            <div className="space-y-4">
              {[
                { icon: MapPin, text: 'Bhubaneswar, Odisha, India' },
                { icon: Phone, text: '+91 98611 91195', href: 'tel:+919861191195' },
                { icon: Mail, text: 'info@trident.ac.in', href: 'mailto:info@trident.ac.in' }
              ].map((item, idx) => (
                <a key={idx} href={item.href || '#'} className="flex items-center gap-4 text-white/50 hover:text-[#E5AA3E] transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#E5AA3E]/30 transition-all">
                    <item.icon size={16} />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Academics */}
          <div>
            <h5 className="font-heading text-lg font-bold mb-8 uppercase tracking-widest text-[#E5AA3E]">Academics</h5>
            <ul className="space-y-4">
              {['Undergraduate', 'Postgraduate', 'Doctoral Programs', 'Research Centers', 'Academic Calendar'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/40 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <div className="w-0 h-[1px] bg-[#E5AA3E] group-hover:w-3 transition-all"></div>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Campus Life */}
          <div>
            <h5 className="font-heading text-lg font-bold mb-8 uppercase tracking-widest text-[#E5AA3E]">Campus Life</h5>
            <ul className="space-y-4">
              {['Student Hostels', 'Clubs & Societies', 'Sports & Recreation', 'Health & Wellness', 'Campus Safety'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/40 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <div className="w-0 h-[1px] bg-[#E5AA3E] group-hover:w-3 transition-all"></div>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h5 className="font-heading text-lg font-bold mb-8 uppercase tracking-widest text-[#E5AA3E]">Resources</h5>
            <ul className="space-y-4">
              {['Admissions Portal', 'Alumni Network', 'Career Placements', 'NIRF Data', 'Tenders & Notices'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/40 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <div className="w-0 h-[1px] bg-[#E5AA3E] group-hover:w-3 transition-all"></div>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-6 text-white/30 text-xs">
            <span>© 2026 Trident Academy of Technology.</span>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Use'].map(link => (
                <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:border-[#E5AA3E]/50 hover:bg-[#E5AA3E] hover:text-black transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Credit Section */}
        <div className="mt-16 text-center">
          <p className="text-[10px] text-white/10 uppercase tracking-[0.4em] font-bold">
            Crafted with AI by <a href="https://tekkzy.com" className="text-white/20 hover:text-[#E5AA3E] transition-colors">Tekkzy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
