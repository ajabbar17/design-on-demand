import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Projects from "@/app/components/Projects";
import ServiceCard from "@/app/components/ServiceCard";
import React from "react";

export const metadata = {
  title: "Web Development",
  description:
    "Expert web development services delivering custom websites, e-commerce solutions, and CMS development. We create responsive, user-friendly websites that drive business growth and enhance your online presence.",
  keywords: [
    "web development",
    "custom website development",
    "e-commerce development",
    "CMS development",
    "responsive web design",
    "UI/UX development",
    "frontend development",
    "backend development",
    "website solutions",
    "professional web developer",
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
    canonical: "https://www.designondemand.solutions/web-development",
  },
};

const page = () => {
  const serviceData = {
    imageUrl: "/web2.webp",
    heading: "Web Development",
    breadcrumb: "Home > Web Development",
    title: "Secure Your Online Presence With Premier Web Development Services",
    subTitle: "WEB DEVELOPMENT",
    description: `
      Our web development services turn ideas into reality on the internet. We bring your brand online, 
      where it shines through in every click and scroll.
      Web development is all about creating websites that truly relate to your brand voice and vision. 
      We offer more than mere coding; we develop an online home for your business. 
    `,
  };

  const projectData = {
    img1: "/webproject.webp",
    img2: "/myorah.webp",
    title1: "PAIZLY",
    title2: "MYORAH",
    tags1: ["Web Development", "UI/UX", "ECOMMERCE"],
    tags2: ["CMS", "UI/UX", "ECOMMERCE"],
  };

  return (
    <div className="bg-[#f8f9fa] text-[#1a1a1a] min-h-screen">
      <Navbar />
      <ServiceCard {...serviceData} />
      {/* <h1 className="text-center text-5xl md:text-7xl text-[#1a1a1a] font-semibold mt-20">
        Our Projects
      </h1> */}
      <Projects {...projectData} />
      <Footer />
    </div>
  );
};

export default page;
