import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Projects from "@/app/components/Projects";
import ServiceCard from "@/app/components/ServiceCard";
import React from "react";

export const metadata = {
  title: "Illustration",
  description:
    "Transform your ideas with our custom illustration services. From digital art to hand-drawn designs, we create unique illustrations that tell your story and bring your vision to life.",
  keywords: [
    "custom illustration",
    "digital illustration",
    "hand-drawn designs",
    "concept art",
    "commercial illustration",
    "illustration services",
    "creative artwork",
    "digital art",
    "custom art design",
    "professional illustrator",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.designondemand.solutions/illustration",
  },
};

const page = () => {
  const illustrationData = {
    imageUrl: "/illustrator.webp",
    heading: "Illustration",
    breadcrumb: "Home > Illustration",
    title: "Unleash Creativity With Custom Illustration Services",
    subTitle: "ILLUSTRATION",
    description: `
      Illustrations add a personal touch to your projects, helping your brand stand out.
      From digital art to hand-drawn designs, we create custom illustrations that bring ideas to life.
      
      Discover the power of storytelling through visuals crafted uniquely for you.
    `,
  };

  const projectData = {
    img1: "/ill1.webp",
    img2: "/ill2.webp",
    title1: "DAY-DAWN-NIGHT",
    title2: "HERITAGE",
    tags1: ["CONCEPT ART", "ILLUSTRATION", "TIME"],
    tags2: ["REALITY", "HERITAGE", "ILLUSTRATION"],
  };

  return (
    <div className="bg-[#f8f9fa] text-[#1a1a1a] min-h-screen">
      <Navbar />
      <ServiceCard {...illustrationData} />
      {/* <h1 className="text-center text-5xl md:text-7xl text-[#1a1a1a] font-semibold mt-20">
        Our Projects
      </h1> */}
      <Projects {...projectData} />
      <Footer />
    </div>
  );
};

export default page;
