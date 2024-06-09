"use client"
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
 
const AutoplaySlider = withAutoplay(AwesomeSlider);
import styles from "./carousel2.module.css" 


const Carousel2 = () => {
  return (
    <div className={styles.carousel}><AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
    mobileTouch={true}
    
  >
    <div data-src="/carousel_images/1.jpg" />
    <div data-src="/carousel_images/2.jpg" />
    <div data-src="/carousel_images/3.jpg" />
    <div data-src="/carousel_images/4.jpg" />
    <div data-src="/carousel_images/5.jpg" />
    <div data-src="/carousel_images/6.jpg" />
  </AutoplaySlider></div>
  )
}

export default Carousel2




