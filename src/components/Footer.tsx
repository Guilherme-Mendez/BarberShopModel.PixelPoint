import React from 'react';
import logo from '../assets/icons/bolinhalogo.png';
import { Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { href: '#about', label: 'Sobre nós' },
    { href: '#location', label: 'Localização' },
    { href: '#services', label: 'Serviços' },
  ];

  return (
    <footer className="bg-black text-white pt-8 pb-4 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className='space-y-12'>
            <a href="#home">
              <img
                src={logo}
                alt="Barbershoplogo"
                className="w-44 h-36 my-2 object-fit mx-12"
              />
            </a>
            <div className="space-y-2 text-gray-400">
              <p>St. Leste Quadra 21 Lote 05 - Gama, Brasília</p>
              <p>@bolinhapremium</p>
              <p>Copyright © 2025 Bolinha Premium</p>
            </div>
          </div>
          <div className="md:pl-12 pt-12">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#bf303f] transition-colors w-fit text-gray-400"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://instagram.com/bolinhapremium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#bf303f] transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#bf303f] transition-colors"
                >
                  <MessageCircle size={24} />
                </a>
              </div>
            </nav>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm pt-4">
          <a
            href="http://www.pixelpointbr.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 hover:text-gray-400 transition-colors"
          >
            <span>Desenvolvido por @pixelpointbr</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;