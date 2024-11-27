"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className=" bg-[#1b1f23] border-b border-b-[#ffffff14] fixed h-20 w-full z-10">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image src="/Final.png" width={130} className=' w-32 h-14' height={130}  alt="logo" />
          </div>
          <div className="hidden md:flex ml-32 space-x-4">
            <Link href="/" className="text-white text-lg font-semibold hover:text-gray-400">
              HOME
            </Link>
            <Link href="/about" className="text-white text-lg font-semibold hover:text-gray-400">
              ABOUT
            </Link>
            <Link href="/services" className="text-white text-lg font-semibold hover:text-gray-400">
              SERVICES
            </Link>
          
          </div>
          
          <div className="md:hidden flex items-center">
            <FiMenu
              className="text-2xl text-white cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
        </div>
      </div>

      {/* Sidebar */}
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
          <Link href="/" className="text-white font-semibold text-2xl hover:text-gray-400" onClick={toggleSidebar}>
            HOME
          </Link>
          <Link href="/about" className="text-white font-semibold text-2xl hover:text-gray-400" onClick={toggleSidebar}>
            ABOUT
          </Link>
          <Link href="/services" className="text-white font-semibold text-2xl hover:text-gray-400" onClick={toggleSidebar}>
            SERVICES
          </Link>
          
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
