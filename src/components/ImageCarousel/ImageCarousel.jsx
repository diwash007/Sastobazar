import "./ImageCarousel.css";
import { IconButton } from "@mui/material";
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import { useRef } from "react";

const ImageCarousel = ({ images }) => {
  const carouselRef = useRef();
  const scrollRight = () => {
    carouselRef.current.scrollBy(carouselRef.current.offsetWidth, 0);
  };
  const scrollLeft = () => {
    carouselRef.current.scrollBy(-carouselRef.current.offsetWidth, 0);
  };

  return (
    <div className="carousel">
      <IconButton
        aria-label="left"
        size="large"
        className="carousel-btn"
        onClick={scrollLeft}
      >
        <KeyboardDoubleArrowLeft fontSize="inherit" />
      </IconButton>
      <div className="images" ref={carouselRef}>
        {images.map((item) => {
          return (
            <img
              src={item}
              className="carousel-img"
              alt={item}
              key={item}
            ></img>
          );
        })}
      </div>
      <IconButton
        aria-label="right"
        size="large"
        className="carousel-btn"
        onClick={scrollRight}
      >
        <KeyboardDoubleArrowRight fontSize="inherit" />
      </IconButton>
    </div>
  );
};

export default ImageCarousel;
