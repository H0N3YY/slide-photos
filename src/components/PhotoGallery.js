import { Box,Typography } from "@mui/material";
import classes from "./PhotoGalleryStyle.css";
import StandardImageList from "./ImageList";
import { brown } from '@mui/material/colors';

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
    <Box className={classes.gallery_container} sx={{backgroundColor: brown[400]}}>
      <Typography variant="h2" component="div" padding={2}>
        Nasza Galleria
      </Typography>
      <StandardImageList />
    </div>
  );
};

export default PhotoGallery;
