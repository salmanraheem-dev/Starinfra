import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: "The Celestial Towers",
    location: "Downtown Heights",
    image: "/assets/project_tower.png",
    category: "Residential"
  },
  {
    id: 2,
    name: "Zenith Hub",
    location: "Commercial District",
    image: "/assets/project_hub.png",
    category: "Commercial"
  },
  {
    id: 3,
    name: "Star Link Overpass",
    location: "Metroway",
    image: "/assets/project_bridge.png",
    category: "Infrastructure"
  },
  {
    id: 4,
    name: "Lumina Estates",
    location: "Suburban Greens",
    image: "/assets/project_estates.png",
    category: "Residential"
  }
];

const ProjectCard = ({ project, index }: { project: any, index: number, key?: any }) => {
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: target ? { current: target } : undefined,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    if (cardRef.current) setTarget(cardRef.current);
  }, []);

  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group relative h-[450px] md:h-[600px] overflow-hidden rounded-[30px] glass border border-white/5"
    >
      <motion.img 
        src={project.image} 
        alt={project.name}
        style={{ y: imgY }}
        className="absolute inset-[ -10%] w-[120%] h-[120%] object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
      
      <div className="absolute bottom-0 left-0 w-full p-10 flex items-end justify-between">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest mb-4 border border-white/10">
            {project.category}
          </span>
          <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-glow transition-all">{project.name}</h3>
          <div className="flex items-center text-white/40 text-sm">
            <MapPin className="w-4 h-4 mr-2" />
            {project.location}
          </div>
        </div>
        <div className="w-14 h-14 rounded-full glass flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 border border-white/20">
          <ArrowUpRight className="w-6 h-6" />
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center py-24 snap-start bg-brand-black/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-6 md:space-y-0">
          <div>
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4 block">Portfolio</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight">Our Projects</h2>
          </div>
          <p className="max-w-md text-white/40 font-medium">
            Discover our collection of landmark developments that prioritize luxury, functionality, and sustainability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
