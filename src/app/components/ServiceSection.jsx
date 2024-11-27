"use client";
import Image from "next/image";
import React from "react";
import Circle from "./Circle";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const ServiceCard = ({ src, title, description }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="bg-[#17191D] p-8 rounded-lg relative overflow-hidden hover:scale-105 transition-all duration-300 group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Circle hovered={hovered} />
            <div className="mb-6">
                <Image
                    src={src}
                    width={100}
                    height={100}
                    alt="service"
                    className="w-12 h-12"
                />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-400 mb-6">{description}</p>
            <button className="flex items-center gap-2 hover:scale-105  text-emerald-400 hover:text-emerald-300 transition-all duration-300">
            <Link
                target="_blank"
                href="mailto:ajabbar1234@gmail.com"
                className="mt-1 uppercase"
              >
                Learn More
              </Link>
              <AiOutlineArrowRight />
            </button>
        </div>
    );
};

const ServicesSection = () => {
  const services = [
    {
      src: "/web.png",
      title: "Web Development",
      description:
        "Web development is the process of creating websites and web applications for the internet or intranet.",
    },
    {
      src: "/design.png",
      title: "Web Design",
      description: "Creating visually appealing and user-friendly websites.",
    },
    {
      src: "/branding.png",
      title: "Branding",
      description: "Developing a unique identity and image for your business.",
    },
    {
      src: "/video-editing.png",
      title: "Video Editing",
      description: "Crafting engaging and professional video content.",
    },
    {
      src: "/ai.png",
      title: "Illustration",
      description: "Designing custom graphics and illustrations for various needs.",
    },
   
    {
      src: "/social-media.png",
      title: "Marketing",
      description: "Promoting your business to reach and engage your target audience.",
    },
  ];

  return (
    <section className="bg-[#1b1f23] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className=" text-6xl font-bold text-white mb-4">
            Bring The Revolution With
          </h2>
          <div className=" text-3xl md:text-5xl font-bold">
            <span className="text-white">The </span>
            <span className="text-emerald-400">Diligence</span>
            <span className="text-white"> Service</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              src={service.src}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
