import React from "react";

const ServiceCard = ({
  imageUrl,
  heading,
  breadcrumb,
  title,
  description,
  subTitle,
}) => {
  return (
    <div className="relative overflow-hidden">
      {/* Top Section with Background Image and Breadcrumb */}
      <div
        className="relative h-64 sm:h-80 md:h-96 lg:h-[32rem] xl:h-[36rem] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        <div className="text-center z-10 text-white max-w-4xl px-4 sm:px-6">
          <div className="mb-3 sm:mb-4">
            <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide">
              {breadcrumb}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent leading-tight">
            {heading}
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Content Section - Text Only */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 max-w-4xl">
          <div className="text-center space-y-6 sm:space-y-8">
            
            {/* Subtitle Badge */}
            <div className="inline-flex items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#e9ecef] rounded-full blur-lg opacity-30"></div>
                <div className="relative bg-[#e9ecef] text-red-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg">
                  <p className="uppercase font-bold tracking-widest">
                    {subTitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Main Title */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 font-bold leading-tight mb-4 sm:mb-6">
                {title}
              </h2>
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-6 sm:w-8 h-1 bg-gray-300 rounded-full"></div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-red-800 leading-relaxed font-medium max-w-3xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Animated Projects Section */}
      <div className="py-8 overflow-hidden">
  <div className="relative">
    <div className="flex whitespace-nowrap animate-scroll w-max">
      {/* Repeat the text enough times for seamless loop */}
      {[...Array(16)].map((_, index) => (
        <span
          key={index}
          className="text-red-800 text-5xl lg:text-8xl font-bold mx-16 select-none"
        >
          OUR PROJECTS
        </span>
      ))}
    </div>
  </div>
</div>


     
    </div>
  );
};

export default ServiceCard;