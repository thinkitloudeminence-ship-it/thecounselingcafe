// components/PageLayout.js
import React from 'react';
import { Box } from '@mui/material';

const PageLayout = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        minHeight: 'calc(100vh - 140px)', // Adjust based on header/footer height
        width: '100%',
        flex: 1,
      }}
    >
      {children}
    </Box>
  );
};

export default PageLayout;