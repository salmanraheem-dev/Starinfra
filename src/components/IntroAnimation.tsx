import { motion } from 'motion/react';

interface IntroAnimationProps {
  onComplete: () => void;
  key?: string;
}

export const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const buildingVariants = {
    initial: { y: "100%", opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 2.5,
        delay: i * 0.1,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for premium feel
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.1,
        transition: { duration: 1.5, ease: "easeInOut" } 
      }}
      className="fixed inset-0 z-[100] bg-brand-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Particles/Glow */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 blur-[150px] rounded-full" 
        />
      </div>

      {/* Architectural Silhouettes (Golden Rise) */}
      <div className="absolute inset-0 flex items-end justify-center px-4 space-x-1 sm:space-x-4 z-10 opacity-60 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={buildingVariants}
            initial="initial"
            animate="animate"
            className="w-2 sm:w-16 bg-gradient-to-t from-amber-600/40 via-amber-200/10 to-transparent rounded-t-[10px] sm:rounded-t-[30px]"
            style={{ 
              height: `${20 + (Math.sin(i * 1.5) + 1) * 30}vh`,
            }}
          >
            {/* Window-like grid lines */}
            <div className="w-full h-full p-2 opacity-10">
              <div className="grid grid-cols-2 gap-2 h-full">
                {[...Array(10)].map((_, j) => (
                  <div key={j} className="w-full h-1 bg-amber-200" />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Logo Reveal */}
      <div className="relative z-20 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="relative mb-8">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-12 border border-amber-500/10 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border border-white/5 rounded-full"
            />
            <img 
              src="/logostarinfra.svg" 
              alt="STAR INFRA" 
              className="w-64 h-auto drop-shadow-[0_0_60px_rgba(245,158,11,0.3)] relative z-10" 
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="flex flex-col items-center space-y-4"
          >
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-amber-500/50 to-transparent" />
            <h2 className="font-display font-medium text-amber-500/60 tracking-[0.6em] uppercase text-[10px] sm:text-xs">
              Legacy of Excellence
            </h2>
            <p className="text-[9px] text-white/20 tracking-[1em] uppercase">Est. 2001</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Shimmer Effect */}
      <motion.div
        animate={{
          x: ["-100%", "100%"],
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: 0.5
        }}
        className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent -rotate-12 blur-2xl z-30"
      />
    </motion.div>
  );
};
