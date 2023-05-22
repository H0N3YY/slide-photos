import { townsPhotos, responsive } from "./components/TownPictures";
import { Typography } from "@mui/material";

import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Towns from "./components/Towns";
import Header from "./components/NavBar";
import PhotoGallery from "./components/PhotoGallery";
import { brown } from '@mui/material/colors';

export default function App() {
  const product = townsPhotos.map((item) => (
    <Towns name={item.name} url={item.imageAdress} />
  ));

  return (
    <div className="App" >
      <Header />
      <div className="carousel">
        <Typography variant="h2" component="div" padding={3} sx={{color: brown[900]}}>
          Najlepsze Oferty na Weekend
        </Typography>
        <Carousel showDots={true} responsive={responsive}>
          {product}
        </Carousel>
      </div>
      <div className="gallery">
        <PhotoGallery />
      </div>
    </div>
  );
}
