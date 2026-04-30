import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const galleryItems = [
  {
    title: "Celestial Towers",
    desc: "Luxury redefined in the heart of the city.",
    img: "/assets/gallery_1.png",
    color: "#0f172a"
  },
  {
    title: "Zenith Hub",
    desc: "The future of commercial architecture.",
    img: "/assets/gallery_2.png",
    color: "#1e1b4b"
  },
  {
    title: "Lumina Estates",
    desc: "Eco-friendly living spaces for the modern family.",
    img: "/assets/gallery_3.png",
    color: "#164e63"
  },
  {
    title: "The Helix Bridge",
    desc: "Pioneering infrastructure for urban connectivity.",
    img: "/assets/gallery_4.png",
    color: "#3730a3"
  },
  {
    title: "Urban Oasis",
    desc: "Sustainable design meets structural perfection.",
    img: "/assets/gallery_5.png",
    color: "#0c4a6e"
  }
];

const GalleryCard = ({ item, index, progress }: { item: any, index: number, progress: any, key?: any }) => {
  // Range partitions for the scrub animation
  const start = index * 0.2;
  const end = (index + 1) * 0.2;
  
  const scale = useTransform(progress, [Math.min(1, end), Math.min(1, end + 0.1)], [1, 0.9]);
  const opacity = useTransform(progress, [Math.min(1, end), Math.min(1, end + 0.1)], [1, 0.4]);
  const blur = useTransform(progress, [Math.min(1, end), Math.min(1, end + 0.1)], [0, 10]);
  const y = useTransform(progress, [Math.max(0, start - 0.1), Math.max(0, start)], ["100vh", "0vh"]);

  return (
    <div className="h-screen w-full snap-start snap-always sticky top-0 flex items-center justify-center p-4">
      <motion.div
        style={{ 
          y: index === 0 ? 0 : y, 
          scale,
          opacity,
          filter: `blur(${blur}px)`,
          zIndex: index + 10
        }}
        className="relative w-full max-w-[90vw] h-[85vh] rounded-[40px] overflow-hidden glass border border-white/10 group shadow-[0_0_100px_rgba(0,0,0,0.5)]"
      >
        <motion.img 
          src={item.img} 
          alt={item.title}
          style={{ scale: 1.1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full object-cover opacity-50 transition-all duration-1000 grayscale hover:grayscale-0"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-${index === 0 ? '1486406146926-c627a92ad1ab' : index === 1 ? '1449824913935-59a10b8d2000' : '1545324418-cc1a3fa10c00'}?auto=format&fit=crop&q=80&w=2070`;
          }}
        />
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:p-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4 block">
               Premium Portfolio Series 0{index + 1}
            </span>
            <h3 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-glow tracking-tighter leading-[0.85]">
              {item.title.split(' ').map((word: string, i: number) => (
                <span key={i} className={i % 2 === 1 ? "text-white/20" : "text-white"}>
                  {word}{' '}
                </span>
              ))}
            </h3>
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-12">
              <p className="max-w-md text-white/50 text-sm md:text-base font-medium leading-relaxed">
                {item.desc}
              </p>
              <div className="h-px w-20 bg-amber-500/30 hidden md:block" />
              <button className="text-white font-bold uppercase tracking-widest text-[10px] flex items-center group">
                View Blueprint
                <div className="ml-4 w-10 h-px bg-white/20 group-hover:w-20 transition-all duration-500" />
              </button>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute top-8 right-8 font-display text-white/10 text-6xl md:text-9xl font-bold leading-none select-none">
          0{index + 1}
        </div>
      </motion.div>
    </div>
  );
};

export const Gallery = () => {
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: target ? { current: target } : undefined,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    if (containerRef.current) {
      setTarget(containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative bg-brand-black">
      <div className="h-screen sticky top-0 flex items-center justify-center z-0 pointer-events-none">
        <h2 className="font-display font-bold text-[15vw] text-white opacity-[0.01] uppercase leading-none whitespace-nowrap">
          Masterpieces
        </h2>
      </div>

      <div className="relative z-10 h-[500vh]">
        {galleryItems.map((item, i) => (
          <GalleryCard 
            key={i} 
            item={item} 
            index={i} 
            progress={scrollYProgress} 
          />
        ))}
      </div>
    </section>
  );
};
