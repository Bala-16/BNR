import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MFW from "../../assets/service/MFW.jpg"; // 🖼️ Add your image here

const MetalFabrication = () => {
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
          Metal Fabrication Works
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We specialize in precision metal fabrication services, delivering custom-made structures,
          frames, and components that meet high standards of strength, durability, and accuracy.
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
          src={MFW}
          alt="Metal Fabrication Works"
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
          Our Metal Fabrication Capabilities
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Custom steel, aluminum, and iron fabrication.</li>
          <li>Welding, cutting, bending, and assembly with high precision.</li>
          <li>Fabrication for roofing supports, industrial structures, and gates.</li>
          <li>Surface finishing, powder coating, and corrosion protection.</li>
          <li>On-site fabrication and fitting by skilled professionals.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Tools & Technology We Use
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our facility is equipped with modern welding machines, plasma cutters, and bending tools.
          We follow industry standards to ensure each product is built with accuracy and durability.
          Every project undergoes rigorous quality inspection before installation.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Benefits of Our Fabrication Works
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Superior structural integrity and finish quality.</li>
          <li>Reduced maintenance costs and long lifespan.</li>
          <li>Custom design as per architectural requirements.</li>
          <li>Fast turnaround and installation-ready parts.</li>
        </ul>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-10">
          <Link
            to="/project/FI"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-3 rounded-xl shadow-sm transition-all duration-300"
          >
            ← Back: Fabrication & Installation
          </Link>

          <Link
            to="/project/SCR"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all duration-300"
          >
            Next → Stone Coated Roofing
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default MetalFabrication;
