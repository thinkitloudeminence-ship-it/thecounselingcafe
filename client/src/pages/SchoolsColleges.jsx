import React from 'react';
import { Box, Typography } from '@mui/material';

export default function SchoolsColleges() {
  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#f6c500', fontWeight: 700 }}>School & Colleges</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Services for institutions—career workshops, training & assessments.
      </Typography>
    </Box>
  );
}
