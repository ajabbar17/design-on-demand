"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const Hero = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const firstSpanRef = useRef(null);
  const secondSpanRef = useRef(null);
  const buttonsContainerRef = useRef(null);
  const buttonsRef = useRef([]);
  const para = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useGSAP(() => {
    // GSAP Timeline for animations
    const timeline = gsap.timeline({
      delay: 0.5,
      onComplete: () => setIsAnimationComplete(true)
    });
    setIsVisible(true);

    // Animate the first span (less angle)
    timeline.fromTo(
      firstSpanRef.current,
      { opacity: 0, rotateX: 45 },
      { 
        opacity: 1, 
        rotateX: 0, 
        duration: 0.76, 
        ease: "power2.out" 
      }
    );

    // Animate the second span (larger angle)
    timeline.fromTo(
      secondSpanRef.current,
      { opacity: 0, rotateX: 90 },
      { 
        opacity: 1, 
        rotateX: 0, 
        duration: 1, 
        ease: "power2.out" 
      },
      "+=0.1"
    );

    // Animate paragraph
    timeline.fromTo(
      para.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power1.inOut" 
      }
    );

    // Animate buttons container
    timeline.fromTo(
      buttonsContainerRef.current,
      { opacity: 0, scale: 0.9 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.8, 
        ease: "back.out(1.7)"
      }
    );

    // Individual button animations
    timeline.fromTo(
      buttonsRef.current,
      { 
        opacity: 0, 
        y: 50, 
      },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.5, 
        ease: "power1.out"
      },
      "-=0.4"
    );
  }, []);

  return (
    <section className={`w-full text-white h-screen flex flex-col items-center justify-center ${isVisible ? 'opacity-100 ' : 'opacity-0'}  relative overflow-hidden`}>
      {/* Main Text */}
      <div className="text-center overflow-hidden">
        <h1 className="text-5xl uppercase md:text-9xl font-bold">
          <span
            className="block"
            ref={firstSpanRef}
          >
            design bold
          </span>
          <span
            className="block leading-[3.7rem]"
            ref={secondSpanRef}
          >
            inspire the world
          </span>
        </h1>
        <p
          className="text-lg font-medium md:text-xl max-w-lg mx-auto mt-12"
          ref={para}
        >
          Empowering your brand with custom web development, design, illustrations, and data-driven digital marketing strategies.
        </p>
      </div>

      {/* Buttons */}
      <div 
        ref={buttonsContainerRef}
        className={`flex md:flex-row flex-col gap-3 justify-between w-full px-14 mt-20 ${!isAnimationComplete ? 'opacity-0 ' : ''}`}
      >
        <button
          className="bg-transparent border-2 border-white font-bold text-lg py-3 px-10 rounded-3xl text-white hover:bg-white hover:text-black transition"
          ref={(el) => (buttonsRef.current[0] = el)}
        >
           <Link
                
                href="#work"
                className="mb-1 hover:scale-105 transition-all"
              >
                Explore work
              </Link>
        </button>
        <button
          className="bg-white text-black hover:bg-transparent hover:text-white py-3 px-10 font-bold rounded-3xl text-lg hover:border-2 transition"
          ref={(el) => (buttonsRef.current[1] = el)}
        >
           <Link
                target="_blank"
                href="mailto:ajabbar1234@gmail.com"
                className="mb-1 hover:scale-105 transition-all"
              >
                Get in touch
              </Link>
        </button>
      </div>
    </section>
  );
};

export default Hero;