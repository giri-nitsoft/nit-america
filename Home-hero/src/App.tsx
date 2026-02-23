import { motion, useScroll, useTransform, useMotionTemplate } from "motion/react";
import { useEffect, useState } from "react";
import { Asterisk } from "lucide-react";
import Typewriter from "./components/Typewriter";

export default function App() {
  const { scrollY } = useScroll();
  
  // Transform logo scale based on scroll position
  // 288 / 900 = 0.32
  const logoScale = useTransform(scrollY, [0, 400], [1, 0.32]);
  
  // Adjust position to center perfectly in the 80px GNB
  // Initial padding is 32px (p-8). GNB height is 80px. 
  // Scaled logo height is 32px. Target top is (80-32)/2 = 24px.
  // So we need to move it -8px vertically.
  const logoY = useTransform(scrollY, [0, 400], [0, -8]);
  const logoX = useTransform(scrollY, [0, 400], [0, 0]);

  // GNB Background and Elements opacity
  const navOpacity = useTransform(scrollY, [150, 300], [0, 1]);
  const navBorderAlpha = useTransform(scrollY, [150, 300], [0, 0.1]);
  const navBorder = useMotionTemplate`rgba(0,0,0,${navBorderAlpha})`;
  
  // Opacity for the main text as we scroll
  const textOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const textY = useTransform(scrollY, [0, 200], [0, -50]);

  // Animation variants for the masked reveal
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="min-h-[200vh] bg-[#F5F5F3] text-[#1A1A1A] font-sans selection:bg-black selection:text-white">
      {/* GNB Background */}
      <motion.nav 
        style={{ opacity: navOpacity, borderBottomColor: navBorder }}
        className="fixed top-0 left-0 w-full h-20 bg-[#F5F5F3]/80 backdrop-blur-md z-40 border-b"
      >
        <div className="h-full max-w-[1440px] mx-auto px-8 md:px-12 flex items-center justify-end gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#" className="hover:opacity-50 transition-opacity">Messaging</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Licensing&Distribution</a>
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-black/80 transition-colors ml-4">Contact</button>
        </div>
      </motion.nav>

      {/* Navigation / Logo Container */}
      <header className="fixed top-0 left-0 w-full z-50 p-8 md:px-12 pointer-events-none">
        <motion.a 
          href="/"
          style={{ 
            scale: logoScale,
            x: logoX,
            y: logoY,
            originX: 0,
            originY: 0
          }}
          className="pointer-events-auto inline-block group"
        >
          <div 
            style={{ width: 900, height: 100 }} 
            className="flex items-center justify-start transition-opacity group-hover:opacity-70"
          >
            <h1 className="text-[100px] font-black tracking-[-0.05em] leading-none uppercase">
              NITAMERICA
            </h1>
          </div>
        </motion.a>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-end items-end px-8 md:px-24 pb-32 overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity: textOpacity, y: textY }}
          className="max-w-full text-right"
        >
          <div className="overflow-hidden py-1">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A1A]"
            >
              <Typewriter text="Messaging" minWidth="9ch" /> infrastructure
            </motion.h2>
          </div>
          <div className="overflow-hidden py-1">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A1A]"
            >
              that scales.
            </motion.h2>
          </div>
          
          <div className="h-8 md:h-12" />

          <div className="overflow-hidden py-1">
            <motion.div 
              variants={itemVariants}
              className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A1A] flex items-center justify-end gap-3 md:gap-6"
            >
              <span>Launch</span>
              <span className="inline-block w-20 h-10 md:w-32 md:h-16 bg-black rounded-full relative overflow-hidden" aria-hidden="true">
                <motion.span 
                  animate={{ 
                    x: [-24, 24],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 1.6, 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Asterisk className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] text-white" />
                </motion.span>
              </span>

              <span>brands</span>


            </motion.div>
          </div>
          <div className="overflow-hidden py-1">
            <motion.p 
              variants={itemVariants}
              className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A1A]"
            >
              in Korea.
            </motion.p>
          </div>

        </motion.div>







        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-8 md:left-24 flex items-center gap-4 text-sm uppercase tracking-widest font-medium opacity-40"
        >
          <div className="w-px h-12 bg-black/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-1/3 bg-black"
            />
          </div>
          <span>Scroll to explore</span>
        </motion.div>
      </section>

      {/* Content Section (to enable scrolling) */}
      <section className="px-8 md:px-24 py-32 grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="space-y-8">
          <h3 className="text-4xl font-medium">Built for Speed</h3>
          <p className="text-xl text-black/60 leading-relaxed">
            Our infrastructure is optimized for the unique landscape of the Korean digital ecosystem, ensuring your messages reach their destination instantly.
          </p>
        </div>
        <div className="space-y-8">
          <h3 className="text-4xl font-medium">Localized Expertise</h3>
          <p className="text-xl text-black/60 leading-relaxed">
            Beyond technology, we offer the cultural and regulatory insights necessary to succeed in Korea's competitive market.
          </p>
        </div>
      </section>

      <footer className="p-8 md:p-24 border-t border-black/5 flex justify-between items-center text-sm opacity-40 uppercase tracking-widest">
        <span>© 2024 NITAMERICA</span>
        <span>Seoul / Los Angeles</span>
      </footer>
    </div>
  );
}

