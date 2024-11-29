import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import ServiceCard from '@/app/components/ServiceCard';
import React from 'react'

const page = () => {
    const marketingData = {
        imageUrl: "/marketing.jpg", // Add a relevant image to your public folder
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
      };
      return (
      <div>
        <Navbar />
      <ServiceCard {...marketingData} />
      <Footer />
      </div>
      
    )
    };


export default page