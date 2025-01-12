"use client";


const Navbar = () => {
  return (
    <div>
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient-x text-white fixed top-0 w-full z-50 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-extrabold">Hospital+</div>
          <ul className="flex space-x-6">
            {["About", "Services", "Doctors", "Contact"].map((link, idx) => (
              <li key={idx}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-gray-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
