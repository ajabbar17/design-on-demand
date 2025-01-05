import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import Projects from '@/app/components/Projects';
import ServiceCard from '@/app/components/ServiceCard';
import React from 'react';

export const metadata = {
  title: "Marketing",
  description: "Transform your brand's reach with our comprehensive marketing services. From digital campaigns to social media strategy, we deliver data-driven solutions that connect with your audience and drive measurable results.",
  keywords: [
    "digital marketing",
    "social media marketing",
    "marketing strategy",
    "content marketing",
    "campaign management",
    "marketing services",
    "brand marketing",
    "social media strategy",
    "marketing campaigns",
    "marketing solutions"
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
    canonical: "https://www.designondemand.solutions/marketing"
  }
};

const page = () => {
  const marketingData = {
    imageUrl: "/marketing.jpg",
    heading: "Marketing",
    breadcrumb: "Home > Marketing",
    title: "Drive Growth and Engagement With Expert Marketing Strategies",
    subTitle: "MARKETING",
    description: `
      Our marketing services focus on connecting your brand with your audience effectively. 
      Whether it's digital campaigns or offline strategies, we craft tailored solutions 
      to boost visibility and achieve measurable results.
      
      Let us help you tell your story in a way that captures attention and drives conversions.
    `,
  }

  const projectData = {
    img1: "/FBMG.png",
    img2: "/Testimonial.jpg",
    title1: "FBMG",
    title2: "STREET COP",
    tags1: ["MARKETING", "SOCIAL MEDIA"],
    tags2: ["MARKETING","POSTS"],
  }

  return (
    <div>
      <Navbar />
      <ServiceCard {...marketingData} />
      <h1 className="text-center text-5xl md:text-7xl text-white font-semibold mt-20">Our Projects</h1>
      <Projects {...projectData} />
      <Footer />
    </div>
  );
};

export default page;