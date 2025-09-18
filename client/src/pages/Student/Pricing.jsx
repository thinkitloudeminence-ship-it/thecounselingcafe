import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

export default function StudentPricing() {
  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#f6c500', fontWeight: 700 }}>Student Pricing</Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Basic</Typography>
            <Typography variant="body2">Single session</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Standard</Typography>
            <Typography variant="body2">3 sessions</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Premium</Typography>
            <Typography variant="body2">Full program</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
