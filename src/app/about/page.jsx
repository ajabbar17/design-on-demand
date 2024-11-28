import React from 'react'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



const page = () => {

  
  return (
    <div className='bg-[#1b1f23] h-full '>
        <Navbar />
        <div className='pt-20 flex flex-col w-full h-full'>

        <About />
        <Footer />
        </div>
        
    </div>
  )
}

export default page