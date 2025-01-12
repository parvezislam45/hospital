"use client";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div>
      <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Layer 1: Dynamic Flowing Waves */}
        <motion.div
          className="absolute w-full h-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 opacity-10"
          animate={{ x: ['-50%', '50%'], y: [0, 10, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <svg
            className="absolute w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            fill="none"
          >
            <path
              fillOpacity="0.5"
              d="M0,256L48,245.3C96,235,192,213,288,192C384,171,480,149,576,165.3C672,181,768,235,864,261.3C960,288,1056,288,1152,261.3C1248,235,1344,181,1392,149.3L1440,117.3L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              className="text-blue-500"
            />
          </svg>
        </motion.div>

        {/* Layer 2: Rotating Geometric Pattern */}
        <motion.div
          className="absolute w-[200%] h-[200%] bg-gradient-to-br from-green-400 to-blue-500 opacity-20 rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        ></motion.div>

        {/* Layer 3: Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -20, 20, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: Math.random() * 5 + 2, repeat: Infinity }}
          ></motion.div>
        ))}
      </motion.div>

      {/* Contact Us Section */}
      <motion.div
        className="relative z-10 bg-gray-800 rounded-xl shadow-lg p-8 text-center w-full max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
        <p className="text-gray-300 mb-8">
          Have questions or want to work with us? Fill out the form below, and we’ll get back to you as soon as possible.
        </p>
        <form className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-400 text-sm mb-2 text-left">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-400 text-sm mb-2 text-left">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-400 text-sm mb-2 text-left">Message</label>
            <textarea
              id="message"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Type your message here"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
    </div>
  );
};

export default Contact;
