import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import Projects from '@/app/components/Projects';
import ServiceCard from '@/app/components/ServiceCard';
import React from 'react'

const page = () => {
    const brandingData = {
        imageUrl: "/branding.jpg", // Add a relevant image to your public folder
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
        img1: "/br2.png", // Add a relevant image to your public folder
        img2: "/emu.png", // Add a relevant image to your public folder
        title1: "LOTUS",
        title2: "EMU",
        tags1: ["BRANDING", "POSTS"],
        tags2: ["BRANDING","SOCIAL MEDIA"],
      }
    
      return (
      <div>
        <Navbar />
      <ServiceCard {...brandingData} />
      <h1 className="text-center text-7xl text-white font-semibold mt-20">Our Projects</h1>
      <Projects {...projectData} />
      <Footer />
      </div>
      
    )
    };


export default page