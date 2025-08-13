import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ProjectCard from "@/app/components/ProjectCard";
import Projects from "@/app/components/Projects";
import ServiceCard from "@/app/components/ServiceCard";
import React from "react";

export const metadata = {
  title: "Branding",
  description:
    "Transform your business with our expert branding services. We create compelling brand identities, logos, and messaging strategies that resonate with your audience and build lasting connections.",
  keywords: [
    "branding services",
    "brand identity",
    "brand strategy",
    "logo design",
    "brand messaging",
    "visual branding",
    "brand development",
    "corporate branding",
    "brand guidelines",
    "brand consulting",
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
    canonical: "https://www.designondemand.solutions/branding",
  },
};

const page = () => {
  const brandingData = {
    imageUrl: "/branding.webp",
    heading: "Branding",
    breadcrumb: "Home > Branding",
    title: "Elevate Your Brand Identity With Professional Branding Services",
    subTitle: "BRANDING",
    description: `
      Branding is the art of creating a unique identity that sets your business apart.
      From logos to messaging, we design cohesive visuals and strategies that resonate
      with your audience and build trust.
      With our branding services, your business will leave a lasting impression that inspires loyalty
      and engagement.
    `,
  };

  const projectData = [
    {
      img: "/br2.webp",
      title: "LOTUS",
      tags: ["BRANDING", "POSTS"],
    },
    {
      img: "/emu.webp",
      title: "EMU",
      tags: ["BRANDING", "SOCIAL MEDIA"],
    },
    {
      img: "/lotion.webp",
      title: "LOTION",
      tags: ["BRANDING", "SOCIAL MEDIA"],
    },
    { img: "/cola.webp", title: "GOURMET", tags: ["BRANDING", "SOCIAL MEDIA"] },
    { img: "/tang.webp", title: "TANG", tags: ["BRANDING", "SOCIAL MEDIA"] },
    { img: "/toderita.webp", title: "TODERITA", tags: ["BRANDING", "LOGO DESIGN"] },
  ];

  return (
    <div className="bg-[#f8f9fa] text-[#1a1a1a] min-h-screen">
      <Navbar />
      <ServiceCard {...brandingData} />
      {/* <h1 className="text-center text-5xl md:text-7xl text-[#1a1a1a] font-semibold mt-20">
        Our Projects
      </h1> */}
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
      </div>{" "}
      <Footer />
    </div>
  );
};

export default page;
