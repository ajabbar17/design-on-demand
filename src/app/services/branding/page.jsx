import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import Projects from '@/app/components/Projects';
import ServiceCard from '@/app/components/ServiceCard';
import React from 'react';

export const metadata = {
  title: "Branding",
  description: "Transform your business with our expert branding services. We create compelling brand identities, logos, and messaging strategies that resonate with your audience and build lasting connections.",
  keywords: [
    "branding services",
    "brand identity",
    "brand strategy",
    "logo design",
    "brand messaging",
    "visual branding",
    "brand development",
    "corporate branding",
    "brand guidelines",
    "brand consulting"
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
    canonical: "https://www.designondemand.solutions/branding"
  }
};

const page = () => {
  const brandingData = {
    imageUrl: "/branding.jpg",
    heading: "Branding",
    breadcrumb: "Home > Branding",
    title: "Elevate Your Brand Identity With Professional Branding Services",
    subTitle: "BRANDING",
    description: `
      Branding is the art of creating a unique identity that sets your business apart.
      From logos to messaging, we design cohesive visuals and strategies that resonate
      with your audience and build trust.
      With our branding services, your business will leave a lasting impression that inspires loyalty
      and engagement.
    `,
  }

  const projectData = {
    img1: "/br2.png",
    img2: "/emu.png",
    title1: "LOTUS",
    title2: "EMU",
    tags1: ["BRANDING", "POSTS"],
    tags2: ["BRANDING","SOCIAL MEDIA"],
  }

  return (
    <div>
      <Navbar />
      <ServiceCard {...brandingData} />
      <h1 className="text-center text-5xl md:text-7xl text-white font-semibold mt-20">Our Projects</h1>
      <Projects {...projectData} />
      <Footer />
    </div>
  );
};

export default page;