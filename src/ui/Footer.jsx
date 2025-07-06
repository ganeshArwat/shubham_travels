import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-[#7b1f1f] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Shubham Travels</h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            Your trusted partner for safe, stylish, and comfortable rides across Mumbai and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-200">
            {['home', 'vehicles', 'services', 'contact'].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-white transition"
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
          <ul className="space-y-3 text-sm text-gray-200">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-lg" />
              <span>Vithal Seva Mandal, Plot No. 10,<br />Wadala, Mumbai – 400031</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-lg" />
              <span>+91 79778 36678</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-lg" />
              <span>+91 93262 21811</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-lg" />
              <span>shubhamtours777@gmail.com</span>
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
            className="inline-flex items-center gap-3 text-sm text-gray-200 hover:text-white transition"
          >
            <FaInstagram className="text-lg" />
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
