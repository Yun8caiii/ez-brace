import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-8 flex flex-col lg:flex-row justify-between items-center">
      <div className="flex justify-between w-full lg:w-auto">
        <div className="text-2xl font-bold text-gray-900">
          <Link href="/">Fixture Support Systems</Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
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
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <ul
        className={`flex-col lg:flex-row lg:flex space-x-6 text-gray-700 font-medium transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "block" : "hidden"
        } lg:block lg:space-x-6 lg:mr-48 mt-4 lg:mt-0`}
      >
        <li className="ml-6 lg:ml-0">
          <Link href="/" className="hover:text-blue-500 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/product" className="hover:text-blue-500 transition">
            Product
          </Link>
        </li>
        <li>
          <Link href="/AboutUs" className="hover:text-blue-500 transition">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-500 transition">
            Contact
          </Link>
        </li>
      </ul>
      <a
        href="https://buy.stripe.com/14kaH835ZaM45u83ce"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition hidden lg:block"
      >
        Buy Now
      </a>
    </nav>
  );
}
