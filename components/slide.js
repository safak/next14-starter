import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const FashionHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // Start with auto-play enabled

  // Sample slides - replace with your own images
  const slides = [
    {
      id: 1,
      image: 'IMG_2562.JPG',
      title: '',
      caption: 'Shine like Glitters'
    },
    {
      id: 2,
      image: 'IMG_2628.JPG',
      
      caption: 'A peaceful journey through nature'
    },
    {
      id: 3,
      image: 'IMG_2550.JPG',
      
      caption: 'Mascarade'
    },
    {
      id: 4,
      image: '22ddc87c-e4ee-4512-a42d-7fa510b2e218 (1).jpeg',
      
      caption: 'The Darkness'
    },
    {
      id: 5,
      image: '4066812a-27f9-494e-9f4f-fde90caffeda.jpeg',
      
      caption: 'Quod Invicta'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto-play functionality - now set to 4 seconds
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(nextSlide, 5000); // Changed to 4 seconds
      return () => clearInterval(interval);
    }
  }, [isPlaying, currentSlide]);

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Main slideshow container */}
      <div className="relative h-120 overflow-hidden">
        {/* Slides */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full flex-shrink-0 relative">
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Caption */}
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xl font-bold bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl leading-relaxed tracking-wider antialiased filter brightness-110">{slide.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
        >
          <ChevronRight size={24} />
        </button>

        {/* Play/Pause button */}
        <button
          onClick={togglePlayPause}
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
      </div>
    
    </div>
  );
};

export default FashionHero;