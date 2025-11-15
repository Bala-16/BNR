import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// 🖼️ Local images
import R1 from "../../assets/Slide/R1.jpg";
import R2 from "../../assets/Slide/R2.jpg";
import R3 from "../../assets/Slide/R3.jpg";
import R4 from "../../assets/Slide/R4.jpg";
import R5 from "../../assets/Slide/R5.jpg";
import R6 from "../../assets/Slide/R6.jpg";
import R7 from "../../assets/Slide/R7.jpg";
import R8 from "../../assets/Slide/R8.jpg";

const images = [R1,R2,R3,R4,R5,R6,R7,R8];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(1); // +1 → next, -1 → previous

  // 🔁 Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants for sliding
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="pt-20 overflow-hidden">
      <section className="relative h-[85vh] sm:h-[90vh] md:h-screen flex items-center justify-center text-center">
        {/* ======= Sliding Background ======= */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence custom={direction}>
            <motion.div
              key={currentImage}
              className="absolute inset-0 bg-center bg-cover"
              style={{
                backgroundImage: `url(${images[currentImage]})`,
              }}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 60, damping: 20 },
                opacity: { duration: 0.8 },
              }}
            />
          </AnimatePresence>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* ======= Hero Text ======= */}
        <motion.div
          className="relative z-10 text-white max-w-3xl px-4 sm:px-6 md:px-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-PT-Serif font-bold uppercase leading-tight">
            Strong Roofs, <span className="text-yellow-400">Built to Last</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-2xl text-gray-200 font-roboto-slab">
            Balanayagam Roofing delivers durable, aesthetic, and customized
            roofing solutions for residential, commercial, and industrial needs.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/services"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition font-roboto-slab text-sm sm:text-base"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-lg font-semibold transition font-roboto-slab text-sm sm:text-base"
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
