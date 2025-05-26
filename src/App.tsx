import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Programs } from './components/Programs';
import { Research } from './components/Research';
import { Campus } from './components/Campus';
import { News } from './components/News';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <main>
        <Hero />
        <Programs />
        <Research />
        <Campus />
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;