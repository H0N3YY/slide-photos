import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import MapIcon from "@mui/icons-material/Map";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <MapIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          TRAVELS IN POLAND
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
