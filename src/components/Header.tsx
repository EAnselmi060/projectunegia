import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, Globe } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-900 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="text-white font-bold text-2xl mr-2">UNEGIA</div>
              <div className={`h-8 w-px bg-white/30 mr-2 ${isScrolled ? 'block' : 'hidden md:block'}`}></div>
              <div className={`text-white/90 text-xs md:text-sm font-medium ${isScrolled ? 'block' : 'hidden md:block'}`}>
                Universidad Nacional Experimental <br className="hidden md:block" />
                de Gestión e Inteligencia Artificial
              </div>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#inicio" label="Inicio" />
            <NavLinkWithDropdown 
              href="#programas" 
              label="Programas Académicos" 
              items={[
                { label: 'Pregrado', href: '#pregrado' },
                { label: 'Postgrado', href: '#postgrado' },
                { label: 'Doctorado', href: '#doctorado' },
              ]} 
            />
            <NavLinkWithDropdown 
              href="#investigacion" 
              label="Investigación" 
              items={[
                { label: 'Blockchain', href: '#blockchain' },
                { label: 'Inteligencia Artificial', href: '#ia' },
                { label: 'Automatización', href: '#automatizacion' },
              ]} 
            />
            <NavLink href="#campus" label="Campus" />
            <NavLink href="#noticias" label="Noticias" />
            <NavLink href="#contacto" label="Contacto" />

            <div className="flex items-center ml-4 space-x-3">
              <button className="text-white hover:text-blue-200 transition-colors">
                <Search size={20} />
              </button>
              <button className="text-white hover:text-blue-200 transition-colors">
                <Globe size={20} />
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-200 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2">
            <nav className="flex flex-col space-y-3">
              <MobileNavLink href="#inicio" label="Inicio" onClick={() => setIsOpen(false)} />
              <MobileNavLink href="#programas" label="Programas Académicos" onClick={() => setIsOpen(false)} />
              <MobileNavLink href="#investigacion" label="Investigación" onClick={() => setIsOpen(false)} />
              <MobileNavLink href="#campus" label="Campus" onClick={() => setIsOpen(false)} />
              <MobileNavLink href="#noticias" label="Noticias" onClick={() => setIsOpen(false)} />
              <MobileNavLink href="#contacto" label="Contacto" onClick={() => setIsOpen(false)} />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <a 
    href={href} 
    className="text-white hover:text-blue-200 font-medium transition-colors"
  >
    {label}
  </a>
);

const NavLinkWithDropdown = ({ 
  href, 
  label, 
  items 
}: { 
  href: string; 
  label: string; 
  items: { label: string; href: string }[] 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <a 
        href={href} 
        className="text-white hover:text-blue-200 font-medium transition-colors flex items-center"
        onClick={(e) => {
          if (items.length > 0) {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        {label}
        <ChevronDown size={16} className="ml-1" />
      </a>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg py-2 w-64 z-10">
          {items.map((item, index) => (
            <a 
              key={index} 
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-800"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const MobileNavLink = ({ 
  href, 
  label,
  onClick
}: { 
  href: string; 
  label: string;
  onClick: () => void;
}) => (
  <a 
    href={href} 
    className="text-white hover:text-blue-200 font-medium transition-colors block py-2"
    onClick={onClick}
  >
    {label}
  </a>
);