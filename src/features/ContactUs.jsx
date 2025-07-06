import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Contact <span className="text-blue-600">Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Address */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="text-blue-600 text-3xl mb-4 mx-auto flex justify-center">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-xl font-semibold mb-2">Office Address</h3>
            <p className="text-gray-600 text-sm">
              Shubham Travels,<br />
              Near Bus Stand, Main Road,<br />
              Pune, Maharashtra – 411001
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="text-blue-600 text-3xl mb-4 mx-auto flex justify-center">
              <FaPhoneAlt />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone Numbers</h3>
            <p className="text-gray-600 text-sm">
              +91 98765 43210<br />
              +91 91234 56789
            </p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="text-blue-600 text-3xl mb-4 mx-auto flex justify-center">
              <FaEnvelope />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600 text-sm">
              info@shubhamtravels.com<br />
              support@shubhamtravels.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
