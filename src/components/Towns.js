import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { brown } from '@mui/material/colors';

export default function Towns(props) {
  const cardStyle = {
    backgroundColor: '#FFFFFF',
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const townImageStyle = {
    width: '80',
    height: '80',
    marginBottom: '1rem',
    borderRadius: '5px',
  };

  const townNameStyle = {
    color: brown[900],
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  };

  const buttonStyle = {
    '&:hover': {
      bgcolor: brown[800],
      color: 'white',
    },
    color: brown[500],
    fontWeight: 'bold',
    borderRadius: '4em',
    width: '50%',
  };

  return (
    <div className="card" style={cardStyle}>
      <Box sx={{ color: brown[900] }}>
        <img className="town_image" src={props.url} alt="town" style={townImageStyle} />
        <Typography variant="h4" component="div" sx={townNameStyle}>
          {props.name}
        </Typography>
        <p>
          <Button sx={buttonStyle}>Sprawdź Ofertę</Button>
        </p>
      </Box>
    </div>
  );
}
