"use client"

import React from "react";
import Navbar from '@/components/Navbar';

export default function Contact() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="flex flex-col items-center justify-start flex-grow mt-8">
          <h1 className="text-6xl font-bold text-slate-950 mb-8">
            FIXTURE SUPPORT SYSTEMS
          </h1>
          <h2 className="text-4xl font-semibold text-slate-800 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            Email: support@fixturesupport.com
          </p>
          <p className="text-lg text-gray-700 mb-2">
            Phone: (123) 456-7890
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Address: 1234 Fixture St, Support City, SC 12345
          </p>
          <div className="w-full max-w-4xl h-64">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=1234+Fixture+St,+Support+City,+SC+12345&key=YOUR_API_KEY"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
