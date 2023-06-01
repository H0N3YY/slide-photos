import React from 'react';
import { Box, Typography } from '@mui/material';
import { grey, brown } from '@mui/material/colors';
import StandardImageList from './ImageList';

const PhotoGallery = () => {
  const galleryContainerStyle = {
    backgroundColor: grey[50],
    padding: '2rem',
    borderRadius: '50',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    backgroundColor: brown[400],
    color: '#fff',
    padding: '1rem',
    marginBottom: '2rem',
    fontSize: '2rem',
    textAlign: 'center',
    borderRadius: '50',
  };

  return (
    <Box style={galleryContainerStyle}>
      <Typography variant="h2" component="div" style={headingStyle}>
        Nasza Galeria
      </Typography>
      <StandardImageList />
    </Box>
  );
};

export default PhotoGallery;
