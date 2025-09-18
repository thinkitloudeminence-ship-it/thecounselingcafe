import React from 'react';
import { Box, Typography } from '@mui/material';

export default function CareerCounselling() {
  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#f6c500', fontWeight: 700 }}>Career Counselling</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Personalized career guidance sessions.
      </Typography>
    </Box>
  );
}
