"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const portfolioRef = useRef(null);
  const pathname = usePathname();

  useGSAP(() => {
    const letters = portfolioRef.current.querySelectorAll(".letter");

    const animation = gsap.fromTo(
      letters,
      { y: "70%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 87%",
          end: "top 45%",
          scrub: true,
        },
      }
    );
  }, [pathname]);

  return (
    <footer
      ref={portfolioRef}
      className="bg-[#000] text-[#fff] py-24 px-4 md:px-20"
    >
      <div className="text-center md:text-left">
        <h1 className="text-5xl text-red-800 md:text-7xl font-bold mb-8">
          {/* Split each letter into a span and add a gap after "SAY" */}
          {`LET'S`.split("").map((letter, index) => (
            <span key={index} className="letter inline-block">
              {letter}
            </span>
          ))}
          <span className="inline-block">&nbsp;</span>{" "}
          {/* This adds a space between "SAY" and "HELLO!" */}
          {"TALK".split("").map((letter, index) => (
            <span key={index} className="letter inline-block">
              {letter}
            </span>
          ))}
        </h1>
        <div className="border-t border-[#fff] pt-8 flex flex-col md:flex-row tracking-wider justify-between">
          <div className="mb-8 flex flex-col w-auto md:w-1/2 md:mb-0">
            <p className="text-lg mb-4">
              TRANSFORMING IDEAS INTO IMPACTFUL PRODUCTS. LET&apos;S COLLABORATE
              ON YOUR NEXT INNOVATION!
            </p>
            <button className="flex items-center justify-center text-xl px-6 py-2 border md:w-1/3 border-[#fff] rounded-full hover:text-white outline-none transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-red-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <Link
                target="_blank"
                href="mailto:info@designondemand.solutions"
                className=" uppercase hover:scale-105 transition-all relative z-10"
              >
                Contact Us
              </Link>
            </button>
          </div>
          <div className="flex justify-between gap-0 p-2 px-7 md:px-4 md:justify-end md:gap-2">
            <div className="flex border-r-0 tracking-wide text-xl px-2 md:px-5 border-l flex-col">
              <span className="font-bold mb-2">[MENU]</span>
              <a
                href="/about"
                className="mb-1 font-bold hover:scale-105 transition-all"
              >
                ABOUT US
              </a>
              <a
                href="/services"
                className="font-bold hover:scale-105 transition-all"
              >
                SERVICES
              </a>
            </div>
            <div className="flex border-l tracking-wide text-xl px-2 md:px-5 flex-col">
              <span className="font-bold mb-2">[CONTACT]</span>
              <Link
                target="_blank"
                href="mailto:info@designondemand.solutions"
                className="mb-1 font-bold hover:scale-105 transition-all"
              >
                EMAIL
              </Link>
              <Link
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61572182320201"
                className="mb-1 font-bold hover:scale-105 transition-all"
              >
                INSTAGRAM
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/dod_info/"
                className="mb-1 font-bold hover:scale-105 transition-all"
              >
                FACEBOOK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
