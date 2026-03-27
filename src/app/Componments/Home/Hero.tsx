'use client'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
       <section className="relative bg-gradient-to-bl from-indigo-900 via-purple-800 to-pink-700 text-white py-32 overflow-hidden mt-20">
      {/* Left Side - Rotating Multi-Layer Images */}
      <div className="absolute top-16 left-10 w-60 h-60">
        <motion.div
          className="absolute w-full h-full bg-gradient-to-r from-blue-700 to-purple-600 rounded-full"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.img
          src="https://w7.pngwing.com/pngs/945/519/png-transparent-health-administration-hospital-information-system-management-software-development-altarama-information-systems-medicine-ophthalmology-hospital.png"
          alt="Rotating Layer"
          className="absolute w-60 h-60 rounded-full object-cover"
          animate={{
            rotate: [-360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-2 left-2 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Right Side - Dynamic Ripple Effect */}
      <div className="absolute top-16 right-12 w-72 h-72 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500">
        <motion.div
          className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-purple-200"
          animate={{
            opacity: [0.8, 0],
            scale: [1, 1.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-pink-300"
          animate={{
            opacity: [0.8, 0],
            scale: [0.8, 1.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-yellow-400"
          animate={{
            opacity: [0.8, 0],
            scale: [0.6, 2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 2,
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative text-center z-10">
        <motion.h1
          className="text-5xl font-extrabold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          PARVEZ HOSPITAL +
        </motion.h1>
        <motion.p
          className="mt-4 text-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Modern care, compassionate service. Health begins here.
        </motion.p>
        <motion.a
          href="#services"
          className="mt-6 inline-block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Discover More
        </motion.a>
      </div>
    </section>
    </div>
  );
};

export default Hero;