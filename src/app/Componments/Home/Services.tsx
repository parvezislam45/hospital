"use client";

const Services = () => {
  return (
    <div>
      <section
        id="services"
        className="relative py-20 bg-black overflow-hidden bg-fixed"
      >
        {/* Rotating cube background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 transform-gpu">
            <div className="cube">
              <div className="side front"></div>
              <div className="side back"></div>
              <div className="side left"></div>
              <div className="side right"></div>
              <div className="side top"></div>
              <div className="side bottom"></div>
            </div>
          </div>
        </div>
        {/* Services Content */}
        <div className="container mx-auto text-center z-10">
          <h2 className="text-4xl font-bold text-white">Our Services</h2>
          <p className="text-white mt-4">
            Explore our wide range of healthcare services.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
