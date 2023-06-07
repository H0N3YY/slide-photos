import { Box, Typography } from "@mui/material";
import { brown } from "@mui/material/colors";
import StandardImageList from "./ImageList";
import classes from "./PhotoGalleryStyle.css";

const PhotoGallery = () => {
  return (
    <Box>
      <Box className={classes.gallery_container} sx={{ backgroundColor: brown[400] }}>
        <Typography variant="h2" component="div" className={classes.gallery_heading}>
          Nasza Galeria
        </Typography>
      </Box>
      <StandardImageList />
    </Box>
  );
};

export default PhotoGallery;
