import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Church, Celebration, Checkroom } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useWedding } from '../context/WeddingContext.tsx';

const WeddingDetails: React.FC = () => {
  const { weddingData } = useWedding();

  const openMap = (location: 'ceremony' | 'reception') => {
    const address = location === 'ceremony' 
      ? weddingData.venues.ceremony.address 
      : weddingData.venues.reception.address;
    const encodedAddress = encodeURIComponent(address);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(mapUrl, '_blank');
  };

  return (
    <Box className="gradient-bg" sx={{ py: 10, color: 'white' }}>
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
              color: 'white',
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Wedding Details
          </Typography>
          <Box
            sx={{
              width: 100,
              height: 3,
              background: 'white',
              margin: '0 auto 6rem',
            }}
          />
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect" sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <CardContent>
                  <Church sx={{ fontSize: 60, color: 'white', mb: 2 }} />
                  <Typography variant="h4" sx={{ color: 'white', mb: 2 }}>
                    Ceremony
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                    {weddingData.venues.ceremony.name}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.8)', mb: 2 }}>
                    {weddingData.venues.ceremony.address}
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'white', mb: 3 }}>
                    Time: {weddingData.venues.ceremony.time}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: 'white', color: 'primary.main' }}
                    onClick={() => openMap('ceremony')}
                  >
                    View Map
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect" sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <CardContent>
                  <Celebration sx={{ fontSize: 60, color: 'white', mb: 2 }} />
                  <Typography variant="h4" sx={{ color: 'white', mb: 2 }}>
                    Reception
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                    {weddingData.venues.reception.name}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.8)', mb: 2 }}>
                    {weddingData.venues.reception.address}
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'white', mb: 3 }}>
                    Time: {weddingData.venues.reception.time}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: 'white', color: 'primary.main' }}
                    onClick={() => openMap('reception')}
                  >
                    View Map
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect" sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <CardContent>
                  <Checkroom sx={{ fontSize: 60, color: 'white', mb: 2 }} />
                  <Typography variant="h4" sx={{ color: 'white', mb: 2 }}>
                    Dress Code
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                    Formal Attire
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.8)', mb: 2 }}>
                    We kindly request formal attire for our special day.
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>
                    Colors to avoid: White, Ivory, Cream
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WeddingDetails;