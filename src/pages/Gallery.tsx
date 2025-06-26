import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, Dialog, IconButton, Fab } from '@mui/material';
import { Close, ArrowBack, ArrowForward, Favorite } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [liked, setLiked] = useState<Set<number>>(new Set());

  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=1200&fit=crop', category: 'engagement' },
    { id: 2, src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=800&fit=crop', category: 'couple' },
    { id: 3, src: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=1200&fit=crop', category: 'engagement' },
    { id: 4, src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&h=800&fit=crop', category: 'couple' },
    { id: 5, src: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&h=800&fit=crop', category: 'engagement' },
    { id: 6, src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&h=800&fit=crop', category: 'couple' },
    { id: 7, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop', category: 'wedding' },
    { id: 8, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=1200&fit=crop', category: 'wedding' },
  ];

  const handleLike = (imageId: number) => {
    setLiked(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(imageId)) {
        newLiked.delete(imageId);
      } else {
        newLiked.add(imageId);
      }
      return newLiked;
    });
  };

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
            Our Memories
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

        {/* Featured Slideshow */}
        <Box sx={{ mb: 8 }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            style={{ borderRadius: '20px', overflow: 'hidden' }}
          >
            {images.slice(0, 4).map((image, index) => (
              <SwiperSlide key={image.id}>
                <Box
                  sx={{
                    height: { xs: 300, md: 500 },
                    backgroundImage: `url(${image.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1))',
                    }}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* Gallery Grid */}
        <Grid container spacing={3}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card
                  sx={{
                    position: 'relative',
                    cursor: 'pointer',
                    borderRadius: 3,
                    overflow: 'hidden',
                    '&:hover .overlay': {
                      opacity: 1,
                    },
                  }}
                  onClick={() => setSelectedImage(index)}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={image.src}
                    alt={`Gallery image ${image.id}`}
                    sx={{ objectFit: 'cover' }}
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(139, 75, 140, 0.8)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <Typography variant="h6" sx={{ color: 'white' }}>
                      View Photo
                    </Typography>
                  </Box>
                  <Fab
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      backgroundColor: liked.has(image.id) ? 'error.main' : 'rgba(255,255,255,0.8)',
                      color: liked.has(image.id) ? 'white' : 'error.main',
                      '&:hover': {
                        backgroundColor: 'error.main',
                        color: 'white',
                      },
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(image.id);
                    }}
                  >
                    <Favorite />
                  </Fab>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Lightbox Dialog */}
        <Dialog
          open={selectedImage !== null}
          onClose={() => setSelectedImage(null)}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            sx: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              overflow: 'hidden',
            },
          }}
        >
          <AnimatePresence>
            {selectedImage !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Box sx={{ position: 'relative', textAlign: 'center' }}>
                  <IconButton
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      color: 'white',
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      zIndex: 1,
                    }}
                    onClick={() => setSelectedImage(null)}
                  >
                    <Close />
                  </IconButton>
                  
                  <img
                    src={images[selectedImage].src}
                    alt={`Gallery ${selectedImage}`}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '90vh',
                      objectFit: 'contain',
                      borderRadius: '10px',
                    }}
                  />

                  <IconButton
                    sx={{
                      position: 'absolute',
                      left: 10,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'white',
                      backgroundColor: 'rgba(0,0,0,0.5)',
                    }}
                    onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1)}
                  >
                    <ArrowBack />
                  </IconButton>

                  <IconButton
                    sx={{
                      position: 'absolute',
                      right: 10,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'white',
                      backgroundColor: 'rgba(0,0,0,0.5)',
                    }}
                    onClick={() => setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0)}
                  >
                    <ArrowForward />
                  </IconButton>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Gallery;