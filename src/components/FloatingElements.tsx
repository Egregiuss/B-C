import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

interface Heart {
  id: number;
  x: number;
  y: number;
}

const FloatingElements: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const handleDoubleClick = (e: MouseEvent) => {
      const newHeart: Heart = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      
      setHearts(prev => [...prev, newHeart]);
      
      setTimeout(() => {
        setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
      }, 3000);
    };

    document.addEventListener('dblclick', handleDoubleClick);
    return () => document.removeEventListener('dblclick', handleDoubleClick);
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{
              x: heart.x - 20,
              y: heart.y - 20,
              scale: 0,
              opacity: 1,
            }}
            animate={{
              y: heart.y - 150,
              scale: [0, 1.5, 1],
              opacity: [1, 1, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 3,
              ease: 'easeOut',
            }}
            style={{
              position: 'absolute',
              fontSize: '2rem',
              color: '#ff69b4',
            }}
          >
            💖
          </motion.div>
        ))}
      </AnimatePresence>
    </Box>
  );
};

export default FloatingElements;