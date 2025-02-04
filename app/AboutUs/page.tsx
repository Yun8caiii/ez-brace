import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow p-8">
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start justify-center gap-8 w-full max-w-4xl">
          <div className="w-full md:w-1/2">
            <Image
              src="/Ceiling-Fan-man.jpg"
              alt="Ceiling Fan Man"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-slate-950 mb-4">About Ceiling Fan Man</h1>
            <p className="text-lg text-gray-700 mb-4">
              Ceiling Fan Man has over 20 years of experience in the industry. He has installed and repaired countless ceiling fans, ensuring that each one operates smoothly and safely. His expertise and dedication to quality workmanship have earned him a reputation as one of the best in the business.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Throughout his career, Ceiling Fan Man has always prioritized customer satisfaction. He takes the time to understand each client's needs and provides personalized solutions that meet their specific requirements. His attention to detail and commitment to excellence are evident in every project he undertakes.
            </p>
            <p className="text-lg text-gray-700">
              When he's not working, Ceiling Fan Man enjoys sharing his knowledge with others through workshops and online tutorials. He is passionate about helping people learn how to properly install and maintain their ceiling fans, ensuring that they can enjoy the benefits of a well-functioning fan for years to come.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
