import React from "react";
import logo from "../assets/1.png";

const Header = () => {
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

  return (
    <header className="flex items-center shadow-lg shadow-gray-500 justify-between p-4 h-28 bg-white text-gray-800 font-sans relative">
      {/* Logo / Site Name */}
      <div>
        <a href="/">
          <img src={logo.src} alt="MR Builders" className="h-36 w-64" />
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-4">
        {navItems.map((item, index) => (
          <div key={index} className="relative group">
            {/* Parent Link */}
            <a
              href={item.href}
              className="text-lg text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300 flex items-center rounded font-bold px-4 py-2"
            >
              {item.name}
              {item.children && (
                <svg
                  className="w-4 h-4 ml-1 transition-transform transform group-hover:rotate-180"
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
              )}
            </a>

            {/* Dropdown Menu */}
            {item.children && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                {item.children.map((child, childIndex) => (
                  <a
                    key={childIndex}
                    href={child.href}
                    className="block rounded px-4 py-2 text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300"
                  >
                    {child.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Contact Button */}
      <div>
        <a
          href="tel:5555555555"
          className="text-lg bg-gray-800 hover:bg-white hover:text-gray-800 text-white font-bold px-4 py-2 rounded transition duration-300"
        >
          <i className="fas fa-phone-alt mr-2"></i> (555) 555-5555
        </a>
      </div>
    </header>
  );
};

export default Header;
