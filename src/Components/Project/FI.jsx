import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FI from "../../assets/service/FI.jpg"; // 🖼️ Add your fabrication/installation image

const Installation = () => {
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
          Fabrication & Installation
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We provide end-to-end fabrication and installation services for all types of roofing
          and metal structures. Our skilled technicians ensure precision, quality, and durability
          in every project we handle.
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
          src={FI}
          alt="Fabrication & Installation"
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
          Our Fabrication & Installation Expertise
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Customized roofing and structural fabrication solutions.</li>
          <li>High-quality materials ensuring strength and longevity.</li>
          <li>Expert-level installation by experienced technicians.</li>
          <li>Safety-compliant process for all fabrication work.</li>
          <li>Post-installation inspection and maintenance support.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Approach</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Detailed project discussion and design planning.</li>
          <li>Material selection and precision fabrication.</li>
          <li>On-site installation with advanced equipment.</li>
          <li>Finishing and weatherproofing treatments.</li>
          <li>Final inspection and customer handover.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Choose Us?</h2>
        <p className="text-gray-700 leading-relaxed">
          We combine technical expertise with modern tools to ensure fast and flawless
          fabrication & installation. Whether it’s roofing, metal framing, or industrial
          structures — we guarantee excellence in every stage.
        </p>

        {/* Next Button */}
        <div className="flex justify-between mt-10">
          <Link
            to="/project/JSW"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-3 rounded-xl shadow-sm transition-all duration-300"
          >
            ← Back: JSW Roofing
          </Link>

          <Link
            to="/project/MFW"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all duration-300"
          >
            Next → Metal Fabrication
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Installation;
