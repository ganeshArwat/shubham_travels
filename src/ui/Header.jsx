import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '/assets/img/logo_bg.png'; // ✅ Ensure this path is correct

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About Us' },
    { to: 'services', label: 'Services' },
    { to: 'vehicles', label: 'Fleet' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <ScrollLink to="home" smooth={true} duration={500} offset={-80} className="cursor-pointer">
            <img
              src={logo}
              alt="Shubham Tours and Travels Logo"
              className="w-12 h-12 object-contain"
            />
          </ScrollLink>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 leading-tight">
            <span className="text-[#1c1c1c]">Shubham</span>{' '}
            <span className="text-[#7b1f1f]">Tours</span>{' '}
            <span className="text-[#1c1c1c]">and</span>{' '}
            <span className="text-[#7b1f1f]">Travels</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 text-[16px] font-medium">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-[#7b1f1f] transition-colors duration-200"
              onClick={closeMenu}
            >
              {item.label}
            </ScrollLink>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/9326221811?text=Hi%2C%20I%20want%20to%20book%20a%20vehicle"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-[#7b1f1f] text-white px-5 py-2 rounded-md hover:bg-[#5c1515] transition duration-200 text-sm font-semibold shadow-sm"
        >
          Book Now
        </a>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-2xl text-gray-800" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 space-y-4 text-gray-900 text-base font-medium">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
              className="block cursor-pointer hover:text-[#7b1f1f] transition"
            >
              {item.label}
            </ScrollLink>
          ))}
          <a
            href="https://wa.me/9326221811?text=Hi%2C%20I%20want%20to%20book%20a%20vehicle"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#7b1f1f] text-white px-4 py-2 rounded-md text-center hover:bg-[#5c1515] transition"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
