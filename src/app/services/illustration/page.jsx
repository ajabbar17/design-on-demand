import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ProjectCard from "@/app/components/ProjectCard";
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

  const projectData = [
    {
      img: "/ill1.webp",
      title: "DAY-DAWN-NIGHT",
      tags: ["CONCEPT ART", "ILLUSTRATION", "TIME"],
    },
    {
      img: "/ill2.webp",
      title: "HERITAGE",
      tags: ["REALITY", "HERITAGE", "ILLUSTRATION"],
    },
  ];
  return (
    <div className="bg-[#f8f9fa] text-[#1a1a1a] min-h-screen">
      <Navbar />
      <ServiceCard {...illustrationData} />
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
