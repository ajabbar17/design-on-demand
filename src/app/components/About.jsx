"use client";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Data for the accordion
  const accdata = [
    {
      title: "Our History",
      content:
        "Our journey began with a vision to bridge the gap between creativity and technology. Starting as a small team of passionate individuals, we have grown into a trusted digital agency, delivering transformative solutions across industries.",
    },
    {
      title: "Our Mission",
      content:
        "Our mission is to empower businesses by providing innovative digital solutions tailored to their unique needs. We strive to deliver excellence, foster creativity, and ensure meaningful results for our clients.",
    },
    {
      title: "Our Vision",
      content:
        "Our vision is to become a global leader in the digital landscape, known for delivering exceptional value and fostering long-term partnerships. We aim to shape the future of businesses through creativity, technology, and a commitment to excellence.",
    },
  ];

  return (
    <section className="w-full text-white py-6 md:h-[550px] md:py-12 px-6 md:px-12">
      <div className="flex gap-3 w-full items-center md:flex-row flex-col md:items-start">
        <div className="bg-[#272e33] h-6 mt-1 rounded-xl px-4">
          <p className="uppercase text-lg tracking-widest text-center text-emerald-400 font-bold">
            Who we are
          </p>
        </div>
        <h2 className="text-5xl font-bold mb-4">About our Company</h2>
      </div>
      <div className="w-full gap-5 flex md:flex-row flex-col mx-auto">
        <div className="mb-8 w-full md:w-1/2">
          <p className="leading-relaxed text-2xl text-center md:text-start md:text-4xl">
            At DESIGN ON DEMAND, we&apos;re more than just a digital services provider
            we&apos;re a team of{" "}
            <span className="text-emerald-500">
              creative thinkers, tech enthusiasts, and marketing strategists
            </span>
            , passionate about helping brands thrive online. Our{" "}
            <span className="text-emerald-500">mission</span> is to bring your{" "}
            <span className="text-emerald-500">vision</span> to life through stunning web
            design, functional development, eye-catching illustrations, and strategic digital marketing.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {accdata.map((item, index) => (
            <div
              key={index}
              className="bg-[#272e33] hover:bg-[#2e363b] hover:ps-10 transition-all rounded-3xl shadow-lg p-4 cursor-pointer"
              onClick={() => toggleAccordion(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex justify-between items-center">
                <h3
                  className={`font-semibold text-xl ${
                    hoveredIndex === index ? "text-emerald-400" : "text-white"
                  }`}
                >
                  {item.title}
                </h3>
                <span
                  className={`transform ${
                    activeIndex === index ? "rotate-45" : "rotate-0"
                  } transition-transform p-2 rounded-xl ${
                    hoveredIndex === index ? "bg-emerald-400" : "bg-[#2e363b]"
                  }`}
                >
                  <AiOutlinePlus />
                </span>
              </div>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="mt-4 text-gray-400">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
