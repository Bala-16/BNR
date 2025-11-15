import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LSA from "../../assets/service/LSA.jpg"; // 🖼️ Add your Louvers image here

const LouversAccessories = () => {
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
          Louvers & Sheet Accessories
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We supply and install premium louvers and roofing sheet accessories
          that enhance ventilation, protection, and the overall aesthetics of
          your structure.
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
          src={LSA}
          alt="Louvers and Sheet Accessories"
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
          Our Louvers & Accessories Range
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>Aluminum and Galvanized Louvers for ventilation systems.</li>
          <li>Ridge Caps, Flashings, and Corner Trims for roofing sheets.</li>
          <li>Gutter systems and downpipes for efficient water drainage.</li>
          <li>Turbo ventilator base plates and mounting brackets.</li>
          <li>Roof fasteners, sealants, and insulation accessories.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Advantages of Our Louvers
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our louvers are engineered to provide optimal airflow while preventing
          the entry of rain, dust, and debris. They are lightweight, corrosion-resistant,
          and available in various sizes and designs to suit industrial and commercial structures.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>Ensures proper ventilation and air circulation.</li>
          <li>Low maintenance and high weather resistance.</li>
          <li>Available in powder-coated finishes for long life.</li>
          <li>Custom-made louvers to match building aesthetics.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Choose Our Accessories
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We provide complete roofing accessories that ensure durability and
          protection for every structure. From fasteners to sealants, each
          component is quality-tested for superior performance and compatibility
          with JSW and other metal roofing systems.
        </p>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-10">
          <Link
            to="/project/AVF"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-3 rounded-xl shadow-sm transition-all duration-300"
          >
            ← Back: Air Ventilator Fans
          </Link>

          <Link
            to="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all duration-300"
          >
            Services →
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default LouversAccessories;
