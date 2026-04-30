import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center py-32 snap-start border-t border-white/5 bg-gradient-to-b from-brand-black to-brand-black/95 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4 block">Let's Connect</span>
            <h2 className="font-display font-bold text-4xl md:text-7xl tracking-tight mb-8 leading-none">
              Start Your Project<br />With <span className="text-glow">Us.</span>
            </h2>
            <p className="text-white/40 text-lg mb-12 max-w-md">
              Whether you have a question about our developments or looking for a premium investment opportunity, our team is ready to assist.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0 border-white/10">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-1">Our Headquarters</h4>
                  <p className="text-white/40 text-sm">Sadashivanagar, Kunigal Main Road<br />Tumakuru - 572105</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0 border-white/10">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-1">Phone</h4>
                  <p className="text-white/40 text-sm">+91 9448332928<br />Mon - Sat, 9am - 7pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0 border-white/10">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-1">Email</h4>
                  <p className="text-white/40 text-sm">hello@starinfra.com<br />inquiry@starinfra.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors border-white/10">
                  <Icon className="w-4 h-4 text-white/40" />
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-12 border-white/10"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/5 focus:border-white/20 focus:outline-none rounded-2xl px-6 py-4 text-sm transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/5 focus:border-white/20 focus:outline-none rounded-2xl px-6 py-4 text-sm transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-1">Project Interest</label>
                <select className="w-full bg-white/5 border border-white/5 focus:border-white/20 focus:outline-none rounded-2xl px-6 py-4 text-sm appearance-none cursor-pointer">
                  <option className="bg-brand-black">Residential</option>
                  <option className="bg-brand-black">Commercial</option>
                  <option className="bg-brand-black">Infrastructure</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-1">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your project..." 
                  className="w-full bg-white/5 border border-white/5 focus:border-white/20 focus:outline-none rounded-2xl px-6 py-4 text-sm transition-all resize-none"
                />
              </div>
              <button className="w-full py-5 rounded-full bg-white text-brand-black font-bold text-sm uppercase tracking-widest flex items-center justify-center group hover:scale-[1.02] active:scale-[0.98] transition-all">
                Send Message
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
