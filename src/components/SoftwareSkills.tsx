import React from 'react';
import { motion } from 'framer-motion';

const SoftwareSkills: React.FC = () => {
  const skills = [
    { name: 'Sketchup', icon: '🏗️' },
    { name: 'AutoCad', icon: '📐' },
    { name: 'Enscape', icon: '🌟' },
    { name: 'Twinmotion', icon: '🎬' },
    { name: 'D5', icon: '💎' },
    { name: 'Canva', icon: '🎨' },
    { name: 'Figma', icon: '🎯' },
    { name: 'Photoshop', icon: '🖼️' },
    { name: 'Adobe Illustrator', icon: '✏️' }
  ];

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-bold text-[#B3F2FF] mb-6">
        Software Skills
      </h3>
      
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700/50 hover:border-[#00A5CA]/50 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(0, 165, 202, 0.1)',
              borderColor: '#00A5CA'
            }}
          >
            <div className="text-2xl mb-2">{skill.icon}</div>
            <p className="text-xs text-white/80 font-medium">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SoftwareSkills;
