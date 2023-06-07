import { Box,Typography } from "@mui/material";
import classes from "./PhotoGalleryStyle.css";
import StandardImageList from "./ImageList";
import { brown, grey } from '@mui/material/colors';

const PhotoGallery = () => {
  

  return (
    <Box className={classes.gallery_container} sx={{backgroundColor: brown[400]}}>
      <Typography variant="h2" component="div" padding={2}>
        Nasza Galleria
      </Typography>
      <StandardImageList />
    </Box>
  );
};

export default PhotoGallery;
