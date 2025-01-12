'use client'
import { motion } from 'framer-motion';
const Booking = () => {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Galaxy-like Animation */}
        <motion.div
          className="absolute w-[300%] h-[300%] -top-1/2 -left-1/2 bg-gradient-to-br from-purple-800 via-indigo-700 to-black opacity-30 rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        ></motion.div>

        {/* Bubble Animation */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-purple-500 opacity-50 rounded-full"
            style={{
              width: `${Math.random() * 50 + 50}px`,
              height: `${Math.random() * 50 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              y: [0, -200, 0],
              x: [0, 100, -100, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
        ))}
      </motion.div>

      {/* Booking Section */}
      <div  className="relative bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md text-center z-10">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">Book Your Appointment</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="date"
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Confirm Appointment
          </button>
        </form>
        </div>
    </div>
    );
};

export default Booking;