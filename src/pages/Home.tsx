import React from 'react';
import { Box } from '@mui/material';
import HeroSection from '../components/HeroSection.tsx';
import StorySection from '../components/StorySection.tsx';
import CountdownSection from '../components/CountdownSection.tsx';
import WeddingDetails from '../components/WeddingDetails.tsx';
import Guestbook from '../components/Guestbook.tsx';
import Footer from '../components/Footer.tsx';

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