import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InteractiveTextProps {
  text: string;
  className?: string;
}

// A curated list of beautiful, creative, and visually appealing fonts
const creativeFonts = [
  'Bungee', 'Righteous', 'Fredoka One', 'Kalam', 'Bangers', 'Creepster', 
  'Freckle Face', 'Griffy', 'Lacquer', 'Orbitron', 'Permanent Marker', 
  'Russo One', 'Shrikhand', 'Titan One', 'Abril Fatface', 'Alfa Slab One', 
  'Anton', 'Black Ops One', 'Bowlby One', 'Bungee Shade', 'Fredericka the Great', 
  'Goblin One', 'Henny Penny', 'Kavoon', 'Luckiest Guy', 'Modak', 'Nosifer', 
  'Pirata One', 'Rammetto One', 'Rubik Bubbles', 'Rubik Glitch', 'Sancreek', 
  'Special Elite', 'Squada One', 'Stalinist One', 'Ultra', 'Unlock', 'Yeseva One'
];

// A curated list of monochrome colors for an elegant effect
const monochromeColors = [
  '#FFFFFF', '#F5F5F5', '#EEEEEE', '#E0E0E0', 
  '#BDBDBD', '#9E9E9E', '#757575', '#616161', 
  '#424242', '#212121', '#000000'
];

const InteractiveText: React.FC<InteractiveTextProps> = ({ text, className = '' }) => {
  const [letterStyles, setLetterStyles] = useState<{ [key: number]: { font: string; color: string } }>({});

  const handleLetterHover = (index: number) => {
    const randomFont = creativeFonts[Math.floor(Math.random() * creativeFonts.length)];
    const randomColor = monochromeColors[Math.floor(Math.random() * monochromeColors.length)];
    
    setLetterStyles(prev => ({
      ...prev,
      [index]: { font: randomFont, color: randomColor }
    }));
  };

  const handleMouseLeaveContainer = () => {
    setLetterStyles({}); // Reset all styles when the mouse leaves the container
  };

  return (
    <span className={className} onMouseLeave={handleMouseLeaveContainer}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="cursor-pointer"
          style={{
            fontFamily: letterStyles[index] ? letterStyles[index].font : 'inherit',
            color: letterStyles[index] ? letterStyles[index].color : 'inherit',
            display: 'inline-block',
            // The gradient text effect is handled by the parent's className (bg-clip-text text-transparent)
            // When a color is applied, it overrides the transparent text color, revealing the new solid color.
          }}
          onMouseEnter={() => handleLetterHover(index)}
          whileHover={{ 
            scale: 1.1,
            y: -2,
            transition: { type: 'spring', stiffness: 400, damping: 10 }
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

export default InteractiveText;
