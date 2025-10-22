import React from "react";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Sophie Martin",
      role: "Cliente régulière",
      rating: 5,
      text: "Sans conteste le meilleur steakhouse de Paris. La qualité de la viande est exceptionnelle et la cuisson toujours parfaite. Le service est impeccable et l'ambiance chaleureuse.",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Marc Dubois",
      role: "Amateur de viande",
      rating: 5,
      text: "J'ai testé de nombreux steakhouses, mais Prime est vraiment au-dessus du lot. Le Wagyu A5 est une expérience inoubliable. Je recommande les yeux fermés !",
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Émilie Rousseau",
      role: "Gastronome",
      rating: 5,
      text: "Un lieu d'exception où chaque détail compte. De l'accueil au dessert, tout est pensé pour offrir une expérience mémorable. L'équipe est passionnée et ça se ressent.",
      image: "https://i.pravatar.cc/150?img=3",
    },
  ];

  return (
    <section className="py-20 bg-dark-900" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            inView ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            Témoignages
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ce que nos clients disent de nous
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-dark-800 p-8 rounded-lg relative hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-600 opacity-20">
                <Quote size={60} />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-primary-500 text-primary-500"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-300">
            <span className="text-3xl font-bold text-primary-400">4.9/5</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="fill-primary-500 text-primary-500"
                />
              ))}
            </div>
            <span>basé sur 324 avis</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
