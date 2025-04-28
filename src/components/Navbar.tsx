
import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-purple-dark/90 backdrop-blur-md shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Remove logo text */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="text-white hover:text-purple transition-colors"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-purple-dark/95 backdrop-blur-md absolute top-full left-0 w-full py-6 shadow-lg animate-fade-in">
          <div className="container mx-auto px-6 flex flex-col space-y-6">
            <a href="#home" className="text-white text-lg" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="text-white text-lg" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#skills" className="text-white text-lg" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" className="text-white text-lg" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#experience" className="text-white text-lg" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#contact" className="text-white text-lg" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
