import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Admin: React.FC = () => {
  return (
    <Box sx={{ pt: 10, pb: 5 }}>
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Admin Panel
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', mt: 2 }}>
          Coming Soon...
        </Typography>
      </Container>
    </Box>
  );
};

export default Admin;