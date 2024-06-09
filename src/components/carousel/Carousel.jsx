"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./carousel.module.css";
import Image from "next/image";
export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 1500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
          
        }
      }
    ]
  };
  return ( <div >
    <Slider className={styles.carousel} {...settings}>
      <div>
        <Image src="/carousel_images/1.jpg" height={716} width={1080} className={styles.carouselImage} ></Image>
      </div>
      <div>
      <Image src="/carousel_images/2.jpg" height={716} width={1080} className={styles.carouselImage}></Image>
      </div>
      <div>
      <Image src="/carousel_images/3.jpg" height={716} width={1080} className={styles.carouselImage}></Image>
      </div>
      <div>
      <Image src="/carousel_images/4.jpg" height={716} width={1080} className={styles.carouselImage}></Image>
      </div>
      <div>
      <Image src="/carousel_images/5.jpg" height={716} width={1080} className={styles.carouselImage}></Image>
      </div>
      <div>
      <Image src="/carousel_images/6.jpg" height={716} width={1080} className={styles.carouselImage}></Image>
      </div>
    </Slider>
    </div>
  );
}