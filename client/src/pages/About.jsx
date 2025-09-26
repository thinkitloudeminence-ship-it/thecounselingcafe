import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';

export default function About() {
  return (
    <Box sx={{ py: 8, bgcolor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Paper elevation={0} sx={{ p: 4, bgcolor: 'transparent' }}>
          {/* Page Header */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h3" 
              sx={{ 
                color: '#9e5349ff', 
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '3rem' },
                mb: 2
              }}
            >
              ABOUT
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#5ebeb6ff', 
                fontWeight: 600,
                fontStyle: 'italic'
              }}
            >
              The Counseling Cafe
            </Typography>
          </Box>

          {/* Main Content */}
          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            <Typography 
              variant="body1" 
              sx={{ 
                lineHeight: 1.8,
                color: '#333',
                fontSize: '1.1rem',
                mb: 3,
                textAlign: 'justify'
              }}
            >
              The Counseling Café started with helping and guiding students of all age group related to education. We came across many students who choose the wrong career paths and suffered in careers because of lack of guidance. TCC offers face-to-face sessions as well as telephonic and web-based counseling services for children, teens, adults of all ages. We realized that students in developing countries also facing the same problem that leads to dissatisfaction and unemployment.
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                lineHeight: 1.8,
                color: '#333',
                fontSize: '1.1rem',
                mb: 3,
                textAlign: 'justify'
              }}
            >
              The traditional path of career are always there. In the current times; many new career options have developed. Many people are just not aware of them. Even if they are aware, people are not confident in pursuing them. Yet, many of these new career opportunities are very promising. It is the duty of the professional counselors to show them the light. Counselors at TCC show the ways to pursue these new paths and the opportunities that lie across for them.
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                lineHeight: 1.8,
                color: '#333',
                fontSize: '1.1rem',
                mb: 3,
                textAlign: 'justify'
              }}
            >
              Anyone who needs counseling should have it. It is a belief we have lived for more than 10 years by providing affordable, sliding-scale counseling to people in need for as long as they need care.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}