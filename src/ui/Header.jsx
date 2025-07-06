import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About Us' },
    { to: 'services', label: 'Services' },
    { to: 'vehicles', label: 'Vehicles' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          Shubham Travels
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-500"
              onClick={closeMenu}
            >
              {item.label}
            </ScrollLink>
          ))}
        </nav>

        {/* CTA Button for Desktop */}
        <a
          href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20vehicle"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block ml-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition cursor-pointer"
        >
          Book Now
        </a>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl cursor-pointer text-gray-800" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 space-y-4 text-gray-700 font-medium">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="block cursor-pointer hover:text-blue-500"
            >
              {item.label}
            </ScrollLink>
          ))}
          <ScrollLink
            to="booking"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="block bg-red-500 text-white px-4 py-2 rounded-md text-center hover:bg-red-600 transition cursor-pointer"
          >
            Book Now
          </ScrollLink>
        </div>
      )}
    </header>
  );
};

export default Header;
