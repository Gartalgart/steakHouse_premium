import React from "react";
import { useInView } from "react-intersection-observer";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Adresse",
      content: "42 Avenue des Champs-Élysées, 75008 Paris",
      link: "https://maps.google.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Téléphone",
      content: "01 23 45 67 89",
      link: "tel:+33123456789",
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      content: "contact@primesteakhouse.fr",
      link: "mailto:contact@primesteakhouse.fr",
    },
    {
      icon: <Clock size={24} />,
      title: "Horaires",
      content: "Lun-Ven: 12h-14h30 & 19h-23h | Sam-Dim: 12h-23h",
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={24} />,
      url: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <Instagram size={24} />,
      url: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <Twitter size={24} />,
      url: "https://twitter.com",
      label: "Twitter",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-dark-900" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            inView ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            Nous Contacter
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Notre équipe est à votre écoute
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div
            className={`space-y-6 ${inView ? "animate-fade-in" : "opacity-0"}`}
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-dark-800 p-6 rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 rounded-full p-3 text-white flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-300 hover:text-primary-400 transition-colors"
                        target={
                          info.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="bg-dark-800 p-6 rounded-lg">
              <h3 className="text-white font-bold text-lg mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dark-700 hover:bg-primary-600 text-white p-3 rounded-full transition-all transform hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={`${inView ? "animate-fade-in" : "opacity-0"}`}>
            <div className="bg-dark-800 rounded-lg overflow-hidden h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2899579575544!2d2.3069295!3d48.8698686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fec70fb1483%3A0x40b82c3688c9460!2sChamps-%C3%89lys%C3%A9es%2C%20Paris!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Plan d'accès Prime Steakhouse"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
