import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ import link for navigation

const services = [
  {
    id: 1,
    title: "JSW Roofing Sheet Installation",
    desc: "High-quality JSW steel roofing sheets that provide superior strength, durability, and protection against extreme weather conditions.",
    img: "https://i.pinimg.com/736x/30/af/97/30af975de8528dd3c4f710e6dd91086a.jpg",
  },
  {
    id: 2,
    title: "Fabrication & Installation",
    desc: "Custom metal fabrication for industrial and residential projects. We design, fabricate, and install with precision and perfection.",
    img: "https://i.pinimg.com/1200x/80/ec/0d/80ec0d05d056a5da1b7bc01daeb2438d.jpg",
  },
  {
    id: 3,
    title: "Metal Fabrication Works",
    desc: "We deliver strong, reliable metal structures for roofing, gates, trusses, and industrial use — built with accuracy and skill.",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Stone Coated Roofing",
    desc: "Elegant and durable stone-coated roofing solutions that blend aesthetics with protection for long-lasting beauty.",
    img: "https://i.pinimg.com/1200x/f6/0f/1a/f60f1a8a4de8df7440cd46f4e9cc0104.jpg",
  },
  {
    id: 5,
    title: "PUF Panel Roofing",
    desc: "Energy-efficient PUF panels for roofing and wall cladding — ideal for warehouses, cold storage, and industrial buildings.",
    img: "https://i.pinimg.com/736x/61/6a/16/616a16f724e8c707103ace5456a1e43b.jpg",
  },
  {
    id: 6,
    title: "Material Supply",
    desc: "We supply quality roofing materials, accessories, and components at competitive prices for contractors and builders.",
    img: "https://i.pinimg.com/736x/fb/1a/09/fb1a091483231b88caf1176cd4b60eff.jpg",
  },
  {
    id: 7,
    title: "Air Ventilator Fans",
    desc: "Eco-friendly air ventilators for proper airflow and ventilation in industrial sheds and factories — no electricity required.",
    img: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Louvers & Sheet Accessories",
    desc: "Stylish and functional louvers that enhance airflow, aesthetics, and building efficiency for all roofing types.",
    img: "https://i.pinimg.com/1200x/00/01/9c/00019c770a1f8995913c4d0da05a7a26.jpg",
  },
];

const Services = () => {
  return (
    <div className="pt-20 bg-gray-50">
      {/* ===== Hero Section ===== */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1664300911352-fe06c38112c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2657)",
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
            Our <span className="text-yellow-400">Services</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200 font-roboto-slab">
            Complete roofing, fabrication, and material solutions — built to last.
          </p>
        </motion.div>
      </section>

      {/* ===== Service Cards ===== */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <Link key={service.id} to={`/project/${service.id}`}>
              {/* Each card is now clickable */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-52 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-3 font-roboto-slab">
                    {service.title}
                  </h3>
                  <p className="text-black-300 leading-relaxed mb-4 font-roboto-slab">
                    {service.desc}
                  </p>
                  <p className="text-yellow-500 font-semibold hover:underline font-roboto-slab">
                    View Details →
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
