import React, { useState, useEffect } from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import logo from '../assets/icons/bolinhalogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'Sobre nós' },
    { href: '#location', label: 'Localização' },
    { href: '#services', label: 'Serviços' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center h-20 px-4">
          {/* Logo and Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <img
              src={logo}
              alt="Barbershoplogo"
              className="absolute left-6 w-20 h-16 my-2 object-fit"
            />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 px-12">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-[#bf303f] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Icons*/}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#bf303f] transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#bf303f] transition-colors"
            >
              <MessageCircle size={24} />
            </a>
            <span>
                (61) 98581-0289
            </span>
          </div>

          {/* Mobile nav */}
          <div className="md:hidden flex space-x-4 py-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#bf303f] transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#bf303f] transition-colors"
              >
                <MessageCircle size={24} />
              </a>
              <span>
                (61) 98581-0289
              </span>
            </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-white hover:text-[#bf303f] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;