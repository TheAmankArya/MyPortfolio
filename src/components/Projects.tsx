
import { useState } from 'react';
import { Github, Globe, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Notes-App",
    description:
      "Capture, organize, and access your thoughts effortlessly with our smart Notes app.",
    image: "https://i.imgur.com/yICO7Sk.jpeg",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    live: "https://cipher-notesapp.netlify.app/",
    source: "https://github.com/TheAmankArya/NoteApp",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Al-Safety-Incident-Interface",
    description:
      "display AI safety incidents in a simple, user-friendly interface..",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
    tags: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    live: "https://ai-risk-dashboard.netlify.app/",
    source: "https://github.com/TheAmankArya/Al-Safety-Incident-Interface",
    category: "frontend",
  },
  {
    id: 3,
    title: "Fitness Tracking API",
    description:
      "RESTful API for tracking workouts, nutrition, and health metrics. Includes authentication, data visualization, and reporting.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    live: "#",
    source: "#",
    category: "backend",
  },
  {
    id: 4,
    title: "Hackathon Organizer",
    description:
      "This is a platform where people can join in an Hackathons and even can organise their own Hackathons.",
    image: "https://i.imgur.com/uAah8Pp.jpeg",
    tags: ["React", "Chart.js", "Redux", "Material UI"],
    live: "#",
    source: "#",
    category: "fullstack",
  },
  {
    id: 5,
    title: "Talent Trek",
    description:
      "Welcome to TalentTrek — a MERN-based portal connecting top talent with visionary companies",
    image: "https://i.imgur.com/ewT5YtF.png",
    tags: ["MongoDB", "React.js", "Express.js", "Node.js "],
    live: "https://talent-trek1150.vercel.app/",
    source: "https://github.com/TheAmankArya/TalentTrek",
    category: "fullstack",
  },
  {
    id: 6,
    title: "Prep-Bot",
    description:
      "AI-powered application that helps you prepare for the Interview",
    image: "https://i.imgur.com/tIMLJk9.jpeg",
    tags: ["Python", "TensorFlow", "React", "Flask", "OpenAI"],
    live: "https://prep-bot-lake.vercel.app/",
    source: "#",
    category: "ai",
  },
];

const filters = [
  { name: "All", value: "all" },
  { name: "Full Stack", value: "fullstack" },
  { name: "Frontend", value: "frontend" },
  { name: "Backend", value: "backend" },
  { name: "AI/ML", value: "ai" },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-purple">Projects</span></h2>
          <div className="w-20 h-1 bg-orange mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-xl mx-auto">
            Explore my latest projects showcasing my skills in web development, design, and problem-solving.
          </p>
        </div>

        <div className="flex justify-center mb-12 overflow-x-auto py-2">
          <div className="flex space-x-2">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter.value
                    ? "bg-purple text-white"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="glass rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple/10 hover:translate-y-[-5px] group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/5 text-xs px-3 py-1 rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <a
                    href={project.source}
                    className="flex items-center gap-2 text-gray-300 hover:text-purple transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-300 hover:text-purple transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe size={18} />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 text-purple hover:text-white transition-colors duration-300">
            <span>View All Projects</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
