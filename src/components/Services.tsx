import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Home, Briefcase, Zap, Settings } from 'lucide-react';

const services = [
  {
    title: "Residential Developments",
    desc: "Luxury living spaces designed for comfort, modern aesthetics, and community living.",
    icon: Home
  },
  {
    title: "Commercial Spaces",
    desc: "Innovative corporate hubs and retail spaces that empower business growth and branding.",
    icon: Briefcase
  },
  {
    title: "Infrastructure Projects",
    desc: "Large-scale urban infrastructure including bridges, roads, and modern transit terminals.",
    icon: Zap
  },
  {
    title: "Turnkey Solutions",
    desc: "End-to-end design and construction management for seamless project delivery.",
    icon: Settings
  }
];

export const Services = () => {
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: target ? { current: target } : undefined,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    if (containerRef.current) setTarget(containerRef.current);
  }, []);

  const yBg = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section id="services" ref={containerRef} className="min-h-screen flex items-center py-24 snap-start relative">
      {/* Decorative Blur & Parallax Bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
      
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2070" 
          alt="Arch" 
          className="w-full h-full object-cover scale-150"
        />
      </motion.div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4 block">Expertise</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-6">Our Services</h2>
          <p className="max-w-2xl mx-auto text-white/40 font-medium">
            We provide a comprehensive range of development services, ensuring 
            unmatched quality at every stage of construction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-10 flex flex-col space-y-6 hover:bg-white/5 group border-white/5"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white transition-colors duration-500 shadow-[0_0_20px_rgba(255,255,255,0)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <service.icon className="w-6 h-6 text-white group-hover:text-brand-black transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
