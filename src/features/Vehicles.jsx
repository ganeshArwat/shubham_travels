import React, { useState } from 'react';

const fleetData = {
  Sedan: [
    { name: 'Toyota Glanza', img: '/assets/img/cars/glanza.jpeg', features: ['AC', '4 Seater', 'Smooth Ride', 'Compact Design'] },
    { name: 'Hyundai Aura', img: '/assets/img/cars/aura.webp', features: ['AC', '4 Seater', 'Fuel Efficient', 'Comfortable'] },
    { name: 'Dzire', img: '/assets/img/cars/dzire1.jpg', features: ['AC', '4 Seater', 'Fuel Efficient', 'Comfortable City Ride'] },
    { name: 'Etios', img: '/assets/img/cars/etios.jpg', features: ['AC', '4 Seater', 'Smooth Ride', 'Reliable Sedan'] },
  ],
  SUV: [
    { name: 'Innova Crysta', img: '/assets/img/cars/innova2.jpg', features: ['AC', '6-7 Seater', 'Spacious Luggage', 'Comfort Ride'] },
    { name: 'Innova Hycross', img: '/assets/img/cars/hycross.jpg', features: ['AC', '7 Seater', 'Hybrid Drive', 'Luxury Interior'] },
    { name: 'KIA Carens', img: '/assets/img/cars/carens1.jpg', features: ['AC', '6 Seater', 'Stylish & Spacious', 'Smooth Ride'] },
    { name: 'Ertiga', img: '/assets/img/cars/ertiga1.jpg', features: ['AC', '7 Seater', 'Family MPV', 'Fuel Efficient'] },
    { name: 'Fortuner', img: '/assets/img/cars/fortuner.jpg', features: ['AC', '7 Seater', 'Premium SUV', 'Powerful Drive'] },
  ],
  Bus: [
    { name: 'Force Urbania', img: '/assets/img/cars/urbania.jpg', features: ['AC', '17 Seater', 'Spacious Cabin', 'Luxury Ride'] },
    { name: 'Tempo Traveller', img: '/assets/img/cars/traveller.jpg', features: ['12-17 Seater', 'Ideal for Groups', 'Comfortable Journey'] },
    { name: 'Force Monobus 26', img: '/assets/img/cars/monobus_26.jpg', features: ['AC', '26 Seater', 'Large Group Travel', 'Smooth Suspension'] },
  ],
};

const Vehicles = () => {
  const categories = Object.keys(fleetData);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="vehicles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Our <span className="text-[#7b1f1f]">Fleet</span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeTab === category
                  ? 'bg-[#7b1f1f] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetData[activeTab].map((vehicle, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-transform transform hover:-translate-y-1"
            >
              <img
                src={vehicle.img}
                alt={vehicle.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{vehicle.name}</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  {vehicle.features.map((feature, fIdx) => (
                    <li key={fIdx}>• {feature}</li>
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
