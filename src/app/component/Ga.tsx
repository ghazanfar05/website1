'use client'
import React from 'react';

const Ga = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-100 h-[400px] md:h-[300px] p-6 md:p-4">
    {/* Heading */}
    <h1 className="text-4xl md:text-5xl  text-gray-950 mb-4">
      Welcome to Our Service
    </h1>
  
    {/* Paragraph */}
    <p className="text-base md:text-lg text-black mb-6 text-center max-w-sm md:max-w-lg">
      We offer a variety of services to meet your needs. Whether you're looking
      for expert advice, personalized solutions, or just someone to help guide
      you, we're here to provide the support and services you need. Explore
      our offerings and find out how we can help you achieve your goals.
    </p>
  
    {/* Button */}
    <button className="px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white  rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
      Learn More
    </button>
  </section>
  
  );
};

export default Ga
