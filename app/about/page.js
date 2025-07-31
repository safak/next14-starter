"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";

const AboutPage = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      <Navbar/>
      {/* Animated Background */}

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* About Sections */}
      <AboutSections />

      {/* Team Section */}
      <TeamSection />

      {/* Developers Section */}
      <DevelopersSection />

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        .animate-twinkle {
          animation: twinkle 2s infinite;
        }
      `}</style>
    </div>
  );
};

const HeroSection = () => {
  return (
    <RevealOnScroll>
      <div className="relative z-10 pt-25 pb-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-purple-400 mb-4 tracking-wide"
        >
          Fashion • Sustainability • Innovation
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-12"
        >
          The Official Fashion Club of NIT Jamshedpur
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative max-w-6xl mx-auto px-3 mb-10"
      >
        <div className="overflow-hidden shadow-2xl bg-gray-800">
          <img 
            src="517fc61b-b448-4de4-a852-f09b2084b588.jpeg" 
            alt="Culfest 2025" 
            className="w-full h-106 md:h-116 object-cover"
          />
          <div className="p-3">
            <h3 className="text-2xl font-bold mb-2 text-white">Culfest 2025</h3>
            <p className="text-gray-300 text-lg">
              Where Fashion Meets Art - A spectacular showcase of creativity and style
            </p>
          </div>
        </div>
      </motion.div>
    </RevealOnScroll>
  );
};

const StatsSection = () => {
  const stats = [
    { icon: "🏆", number: "14+", label: "Years of Excellence" },
    { icon: "⭐", number: "50+", label: "Fashion Shows" },
    { icon: "💎", number: "20+", label: "Brand Collaborations" },
    { icon: "👥", number: "100+", label: "Fashion Enthusiasts" },
  ];

  return (
    <RevealOnScroll>
      <div className="py-16 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-gray-800  border border-gray-700 hover:border-purple-500 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
};

const AboutSections = () => {
  const sections = [
    {
      icon: "💡",
      title: "Our Story",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Founded in 2011 as "Invincibles" and rebranded in 2017 as "Quod
            Invicta" – where 'Invicta' means 'Invincibles' in Latin, preserving
            our legacy of excellence. We are more than a fashion team; we are
            visionaries who believe fashion should be a conscious lifestyle
            choice.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our mission transcends traditional fashion boundaries. We engineer
            innovative designs that speak to the soul while collaborating with
            forward-thinking brands to champion sustainable clothing practices.
            Every thread we weave tells a story of responsibility, creativity,
            and timeless style.
          </p>
        </div>
      ),
    },
    {
      icon: "🎯",
      title: "Our Vision",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            To revolutionize the fashion industry by making sustainability the
            new standard of beauty. We envision a world where every garment
            tells a story of environmental consciousness, artistic innovation,
            and social responsibility.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Through our platform, we aim to inspire the next generation of
            fashion enthusiasts to embrace ethical practices while never
            compromising on style, creativity, or self-expression.
          </p>
        </div>
      ),
    },
    {
      icon: "🏅",
      title: "Hall of Fame",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Our journey of excellence spans over a decade, marked by consistent
            recognition and groundbreaking achievements:
          </p>
          <div className="grid gap-3">
            {[
              "🏆 Runner-Up at Spring Fest '25 - IIT Kharagpur",
              "🥉 3rd Position in Culfest '25",
              "🏅 Winner of Culfest '24",
              "👑 Culfest '20 Champions",
              "⭐ Ensemble Valhalla '19 Champions",
              "🎯 Featured in shows by IITs, NITs, XLRI, Tata Steel",
              "💎 Directed & shot Tanishq's 2020 Valentine's collection",
              "🌟 Over 50+ successful fashion shows",
              "🤝 Collaborated with 20+ sustainable fashion brands",
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center text-gray-300 bg-gray-800 p-3 border-l-4 border-purple-500"
              >
                {achievement}
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {sections.map((section, index) => (
          <RevealOnScroll key={index}>
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 flex items-center text-white">
                <span className="text-4xl mr-4">{section.icon}</span>
                {section.title}
              </h2>
              <div>{section.content}</div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Lavish",
      role: "Captain & Innovation Lead",
      image: "63b6dd82-ad77-4869-82ee-467d687c2cbc.jpeg",
      description:
        "Driving innovation and sustainable practices while maintaining the highest standards of creativity.",
      skills: ["Leadership", "Innovation", "Sustainability"],
      contact: {
        email: "2022ugcs094@nitjsr.ac.in",
        linkedin: "#",
        phone: "9761061161"
      }
    },
    {
      name: "Kaushiki",
      role: "Captain & Operations Head",
      image: "kaushiki.jpg",
      description:
        "Ensuring operational excellence and team coordination for all fashion shows and events.",
      skills: ["Operations", "Team Management", "Event Planning"],
      contact: {
        email: "#",
        linkedin: "#",
        phone: "6289296464"
      }
    },
    {
      name: "Srijan Swapnil",
      role: "Vice-Captain",
      image: "a2a5a7c2-1746-4358-8a37-0ae3b44c09c4.jpeg",
      description:
        "",
      skills: ["Leadership","UI/UX Design", "Web Development", "Technology"],
      contact: {
        email: "2023ugcs020@nitjsr.ac.in",
        linkedin: "#",
        phone: "9162780885"
      }
    },
    {
      name: "Kanishka",
      role: "Vice-Captain & Operations Head",
      image: "kanishka.jpeg",
      description:
        "",
      skills: ["Strategic Planning", "Coordination"],
      contact: {
        email: "2023ugme073@nitjsr.ac.in",
        linkedin: "#",
        phone: "8579098733"
      }
    },
  ];

  return (
    <div className="py-16 px-6">
      <RevealOnScroll>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Core Members</h2>
          <p className="text-xl text-gray-400 mb-8">Meet Our Visionaries</p>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <TeamCard key={member.name} member={member} index={index} />
        ))}
      </div>
    </div>
  );
};

const DevelopersSection = () => {
  const developers = [
    {
      name: "Ashish",
      role: "Full-Stack Developer & UX Designer",
      image: "ashish.jpg",
      description:
        "",
      skills: ["Full-Stack Development", "UX Design", "Innovation"],
      
    },
    {
      name: "Srijan Swapnil",
      role: "Frontend Developer & Digital Strategist",
      image: "srijan.jpg",
      description:
        "",
      skills: ["Fullstack Development", "Digital Strategy"],
    },
  ];

  return (
    <div className="py-16 px-6 ">
      <RevealOnScroll>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Digital Architects</h2>
          <p className="text-xl text-gray-400 mb-8">
            The Tech Visionaries Behind Our Digital Presence
          </p>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-2 md:grid-cols gap-10 max-w-3xl mx-auto">
        {developers.map((developer, index) => (
          <TeamCard key={developer.name} member={developer} index={index} />
        ))}
      </div>
    </div>
  );
};

const TeamCard = ({ member, index }) => {
  const fallbackImage = "https://via.placeholder.com/400x280?text=No+Image";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={member.image || fallbackImage}
          alt={`${member.name}, ${member.role}`}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
        <div className="text-gray-400 text-sm mb-3 font-medium">{member.role}</div>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.description}</p>
        
        {member.skills && (
          <div className="flex flex-wrap gap-2 mb-4">
            {member.skills.map((skill, skillIndex) => (
              <span 
                key={skillIndex} 
                className="px-3 py-1 text-xs bg-purple-600 text-white rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
        
        {member.contact && (
          <div className="flex gap-3">
            <a 
              href={member.contact.email} 
              className="w-8 h-8 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center text-sm transition-colors"
            >
              📧
            </a>
            <a 
              href={member.contact.linkedin} 
              className="w-8 h-8 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center text-sm transition-colors"
            >
              🔗
            </a>
            <a 
              href={member.contact.phone} 
              className="w-8 h-8 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center text-sm transition-colors"
            >
              📱
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default AboutPage;