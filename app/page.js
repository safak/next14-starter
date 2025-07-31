'use client'
import Navbar from '../components/Navbar'
import React, { useEffect, useState } from 'react';
import CorporateThreeJSBackground from '../components/CorporateThreeJSBackground'
import FashionHero from '@/components/slide';
import AlumniTestimonials from '@/components/testimonials';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);
  
  const handleLearnMore = () => {
    // Navigate to about page
    window.location.href = '/about';
  };
  
  const handleContact = () => {
    // Navigate to contact page
    window.location.href = '/contact';
  };
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      <CorporateThreeJSBackground/>
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b z-0"></div>
      
      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        
        <main className="py-17 sm:py-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              
              {/* Left Column - Text Content */}
              <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  The Official Fashion Club Of{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-900 to-indigo-500 bg-clip-text text-transparent">
                    NIT Jamshedpur
                  </span>
                </h1>
                
                <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Quod Invicta, NIT Jamshedpur's Official Fashion Club, is a hub of 
                  creativity and style. It's where fashion meets passion, and 
                  diversity is celebrated. Inspiring personal style, one event at a 
                  time.
                </p>
                
                {/* Contact and Learn More Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={handleLearnMore}
                    className="px-6 sm:px-8 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-all duration-300 min-w-[140px] text-sm sm:text-base"
                  >
                    LEARN MORE
                  </button>
                  <button
                    onClick={handleContact}
                    className="px-6 sm:px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-400 font-semibold rounded hover:bg-blue-600 hover:text-white transition-all duration-300 min-w-[140px] text-sm sm:text-base"
                  >
                    CONTACT
                  </button>
                </div>
              </div>
              
              {/* Right Column - Image */}
              <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="relative">
                  <div className="relative bg-gray-700 border-4 border-blue-800 rounded-lg overflow-hidden shadow-2xl w-full max-w-sm sm:max-w-md">
                    <img 
                      src="IMG_2680.JPG"
                      alt="Fashion Model"
                      className="w-full h-[350px] sm:h-[500px] md:h-[550px] object-cover"
                    />
                    <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-white">
                      <div className="text-xs font-light tracking-[0.2em] opacity-80">SHADES OF</div>
                      <div className="text-xl sm:text-2xl font-bold tracking-[0.1em]">FASHION</div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </main>
        
        {/* Additional Components Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="text-center">
            <div><FashionHero/></div>
            <div><AlumniTestimonials/></div>
          </div>
        </section>

        {/* Behind The Scenes Video Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Team Quod Invicta's{' '}
                <span className="text-gray-400">Behind-The-Scenes Video:</span>{' '}
                A snapshot of fashion's flair and unity at NIT Jamshedpur.
              </h2>
              
              <div className="pt-4">
                <button className="px-6 sm:px-8 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition-all duration-300 min-w-[140px] text-sm sm:text-base">
                  REGISTER
                </button>
              </div>
            </div>
            
            {/* Right Column - Video */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative w-full max-w-sm sm:max-w-lg">
                <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                  <iframe
                    className="w-full h-[300px] sm:h-[300px] md:h-[350px] rounded-lg"
                    src="https://www.youtube.com/embed/2CWQsS__pSM?si=IQkqKDsQ4uzCiyIO" 
                    title="TEAM QUOD INVICTA SHOWCASE CD..."
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  
                  {/* Video overlay content */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <div className="text-lg sm:text-2xl font-bold tracking-wider">BEHIND THE SCENES</div>
                      <div className="text-xs sm:text-sm tracking-[0.2em] mt-2">INVICTA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </div>
  )
}