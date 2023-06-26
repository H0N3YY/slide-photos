import React from 'react';

import { Typography } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { brown } from '@mui/material/colors';
import { townsPhotos, responsive } from './components/TownPictures';

import Header from './components/NavBar';
import Footer from './components/Footer';
import PhotoGallery from './components/PhotoGallery';
import Towns from "./components/Towns";
import ContactForm from './components/ContactForm';

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

  const formStyle = {
    marginTop: '2rem',
    marginBottom: '1rem',
  };

  return (
    <div>
      <Header />
      <div className="App">
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
      <Footer />
    </div>
  );
}
