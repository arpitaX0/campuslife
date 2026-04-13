import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
    <div className="fixed top-0 left-0 w-full z-[1000] font-sans">
      {/* ─── Top Utility Bar ─── */}
      <div className={`bg-[#253386] transition-all duration-500 overflow-hidden relative z-[20] ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-[40px] opacity-100'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-2.5 flex justify-between items-center">
          <div className="flex items-center gap-2 text-[11px] font-bold text-white uppercase tracking-[0.15em]">
            <span>AFFILIATED TO BPUT</span>
            <span className="opacity-40 font-normal px-1">|</span>
            <span>NAAC 'A' ACCREDITED</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://alumni-tat.tekkzy.com/" className="flex items-center gap-2 text-[11px] font-semibold text-white/90 uppercase tracking-[0.12em] hover:text-white transition-colors">
              <i className="ph ph-users text-sm"></i>
              <span>Alumni</span>
            </a>
            <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-6 ml-2">
               {['ph ph-facebook-logo', 'ph ph-twitter-logo', 'ph ph-linkedin-logo'].map((icon, i) => (
                 <a key={i} href="#" className="text-white/60 hover:text-white transition-colors"><i className={icon}></i></a>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Main Header ─── */}
      <header className={`bg-white border-b border-black/[0.04] transition-all duration-500 relative z-[10] ${isScrolled ? 'py-3.5 shadow-[0_4px_25px_rgba(0,0,0,0.05)]' : 'py-6'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
          
          {/* Logo Branding */}
          <a href="https://tat.tekkzy.com/" className="flex items-center gap-3 no-underline group">
            <img 
              src="https://site-generator-documents.s3.eu-north-1.amazonaws.com/TAT+Logoo.png" 
              alt="TAT Logo" 
              className={`object-contain transition-all duration-500 ${isScrolled ? 'w-12 h-12' : 'w-14 h-14'}`} 
            />
            <div className="flex flex-col justify-center mt-1">
              <div className="text-[26px] font-black text-[#222] leading-[0.9] tracking-[0.02em] uppercase font-sans">TRIDENT</div>
              <div className="h-[1.5px] w-[115%] bg-[#253386] my-1 opacity-90"></div>
              <div className="text-[9.5px] font-bold text-[#253386] tracking-[0.2em] uppercase leading-none">ACADEMY OF TECHNOLOGY</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-grow justify-center pl-10">
            <ul className="flex gap-11 list-none">
              {navLinks.map((link) => {
                const isCampusLifeRepo = link.name === 'Campus Life';
                const isActive = typeof window !== 'undefined' && (
                  window.location.href.includes(link.href.replace('https://', '').split('.')[0]) ||
                  (isCampusLifeRepo && window.location.hostname === 'localhost')
                );
                
                return (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className={`text-[13px] font-bold uppercase tracking-[0.1em] whitespace-nowrap transition-all duration-300 relative group py-2 flex items-center ${
                        isActive ? 'text-[#253386]' : 'text-[#3E3A36] hover:text-[#253386]'
                      }`}
                    >
                      {link.name}
                      <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#253386] transition-all duration-300 ${
                        isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                      }`}></span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action Button */}
          <div className="hidden sm:block ml-4">
            <a 
              href="https://apply-now.tekkzy.com/" 
              className="inline-block bg-[#ED3237] text-white text-[13px] font-bold uppercase tracking-[0.1em] px-7 py-2.5 rounded-sm shadow-sm hover:bg-[#D12B2F] transition-all transform hover:-translate-y-[1px] active:scale-95"
            >
              APPLY NOW
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-[#253386] hover:bg-[#253386]/5 rounded-lg transition-colors ml-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`ph ${isMobileMenuOpen ? 'ph-x' : 'ph-list'} text-3xl transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}></i>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`absolute top-full left-0 w-full bg-white shadow-2xl overflow-hidden transition-all duration-500 border-t border-black/[0.03] ${isMobileMenuOpen ? 'max-h-[85vh] opacity-100 py-8 overflow-y-auto' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="px-6 space-y-2">
            {navLinks.map((link) => {
              const isCampusLifeRepo = link.name === 'Campus Life';
              const isActive = typeof window !== 'undefined' && (
                window.location.href.includes(link.href.replace('https://', '').split('.')[0]) ||
                (isCampusLifeRepo && window.location.hostname === 'localhost')
              );
              
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`block py-4 px-5 text-[14px] font-extrabold uppercase tracking-[0.1em] transition-all rounded-xl ${
                    isActive ? 'bg-[#253386]/5 text-[#253386]' : 'text-[#111111] hover:bg-black/5'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-6 px-3">
              <a href="https://apply-now.tekkzy.com/" className="block text-center bg-[#253386] text-white text-[13px] font-bold uppercase tracking-[0.2em] py-4 rounded-xl shadow-lg hover:opacity-95 transition-all">
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
