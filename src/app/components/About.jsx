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
      content: `Our journey began with a vision to bridge the gap between creativity and technology. Starting as a small team of passionate 
        individuals, we have grown into a trusted digital agency, delivering transformative solutions across industries. Each milestone 
        in our history reflects our dedication to innovation, client success, and a commitment to pushing the boundaries of digital excellence. 
        Over the years, we have expanded our expertise, diversified our services, and built a legacy of 
        trust and excellence. From overcoming challenges to celebrating achievements, our history is a testament to our resilience, creativity,
         and the enduring relationships we&apos;ve forged with our clients.`,
    },
    {
      title: "Our Mission",
      content:
        "Our mission is to empower businesses with innovative digital solutions that drive growth, enhance engagement, and deliver measurable success. We strive to create impactful strategies tailored to meet the unique needs of our clients. By combining cutting-edge technology, creative expertise, and data-driven insights, we help businesses unlock their full potential. Our mission extends beyond delivering results—we aim to build meaningful relationships, inspire transformation, and create a sustainable impact on the industries we serve.",
    },
    {
      title: "Our Vision",
      content:
        "Our vision is to become a global leader in the digital landscape, known for delivering exceptional value and fostering long-term partnerships. We aim to shape the future of businesses through creativity, technology, and a commitment to excellence. By continually embracing innovation and adapting to the evolving digital ecosystem, we envision a future where businesses thrive in a connected, technology-driven world. Our vision is to inspire trust, empower change, and contribute to the success stories of businesses worldwide.",
    },
  ];

  return (
    <section className="w-full text-[#1a1a1a] py-6 lg:h-[650px] xl:h-[560px]   xl:py-12 px-6 md:px-12">
      <div className="flex gap-3 w-full items-center md:flex-row flex-col md:items-start">
        <div className="bg-[#e9ecef] h-6 mt-1 rounded-xl px-4">
          <p className="uppercase text-lg tracking-widest text-center text-red-800 font-bold">
            Who we are
          </p>
        </div>
        <h2 className="text-5xl font-bold mb-4">About our Company</h2>
      </div>
      <div className="w-full gap-5 flex lg:flex-row flex-col mx-auto">
        <div className="mb-8 w-full lg:w-1/2">
          <p className="leading-relaxed text-2xl text-center md:text-start md:text-4xl">
            At DESIGN ON DEMAND, we&apos;re more than just a digital services
            provider we&apos;re a team of{" "}
            <span className="text-red-800">
              creative thinkers, tech enthusiasts, and marketing strategists
            </span>
            , passionate about helping brands thrive online. Our{" "}
            <span className="text-red-800">mission</span> is to bring your{" "}
            <span className="text-red-800">vision</span> to life through
            stunning web design, functional development, eye-catching
            illustrations, and strategic digital marketing.
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {accdata.map((item, index) => (
            <div
              key={index}
              className="bg-[#e9ecef] hover:bg-[#dee2e6] hover:ps-10 tracking-wide transition-all rounded-3xl shadow-lg p-4 cursor-pointer"
              onClick={() => toggleAccordion(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex justify-between items-center">
                <h3
                  className={`font-semibold text-xl ${
                    hoveredIndex === index
                      ? "text-red-800"
                      : "text-[#1a1a1a]"
                  }`}
                >
                  {item.title}
                </h3>
                <span
                  className={`transform ${
                    activeIndex === index ? "rotate-45" : "rotate-0"
                  } transition-transform p-2 rounded-xl ${
                    hoveredIndex === index
                      ? "bg-red-800 text-white"
                      : "bg-[#dee2e6] text-[#1a1a1a]"
                  }`}
                >
                  <AiOutlinePlus />
                </span>
              </div>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="mt-4 text-gray-600 text-lg">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
