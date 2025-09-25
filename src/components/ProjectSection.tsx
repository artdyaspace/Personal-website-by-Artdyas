import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  fallbackImage: string;
  tools: string[];
  type: 'Architecture' | 'Render' | 'Graphic';
}

const ProjectSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Titik Temu",
      category: "Public Building",
      description: "Multi-purpose public building design emphasizing community interaction.",
      image: "https://drive.google.com/thumbnail?id=1qanw17LCqxo77H4_KgyfxUyGAO5lALcd&sz=w400",
      fallbackImage: "https://via.placeholder.com/428x302/00A5CA/FFFFFF?text=Titik+Temu",
      tools: ["AutoCad", "Sketchup", "Enscape"],
      type: "Architecture"
    },
    {
      id: 2,
      title: "SUDUT",
      category: "House Residential",
      description: "Compact house design with industrialist concept and flexible furniture arrangements.",
      image: "https://drive.google.com/thumbnail?id=15CLcHY9Jdhrevyub3any_1bgXex20ZgG&sz=w400",
      fallbackImage: "https://via.placeholder.com/428x302/9747FF/FFFFFF?text=SUDUT",
      tools: ["AutoCad", "Sketchup", "Enscape"],
      type: "Architecture"
    },
    {
      id: 3,
      title: "Bilik Batok",
      category: "Public Building",
      description: "Multi-purpose public building design emphasizing community interaction.",
      image: "https://drive.google.com/thumbnail?id=1rzYIsDUmlON0_xiSdsX2brZsmt7Xbr5S&sz=w400",
      fallbackImage: "https://via.placeholder.com/428x302/6362EE/FFFFFF?text=Bilik+Batok",
      tools: ["AutoCad", "Sketchup", "Enscape"],
      type: "Architecture"
    },
    {
      id: 4,
      title: "Kantor Bank KCP",
      category: "Commercial",
      description: "Modern bank branch design with sustainable principles and efficient circulation.",
      image: "https://drive.google.com/thumbnail?id=1x1V4-YcWuGT7BoFqssQki-pV-cncnQ9s&sz=w400",
      fallbackImage: "https://via.placeholder.com/428x302/0BA7D0/FFFFFF?text=Bank+KCP",
      tools: ["AutoCad", "Sketchup", "Enscape"],
      type: "Architecture"
    },
    {
      id: 5,
      title: "Rassada Exposed",
      category: "Community Building",
      description: "Community center for disabled individuals with multisensory design approach.",
      image: "https://drive.google.com/thumbnail?id=1EEHHZhbYGeqvv-qUTK7ZR9NX9ItlRx8R&sz=w400",
      fallbackImage: "https://via.placeholder.com/428x302/B3F2FF/000000?text=Rassada",
      tools: ["AutoCad", "Sketchup", "Enscape"],
      type: "Render"
    },
    {
      id: 6,
      title: "Jogja Tempoart",
      category: "Cultural Building",
      description: "Contemporary art space with flexible architecture and educational-interactive design.",
      image: "https://drive.google.com/thumbnail?id=1k1I4CsIWBZxGsP56eXsUTT-94CBgzQ02&sz=w400",
      fallbackImage: "https://via.placeholder.com/428x302/8A38F5/FFFFFF?text=Tempoart",
      tools: ["AutoCad", "Sketchup", "Enscape"],
      type: "Render"
    }
  ];

  const filters = ['All', 'Architecture', 'Render', 'Graphic'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackImage: string) => {
    const target = e.target as HTMLImageElement;
    target.src = fallbackImage;
  };

  return (
    <section id="projects" className="relative min-h-screen px-6 py-20 bg-[#070A13]">
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
          top: '60%',
          right: '10%'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.15, 0.25]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-[#0BA7D0] mb-6">
            Recently Works
          </h2>
          <p className="text-[#5FAFBF] text-lg max-w-4xl mx-auto mb-8">
            Explore my recently works of designs, from architecture design, 3d visualize, and graphic design. Each crafted with attention to detail and innovative solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#9747FF] to-[#0BA7D0] p-1 rounded-full">
            <div className="bg-[#070A13] rounded-full px-2 py-2">
              {filters.map((filter, index) => (
                <motion.button
                  key={filter}
                  className={`px-6 py-2 mx-1 font-bold text-lg rounded-full transition-all duration-300 ${
                    activeFilter === filter 
                      ? 'text-white bg-gradient-to-r from-[#9747FF] to-[#0BA7D0]' 
                      : 'text-white hover:text-[#00A5CA]'
                  }`}
                  onClick={() => setActiveFilter(filter)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(151, 71, 255, 0.2)"
                }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => handleImageError(e, project.fallbackImage)}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#00A5CA] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-[#AFECF9] text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#457C8B] text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tools */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="bg-gray-800/50 text-[#457C8B] px-2 py-1 rounded text-xs font-bold border border-gray-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* View All Project Button - MOVED HERE */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-3 border border-[#00A5CA] text-[#2287C6] font-medium rounded-2xl hover:bg-[#00A5CA] hover:text-white transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#00A5CA',
              color: '#FFFFFF'
            }}
            whileTap={{ scale: 0.95 }}
          >
            View All Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
