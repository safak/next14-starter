
"use client"
import dynamic from 'next/dynamic';

const AwesomeTestimonial = dynamic(() => import('react-awesome-testimonials'), {
  ssr: false,
});


// const Testimonials = () => {
//   return (
//       <>
//       {/* <h1>Testimonials</h1> */}
//       <AwesomeTestimonial
//         testimonials={[
//       {
//         name: "Eva",
//         company: "Amazon",
//         img_src: "https://i.ibb.co/84h8svL/eight.png",
//         review:
//           "Lorem 1 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
//       },
//       {
//         name: "Evelyn",
//         company: "Netflix",
//         img_src: "https://i.ibb.co/k8Jnx61/five.png",
//         review:
//           "Lorem 2 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
//       },
//       {
//         name: "Jack",
//         company: "Google",
//         img_src: "https://i.ibb.co/Yj8pMF8/four.png",
//         review:
//           "Lorem 3 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
//       },
//       {
//         name: "Sam",
//         company: "Microsoft",
//         img_src: "https://i.ibb.co/ph360c6/nine.png",
//         review:
//           "Lorem 4 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
//       },
//       {
//         name: "Abigail",
//         company: "Netflix",
//         img_src: "https://i.ibb.co/gwNmrLn/one.png",
//         review:
//           "Lorem 5 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
//       },
//       {
//         name: "Mortal",
//         company: "Google",
//         img_src: "https://i.ibb.co/6PF0kMg/seven.png",
//         review:
//           "Lorem 6 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
//       },
//       {
//         name: "Bruno",
//         company: "Netflix",
//         img_src: "https://i.ibb.co/7G9rtfD/six.png",
//         review:
//           "Lorem 7 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
//       },
//       {
//         name: "Vernoica",
//         company: "Facebook",
//         img_src: "https://i.ibb.co/pXMvXhK/three.png",
//         review:
//           "Lorem 8 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
//       },
//       {
//         name: "Astro",
//         company: "Netflix",
//         img_src: "https://i.ibb.co/WzJD5sj/two.png",
//         review:
//           "Lorem 9 ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
//       },
//     ]}
//      />
//     </>
//   );
// };

// export default Testimonials;


// import React from "react";

// import Marquee from "react-fast-marquee";

// const Testimonials = () => (
//   <Marquee gradient={true} gradientColor={"0 0 0"}>
//     <div><h1>1</h1></div>
//     <div><h1>1</h1></div>
//     <div><h1>1</h1></div>
//   </Marquee>
// );

// export default Testimonials;

import React from 'react';
import Marquee from 'react-fast-marquee';
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from "./testimonials.module.css"
// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
// const CardContainer = styled.div`
//   ${'' /* background-color: white; */}
//   padding: 20px;
//   border-radius: 10px;
//   display: inline-block;
//   ${'' /* margin-right: 0px; */}
//   max-width: 300px;
// `;

// const CardImage = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
//   border-radius: 10px;
// `;

// const CardTitle = styled.h3`
//   margin-top: 10px;
//   font-size: 1.2rem;
// `;

// const CardContent = styled.p`
//   margin-top: 10px;
//   font-size: 0.9rem;
// `;

// const Card1 = () => (
//   <CardContainer>
//     <CardImage src="https://via.placeholder.com/300x200" alt="Card Image" />
//     <CardTitle>Card Title</CardTitle>
//     <CardContent>
//       Card content goes here. This is a sample text to demonstrate the content
//       section of the card.
//     </CardContent>
//   </CardContainer>
// );
const Card1 = () => (
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="250"
        image="https://i.imgur.com/ahOh64S.jpeg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Syed Ateeb
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Some people call it a team, and some say it&apos;s a club. For me, it&apos;s an enjoyable collective to be around with whom I&apos;ve become so accustomed. All the very best to Quod Invicta❤️.
        </Typography>
        <Typography variant="subtitle1" >
          Batch of 2024
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
const Card2 = () => (
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="250"
        image="https://i.imgur.com/7FYxmNy.jpeg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ayush Jaiswal
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The place where everyone is like family.
        </Typography>
        <Typography variant="subtitle1" >
          Batch of 2023
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
const Card3 = () => (
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="250"
        image="https://i.imgur.com/pGKa1AL.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rajiv Ranjan
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Being part of this team feels like being part of a family. Together, we&apos;ve tackled numerous events, showcasing our collective skills. Our team gatherings, including the parties, have been filled with laughter and joy . I&apos;m grateful for the love and respect shown by each member of this team. It&apos;s the  support that makes our experiences together truly special. Thank you all for making every moment memorable and enjoyable.
        </Typography>
        <Typography variant="subtitle1" >
          Batch of 2024
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
const Card4 = () => (
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="250"
        image="https://i.imgur.com/riWKuqa.jpeg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nilesh Kumar
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Invicta, the fashion club at NIT Jamshedpur, is a dynamic space where style meets innovation. Through captivating events, workshops, and collaborations, it cultivates a vibrant community of fashion enthusiasts. As a member, I&apos;ve unlocked my creativity, formed meaningful connections, and embraced the boundless potential of fashion at NIT JSR.
        </Typography>
        <Typography variant="subtitle1" >
          Batch of 2023
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
const GradientMarquee = styled(Marquee)`
  
  ${'' /* padding: 10px; */}
  ${'' /* border-radius: 10px; */}
`;

const Testimonials = () => (
  <div className={styles.carousel}>

    {/* <GradientMarquee gradient={true} gradientColor={['#1F2544']} pauseOnHover={true} speed={50}> */}

    {/* <Card2 />
    <Card2 />
    <Card2 /> */}

    {/* </GradientMarquee> */}


    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        380: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        540: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      spaceBetween={40}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Card1 /></SwiperSlide>
      <SwiperSlide><Card2 /></SwiperSlide>
      <SwiperSlide><Card3 /></SwiperSlide>
      <SwiperSlide><Card4 /></SwiperSlide>

    </Swiper>

  </div>
);

export default Testimonials;