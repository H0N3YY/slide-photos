import { Box,Typography } from "@mui/material";
import classes from "./PhotoGalleryStyle.css";
import StandardImageList from "./ImageList";
import { grey, brown } from '@mui/material/colors';

const PhotoGallery = () => {
  return (
    <Box className={classes.gallery_container} sx={{backgroundColor: grey[50]}}>
      <Typography variant="h2" component="div" padding={5} sx={{backgroundColor: brown[400]}}>
        Nasza Galleria
      </Typography>
      <StandardImageList />
    </Box>
  );
};
export default PhotoGallery;
