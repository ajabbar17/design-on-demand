import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import ServiceCard from '@/app/components/ServiceCard';
import React from 'react'

const page = () => {
    const illustrationData = {
        imageUrl: "/illustrator.jpg", // Add a relevant image to your public folder
        heading: "Illustration",
        breadcrumb: "Home > Illustration",
        title: "Unleash Creativity With Custom Illustration Services",
        subTitle: "ILLUSTRATION",
        description: `
          Illustrations add a personal touch to your projects, helping your brand stand out. 
          From digital art to hand-drawn designs, we create custom illustrations that bring ideas to life.
          
          Discover the power of storytelling through visuals crafted uniquely for you.
        `,
      };
      return (
      <div>
        <Navbar />
      <ServiceCard {...illustrationData} />
      <Footer />
      </div>
      
    )
    };


export default page