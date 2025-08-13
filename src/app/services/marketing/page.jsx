import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ProjectCard from "@/app/components/ProjectCard";
import Projects from "@/app/components/Projects";
import ServiceCard from "@/app/components/ServiceCard";
import React from "react";

export const metadata = {
  title: "Marketing",
  description:
    "Transform your brand's reach with our comprehensive marketing services. From digital campaigns to social media strategy, we deliver data-driven solutions that connect with your audience and drive measurable results.",
  keywords: [
    "digital marketing",
    "social media marketing",
    "marketing strategy",
    "content marketing",
    "campaign management",
    "marketing services",
    "brand marketing",
    "social media strategy",
    "marketing campaigns",
    "marketing solutions",
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
    canonical: "https://www.designondemand.solutions/marketing",
  },
};

const page = () => {
  const marketingData = {
    imageUrl: "/marketing.webp",
    heading: "Marketing",
    breadcrumb: "Home > Marketing",
    title: "Drive Growth and Engagement With Expert Marketing Strategies",
    subTitle: "MARKETING",
    description: `
      Our marketing services focus on connecting your brand with your audience effectively. 
      Whether it's digital campaigns or offline strategies, we craft tailored solutions 
      to boost visibility and achieve measurable results.
      
      Let us help you tell your story in a way that captures attention and drives conversions.
    `,
  };

  const projectData = [
    {
      img: "/FBMG.webp",
      title: "FBMG",
      tags: ["MARKETING", "SOCIAL MEDIA"],
    },
    {
      img: "/Testimonial.webp",
      title: "STREET COP",
      tags: ["MARKETING", "POSTS"],
    },
    {
      img: "/outbox.webp",
      title: "OUTBOX",
    tags: ["SOCIAL MEDIA", "MARKETING"],
    },
    {
      img: "/iit.webp",
      title: "IIT",
      tags: ["CONFERENCE BANNER AD", "SOCIAL MEDIA AD"],
    },
  ];

  return (
    <div className="bg-[#f8f9fa] text-[#1a1a1a] min-h-screen">
      <Navbar />
      <ServiceCard {...marketingData} />
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
