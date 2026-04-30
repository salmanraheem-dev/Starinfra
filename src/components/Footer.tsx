import { motion } from 'motion/react';
import { Instagram, Linkedin, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  const footerLinks = {
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Services', href: '#services' },
      { name: 'Projects', href: '#projects' },
      { name: 'Careers', href: '#' },
      { name: 'Sustainability', href: '#' },
    ],
    Legal: [
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Disclaimer', href: '#' },
    ],
    Support: [
      { name: 'Contact Support', href: '#' },
      { name: 'Office Locations', href: '#contact' },
      { name: 'FAQs', href: '#' },
      { name: 'Sitemap', href: '#' },
    ]
  };

  return (
    <footer className="min-h-screen flex flex-col justify-between py-24 border-t border-white/5 relative bg-brand-black shadow-[0_-50px_100px_rgba(0,0,0,0.5)] snap-start overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center group cursor-pointer">
              <img src="/logostarinfra.svg" alt="STAR INFRA" className="h-16 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
            </div>
            <p className="text-white/40 max-w-sm text-sm leading-relaxed">
              Established in 2001, STAR INFRA has been the benchmark of structural excellence and 
              architectural innovation for over two decades. We don't just build; we create legacies.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all border-white/10 group">
                  <Icon className="w-4 h-4 text-white/40 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-sm text-white/30 hover:text-white transition-colors flex items-center group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-white/20 uppercase tracking-widest font-medium">
            © 2026 STAR INFRA. Redefining skylines since 2001. All rights reserved.
          </p>
          <div className="flex items-center space-x-8 text-[10px] text-white/20 uppercase tracking-widest font-bold">
            <span className="flex items-center">
              <span className="w-1 h-1 rounded-full bg-blue-500 mr-2 shadow-[0_0_5px_rgba(59,130,246,1)]" />
              ISO 9001:2015 Certified
            </span>
            <span className="flex items-center">
              <span className="w-1 h-1 rounded-full bg-blue-500 mr-2 shadow-[0_0_5px_rgba(59,130,246,1)]" />
              Class 1 PWD Contractor
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-blue-500/5 blur-[150px] -z-10 rounded-full" />
    </footer>
  );
};
