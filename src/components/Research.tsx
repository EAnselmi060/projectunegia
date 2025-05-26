import React from 'react';
import { Brain, Database, Cpu, Users, ArrowRight } from 'lucide-react';

export const Research = () => {
  return (
    <section id="investigacion" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Investigación e Innovación</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Automatización con Blockchain e Inteligencia Artificial</h3>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Nuestros centros de investigación trabajan en la vanguardia de la tecnología, desarrollando soluciones innovadoras para los desafíos del mundo real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Laboratorio de Investigación en IA" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/40 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-bold mb-2">Laboratorio de Investigación Avanzada en IA</h3>
              <p className="text-blue-100 mb-4">Desarrollando algoritmos de vanguardia y aplicaciones prácticas de la inteligencia artificial.</p>
              <a href="#lab-ia" className="text-cyan-300 hover:text-cyan-100 inline-flex items-center font-medium">
                Conocer más
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Centro de Tecnologías Blockchain" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/40 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-bold mb-2">Centro de Tecnologías Blockchain</h3>
              <p className="text-blue-100 mb-4">Investigando y desarrollando aplicaciones de blockchain para la transformación digital de la economía y la sociedad.</p>
              <a href="#centro-blockchain" className="text-cyan-300 hover:text-cyan-100 inline-flex items-center font-medium">
                Conocer más
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ResearchArea 
            icon={Brain}
            title="Inteligencia Artificial"
            description="Investigación en aprendizaje profundo, visión por computadora, procesamiento de lenguaje natural y sistemas de recomendación."
            projects={["Diagnóstico médico asistido por IA", "Sistemas inteligentes de transporte", "Análisis predictivo de datos empresariales"]}
          />
          
          <ResearchArea 
            icon={Database}
            title="Blockchain"
            description="Desarrollo de aplicaciones descentralizadas, contratos inteligentes, y nuevos modelos de gobernanza basados en blockchain."
            projects={["Identidad digital soberana", "Trazabilidad en cadenas de suministro", "Sistemas de votación segura"]}
          />
          
          <ResearchArea 
            icon={Cpu}
            title="Automatización"
            description="Diseño e implementación de sistemas de automatización inteligente para procesos industriales, empresariales y sociales."
            projects={["Fábricas inteligentes", "Automatización de procesos administrativos", "Sistemas autónomos de gestión energética"]}
          />
        </div>
      </div>
    </section>
  );
};

const ResearchArea = ({ 
  icon: Icon, 
  title, 
  description, 
  projects 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  projects: string[];
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
        <Icon size={24} className="text-blue-600" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <h4 className="text-sm font-semibold text-gray-800 mb-2">Proyectos destacados:</h4>
      <ul className="space-y-2">
        {projects.map((project, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
            </div>
            <span className="ml-2 text-gray-700">{project}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};