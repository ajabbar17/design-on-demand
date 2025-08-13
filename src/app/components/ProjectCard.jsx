"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
// Dynamically import GSAP to reduce initial bundle size
const gsap = dynamic(() => import("gsap"), { ssr: false });

const ProjectCard = ({ index, title, img, tags }) => {
  const cardRef = useRef(null);
  const lettersRef1 = useRef([]);
  // Calculate isOdd directly from index prop instead of using state
  const isOdd = index % 2 !== 0;

  useEffect(() => {
    // Lazy load GSAP animations only when component mounts
    const setupCardAnimation = async (cardRef, lettersRef) => {
      // Ensure GSAP is loaded
      const gsapModule = await import("gsap");

      if (cardRef.current && lettersRef.current.length) {
        const letters = lettersRef.current.filter(Boolean);
        const timeline = gsapModule.gsap.timeline({ paused: true });
        gsapModule.gsap.set(letters, { opacity: 0, y: 10 });

        letters.forEach((el, i) => {
          timeline.to(
            el,
            {
              opacity: 1,
              y: 0,
              duration: 0.2,
              ease: "power2.out",
            },
            i * 0.05
          );
        });

        const leaveTimeline = gsapModule.gsap.timeline({ paused: true });
        letters.forEach((el, i) => {
          leaveTimeline.to(
            el,
            {
              opacity: 0,
              y: 10,
              duration: 0.15,
              ease: "power2.in",
            },
            i * 0.03
          );
        });

        const handleMouseEnter = () => {
          leaveTimeline.pause();
          timeline.restart();
        };

        const handleMouseLeave = () => {
          timeline.pause();
          leaveTimeline.restart();
        };

        const card = cardRef.current;
        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          card.removeEventListener("mouseenter", handleMouseEnter);
          card.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    };

    // Use Promise.all for concurrent animation setup
    Promise.all([setupCardAnimation(cardRef, lettersRef1)]);
  }, []);

  return (
    <div className="cardcontainer flex flex-col gap-4 w-full h-auto rounded">
      <div ref={cardRef} className="card w-full h-full relative">
        <h1
          className={`absolute left-1/2 -translate-x-1/2  flex font-bold text-5xl md:text-8xl z-20 top-1/3 text-red-800  ${
            isOdd
              ? "xl:right-full xl:left-auto xl:translate-x-1/2"
              : "xl:left-full xl:-translate-x-1/2"
          }`}
        >
          {title.split("").map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              ref={(el) => {
                lettersRef1.current[index] = el;
              }}
              className="inline-block"
            >
              {letter}
            </span>
          ))}
        </h1>
        <Image
          src={img}
          className="h-[40vh] md:h-[50vh] xl:h-[70vh] w-full object-fill rounded-xl"
          alt="Project 1"
          width={600}
          height={600}
          priority
          // sizes="(max-width: 768px) 100vw, 60vw"
        />
      </div>
      <div className="w-full gap-2 md:gap-5 flex flex-wrap">
        {tags.map((tag, index) => (
          <div
            key={tag}
            className="bg-[#e9ecef] h-10 rounded-3xl flex items-center px-4"
          >
            <p className="uppercase text-lg tracking-widest text-center text-red-800 font-bold">
              {tag}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
