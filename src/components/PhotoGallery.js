import { Box, Typography } from "@mui/material";
import { brown } from "@mui/material/colors";
import StandardImageList from "./ImageList";
const PhotoGallery = () => {

  const headingStyle = {
    color: brown[900],
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  };

  const formStyle = {
    backgroundColor: '#FFFFFF',
    padding: '1rem',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <Box style={formStyle}>
      <Box>
        <Typography style={headingStyle}>
          Nasza Galeria
        </Typography>
      </Box>
      <StandardImageList />
    </Box>
  );
};

export default PhotoGallery;
