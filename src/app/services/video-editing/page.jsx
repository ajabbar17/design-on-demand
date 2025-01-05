import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import ServiceCard from '@/app/components/ServiceCard';
import React from 'react';

export const metadata = {
  title: "Video Editing",
  description: "Bring your vision to life with our exceptional video editing services. From marketing to storytelling, we create visually stunning content that aligns with your vision.",
  keywords: [
    "video editing",
    "video production",
    "editing services",
    "video content",
    "marketing videos",
    "storytelling",
    "visual content",
    "professional editing",
    "video projects",
    "editing expertise"
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
    canonical: "https://www.designondemand.solutions/video-editing"
  }
};

const page = () => {
  const videoEditingData = {
    imageUrl: "/illustrator.jpg", // Add a relevant image to your public folder
    heading: "Video Editing",
    breadcrumb: "Home > Video Editing",
    title: "Bring Your Vision to Life With Exceptional Video Editing Services",
    subTitle: "VIDEO EDITING",
    description: `
      Video editing transforms raw footage into captivating stories that inspire and engage. 
      Whether it's for marketing, storytelling, or personal projects, we create visually stunning 
      content that aligns with your vision.
      
      Elevate your videos to the next level with our professional editing expertise.
    `,
  };

  return (
    <div>
      <Navbar />
      <ServiceCard {...videoEditingData} />
      <Footer />
    </div>
  );
};

export default page;