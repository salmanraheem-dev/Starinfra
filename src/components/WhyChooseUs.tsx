import { motion } from 'motion/react';
import { ShieldCheck, Clock, Layers, Rocket } from 'lucide-react';

const reasons = [
  {
    title: "Trusted by Hundreds",
    desc: "A proven track record of delivering excellence across major developments.",
    icon: ShieldCheck
  },
  {
    title: "On-Time Delivery",
    desc: "Precision scheduling and project management to meet every deadline.",
    icon: Clock
  },
  {
    title: "Premium Construction",
    desc: "Sourcing high-end materials and utilizing advanced engineering methods.",
    icon: Layers
  },
  {
    title: "Innovative Designs",
    desc: "Architecture that pushes boundaries and sets new urban trends.",
    icon: Rocket
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="min-h-screen flex items-center py-24 snap-start relative">
      <div className="container mx-auto px-6">
        <div className="glass-card p-12 md:p-20 relative overflow-hidden border-white/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] -mr-32 -mt-32 rounded-full" />
          
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 relative z-10">
            <div>
              <span className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4 block">The Advantage</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-8">
                Why Choose<br /><span className="text-glow">STAR INFRA?</span>
              </h2>
              <p className="text-white/60 mb-10 text-lg">
                We combine industry-leading innovation with a commitment to 
                transparency and structural perfection.
              </p>
              <button className="px-8 py-4 rounded-full bg-white text-brand-black font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform">
                Read Reviews
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, i) => (
                <div key={reason.title} className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    <h3 className="font-display font-bold text-lg">{reason.title}</h3>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
