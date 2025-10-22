import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { X } from "lucide-react";

const Gallery = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      alt: "Ambiance chaleureuse du restaurant",
      category: "Ambiance",
    },
    {
      url: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
      alt: "Steak parfaitement grillé",
      category: "Plats",
    },
    {
      url: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&q=80",
      alt: "Grillades au feu de bois",
      category: "Cuisine",
    },
    {
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      alt: "Salle de restaurant élégante",
      category: "Ambiance",
    },
    {
      url: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
      alt: "Wagyu premium",
      category: "Plats",
    },
    {
      url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      alt: "Préparation en cuisine",
      category: "Cuisine",
    },
    {
      url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
      alt: "Terrasse extérieure",
      category: "Ambiance",
    },
    {
      url: "https://images.unsplash.com/photo-1615937691194-97dbd485e7c8?w=800&q=80",
      alt: "T-Bone grillé",
      category: "Plats",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-dark-800" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            inView ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            Galerie
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Plongez dans l'univers de Prime Steakhouse
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-lg ${
                inView ? "animate-fade-in" : "opacity-0"
              } ${index % 3 === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    {image.category}
                  </span>
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-dark-900/95 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Fermer la lightbox"
            >
              <X size={40} />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
