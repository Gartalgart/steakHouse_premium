import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Accueil" },
    { href: "#about", label: "Notre Histoire" },
    { href: "#menu", label: "Menu" },
    { href: "#gallery", label: "Galerie" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-900/95 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl sm:text-3xl font-serif font-bold text-white hover:text-primary-400 transition-colors"
            aria-label="Retour à l'accueil"
          >
            🥩 Prime Steakhouse
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-primary-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservation"
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Réserver
            </a>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden xl:flex items-center space-x-4 text-white">
            <a
              href="tel:+33123456789"
              className="flex items-center space-x-2 hover:text-primary-400 transition-colors"
              aria-label="Téléphone"
            >
              <Phone size={18} />
              <span className="text-sm">01 23 45 67 89</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:text-primary-400 transition-colors"
            aria-label="Menu mobile"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-primary-400 transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#reservation"
                onClick={() => setIsOpen(false)}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold text-center transition-all"
              >
                Réserver
              </a>
              <a
                href="tel:+33123456789"
                className="flex items-center space-x-2 text-white hover:text-primary-400 transition-colors py-2"
              >
                <Phone size={18} />
                <span>01 23 45 67 89</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
