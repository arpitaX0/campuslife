import React, { useState, useEffect } from 'react';
import { Menu, X, Users, MapPin, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: 'https://about-tat.tekkzy.com/' },
    { name: 'Admissions', href: 'https://admissions-tat.tekkzy.com/' },
    { name: 'Academics', href: 'https://academics-tat.tekkzy.com/' },
    { name: 'Research', href: 'https://research-tat.tekkzy.com/' },
    { name: 'Campus Life', href: 'https://campuslife-tat.tekkzy.com/' },
    { name: 'Activities', href: 'https://activities-tat.tekkzy.com/' },
    { name: 'Contact Us', href: 'https://contactus-tat.tekkzy.com/' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-[1000]">
      {/* Utility Bar */}
      <div className={`bg-royal-blue border-b border-white/10 transition-all duration-500 overflow-hidden ${isScrolled ? 'max-h-0 opacity-0 pointer-events-none' : 'max-h-[44px] opacity-100'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-2.5 flex justify-between items-center text-[11px] font-bold text-white/80 uppercase tracking-[0.18em]">
          <span>Affiliated to BPUT &nbsp;<span className="opacity-40">|</span>&nbsp; NAAC 'A' Accredited</span>
          <a href="https://alumni-tat.tekkzy.com/" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Users size={12} /> Alumni
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-white border-b border-black/5 shadow-sm transition-all duration-500 ${isScrolled ? 'py-3 shadow-md' : 'py-5'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between gap-6">
          
          {/* Logo */}
          <a href="https://tat.tekkzy.com/" className="flex items-center gap-3.5 no-underline flex-shrink-0">
            <img src="https://site-generator-documents.s3.eu-north-1.amazonaws.com/TAT+Logoo.png" alt="TAT Logo" className="w-[52px] h-[52px] object-contain block" />
            <div className="flex flex-col justify-center">
              <div className="font-heading text-[22px] font-black text-charcoal leading-none tracking-[0.04em] uppercase">Trident</div>
              <div className="w-full h-[1px] bg-gradient-to-r from-royal-blue to-transparent my-1"></div>
              <div className="text-[9px] font-bold text-royal-blue tracking-[0.22em] uppercase leading-none">Academy of Technology</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex flex-grow justify-center">
            <ul className="flex gap-6 list-none">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[13px] font-extrabold text-charcoal uppercase tracking-[0.14em] whitespace-nowrap transition-colors relative group hover:text-royal-blue">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-royal-blue transition-[width] duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div className="hidden sm:block flex-shrink-0">
            <a href="https://apply-now.tekkzy.com/" className="inline-block bg-[#E63946] text-white text-[12px] font-bold uppercase tracking-[0.1em] px-7 py-3 rounded-md no-underline whitespace-nowrap transition-all shadow-[0_4px_18px_rgba(230,57,70,0.3)] hover:bg-[#c1121f] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(230,57,70,0.4)]">
              Apply Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden bg-[#f0f4ff] border-none rounded-lg p-2 cursor-pointer text-royal-blue transition-all relative z-[60] flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <div className={`absolute top-full left-0 w-full bg-white shadow-2xl overflow-hidden transition-all duration-500 border-t border-royal-blue/10 ${isMobileMenuOpen ? 'max-h-[85vh] opacity-100 py-6 overflow-y-auto' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="px-6 flex flex-col">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="block py-3.5 px-3 text-[15px] font-extrabold text-charcoal uppercase tracking-[0.14em] no-underline border-b border-royal-blue/5 transition-colors rounded-lg hover:text-royal-blue hover:bg-royal-blue/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6 px-2 pb-2">
              <a href="https://apply-now.tekkzy.com/" className="block text-center bg-[#E63946] text-white text-[13px] font-extrabold uppercase tracking-[0.2em] px-6 py-4 rounded-xl no-underline shadow-[0_10px_30px_rgba(230,57,70,0.4)] hover:bg-[#c1121f] hover:-translate-y-0.5">
                START APPLICATION
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
