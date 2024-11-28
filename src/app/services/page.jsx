import React from 'react'


import ServicesSection from '../components/ServiceSection'
import Servicehero from '../components/Servicehero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {

  return (
    <div className='bg-[#1b1f23] h-full '>
        <Navbar />
        <div className='pt-20 flex flex-col w-full h-full'>
        <Servicehero />
        <ServicesSection/>
        <Footer />
        </div>
       
    </div>
  )
}

export default page