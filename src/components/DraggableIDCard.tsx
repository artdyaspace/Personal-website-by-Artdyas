import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const DraggableIDCard: React.FC = () => {
  const constraintsRef = useRef(null);
  const profileImageUrl = "https://drive.google.com/thumbnail?id=1Jv843164Uv0gQKhKedw2zJx1XVvAc-Cd&sz=w400";
  const fallbackImageUrl = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=870&auto=format&fit=crop";

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = fallbackImageUrl;
    target.style.filter = 'grayscale(80%)';
  };

  return (
    <div id="draggable-id-card-container" ref={constraintsRef} className="relative w-full h-[28rem] flex items-center justify-center">
      <motion.div
        className="relative w-72 h-96 cursor-grab active:cursor-grabbing"
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        whileDrag={{ 
          scale: 1.05,
          rotate: 5,
          zIndex: 1000
        }}
        initial={{ rotate: -5 }}
        whileHover={{ 
          rotate: 0,
          scale: 1.02,
          transition: { type: "spring", stiffness: 300, damping: 20 }
        }}
      >
        {/* Lanyard String */}
        <motion.div
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-0.5 z-10"
          style={{ height: '4rem' }}
          animate={{
            scaleY: [1, 1.05, 1],
            x: [0, 2, -2, 0],
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-b from-[#9747FF]/80 to-[#00A5CA]/80" />
        </motion.div>

        {/* Lanyard Holder */}
        <motion.div
          className="relative w-full h-full bg-white/10 backdrop-blur-lg rounded-3xl p-1.5 border border-white/20 shadow-2xl"
          animate={{
            y: [0, -6, 0],
            rotate: [-5, -2, -5],
            x: [0, 2, -2, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Inner ID Card */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            {/* Background Image */}
            <img
              src={profileImageUrl}
              alt="Herdiyas Profile"
              className="absolute inset-0 w-full h-full object-cover"
              onError={handleImageError}
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/80 via-black/30 to-black/20">
              
              {/* Top Section (Logo) */}
              <div className="p-4">
                <h3 className="text-white text-xl font-bold tracking-widest">
                  ARTDYAS
                </h3>
              </div>

              {/* Bottom Section (Info) */}
              <div className="p-4 text-white">
                <h4 className="text-2xl font-bold">
                  Herdiyas
                </h4>
                <p className="text-base text-white/80">
                  Architecture Graduate
                </p>
                <p className="mt-4 text-sm text-white/70 font-mono">
                  ID: ART-2024-001
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DraggableIDCard;
