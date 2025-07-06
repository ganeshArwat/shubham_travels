import React from 'react';
import carImage from '/assets/img/hero2.jpeg'; // Ensure this path is correct

const Home = () => {
  return (
    <section
      id="home"
      className="pt-28 pb-16 bg-gradient-to-br from-white via-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug md:leading-tight">
            Drive in Comfort with <br />
            <span className="text-blue-600">Shubham Travels</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Experience premium car rental services with a wide range of vehicles
            tailored for comfort, style, and safety. Explore the city or travel
            outstation with confidence.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#booking"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300"
            >
              🚗 Book Now
            </a>
            <a
              href="#vehicles"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full font-semibold shadow-sm transition duration-300"
            >
              View Fleet
            </a>
          </div>
        </div>

        {/* Right Car Image */}
        <div className="md:w-1/2 relative">
          <img
            src={carImage}
            alt="Luxury Car"
            className="w-full max-w-md mx-auto rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-60 z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
