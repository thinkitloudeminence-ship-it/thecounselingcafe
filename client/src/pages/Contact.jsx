import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';
import { sendContact } from '../utils/api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });
    try {
      await sendContact(form);
      setStatus({ loading: false, success: 'Message sent successfully', error: null });
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus({ loading: false, success: null, error: err?.response?.data?.message || 'Failed to send' });
    }
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#f6c500', fontWeight: 700 }}>Contact</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>Get in touch with us.</Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, maxWidth: 700 }}>
        {status.success && <Alert severity="success" sx={{ mb: 2 }}>{status.success}</Alert>}
        {status.error && <Alert severity="error" sx={{ mb: 2 }}>{status.error}</Alert>}

        <TextField
          label="Name" name="name" value={form.name} onChange={handleChange}
          fullWidth required sx={{ mb: 2 }}
        />
        <TextField
          label="Email" name="email" value={form.email} onChange={handleChange}
          fullWidth required sx={{ mb: 2 }}
        />
        <TextField
          label="Phone" name="phone" value={form.phone} onChange={handleChange}
          fullWidth sx={{ mb: 2 }}
        />
        <TextField
          label="Message" name="message" value={form.message} onChange={handleChange}
          fullWidth multiline rows={4} required sx={{ mb: 2 }}
        />

        <Button type="submit" variant="contained" sx={{ bgcolor: '#f6c500', color: '#000', ':hover': { bgcolor: '#e6b800' } }} disabled={status.loading}>
          {status.loading ? 'Sending...' : 'Send Message'}
        </Button>
      </Box>
    </Box>
  );
}
