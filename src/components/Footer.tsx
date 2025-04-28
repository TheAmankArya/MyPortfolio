import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 bg-purple-dark border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-purple">A</span>mank.
            </h2>
            <p className="text-gray-400 mb-6 max-w-md">
              A passionate full-stack developer focused on creating impactful digital experiences through clean and efficient code.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-purple transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-purple transition-colors duration-300">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-purple transition-colors duration-300">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-purple transition-colors duration-300">Projects</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-purple transition-colors duration-300">Experience</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-purple transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Let's Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://github.com/TheAmankArya" className="text-gray-400 hover:text-purple transition-colors duration-300">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/amank-arya/" className="text-gray-400 hover:text-purple transition-colors duration-300">LinkedIn</a></li>
              <li><a href="https://x.com/arya_amank" className="text-gray-400 hover:text-purple transition-colors duration-300">Twitter</a></li>
              <li><a href="https://www.youtube.com/@amankarya1" className="text-gray-400 hover:text-purple transition-colors duration-300">YouTube</a></li>
              <li><a href="https://www.instagram.com/amank_arya/" className="text-gray-400 hover:text-purple transition-colors duration-300">Instagram</a></li>
              <li><a href="mailto:amankarya59@gmail.com" className="text-gray-400 hover:text-purple transition-colors duration-300">Email</a></li>
              <li><a href="https://leetcode.com/u/amankarya59/" className="text-gray-400 hover:text-purple transition-colors duration-300">Leetcode</a></li>
            
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Amank Arya. All rights reserved.
          </p>
          
          <div className="flex items-center mt-4 md:mt-0">
            <p className="text-gray-400 mr-2">
              Built with React | Styled with Tailwind CSS
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-purple/20 flex items-center justify-center hover:bg-purple/30 transition-colors duration-300"
            >
              <ArrowUp size={16} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
