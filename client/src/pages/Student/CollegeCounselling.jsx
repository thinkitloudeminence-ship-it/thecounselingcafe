import React from 'react';
import { Box, Typography } from '@mui/material';

export default function CollegeCounselling() {
  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#f6c500', fontWeight: 700 }}>College Counselling</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Helping students choose colleges & courses.
      </Typography>
    </Box>
  );
}
