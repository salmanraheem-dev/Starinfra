import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Users, Building, Square, Award } from 'lucide-react';

export const About = () => {
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: target ? { current: target } : undefined,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    if (containerRef.current) setTarget(containerRef.current);
  }, []);

  const yBg = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const statsY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const stats = [
    { label: 'Projects Delivered', value: '50+', icon: Building },
    { label: 'Years of Excellence', value: '10+', icon: Award },
    { label: 'Sq Ft Developed', value: '1M+', icon: Square },
    { label: 'Happy Clients', value: '1000+', icon: Users },
  ];

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="min-h-screen flex items-center py-24 snap-start relative bg-brand-black"
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 opacity-10 pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=2070" 
          alt="Arch" 
          className="w-full h-full object-cover scale-125"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-template-columns-[1fr_1.2fr] gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4 block">Legacy & Excellence</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-8">
              About STAR INFRA
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              At STAR INFRA, we transform ideas into iconic structures. With years of expertise 
              in real estate and infrastructure development, we deliver projects that combine 
              design excellence, structural integrity, and long-term value.
            </p>
            <p className="text-white/40 leading-relaxed italic border-l-2 border-white/10 pl-6">
              "Our mission is to create spaces that inspire, endure, and redefine the skyline 
              of modern urbanization."
            </p>
          </motion.div>

          <motion.div 
            style={{ y: statsY }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card p-8 flex flex-col items-start space-y-4 hover:border-blue-500/30 group"
              >
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-blue-500/10 transition-colors">
                  <stat.icon className="w-6 h-6 text-white/60 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold mb-1 tracking-tighter group-hover:text-glow">{stat.value}</h3>
                  <p className="text-white/40 text-sm font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
