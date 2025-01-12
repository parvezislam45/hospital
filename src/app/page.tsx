import AboutUs from "./Componments/Home/AboutUs";
import Booking from "./Componments/Home/Booking";
import Clients from "./Componments/Home/Clients";
import Contact from "./Componments/Home/Contact";
import Doctors from "./Componments/Home/Doctors";
import Hero from "./Componments/Home/Hero";
import Services from "./Componments/Home/Services";
import Technology from "./Componments/Home/Technology";
import Navbar from "./Shered/Navbar";


export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto">
     <Navbar/>
     <Hero/>
     <Services/>
     <Technology/>
     <Doctors/>
     <Booking/>
     <Clients/>
     <Contact/>
     <AboutUs/>
    </div>
  );
}
