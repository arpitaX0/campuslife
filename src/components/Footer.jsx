import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-block text-white pt-32 pb-12 relative overflow-hidden">
      {/* Skewed accent */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-white/5 skew-y-3 -translate-y-1/2 pointer-events-none"></div>
      
      {/* Watermark logo */}
      <div className="absolute top-20 right-10 opacity-5 pointer-events-none">
        <img src="https://site-generator-documents.s3.eu-north-1.amazonaws.com/TAT+Logoo.png" alt="" className="w-96 grayscale" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Newsletter Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy-block border border-white/10 p-10 md:p-16 rounded-lg mb-24 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-brand-gold/50"></div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-heading text-4xl mb-4 leading-tight">Stay informed, <br />stay <span className="text-brand-gold">ahead.</span></h3>
              <p className="text-white/60">Subscribe to the official Trident Newsletter for updates on research, events, and campus developments.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex border border-white/20 p-1 rounded-md focus-within:border-brand-gold transition-colors bg-white/5">
                <input type="email" placeholder="Enter your email address" className="flex-grow bg-transparent px-4 py-3 text-white outline-none" />
                <button className="bg-brand-gold text-navy-block px-6 py-3 rounded-sm font-bold flex items-center gap-2 hover:bg-white transition-all">
                  Subscribe <ArrowRight size={18} />
                </button>
              </div>
              <p className="text-[11px] text-white/40 uppercase tracking-widest font-semibold">No spam. Only updates that matter.</p>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="grid lg:grid-cols-[1.5fr_2fr] gap-20 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <img src="https://site-generator-documents.s3.eu-north-1.amazonaws.com/TAT+Logoo.png" alt="TAT Logo" className="w-16 grayscale brightness-200" />
              <div className="w-[1px] h-10 bg-white/20"></div>
              <div>
                <div className="font-heading text-2xl font-black uppercase tracking-wider">Trident</div>
                <div className="text-[10px] font-bold text-white/50 tracking-widest uppercase">Academy of Technology</div>
              </div>
            </div>
            <p className="text-white/60 mb-10 leading-relaxed">
              Empowering the next generation of global leaders through world-class technical education, innovative research, and an unwavering commitment to excellence.
            </p>
            <div className="flex flex-col gap-6">
              {[
                { icon: MapPin, text: 'F2/A, Chandaka Industrial Estate, Bhubaneswar, Odisha, India' },
                { icon: Phone, text: '+91 98611 91195', href: 'tel:+919861191195' },
                { icon: Mail, text: 'info@trident.ac.in', href: 'mailto:info@trident.ac.in' }
              ].map((item, idx) => (
                <a key={idx} href={item.href || '#'} className="flex items-start gap-4 text-white/70 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white transition-all">
                    <item.icon size={20} />
                  </div>
                  <span className="pt-2">{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { 
                title: 'Academics', 
                links: ['Undergraduate Studies', 'Postgraduate Studies', 'Doctoral Programs', 'Research Centers', 'Academic Calendar'] 
              },
              { 
                title: 'Campus Life', 
                links: ['Student Hostels', 'Clubs & Societies', 'Sports & Recreation', 'Health & Wellness', 'Campus Safety'] 
              },
              { 
                title: 'Resources', 
                links: ['Admissions Portal', 'Alumni Network', 'Career Placements', 'NIRF Data', 'Tenders & Notices'] 
              }
            ].map((col, idx) => (
              <div key={idx}>
                <h5 className="font-heading text-xl mb-6 relative inline-block">
                  {col.title}
                  <div className="absolute -bottom-1 left-0 w-8 h-1 bg-brand-gold/30"></div>
                </h5>
                <ul className="flex flex-col gap-4 list-none text-white/50 text-sm">
                  {col.links.map(link => (
                    <li key={link} className="hover:text-white transition-colors cursor-pointer flex items-center gap-2 group">
                      <div className="w-0 h-[1px] bg-brand-gold group-hover:w-3 transition-all duration-300"></div>
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-4 text-white/40 text-xs">
            <span>© 2026 Trident Academy of Technology. All rights reserved.</span>
            <div className="flex gap-4">
              {['Privacy Policy', 'Disclaimer', 'Terms of Use'].map(link => (
                <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-white hover:bg-white hover:text-navy-block transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Credit */}
        <div className="text-center text-[10px] text-white/20 mt-16 uppercase tracking-[0.3em] font-bold">
          Crafted with AI by <a href="https://tekkzy.com" className="text-white/40 hover:text-brand-gold transition-colors">Tekkzy</a> — AI-Powered Intelligent Cloud Solutions
        </div>
      </div>
    </footer>
  );
};

export default Footer;
