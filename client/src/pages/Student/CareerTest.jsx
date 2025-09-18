import React from 'react';
import { Box, Typography } from '@mui/material';

export default function CareerTest() {
  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#f6c500', fontWeight: 700 }}>Career Test</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Take our in-depth career assessment to find best-fit careers.
      </Typography>
    </Box>
  );
}
