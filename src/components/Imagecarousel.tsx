import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = ["/blog-t.jpg", "/blogimagenew.jpg", "/aboutnew.webp"];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to the previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const intervalId = setInterval(goToNext, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <Image
        src={images[currentIndex]}
        alt={`Carousel Image ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-500"
        width={500}
        height={500}
      />
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={goToPrevious}
      >
        &#9664;
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={goToNext}
      >
        &#9654;
      </button>
    </div>
  );
};

export default ImageCarousel;
