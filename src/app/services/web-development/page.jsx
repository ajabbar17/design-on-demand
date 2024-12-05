import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import Projects from '@/app/components/Projects';
import ServiceCard from '@/app/components/ServiceCard';
import React from 'react'

const page = () => {
    const serviceData = {
        imageUrl: "/web2.jpg", // Add a relevant image to your public folder
        heading: "Web Development",
        breadcrumb: "Home > Web Development",
        title: "Secure Your Online Presence With Premier Web Development Services",
        subTitle: "WEB DEVELOPMENT",
        description: `
          Our web development services turn ideas into reality on the internet. We bring your brand online, 
          where it shines through in every click and scroll.
          Web development is all about creating websites that truly relate to your brand voice and vision. 
          We offer more than mere coding; we develop an online home for your business. 
        `
      }

      const projectData = {
        img1: "/webproject.png", // Add a relevant image to your public folder
        img2: "/myorah.png", // Add a relevant image to your public folder
        title1: "PAIZLY",
        title2: "MYORAH",
        tags1: ["Web Development", "UI/UX", "ECOMMERCE"],
        tags2: ["CMS", "UI/UX", "ECOMMERCE"],
      }
    
      return (
      <div>
        <Navbar />
      <ServiceCard {...serviceData} />
      <h1 className="text-center text-5xl md:text-7xl text-white font-semibold mt-20">Our Projects</h1>
      <Projects {...projectData} />
      <Footer />
      </div>
      
    )
    };


export default page