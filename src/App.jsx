import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Reservation from "./components/Reservation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-dark-900">
      {/* Navigation */}
      <Navbar />

      {/* Contenu principal */}
      <main className="overflow-hidden">
        <Hero />

        <section className="py-20 bg-dark-800">
          <About />
        </section>

        <section className="py-20 bg-dark-900">
          <Menu />
        </section>

        <section className="py-20 bg-dark-800">
          <Gallery />
        </section>

        <section className="py-20 bg-dark-900">
          <Testimonials />
        </section>

        <section className="py-20 bg-dark-800">
          <Reservation />
        </section>

        <section className="py-20 bg-dark-900">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
