/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { IntroAnimation } from './components/IntroAnimation';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CEOMessage } from './components/CEOMessage';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Force intro to show for a meaningful duration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-black overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <IntroAnimation key="intro" onComplete={() => setLoading(false)} />
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <Navbar />
            
            {/* Cursor Glow */}
            <div 
              className="pointer-events-none fixed z-30 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] transition-transform duration-300 ease-out"
              style={{ 
                transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
                left: 0,
                top: 0
              }}
            />

            <Hero />
            <About />
            <CEOMessage />
            <Projects />
            <Services />
            <WhyChooseUs />
            <Gallery />
            <Contact />
            
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
