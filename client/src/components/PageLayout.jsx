import React from 'react';
import { Container, Box } from '@mui/material';

export default function PageLayout({ children }) {
  return (
    <Box component="main" sx={{ minHeight: '75vh', py: { xs: 3, md: 6 } }}>
      <Container maxWidth="lg">
        {children}
      </Container>
    </Box>
  );
}
