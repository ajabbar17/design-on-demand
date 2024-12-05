import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import Projects from '@/app/components/Projects';
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

      const projectData = {
        img1: "/ill1.png", // Add a relevant image to your public folder
        img2: "/ill2.png", // Add a relevant image to your public folder
        title1: "DAY-DAWN-NIGHT",
        title2: "HERITAGE",
        tags1: ["CONCEPT ART", "ILLUSTRATION","TIME"],
        tags2: ["REALITY","HERITAGE","ILLUSTRATION"],
      }
    

      return (
      <div>
        <Navbar />
      <ServiceCard {...illustrationData} />
      <h1 className="text-center text-5xl md:text-7xl text-white font-semibold mt-20">Our Projects</h1>
      <Projects {...projectData} />
      <Footer />
      </div>
      
    )
    };


export default page