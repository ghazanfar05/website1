import React from 'react'

export const Ha = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center h-screen overflow-hidden sm:mt-14">
    {/* Image Section */}
    <div className="relative lg:w-1/2 h-[340px] lg:h-auto flex justify-center items-center px-4 py-1">
      <img src="dev2.png" alt="Descriptive image" className="object-cover  w-full rounded-md h-full lg:w-auto lg:h-auto transition-transform duration-300 ease-in-out transform hover:scale-105" />
    </div>
    {/* Text Section */}
    <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start lg:w-1/2 lg:pl-16 p-4">
      <div className="max-w-lg text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Architectural Styles:</h1>
        <p className="text-lg md:text-xl mb-6 text-gray-700">
          Reflecting personal taste, whether modern, traditional, colonial, or farmhouse.
          Landscaping: Gardens, walkways, and well-placed trees and shrubs add beauty and can provide privacy.
          Covered Entrances: Offers protection from the elements and adds a welcoming touch.
          Garage Design: Includes features like built-in storage or a workshop area, in addition to parking space.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
          Call to Action
        </button>
      </div>
    </div>
  </section>
  )
}
export default Ha