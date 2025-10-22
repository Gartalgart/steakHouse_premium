import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, Users, Check } from "lucide-react";

const Reservation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi
    console.log("Réservation:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="reservation" className="py-20 bg-dark-800" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 ${
            inView ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            Réservation
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Réservez votre table et vivez une expérience gastronomique
            inoubliable
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className={`${inView ? "animate-fade-in" : "opacity-0"}`}>
            {isSubmitted ? (
              <div className="bg-green-600/20 border-2 border-green-600 rounded-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-600 rounded-full p-3">
                    <Check size={40} className="text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Réservation confirmée !
                </h3>
                <p className="text-gray-300">
                  Nous avons bien reçu votre demande. Un email de confirmation
                  vous sera envoyé sous peu.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white font-medium mb-2"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-900 rounded-lg text-white focus:outline-none focus:border-primary-600 transition-colors"
                    placeholder="Jean Dupont"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white font-medium mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-900 rounded-lg text-white focus:outline-none focus:border-primary-600 transition-colors"
                      placeholder="jean@exemple.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-white font-medium mb-2"
                    >
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-900 rounded-lg text-white focus:outline-none focus:border-primary-600 transition-colors"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                {/* Date, Time, Guests */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-white font-medium mb-2"
                    >
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-900 rounded-lg text-white focus:outline-none focus:border-primary-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-white font-medium mb-2"
                    >
                      Heure *
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-900 rounded-lg text-white focus:outline-none focus:border-primary-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-white font-medium mb-2"
                    >
                      Personnes *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-900 rounded-lg text-white focus:outline-none focus:border-primary-600 transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "personne" : "personnes"}
                        </option>
                      ))}
                      <option value="9+">9+ personnes</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-white font-medium mb-2"
                  >
                    Message (optionnel)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-900 rounded-lg text-white focus:outline-none focus:border-primary-600 transition-colors resize-none"
                    placeholder="Demandes spéciales, allergies, occasion particulière..."
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  Confirmer la réservation
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div
            className={`space-y-8 ${inView ? "animate-fade-in" : "opacity-0"}`}
          >
            {/* Quick Info Cards */}
            <div className="space-y-4">
              <div className="bg-dark-700 p-6 rounded-lg flex items-start space-x-4">
                <div className="bg-primary-600 rounded-full p-3">
                  <Calendar className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Horaires d'ouverture
                  </h3>
                  <p className="text-gray-300">
                    Lundi - Vendredi : 12h - 14h30 & 19h - 23h
                    <br />
                    Samedi - Dimanche : 12h - 23h
                  </p>
                </div>
              </div>

              <div className="bg-dark-700 p-6 rounded-lg flex items-start space-x-4">
                <div className="bg-primary-600 rounded-full p-3">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Réservation conseillée
                  </h3>
                  <p className="text-gray-300">
                    Nous recommandons de réserver à l'avance, particulièrement
                    le week-end et les jours fériés.
                  </p>
                </div>
              </div>

              <div className="bg-dark-700 p-6 rounded-lg flex items-start space-x-4">
                <div className="bg-primary-600 rounded-full p-3">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Groupes & Événements
                  </h3>
                  <p className="text-gray-300">
                    Pour les groupes de plus de 8 personnes ou événements
                    privés, contactez-nous directement.
                  </p>
                </div>
              </div>
            </div>

            {/* Alternative Booking */}
            <div className="bg-primary-600/10 border-2 border-primary-600 rounded-lg p-6">
              <h3 className="text-white font-bold text-xl mb-3">
                Réserver par téléphone
              </h3>
              <p className="text-gray-300 mb-4">
                Vous préférez réserver par téléphone ? Notre équipe est à votre
                disposition.
              </p>
              <a
                href="tel:+33123456789"
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold transition-all"
              >
                01 23 45 67 89
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
