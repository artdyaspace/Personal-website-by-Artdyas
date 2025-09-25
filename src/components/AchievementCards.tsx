import React from 'react';
import { motion } from 'framer-motion';

interface Achievement {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  fallbackImage: string;
  gradientFrom: string;
  gradientTo: string;
}

const AchievementCards: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
     
      title: "Participant - ACSENT UDAYANA 2024",
      subtitle: "Sustainable Slum Design Competition by Department of Arch, UDAYANA",
      description: "Team of 3 : Role Concept and Construction Drawing",
      image: "https://drive.google.com/thumbnail?id=1SRzmUD75DIYSZtv0qUBeob0Kf9HbJZGL&sz=w1000",
      fallbackImage: "https://via.placeholder.com/300x400/9747FF/FFFFFF?text=Logo+Design",
      gradientFrom: "#D9D9D9",
      gradientTo: "#999999"
    },
    {
      id: 2,
      title: "Top 20 - WARMADEWA ARCHITECTURE WEEK #7",
      subtitle: "Community Library Design Competition by Department of Architecture, Warmadewa",
      description: "Solo Competition",
      image: "https://drive.google.com/thumbnail?id=19xxT7K5azMTgbFSkBHG1HSjKbWlA8Ps3&sz=w1000",
      fallbackImage: "https://via.placeholder.com/300x400/00A5CA/FFFFFF?text=Competition",
      gradientFrom: "#9747FF",
      gradientTo: "#737373"
    },
    {
      id: 3,
      title: "Top 10 Best Design - MORPH ARCHPROJECT 2023",
      subtitle: "Public space design competition by Department of Architecture, ITS",
      description: "Team of 2 : Role Concept and Construction Drawing",
      image: "https://drive.google.com/thumbnail?id=1PoUApiPY4QsyTPbGqpBR4PZmciQnGkyP&sz=w1000",
      fallbackImage: "https://via.placeholder.com/300x400/6362EE/FFFFFF?text=Architecture",
      gradientFrom: "#9747FF",
      gradientTo: "#BCBCBC"
    },
    {
      id: 4,
      title: "Architecture Internship on Mr. Arsitek Semarang",
      subtitle: "Periode Jan - Feb 2024",
      description: "Develop denah and visualize 3D",
      image: "https://drive.google.com/thumbnail?id=1V1lnz8TsDQ58EAce_FHdqQqFHsuK-Ql4&sz=w1000",
      fallbackImage: "https://via.placeholder.com/300x400/B3F2FF/000000?text=Content+Creator",
      gradientFrom: "#D9D9D9",
      gradientTo: "#999999"
    },
    {
      id: 5,
      title: "Ikatan Mahasiswa Berprestasi Wonogiri",
      subtitle: "Periode 2021 - 2022 dan 2023 -2024",
      description: "Member",
      image: "https://drive.google.com/thumbnail?id=1fKtA4ec-ctlcKmrpiG5xBLpwxDWEg8Ki&sz=w1000",
      fallbackImage: "https://via.placeholder.com/300x400/0BA7D0/FFFFFF?text=Organization",
      gradientFrom: "#D9D9D9",
      gradientTo: "#999999"
    },
    {
      id: 6,
      title: "Content Creator",
      subtitle: "Artdyas",
      description: "based on TikTok",
      image: "https://drive.google.com/thumbnail?id=1nfQC02sChqjRa2wqqQwee0GcJ7RYitUD&sz=w1000",
      fallbackImage: "https://via.placeholder.com/300x400/9747FF/FFFFFF?text=Internship",
      gradientFrom: "#8A38F5",
      gradientTo: "#FFFFFF"
    },
    {
      id: 9,
      title: "Make logo and branding",
      subtitle: "Kayla Course",
      description: "Adobe illustrator | Canva",
      image: "https://drive.google.com/thumbnail?id=1sYKE8W5lZUa3OY0TWmIsBqeguvcZDPX8&sz=w1000",
      fallbackImage: "https://via.placeholder.com/300x400/B3F2FF/000000?text=Kayla+Course+Logo",
      gradientFrom: "#2B2B2B",
      gradientTo: "#BCBCBC"
    },
    {
      id: 8,
      title: "Build website portfolio",
      subtitle: "Artdyas",
      description: "Based on figma",
      image: "https://drive.google.com/thumbnail?id=1OKvFSYXMW45i54E64d9L36AHSWPDPCAg&sz=w400",
      fallbackImage: "https://via.placeholder.com/300x400/6362EE/FFFFFF?text=Website+Portfolio",
      gradientFrom: "#FFFFFF",
      gradientTo: "#999999"
    },
    {

      id: 7,
      title: "Re-branding Logo",
      subtitle: "Artdyas",
      description: "Adobe illustrator | Canva",
      image: "",
      fallbackImage: "https://via.placeholder.com/300x400/00A5CA/FFFFFF?text=Competition",
      gradientFrom: "#9247F3",
      gradientTo: "#1E1D1E"
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackImage: string) => {
    const target = e.target as HTMLImageElement;
    target.src = fallbackImage;
  };

  return (
    <div className="relative">
      <motion.div
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        drag="x"
        dragConstraints={{ left: -2000, right: 0 }}
        dragElastic={0.1}
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            className="flex-shrink-0 w-64 h-80 rounded-2xl overflow-hidden relative cursor-pointer group"
            style={{
              background: `linear-gradient(180deg, ${achievement.gradientFrom} 0%, ${achievement.gradientTo}00 100%)`
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            {/* Background Image */}
            <img
              src={achievement.image}
              alt={achievement.title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => handleImageError(e, achievement.fallbackImage)}
              loading="lazy"
            />

            {/* Content */}
            <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
              <motion.h4
                className="text-white font-semibold text-sm mb-2 leading-tight"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {achievement.title}
              </motion.h4>
              
              <motion.p
                className="text-white/90 text-xs mb-2 leading-tight"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {achievement.subtitle}
              </motion.p>
              
              <motion.p
                className="text-white/80 text-xs"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {achievement.description}
              </motion.p>
            </div>

            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[#9747FF]/20 to-[#00A5CA]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-[#5FAFBF] text-sm">
          ← Drag to explore more achievements →
        </p>
      </motion.div>
    </div>
  );
};

export default AchievementCards;
