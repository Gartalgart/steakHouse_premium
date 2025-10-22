import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  ChefHat,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4 flex items-center">
              <ChefHat className="mr-2 text-primary-400" />
              Prime Steakhouse
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              L'excellence de la viande depuis 1998. Un savoir-faire artisanal
              au service de votre plaisir gustatif.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-700 hover:bg-primary-600 text-white p-2 rounded-full transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-700 hover:bg-primary-600 text-white p-2 rounded-full transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-700 hover:bg-primary-600 text-white p-2 rounded-full transition-all"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              {[
                "Accueil",
                "Notre Histoire",
                "Menu",
                "Galerie",
                "Réservation",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Horaires</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Lundi - Vendredi</span>
              </li>
              <li className="text-sm text-gray-500">12h-14h30 & 19h-23h</li>
              <li className="flex justify-between mt-3">
                <span>Samedi - Dimanche</span>
              </li>
              <li className="text-sm text-gray-500">
                12h-23h (service continu)
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin
                  size={18}
                  className="text-primary-400 flex-shrink-0 mt-1"
                />
                <span className="text-sm">
                  42 Avenue des Champs-Élysées
                  <br />
                  75008 Paris
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-primary-400" />
                <a
                  href="tel:+33123456789"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  01 23 45 67 89
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-primary-400" />
                <a
                  href="mailto:contact@primesteakhouse.fr"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  contact@primesteakhouse.fr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-dark-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Prime Steakhouse. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="/mentions-legales"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Mentions légales
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="/politique-confidentialite"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Politique de confidentialité
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="/cgv"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                CGV
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="/cookies"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
