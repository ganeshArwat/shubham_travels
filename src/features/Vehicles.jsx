import React from 'react';

const vehicles = [
  {
    name: "Innova Crysta",
    img: "/assets/img/cars/innova2.jpg",
    features: ["AC", "6-7 Seater", "Spacious Luggage", "Comfort Ride"],
  },
  {
    name: "Fortuner",
    img: "/assets/img/cars/fortuner.jpg",
    features: ["AC", "7 Seater", "Premium SUV", "Powerful Drive"],
  },
  {
    name: "KIA Carens",
    img: "/assets/img/cars/carens1.jpg",
    features: ["AC", "6 Seater", "Stylish & Spacious", "Smooth Ride"],
  },
  {
    name: "Dzire",
    img: "/assets/img/cars/dzire1.jpg",
    features: ["AC", "4 Seater", "Fuel Efficient", "Comfortable City Ride"],
  },
  {
    name: "Etios",
    img: "/assets/img/cars/etios.jpg",
    features: ["AC", "4 Seater", "Smooth Ride", "Reliable Sedan"],
  },
];

const Vehicles = () => {
  return (
    <section id="vehicles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our <span className="text-[#7b1f1f]">Fleet</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-transform transform hover:-translate-y-1"
            >
              <img
                src={vehicle.img}
                alt={vehicle.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{vehicle.name}</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  {vehicle.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vehicles;
