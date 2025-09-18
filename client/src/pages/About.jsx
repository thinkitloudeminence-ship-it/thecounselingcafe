import React from 'react';
import { Box, Typography } from '@mui/material';

export default function About() {
  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#f6c500', fontWeight: 700 }}>About Us</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        THE Counseling Cafe provides expert career and personal counselling for students and parents...
      </Typography>
    </Box>
  );
}
