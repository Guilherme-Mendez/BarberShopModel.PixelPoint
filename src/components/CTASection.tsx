import React from 'react';

const CTASection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-black rounded-lg overflow-hidden shadow-xl">
        <div className="grid md:grid-cols-2">
          <div className="p-12 flex flex-col justify-center">
            <h2 className="mx-auto text-3xl md:text-4xl font-bold text-white mb-6">
              Mais que corte, sua identidade
            </h2>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto md:mx-0 md:inline-block bg-[#bf303f] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#a62836] transition-colors w-fit"
            >
              Agende o seu horário
            </a>
          </div>
          <div className="h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop"
              alt="Barbershop Experience"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;