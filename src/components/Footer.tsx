import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="text-white font-bold text-2xl mr-2">UNEGIA</div>
              <div className="h-8 w-px bg-blue-800 mr-2"></div>
              <div className="text-blue-300 text-xs font-medium leading-tight">
                Universidad Nacional Experimental <br />
                de Guayana e Inteligencia Artificial
              </div>
            </div>
            
            <p className="text-blue-200 mb-6">
              Formando profesionales en la vanguardia de la automatización con blockchain e inteligencia artificial.
            </p>
            
            <div className="flex space-x-4">
              <SocialLink icon={Facebook} href="#facebook" label="Facebook" />
              <SocialLink icon={Twitter} href="#twitter" label="Twitter" />
              <SocialLink icon={Linkedin} href="#linkedin" label="LinkedIn" />
              <SocialLink icon={Instagram} href="#instagram" label="Instagram" />
              <SocialLink icon={Youtube} href="#youtube" label="YouTube" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Programas Académicos</h3>
            <ul className="space-y-3">
              <FooterLink href="#pregrado" label="Pregrado" />
              <FooterLink href="#postgrado" label="Postgrado" />
              <FooterLink href="#doctorado" label="Doctorado" />
              <FooterLink href="#diplomados" label="Diplomados" />
              <FooterLink href="#cursos" label="Cursos Especializados" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <FooterLink href="#nosotros" label="Acerca de Nosotros" />
              <FooterLink href="#admision" label="Proceso de Admisión" />
              <FooterLink href="#investigacion" label="Investigación" />
              <FooterLink href="#noticias" label="Noticias y Eventos" />
              <FooterLink href="#biblioteca" label="Biblioteca Digital" />
              <FooterLink href="#bolsa-trabajo" label="Bolsa de Trabajo" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-blue-400 flex-shrink-0 mt-1 mr-3" />
                <span className="text-blue-200">Edificio General de Seguros, Avenida Las Américas, Puerto Ordaz, Estado Bolívar - Venezuela</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-blue-400 flex-shrink-0 mr-3" />
                <span className="text-blue-200">+58 (0286) 7137131</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-blue-400 flex-shrink-0 mr-3" />
                <span className="text-blue-200">caceuneg@gmail.com</span>
              </li>
                      <li className="flex items-center">
                <Mail size={20} className="text-blue-400 flex-shrink-0 mr-3" />
                <span className="text-blue-200">RIF: G-20003343-6</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-900 py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-blue-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} UNEGIA. Todos los derechos reservados.
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-300">
            <a href="#privacidad" className="hover:text-white transition-colors">Política de Privacidad</a>
            <span className="hidden md:inline">|</span>
            <a href="#terminos" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <span className="hidden md:inline">|</span>
            <a href="#cookies" className="hover:text-white transition-colors">Política de Cookies</a>
            <span className="hidden md:inline">|</span>
            <a href="#accesibilidad" className="hover:text-white transition-colors">Accesibilidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ 
  icon: Icon, 
  href, 
  label 
}: { 
  icon: React.ElementType; 
  href: string; 
  label: string;
}) => {
  return (
    <a 
      href={href} 
      className="w-8 h-8 rounded-full bg-blue-900 hover:bg-blue-800 flex items-center justify-center transition-colors"
      aria-label={label}
    >
      <Icon size={16} />
    </a>
  );
};

const FooterLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <li>
      <a href={href} className="text-blue-200 hover:text-white transition-colors">
        {label}
      </a>
    </li>
  );
};