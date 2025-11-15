import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-20 bg-gray-50">
      {/* ===== Hero Section ===== */}
      <section
        className="relative h-[60vh]  flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/5c/e4/d2/5ce4d2a9993724cc1b1a492fba8b4299.jpg')",
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
            Get in <span className="text-yellow-400">Touch</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200 font-roboto-slab">
            We’re here to answer your questions and provide roofing solutions that last.
          </p>
        </motion.div>
      </section>

      {/* ===== Contact Info Cards ===== */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {/* Phone */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition font-roboto-slab">
            <Phone className="mx-auto text-yellow-500 mb-4" size={36} />
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Call Us</h3>
            <p className="text-gray-700">+91 8220366044</p>
          </div>

          {/* Email */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition font-roboto-slab">
            <Mail className="mx-auto text-yellow-500 mb-4" size={36} />
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Email</h3>
            <p className="text-gray-700">parthimageshwari50@gmail.com</p>
          </div>

          {/* Address */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition font-roboto-slab">
            <MapPin className="mx-auto text-yellow-500 mb-4" size={36} />
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Location</h3>
            <p className="text-gray-700">
              No.12, Industrial Area, Madurai, Tamil Nadu – 625001
            </p>
          </div>
        </div>
      </section>

      {/* ===== Contact Form ===== */}
      <section className="py-16 px-6 md:px-20 bg-blue-50">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10 font-roboto-slab">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10 ">
            Send Us a Message
          </h2>
          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ===== Map Section ===== */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto font-roboto-slab">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Find Us on Map
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Balanayagam Roofing Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.204202685281!2d78.11944567481679!3d9.963548173030247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5881e0b0c75%3A0x2a2c6f2e9154b8d7!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1698713158352!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
