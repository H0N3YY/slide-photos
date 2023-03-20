import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { townsPhotos, responsive } from "./components/Pictures";
import Towns from "./components/Towns";

export default function App() {
  const product = townsPhotos.map((item) => (
    <Towns name={item.name} url={item.imageAdress} />
  ));

  return (
    <div className="App">
      <h1> Polskie Miasta </h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
