import Image from "next/image";
import React from "react";

const BentoGrid = () => {
  return (
    <section className="py-12 px-4 mb-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className=" mb-3 text-center">
          <h2 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6">
            Design with
            <span className="text-red-800"> Strategy</span> and <span className="text-red-800">Creativity</span>
          </h2>
          <p className="text-xl md:text-2xl text-red-800  max-w-3xl mx-auto mb-6  leading-relaxed">
            Our process blends strategy and creativity to address challenges,
            craft solutions, and deliver designs that effectively communicate
            your message.
          </p>
          <div className="w-[15vw] h-1 mb-16 bg-red-800 rounded-full mx-auto"></div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Row 1 */}
          <div className="bg-[#e9e3e3] rounded-xl p-9 text-black flex flex-col justify-between">
            <h2 className="text-7xl font-bold mb-4">01.</h2>
            <h3 className="text-4xl font-semibold mb-2">RESEARCH & STRATEGY</h3>
            <p className="text-xl tracking-wide">
              In this phase, I dive deep into understanding your business,
              target audience, and project goals. Through research and strategic
              planning, I create a clear roadmap to guide the entire design
              process.
            </p>
          </div>

          <div className="bg-white  rounded-xl overflow-hidden">
            <Image
              src="/research.jpeg" // replace with actual image
              alt="Person working"
              width={600}
              height={400}
              className="xl:h-[48vh] object-cover"
            />
          </div>

          <div className="bg-rose-400 rounded-xl p-9 text-black flex flex-col justify-between">
            <h2 className="text-7xl font-bold mb-4">02.</h2>
            <h3 className="text-4xl font-semibold mb-2">CONCEPT & IDEATION</h3>
            <p className="text-xl tracking-wide">
              Here, I brainstorm and develop creative concepts that align with
              your vision. Initial sketches and ideas are refined into tangible
              wireframes, setting the direction for design and functionality.
            </p>
          </div>

          {/* Row 2 */}
          <div className="bg-[url('/idea.jpeg')] bg-cover bg-center rounded-xl h-full min-h-[360px]"></div>

          <div className="bg-red-900 text-white rounded-xl p-9 md:col-span-2 flex flex-col justify-between">
            <h2 className="text-7xl font-bold mb-4">03.</h2>
            <div>
              <h3 className="text-4xl font-semibold mb-2">
                FEEDBACK & REFINEMENT
              </h3>
              <p className="text-xl tracking-wide">
                Collaboration is key. I review the design with you, gather
                feedback, and refine the work to align with your expectations
                and goals. This ensures the design reflects your vision.
              </p>
            </div>
          </div>

          {/* Row 3 */}

          <div className="bg-rose-400 rounded-xl p-9 text-black flex flex-col justify-between">
            <h2 className="text-7xl font-bold mb-4">04.</h2>
            <h3 className="text-4xl font-semibold mb-2">
              TESTING & OPTIMIZATION
            </h3>
            <p className="text-xl tracking-wide">
              I conduct thorough testing to identify and resolve any performance
              or usability issues. This phase ensures the design works
              seamlessly across devices and meets user experience standards.
            </p>
          </div>

          <div className="bg-[#e9e3e3] rounded-xl p-9 text-black flex flex-col justify-between">
            <h2 className="text-7xl font-bold mb-4">05.</h2>
            <h3 className="text-4xl font-semibold mb-2">LAUNCH & DELIVERY</h3>
            <p className="text-xl tracking-wide">
              Once everything is finalized, the project is launched and
              delivered to you. I also provide guidance or support for ongoing
              maintenance to ensure long-term success.
            </p>
          </div>
          <div className="bg-white rounded-xl overflow-hidden">
            <Image
              src="/launch.jpeg" // replace with actual image
              alt="Person working"
              width={600}
              height={400}
              className="object-fill xl:h-[48vh]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
