import React from 'react';
import { motion } from 'framer-motion';
import DraggableIDCard from './DraggableIDCard';
import SoftwareSkills from './SoftwareSkills';
import AchievementCards from './AchievementCards';

const AboutSection: React.FC = () => {
  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/artdyas' },
    { name: 'Pinterest', icon: '📌', url: 'https://pinterest.com/artdyas' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/artdyas' }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="about" className="relative min-h-screen px-6 py-20">
      {/* Background animated orbs */}
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.55) 0%, transparent 70%)',
          filter: 'blur(30px)',
          top: '10%',
          left: '5%'
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-48 h-48 rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(145, 94, 208, 0.2) 0%, transparent 70%)',
          filter: 'blur(30px)',
          top: '40%',
          right: '10%'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.15, 0.25]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - ID Card & Socials */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <DraggableIDCard />
            
            {/* Social Icons */}
            <motion.div
              className="flex justify-center gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.button
                  key={social.name}
                  className="w-14 h-14 rounded-xl bg-white/10 p-0.5 hover:scale-110 transition-all duration-300 group"
                  onClick={() => handleSocialClick(social.url)}
                  whileHover={{ scale: 1.2, rotate: 10, boxShadow: "0 10px 25px rgba(151, 71, 255, 0.2)" }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="w-full h-full bg-[#070A13] rounded-lg flex items-center justify-center group-hover:bg-transparent transition-all duration-300">
                    <span className="text-xl text-white/50 group-hover:text-white transition-all duration-300">
                      {social.icon}
                    </span>
                  </div>
                </motion.button>
              ))}
            </motion.div>

          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Hi, I'm Herdiyas */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0BA7D0] mb-4">
                Hi, I'm{' '}
                <motion.span
                  className="text-white"
                  whileHover={{ 
                    color: '#00A5CA',
                    textShadow: '0px 0px 20px rgba(0, 165, 202, 0.8)'
                  }}
                >
                  Herdiyas
                </motion.span>
              </h2>
              
              <p className="text-[#5FAFBF] text-lg leading-relaxed">
                an Architecture graduate with a strong passion for design and technology. Besides architecture design, I enjoy working on graphic design and digital editing, where I can explore creativity from different angles.
              </p>
            </div>

            {/* Software Skills */}
            <SoftwareSkills />
          </motion.div>
        </div>

        {/* Achievement & Experience Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-[#B3F2FF] mb-8 text-center lg:text-left">
            Achievement & Experience
          </h3>
          <AchievementCards />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
