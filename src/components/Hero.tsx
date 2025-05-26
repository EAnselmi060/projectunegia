import React from 'react';
import { ChevronRight, BookOpen, GraduationCap } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-5 -top-5 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-cyan-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute right-1/3 bottom-1/4 w-80 h-80 bg-blue-300 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute left-10 bottom-10 w-72 h-72 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-700/50 text-blue-100 text-sm font-medium mb-6 border border-blue-600/30 backdrop-blur-sm">
              Formando líderes en tecnologías emergentes
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">UNEGIA</span>
              <br />
              <span className="block mt-2">Gestión de la Automatización e<br />Inteligencia Artificial</span>
            </h1>
            
            <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-lg">
              Formando profesionales en la vanguardia de la automatización con blockchain e inteligencia artificial.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#programas" 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium transition-transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explorar Programas
                <ChevronRight size={20} className="ml-2" />
              </a>
              <a 
                href="#admision" 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium border border-white/20 transition-colors hover:bg-white/20"
              >
                Proceso de Admisión
              </a>
            </div>
            
            <div className="mt-12 flex items-center space-x-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-700/50 backdrop-blur-sm flex items-center justify-center border border-blue-600/30">
                  <BookOpen size={24} className="text-cyan-200" />
                </div>
                <div className="ml-3">
                  <div className="text-xl font-semibold">25+</div>
                  <div className="text-blue-200 text-sm">Programas</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-700/50 backdrop-blur-sm flex items-center justify-center border border-blue-600/30">
                  <GraduationCap size={24} className="text-cyan-200" />
                </div>
                <div className="ml-3">
                  <div className="text-xl font-semibold">1200+</div>
                  <div className="text-blue-200 text-sm">Estudiantes</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Estudiantes de UNEGIA trabajando con tecnología avanzada" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyan-500 rounded-lg opacity-20 blur-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-lg opacity-20 blur-lg"></div>
            <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-32 bg-gradient-to-t from-cyan-400 to-blue-600 rounded-full"></div>
          </div>
        </div>
        
        {/* Scrolling indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <div className="text-blue-200 text-sm mb-2">Descubre más</div>
          <ChevronRight size={24} className="text-blue-200 transform rotate-90" />
        </div>
      </div>
    </section>
  );
};