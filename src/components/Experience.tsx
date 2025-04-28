
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "MERN Stack Developer(Summer Course)",
    company: "Cipher School",
    period: "2024 - 2025",
    description: "Built full-stack MERN applications, mastered frontend and backend integration, and developed RESTful APIs to enhance project efficiency by 40%..",
    skills: ["React.js", "Node.js", "MongoDB", "ExpressJs"]
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Innovations Inc.",
    period: "2020 - 2022",
    description: "Developed scalable web applications, optimized database queries for 30% faster performance, and implemented responsive UI designs for mobile compatibility.",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js"]
  }


];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gradient-radial from-orange/5 via-transparent to-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience <span className="text-purple">So Far</span></h2>
          <div className="w-20 h-1 bg-orange mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-xl mx-auto">
            My professional journey through various roles and responsibilities in the tech industry.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/10"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-purple border-4 border-purple-dark"></div>
              
              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className={`glass p-6 rounded-xl ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-lg transform transition-all duration-500 hover:shadow-lg hover:shadow-purple/10 hover:translate-y-[-5px]`}>
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase size={20} className="text-purple" />
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                  </div>

                  <p className="text-orange flex items-center gap-2 mb-3">
                    <span>{exp.company}</span>
                  </p>

                  <p className="text-gray-400 flex items-center gap-2 mb-4">
                    <Calendar size={16} className="text-gray-400" />
                    <span>{exp.period}</span>
                  </p>

                  <p className="text-gray-300 mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                      <span key={skill} className="bg-white/5 text-xs px-3 py-1 rounded-full text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty div for layout */}
              <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <a href="https://drive.google.com/file/d/1KuGcfUVCUGPsKBK9PUcKjLLIll1nfIc-/view" className="button-primary">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
