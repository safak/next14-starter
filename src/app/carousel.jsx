

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App() {
  return (
    <div className="App">
      <div style={{width:"400px" , margin: "auto"}}>
      <Carousel>
        <div>
          <img src="https://picsum.photos/200/300?random=1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://picsum.photos/200/300?random=2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://picsum.photos/200/300?random=3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      </div>
    </div>
  );
}
