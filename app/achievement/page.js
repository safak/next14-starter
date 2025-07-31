import Navbar from '@/components/Navbar';
import React from 'react';
import CorporateThreeJSBackground from '../../components/CorporateThreeJSBackground'
const Achievement= () => {
  const achievements = [
    {
      id: 1,
      title: "Runner-Up at Spring Fest '25",
      subtitle: "IIT Kharagpur",
      icon: "🏆",
      year: "2025",
      description: "Secured second position in the prestigious Spring Fest fashion show at IIT Kharagpur, showcasing exceptional creativity and teamwork.",
      image: "c47e3225-c374-48f4-8617-9854be2c7a17.jpeg"
    },
    {
      id: 2,
      title: "3rd Position in Culfest '25",
      subtitle: "Cultural Festival",
      icon: "🥉",
      year: "2025",
      description: "Achieved third place in Culfest '25, demonstrating consistent excellence in fashion presentation and design innovation.",
      image: "517fc61b-b448-4de4-a852-f09b2084b588.jpeg"
    },
    {
      id: 3,
      title: "Winner of Culfest '24",
      subtitle: "Champion Performance",
      icon: "🏅",
      year: "2024",
      description: "Claimed victory at Culfest '24 with an outstanding fashion show that captivated audiences and judges alike.",
      image: "20240211_183531.jpg"
    },
    {
      id: 4,
      title: "Culfest '20 Champions",
      subtitle: "Legendary Victory",
      icon: "👑",
      year: "2020",
      description: "Dominated Culfest '20 with a championship-winning performance that set new standards for fashion excellence.",
      image: "2.jpg"
    },
    {
      id: 5,
      title: "Ensemble Valhalla '19 Champions",
      subtitle: "Supreme Excellence",
      icon: "⭐",
      year: "2019",
      description: "Achieved championship status at Ensemble Valhalla '19, showcasing the pinnacle of fashion artistry and performance.",
      image: "4e89974b-bf97-4a5b-9aba-9183a9c6cd04.jpeg"
    },
    {
      id: 6,
      title: "Featured in Premier Institution Shows",
      subtitle: "IITs, NITs, XLRI, Tata Steel",
      icon: "🎯",
      year: "2018-2025",
      description: "Regularly featured and invited to showcase at prestigious institutions and corporate events, establishing a reputation for excellence.",
      image: "177d78cd-99bb-412c-acf6-d8e33886e28e.jpeg"
    },
    {
      id: 7,
      title: "Tanishq Valentine's Collection",
      subtitle: "Professional Collaboration",
      icon: "💎",
      year: "2020",
      description: "Directed and shot Tanishq's 2020 Valentine's collection, marking a significant milestone in commercial fashion photography.",
      image: "8a081ee4-041b-4801-b686-b95e8e6c6540.jpeg"
    },
    {
      id: 8,
      title: "50+ Successful Fashion Shows",
      subtitle: "Consistent Excellence",
      icon: "🌟",
      year: "2018-2025",
      description: "Organized and executed over 50 successful fashion shows, each one a testament to creativity, professionalism, and artistic vision.",
      image: "033656d5-0706-4fd8-ac4f-dfb977583b1e.jpeg"
    },
    {
      id: 9,
      title: "Sustainable Fashion Collaborations",
      subtitle: "20+ Brand Partnerships",
      icon: "🤝",
      year: "2019-2025",
      description: "Partnered with over 20 sustainable fashion brands, promoting eco-conscious fashion and responsible design practices.",
      image: "02902aac-f6b7-4d72-80a2-bf38b6f2b2f2.jpeg"
    }
  ];

  return (
    <>
    <Navbar/>
    
    <div className="py-5min-h-screen">
      {/* Header Section */}
      <div className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 via-purple-900 to-indigo-500 bg-clip-text text-transparent">Achievements</span>
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            A legacy of excellence, creativity, and innovation that defines Quod Invicta's journey in the world of fashion
          </p>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="space-y-16">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image Section */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative overflow-hidden rounded-lg shadow-2xl">
                    <img 
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4 text-4xl">{achievement.icon}</div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-xs font-light tracking-wider opacity-80">{achievement.year}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{achievement.icon}</span>
                    <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
                      {achievement.year}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    {achievement.title}
                  </h2>
                  <h3 className="text-xl text-gray-400 font-medium">
                    {achievement.subtitle}
                  </h3>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {achievement.description}
                </p>
                
                <div className="pt-4">
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Achievement;