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
  return (
    <AppBar position="static" sx={{backgroundColor: brown[400]}}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <MapIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          TRAVELS POL
        </Typography>

        <Stack direction="row" spacing={2}> 
          <Button color="inherit"> ZDJĘCIA </Button>
          <Button color="inherit"> KONTAKT </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
