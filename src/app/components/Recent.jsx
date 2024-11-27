"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Recent = () => {
  const ref = useRef(null);

  // More precise scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Adjusted animation ranges for mobile responsiveness
  const recentX = useTransform(scrollYProgress, [0.1, 0.45], [150, 0]);
  const worksX = useTransform(scrollYProgress, [0.15, 0.45], [-150, 0]);
  const opacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const para = useTransform(scrollYProgress, [0.15, 0.35], [100, 0]);

  return (
    <div  
      ref={ref}
      className="w-full md:w-1/2 flex flex-col pt-6 px-6 md:px-24"
      style={{ overflow: "hidden" }}
    >
      <motion.h1 
        className="text-5xl md:text-8xl font-bold text-white tracking-normal uppercase"
        style={{ x: recentX, opacity }}
      >
        Recent
      </motion.h1>
      <motion.h1
        className="text-5xl md:text-8xl font-bold tracking-normal text-white uppercase"
        style={{ x: worksX, opacity }}
      >
        Works
      </motion.h1>
      <motion.p
        className="text-white text-lg md:text-2xl font-semibold mt-6 md:mt-9"
        style={{ y: para, opacity }}
      >
        TRANSFORMING IDEAS INTO IMPACTFUL PRODUCTS. LET'S COLLABORATE ON YOUR NEXT INNOVATION!
      </motion.p>
    </div>
  );
};

export default Recent;