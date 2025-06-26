import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import Countdown from 'react-countdown';
import { useWedding } from '../context/WeddingContext';

const CountdownSection: React.FC = () => {
  const { weddingData } = useWedding();

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return (
        <Typography variant="h3" sx={{ textAlign: 'center', color: 'primary.main' }}>
          🎉 We're Married! 🎉
        </Typography>
      );
    }

    const timeUnits = [
      { label: 'Days', value: days },
      { label: 'Hours', value: hours },
      { label: 'Minutes', value: minutes },
      { label: 'Seconds', value: seconds },
    ];

    return (
      <Grid container spacing={3} justifyContent="center">
        {timeUnits.map((unit, index) => (
          <Grid item xs={6} sm={3} key={unit.label}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 3,
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                  }}
                >
                  {unit.value.toString().padStart(2, '0')}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#f0f0f0',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    fontSize: { xs: '0.8rem', md: '0.9rem' },
                  }}
                >
                  {unit.label}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Box
      className="gradient-bg"
      sx={{
        py: 8,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: 'white',
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Countdown to Our Big Day
          </Typography>
        </motion.div>

        <Countdown
          date={weddingData.weddingDate}
          renderer={renderer}
        />
      </Container>

      {/* Floating elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          fontSize: '3rem',
          opacity: 0.1,
          animation: 'float 3s ease-in-out infinite',
        }}
      >
        💕
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          fontSize: '2rem',
          opacity: 0.1,
          animation: 'float 4s ease-in-out infinite reverse',
        }}
      >
        💖
      </Box>
    </Box>
  );
};

export default CountdownSection;