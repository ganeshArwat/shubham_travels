import React from 'react';
import { FaMapMarkedAlt, FaBus, FaCity, FaUserTie } from 'react-icons/fa';

const services = [
  {
    icon: <FaMapMarkedAlt className="text-4xl text-blue-600 mb-4" />,
    title: 'Outstation Trips',
    desc: 'Comfortable and reliable travel across cities with professional drivers.',
  },
  {
    icon: <FaCity className="text-4xl text-blue-600 mb-4" />,
    title: 'City Tours',
    desc: 'Explore major attractions with our guided and flexible city tour packages.',
  },
  {
    icon: <FaBus className="text-4xl text-blue-600 mb-4" />,
    title: 'Group Travel',
    desc: 'Minibuses and vans for family functions, picnics, and office trips.',
  },
  {
    icon: <FaUserTie className="text-4xl text-blue-600 mb-4" />,
    title: 'Corporate Bookings',
    desc: 'Customized travel solutions for businesses, events, and VIP movement.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our <span className="text-blue-600">Services</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
