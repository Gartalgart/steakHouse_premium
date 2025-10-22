import React from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      role="banner"
    >
      {/* Background Image avec Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/70 via-dark-900/50 to-dark-900/70 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&q=80"
          alt="Steakhouse ambiance - viande grillée de qualité"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-6 animate-slide-up">
          L'Excellence
          <span className="block text-primary-400 mt-2">à chaque bouchée</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-light">
          Découvrez l'art de la viande maturée, grillée à la perfection dans
          notre steakhouse premium
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <a
            href="#reservation"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl w-full sm:w-auto"
          >
            Réserver une table
          </a>
          <a
            href="#menu"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-dark-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 w-full sm:w-auto"
          >
            Découvrir le menu
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown size={40} />
      </a>
    </section>
  );
};

export default Hero;
