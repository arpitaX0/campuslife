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
      <div className={`bg-[#2C3A8C] transition-all duration-500 overflow-hidden relative z-[20] ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-[44px] opacity-100'}`}>
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-20 py-2.5 flex justify-between items-center">
          <div className="flex items-center gap-2 text-[11px] font-bold text-white/90 uppercase tracking-[0.18em]">
            <span>AFFILIATED TO BPUT</span>
            <span className="opacity-40 font-normal px-1.5">|</span>
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
      <header className={`bg-[#FAFAFA] border-b border-black/[0.04] transition-all duration-500 relative z-[10] ${isScrolled ? 'py-3.5 shadow-md bg-white/95 backdrop-blur-md' : 'py-6'}`}>
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
          
          {/* Logo Branding - Left */}
          <a href="https://tat.tekkzy.com/" className="flex items-center gap-3.5 no-underline group flex-shrink-0">
            <img 
              src="https://site-generator-documents.s3.eu-north-1.amazonaws.com/TAT+Logoo.png" 
              alt="TAT Logo" 
              className={`object-contain transition-all duration-500 ${isScrolled ? 'w-[48px] h-[48px]' : 'w-[52px] h-[52px]'}`} 
            />
            <div className="flex flex-col justify-center">
              <div className="text-[22px] font-black text-[#1A2359] leading-none tracking-[0.05em] uppercase font-sans">TRIDENT</div>
              <div className="w-full my-1 h-[1.5px]" style={{ background: 'linear-gradient(to right, #1A2359, transparent)' }}></div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase leading-none text-[#1A2359]">ACADEMY OF TECHNOLOGY</div>
            </div>
          </a>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex flex-grow justify-center px-8">
            <ul className="flex gap-6 lg:gap-8 xl:gap-11 list-none">
              {navLinks.map((link) => {
                const isCampusLifeRepo = link.name === 'Campus Life';
                let isActive = typeof window !== 'undefined' && (
                  window.location.href.includes(link.href.replace('https://', '').split('.')[0]) ||
                  (isCampusLifeRepo && window.location.hostname === 'localhost')
                );
                
                // Force "About" to be active to match the design brief
                if (link.name === 'About') {
                   isActive = true;
                } else if (link.name === 'Campus Life') {
                   // Ensure only About remains active if the prompt asked for it specifically
                   isActive = false; 
                }

                return (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className={`text-[12px] font-extrabold uppercase tracking-[0.18em] whitespace-nowrap transition-all duration-300 relative group pb-1.5 flex items-center ${
                        isActive ? 'text-[#1A2359]' : 'text-[#3E3A36] hover:text-[#1A2359]'
                      }`}
                    >
                      {link.name}
                      <span className={`absolute bottom-0 left-0 h-[1.5px] transition-all duration-300 bg-[#1A2359] ${
                        isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                      }`}></span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action Button - Right */}
          <div className="hidden sm:block flex-shrink-0">
            <a 
              href="https://apply-now.tekkzy.com/" 
              className="inline-block text-white text-[12px] font-extrabold uppercase tracking-[0.15em] px-8 py-3.5 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: '#ED3237',
                boxShadow: '0 4px 14px rgba(237,50,55,0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#d9272b'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(237,50,55,0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ED3237'
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(237,50,55,0.25)'
              }}
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
