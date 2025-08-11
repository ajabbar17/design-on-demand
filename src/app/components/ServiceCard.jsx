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
        className="relative h-96 flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        <div className="text-center z-10 text-white max-w-4xl px-6">
          <div className="mb-4">
            <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-2 rounded-full text-sm font-medium tracking-wide">
              {breadcrumb}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent leading-tight">
            {heading}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Content Section - Full Width Layout */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="space-y-8">
              {/* Subtitle Badge */}
              <div className="inline-flex items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#e9ecef] rounded-full blur-lg opacity-30"></div>
                  <div className="relative bg-[#e9ecef] text-red-800 px-6 py-3 rounded-full text-lg">
                    <p className="uppercase font-bold tracking-widest">
                      {subTitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Title */}
              <div>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl text-gray-900 font-bold leading-tight mb-4">
                  {title}
                </h2>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xl lg:text-2xl text-red-800 leading-relaxed font-medium">
                {description}
              </p>


            </div>

            {/* Image Section */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={imageUrl}
                  alt={heading}
                  className="w-full h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 via-transparent to-transparent"></div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-red-600/10 rounded-full blur-2xl"></div>
            </div>

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