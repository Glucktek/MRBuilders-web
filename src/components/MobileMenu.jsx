import { useState } from "react";

const MobileMenu = ({ navItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Hamburger Button */}
      <button
        class="lg:hidden text-gray-800 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div class="lg:hidden absolute top-0 left-0 w-full bg-white shadow-lg z-50">
          <nav class="flex flex-col items-center space-y-4 p-4">
            {navItems.map((item) => (
              <div key={item.name} class="relative">
                <a
                  href={item.href}
                  class="text-lg text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300 font-bold py-2"
                >
                  {item.name}
                </a>
                {item.children && (
                  <div class="flex flex-col ml-4 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        class="text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300 py-2"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
