import React from 'react';
import { Box, Typography } from '@mui/material';

export default function PersonalCounselling() {
  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#f6c500', fontWeight: 700 }}>Personal Counselling</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        One-on-one sessions for personal growth and wellbeing.
      </Typography>
    </Box>
  );
}
