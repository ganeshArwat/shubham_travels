import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#822727] pb-10 pt-16 text-white">
      {/* Optional Top Gradient Glow */}
      <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-white/10 via-white/20 to-white/10 blur-sm" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="mb-4 text-2xl font-bold">The Travel Empire</h3>
          <p className="text-sm leading-relaxed text-gray-100">
            Your trusted partner for safe, stylish, and comfortable rides across
            Mumbai and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-100">
            {['home', 'vehicles', 'services', 'contact'].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer transition hover:text-white hover:underline"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-100">
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-white/10 p-2">
                <FaMapMarkerAlt className="text-lg text-white" />
              </div>
              <span>
                Vithal Seva Mandal, Plot No. 10,
                <br />
                Wadala, Mumbai – 400031
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="rounded-full bg-white/10 p-2">
                <FaPhoneAlt className="text-lg text-white" />
              </div>
              <a href="tel:+917977836678" className="hover:underline">
                +91 79778 36678
              </a>
            </li>
            <li className="flex items-center gap-3">
              <div className="rounded-full bg-white/10 p-2">
                <FaPhoneAlt className="text-lg text-white" />
              </div>
              <a href="tel:+919326221811" className="hover:underline">
                +91 93262 21811
              </a>
            </li>
            <li className="flex items-center gap-3">
              <div className="rounded-full bg-white/10 p-2">
                <FaEnvelope className="text-lg text-white" />
              </div>
              <a
                href="mailto:thetravelempire24@gmail.com"
                className="hover:underline"
              >
                thetravelempire24@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Follow Us</h4>
          <a
            href="https://www.instagram.com/the_travel_empire7484"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm text-gray-100 transition hover:text-white hover:underline"
          >
            <div className="rounded-full bg-white/10 p-2">
              <FaInstagram className="text-lg text-white" />
            </div>
            @the_travel_empire7484
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-white/10 pt-5 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} The Travel Empire. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
