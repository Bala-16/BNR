import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AVF from "../../assets/service/AVF.jpg"; // 🖼️ Add your air ventilator image here

const AirVentilatorFans = () => {
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
          Air Ventilator Fans
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our air ventilator fans provide efficient, eco-friendly ventilation solutions that
          reduce heat, humidity, and maintain fresh airflow in industrial, commercial, and
          residential buildings.
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
          src={AVF}
          alt="Air Ventilator Fans"
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
          Why Choose Air Ventilator Fans?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our ventilators operate using natural wind and temperature differences — 
          no electricity required. They are durable, rust-proof, and designed to 
          function efficiently even under extreme weather conditions. 
          Suitable for factories, warehouses, workshops, and industrial roofs.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>100% power-free operation, saving energy costs.</li>
          <li>Made of high-quality aluminum or stainless steel.</li>
          <li>Reduces heat, moisture, and trapped fumes effectively.</li>
          <li>Zero maintenance, long lifespan, and smooth rotation.</li>
          <li>Easy installation on various roofing types.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Benefits of Installing Air Ventilators
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>Improves indoor air quality by removing hot air and toxins.</li>
          <li>Enhances comfort and productivity inside the building.</li>
          <li>Eco-friendly and cost-effective ventilation solution.</li>
          <li>Reduces condensation and rust formation on metal surfaces.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Technical Features
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our ventilators are designed with aerodynamic precision and lightweight
          blades that rotate freely with minimal air pressure. The base is designed
          for perfect roof alignment, ensuring complete waterproofing and stability.
        </p>

        {/*Navigation Buttons*/}
        <div className="flex justify-between mt-10">
          <Link
            to="/project/MS"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-3 rounded-xl shadow-sm transition-all duration-300"
          >
            ← Back: Material Supply
          </Link>

          <Link
            to="/project/LSA"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all duration-300"
          >
            Next → Louvers
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
export default AirVentilatorFans;