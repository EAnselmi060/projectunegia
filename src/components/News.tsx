import React from 'react';
import { Calendar, Users, ExternalLink, ArrowRight } from 'lucide-react';

type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: 'evento' | 'noticia' | 'investigacion';
};

const newsData: NewsItem[] = [
  {
    id: 'news-1',
    title: 'UNEGIA firma convenio con líderes tecnológicos para impulsar la innovación en IA',
    excerpt: 'La universidad estableció alianzas estratégicas con empresas de tecnología para desarrollar proyectos conjuntos en inteligencia artificial y automatización.',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '12 Mayo, 2025',
    category: 'noticia'
  },
  {
    id: 'news-2',
    title: 'Conferencia Internacional de Blockchain e IA en UNEGIA',
    excerpt: 'Reconocidos expertos internacionales participarán en la conferencia anual sobre tecnologías emergentes organizada por nuestra universidad.',
    image: 'https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '23 Junio, 2025',
    category: 'evento'
  },
  {
    id: 'news-3',
    title: 'Investigadores de UNEGIA desarrollan nuevo algoritmo de IA para optimización energética',
    excerpt: 'El equipo de investigación presentó un innovador algoritmo que permite reducir el consumo energético en sistemas industriales automatizados.',
    image: 'https://images.pexels.com/photos/3912976/pexels-photo-3912976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: '5 Mayo, 2025',
    category: 'investigacion'
  },
];

const eventData = [
  {
    id: 'event-1',
    title: 'Hackathon de Soluciones Blockchain',
    date: '15-17 Junio, 2025',
    location: 'Campus Principal',
    image: 'https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'event-2',
    title: 'Workshop: Introducción a la IA Generativa',
    date: '22 Mayo, 2025',
    location: 'Campus Tecnológico',
    image: 'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'event-3',
    title: 'Feria de Proyectos de Automatización',
    date: '10 Julio, 2025',
    location: 'Auditorio Principal',
    image: 'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
];

export const News = () => {
  return (
    <section id="noticias" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Noticias y Eventos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mantente Informado</h3>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Descubre las últimas noticias, eventos y avances en nuestra comunidad universitaria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {newsData.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
        
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Próximos Eventos</h3>
            <a href="#eventos" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
              Ver todos
              <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventData.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
        
        <div className="bg-blue-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute left-1/4 top-1/3 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Suscríbete a nuestro boletín</h3>
            <p className="text-blue-100 mb-6">Recibe las últimas noticias, eventos y oportunidades de UNEGIA directamente en tu correo electrónico.</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="px-4 py-3 rounded-lg flex-grow bg-white/10 backdrop-blur-sm text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 placeholder-blue-200"
              />
              <button className="px-6 py-3 rounded-lg bg-white text-blue-900 font-medium hover:bg-blue-100 transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const NewsCard = ({ news }: { news: NewsItem }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={news.image} 
          alt={news.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${
            news.category === 'evento' ? 'bg-orange-100 text-orange-800' :
            news.category === 'investigacion' ? 'bg-green-100 text-green-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {news.category === 'evento' ? 'Evento' : 
             news.category === 'investigacion' ? 'Investigación' : 'Noticia'}
          </span>
          <span className="ml-auto text-gray-500 text-sm flex items-center">
            <Calendar size={14} className="mr-1" />
            {news.date}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{news.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{news.excerpt}</p>
        
        <a 
          href={`#noticia-${news.id}`} 
          className="text-blue-600 font-medium inline-flex items-center hover:text-blue-800"
        >
          Leer más
          <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

const EventCard = ({ event }: { event: { id: string; title: string; date: string; location: string; image: string } }) => {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-32 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/60 to-transparent"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-bold mb-1 line-clamp-2">{event.title}</h3>
        <div className="flex items-center text-blue-100 text-sm">
          <Calendar size={14} className="mr-1" />
          <span className="mr-3">{event.date}</span>
          <Users size={14} className="mr-1" />
          <span>{event.location}</span>
        </div>
      </div>
    </div>
  );
};