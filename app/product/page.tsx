'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Product() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow p-8">
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center md:items-start justify-center gap-8 w-full max-w-5xl">
          <div className="w-full md:w-1/2">
            <Image
              src="/ezbrace-product.png"
              alt="EZ-Brace Product"
              width={400}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">EZ-Brace Product</h1>
            <p className="text-lg text-gray-700 mb-2">SKU: EZB-101</p>
            <p className="text-lg text-gray-700 mb-2">Price: $24.99</p>
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="text-lg text-gray-700 mr-2">Quantity:</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                className="border rounded-md p-2 w-20"
                min="1"
              />
            </div>
            <a
              href="https://buy.stripe.com/14kaH835ZaM45u83ce"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Buy Now
            </a>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Product Details</h2>
            <p className="text-lg text-gray-700 mb-4">
              The EZ-Brace 101 is designed to provide superior support for your fixtures. Made from high-quality materials, it ensures durability and longevity. Easy to install and cost-effective, the EZ-Brace 101 is the perfect solution for all your support needs.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}