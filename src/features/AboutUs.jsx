import React from 'react';
import aboutImage from '/assets/img/hero/aboutus5.jpg'; // Ensure this image exists in public/assets/img

const AboutUs = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src={aboutImage}
            alt="About Travel Empire"
            className="rounded-2xl shadow-xl w-full max-w-lg mx-auto md:mx-0"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-snug">
            Why Choose <span className="text-[#7b1f1f]">Travel Empire?</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
            With over a decade of experience providing comfortable and safe travel across India, 
            Travel Empire is your trusted partner for road journeys. Whether you're planning a short city ride 
            or a long-distance trip, our well-maintained fleet and professional drivers ensure peace of mind.
          </p>

          <ul className="space-y-4 text-gray-700">
            {[
              "Experienced & Verified Drivers",
              "Clean, Comfortable & Air-Conditioned Vehicles",
              "Affordable Pricing & Transparent Billing",
              "24/7 Customer Support",
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-green-500 text-xl mt-0.5">✓</span>
                <span className="text-base md:text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
