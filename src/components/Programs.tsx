import React from 'react';
import { BookOpen, Code, Database, Cpu, Brain, LucideIcon } from 'lucide-react';

type Program = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  level: 'pregrado' | 'postgrado' | 'doctorado';
  duration: string;
};

const programs: Program[] = [
  {
    id: 'ia-pregrado',
    title: 'Ingeniería en Inteligencia Artificial',
    description: 'Forma profesionales capaces de diseñar, implementar y mantener sistemas inteligentes para la automatización de procesos en diversos sectores.',
    icon: Brain,
    level: 'pregrado',
    duration: '5 años',
  },
  {
    id: 'blockchain-pregrado',
    title: 'Ingeniería en Tecnologías Blockchain',
    description: 'Desarrolla competencias para implementar soluciones basadas en tecnologías blockchain en diferentes sectores productivos y de servicios.',
    icon: Database,
    level: 'pregrado',
    duration: '5 años',
  },
  {
    id: 'automatizacion-pregrado',
    title: 'Ingeniería en Automatización Industrial',
    description: 'Capacita profesionales para diseñar, implementar y mantener sistemas de automatización en entornos industriales y empresariales.',
    icon: Cpu,
    level: 'pregrado',
    duration: '5 años',
  },
  {
    id: 'ia-postgrado',
    title: 'Maestría en Inteligencia Artificial Avanzada',
    description: 'Profundiza en los algoritmos y metodologías más avanzadas para el desarrollo de sistemas inteligentes en diversos campos de aplicación.',
    icon: Brain,
    level: 'postgrado',
    duration: '2 años',
  },
  {
    id: 'blockchain-postgrado',
    title: 'Maestría en Blockchain y Criptoeconomía',
    description: 'Especialización en el diseño y desarrollo de soluciones basadas en blockchain, smart contracts y nuevos modelos económicos digitales.',
    icon: Database,
    level: 'postgrado',
    duration: '2 años',
  },
  {
    id: 'doctorado-ia',
    title: 'Doctorado en Ciencias de la Computación e IA',
    description: 'Programa de investigación avanzada en inteligencia artificial, aprendizaje automático y sus aplicaciones en la sociedad y la industria.',
    icon: Code,
    level: 'doctorado',
    duration: '3-5 años',
  },
];

export const Programs = () => {
  const [activeTab, setActiveTab] = React.useState<'all' | 'pregrado' | 'postgrado' | 'doctorado'>('all');
  
  const filteredPrograms = activeTab === 'all' 
    ? programs 
    : programs.filter(program => program.level === activeTab);

  return (
    <section id="programas" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Programas Académicos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Formación en Automatización e Inteligencia Artificial</h3>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Nuestros programas están diseñados para formar líderes en las tecnologías que están transformando el mundo.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          <TabButton 
            label="Todos" 
            isActive={activeTab === 'all'} 
            onClick={() => setActiveTab('all')} 
          />
          <TabButton 
            label="Pregrado" 
            isActive={activeTab === 'pregrado'} 
            onClick={() => setActiveTab('pregrado')} 
          />
          <TabButton 
            label="Postgrado" 
            isActive={activeTab === 'postgrado'} 
            onClick={() => setActiveTab('postgrado')} 
          />
          <TabButton 
            label="Doctorado" 
            isActive={activeTab === 'doctorado'} 
            onClick={() => setActiveTab('doctorado')} 
          />
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#admision" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium transition-colors hover:bg-blue-700"
          >
            <BookOpen size={20} className="mr-2" />
            Solicitar Información
          </a>
        </div>
      </div>
    </section>
  );
};

const TabButton = ({ 
  label, 
  isActive, 
  onClick 
}: { 
  label: string; 
  isActive: boolean; 
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
      isActive 
        ? 'bg-blue-600 text-white shadow-md' 
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    }`}
  >
    {label}
  </button>
);

const ProgramCard = ({ program }: { program: Program }) => {
  const Icon = program.icon;
  
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100 group">
      <div className="p-6">
        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
          <Icon size={24} className="text-blue-600 group-hover:text-white transition-colors" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="mr-3 capitalize">{program.level}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300 mr-3"></span>
          <span>{program.duration}</span>
        </div>
        
        <p className="text-gray-600 mb-4">{program.description}</p>
        
        <a 
          href={`#programa-${program.id}`} 
          className="text-blue-600 font-medium inline-flex items-center hover:text-blue-800"
        >
          Ver detalles
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};