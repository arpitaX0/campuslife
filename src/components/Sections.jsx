import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Zap, Shield, ArrowRight, Building, Home, Bus, Utensils, HeartPulse, Wifi, Monitor, GraduationCap } from 'lucide-react';

// --- Research Section ---
export const Research = () => (
  <section className="py-24" id="research">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-20 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-5xl mb-8 text-charcoal">
          <span className="relative inline-block">
            <span className="relative z-10">Architecting the <br /></span>
            <span className="bg-gradient-primary bg-clip-text text-transparent font-bold relative z-10">Next Frontier</span>
          </span>
        </h2>
        <p className="text-lg font-light text-charcoal/70 mb-8 max-w-lg leading-relaxed">
          Our research laboratories are the heart of Trident Academy, where Modern University Campus initiatives meet the rigors of breakthrough discovery.
        </p>
        <div className="flex gap-3 mb-10">
          {['AI & Robotics', 'Quantum Computing'].map(tag => (
            <span key={tag} className="px-4 py-1.5 bg-brand-gold/10 text-brand-gold rounded-full text-sm font-semibold border border-brand-gold/10">{tag}</span>
          ))}
        </div>
        <a href="#" className="bg-royal-blue text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:-translate-y-1 hover:shadow-lg">
          View Publications
        </a>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-lg overflow-hidden h-[500px] shadow-2xl"
      >
        <img src="https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&q=80&w=1200" alt="Research Lab" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
        <div className="absolute inset-0 bg-radial-gradient(circle at 70% 30%, rgba(31,197,224,0.15) 0%, transparent 60%) pointer-events-none"></div>
      </motion.div>
    </div>
  </section>
);

