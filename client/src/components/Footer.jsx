import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#000', color: '#fff', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ color: '#f6c500', fontWeight: 700 }}>
              THE Counseling Cafe
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Guidance & counselling for students, parents and institutions.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1">Quick Links</Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 1, flexWrap: 'wrap' }}>
              <Link href="/about" color="inherit" underline="none">About</Link>
              <Link href="/contact" color="inherit" underline="none">Contact</Link>
              <Link href="/student/career-test" color="inherit" underline="none">Career Test</Link>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="caption">© {new Date().getFullYear()} THE Counseling Cafe</Typography>
        </Box>
      </Container>
    </Box>
  );
}
