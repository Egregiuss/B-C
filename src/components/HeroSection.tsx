import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { useWedding } from '../context/WeddingContext.tsx';

const HeroSection: React.FC = () => {
  const { weddingData } = useWedding();

  return (
    <Parallax
      blur={0}
      bgImage="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop"
      bgImageAlt="Wedding"
      strength={300}
      style={{ height: '100vh' }}
    >
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography
              variant="h1"
              sx={{
                mb: 2,
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 300,
                letterSpacing: '2px',
              }}
            >
              {weddingData.couple.bride} & {weddingData.couple.groom}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: 300,
                fontSize: { xs: '1.2rem', md: '1.5rem' },
              }}
            >
              We're Getting Married!
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                color: '#f0f0f0',
              }}
            >
              {weddingData.weddingDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            style={{
              position: 'absolute',
              bottom: '30px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <Box
              sx={{
                animation: 'float 2s ease-in-out infinite',
                fontSize: '2rem',
                cursor: 'pointer',
              }}
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              ↓
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Parallax>
  );
};

export default HeroSection;