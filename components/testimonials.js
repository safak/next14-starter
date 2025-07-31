
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Diya Singh",
    quote:
      "Being a part of Invicta since day one has been incredible.From the amazing seniors I had to the juniors who have been taking this team further,every moment unforgettable.I’ll always cherish this journey✨",
    batch: "2025",
    Image: "New folder (2)/IMG20230117165205 - Diya Singh.jpg",
  },
  {
    name: "Ashish Satpathy",
    quote:
      "Some of the best times ever. Met the coolest people and made the craziest memories. So grateful I got to be part of something this cool—and I’ll always be rooting for the club, no matter what! 🍻",
    batch: "2025",
    Image: "New folder (2)/20250301_170829 - Ashish Satpathy.jpg",
  },
  {
    name: "Shikha Singh",
    quote:
      "Quod Invicta has been more than just a fashion club it is been my family .Every moment  was filled with passion, laughter, and growth.Quod Invicta ✨",
    batch: "2025",
    Image: "New folder (2)/IMG-20250316-WA0044 - Shikha Singh.jpg",
  },
  {
    name: "Sourav Kumar",
    quote:
      "Quod Invicta — A Family, Always.From early mornings at practice,To late nights prepping props,Every moment has been part of an unforgettable journey.",
    batch: "2025",
    Image: "New folder (2)/IMG_2038 - sourav kumar.jpeg",
  },
  {
    name: "Daniyal",
    quote:
      "Getting into Invicta was the best decision I made during my college life. What I love the most about this club is its culture,every moment has had, and always will have, a special place in my heart.",
    batch: "2025",
    Image:
      "New folder (2)/c6d68591-077f-4c1b-8593-130aafeb5a43 - Daniyal Nayeemi.jpeg",
  },
  {
    name: "Anjali Maurya",
    quote:
      "Being a part of Quod Invicta has been one of the best parts of my college journey.I’ll always cherish those morning and evening practice sessions full of energy,laughter,teamwork.",
    batch: "2025",
    Image: "New folder (2)/IMG_20250424_134527 - ANJALI MAURYA.jpg",
  },
  {
    name: "Mayank Raj",
    quote:
      "Loved my time in the Quod Invicta — sketching ideas, bringing designs to life, growing with every event and every moment was a runway of friendship and style.",
    batch: "2025",
    Image: "New folder (2)/IMG-20250331-WA0384 - Mayank Raj.jpg",
  },
  {
    name: "Divya Sharma",
    quote:
      "I'm so proud of each one of you, and I know you're going to do incredible things in future.All the best, guys! May Invita keep growing and shining brighter. ✨♥️ ",
    batch: "2025",
    Image: "New folder (2)/972e3ddf-1f48-45e9-a8e4-5e2a78682502.jpeg",
  },
  {
    name: "Shivam Bit",
    quote:
      "It was really amazing to be a part of this club. Those 5 am practice, to that stage elegance embraced my overall personality.",
    batch: "2025",
    Image:
      "New folder (2)/Screenshot_2025-06-13-16-18-45-065_com.google.android.apps.photos - 110_Shivam Bit.jpg",
  },
  {
    name: "Belal Ahmad",
    quote:
      "Invicta is not just a society, it is a legacy that stays with you forever. I’m excited to see how the next generation takes this family to even greater heights.Remember, you’re unstoppable - Invicta!With gratitude and love,Belal Ahmad",
    batch: "2025",
    Image: "New folder (2)/20250615_165037 - Belal Ahmad.jpg",
  },
  {
    name: "Prince",
    quote:
      "Quod Invicta is not just a club but a family. I got such beautiful memories that i can cherish forever, from harsh morning practices to proudly flaunting on stage and yes always stay united guys bcs u people r the best❤️✨",
    batch: "2025",
    Image: "New folder (2)/IMG-20250225-WA0273 - Prince Kumar 19.jpg",
  },
  {
    name: "Sudhanshu",
    quote:
      "The supportive community and creative challenges at Invicta helped me discover my passion for fashion.",
    batch: "2025",
    Image: "New folder (2)/964eb9b8-541d-40da-b514-47ecd802b31a.jpeg",
  },
  {
    name: "Abhinav",
    quote:
      "Quod Invicta: where fashion met chaos, and practice met 5 more minutes please. From hyping each other like runway pros to surviving last-minute meltdowns and then threw us on stage with two hours of sleep and a safety pin holding our outfit together. we were a mess, but we made it fashion.",
    batch: "2025",
    Image: "20250322_143529 - Abhinav Kumar.jpg",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-20 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Love from our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Alumni
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <Slider {...settings}>
        {testimonials.map((t, index) => {
          const image = t.Image || t.backgroundImage;
          return (
            <div key={index} className="px-2">
              <div
                className="relative h-72 rounded-xl overflow-hidden  bg-cover bg-center text-white"
                style={{ backgroundImage: `url(${image})` }}
              >
                <img
                  src={image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 p-5 flex flex-col justify-end">
                  <h3 className="font-bold text-xl mb-1">{t.name}</h3>
                  <p className="text-sm italic text-gray-200 mb-1">
                    Batch of {t.batch}
                  </p>
                  <p className="text-sm leading-snug text-gray-100">
                    "{t.quote}"
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
