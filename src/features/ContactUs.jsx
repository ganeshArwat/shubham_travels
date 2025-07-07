import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Contact <span className="text-[#7b1f1f]">Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {/* Address */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-[#7b1f1f] text-3xl mb-4 flex justify-center">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-lg font-semibold mb-2">Office Address</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Vithal Seva Mandal,<br />
              FNMC127-12/13, Plot No. 10,<br />
              Wadala, Mumbai – 400031
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-[#7b1f1f] text-3xl mb-4 flex justify-center">
              <FaPhoneAlt />
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone Numbers</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              +91 93262 21811 <br />
              +91 79778 36678
            </p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-[#7b1f1f] text-3xl mb-4 flex justify-center">
              <FaEnvelope />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              shubhamtours777@gmail.com
            </p>
          </div>

          {/* Instagram */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-[#7b1f1f] text-3xl mb-4 flex justify-center">
              <FaInstagram />
            </div>
            <h3 className="text-lg font-semibold mb-2">Instagram</h3>
            <a
              href="https://www.instagram.com/shubham_travels_7484"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm underline hover:text-blue-800 transition"
            >
              @shubham_travels_7484
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
