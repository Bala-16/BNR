import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SCR from "../../assets/service/SCR.jpg"; // 🖼️ Add your stone coated roofing image

const StoneCoatedRoofing = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-12 px-4 sm:px-8 font-roboto-slab">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center py-10 mb-12"
      >
        <h1 className="text-4xl font-bold text-yellow-400 mb-3">
          Stone Coated Roofing
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Stone coated roofing provides the perfect combination of durability,
          weather resistance, and premium aesthetics. Our stone-coated tiles
          ensure a long-lasting, elegant finish that enhances your building’s value.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto mb-10"
      >
        <img
          src={SCR}
          alt="Stone Coated Roofing"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </motion.div>

      {/* Details Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Choose Stone Coated Roofing?
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Combines the strength of steel with the beauty of stone tiles.</li>
          <li>Weather-proof, rust-resistant, and UV-protected surface.</li>
          <li>Lightweight and strong — ideal for all types of structures.</li>
          <li>Available in multiple colors and tile patterns.</li>
          <li>Low maintenance and long-term performance guarantee.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Key Benefits
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Reduces noise during rainfall with sound insulation layers.</li>
          <li>Resistant to corrosion, fading, and cracking.</li>
          <li>Energy-efficient design helps keep interiors cooler.</li>
          <li>Eco-friendly and fully recyclable materials used.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Ideal Applications
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Perfect for residential homes, villas, resorts, schools, and commercial buildings.
          Whether you’re renovating or constructing a new property, our stone-coated roofs
          deliver unmatched style and protection.
        </p>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-10">
          <Link
            to="/project/MFW"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-3 rounded-xl shadow-sm transition-all duration-300"
          >
            ← Back: Metal Fabrication
          </Link>

          <Link
            to="/project/PUF"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all duration-300"
          >
            Next → PUF Panel Roofing
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default StoneCoatedRoofing;
