import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import Gallery from './pages/Gallery.tsx';
import Registry from './pages/Registry.tsx';
import RSVP from './pages/RSVP.tsx';
import Admin from './pages/Admin.tsx';
import FloatingElements from './components/FloatingElements.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

function App() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <FloatingElements />
      <ScrollToTop />
    </Box>
  );
}

export default App;