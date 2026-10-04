import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import logo from "../../assets/images/EuroToddlerLogo.png";


const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Gallery", path: "/gallery" },
  { name: "Resources", path: "/resources" },
  { name: "Admissions", path: "/admissions" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Euro Toddlers"
            className="h-14 w-auto"
          />

          <div className="hidden sm:block">
            <h2 className="text-xl font-bold text-red-500">
              Euro Toddlers
            </h2>

            <p className="text-xs text-sky-500">
              International Pre School
            </p>
          </div>
        </NavLink>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-8">

          {navLinks.map((link) => (

            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition-all duration-300 hover:text-red-500 ${
                  isActive
                    ? "text-red-500"
                    : "text-slate-700"
                }`
              }
            >
              {link.name}
            </NavLink>

          ))}

        </nav>

        {/* Admission Button */}

        <NavLink
          to="/admissions"
          className="
          hidden
          lg:block
          rounded-full
          bg-red-500
          px-6
          py-3
          font-semibold
          text-white
          transition
          duration-300
          hover:scale-105
          hover:bg-red-600
          "
        >
          Admission Open
        </NavLink>

        {/* Mobile */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-3xl"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      {/* Mobile Menu */}

      {isOpen && (

        <div className="lg:hidden bg-white border-t">

          {navLinks.map((link) => (

            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 border-b hover:bg-red-50"
            >
              {link.name}
            </NavLink>

          ))}

        </div>

      )}
    </header>
  );
}