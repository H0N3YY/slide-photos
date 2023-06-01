import React from 'react';
import { Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Header from './components/NavBar';
import PhotoGallery from './components/PhotoGallery';
import { townsPhotos, responsive } from './components/TownPictures';
import { brown } from '@mui/material/colors';
import Towns from "./components/Towns";

import './App.css';

export default function App() {
  const product = townsPhotos.map((item) => (
    <Towns name={item.name} url={item.imageAdress} />
  ));

  const carouselTitleStyle = {
    color: brown[900],
    padding: '1rem',
    fontWeight: 'bold',
    fontSize: '2rem',
    textAlign: 'center',
  };

  return (
    <div className="App">
      <Header />
      <div className="carousel">
        <Typography variant="h2" component="div" sx={carouselTitleStyle}>
          Najlepsze Oferty na Weekend!!
        </Typography>
        <Carousel showDots={false} responsive={responsive}>
          {product}
        </Carousel>
      </div>
      <div className="gallery">
        <PhotoGallery />
      </div>
    </div>
  );
}
