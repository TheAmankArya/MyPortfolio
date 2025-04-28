
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 py-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              Hey, I'm <span className="text-purple">Amank Arya</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 font-light">
              Engineer by mind, Creator by heart
            </h2>
            <p className="text-gray-400 text-lg max-w-md">
              A passionate full-stack developer specializing in building exceptional digital experiences 
              that are fast, accessible, and visually appealing.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="button-primary flex items-center gap-2">
                View My Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="button-secondary">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple to-blue-sky rounded-full blur-2xl opacity-20"></div>
              <img 
                src="https://i.imgur.com/Jp0LtxC.jpeg" 
                alt="Amank Arya" 
                className="w-96 h-96 object-cover rounded-3xl shadow-2xl border border-white/10 z-20 relative"
              />
              <div className="glass absolute -bottom-10 -right-10 px-6 py-4 z-30">
                <p className="text-lg font-medium">
                  <span className="text-orange">3+</span> Years of Coding Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-orange/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
