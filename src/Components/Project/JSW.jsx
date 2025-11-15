import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import JSW from "../../assets/service/JSW.jpg"; // 🖼️ add your image here

const JSWRoofing = () => {
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
          JSW Roofing Sheet Fabrication
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We specialize in providing durable and aesthetic JSW roofing sheet fabrication and
          installation solutions for both residential and commercial projects. Our team ensures
          superior quality, long-lasting protection, and modern design appeal.
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
          src={JSW}
          alt="JSW Roofing"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose JSW Roofing?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Made from high-quality JSW steel ensuring superior strength and durability.</li>
          <li>Weather-resistant and corrosion-proof design for long life.</li>
          <li>Elegant and modern color coatings to match any building style.</li>
          <li>Easy installation with precision fabrication support.</li>
          <li>Energy-efficient, reflective surfaces that reduce heat.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Applications</h2>
        <p className="text-gray-700 leading-relaxed">
          JSW roofing sheets are ideal for residential houses, commercial complexes, warehouses,
          industrial sheds, and farmhouses. We customize each project based on client needs, ensuring
          quality workmanship and on-time completion.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Process</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Site inspection and measurements</li>
          <li>Material selection and fabrication planning</li>
          <li>Cutting and shaping as per design</li>
          <li>Professional installation with safety measures</li>
          <li>Final quality check and handover</li>
        </ol>

        {/* Next Button */}
        <div className="flex justify-end mt-10">
          <Link
            to="/project/FI"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all duration-300"
          >
            Next →FI
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default JSWRoofing;
