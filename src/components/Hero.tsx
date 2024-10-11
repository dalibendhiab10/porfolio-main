import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down animate-glow">
          Your Name
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up text-blue-400">
          Software Engineer | Problem Solver | Innovator
        </p>
        <a
          href="#about"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 animate-bounce"
        >
          Learn More
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-blue-400" />
      </div>
    </section>
  );
};

export default Hero;