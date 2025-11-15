import React from "react";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from '../../assets//logo.png'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 text-center font-roboto-slab">
    
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
         {/* <img src={logo} alt="Balanayagam Logo" className=" w-25 h-25 " /> */}
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Balanayagam Roofing</h2>
          
          <p className="text-sm leading-6">
            Expert roofing and fabrication solutions for homes and industries.
            We specialize in JSW sheets, PUF panels, and stone-coated roofing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition">About</a></li>
            <li><a href="/services" className="hover:text-yellow-400 transition">Services</a></li>
            <li><a href="/gallery" className="hover:text-yellow-400 transition">Gallery</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 text-blue-400 mr-2 mt-1" />
              <span>123 Main Street, Madurai, Tamil Nadu</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 text-blue-400 mr-2" />
              <a href="tel:+918220366044"
              target="_blank"
              rel="noopener noreferrer"
               className="hover:text-blue-400 transition">
                +91 8220366044
              </a>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 text-blue-400 mr-2" />
              <a href="mailto:parthimageshwari50@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              
              className="hover:text-blue-400 transition">
               parthimageshwari50@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Follow Us</h3>
          <div className="flex space-x-5 justify-center">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Balanayagam Roofing</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
