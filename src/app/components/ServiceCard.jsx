import React from "react";

const ServiceCard = ({ imageUrl, heading, breadcrumb, title, description, subTitle}) => {
  return (
    <div className="pt-20">
      {/* Top Section with Background Image and Breadcrumb */}
      <div
        className="relative h-80 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="text-center z-10 text-white">
          <h1 className="text-5xl font-bold">{heading}</h1>
          <p className="mt-2 text-lg">{breadcrumb}</p>
        </div>

       
      </div>

      {/* Content Section */}
      <div className="container mx-auto md:px-40 p-7 md:py-16 grid md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div>
          <img src={imageUrl} alt={heading} className="rounded-lg shadow-lg" />
        </div>

        {/* Text */}
        <div className="flex flex-col items-start  h-full">
        <div className="bg-[#272e33] h-6  rounded-xl px-4">
          <p className="uppercase text-lg tracking-widest text-center text-emerald-400 font-bold">
            {subTitle}
          </p>
        </div>          <h2 className= "text-3xl md:text-5xl text-white font-bold mt-2">{title}</h2>
          <p className="mt-4 text-2xl text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

