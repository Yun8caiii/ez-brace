import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-900">
        <Link href="/">Fixture Support Systems</Link>
      </div>
      <ul className="flex space-x-6 text-gray-700 font-medium mr-48">
        <li>
          <Link href="/" className="hover:text-blue-500 transition">
            Home
          </Link>
        </li>
        <li>
          <a href="/product" className="hover:text-blue-500 transition">
            Product
          </a>
        </li>
        <li>
          <a href="/AboutUs" className="hover:text-blue-500 transition">
            About Us
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-blue-500 transition">
            Contact
          </a>
        </li>
      </ul>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
        Buy Now
      </button>
    </nav>
  );
}
