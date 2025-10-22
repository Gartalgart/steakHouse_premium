import React from "react";
import { useInView } from "react-intersection-observer";
import { Award, Heart, Flame } from "lucide-react";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Qualité Premium",
      description:
        "Viandes sélectionnées auprès des meilleurs éleveurs français et internationaux",
    },
    {
      icon: <Flame className="w-12 h-12" />,
      title: "Cuisson Parfaite",
      description:
        "Maîtrise absolue de la cuisson sur grill au charbon de bois",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Passion & Tradition",
      description: "25 ans d'expérience au service de l'excellence culinaire",
    },
  ];

  return (
    <section id="about" className="py-20 bg-dark-800" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            inView ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            Notre Histoire
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une passion transmise de génération en génération
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className={`${inView ? "animate-fade-in" : "opacity-0"}`}>
            <h3 className="text-3xl font-serif font-bold text-white mb-6">
              Un savoir-faire d'exception
            </h3>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Fondé en 1998 par Jean-Pierre Dubois,{" "}
                <strong className="text-white">Prime Steakhouse</strong> est
                devenu une référence incontournable pour les amateurs de viande
                d'exception.
              </p>
              <p>
                Notre engagement : sourcer les meilleures pièces de viande,
                respecter des temps de maturation optimaux et offrir une cuisson
                parfaite grâce à notre grill au charbon de bois artisanal.
              </p>
              <p>
                Chaque steak est une œuvre d'art, préparé avec passion par notre
                équipe de maîtres-grilleurs formés aux techniques les plus
                exigeantes.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className={`${inView ? "animate-fade-in" : "opacity-0"}`}>
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
              alt="Chef préparant un steak de qualité"
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-dark-700 p-8 rounded-lg text-center hover:bg-dark-900 transition-all duration-300 transform hover:-translate-y-2 ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-primary-400 flex justify-center mb-4">
                {value.icon}
              </div>
              <h4 className="text-2xl font-serif font-bold text-white mb-3">
                {value.title}
              </h4>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
