import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pt-20 bg-gray-50 text-gray-800">
      {/* ===== Hero Section ===== */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/12/af/42/12af42a75766c68d8432c448aba0a54c.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          className="relative z-10 text-white max-w-3xl px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-6xl font-PT-Serif font-bold uppercase">
            <span className="text-yellow-400">Balanayagam </span>Roofing
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200 font-roboto-slab">
            Delivering excellence in roofing, fabrication, and installation — across Tamil Nadu and beyond.
          </p>
        </motion.div>
      </section>

      {/* ===== Company Info Section ===== */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://i.pinimg.com/1200x/ea/0b/88/ea0b8874692a75ce302083070ca039a2.jpg"
            alt="Roofing Work"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-5xl font-PT-Serif font-bold uppercase mb-4 text-yellow-500">
              Over a Decade of Reliable Roofing Experience
            </h2>
            <div className="font-roboto-slab text-xl">
            <p className="text-gray-700 leading-relaxed mb-4 ">
              <strong>Balanayagam Roofing</strong> is a trusted name in the field of 
              <span className="text-blue-500 font-bold">
                {" "}JSW Roofing Sheets, Fabrication, PUF Panel Roofing, Stone-Coated Roofing, Air Ventilators, and Louvers.
              </span>{" "}
              We proudly serve across Tamil Nadu, offering durable and aesthetically pleasing roofing systems designed for long-lasting protection.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From industrial installations to residential projects, we ensure every client receives quality craftsmanship, timely completion, and cost-effective solutions.
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Mission Section ===== */}
      <section className="bg-gray-600 text-white py-16 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-6 font-PT-Serif font-bold uppercase text-yellow-400">Our Mission</h2>
          <p className="text-lg leading-relaxed font-roboto-slab">
            To deliver high-quality roofing and fabrication solutions that combine innovation, 
            reliability, and affordability — ensuring protection and satisfaction for every customer.
          </p>
        </div>
      </section>

      {/* ===== Why Choose Us Section ===== */}
      <section className="py-16 px-6 md:px-20 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-PT-Serif font-bold uppercase text-gray-900 mb-10">Why Choose Balanayagam?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-yellow-500 mb-2 font-roboto-slab">✅ Experienced Team</h3>
              <p className="text-gray-700 font-roboto-slab">
                Skilled professionals with hands-on experience in complex roofing and fabrication works.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold  text-yellow-500 mb-2 font-roboto-slab">✅ Quality Materials</h3>
              <p className="text-gray-700 font-roboto-slab ">
                We use only premium-grade JSW sheets and verified materials for long-term strength.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-yellow-500 mb-2 font-roboto-slab">✅ Timely Completion</h3>
              <p className="text-gray-700 font-roboto-slab">
                Projects are completed within agreed timelines without compromising quality.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-yellow-500 mb-2 font-roboto-slab">✅ Affordable Pricing</h3>
              <p className="text-gray-700 font-roboto-slab">
                Transparent pricing with no hidden costs — value for money for every customer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