// --- Story Card Component ---
const StoryCard = ({ name, role, img, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="bg-white rounded-md overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all"
  >
    <img src={img} alt={name} className="w-full aspect-square object-cover" />
    <div className="p-6">
      <h5 className="font-heading text-lg text-royal-blue">{name}</h5>
      <p className="text-charcoal/60 text-sm">{role}</p>
    </div>
  </motion.div>
);

// --- Stories Section ---
export const Stories = () => (
  <section className="py-24 bg-soft-off-white" id="about">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
      <div className="text-center mb-16">
        <h2 className="font-heading text-5xl mb-6 text-royal-blue">
          <span className="relative inline-block">
            <span className="relative z-10">The Trident Journey</span>
          </span>
        </h2>
        <p className="text-charcoal/70 text-lg">Hear from the next generation of academic pioneers.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <StoryCard name="Elena Vance" role="Master of Computer Science" img="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400" delay={0.1} />
        <StoryCard name="David Chen" role="AI Research Fellow" img="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400" delay={0.2} />
        <StoryCard name="Samuel Marcus" role="Cyber Resilience Lead" img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" delay={0.3} />
        <StoryCard name="Isabella Thorne" role="Robotics Architect" img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" delay={0.4} />
      </div>
    </div>
  </section>
);




// --- Facilities Section ---
const FacilityCard = ({ icon: Icon, title, desc, img, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 group overflow-hidden"
  >
    <div className="relative h-56 overflow-hidden">
      <img 
        src={img} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-block/60 to-transparent"></div>
      <div className="absolute bottom-4 left-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20">
        <Icon size={24} />
      </div>
    </div>
    <div className="p-8">
      <h4 className="font-heading text-xl text-royal-blue mb-3 group-hover:text-brand-accent transition-colors">{title}</h4>
      <p className="text-charcoal/60 text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export const Facilities = () => (
  <section className="py-24 bg-soft-off-white" id="facilities">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
      <div className="text-center mb-16">
        <h2 className="font-heading text-5xl mb-6 text-charcoal">
          <span className="relative inline-block">
            <span className="relative z-10">World-Class Facilities</span>
          </span>
        </h2>
        <p className="text-charcoal/70 text-lg max-w-2xl mx-auto">Providing a sustainable and empowering environment for advanced engineering education and holistic growth.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <FacilityCard 
          icon={Building} 
          title="Modern Infrastructure" 
          desc="AICTE-standard classrooms and state-of-the-art laboratories designed for immersive learning." 
          img="/facilities/modern_infrastructure.png"
          delay={0.1} 
        />
        <FacilityCard 
          icon={Home} 
          title="Premium Hostels" 
          desc="In-campus safe residence with a capacity of 1200+ inmates and modern amenities." 
          img="/facilities/premium_hostels.png"
          delay={0.2} 
        />
        <FacilityCard 
          icon={Bus} 
          title="Safe Transport" 
          desc="Extensive fleet of buses ensuring reliable commute for students and staff across the city." 
          img="/facilities/safe_transport.png"
          delay={0.3} 
        />
        <FacilityCard 
          icon={Utensils} 
          title="Food Centers" 
          desc="Nutritious and hygienic dining options with multi-cuisine cafeterias on campus." 
          img="/facilities/food_centers.png"
          delay={0.4} 
        />
        <FacilityCard 
          icon={HeartPulse} 
          title="Healthcare" 
          desc="Dedicated health center with professional medical staff and emergency support systems." 
          img="/facilities/healthcare.png"
          delay={0.5} 
        />
        <FacilityCard 
          icon={Wifi} 
          title="Campus WiFi" 
          desc="High-speed internet connectivity across all institutional blocks and common areas." 
          img="/facilities/campus_wifi.png"
          delay={0.6} 
        />
        <FacilityCard 
          icon={Shield} 
          title="Security & Safety" 
          desc="24/7 campus surveillance and professional security personnel for a safe environment." 
          img="/facilities/security_safety.png"
          delay={0.7} 
        />
        <FacilityCard 
          icon={GraduationCap} 
          title="Scholarships" 
          desc="Comprehensive support systems including loans and merit-based institutional scholarships." 
          img="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800"
          delay={0.8} 
        />
        <FacilityCard 
          icon={Monitor} 
          title="ICT Classrooms" 
          desc="Digital-first learning environments equipped with modern audio-visual and smart tools." 
          img="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
          delay={0.9} 
        />
      </div>
    </div>
  </section>
);

// --- Campus Section ---
export const Campus = () => (
    <section className="py-24" id="campus">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-16">
          <h2 className="font-heading text-5xl mb-6 text-charcoal">
            <span className="relative inline-block">
              <span className="bg-gradient-primary bg-clip-text text-transparent font-bold relative z-10">Institutional Sanctum</span>
            </span>
          </h2>
          <p className="text-charcoal/70 text-lg">Designed for holistic development and unparalleled technical focus.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            { title: 'The Global Digital Commons', desc: 'An executive workspace for collaborative research.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200' },
            { title: 'The Creative Resilience Center', desc: 'Modern studio environments for conceptual design.', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200' }
          ].map((item, idx) => (
            <motion.div key={idx} initial={{ rotateX: -10, opacity: 0 }} whileInView={{ rotateX: 0, opacity: 1 }} viewport={{ once: true }} className="relative h-[500px] rounded-lg overflow-hidden group shadow-xl">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-block/90 via-transparent to-transparent p-10 flex flex-col justify-end">
                <h4 className="text-white font-heading text-2xl mb-2">{item.title}</h4>
                <p className="text-white/70">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

// --- Impact Section ---
export const Impact = () => (
  <section className="py-24 bg-navy-block border-t border-white/10 text-white text-center">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
      <h2 className="font-heading text-5xl mb-20 text-white">
        <span className="relative inline-block">
          <span className="bg-gradient-primary bg-clip-text text-transparent font-bold relative z-10">Global Impact 2026</span>
        </span>
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Award, val: '240+', label: 'Tech Awards' },
          { icon: Globe, val: '45k+', label: 'Elite Alumni' },
          { icon: Zap, val: '₹2B+', label: 'Funded Research' },
          { icon: Shield, val: '200+', label: 'Faculty Leads' }
        ].map((item, idx) => (
          <motion.div key={idx} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }} className="p-10 border-r border-white/10 last:border-r-0 relative group hover:bg-white/5 transition-all">
            <item.icon size={45} className="mx-auto mb-6 text-royal-blue group-hover:text-brand-accent transition-colors" />
            <h4 className="text-5xl font-heading mb-2 bg-gradient-primary bg-clip-text text-transparent">{item.val}</h4>
            <p className="text-white/60 tracking-wider font-semibold uppercase text-xs">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- Faculty Section ---
export const Faculty = () => (
  <section className="py-24 text-center" id="faculty">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
      <div className="mb-16">
        <h2 className="font-heading text-5xl mb-6 text-charcoal">
          <span className="relative inline-block">
            <span className="bg-gradient-primary bg-clip-text text-transparent font-bold relative z-10">Voices of Excellence</span>
          </span>
        </h2>
        <p className="text-charcoal/70 text-lg">Mentorship from the industry's most distinguished technical leaders.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        {[
          { name: 'Dr. Julian Thorne', role: 'Dean of Computer Science', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300' },
          { name: 'Prof. Sarah Vance', role: 'Director of Quantitative Finance', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300' },
          { name: 'Dr. Marcus Chen', role: 'Head of Cyber Security', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80&w=300' }
        ].map((item, idx) => (
          <motion.div key={idx} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: idx * 0.2 }} viewport={{ once: true }} className="group">
            <div className="w-[180px] h-[180px] rounded-full mx-auto mb-6 overflow-hidden border-[3px] border-cyan-500/30 transition-transform duration-500 group-hover:scale-105 shadow-xl">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <h4 className="font-heading text-2xl text-charcoal mb-1">{item.name}</h4>
            <p className="text-charcoal/60">{item.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- Quote Section ---
export const Quote = () => (
    <section className="py-24 text-center overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}>
          <h3 className="font-heading text-3xl md:text-5xl italic leading-tight mb-8 bg-gradient-primary bg-clip-text text-transparent max-w-5xl mx-auto">
            "Excellence is not a singular act, but a lineage of intentional masteries."
          </h3>
          <div className="w-[100px] h-[2px] bg-royal-blue mx-auto mb-6 opacity-30"></div>
          <p className="text-charcoal/60 uppercase tracking-widest text-sm font-semibold">Institutional Philosophy 2026</p>
        </motion.div>
      </div>
    </section>
  );

// --- CTA Section ---
export const CTA = () => (
  <section className="py-24 bg-soft-off-white" id="admissions">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-white rounded-lg p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl mb-8 text-charcoal">
            <span className="relative inline-block">
              <span className="relative z-10">Join the Global Standard</span>
            </span>
          </h2>
          <p className="text-charcoal/70 text-lg mb-10 max-w-2xl mx-auto">
            Admissions for the 2026 Academic Season are now open. Secure your place at the forefront of the technological revolution.
          </p>
          <a href="#" className="inline-block bg-[#0f1115] text-white px-10 py-4 rounded-full font-bold hover:bg-black transition-all hover:-translate-y-1 hover:shadow-xl">
             Application Portal
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);
