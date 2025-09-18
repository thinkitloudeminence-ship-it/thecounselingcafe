import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Parenting() {
  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#f6c500', fontWeight: 700 }}>Parenting</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Support & strategies for effective parenting.
      </Typography>
    </Box>
  );
}
