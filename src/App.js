import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { townsPhotos, responsive } from "./components/Pictures";
import Towns from "./components/Towns";
import Header from "./components/NavBar";
import { Typography } from "@mui/material";

export default function App() {
  const product = townsPhotos.map((item) => (
    <Towns name={item.name} url={item.imageAdress} />
  ));

  return (
    <div className="App">
      <Header />
      <Typography variant="h2" component="div" padding={2}>
        Najlepsze Oferty na Weekend
      </Typography>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
      <Typography variant="h2" component="div" padding={2}>
        
      </Typography>
    </div>
  );
}
