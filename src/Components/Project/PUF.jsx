import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PUF from "../../assets/service/PUF.jpg"; // 🖼️ Add your PUF panel image here

const PUFPanelRoofing = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-12 px-4 sm:px-8 font-roboto-slab">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center py-10 mb-12"
      >
        <h1 className="text-4xl font-bold text-yellow-400 mb-3">
          PUF Panel Roofing
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          PUF (Polyurethane Foam) Panel Roofing is the modern solution for
          energy-efficient, durable, and insulated roofing systems. Ideal for
          industrial, commercial, and cold storage structures.
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
          src={PUF}
          alt="PUF Panel Roofing"
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
          What is PUF Panel Roofing?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PUF panels consist of an insulated core sandwiched between metal
          sheets. These panels provide excellent thermal insulation, water
          resistance, and long-lasting protection — making them perfect for
          temperature-controlled buildings and energy-efficient designs.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          Key Advantages
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Superior insulation — keeps interiors cool in summer and warm in winter.</li>
          <li>Lightweight and easy to install, reducing structural load.</li>
          <li>Fire-resistant and weatherproof construction.</li>
          <li>Long service life with minimal maintenance.</li>
          <li>Eco-friendly material that reduces energy bills.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Common Applications
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Cold storage facilities and food industries.</li>
          <li>Warehouses and industrial sheds.</li>
          <li>Pharmaceutical and chemical plants.</li>
          <li>Prefabricated buildings and site offices.</li>
          <li>Clean rooms and refrigerated rooms.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Our Expertise
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We design, supply, and install high-performance PUF roofing systems
          that ensure durability, energy efficiency, and perfect sealing. Our
          panels are sourced from trusted manufacturers and installed by trained professionals.
        </p>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-10">
          <Link
            to="/project/SCR"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-3 rounded-xl shadow-sm transition-all duration-300"
          >
            ← Back: Stone Coated Roofing
          </Link>

          <Link
            to="/project/MS"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all duration-300"
          >
            Next → Material Supply
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default PUFPanelRoofing;
