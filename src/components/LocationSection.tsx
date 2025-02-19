import React from 'react';
import map from '../assets/location/map.png';
import location from '../assets/icons/location.png';

const LocationSection = () => {
  const mapUrl = "https://www.google.com.br/maps/place/Bolinha+pr%C3%AAmio/@-16.0198444,-48.0590449,17z/data=!3m1!4b1!4m6!3m5!1s0x9359806dea2d4501:0x5dea609bddf63cc5!8m2!3d-16.0198444!4d-48.05647!16s%2Fg%2F11c5xnghx3?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="h-[500px] rounded-lg overflow-hidden shadow-xl">
          <a 
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <img
              src={map}
              alt="Mapa da localização"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
            />
          </a>
        </div>
        <div className="flex items-center">
          <div className="bg-zinc-900 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full">
            <h3 className="text-2xl font-bold text-[#1c53a3] mb-4">Localização</h3>
            <p className="text-gray-300 mb-6">
              Estamos localizados no St. Leste Quadra 21 Lote 05 - Gama, Brasília - DF, 72450-010
            </p>
            <div className="hidden md:block md:h-64 overflow-hidden rounded-lg">
              <img
                src={location}
                alt="Barbershop Storefront"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;