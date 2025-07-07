import React from 'react';
import { FaMapMarkedAlt, FaBus, FaPlaneArrival, FaCity, FaWhatsapp } from 'react-icons/fa';

const services = [
  {
    icon: <FaCity className="text-5xl text-[#7b1f1f] mb-4" />,
    title: 'Local Tours',
    desc: 'Comfortable city tours across Mumbai with experienced drivers who know every street and shortcut.',
  },
  {
    icon: <FaMapMarkedAlt className="text-5xl text-[#7b1f1f] mb-4" />,
    title: 'Outstation Trips',
    desc: 'Comfortable and reliable travel across cities with professional drivers.',
  },
  {
    icon: <FaPlaneArrival className="text-5xl text-[#7b1f1f] mb-4" />,
    title: 'Airport Pickup & Drop',
    desc: 'On-time airport transfers with clean and well-maintained vehicles.',
  },
  {
    icon: <FaBus className="text-5xl text-[#7b1f1f] mb-4" />,
    title: 'Group Travel',
    desc: 'Minibuses and vans for family functions, picnics, and office trips.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our <span className="text-[#7b1f1f]">Services</span>
        </h2>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Book Now Button */}
        <div className="text-center">
          <a
            href="https://wa.me/9326221811?text=Hi%2C%20I%20want%20to%20book%20a%20vehicle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#7b1f1f] text-white px-8 py-3 rounded-full text-base font-medium hover:bg-[#5e1515] transition duration-300 shadow-md"
          >
            <FaWhatsapp className="text-lg" />
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
