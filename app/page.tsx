'use client'

import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Hero Section min-h-[706px] */}
        <header
          className="relative bg-white shadow-md py-48 px-8 text-center bg-cover bg-top min-h-[660px] rounded-lg m-6"
          style={{ backgroundImage: "url('/ezbrace-bg-image.png')" }}
        >
          <h1 className="absolute top-[170px] left-14 text-6xl font-bold text-slate-950">
            Secure.
          </h1>
          <h1 className="absolute top-[220px] left-14 text-6xl font-bold text-slate-950">
            Simple. Strong.
          </h1>
          <p className="absolute top-[280px] left-14 text-gray-900 mt-2">
            The ultimate support system for your fixtures.
          </p>
          <p className="absolute top-[330px] left-14 text-2xl font-bold text-indigo-950 mt-4">
            Starting at $24.99
          </p>
          <button className="bg-indigo-800 text-white px-6 py-2 rounded-md mt-4 hover:bg-indigo-950 transition absolute top-[380px] left-14">
            Buy Now
          </button>
          <Image
            src="/ezbrace-product.png"
            alt="EZ-Brace Product"
            width={430}
            height={400}
            className="absolute top-8 right-[136px] mt-6 mr-6 border-4 border-gray-300 rounded-lg bg-white p-2"
          />
        </header>

        {/* Product Showcase */}
        <section className="flex flex-col items-center gap-12 p-8">
          <Carousel
            className="w-full max-w-5xl"
            plugins={[
              Autoplay({
                delay: 2500,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center md:items-start justify-center gap-8 w-full">
                  <div className="w-full md:w-1/2">
                    <Image
                      src="/durability-brace.png"
                      alt="Durability"
                      width={400}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                      Durability
                    </h2>
                    <p className="text-gray-600 text-lg">
                      Tested to support 150 pounds, the EZ-Brace101 ensures
                      reliable structural support. Made from high-quality
                      materials, it is engineered for maximum strength and
                      longevity.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row-reverse items-center md:items-start justify-center gap-8 w-full">
                  <div className="w-full md:w-1/2">
                    <Image
                      src="/ez-brace1st.png"
                      alt="Easy Installation"
                      width={400}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                      Ease of Installation
                    </h2>
                    <p className="text-gray-600 text-lg">
                      Designed for quick and hassle-free setup, the EZ-Brace 101
                      can be installed in minutes with minimal tools. The
                      streamlined design allows for secure and efficient
                      mounting.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center md:items-start justify-center gap-8 w-full">
                  <div className="w-full md:w-1/2">
                    <Image
                      src="/cost-effective.png"
                      alt="Cost-Effective"
                      width={400}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                      Cost-Effective
                    </h2>
                    <p className="text-gray-600 text-lg">
                      Providing premium support at an affordable price, the
                      EZ-Brace 101 eliminates the need for costly
                      reinforcements. Its durable build saves money on repairs
                      and replacements over time.
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </div>
      <Footer />
    </div>
  );
}
