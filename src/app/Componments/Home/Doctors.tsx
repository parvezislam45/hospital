'use client'
import { motion } from "framer-motion";
const doctors = [
    { name: "Dr. Sarah Connor", specialty: "Cardiologist", image: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*" },
    { name: "Dr. John Smith", specialty: "Neurologist", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAwhFqqbtOTAmK-E9GKRF43z1vDa6GxBkLlA&s" },
    { name: "Dr. Emily Watson", specialty: "Pediatrician", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4OJMR-gYDLao4PDhR-P5sjEbR-uuTY5vMqQ&s" },
  ];
const Doctors = () => {
     
    return (
        <div>
            <section className="relative bg-black py-20 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute w-full h-full"
          animate={{ y: ["0%", "10%", "0%"] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            fill="none"
          >
            <path
              fill="url(#waveGradient)"
              d="M0,160L80,144C160,128,320,96,480,112C640,128,800,192,960,197.3C1120,203,1280,149,1360,122.7L1440,96V320H0Z"
            />
            <defs>
              <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="5%" stopColor="#6b46c1" />
                <stop offset="95%" stopColor="#805ad5" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl font-extrabold text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Meet Our Expert Doctors
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Dedicated professionals bringing care and innovation to healthcare.
        </motion.p>
      </div>

      {/* Doctors Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {doctors.map((doctor, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            {/* Animated Rings */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <motion.div
                className="relative w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-0 left-0 w-full h-full border-2 border-purple-300 rounded-full"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>

            {/* Doctor Image */}
            <div className="relative w-full h-64 overflow-hidden">
              <motion.img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover rounded-t-lg"
                whileHover={{
                  scale: 1.05,
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                }}
              />
            </div>

            {/* Doctor Info */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-white">{doctor.name}</h3>
              <p className="mt-2 text-gray-300">{doctor.specialty}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
        </div>
    );
};

export default Doctors;