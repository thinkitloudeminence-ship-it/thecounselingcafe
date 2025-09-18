import React from 'react';
import { Box, Typography } from '@mui/material';

export default function ParentsPricing() {
  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#f6c500', fontWeight: 700 }}>Parents Pricing</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Packages for parent coaching and sessions.
      </Typography>
    </Box>
  );
}
