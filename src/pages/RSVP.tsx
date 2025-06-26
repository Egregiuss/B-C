import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Card, CardContent, FormControl, InputLabel, Select, MenuItem, Snackbar, Alert, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { useWedding } from '../context/WeddingContext';

interface RSVPFormData {
  firstName: string;
  lastName: string;
  email: string;
  attendance: 'yes' | 'no';
  guests: number;
  dietary: string;
  message: string;
}

const RSVP: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const { addRSVP, weddingData } = useWedding();
  
  const { control, handleSubmit, reset, formState: { errors } } = useForm<RSVPFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      attendance: 'yes',
      guests: 1,
      dietary: '',
      message: '',
    },
  });

  const onSubmit = (data: RSVPFormData) => {
    addRSVP(data);
    setShowSuccess(true);
    reset();
  };

  const attendingCount = weddingData.rsvps.filter(rsvp => rsvp.attendance === 'yes').length;
  const totalGuests = weddingData.rsvps.reduce((sum, rsvp) => sum + (rsvp.attendance === 'yes' ? rsvp.guests : 0), 0);

  return (
    <Box sx={{ pt: 10, pb: 5, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
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
            RSVP
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
            Please let us know if you'll be joining us for our special day. We can't wait to celebrate with you!
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* RSVP Form */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="firstName"
                          control={control}
                          rules={{ required: 'First name is required' }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="First Name"
                              error={!!errors.firstName}
                              helperText={errors.firstName?.message}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="lastName"
                          control={control}
                          rules={{ required: 'Last name is required' }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Last Name"
                              error={!!errors.lastName}
                              helperText={errors.lastName?.message}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Controller
                          name="email"
                          control={control}
                          rules={{
                            required: 'Email is required',
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: 'Invalid email address',
                            },
                          }}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Email Address"
                              type="email"
                              error={!!errors.email}
                              helperText={errors.email?.message}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="attendance"
                          control={control}
                          render={({ field }) => (
                            <FormControl fullWidth>
                              <InputLabel>Will you be attending?</InputLabel>
                              <Select {...field} label="Will you be attending?">
                                <MenuItem value="yes">Yes, I'll be there!</MenuItem>
                                <MenuItem value="no">Sorry, can't make it</MenuItem>
                              </Select>
                            </FormControl>
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="guests"
                          control={control}
                          render={({ field }) => (
                            <FormControl fullWidth>
                              <InputLabel>Number of Guests</InputLabel>
                              <Select {...field} label="Number of Guests">
                                <MenuItem value={1}>Just me</MenuItem>
                                <MenuItem value={2}>2 people</MenuItem>
                                <MenuItem value={3}>3 people</MenuItem>
                                <MenuItem value={4}>4 people</MenuItem>
                              </Select>
                            </FormControl>
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Controller
                          name="dietary"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Dietary Restrictions"
                              multiline
                              rows={3}
                              placeholder="Please let us know about any dietary restrictions or allergies"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Controller
                          name="message"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Special Message"
                              multiline
                              rows={4}
                              placeholder="Share your wishes for the happy couple"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                          sx={{
                            py: 2,
                            fontSize: '1.1rem',
                            background: 'linear-gradient(135deg, #8B4B8C, #D4A5D6)',
                          }}
                        >
                          Send RSVP
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* RSVP Stats */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card sx={{ borderRadius: 4, boxShadow: 3, mb: 3 }}>
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
                    RSVP Status
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                      {attendingCount}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      Confirmed Guests
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>
                      {totalGuests}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      Total Attendees
                    </Typography>
                  </Box>
                </CardContent>
              </Card>

              <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                    Recent RSVPs
                  </Typography>
                  {weddingData.rsvps.slice(-5).reverse().map((rsvp) => (
                    <Box key={rsvp.id} sx={{ mb: 2, pb: 2, borderBottom: '1px solid #eee' }}>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        {rsvp.firstName} {rsvp.lastName}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                        <Chip
                          label={rsvp.attendance === 'yes' ? 'Attending' : 'Not Attending'}
                          color={rsvp.attendance === 'yes' ? 'success' : 'default'}
                          size="small"
                        />
                        {rsvp.attendance === 'yes' && (
                          <Chip
                            label={`${rsvp.guests} guest${rsvp.guests > 1 ? 's' : ''}`}
                            variant="outlined"
                            size="small"
                          />
                        )}
                      </Box>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        <Snackbar
          open={showSuccess}
          autoHideDuration={6000}
          onClose={() => setShowSuccess(false)}
        >
          <Alert onClose={() => setShowSuccess(false)} severity="success">
            Thank you! Your RSVP has been received successfully.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default RSVP;