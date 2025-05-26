import React, { useState } from 'react';
import { MapPin, Building, Users, Calendar, ChevronRight, ChevronLeft } from 'lucide-react';

type CampusInfo = {
  id: string;
  name: string;
  description: string;
  image: string;
  facilities: string[];
  location: string;
};

const campusData: CampusInfo[] = [
  {
    id: 'campus-principal',
    name: 'Campus Principal',
    description: 'Sede principal de UNEGIA, cuenta con laboratorios especializados en IA, blockchain y automatización, así como modernas aulas y espacios de colaboración.',
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    facilities: [
      'Laboratorio de Inteligencia Artificial',
      'Centro de Desarrollo Blockchain',
      'Laboratorio de Robótica y Automatización',
      'Biblioteca Digital',
      'Auditorio Principal'
    ],
    location: 'Av. Universidad 1000, Ciudad Universitaria'
  },
  {
    id: 'campus-tecnologico',
    name: 'Campus Tecnológico',
    description: 'Enfocado en la investigación y desarrollo de tecnologías emergentes, con espacios de coworking y laboratorios de alta tecnología.',
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    facilities: [
      'Centro de Innovación Tecnológica',
      'Laboratorios de Computación Avanzada',
      'Espacios de Coworking',
      'Salas de Videoconferencia',
      'Cafetería Tecnológica'
    ],
    location: 'Parque Tecnológico, Zona Industrial'
  },
  {
    id: 'campus-virtual',
    name: 'Campus Virtual',
    description: 'Plataforma educativa digital que permite el acceso a programas académicos y recursos educativos desde cualquier lugar.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    facilities: [
      'Aulas Virtuales',
      'Biblioteca Digital',
      'Laboratorios Virtuales',
      'Tutorías en Línea',
      'Comunidades de Aprendizaje'
    ],
    location: 'Acceso Global 24/7'
  }
];

export const Campus = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % campusData.length);
  };
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + campusData.length) % campusData.length);
  };
  
  const activeCampus = campusData[activeIndex];

  return (
    <section id="campus" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Nuestros Campus</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Espacios Diseñados para la Innovación</h3>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Contamos con instalaciones modernas y tecnológicamente avanzadas para impulsar el aprendizaje y la investigación.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{activeCampus.name}</h3>
              <p className="text-gray-700 mb-6">{activeCampus.description}</p>
              
              <div className="flex items-center mb-6">
                <MapPin size={20} className="text-blue-600 mr-2" />
                <span className="text-gray-600">{activeCampus.location}</span>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Instalaciones:</h4>
              <ul className="space-y-2 mb-8">
                {activeCampus.facilities.map((facility, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
                    {facility}
                  </li>
                ))}
              </ul>
              
              <a 
                href={`#visita-${activeCampus.id}`} 
                className="inline-flex items-center px-5 py-2 rounded-lg bg-blue-600 text-white font-medium transition-colors hover:bg-blue-700"
              >
                Solicitar Visita
                <ChevronRight size={16} className="ml-2" />
              </a>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-w-16 aspect-h-9 relative">
                <img 
                  src={activeCampus.image} 
                  alt={activeCampus.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {campusData.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Ver campus ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 -ml-4 lg:-ml-6">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="absolute top-1/2 transform -translate-y-1/2 right-0 -mr-4 lg:-mr-6">
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};