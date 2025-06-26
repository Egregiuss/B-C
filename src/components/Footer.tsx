import React from 'react';
import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import { Instagram, Facebook, Twitter } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: 'white', py: 6 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ mb: 2, color: 'secondary.light' }}>
              Sarah & Michael
            </Typography>
            <Typography variant="body1">
              Thank you for being part of our love story
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, color: 'secondary.light' }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Email: wedding@sarahandmichael.com
            </Typography>
            <Typography variant="body2">
              Phone: (555) 123-4567
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, color: 'secondary.light' }}>
              Follow Us
            </Typography>
            <Box>
              <IconButton sx={{ color: 'white', mr: 1 }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: 'white', mr: 1 }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <Twitter />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 4, pt: 4, borderTop: '1px solid #555' }}>
          <Typography variant="body2" sx={{ color: '#ccc' }}>
            © 2024 Sarah & Michael Wedding. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;