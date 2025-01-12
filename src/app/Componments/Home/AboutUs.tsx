"use client";
import { motion } from "framer-motion";

const AboutUs = () => {
  const backgroundVariants = {
    animate: {
      backgroundPosition: ["0% 50%", "50% 50%", "100% 50%", "50% 50%", "0% 50%"],
      transition: {
        duration: 15,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };
  return (
    <footer className="relative w-full py-8 bg-gray-900 text-gray-200">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%]"
        variants={backgroundVariants}
        animate="animate"
      />

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-lg font-bold">Footer Section</h2>
          <p className="mt-2 text-sm">A beautifully animated footer section.</p>
          <div className="mt-4">
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition duration-300"
            >
              Link 1
            </a>
            <span className="mx-2">|</span>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition duration-300"
            >
              Link 2
            </a>
          </div>
        </div>
      </div>

      {/* Overlay to dim content */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 z-0" />
    </footer>
  );
};

export default AboutUs;
