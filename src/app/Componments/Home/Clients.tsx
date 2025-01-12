'use client'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Clients = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const clients = [
      { name: 'John Doe', feedback: 'Great service! Highly recommend.', img: '/client1.jpg' },
      { name: 'Jane Smith', feedback: 'Amazing experience, very professional.', img: '/client2.jpg' },
      { name: 'Michael Brown', feedback: 'Quick and easy process, thanks!', img: '/client3.jpg' },
      { name: 'Emily Davis', feedback: 'Friendly staff and great results.', img: '/client4.jpg' },
      { name: 'Chris Wilson', feedback: 'I’m very happy with the outcome!', img: '/client5.jpg' },
      { name: 'Laura Johnson', feedback: 'Highly skilled team and amazing support.', img: '/client6.jpg' },
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % clients.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [clients.length]);
    return (
        <div>
           <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-bl from-blue-900 via-gray-800 to-black">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Layer 1: Pulsating gradient circles */}
        <motion.div
          className="absolute top-0 left-0 w-[200%] h-[200%] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 opacity-10 rounded-full"
          animate={{ scale: [1, 1.5, 1], rotate: [0, 360, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 right-0 w-[150%] h-[150%] bg-gradient-to-l from-green-400 via-blue-400 to-indigo-600 opacity-20 rounded-full"
          animate={{ scale: [1, 1.8, 1], rotate: [360, 0, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        ></motion.div>

        {/* Layer 2: Rotating star-like shapes */}
        <motion.div
          className="absolute inset-0 flex justify-center items-center"
          animate={{ rotate: [0, 180, 360] }}
          transition={{ duration: 25, repeat: Infinity }}
        >
          <div className="w-96 h-96 bg-gradient-to-r from-red-500 to-yellow-500 opacity-10 skew-x-12 rounded-full"></div>
        </motion.div>

        {/* Layer 3: Slowly moving light gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-green-400 opacity-5"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 30, repeat: Infinity }}
        ></motion.div>
      </motion.div>

      {/* Happy Clients Section */}
      <div className="relative z-10 w-full max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Our Happy Clients</h2>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 25}%)` }}
          >
            {clients.concat(clients).map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-1/4 p-4 text-center"
              >
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-white">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-purple-500"
                  />
                  <h3 className="text-xl font-semibold mb-2">{client.name}</h3>
                  <p className="text-sm italic">{client.feedback}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Clients;