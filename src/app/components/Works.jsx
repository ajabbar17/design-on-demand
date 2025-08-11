"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Works = () => {
  const ref = useRef(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Section 1 animations
  const section1ImageX = useTransform(scrollYProgress, [0.07, 0.24], [500, 0]);
  const section1ImageRotate = useTransform(
    scrollYProgress,
    [0.07, 0.24],
    [15, 0]
  );
  const section1TextY = useTransform(scrollYProgress, [0.02, 0.24], [300, 0]);
  const section1TextOpacity = useTransform(
    scrollYProgress,
    [0.07, 0.24],
    [0, 1]
  );

  // Section 2 animations
  const section2ImageX = useTransform(scrollYProgress, [0.22, 0.48], [-500, 0]);
  const section2ImageRotate = useTransform(
    scrollYProgress,
    [0.22, 0.48],
    [-15, 0]
  );
  const section2TextY = useTransform(scrollYProgress, [0.17, 0.48], [300, 0]);
  const section2TextOpacity = useTransform(
    scrollYProgress,
    [0.22, 0.48],
    [0, 1]
  );

  // Section 3 animations
  const section3ImageX = useTransform(scrollYProgress, [0.5, 0.74], [500, 0]);
  const section3ImageRotate = useTransform(
    scrollYProgress,
    [0.5, 0.74],
    [15, 0]
  );
  const section3TextY = useTransform(scrollYProgress, [0.45, 0.74], [300, 0]);
  const section3TextOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.74],
    [0, 1]
  );

  return (
    <div ref={ref} id="work" className="">
      {/* First Section */}
      <div className="min-h-screen w-full overflow-hidden flex px-6 md:px-16">
        <div className="grid grid-cols-1 w-full md:gap-2 md:grid-cols-2 items-center">
          {/* Left Text */}
          <div className="text-center w-full md:text-left">
            <motion.h1
              className="text-4xl md:text-8xl font-extrabold text-[#1a1a1a]"
              style={{
                y: section1TextY,
                opacity: section1TextOpacity,
              }}
            >
              RO FOOTBALL CLUB
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl tracking-wide text-gray-600 mt-4"
              style={{
                y: section1TextY,
                opacity: section1TextOpacity,
              }}
            >
              Designed and delivered dynamic social media posters for Ro
              Football Club, showcasing the spirit of the game through bold
              visuals and engaging content.
            </motion.p>
          </div>
          {/* Right Image */}
          <div className="relative w-full">
            <motion.div
              className="w-full md:w-[46vw] h-[40vh] md:h-[76vh] bg-gray-800 rounded-3xl shadow-lg overflow-hidden"
              style={{
                x: section1ImageX,
                rotate: section1ImageRotate,
              }}
            >
              <Image
                src="/Ro.webp"
                width={500}
                height={375}
                alt="Project Mockup"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="min-h-screen w-full overflow-hidden flex px-6 md:px-16">
        <div className="grid grid-cols-1 w-full gap-2 md:grid-cols-2 items-center">
          {/* Left Image */}
          <div className="relative order-last md:order-first">
            <motion.div
              className="w-full md:w-[46vw] h-[40vh] md:h-[76vh] bg-gray-800 rounded-3xl shadow-lg overflow-hidden"
              style={{
                x: section2ImageX,
                rotate: section2ImageRotate,
              }}
            >
              <Image
                src="/Testimonial.webp"
                width={800}
                height={800}
                alt="Project Mockup"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
          {/* Right Text */}
          <div className="text-center md:text-right">
            <motion.h1
              className="text-4xl md:text-8xl font-extrabold text-[#1a1a1a]"
              style={{
                y: section2TextY,
                opacity: section2TextOpacity,
              }}
            >
              Street Cop Training
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl tracking-wide text-gray-600 mt-4"
              style={{
                y: section2TextY,
                opacity: section2TextOpacity,
              }}
            >
              Crafted impactful testimonial designs for Street Cop Training,
              highlighting real-life success stories and experiences.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="min-h-screen w-full overflow-hidden flex px-6 md:px-16">
        <div className="grid grid-cols-1 w-full gap-2 md:grid-cols-2 items-center">
          {/* Left Text */}
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-8xl font-extrabold text-[#1a1a1a]"
              style={{
                y: section3TextY,
                opacity: section3TextOpacity,
              }}
            >
              KNOCK
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl tracking-wide text-gray-600 mt-4"
              style={{
                y: section3TextY,
                opacity: section3TextOpacity,
              }}
            >
              Designed and delivered Google Ads for Knock that captivate and
              convert, crafted with precision to ensure impactful visuals and
              clear messaging that drive results.
            </motion.p>
          </div>
          {/* Right Image */}
          <div className="relative w-full">
            <motion.div
              className="w-full md:w-[46vw] h-[40vh] md:h-[76vh] bg-gray-800 rounded-3xl shadow-lg overflow-hidden"
              style={{
                x: section3ImageX,
                rotate: section3ImageRotate,
              }}
            >
              <Image
                src="/manager.webp"
                width={500}
                height={375}
                alt="Project Mockup"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
