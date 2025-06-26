import React from 'react';
import { Box } from '@mui/material';
import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import CountdownSection from '../components/CountdownSection';
import WeddingDetails from '../components/WeddingDetails';
import Guestbook from '../components/Guestbook';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      <CountdownSection />
      <StorySection />
      <WeddingDetails />
      <Guestbook />
      <Footer />
    </Box>
  );
};

export default Home;