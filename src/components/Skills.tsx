
import { Server, Code, Database, Palette } from 'lucide-react';

const categories = [
  {
    name: "Frontend",
    icon: Palette,
    skills: [
      "HTML5/CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Next.js",
      "Responsive Design",
    ],
  },
  {
    name: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "GraphQL",
      "Authentication",
      "Authorization",
      "Serverless",
    ],
  },
  {
    name: "Database",
    icon: Database,
    skills: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Mongoose",
      "SQL",
      "NoSQL",
    ],
  },
  {
    name: "Tools & Others",
    icon: Code,
    skills: [
      "Git & GitHub",
      "Docker",
      "AWS",
      "Heroku",
      "Jest",
      "CI/CD",
      "Webpack",
      "Vite",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gradient-radial from-purple/5 via-transparent to-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I <span className="text-purple">Do</span></h2>
          <div className="w-20 h-1 bg-orange mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-xl mx-auto">
          I craft powerful fullstack apps blending sleek frontend magic with robust backend engines, built for speed, scale, and wow factor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="glass p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple/10 hover:translate-y-[-5px]">
              <div className="w-14 h-14 rounded-lg bg-purple/10 flex items-center justify-center mb-6">
                <category.icon size={28} className="text-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4">{category.name}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-orange rounded-full"></span>
                    <span className="text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
