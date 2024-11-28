"use client"
import React, { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'

const Mouse = () => {
    const circleRef = useRef(null);
  const lenisRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  useEffect(() => {

   

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      smooth: true, // Enable smooth scrolling
      lerp: 0.1, // Adjust scrolling easing
    });
    lenisRef.current = lenis;

    // Attach Lenis to the animation loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Mousemove handler with scroll adjustment
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      updateCirclePosition();
    };

    const handleScroll = () => {
      updateCirclePosition();
    };

    const updateCirclePosition = () => {
      const scrollY = lenis.scroll || window.scrollY; // Get the scroll position
      gsap.to(circleRef.current, {
        x: mousePosition.current.x,
        y: mousePosition.current.y + scrollY, // Add the scroll offset
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      lenis.destroy(); // Clean up Lenis on unmount
    };
  }, []);
  return (
    <div
        ref={circleRef}
        className="hidden md:block absolute z-30  w-6 h-6 bg-white rounded-full pointer-events-none shadow-md"
        style={{
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)", // Ensures the circle aligns to the mouse center
        }}
      ></div>
  )
}

export default Mouse