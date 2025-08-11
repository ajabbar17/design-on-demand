import React from 'react'
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
        <Navbar />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default page