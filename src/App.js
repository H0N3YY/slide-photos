import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./components/Data";
import Towns from "./components/Towns";

export default function App() {
  const product = productData.map((item) => (
    <Towns name={item.name} url={item.imageAdress} />
  ));

  return (
    <div className="App">
      <h1>React multi carousel</h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
