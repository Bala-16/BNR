import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallrey", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50 font-PT-Serif font-bold">
      <div className="container mx-auto px-5 flex items-center justify-between">
        
        {/* Logo (click to go Home) */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Balanayagam Logo" className="h-30 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-yellow-500 transition font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Quote Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="#"
            onClick={()=>
            window.open(
              "https://wa.me/918220366044?text=👋%20Hello!%20Welcome%20to%20Balanayagam%20Company.%20Thank%20you%20for%20contacting%20us.%20How%20can%20we%20assist%20you%20today%3F.",
      "_blank"
            )
            }
            
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-yellow-500 transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
