import React, { useState } from "react";
import logo from "../assets/1.png";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Residential",
      href: "/residential",
      children: [
        { name: "Roofing", href: "/residential/roofing" },
        { name: "Windows & Doors", href: "/residential/windows-doors" },
        { name: "Siding & Gutters", href: "/residential/siding-gutters" },
        { name: "New Construction", href: "/residential/new-construction" },
      ],
    },
    {
      name: "Commercial",
      href: "/commercial",
      children: [
        { name: "Roofing", href: "/commercial/roofing" },
        { name: "Renovations", href: "/commercial/renovations" },
        { name: "New Construction", href: "/commercial/new-construction" },
      ],
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    // Reset submenu when closing sidebar
    if (isOpen) setOpenSubmenu(null);
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="block lg:hidden fixed top-4 right-4 z-50 p-2 bg-gray-800 rounded text-white"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b border-gray-200 flex justify-center items-center">
            <a href="/">
              <img src={logo.src} alt="MR Builders" className="h-32 w-auto" />
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex-grow overflow-y-auto">
            <ul className="py-4">
              {navItems.map((item, index) => (
                <li key={index} className="px-4 py-2">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className="w-full flex items-center justify-between text-gray-800 font-bold hover:text-gray-600 transition-colors text-xl"
                      >
                        <span>{item.name}</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${openSubmenu === index ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>

                      {/* Submenu */}
                      <div
                        className={`mt-2 ml-4 space-y-2 ${openSubmenu === index ? "block" : "hidden"}`}
                      >
                        {item.children.map((child, childIndex) => (
                          <a
                            key={childIndex}
                            href={child.href}
                            className="block py-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded px-2 transition-colors text-xl"
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-gray-800 font-bold hover:text-gray-600 transition-colors text-xl"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Button */}
          <div className="p-4 border-t border-gray-200">
            <a
              href="tel:5024456451"
              className="block w-full text-center bg-gray-800 hover:bg-gray-700 text-white font-bold px-4 py-2 rounded transition-colors"
            >
              <i className="fas fa-phone-alt mr-2"></i> (502) 445-6451
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
