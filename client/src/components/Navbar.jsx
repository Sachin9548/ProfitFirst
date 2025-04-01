import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Function to control navbar visibility based on scroll direction
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scrolling down -> hide navbar
        setShowNavbar(false);
      } else {
        // Scrolling up -> show navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 w-full flex items-center justify-center md:justify-between px-4 py-4 bg-transparent transition-transform duration-300 z-50`}
      style={{ padding: "2px 10%" }}
    >
      {/* Logo always visible and centered on mobile */}
      <div className="flex-shrink-0">
        <img src={Logo} alt="Logo" width={150} />
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-[#999] gap-6">
        <li>
          <Link to={"/"} className="hover:text-green-500">
            Home
          </Link>
        </li>
        <li>
          <a href="#DASHBOARD" className="hover:text-green-500">
            Resources
          </a>
        </li>
        <li>
          <a href="#USECASES" className="hover:text-green-500">
            Use Cases
          </a>
        </li>
        <li>
          <a href="#BLOG" className="hover:text-green-500">
            Blog
          </a>
        </li>
        <li>
          <a href="#PRICING" className="hover:text-green-500">
            Pricing
          </a>
        </li>
      </ul>

      {/* Desktop Get Started Button */}
      <div className="hidden md:block">
        <Link
          to="/Contact"
          className="bg-green-500 text-white px-4 py-2 hover:bg-gray-900 transition rounded-lg"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
