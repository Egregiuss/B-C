import React from 'react';
import { Box, Typography, Container, Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Favorite, Coffee, Diamond } from '@mui/icons-material';

const StorySection: React.FC = () => {
  const storyEvents = [
    {
      year: '2019',
      title: 'First Meeting',
      description: 'We met at a coffee shop on a rainy Tuesday morning. Sarah was reading her favorite book, and Michael couldn\'t help but strike up a conversation about it.',
      icon: <Coffee />,
    },
    {
      year: '2020',
      title: 'First Date',
      description: 'Our first official date was a picnic in Central Park. Despite the unexpected rain, we laughed and talked for hours under a small pavilion.',
      icon: <Favorite />,
    },
    {
      year: '2023',
      title: 'The Proposal',
      description: 'Michael proposed during a sunset hike at our favorite trail. Sarah said yes before he could even finish asking the question!',
      icon: <Diamond />,
    },
  ];

  return (
    <Box sx={{ py: 10, backgroundColor: '#f9f9f9' }}>
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
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Our Love Story
          </Typography>
          <Box
            sx={{
              width: 100,
              height: 3,
              background: 'linear-gradient(to right, #8B4B8C, #D4A5D6)',
              margin: '0 auto 6rem',
            }}
          />
        </motion.div>

        <Timeline position="alternate">
          {storyEvents.map((event, index) => (
            <TimelineItem key={event.year}>
              <TimelineSeparator>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <TimelineDot
                    sx={{
                      backgroundColor: 'primary.main',
                      width: 60,
                      height: 60,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                    }}
                  >
                    {event.icon}
                  </TimelineDot>
                </motion.div>
                {index < storyEvents.length - 1 && (
                  <TimelineConnector
                    sx={{
                      backgroundColor: 'primary.light',
                      width: 3,
                    }}
                  />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      background: 'white',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 20,
                        [index % 2 === 0 ? 'right' : 'left']: -10,
                        width: 0,
                        height: 0,
                        borderTop: '10px solid transparent',
                        borderBottom: '10px solid transparent',
                        [index % 2 === 0 ? 'borderLeft' : 'borderRight']: '10px solid white',
                      },
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: 'primary.main',
                        fontFamily: '"Playfair Display", serif',
                        mb: 1,
                      }}
                    >
                      {event.year}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: '"Playfair Display", serif',
                        mb: 2,
                        color: 'text.primary',
                      }}
                    >
                      {event.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.8,
                      }}
                    >
                      {event.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};

export default StorySection;