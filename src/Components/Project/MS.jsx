import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MS from '../../assets/service/MS.jpg'

const MaterialSupply = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="px-6 md:px-20 py-16 bg-white text-gray-800"
    >
      <img
                src={MS}
                alt="Fabrication & Installation"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-10 mb-12"
      >
      
        <h1 className="text-4xl font-bold mb-3">Material Supply</h1>
       
        <p className="text-gray-600 max-w-2xl mx-auto">
          Reliable supply of top-quality roofing and fabrication materials for every kind of project.
        </p>
      </motion.div>

      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <p className="text-gray-600 leading-relaxed">
          We provide high-grade roofing and fabrication materials for industrial, commercial, and residential projects.
          Our materials are sourced from trusted manufacturers to ensure strength, durability, and long-term performance.
          Whether you need JSW sheets, PUF panels, louvers, or ventilators — we guarantee timely delivery and consistent quality.
        </p>
      </motion.div>

      {/* Materials List */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Materials We Supply</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>JSW Colour Coated Roofing Sheets</li>
          <li>PUF Panels for Industrial Roofing</li>
          <li>Stone Coated Roofing Tiles</li>
          <li>Air Ventilator Fans</li>
          <li>Louvers & Structural Steel Components</li>
          <li>Metal Purlins and Accessories</li>
        </ul>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16"
      >
        <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2">Quality Assured</h3>
          <p className="text-gray-600">We supply only premium materials that meet industry standards.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2">On-Time Delivery</h3>
          <p className="text-gray-600">We ensure your materials reach your site exactly when needed.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2">Competitive Pricing</h3>
          <p className="text-gray-600">Our strong supplier network allows us to offer the best prices without compromising quality.</p>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold mb-3">Need Roofing Materials?</h3>
        <p className="text-gray-600 mb-6">
          Contact us today for a customized material supply quote for your project.
        </p>
     <div className="flex justify-between mt-10">
              <Link
                to="/project/PUF"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-3 rounded-xl shadow-sm transition-all duration-300"
              >
                ← Back:PUFPanelRoofing
              </Link>
    
              <Link
                to="/project/AVF"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all duration-300"
              >
                Next → AirVentilatorFans
              </Link>
            </div>
      </motion.div>
    </motion.div>
  );
};

export default MaterialSupply;
