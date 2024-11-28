"use client";
import ServicesSection from "./components/ServiceSection";
import Recent from "./components/Recent";
import Works from "./components/Works";
import { useEffect,  useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 4000);

  
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-[#1b1f23]">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <ServicesSection />
      <Recent />
      <Works />
      {/* <Footer /> */}
    
    </div>
  );
}