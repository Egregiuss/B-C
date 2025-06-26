import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Registry: React.FC = () => {
  const registryItems = [
    {
      id: 1,
      name: 'Professional Stand Mixer',
      description: 'Perfect for all our future baking adventures together.',
      price: '$299.99',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=200&fit=crop',
    },
    {
      id: 2,
      name: 'Elegant Dining Set',
      description: 'Beautiful dining table and chairs for hosting family and friends.',
      price: '$899.99',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=200&fit=crop',
    },
    {
      id: 3,
      name: 'Luxury Bedding Set',
      description: 'Soft, comfortable bedding for sweet dreams in our new home.',
      price: '$199.99',
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=200&fit=crop',
    },
    {
      id: 4,
      name: 'Premium Coffee Maker',
      description: 'For perfect mornings together with freshly brewed coffee.',
      price: '$149.99',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=200&fit=crop',
    },
  ];

  return (
    <Box sx={{ pt: 10, pb: 5 }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Wedding Registry
          </Typography>
          <Box
            sx={{
              width: 100,
              height: 3,
              background: 'linear-gradient(to right, #8B4B8C, #D4A5D6)',
              margin: '0 auto 2rem',
            }}
          />
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Your presence at our wedding is the greatest gift of all. However, if you would like to honor us with a gift, we have created this wish list.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {registryItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, flexGrow: 1 }}>
                      {item.description}
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                      {item.price}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        background: 'linear-gradient(135deg, #8B4B8C, #D4A5D6)',
                      }}
                    >
                      View Item
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
            Registry Locations
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(135deg, #8B4B8C, #D4A5D6)',
                m: 0.5,
              }}
            >
              Amazon Registry
            </Button>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(135deg, #8B4B8C, #D4A5D6)',
                m: 0.5,
              }}
            >
              Target Registry
            </Button>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(135deg, #8B4B8C, #D4A5D6)',
                m: 0.5,
              }}
            >
              Bed Bath & Beyond
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Registry;