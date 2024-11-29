import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
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
      };
    
      return (
      <div>
        <Navbar />
      <ServiceCard {...brandingData} />
      <Footer />
      </div>
      
    )
    };


export default page