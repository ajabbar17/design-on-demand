import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import ServiceCard from '@/app/components/ServiceCard';
import React from 'react';

export const metadata = {
  title: "Web Design",
  description: "Craft stunning websites with our innovative web design services. We create visually appealing and user-friendly designs that reflect your brand and engage your audience.",
  keywords: [
    "web design",
    "website design",
    "web development",
    "UI/UX design",
    "responsive design",
    "web design services",
    "creative web design",
    "professional web design",
    "user-friendly websites",
    "digital design"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://www.designondemand.solutions/web-design"
  }
};

const page = () => {
  const webDesignData = {
    imageUrl: "/webdev.jpg", // Add a relevant image to your public folder
    heading: "Web Design",
    breadcrumb: "Home > Web Design",
    title: "Craft Stunning Websites With Innovative Web Design Services",
    subTitle: "WEB DESIGN",
    description: `
      Web design is the foundation of a great online experience. We create visually appealing 
      and user-friendly designs that reflect your brand and engage your audience.
      
      Build a digital presence that combines aesthetics with functionality seamlessly.
    `,
  };

  return (
    <div>
      <Navbar />
      <ServiceCard {...webDesignData} />
      <Footer />
    </div>
  );
};

export default page;