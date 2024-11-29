"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiChevronDown } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const services = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Web Design', href: '/services/web-design' },
    { name: 'Branding', href: '/services/branding' },
    { name: 'Marketing', href: '/services/marketing' },
    { name: 'Illustration', href: '/services/illustration' },
    { name: 'Video Editing', href: '/services/video-editing' }
  ];

  return (
    <div className="bg-[#1b1f23] border-b border-b-[#ffffff14] fixed h-20 w-full z-40">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image 
              src="/Final.png" 
              width={130} 
              className='w-32 h-14' 
              height={130} 
              alt="logo" 
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex ml-32 space-x-4 items-center">
            <Link href="/" className="text-white text-lg font-semibold hover:text-gray-400">
              HOME
            </Link>
            <Link href="/about" className="text-white text-lg font-semibold hover:text-gray-400">
              ABOUT
            </Link>
            
            {/* Desktop Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <div className="flex items-center text-white text-lg font-semibold hover:text-gray-400 cursor-pointer">
                SERVICES
                <FiChevronDown className="ml-1" />
              </div>
              {servicesDropdownOpen && (
                <div
               
                className="absolute top-full -left-20   w-44 bg-[#1b1f23] border border-[#ffffff14] rounded-md shadow-lg"
                
                >
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-white hover:bg-[#2c3035] transition duration-200"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <FiMenu
              className="text-2xl text-white cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1b1f23] shadow-lg z-20 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl text-white font-semibold">Menu</h2>
          <AiOutlineClose
            className="text-2xl cursor-pointer text-white"
            onClick={toggleSidebar}
          />
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          <Link 
            href="/" 
            className="text-white font-semibold text-2xl hover:text-gray-400" 
            onClick={toggleSidebar}
          >
            HOME
          </Link>
          <Link 
            href="/about" 
            className="text-white font-semibold text-2xl hover:text-gray-400" 
            onClick={toggleSidebar}
          >
            ABOUT
          </Link>
          
          {/* Mobile Services Dropdown */}
          <div>
            <div 
              className="text-white font-semibold text-2xl hover:text-gray-400 flex items-center justify-between"
              onClick={toggleServicesDropdown}
            >
              SERVICES
              <FiChevronDown 
                className={`transform transition-transform ${
                  servicesDropdownOpen ? 'rotate-180' : 'rotate-0'
                }`} 
              />
            </div>
            {servicesDropdownOpen && (
              <div className="pl-4  mt-2 space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block text-white text-xl hover:text-gray-400"
                    onClick={toggleSidebar}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Background overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Navbar;