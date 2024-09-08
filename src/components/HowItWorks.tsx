import React from "react";

const steps = [
  {
    title: "Discover",
    description:
      "Explore a wide variety of blogs on different topics. Use the search and filter options to find content that interests you.",
    icon: "🔍",
  },
  {
    title: "Engage",
    description:
      "Read detailed blog posts and engage with content by sharing your thoughts.",
    icon: "🛠️",
  },
  {
    title: "Create",
    description:
      "Share your ideas with the world by creating your own blog posts. Use our blog form to write and publish your content.",
    icon: "🚀",
  },
  {
    title: "Connect",
    description:
      "Crafting a Digital Canvas for Your Thoughts. Share your thoughts and ideas with the world.",
    icon: "🤝",
  },
  {
    title: "Empower",
    description: "A Space for Voices: Here, your voice matters.",
    icon: "📩",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div className="py-8 bg-[#5f7c7b] ">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-6 text-white"
          style={{
            textShadow: `
      1px 1px 0 #343833,
      -1px -1px 0 #343833,
      1px -1px 0 #343833,
      -1px 1px 0 #343833,
      0 1px 0 #343833,
      1px 0 0 #343833,
      0 -1px 0 #343833,
      -1px 0 0 #343833
    `,
          }}
        >
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 mx-8">
          {steps.slice(0, 3).map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-[#c5d4d2] p-6 rounded-lg shadow-xl"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-48">
          {steps.slice(3).map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-[#c5d4d2] p-6 rounded-lg shadow-xl"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
