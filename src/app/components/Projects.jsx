"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Projects = () => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const lettersRef1 = useRef([]);
  const lettersRef2 = useRef([]);

  const setupAnimation = (cardRef, lettersRef) => {
    useEffect(() => {
      if (cardRef.current && lettersRef.current.length) {
        const letters = lettersRef.current;
        const timeline = gsap.timeline({ paused: true });

        gsap.set(letters, { opacity: 0, y: 10 });

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

        const leaveTimeline = gsap.timeline({ paused: true });
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
    }, [lettersRef]);
  };

  setupAnimation(card1Ref, lettersRef1);
  setupAnimation(card2Ref, lettersRef2);

  return (
    <div className="w-full flex gap-7 p-7">
      {/* Card 1 */}
      <div className="cardcontainer flex flex-col gap-4 w-1/2 h-[75vh] rounded">
        <div ref={card1Ref} className="card w-full h-full relative">
          <h1 className="absolute left-full flex font-bold text-8xl z-40 top-1/3 text-white -translate-x-1/2">
            {"NEBULA".split("").map((letter, index) => (
              <span
                key={index}
                ref={(el) => (lettersRef1.current[index] = el)}
                className="inline-block"
              >
                {letter}
              </span>
            ))}
          </h1>
          <Image
            src="/nebula.png"
            className="w-full h-full object-fill rounded-xl"
            alt="nebula"
            width={600}
            height={600}
          />
        </div>
        <div className="w-full gap-5 flex">
          <div className="border border-white px-7 uppercase font-semibold py-2 text-white rounded-3xl">
            Explore
          </div>
          <div className="border border-white px-7 uppercase font-semibold py-2 text-white rounded-3xl">
            Details
          </div>
          <div className="border border-white px-7 uppercase font-semibold py-2 text-white rounded-3xl">
            Launch
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="cardcontainer flex flex-col gap-4 w-1/2 h-[75vh] rounded">
        <div ref={card2Ref} className="card w-full h-full relative">
          <h1 className="absolute right-full flex font-bold text-8xl z-40 top-1/3 text-white translate-x-1/2">
            {"GALAXY".split("").map((letter, index) => (
              <span
                key={index}
                ref={(el) => (lettersRef2.current[index] = el)}
                className="inline-block"
              >
                {letter}
              </span>
            ))}
          </h1>
          <Image
            src="/nebula.png"
            className="w-full h-full object-fill rounded-xl"
            alt="galaxy"
            width={600}
            height={600}
          />
        </div>
        <div className="w-full gap-5 flex">
          <div className="border border-white px-7 uppercase font-semibold py-2 text-white rounded-3xl">
            Discover
          </div>
          <div className="border border-white px-7 uppercase font-semibold py-2 text-white rounded-3xl">
            Info
          </div>
          <div className="border border-white px-7 uppercase font-semibold py-2 text-white rounded-3xl">
            View
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
