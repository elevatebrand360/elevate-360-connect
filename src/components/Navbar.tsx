import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-2 bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <a href="#" className="flex items-center justify-center md:justify-start mb-2 md:mb-0">
            <img 
              src="/lovable-uploads/d14c579e-ba6b-4e43-b9b0-06293dd7f20b.png" 
              alt="Elevate Brand 360 Logo" 
              className="h-20 md:h-28 lg:h-32 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-brand-navy hover:text-brand-orange text-sm">Services</a>
            <a href="#about" className="text-brand-navy hover:text-brand-orange text-sm">About</a>
            <a href="#contact" className="text-brand-navy hover:text-brand-orange text-sm">Contact</a>
            <Button className="bg-brand-navy hover:bg-brand-orange text-white text-sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden focus:outline-none absolute top-4 right-4"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-brand-navy" />
            ) : (
              <Menu className="h-5 w-5 text-brand-navy" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4 py-4">
              <a 
                href="#services" 
                className="text-brand-navy hover:text-brand-orange"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-brand-navy hover:text-brand-orange"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-brand-navy hover:text-brand-orange"
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
