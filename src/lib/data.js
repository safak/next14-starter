// TEMPORARY DATA
const users = [
  { id: 1, username: "John" },
  { id: 2, username: "Jane" },
];

const posts = [
  { id: 1, title: "Post 1", body: ".....", userId: 1 },
  { id: 2, title: "Post 2", body: ".....", userId: 2 },
  { id: 3, title: "Post 3", body: ".....", userId: 1 },
  { id: 4, title: "Post 4", body: ".....", userId: 2 },
];

export const getPosts = () => {
  return posts;
};

export const getPost = (id) => {
  return posts.find((post) => post.id === id);
};

export const getUser = (id) => {
  return users.find((user) => user.id === id);
}

// PORTFOLIO DATA
const projects = [
  {
    id: 1,
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with cart, payments, and admin dashboard",
    body: "Built a comprehensive e-commerce solution featuring product management, shopping cart functionality, secure payment integration with Stripe, and a complete admin dashboard for inventory management. Implemented real-time order tracking and automated email notifications.",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
    category: "Full-Stack",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    id: 2,
    slug: "task-management-app",
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates",
    body: "Developed a real-time collaborative task management application with drag-and-drop Kanban boards, team collaboration features, deadline tracking, and notification system. Integrated WebSocket for real-time synchronization across multiple users.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    category: "Frontend",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    id: 3,
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Real-time weather tracking dashboard with forecasts and alerts",
    body: "Created an interactive weather dashboard that displays current conditions, 7-day forecasts, and severe weather alerts. Features include location-based weather, historical data visualization, and customizable weather widgets.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS Modules"],
    category: "Frontend",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false
  },
  {
    id: 4,
    slug: "blog-cms",
    title: "Blog CMS",
    description: "Content management system with markdown support and SEO optimization",
    body: "Built a modern content management system with markdown editor, image uploads, SEO optimization, and analytics dashboard. Includes role-based access control, scheduled publishing, and automatic sitemap generation.",
    image: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "AWS S3"],
    category: "Full-Stack",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    id: 5,
    slug: "fitness-tracker",
    title: "Fitness Tracker",
    description: "Mobile-responsive fitness tracking app with workout plans and progress charts",
    body: "Developed a comprehensive fitness tracking application with custom workout plans, progress visualization, calorie tracking, and social features. Integrated with health APIs for step counting and heart rate monitoring.",
    image: "https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg",
    technologies: ["React Native", "Express", "MongoDB", "Chart.js"],
    category: "Mobile",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false
  },
  {
    id: 6,
    slug: "ai-chat-assistant",
    title: "AI Chat Assistant",
    description: "AI-powered chat assistant with natural language processing",
    body: "Created an intelligent chat assistant using OpenAI's GPT API with context-aware responses, conversation history, and customizable personality settings. Features include voice input, multilingual support, and integration with various data sources.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    technologies: ["Next.js", "OpenAI API", "PostgreSQL", "WebSocket"],
    category: "Full-Stack",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  }
];

const skills = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
  backend: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
  tools: ["Git", "Docker", "AWS", "Vercel", "Figma", "Webpack", "Jest", "CI/CD"]
};

export const getProjects = () => {
  return projects;
};

export const getProject = (slug) => {
  return projects.find((project) => project.slug === slug);
};

export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByCategory = (category) => {
  return projects.filter((project) => project.category === category);
};

export const getSkills = () => {
  return skills;
};
