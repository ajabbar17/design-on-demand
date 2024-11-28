import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Servicehero = () => {
  return (
    <section className="relative bg-[#1b1f23] text-white">
      <div className="max-w-7xl mx-auto  px-6 py-20 grid md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="overflow-hidden">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-slide-up">
              Digital Solutions <br />
              <span className="text-emerald-400">Crafted</span> with Precision
            </h1>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            We transform your digital vision into reality. Our agency combines cutting-edge technology 
            with creative strategy to deliver exceptional digital experiences that drive growth and 
            innovation.
          </p>
          <div className="flex space-x-4">
            
            <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 
              font-bold py-3 px-10 rounded-lg transition duration-300">
               <Link
                target="_blank"
                href="mailto:ajabbar1234@gmail.com"
                className="mb-1 hover:scale-105 transition-all"
              >
                Learn More
              </Link>
            </button>
          </div>
        </div>

        {/* Visual Element */}
        <div className="relative">
          <div className="absolute -inset-2 bg-emerald-500/20 rounded-full blur-3xl opacity-50"></div>
          <div className="relative  rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <Image 
              src="/manager.png"  // Replace with your actual image
              width={600} 
              height={500} 
              alt="Agency Hero Visual" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div> */}
    </section>
  );
};

export default Servicehero;