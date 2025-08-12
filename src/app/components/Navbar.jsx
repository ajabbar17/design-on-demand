"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleServicesDropdown = () =>
    setServicesDropdownOpen(!servicesDropdownOpen);

  const services = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Web Design", href: "/services/web-design" },
    { name: "Branding", href: "/services/branding" },
    { name: "Marketing", href: "/services/marketing" },
    { name: "Illustration", href: "/services/illustration" },
  ];

  return (
    <div className="fixed top-0 w-full px-2 z-40">
      <div className="backdrop-blur-lg  border border-[#00000029] rounded-full mx-auto mt-4 max-w-xl px-6 sm:px-8 py-4 shadow-xl shadow-black/10 flex justify-between items-center">
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-xl items-center mx-auto">
          <Link
            href="/"
            className="text-black  font-semibold hover:text-red-800 transition-colors duration-300"
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="text-black font-semibold hover:text-red-800 transition-colors duration-300"
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            className="text-black font-semibold hover:text-red-800 transition-colors duration-300"
          >
            CONTACT
          </Link>
          <div
            className="relative group"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <div className="flex items-center text-black font-semibold hover:text-red-800 cursor-pointer transition-colors duration-300">
              SERVICES
              <FiChevronDown className="ml-1" />
            </div>
            {servicesDropdownOpen && (
              <div className="absolute top-5 left-0 mt-2 w-48 rounded-2xl bg-white backdrop-blur-sm border border-white/30 shadow-xl z-50">
                {services.map((service, index) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`block px-4 py-3 text-black hover:bg-gray-200 hover:text-red-800  transition-colors duration-300 ${
                      index === 0 ? "rounded-t-2xl" : ""
                    } ${index === services.length - 1 ? "rounded-b-2xl" : ""}`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
            
          </div>
          
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <FiMenu
            className="text-gray-900 text-2xl cursor-pointer hover:text-emerald-600 transition-colors duration-300"
            onClick={toggleSidebar}
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white/90 backdrop-blur-xl border-r border-white/50 shadow-2xl shadow-black/20 z-50 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white/50">
          <h2 className="text-gray-900 text-xl font-semibold">Menu</h2>
          <AiOutlineClose
            className="text-gray-900 text-2xl cursor-pointer hover:text-emerald-600 transition-colors duration-300"
            onClick={toggleSidebar}
          />
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          <Link
            href="/"
            onClick={toggleSidebar}
            className="text-lg text-gray-900 hover:text-emerald-600 transition-colors duration-300"
          >
            HOME
          </Link>
          <Link
            href="/about"
            onClick={toggleSidebar}
            className="text-lg text-gray-900 hover:text-emerald-600 transition-colors duration-300"
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            onClick={toggleSidebar}
            className="text-lg text-gray-900 hover:text-emerald-600 transition-colors duration-300"
          >
            CONTACT
          </Link>
          <div>
            <div
              className="flex justify-between items-center text-lg text-gray-900 hover:text-emerald-600 cursor-pointer transition-colors duration-300"
              onClick={toggleServicesDropdown}
            >
              SERVICES
              <FiChevronDown
                className={`transition-transform ${
                  servicesDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {servicesDropdownOpen && (
              <div className="mt-2 pl-4 space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={toggleSidebar}
                    className="block text-gray-800 hover:text-emerald-600 transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Background Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Navbar;
