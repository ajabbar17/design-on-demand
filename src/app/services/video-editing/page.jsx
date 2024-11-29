import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import ServiceCard from '@/app/components/ServiceCard';
import React from 'react'

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
      
    )
    };


export default page