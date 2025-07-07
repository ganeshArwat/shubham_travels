import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-[#822727] text-white pt-16 pb-10 relative overflow-hidden">
      {/* Optional Top Gradient Glow */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-white/10 via-white/20 to-white/10 blur-sm" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 z-10 relative">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Shubham Travels</h3>
          <p className="text-sm text-gray-100 leading-relaxed">
            Your trusted partner for safe, stylish, and comfortable rides across Mumbai and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-100">
            {['home', 'vehicles', 'services', 'contact'].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-white hover:underline transition"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-100">
            <li className="flex items-start gap-3">
              <div className="bg-white/10 p-2 rounded-full">
                <FaMapMarkerAlt className="text-white text-lg" />
              </div>
              <span>
                Vithal Seva Mandal, Plot No. 10,<br />
                Wadala, Mumbai – 400031
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-full">
                <FaPhoneAlt className="text-white text-lg" />
              </div>
              <a href="tel:+917977836678" className="hover:underline">
                +91 79778 36678
              </a>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-full">
                <FaPhoneAlt className="text-white text-lg" />
              </div>
              <a href="tel:+919326221811" className="hover:underline">
                +91 93262 21811
              </a>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-full">
                <FaEnvelope className="text-white text-lg" />
              </div>
              <a href="mailto:shubhamtours777@gmail.com" className="hover:underline">
                shubhamtours777@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <a
            href="https://www.instagram.com/shubham_travels_7484"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm text-gray-100 hover:text-white hover:underline transition"
          >
            <div className="bg-white/10 p-2 rounded-full">
              <FaInstagram className="text-white text-lg" />
            </div>
            @shubham_travels_7484
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-white/10 pt-5 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} Shubham Travels. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
