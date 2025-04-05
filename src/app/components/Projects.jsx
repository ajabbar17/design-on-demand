"use client";
import Image from "next/image";
import React, { useRef, useEffect, memo } from "react";
import dynamic from "next/dynamic";

// Dynamically import GSAP to reduce initial bundle size
const gsap = dynamic(() => import("gsap"), { ssr: false });

// Memoize the component to prevent unnecessary re-renders
const Projects = memo(({ img1, img2, title1, title2, tags1, tags2 }) => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const lettersRef1 = useRef([]);
  const lettersRef2 = useRef([]);

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
    Promise.all([
      setupCardAnimation(card1Ref, lettersRef1),
      setupCardAnimation(card2Ref, lettersRef2),
    ]);
  }, []);

  return (
    <div className="w-full flex gap-7 pt-8 pb-20 md:flex-row flex-col lg:px-24 p-7">
      {/* Card 1 */}
      <div className="cardcontainer flex flex-col gap-4 w-full md:w-1/2 h-[50vh] md:h-[75vh] rounded">
        <div ref={card1Ref} className="card w-full h-full relative">
          <h1 className="absolute left-1/2 -translate-x-1/2 md:left-full md:-translate-x-1/2 flex font-bold text-5xl md:text-8xl z-20 top-1/3 text-emerald-700">
            {title1.split("").map((letter, index) => (
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
            src={img1}
            className="w-full h-full object-cover rounded-xl"
            alt="Project 1"
            width={600}
            height={600}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="w-full gap-2 md:gap-5 flex flex-wrap">
          {tags1.map((tag, index) => (
            <div
              key={tag}
              className="bg-[#272e33] h-10 rounded-3xl flex items-center px-4"
            >
              <p className="uppercase text-lg tracking-widest text-center text-emerald-400 font-bold">
                {tag}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Card 2 */}

      {title2 && (
        <div className="cardcontainer flex flex-col gap-4 w-full md:w-1/2 h-[50vh] md:h-[75vh] rounded">
          <div ref={card2Ref} className="card w-full h-full relative">
            <h1 className="absolute left-1/2 -translate-x-1/2 md:right-full md:left-auto md:translate-x-1/2 flex font-bold text-6xl md:text-8xl z-20 top-1/3 text-emerald-700">
              {title2.split("").map((letter, index) => (
                <span
                  key={`${letter}-${index}`}
                  ref={(el) => {
                    lettersRef2.current[index] = el;
                  }}
                  className="inline-block"
                >
                  {letter}
                </span>
              ))}
            </h1>
            <Image
              src={img2}
              className="w-full h-full object-cover rounded-xl"
              alt="Project 2"
              width={600}
              height={600}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="w-full gap-2 md:gap-5 flex flex-wrap">
            {tags2.map((tag, index) => (
              <div
                key={tag}
                className="bg-[#272e33] h-10 rounded-3xl flex items-center px-4"
              >
                <p className="uppercase text-lg tracking-widest text-center text-emerald-400 font-bold">
                  {tag}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

Projects.displayName = "Projects";
export default Projects;
