'use client'
import Image from "next/image";
import React, { useState, useEffect } from 'react';

export const Navbar = () => {
  const images = [
    { src: '/dev3.png', alt: 'Image 1', width: 1920, height: 300 },
    { src: '/dev4.png', alt: 'Image 2', width: 1920, height: 300 },
    { src: '/dev5.png', alt: 'Image 3', width: 1920, height: 300 },
    { src: '/dev6.png', alt: 'Image 4', width: 1920, height: 300 },
    { src: '/dev7.png', alt: 'Image 5', width: 1920, height: 300 },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden h-screen">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1920}
              height={300}
              quality={100}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <section className="flex flex-col items-center justify-center min-h-screen inset-0 absolute p-6 ">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 text-center">
          Welcome to Our Service
        </h1>

        {/* Paragraph */}
        <p className="text-base md:text-lg text-white mb-6 text-center max-w-md">
          We offer a variety of services to meet your needs. Whether you're looking
          for expert advice, personalized solutions, or just someone to help guide
          you, we're here to provide the support and services you need. Explore
          our offerings and find out how we can help you achieve your goals.
        </p>

        {/* Button */}
        <button className="px-4 py-2 md:px-6 md:py-3 bg-blue-600  text-white  rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
          Learn More
        </button>
      </section>

    </div>
  )
}
export default Navbar;
