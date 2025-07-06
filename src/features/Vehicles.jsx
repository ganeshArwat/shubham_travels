import React from 'react';
import suvImage from '/assets/img/hero2.jpeg';
import sedanImage from '/assets/img/hero2.jpeg';
import tempoImage from '/assets/img/hero2.jpeg';
import busImage from '/assets/img/hero2.jpeg';

const vehicles = [
  {
    image: suvImage,
    name: 'SUV – Innova Crysta',
    features: '7 Seater • AC • Spacious • Ideal for family trips',
  },
  {
    image: sedanImage,
    name: 'Sedan – Swift Dzire',
    features: '4 Seater • AC • Comfortable • Budget friendly',
  },
  {
    image: tempoImage,
    name: 'Tempo Traveller',
    features: '12 Seater • AC • Perfect for groups & picnics',
  },
  {
    image: busImage,
    name: 'Mini Bus – 20 Seater',
    features: 'Group travel • Events • Weddings • Functions',
  },
];

const Vehicles = () => {
  return (
    <section id="vehicles" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our <span className="text-blue-600">Vehicles</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {vehicle.name}
                </h3>
                <p className="text-gray-600 text-sm">{vehicle.features}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vehicles;
