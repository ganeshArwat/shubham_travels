import React from 'react';
import aboutImage from '/assets/img/aboutus5.jpg'; // Use a high-quality travel image

const AboutUs = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src={aboutImage}
            alt="About Shubham Travels"
            className="rounded-xl shadow-lg w-full max-w-md mx-auto"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-blue-600">Shubham Travels?</span>
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            With over a decade of experience in providing comfortable and safe travel
            across India, Shubham Travels is your trusted partner for road journeys.
            Whether you're planning a short city ride or a long-distance trip, our
            well-maintained fleet and professional drivers ensure peace of mind.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold text-xl">✓</span>
              Experienced & Verified Drivers
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold text-xl">✓</span>
              Clean, Comfortable & Air-Conditioned Vehicles
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold text-xl">✓</span>
              Affordable Pricing & Transparent Billing
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold text-xl">✓</span>
              24/7 Customer Support
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
