// src/components/Reservation.jsx
import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  Mail,
  Phone,
  User,
  Check,
  X,
  MapPin,
} from "lucide-react";

const Reservation = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "2",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [step, setStep] = useState(1);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const generateTimeSlots = (selectedDate) => {
    if (!selectedDate) return [];
    const slots = [];
    const date = new Date(selectedDate);
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 1) return [];
    if (dayOfWeek >= 2 || dayOfWeek === 0) {
      ["12:00", "12:30", "13:00", "13:30", "14:00"].forEach((time) => {
        slots.push({
          time,
          service: "Déjeuner",
          available: Math.random() > 0.3,
        });
      });
    }
    if (dayOfWeek === 6) {
      ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"].forEach(
        (time) => {
          slots.push({
            time,
            service: "Dîner",
            available: Math.random() > 0.4,
          });
        }
      );
    } else if (dayOfWeek === 0) {
      // Dimanche (déjeuner uniquement)
    } else {
      ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"].forEach(
        (time) => {
          slots.push({
            time,
            service: "Dîner",
            available: Math.random() > 0.3,
          });
        }
      );
    }
    return slots;
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date, time: "" });
    setAvailableSlots(generateTimeSlots(date));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setStep(1);
      setFormData({
        date: "",
        time: "",
        guests: "2",
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 4000);
  };

  const today = new Date().toISOString().split("T")[0];
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const max = maxDate.toISOString().split("T")[0];

  return (
    <section id="reservation" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-400 mb-4 animate-slide-up">
            Réserver une table
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in">
            Une expérience culinaire d'exception vous attend
          </p>
        </div>

        {/* Boutons rapides alternatifs */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            {/* En ligne (actif) */}
            <div className="group relative bg-gradient-to-br from-primary-600 to-primary-700 text-white p-6 rounded-2xl shadow-xl animate-fade-in">
              <div className="absolute top-3 right-3 bg-green-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                ⭐ En ligne
              </div>
              <div className="flex items-center mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Réservation directe</h3>
              <p className="text-sm opacity-90 mb-4">
                Confirmation instantanée • Meilleur prix garanti
              </p>
              <div className="flex items-center text-sm font-semibold">
                Réserver maintenant ↓
              </div>
            </div>

            {/* Google */}
            <a
              href="#reservation"
              onClick={(e) => {
                e.preventDefault();
                alert(
                  "🎓 Mode démo : Dans un site réel, ce bouton redirigerait vers Google Réservations"
                );
              }}
              className="group bg-gradient-to-br from-dark-800 to-dark-900 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:scale-105 cursor-pointer animate-fade-in"
            >
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Google Réservations</h3>
              <p className="text-sm opacity-90 mb-4">
                Via Google Maps • (Mode démo)
              </p>
              <div className="flex items-center text-sm font-semibold group-hover:translate-x-1 transition">
                Voir démo →
              </div>
            </a>

            {/* Téléphone */}
            <a
              href="tel:+33123456789"
              onClick={(e) => {
                e.preventDefault();
                alert("📞 Mode démo : Numéro fictif\n+33 1 23 45 67 89");
              }}
              className="group bg-gradient-to-br from-dark-700 to-dark-800 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:scale-105 animate-fade-in"
            >
              <div className="flex items-center mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Par téléphone</h3>
              <p className="text-sm opacity-90 mb-4">
                Service personnalisé • (Mode démo)
              </p>
              <div className="text-lg font-bold mb-2">01 23 45 67 89</div>
              <div className="flex items-center text-sm font-semibold group-hover:translate-x-1 transition">
                Voir démo →
              </div>
            </a>
          </div>
        </div>

        {/* Widget de réservation simulé */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header style TheFork */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-1">
                    Réservation en ligne
                  </h3>
                  <p className="text-sm opacity-90">
                    Disponibilités en temps réel
                  </p>
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold">
                  🎓 Mode Démo
                </div>
              </div>
            </div>

            {/* Stepper */}
            <div className="bg-gray-50 px-6 py-4 border-b">
              <div className="flex items-center justify-between max-w-md mx-auto">
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      step >= 1
                        ? "bg-primary-600 text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {step > 1 ? <Check className="w-5 h-5" /> : "1"}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    Date & Heure
                  </span>
                </div>

                <div
                  className={`h-1 w-20 ${
                    step >= 2 ? "bg-primary-600" : "bg-gray-300"
                  }`}
                ></div>

                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      step >= 2
                        ? "bg-primary-600 text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {step > 2 ? <Check className="w-5 h-5" /> : "2"}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    Vos infos
                  </span>
                </div>

                <div
                  className={`h-1 w-20 ${
                    step >= 3 ? "bg-primary-600" : "bg-gray-300"
                  }`}
                ></div>

                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      step >= 3
                        ? "bg-primary-600 text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    3
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    Confirmation
                  </span>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="p-8">
              {/* ÉTAPE 1 : Date, heure, nombre de personnes */}
              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  {/* Date */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Calendar className="inline w-5 h-5 mr-2" />
                      Date de réservation
                    </label>
                    <input
                      type="date"
                      min={today}
                      max={max}
                      value={formData.date}
                      onChange={(e) => handleDateChange(e.target.value)}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-lg"
                    />
                    {formData.date && availableSlots.length === 0 && (
                      <p className="mt-2 text-red-600 text-sm flex items-center">
                        <X className="w-4 h-4 mr-1" />
                        Fermé ce jour-là (Lundi)
                      </p>
                    )}
                  </div>

                  {/* Nombre de personnes */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Users className="inline w-5 h-5 mr-2" />
                      Nombre de personnes
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({ ...formData, guests: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-lg"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "personne" : "personnes"}
                        </option>
                      ))}
                      <option value="8+">8+ personnes (nous contacter)</option>
                    </select>
                  </div>

                  {/* Créneaux horaires */}
                  {availableSlots.length > 0 && (
                    <div>
                      <label className="block text-gray-700 font-semibold mb-3">
                        <Clock className="inline w-5 h-5 mr-2" />
                        Choisir un créneau
                      </label>
                      <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                        {availableSlots.map((slot, index) => (
                          <button
                            key={index}
                            type="button"
                            disabled={!slot.available}
                            onClick={() =>
                              setFormData({ ...formData, time: slot.time })
                            }
                            className={`
                              p-3 rounded-lg border-2 text-center transition font-semibold
                              ${
                                formData.time === slot.time
                                  ? "border-primary-600 bg-primary-50 text-primary-700"
                                  : slot.available
                                  ? "border-gray-300 hover:border-primary-500 text-gray-700"
                                  : "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
                              }
                            `}
                          >
                            {slot.time}
                            {!slot.available && (
                              <span className="block text-xs mt-1">
                                Complet
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                      <p className="mt-3 text-sm text-gray-500">
                        ℹ️ Les créneaux affichés sont simulés pour la démo
                      </p>
                    </div>
                  )}

                  {/* Bouton suivant */}
                  <button
                    type="button"
                    disabled={
                      !formData.date ||
                      !formData.time ||
                      formData.guests === "8+"
                    }
                    onClick={() => setStep(2)}
                    className="w-full bg-primary-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    {formData.guests === "8+"
                      ? "Veuillez nous contacter par téléphone"
                      : "Continuer →"}
                  </button>
                </div>
              )}

              {/* ÉTAPE 2 : Informations personnelles */}
              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  {/* Récapitulatif */}
                  <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-4">
                    <h4 className="font-bold text-primary-900 mb-2">
                      📋 Récapitulatif
                    </h4>
                    <p className="text-gray-700">
                      <strong>Date :</strong>{" "}
                      {new Date(formData.date + "T00:00:00").toLocaleDateString(
                        "fr-FR",
                        {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                      <br />
                      <strong>Heure :</strong> {formData.time}
                      <br />
                      <strong>Personnes :</strong> {formData.guests}
                    </p>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="mt-2 text-primary-700 text-sm font-semibold hover:underline"
                    >
                      ← Modifier
                    </button>
                  </div>

                  {/* Nom */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <User className="inline w-5 h-5 mr-2" />
                      Nom complet
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Jean Dupont"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Mail className="inline w-5 h-5 mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="jean.dupont@example.com"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Pour la confirmation de réservation
                    </p>
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Phone className="inline w-5 h-5 mr-2" />
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="06 12 34 56 78"
                      required
                      pattern="[0-9]{10}|[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                    />
                  </div>

                  {/* Message optionnel */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Message (optionnel)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Allergies, occasion spéciale, demandes particulières..."
                      rows="3"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  {/* Boutons */}
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-lg font-bold hover:bg-gray-300 transition"
                    >
                      ← Retour
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-primary-600 text-white py-4 rounded-lg font-bold hover:bg-primary-700 transition"
                    >
                      Confirmer la réservation
                    </button>
                  </div>
                </div>
              )}
            </form>

            {/* Message de succès */}
            {showSuccess && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
                <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl animate-slide-up">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Réservation confirmée !
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Un email de confirmation a été envoyé à<br />
                    <strong>{formData.email}</strong>
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                    <p className="text-sm text-gray-700">
                      <strong>📅 Date :</strong>{" "}
                      {new Date(formData.date + "T00:00:00").toLocaleDateString(
                        "fr-FR"
                      )}
                      <br />
                      <strong>🕐 Heure :</strong> {formData.time}
                      <br />
                      <strong>👥 Personnes :</strong> {formData.guests}
                      <br />
                      <strong>👤 Nom :</strong> {formData.name}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500">
                    🎓 Ceci est une simulation pour portfolio
                    <br />
                    Aucune réservation réelle n'a été créée
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Informations pratiques */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-700 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-primary-400 mb-8 text-center">
              Informations pratiques
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Horaires */}
              <div className="flex items-start gap-4">
                <div className="bg-primary-600 rounded-full p-3 flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-3">
                    Horaires d'ouverture
                  </h4>
                  <div className="space-y-2 text-gray-300">
                    <p className="flex justify-between gap-4">
                      <span className="font-medium">Mar - Ven</span>
                      <span>12h-14h30 • 19h-22h30</span>
                    </p>
                    <p className="flex justify-between gap-4">
                      <span className="font-medium">Samedi</span>
                      <span>19h-23h00</span>
                    </p>
                    <p className="flex justify-between gap-4">
                      <span className="font-medium">Dimanche</span>
                      <span>12h-15h00</span>
                    </p>
                    <p className="text-red-400 font-medium mt-3">
                      Fermé le lundi
                    </p>
                  </div>
                </div>
              </div>

              {/* Adresse */}
              <div className="flex items-start gap-4">
                <div className="bg-primary-600 rounded-full p-3 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-3">
                    Nous trouver
                  </h4>
                  <p className="text-gray-300 mb-3">
                    42 Avenue des Champs-Élysées
                    <br />
                    75008 Paris
                  </p>
                  <div className="space-y-2">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("🎓 Mode démo : Lien Google Maps fictif");
                      }}
                      className="flex items-center text-primary-400 hover:text-primary-300 text-sm font-medium"
                    >
                      📍 Voir sur Google Maps →
                    </a>
                    <p className="text-gray-400 text-sm">
                      🚇 Métro : Palais Royal (lignes 1, 7)
                      <br />
                      🚗 Parking Vendôme à 150m
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes importantes */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <h4 className="font-bold text-white mb-4">📝 À savoir</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-1">•</span>
                  <span>
                    Réservation fortement conseillée, surtout le week-end
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-1">•</span>
                  <span>
                    Groupes de 8+ personnes : nous contacter par téléphone
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-1">•</span>
                  <span>Annulation gratuite jusqu'à 24h avant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-1">•</span>
                  <span>Tenue correcte exigée</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;

<style jsx>{`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.3s ease-in;
  }

  .animate-slideUp {
    animation: slideUp 0.4s ease-out;
  }
`}</style>;
