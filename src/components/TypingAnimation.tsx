import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingText {
  text: string;
  color: string;
}

interface TypingAnimationProps {
  texts: TypingText[];
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (index >= texts.length) return;

    // Pause at the end of typing before deleting
    if (subIndex === texts[index].text.length && !isDeleting) {
      const timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000); // 2-second pause
      return () => clearTimeout(timer);
    }

    // Finished deleting, move to the next word
    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    // Typing/deleting interval
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 75 : 120); // Faster deleting, slower typing

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, texts]);

  return (
    <span className={`bg-gradient-to-r ${texts[index].color} bg-clip-text text-transparent`}>
      {`${texts[index].text.substring(0, subIndex)}`}
      <motion.span
        className={`inline-block w-1 h-8 ml-1 bg-gradient-to-r ${texts[index].color}`}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        aria-hidden="true"
      />
    </span>
  );
};

export default TypingAnimation;
