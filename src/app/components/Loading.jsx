"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Loading = () => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const tlRef = useRef(null);

  // Reset animation function
  const resetAnimation = () => {
    const paths = svgRef.current.querySelectorAll(".path");

    // Reset initial styles
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });

    // Recreate timeline and animate
    if (tlRef.current) {
      tlRef.current.kill(); // Ensure previous timeline is stopped
    }

    tlRef.current = gsap.timeline();

    paths.forEach((path) => {
      const length = path.getTotalLength();
      tlRef.current.to(
        path,
        {
          strokeDashoffset: 0,
          duration: 3,
          ease: "power2.inOut",
        },
        "<"
      );
    });
  };

  // Initial setup and first animation
  useEffect(() => {
    const paths = svgRef.current.querySelectorAll(".path");

    paths.forEach((path) => {
      const length = path.getTotalLength();
      // Set initial styles
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });

    // Show container after initial styles are set
    containerRef.current.style.opacity = 1;

    // Cleanup function
    return () => {
      if (tlRef.current) {
        tlRef.current.kill();
      }
    };
  }, []);

  // Use useGSAP with a reset dependency to restart animation
  useGSAP(() => {
    resetAnimation();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen flex ps-10 justify-center items-center bg-[#f8f9fa] opacity-0"
    >
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-170 -100 1280 1300"
        width={600}
        height={600}
      >
        <style type="text/css">
          {`
            .st4 {
              fill: none;
              stroke: #000000;
              stroke-width: 12;
              stroke-miterlimit: 10;
            }
          `}
        </style>
        <path
          className="st4 path"
          d="M433.85,604.85h-96.02c0,0-86.56-0.55-86.56-81.82c0-98.18,0-98.18,0-98.18h173.64c0,0,97.63,0.86,97.63,90
          s0,89.14,0,89.14s-6.01,92.15-97.3,92.15s-173.97,0-173.97,0s-0.66-54.49,48.23-80.09c18.09-9.47,23.25-11.2,31-11.2
          C338.26,604.85,433.85,604.85,433.85,604.85z"
        />
        <rect
          x="333.52"
          y="506.24"
          className="st4 path"
          width="98.18"
          height="98.18"
        />
      </svg>
    </div>
  );
};

export default Loading;
