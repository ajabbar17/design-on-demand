"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Works = () => {
  const ref = useRef(null);

  // More precise scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Refined animation creator with earlier start and more complete animations
  const createAnimationProps = (startScroll, endScroll, isReverse = false) => {
    return {
      imageX: useTransform(
        scrollYProgress, 
        [startScroll, endScroll], 
        isReverse ? [-500, 0] : [500, 0]
      ),
      imageRotate: useTransform(
        scrollYProgress, 
        [startScroll, endScroll], 
        isReverse ? [-15, 0] : [15, 0]
      ),
      textY: useTransform(
        scrollYProgress, 
        [startScroll - 0.05, endScroll], 
        [300, 0]
      ),
      textOpacity: useTransform(
        scrollYProgress, 
        [startScroll, endScroll], 
        [0, 1]
      )
    };
  };

  // Create animation properties for each section
  // Adjusted to start earlier and cover more of the scroll range
  const section1Animations = createAnimationProps(0.07, 0.24);
  const section2Animations = createAnimationProps(0.22, 0.48, true); // Reverse for second section
  const section3Animations = createAnimationProps(0.5, 0.74);

  return (
    <div ref={ref} id="work" className="">
      {/* First Section */}
      <div className="min-h-screen w-full overflow-hidden flex px-6 md:px-16">
        <div className="grid grid-cols-1 w-full md:gap-2 md:grid-cols-2 items-center">
          {/* Left Text */}
          <div className="text-center w-full md:text-left">
            <motion.h1
              className="text-4xl md:text-8xl font-extrabold text-white"
              style={{ 
                y: section1Animations.textY, 
                opacity: section1Animations.textOpacity 
              }}
            >
              RO FOOTBALL CLUB
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl text-gray-400 mt-4"
              style={{ 
                y: section1Animations.textY, 
                opacity: section1Animations.textOpacity 
              }}
            >
              Designed and delivered dynamic social media posters for Ro Football Club, showcasing the spirit of the game through bold visuals and engaging content.
            </motion.p>
          </div>
          {/* Right Image */}
          <div className="relative w-full">
            <motion.div
              className="w-full md:w-[46vw] h-[40vh] md:h-[76vh] bg-gray-800 rounded-3xl shadow-lg overflow-hidden"
              style={{ 
                x: section1Animations.imageX, 
                rotate: section1Animations.imageRotate 
              }}
            >
              <Image
                src="/Ro.png"
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
                x: section2Animations.imageX, 
                rotate: section2Animations.imageRotate 
              }}
            >
              <Image
                src="/Testimonial.jpg"
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
              className="text-4xl md:text-8xl font-extrabold text-white"
              style={{ 
                y: section2Animations.textY, 
                opacity: section2Animations.textOpacity 
              }}
            >
              Street Cop Training
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl text-gray-400 mt-4"
              style={{ 
                y: section2Animations.textY, 
                opacity: section2Animations.textOpacity 
              }}
            >
              Crafted impactful testimonial designs for Street Cop Training, highlighting real-life success stories and experiences.
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
              className="text-4xl md:text-8xl font-extrabold text-white"
              style={{ 
                y: section3Animations.textY, 
                opacity: section3Animations.textOpacity 
              }}
            >
              KNOCK
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl text-gray-400 mt-4"
              style={{ 
                y: section3Animations.textY, 
                opacity: section3Animations.textOpacity 
              }}
            >
              Designed and delivered Google Ads for Knock that captivate and convert, crafted with precision to ensure impactful visuals and clear messaging that drive results.
            </motion.p>
          </div>
          {/* Right Image */}
          <div className="relative w-full">
            <motion.div
              className="w-full md:w-[46vw] h-[40vh] md:h-[76vh] bg-gray-800 rounded-3xl shadow-lg overflow-hidden"
              style={{ 
                x: section3Animations.imageX, 
                rotate: section3Animations.imageRotate 
              }}
            >
              <Image
                src="/manager.png"
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