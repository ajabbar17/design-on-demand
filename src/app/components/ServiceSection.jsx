"use client";
import Image from "next/image";
import React from "react";
import Circle from "./Circle";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const Card = ({ src, title, description, link, color }) => {
  const [hovered, setHovered] = useState(false);

  // Define color mappings for border and text
  const getColorClasses = (colorName) => {
    const colorMap = {
      "red-800": {
        border: "border-red-800",
        text: "text-red-800",
        hoverText: "group-hover:text-red-700",
      },
      "orange-600": {
        border: "border-orange-600",
        text: "text-orange-600",
        hoverText: "group-hover:text-orange-700",
      },
      "emerald-600": {
        border: "border-emerald-600",
        text: "text-emerald-600",
        hoverText: "group-hover:text-emerald-700",
      },
      "blue-800": {
        border: "border-blue-800",
        text: "text-blue-800",
        hoverText: "group-hover:text-blue-700",
      },
      "purple-600": {
        border: "border-purple-600",
        text: "text-purple-600",
        hoverText: "group-hover:text-purple-700",
      },
      "pink-600": {
        border: "border-pink-600",
        text: "text-pink-600",
        hoverText: "group-hover:text-pink-700",
      },
    };
    return colorMap[colorName] || colorMap["red-800"];
  };

  const colorClasses = getColorClasses(color);

  return (
    <div
      className={`bg-white p-8 rounded-2xl ${colorClasses.border} relative overflow-hidden hover:-translate-y-2 transition-all duration-300 group shadow-lg hover:shadow-2xl border-2`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      ></div>

      {/* Decorative circle */}
      {/* <div
        className={`absolute -top-4 -right-4 w-40 h-40 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full transition-all duration-300 ${
          hovered ? "scale-150 opacity-50" : "scale-100 opacity-30"
        }`}
      ></div> */}

      <div className="relative z-10">
        {/* Icon container with background */}
        <div className="mb-6 relative">
          <div className="w-16 h-16   rounded-2xl flex items-center justify-center duration-300 group-hover:scale-110">
            <Image
              src={src}
              width={32}
              height={32}
              alt="service"
              className="w-12 h-12 "
            />
          </div>
        </div>

        {/* Content */}
        <h3
          className={`text-2xl font-bold ${colorClasses.text} ${colorClasses.hoverText} mb-4 uppercase transition-colors duration-300`}
        >
          {title}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed text-lg tracking-wide">
          {description}
        </p>

        {/* CTA Button */}
        <Link
          href={link}
          className="inline-flex items-center gap-2 text-black font-semibold transition-all duration-300 group-hover:gap-3"
        >
          <span>Learn More</span>
          <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-all duration-300">
            <AiOutlineArrowRight className="w-3 h-3" />
          </div>
        </Link>
      </div>
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
      link: "/services/web-development",
      color: "red-800",
    },
    {
      src: "/design.png",
      title: "Web Design",
      description: "Creating visually appealing and user-friendly websites with a focus on aesthetics and usability.",
      link: "/services/web-design",
      color: "orange-600",
    },
    {
      src: "/branding.png",
      title: "Branding",
      description: "Developing a unique identity and image for your business.",
      link: "/services/branding",
      color: "pink-600",
    },
    {
      src: "/video-editing.png",
      title: "Video Editing",
      description: "Crafting engaging and professional video content for various platforms.",
      link: "/",
      color: "blue-800",
    },
    {
      src: "/ai.png",
      title: "Illustration",
      description:
        "Designing custom graphics and illustrations for various needs.",
      link: "/services/illustration",
      color: "purple-600",
    },

    {
      src: "/social-media.png",
      title: "Marketing",
      description:
        "Promoting your business to reach and engage your target audience.",
      link: "/services/marketing",
      color: "emerald-600",
    },
  ];

  return (
    <section className="bg-[#f8f9fa] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center uppercase mb-20">
          {/* <div className="inline-flex items-center justify-center px-4 py-2  rounded-full mb-6">
            <span className="text-red-800 font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
          </div> */}

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Bring The Revolution With
          </h2>

          <div className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gray-900">The </span>
            <span className="text-red-800 ">Diligence</span>
            <span className="text-gray-900"> Service</span>
          </div>

          <div className="w-24 h-1 bg-red-800 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              src={service.src}
              title={service.title}
              description={service.description}
              link={service.link}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
