import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import Projects from '@/app/components/Projects';
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
      }

      const projectData = {
        img1: "/FBMG.png", // Add a relevant image to your public folder
        img2: "/Testimonial.jpg", // Add a relevant image to your public folder
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
      
    )
    };


export default page