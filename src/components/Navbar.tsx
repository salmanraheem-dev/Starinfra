import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 ${
        scrolled ? 'bg-brand-black/80 backdrop-blur-md border-b border-white/5 py-3' : ''
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center group cursor-pointer">
          <img src="/logostarinfra.svg" alt="STAR INFRA" className="h-14 w-auto group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-500" />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="px-6 py-2.5 rounded-full glass border border-white/10 hover:border-white/30 transition-all text-xs font-bold uppercase tracking-widest">
          Connect
        </button>
      </div>
    </motion.nav>
  );
};
