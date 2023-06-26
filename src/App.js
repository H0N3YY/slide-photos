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
import ContactForm from './components/ContactForm';

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

  const formStyle = {
    marginTop: '2rem',
    marginBottom: '1rem',
  };

  return (
    <div className="App">
      <Header />
      <div style={formStyle}>
        <Typography variant="h2" component="div" sx={carouselTitleStyle}>
          Best Weekend Deals!
        </Typography>
        <Carousel showDots={false} responsive={responsive}>
          {product}
        </Carousel>
      </div>
      <div className="gallery">
        <PhotoGallery />
      </div>
      <ContactForm />
    </div>
  );
}
