import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const CEOMessage = () => {
  return (
    <section className="min-h-screen flex items-center relative snap-start bg-brand-black">
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="glass-card overflow-hidden border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.4)]">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* CEO Image Container */}
            <motion.div 
              initial={{ opacity: 0, x: -20, rotateY: -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative min-h-[500px] sm:min-h-[600px] lg:h-[800px] overflow-hidden group perspective-2000"
            >
              <motion.div
                whileHover={{ rotateY: 5, rotateX: -2, scale: 1.02 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full"
              >
                <img 
                  src="/assets/ceo.png" 
                  alt="NASEER AHMED" 
                  className="w-full h-full object-cover object-center lg:object-[center_20%] filter contrast-110 brightness-90 transition-all duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1500";
                  }}
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent lg:hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-brand-black/60 hidden lg:block" />
            </motion.div>

            {/* Content Container */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="p-10 md:p-20 flex flex-col justify-center relative"
            >
              <Quote className="w-12 h-12 text-blue-500/20 absolute top-10 right-10" />
              
              <span className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-6 block">Visionary Leadership</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight mb-8 leading-tight">
                "Our promise is more than just steel and glass; it's the foundation of <span className="text-glow">generations.</span>"
              </h2>
              
              <div className="space-y-6 text-white/50 text-lg leading-relaxed mb-10">
                <p>
                  At STAR INFRA, we believe that architecture is the silent narrator of progress. 
                  Every project we undertake is a pledge to structural integrity and aesthetic 
                  pioneering.
                </p>
                <p>
                  We don't just build skyscrapers; we build trust. Our commitment to sustainability 
                  and innovation ensures that every landmark we create contributes positively to 
                  the urban ecosystem and the lives of those within it.
                </p>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-16 h-[1px] bg-white/20" />
                <div>
                  <h4 className="font-display font-bold text-xl tracking-tight uppercase">NASEER AHMED</h4>
                  <p className="text-blue-400 text-xs uppercase font-bold tracking-widest mt-1">Class 1 PWD Contractor & Founder</p>
                </div>
              </div>

              {/* Signature (Fake/SVG styled) */}
              <div className="mt-8 opacity-40">
                <span className="font-serif italic text-3xl text-white/30 select-none">Naseer Ahmed</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
