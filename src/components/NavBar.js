import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import { brown } from '@mui/material/colors';

const Header = () => {

  const logoStyle = {
    marginRight: '1rem',
  };

  const titleStyle = {
    flexGrow: 1,
    fontWeight: 'bold',
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: brown[400] }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          style={logoStyle}
        >
          <MapIcon />
        </IconButton>
        <Typography variant="h6" component="div" style={titleStyle}>
          POLAND TRAVELS
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Gallery</Button>
          <Button color="inherit">Contact</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
