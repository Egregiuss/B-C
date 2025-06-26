import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Card, CardContent, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useWedding } from '../context/WeddingContext';

const Guestbook: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const { weddingData, addGuestbookEntry } = useWedding();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      addGuestbookEntry({ name: name.trim(), message: message.trim() });
      setName('');
      setMessage('');
    }
  };

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
            Guestbook
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

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card sx={{ p: 3 }}>
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
                    Leave a Message
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      sx={{ mb: 3 }}
                      required
                    />
                    <TextField
                      fullWidth
                      label="Your Message"
                      multiline
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      sx={{ mb: 3 }}
                      required
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{
                        background: 'linear-gradient(135deg, #8B4B8C, #D4A5D6)',
                      }}
                    >
                      Sign Guestbook
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
                Messages from Friends & Family
              </Typography>
              <Box sx={{ maxHeight: 400, overflowY: 'auto' }}>
                {weddingData.guestbook.length === 0 ? (
                  <Typography sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                    Be the first to sign our guestbook!
                  </Typography>
                ) : (
                  weddingData.guestbook.slice().reverse().map((entry) => (
                    <Card key={entry.id} sx={{ mb: 2, p: 2 }}>
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        "{entry.message}"
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                        - {entry.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {entry.timestamp.toLocaleDateString()}
                      </Typography>
                    </Card>
                  ))
                )}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Guestbook;