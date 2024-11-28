"use client"
import React, { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

const Leniscomp = () => {
    const lenisRef = useRef(null);

    useEffect(() => {

        // Hide the loading screen after 2 seconds
       
    
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
    
       
        return () => {
       
          lenis.destroy(); // Clean up Lenis on unmount
        };
      }, []);
  return (
    <div>

    </div>
  )
}

export default Leniscomp