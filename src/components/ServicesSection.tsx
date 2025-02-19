import React from 'react';
import { Scissors, Ruler, Droplets, Sparkles } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, price, icon }: ServiceCardProps) => (
  <div className="bg-zinc-900/50 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 border border-zinc-800 hover:border-[#1c53a3] group">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-zinc-800 rounded-lg group-hover:bg-[#1c53a3] transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-semibold text-white group-hover:text-[#1c53a3] transition-colors">{title}</h4>
        <p className="text-zinc-400 text-sm">{description}</p>
      </div>
    </div>
    <div className="mt-4 pt-4 border-t border-zinc-800">
      <p className="text-[#1c53a3] font-semibold text-lg">{price}</p>
    </div>
  </div>
);

const ServicesSection = () => {
  const hairServices = [
    {
      title: 'Corte Clássico',
      description: 'Corte tradicional com acabamento impecável',
      price: 'R$ 45',
      icon: <Scissors className="w-6 h-6 text-white" />,
    },
    {
      title: 'Escova Modeladora',
      description: 'Escova profissional para um visual marcante',
      price: 'R$ 35',
      icon: <Scissors className="w-6 h-6 text-white" />,
    },
    {
      title: 'Modelagem Moderna',
      description: 'Cortes modernos e estilizados',
      price: 'R$ 55',
      icon: <Scissors className="w-6 h-6 text-white" />,
    },
  ];

  const beardServices = [
    {
      title: 'Design de Barba',
      description: 'Modelagem e design personalizado',
      price: 'R$ 35',
      icon: <Ruler className="w-6 h-6 text-white" />,
    },
    {
      title: 'Hidratação Premium',
      description: 'Tratamento completo para sua barba',
      price: 'R$ 45',
      icon: <Droplets className="w-6 h-6 text-white" />,
    },
    {
      title: 'Barba Executiva',
      description: 'Acabamento refinado com produtos premium',
      price: 'R$ 50',
      icon: <Sparkles className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1c53a3] mb-4">Nossos Serviços</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Oferecemos uma experiência premium de barbearia com serviços personalizados
          para atender às suas necessidades.
        </p>
      </div>

      <div className="space-y-16">
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Scissors className="w-6 h-6" />
            Serviços de Cabelo
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {hairServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Ruler className="w-6 h-6" />
            Serviços de Barba
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {beardServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;