import React from 'react';

export default function Footer() {
  const academicsLinks = [
    { href: 'https://academics-tat.tekkzy.com/', label: 'Undergraduate Studies' },
    { href: 'https://academics-tat.tekkzy.com/', label: 'Postgraduate Studies' },
    { href: 'https://academics-tat.tekkzy.com/', label: 'Doctoral Programs' },
    { href: 'https://research-tat.tekkzy.com/', label: 'Research Centers' },
    { href: 'https://academics-tat.tekkzy.com/', label: 'Academic Calendar' },
  ]

  const campusLinks = [
    { href: 'https://campuslife-tat.tekkzy.com/', label: 'Student Hostels' },
    { href: 'https://activities-tat.tekkzy.com/', label: 'Clubs & Societies' },
    { href: 'https://activities-tat.tekkzy.com/', label: 'Sports & Recreation' },
    { href: 'https://campuslife-tat.tekkzy.com/', label: 'Health & Wellness' },
    { href: 'https://campuslife-tat.tekkzy.com/', label: 'Campus Safety' },
  ]

  const resourcesLinks = [
    { href: 'https://admissions-tat.tekkzy.com/', label: 'Admissions Portal' },
    { href: 'https://alumni-tat.tekkzy.com/', label: 'Alumni Network' },
    { href: 'https://careers-tat.tekkzy.com/', label: 'Career Placements' },
    { href: 'https://tat.tekkzy.com/', label: 'NIRF Data' },
    { href: 'https://tat.tekkzy.com/', label: 'Tenders & Notices' },
  ]

  return (
    <footer className="bg-[#111111] text-white pt-24 pb-0 overflow-hidden relative font-sans" id="mainFooter">
      {/* Signature Watermark */}
      <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] opacity-[0.02] pointer-events-none select-none z-0">
        <img
          src="https://site-generator-documents.s3.eu-north-1.amazonaws.com/TAT+Logoo.png"
          alt=""
          className="w-full h-full object-contain grayscale brightness-200"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-20">
          
          {/* Institution Identity & Contact */}
          <div className="space-y-12">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-full bg-white/5 p-1 flex items-center justify-center border border-white/5">
                <img
                  src="https://site-generator-documents.s3.eu-north-1.amazonaws.com/TAT+Logoo.png"
                  alt="Trident Academy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-3xl font-black tracking-tight leading-none uppercase">Trident</span>
                <span className="text-[10px] font-bold text-white/30 tracking-[0.3em] uppercase mt-2">Academy of Technology</span>
              </div>
            </div>

            <p className="text-[14px] leading-relaxed text-white/40 max-w-sm font-medium">
              Empowering the next generation of global leaders through world-class technical education, innovative research, and an unwavering commitment to excellence.
            </p>

            <div className="space-y-6 pt-4">
              {[
                { icon: 'ph ph-map-pin', text: 'F2/A, Chandaka Industrial Estate, Infocity, Bhubaneswar, Odisha, Pin: 751024, India' },
                { icon: 'ph ph-phone', text: '+91 98611 91195' },
                { icon: 'ph ph-envelope-simple', text: 'info@trident.ac.in' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-xl text-white/30 group-hover:text-brand-gold group-hover:border-brand-gold/40 group-hover:bg-brand-gold/5 transition-all duration-300">
                    <i className={item.icon}></i>
                  </div>
                  <span className="text-[14px] leading-snug pt-3 text-white/50 group-hover:text-white transition-colors duration-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:pl-10">
            <h5 className="font-display text-[11px] font-bold tracking-[0.25em] uppercase text-white mb-10 border-b border-white/10 pb-4 inline-block">Academics</h5>
            <ul className="space-y-5">
              {academicsLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-[14px] font-medium text-white/30 hover:text-brand-gold hover:translate-x-1 inline-block transition-all duration-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-display text-[11px] font-bold tracking-[0.25em] uppercase text-white mb-10 border-b border-white/10 pb-4 inline-block">Campus Life</h5>
            <ul className="space-y-5">
              {campusLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-[14px] font-medium text-white/30 hover:text-brand-gold hover:translate-x-1 inline-block transition-all duration-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-display text-[11px] font-bold tracking-[0.25em] uppercase text-white mb-10 border-b border-white/10 pb-4 inline-block">Resources</h5>
            <ul className="space-y-5">
              {resourcesLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-[14px] font-medium text-white/30 hover:text-brand-gold hover:translate-x-1 inline-block transition-all duration-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="py-12 border-t border-white/5">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase whitespace-nowrap">
                © 2026 TRIDENT ACADEMY OF TECHNOLOGY. ALL RIGHTS RESERVED.
              </span>
              <div className="flex gap-8">
                {['Privacy Policy', 'Disclaimer', 'Terms of Use'].map(l => (
                  <a key={l} href="#" className="text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase hover:text-white transition-all duration-300">
                    {l}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-5">
              {['ph ph-facebook-logo', 'ph ph-twitter-logo', 'ph ph-linkedin-logo', 'ph ph-instagram-logo'].map((icon, i) => (
                <a key={i} href="#" className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-xl text-white/20 hover:text-white hover:border-brand-gold hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1">
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center border-t border-white/[0.02] pt-12 pb-12">
            <p className="text-[10px] font-bold tracking-[0.3em] text-white/10 uppercase">
              Designed for Academic Excellence &nbsp;|&nbsp; Powered by <span className="text-white/20">Tekkzy Technologies</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
