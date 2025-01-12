'use client'
import { motion } from "framer-motion";

const technologies = [
  { name: "AI Diagnostics", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVd1WrBZ5csV9frmpZz0ekflotq5Zy7zk0Eg&s", description: "Revolutionizing diagnosis with AI-powered precision." },
  { name: "Robotic Surgery", icon: "/robotic-surgery.png", description: "Enhancing surgical precision with robotics." },
  { name: "Telemedicine", icon: "/telemedicine.png", description: "Connecting patients and doctors remotely." },
  { name: "Wearable Tech", icon: "/wearable-tech.png", description: "Health monitoring with wearable devices." },
  { name: "3D Printing", icon: "/3d-printing.png", description: "Creating prosthetics and implants on demand." },
  { name: "Blockchain Records", icon: "/blockchain.png", description: "Secure and transparent health data management." },
  { name: "Virtual Reality", icon: "/virtual-reality.png", description: "Immersive therapy and training simulations." },
  { name: "Advanced Imaging", icon: "/advanced-imaging.png", description: "Detailed scans with cutting-edge imaging tech." },
  { name: "Smart Pharmacy", icon: "/smart-pharmacy.png", description: "Automated systems for accurate prescriptions." },
];

const Technology = () => {

    return (
        <div>
             <section id="technologies" className="relative py-20 bg-black overflow-hidden ">
      {/* Multiple Rotating Torus Knots */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Container for multiple knots */}
        <div className="torus-knot-container relative w-full h-full">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className={`torus-knot animate-rotate${index % 2 === 0 ? ' left-to-right' : ' right-to-left'}`}
              style={{
                animationDuration: `${8 + index * 2}s`,
                top: `${Math.random() * 80}%`,  // Random positioning
                left: `${Math.random() * 80}%`, // Random positioning
                opacity: 0.5 + Math.random() * 0.5, // Random opacity
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto text-center z-10 relative">
        <h2 className="text-4xl font-bold text-white mb-6">Latest Healthcare Technologies</h2>
        <p className="text-white mb-12">
          Explore cutting-edge technologies transforming healthcare.
        </p>

        {/* Technology Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto relative z-10">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-800 rounded-lg shadow-lg p-6 overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Animated Card Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 blur-md"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Icon with 3D Hover Effect */}
            <div className="relative w-16 h-16 mx-auto mb-4 perspective-1000">
              <motion.img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain"
                whileHover={{
                  scale: 1.3,
                  rotateX: [0, 15, -15, 0],
                  rotateY: [0, 15, -15, 0],
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 12,
                }}
              />
            </div>
            {/* Title and Description */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
              <p className="mt-2 text-gray-400 text-sm">{tech.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
        </div>
    );
};

export default Technology;