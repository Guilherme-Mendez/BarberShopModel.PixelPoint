import React from 'react';
import logo from '../assets/icons/bolinhalogo.png';

const HomeSection = () => {
  return (
    <div 
      className="h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1593269211259-b2367de7dba6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
      }}
    >
      <div className="absolute inset-0 bg-black/60">
        <div className="h-full flex flex-col items-center justify-end text-white pb-6">
          <img
            src={logo}
            alt="Barbershoplogo"
            className="opacity-40 w-auto h-auto my-2 object-cover"
          />
          <p className="text-xl md:text-2xl font-light italic">
            Detalhes que fazem a diferença
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;