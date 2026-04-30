import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 100]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.3]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start">
      {/* Background Parallax */}
      <motion.div 
        style={{ y: y1, opacity, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury Architecture"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <motion.div
          style={{ 
            y: y2,
            scale: useTransform(scrollY, [0, 1000], [1, 1.4]),
            rotateY: 25,
            x: "10%"
          }}
          className="absolute top-[10%] right-0 w-[500px] h-[700px] hidden lg:block opacity-30 perspective-2000"
        >
          <img 
            src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=80&w=800" 
            alt="Tower Detail" 
            className="w-full h-full object-cover rounded-[50px] border border-amber-500/20 shadow-[0_0_100px_rgba(245,158,11,0.15)]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-brand-black via-transparent to-transparent" />
        </motion.div>
        
        <motion.div
          style={{ 
            y: y3,
            scale: useTransform(scrollY, [0, 1000], [1, 1.2]),
            rotateY: -25,
            x: "-10%"
          }}
          className="absolute bottom-0 left-0 w-[450px] h-[600px] hidden lg:block opacity-20 perspective-2000"
        >
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800" 
            alt="Residential Detail" 
            className="w-full h-full object-cover rounded-[50px] border border-white/20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-transparent to-transparent" />
        </motion.div>

        {/* Abstract Architectural Shapes */}
        <motion.div 
          style={{ y: useTransform(scrollY, [0, 1000], [0, -200]) }}
          className="absolute top-1/4 left-1/4 w-32 h-[1px] bg-blue-500/30 blur-[2px]" 
        />
        <motion.div 
          style={{ y: useTransform(scrollY, [0, 1000], [0, 400]) }}
          className="absolute bottom-1/3 right-1/4 w-[1px] h-64 bg-amber-500/20" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 inline-flex items-center px-4 py-1.5 rounded-full glass border border-white/10"
        >
          <span className="text-white/60 text-xs font-semibold uppercase tracking-widest"></span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display font-bold text-5xl md:text-8xl tracking-tight leading-[0.9] mb-8"
        >
          Building the <span className="text-glow">Future.</span><br />
          Shaping Skylines.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-2xl mx-auto text-white/50 text-base md:text-xl font-medium mb-12"
        >
          STAR INFRA is redefining modern living with innovative design, 
          precision engineering, and landmark developments across residential and commercial spaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="px-10 py-5 rounded-full bg-white text-brand-black font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center group">
            Explore Projects
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="px-10 py-5 rounded-full glass border border-white/10 hover:bg-white/5 transition-all text-lg font-medium">
            Our Legacy
          </button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-40">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"
        />
      </div>
    </section>
  );
};
