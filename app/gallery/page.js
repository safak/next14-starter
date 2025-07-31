'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';

const fashionEvents = [
  {
    id: 1,
    title: "SpringFest",
    date: "Jan 2025",
    location: "IIT KGP",
    attendees: "500+",
    images: [
      { id: 1, url: "033656d5-0706-4fd8-ac4f-dfb977583b1e.jpeg" },
      { id: 2, url: "4066812a-27f9-494e-9f4f-fde90caffeda.jpeg" },
      { id: 3, url: "d84ea877-79d2-4b37-ac1a-3c448db7077b.jpeg" },
      { id: 4, url: "bfda092c-9a23-46e6-aa56-d1216efc67a3.jpeg" },
    ],
    description: "The most prestigious fashion event showcasing luxury brands and emerging designers",
    category: "Runway"
  },
  {
    id: 2,
    title: "CULFEST 25",
    date: "JANUARY 2025",
    location: "NIT JSR",
    attendees: "1,000+",
    images: [
      { id: 5, url: "22ddc87c-e4ee-4512-a42d-7fa510b2e218 (1).jpeg" },
      { id: 6, url: "b56c1ec3-ce3b-4c58-994f-f1d83dbdc965.jpeg" },
      { id: 7, url: "IMG_2654.JPG" },
      { id: 8, url: "IMG_7914.JPG" },
    ],
    description: "Exclusive haute couture collections from world-renowned fashion houses",
    category: "Panache"
  },
  {
    id: 3,
    title: "CDS 24",
    date: "October 2024",
    location: "NIT JSR",
    attendees: "5,000+",
    images: [
      { id: 8, url: "CDS 25/5ec67d7b-b587-4208-9e75-6ab7cd90d34b.jpeg" },
      { id: 9, url: "CDS 25/930faa16-9a59-4b5f-b663-2ccf4a68d9d2.jpeg" },
      { id: 10, url: "CDS 25/8923d025-437a-475a-aadf-fc497d1c0702.jpeg" }
    ],
    description: "Urban fashion trends and street style photography from the Big Apple",
    category: "Street Style"
  },
  {
    id: 4,
    title: "CULFEST 24",
    date: "FEB 2024",
    location: "NIT JSR",
    attendees: "1,500+",
    images: [
      { id: 13, url: "Culfest 24/5a2e7790-4255-410a-b294-e31bafd8711b.jpeg" },
      { id: 14, url: "Culfest 24/bbabb9b8-f409-4010-9b81-77ee505fdbe6.jpeg" },
      { id: 15, url: "Culfest 24/bcabeb6b-7845-4a7b-82e6-bcefcc1154d5.jpeg" },
      { id: 16, url: "Culfest 24/efef9f90-d78d-4b91-ae06-edce4cae20e4.jpeg" },
    ],
    description: "Avant-garde fashion and innovative designs from Japanese creators",
    category: "Festival"
  }
];

const ImageModal = ({ image, event, onClose, onNext, onPrev }) => (
  <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="relative max-w-4xl w-full">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-pink-400 text-2xl z-10"
      >
        ×
      </button>
      
      <div className="relative">
        <div className="w-full h-96 bg-black rounded-lg relative overflow-hidden">
          <img 
            src={image.url} 
            alt={`${event.title} fashion photo`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {event.date}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {event.location}
              </span>
            </div>
          </div>
        </div>
        
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  </div>
);

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Runway', 'Panche'];
  
  const filteredEvents = filter === 'All' 
    ? fashionEvents 
    : fashionEvents.filter(event => event.category === filter);

  const handleImageClick = (image, event) => {
    setSelectedImage(image);
    setSelectedEvent(event);
  };

  const handleNext = () => {
    const currentImages = selectedEvent.images;
    const currentIndex = currentImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % currentImages.length;
    setSelectedImage(currentImages[nextIndex]);
  };

  const handlePrev = () => {
    const currentImages = selectedEvent.images;
    const currentIndex = currentImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    setSelectedImage(currentImages[prevIndex]);
  };

  return (
    
    <div className="py-8 min-h-screen bg-black relative overflow-hidden">
      <Navbar/>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-yellow-500 to-pink-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="border border-white/20 rounded-lg"
              style={{
                animationDelay: `${i * 0.1}s`,
                animation: 'pulse 3s ease-in-out infinite'
              }}
            />
          ))}
        </div>
      </div>

      {/* Navbar placeholder */}
      
      
      <main className="m-3 relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
            Fashion Gallery
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Explore the world's most prestigious fashion events and discover trending styles from around the globe
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="space-y-16">
          {filteredEvents.map((event) => (
            <div key={event.id} className="group">
              {/* Event Header */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{event.title}</h2>
                    <p className="text-gray-400 text-lg mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-6 text-sm text-gray-300">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-pink-400" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-400" />
                        {event.attendees} attendees
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-600/20 text-pink-400 rounded-full text-sm font-medium border border-pink-500/30">
                      {event.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {event.images.map((image) => (
                  <div
                    key={image.id}
                    onClick={() => handleImageClick(image, event)}
                    className="group/image cursor-pointer transform transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative overflow-hidden rounded-xl">
                      <div className="h-64 relative">
                        <img 
                          src={image.url} 
                          alt={`${event.title} fashion photo`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover/image:bg-black/40 transition-colors duration-300"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                          <div className="text-white text-center">
                            <div className="w-12 h-12 mx-auto mb-2 border-2 border-white rounded-full flex items-center justify-center">
                              <span className="text-xl">+</span>
                            </div>
                            <p className="text-sm font-medium">View Image</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-pink-500/10 to-purple-600/10 rounded-2xl p-8 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">
                {fashionEvents.reduce((acc, event) => acc + event.images.length, 0)}
              </div>
              <div className="text-gray-400">Total Images</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">
                {fashionEvents.length}
              </div>
              <div className="text-gray-400">Fashion Events</div>
            </div>
          </div>
        </div>
      </main>

      {/* Image Modal */}
      {selectedImage && selectedEvent && (
        <ImageModal
          image={selectedImage}
          event={selectedEvent}
          onClose={() => {
            setSelectedImage(null);
            setSelectedEvent(null);
          }}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
}