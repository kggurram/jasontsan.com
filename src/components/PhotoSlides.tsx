import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const PhotoSlides = () => {
  return (
    <div>
      <h2>NextJs Carousel - GeeksforGeeks</h2>
      <Carousel>
        <div>
          <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" alt="image1" />
          <p className="legend">Image 1</p>
        </div>
        <div>
          <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" alt="image2" />
          <p className="legend">Image 2</p>
        </div>
        <div>
          <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" alt="image3" />
          <p className="legend">Image 3</p>
        </div>
        <div>
          <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" alt="image4" />
          <p className="legend">Image 4</p>
        </div>
        <div>
          <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" alt="image5" />
          <p className="legend">Image 5</p>
        </div>
      </Carousel>
    </div>
  );
};

export default PhotoSlides;
