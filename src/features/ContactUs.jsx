import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram
} from 'react-icons/fa';

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
              <a href="tel:+919326221811" className="text-blue-600 hover:underline block">
                +91 93262 21811
              </a>
              <a href="tel:+917977836678" className="text-blue-600 hover:underline block">
                +91 79778 36678
              </a>
            </p>
            <div className="mt-3">
              <a
                href="https://wa.me/9326221811"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-600 hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-[#7b1f1f] text-3xl mb-4 flex justify-center">
              <FaEnvelope />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              <a
                href="mailto:shubhamtours777@gmail.com"
                className="text-blue-600 hover:underline"
              >
                shubhamtours777@gmail.com
              </a>
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

        {/* Subtle CTA for Booking */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/9326221811?text=Hi%20Shubham%20Travels%2C%20I%20would%20like%20to%20book%20a%20trip."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#7b1f1f] text-[#7b1f1f] px-6 py-2 rounded-full text-sm hover:bg-[#7b1f1f] hover:text-white transition"
          >
            Book Now via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
