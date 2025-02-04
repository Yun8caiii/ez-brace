"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Navbar from "@/components/Navbar";

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
          <h1 className="absolute top-[220px] left-8 md:top-[170px] md:left-14 text-4xl md:text-6xl font-bold text-slate-950">
            Secure.
          </h1>
          <h1 className="absolute top-[270px] left-8 md:top-[220px] md:left-14 text-4xl md:text-6xl font-bold text-slate-950">
            Simple. Strong.
          </h1>
          <p className="absolute top-[330px] left-8 md:top-[280px] md:left-14 text-lg md:text-xl text-gray-900 mt-2">
            The ultimate support system for your fixtures.
          </p>
          <p className="absolute top-[380px] left-8 md:top-[330px] md:left-14 text-xl md:text-2xl font-bold text-indigo-950 mt-4">
            Starting at $24.99
          </p>
          <a
            href="https://buy.stripe.com/14kaH835ZaM45u83ce"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-800 text-white px-6 py-2 rounded-md mt-4 hover:bg-indigo-950 transition absolute top-[430px] left-8 md:top-[380px] md:left-14"
          >
            Buy Now
          </a>
          <div className="w-full lg:w-1/2 hidden lg:block">
            <Image
              src="/ezbrace-product.png"
              alt="EZ-Brace Product"
              width={325}
              height={350}
              className="absolute top-8 right-[136px] mt-6 mr-6 border-4 border-gray-300 rounded-lg bg-white"
            />
          </div>
        </header>

        {/* Product Showcase */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 p-8">
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center w-full md:w-1/3 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-gray-800">Durability</h2>
            <Image
              src="/muscle.png"
              alt="Durability"
              width={70}
              height={100}
              className="mt-4"
            />
            <p className="text-gray-600 mt-2">
              Tested to support 150 pounds, the EZ-Brace101 ensures reliable
              structural support. Made from high-quality materials, it is
              engineered for maximum strength and longevity.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center w-full md:w-1/3 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-gray-800">
              Easy of Installation
            </h2>
            <Image
              src="/easy-to-use.png"
              alt="Easy Installation"
              width={70}
              height={100}
              className="mt-4"
            />
            <p className="text-gray-600 mt-2">
              Designed for quick and hassle-free setup, the EZ-Brace 101 can be
              installed in minutes with minimal tools. The streamlined design
              allows for secure and efficient mounting.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center w-full md:w-1/3 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-gray-800">
              Cost-Effective
            </h2>
            <Image
              src="/payment.png"
              alt="Cost-Effective"
              width={70}
              height={100}
              className="mt-4"
            />
            <p className="text-gray-600 mt-2">
              Providing premium support at an affordable price, the EZ-Brace 101
              eliminates the need for costly reinforcements. Its durable build
              saves money on repairs and replacements over time.
            </p>
          </div>
        </section>
        {/* New Section */}
        <section className="flex flex-col items-center gap-12 p-8 bg-white">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl">
            <div className="w-full md:w-1/2">
              <Image
                src="/Ceiling-Fan-man.jpg"
                alt="new feature"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                New Feature
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                Discover the latest feature of the EZ-Brace101. This new
                addition enhances the functionality and usability of the
                product, making it even more versatile and reliable.
              </p>
              <p className="text-gray-600 text-lg">
                With this new feature, you can achieve better results with less
                effort. It&apos;s designed to provide maximum efficiency and
                convenience, ensuring that you get the best performance every
                time.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center gap-2 mb-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Product Showcase
          </h2>
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
                      src="/durability-brace.jpg"
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
                      src="/ez-brace1st.jpg"
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
                      src="/cost-effective.jpg"
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
