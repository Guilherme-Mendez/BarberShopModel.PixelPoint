import React from 'react';
//import barber from '../assets/icons/barber.jpeg';

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c53a3]">
            Nossa essência
          </h2>
          <div className="space-y-4">
            <p className="text-gray-300">
              Mais do que uma barbearia, somos um espaço onde tradição e estilo se encontram. 
              Cada corte, cada barba e cada tatuagem são pensados para realçar a sua identidade, 
              respeitando seu estilo e personalidade.
            </p>
            <p className="text-gray-300">
              Acreditamos que um bom corte vai além da tesoura — ele traz confiança, atitude e presença. 
              Por isso, combinamos à tatuagem e um atendimento de primeira para garantir que 
              você saia daqui sempre no seu melhor.
            </p>
            <p className="text-gray-300">
              Seja para um retoque clássico ou uma transformação completa, nossa essência está em 
              cuidar do seu visual com maestria.
            </p>
          </div>
        </div>
        <div className="relative h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Barbershop Interior"
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;