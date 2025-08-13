import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ProjectCard from "@/app/components/ProjectCard";
import Projects from "@/app/components/Projects";
import ServiceCard from "@/app/components/ServiceCard";
import React from "react";

export const metadata = {
  title: "Web Design",
  description:
    "Craft stunning websites with our innovative web design services. We create visually appealing and user-friendly designs that reflect your brand and engage your audience.",
  keywords: [
    "web design",
    "website design",
    "web development",
    "UI/UX design",
    "responsive design",
    "web design services",
    "creative web design",
    "professional web design",
    "user-friendly websites",
    "digital design",
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
    canonical: "https://www.designondemand.solutions/web-design",
  },
};

const page = () => {
  const webDesignData = {
    imageUrl: "/webdev.webp", // Add a relevant image to your public folder
    heading: "Web Design",
    breadcrumb: "Home > Web Design",
    title: "Craft Stunning Websites With Innovative Web Design Services",
    subTitle: "WEB DESIGN",
    description: `
      Web design is the foundation of a great online experience. We create visually appealing 
      and user-friendly designs that reflect your brand and engage your audience.
      
      Build a digital presence that combines aesthetics with functionality seamlessly.
    `,
  };

  const projectData = [
    {
      img: "/design-mockup.webp",
      title: "H2SIP",
      tags: ["WEB-DESIGN", "FIGMA"],
    },
    {
      img: "/design3.webp",
      title: "DESIGN BOX",
      tags: ["WEB-DESIGN", "FIGMA"],
    },
  ];

  return (
    <div className="bg-[#f8f9fa] text-[#1a1a1a] min-h-screen">
      <Navbar />
      <ServiceCard {...webDesignData} />
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-7 pt-8 pb-20 lg:px-12 xl:px-24 p-7">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            title={project.title}
            img={project.img}
            tags={project.tags}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default page;
