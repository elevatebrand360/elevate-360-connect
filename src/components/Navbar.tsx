import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-4 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <a href="#" className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/d14c579e-ba6b-4e43-b9b0-06293dd7f20b.png" 
              alt="Elevate Brand 360 Logo" 
              className="h-16 md:h-24 lg:h-32 w-auto transition-transform duration-300 hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-brand-navy hover:text-brand-orange transition-colors">Services</a>
            <a href="#about" className="text-brand-navy hover:text-brand-orange transition-colors">About</a>
            <a href="#contact" className="text-brand-navy hover:text-brand-orange transition-colors">Contact</a>
            <Button className="bg-brand-navy hover:bg-brand-orange text-white">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden focus:outline-none absolute top-6 right-4"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-brand-navy" />
            ) : (
              <Menu className="h-6 w-6 text-brand-navy" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <div className="flex flex-col space-y-4 py-4">
              <a 
                href="#services" 
                className="text-brand-navy hover:text-brand-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-brand-navy hover:text-brand-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-brand-navy hover:text-brand-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                className="bg-brand-navy hover:bg-brand-orange text-white w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
