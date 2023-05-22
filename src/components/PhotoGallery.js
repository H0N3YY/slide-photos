import { ImageList, Typography } from "@mui/material";
import classes from "./PhotoGalleryStyle.css";
import StandardImageList from "./ImageList";

const PhotoGallery = () => {
  return (
    <div className={classes.gallery_container}>
      <Typography variant="h2" component="div" padding={2}>
        Nasza Galleria
      </Typography>
      <StandardImageList />
    </div>
  );
};
export default PhotoGallery;
