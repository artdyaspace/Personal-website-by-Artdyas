import React from 'react';
import { motion } from 'framer-motion';
import InteractiveText from './InteractiveText';

const HeroSection: React.FC = () => {
  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      {/* Background animated orbs */}
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.55) 0%, transparent 70%)',
          filter: 'blur(30px)',
          top: '20%',
          left: '10%'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-48 h-48 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(145, 94, 208, 0.3) 0%, transparent 70%)',
          filter: 'blur(30px)',
          top: '60%',
          right: '15%'
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.1, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />

      <motion.div
        className="absolute w-32 h-32 rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(145, 94, 208, 0.2) 0%, transparent 70%)',
          filter: 'blur(30px)',
          top: '30%',
          right: '25%'
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.4, 0.25]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      />

      {/* Main content */}
      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Welcome text */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-[#B3F2FF] mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to
        </motion.h2>

        {/* Artdyas with interactive gradient */}
        <motion.h1
          className="text-5xl md:text-8xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <InteractiveText
            text="Artdyas"
            className="bg-gradient-to-r from-[#9747FF] to-[#00A5CA] bg-clip-text text-transparent"
          />
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-[#5FAFBF] mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Architectural designer, Graphic Designer & 3D Visualization specialist crafting spaces that blend innovation with functionality.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.button
            onClick={() => handleScrollTo('contact')}
            className="px-8 py-3 bg-[#00A5CA] text-black font-medium rounded-xl hover:bg-[#0BA7D0] transition-all duration-300 shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0, 165, 202, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.button>

          <motion.button
            onClick={() => handleScrollTo('projects')}
            className="px-8 py-3 border border-[#00A5CA] text-[#00A5CA] font-medium rounded-xl hover:bg-[#00A5CA] hover:text-black transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#00A5CA',
              color: '#000000'
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
