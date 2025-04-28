
import { useState } from 'react';
import { Code, Briefcase, User } from 'lucide-react';

const tabs = [
  {
    id: 'about',
    label: 'About Me',
    icon: User
  },
  {
    id: 'experience',
    label: 'Experience',
    icon: Briefcase
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: Code
  }
];

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Am <span className="text-purple">I</span>?</h2>
          <div className="w-20 h-1 bg-orange mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple/30 to-orange/30 rounded-lg blur-2xl"></div>
            <div className="aspect-[4/5] rounded-lg overflow-hidden border border-white/10 relative">
              <img 
                src="https://i.imgur.com/S6brYeI.png" 
                alt="Amank Coding" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-purple-dark p-4 border border-white/10 rounded-lg shadow-xl max-w-xs">
              <p className="text-lg font-medium text-white">
              "Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t."
              
              </p>
              <p className="text-right text-sm text-gray-400 mt-2">- — Rikki Rogers</p>
            </div>
          </div>

          <div>
            <div className="flex border-b border-white/10 mb-6 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 transition-colors duration-300 ${
                    activeTab === tab.id
                      ? 'text-purple border-b-2 border-purple'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <tab.icon className="mr-2" size={18} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {activeTab === 'about' && (
              <div className="space-y-4 animate-fade-in">
                <p className="text-lg text-gray-300">
                "I'm Amank Arya — a full-stack developer, explorer, creator.
                I don't just build things — I visualize, innovate, and breathe life into ideas. My passions — tech, travel, photography, fitness, and languages — aren't separate from my work; they sharpen my creativity and push me to create solutions that are bold, intuitive, and human. For me, development isn't just a skill — it's an experience."
                </p>
                <p className="text-lg text-gray-300">
                  
                </p>
                <div className="pt-4">
                  <h3 className="text-xl font-bold mb-2">Hobbies & Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Gaming','Music', 'Photography', 'Fitness', 'Travel','Language'].map((hobby) => (
                      <span key={hobby} className="px-4 py-2 bg-white/5 rounded-full text-gray-300">
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-6 animate-fade-in">
                <div className="glass p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-1">Software Engineer</h3>
                  <p className="text-orange">ABC Tech Solutions • 2021 - Present</p>
                  <p className="text-gray-400 mt-2">
                    Leading development of user interfaces, implementing RESTful APIs, and 
                    optimizing database queries for improved performance.
                  </p>
                </div>
                
                <div className="glass p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-1">Frontend Developer Intern</h3>
                  <p className="text-orange">XYZ Digital • 2020 - 2021</p>
                  <p className="text-gray-400 mt-2">
                    Assisted in developing responsive web applications, collaborating with designers
                    to implement UI components using React.js and Tailwind CSS.
                  </p>
                </div>
                
                <div className="glass p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-1">Freelance Web Developer</h3>
                  <p className="text-orange">Self-Employed • 2019 - 2020</p>
                  <p className="text-gray-400 mt-2">
                    Created custom websites for small businesses and individuals, focusing on 
                    responsive design, SEO, and performance optimization.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="animate-fade-in">
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    { name: "React.js", progress: 90 },
                    { name: "Node.js", progress: 85 },
                    { name: "MongoDB", progress: 80 },
                    { name: "Express.js", progress: 85 },
                    { name: "JavaScript", progress: 95 },
                    { name: "TypeScript", progress: 80 },
                    { name: "HTML/CSS", progress: 90 },
                    { name: "Tailwind CSS", progress: 85 }
                  ].map((skill) => (
                    <div key={skill.name} className="mb-3">
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-orange">{skill.progress}%</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-2">
                        <div 
                          className="progress-bar" 
                          style={{ width: `${skill.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
