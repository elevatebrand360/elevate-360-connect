
import { Instagram, Twitter, Facebook, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-brand-navy text-white">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/d14c579e-ba6b-4e43-b9b0-06293dd7f20b.png" 
                alt="Elevate Brand 360 Logo" 
                className="h-10 bg-white p-1 rounded"
              />
            </div>
            <p className="text-gray-300 text-sm md:text-base max-w-xs">
              Your 360° marketing partner. We help brands make powerful connections in the digital world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">Services</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">Portfolio</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">Blog</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">Web Design & Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">Branding</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">Digital Marketing</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">Social Media Marketing</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">Product Photography</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">App Development</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Subscribe</h3>
            <p className="text-gray-300 text-sm">Stay updated with our latest news and offers.</p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-brand-navy/50 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button size="icon" className="bg-brand-orange hover:bg-brand-orange/80">
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Elevate Brand 360. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
