import React from 'react';
import About from '../components/About';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: "About Us",
  description: "Learn more about our team and mission. We are dedicated to delivering top-notch services and solutions to help your business thrive.",
  keywords: [
    "about us",
    "our team",
    "company mission",
    "business solutions",
    "professional services",
    "company values",
    "team members",
    "company history",
    "about our company",
    "company overview"
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
    canonical: "https://www.designondemand.solutions/about"
  }
};

const page = () => {
  return (
    <div className='bg-[#1b1f23] h-full '>
      <Navbar />
      <div className='pt-20 flex flex-col w-full h-full'>
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default page;