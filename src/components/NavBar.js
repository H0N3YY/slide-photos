import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from '@mui/material';
import { brown } from '@mui/material/colors';
import MapIcon from '@mui/icons-material/Map';

const Header = () => {
  const appBarStyle = {
    backgroundColor: brown[400],
  };

  const logoStyle = {
    marginRight: '1rem',
  };

  const titleStyle = {
    flexGrow: 1,
    fontWeight: 'bold',
  };

  return (
    <AppBar position="static" sx={appBarStyle}>
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
          TRAVELS POL
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">ZDJĘCIA</Button>
          <Button color="inherit">KONTAKT</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
