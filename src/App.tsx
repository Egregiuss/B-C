import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Registry from './pages/Registry';
import RSVP from './pages/RSVP';
import Admin from './pages/Admin';
import FloatingElements from './components/FloatingElements';
import ScrollToTop from './components/ScrollToTop';

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