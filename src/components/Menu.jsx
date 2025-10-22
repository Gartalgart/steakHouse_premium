import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const Menu = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState("steaks");

  const categories = [
    { id: "steaks", label: "Steaks Premium" },
    { id: "starters", label: "Entrées" },
    { id: "sides", label: "Accompagnements" },
    { id: "desserts", label: "Desserts" },
  ];

  const menuItems = {
    steaks: [
      {
        name: "Côte de Bœuf Wagyu A5",
        description: "Wagyu japonais, maturation 30 jours, 600g",
        price: "185€",
        image:
          "https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80",
        badge: "Signature",
      },
      {
        name: "Filet de Bœuf Black Angus",
        description: "Aberdeen Angus, cuisson précise, 250g",
        price: "68€",
        image:
          "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80",
      },
      {
        name: "Entrecôte Maturée",
        description: "Charolais française, maturation 21 jours, 350g",
        price: "52€",
        image:
          "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&q=80",
      },
      {
        name: "T-Bone Géant",
        description: "Pièce d'exception pour deux, 1kg",
        price: "95€",
        image:
          "https://images.unsplash.com/photo-1615937691194-97dbd485e7c8?w=400&q=80",
        badge: "À partager",
      },
    ],
    starters: [
      {
        name: "Tartare de Bœuf",
        description: "Filet de bœuf haché au couteau, câpres, cornichons",
        price: "22€",
        image:
          "https://images.unsplash.com/photo-1626201348797-c6f8b8b8e8f0?w=400&q=80",
      },
      {
        name: "Burrata Crémeuse",
        description: "Tomates anciennes, basilic, huile d'olive",
        price: "18€",
        image:
          "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&q=80",
      },
      {
        name: "Foie Gras Poêlé",
        description: "Chutney de figues, pain brioché",
        price: "26€",
        image:
          "https://images.unsplash.com/photo-1619781411555-68c3c8297cda?w=400&q=80",
      },
    ],
    sides: [
      {
        name: "Frites Maison",
        description: "Pommes de terre fraîches, sel de Guérande",
        price: "8€",
        image:
          "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80",
      },
      {
        name: "Légumes Grillés",
        description: "Sélection du marché, huile d'olive",
        price: "12€",
        image:
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80",
      },
      {
        name: "Purée Truffée",
        description: "Pommes de terre, crème, truffe noire",
        price: "15€",
        image:
          "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80",
      },
    ],
    desserts: [
      {
        name: "Tiramisu Maison",
        description: "Recette traditionnelle, mascarpone, café",
        price: "12€",
        image:
          "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80",
      },
      {
        name: "Fondant au Chocolat",
        description: "Coulant au cœur, glace vanille",
        price: "14€",
        image:
          "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&q=80",
      },
      {
        name: "Tarte Tatin",
        description: "Pommes caramélisées, glace caramel",
        price: "11€",
        image:
          "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80",
      },
    ],
  };

  return (
    <section id="menu" className="py-20 bg-dark-900" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            inView ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            Notre Menu
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une sélection raffinée de plats préparés avec passion
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                activeCategory === category.id
                  ? "bg-primary-600 text-white"
                  : "bg-dark-700 text-gray-300 hover:bg-dark-800"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory].map((item, index) => (
            <div
              key={index}
              className={`bg-dark-800 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
                {item.badge && (
                  <span className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-serif font-bold text-white">
                    {item.name}
                  </h3>
                  <span className="text-primary-400 font-bold text-lg ml-2">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/menu-complet.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent border-2 border-primary-600 hover:bg-primary-600 text-primary-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105"
          >
            Télécharger le menu complet (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
