// app/components/HomeContent.jsx
"use client";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Loading from "./Loading";
import Hero from "./Hero";
import About from "./About";
import ServicesSection from "./ServiceSection";
import Recent from "./Recent";
import Works from "./Works";
import Footer from "./Footer";


export default function HomeContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="bg-[#f8f9fa] text-[#1a1a1a]">
      <Navbar />
      <Hero />
      <About />
      <ServicesSection />
      <Recent />
      <Works />
      <Footer />
    </div>
  );
}
