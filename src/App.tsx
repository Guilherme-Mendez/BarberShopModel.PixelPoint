import React from 'react';
import { Instagram, MessageCircle, ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import LocationSection from './components/LocationSection';
import ServicesSection from './components/ServicesSection';
import CTASection from './components/CTASection';

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <Navbar />
      
      <main>
        <section id="home">
          <HomeSection />
        </section>

        <section id="about" className="py-20">
          <AboutSection />
        </section>

        <section id="location" className="py-20">
          <LocationSection />
        </section>

        <section id="services" className="py-20">
          <ServicesSection />
        </section>

        <section className="py-20">
          <CTASection />
        </section>
      </main>

      <Footer />

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-2 bg-[#bf303f] text-white rounded-full shadow-lg hover:bg-[#a62836] transition-colors"
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
}

export default App;