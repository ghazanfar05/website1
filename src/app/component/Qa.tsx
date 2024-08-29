import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Qa = () => {
  return (
    <div className="bg-gray-800 text-gray-300 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Cloud Computing</h1>
        <div className="flex flex-wrap justify-center mb-8 space-x-4 space-y-4">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            UI/UX Design
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Web Design
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            News
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-gray-600 rounded-lg p-8 transform transition-transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">
              Unveiling the Secrets of Intuitive Interface Design
            </h2>
            <p className="mb-4">
              What makes an interface truly intuitive? Join us as we uncover the secrets behind designing interfaces that users instantly understand and navigate. We’ll explore design principles, user research methods, and cognitive psychology, providing you with the tools you need to create interfaces that feel natural, intuitive, and effective.
            </p>
            <a href="#" className="text-green-500 hover:underline">
              Learn More
            </a>
          </div>
          <div className="bg-gray-600 rounded-lg p-8 transform transition-transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">
              The Power of Storytelling in UX: Creating Memorable Experiences
            </h2>
            <p className="mb-4">
              Stories have the ability to capture and connect with people on a profound level. In this article, we explore how incorporating storytelling techniques in UX design can transform interfaces into memorable experiences. Discover how to craft narratives that engage users, evoke emotions, and leave a lasting impact.
            </p>
            <a href="#" className="text-green-500 hover:underline">
              Learn More
            </a>
          </div>
          <div className="bg-gray-600 rounded-lg p-8 transform transition-transform hover:scale-105">
            <h2 className="text-2xl mb-4">
              The Power of Storytelling in UX: Creating Memorable Experiences
            </h2>
            <p className="mb-4">
              Stories have the ability to capture and connect with people on a profound level. In this article, we explore how incorporating storytelling techniques in UX design can transform interfaces into memorable experiences. Discover how to craft narratives that engage users, evoke emotions, and leave a lasting impact.
            </p>
            <a href="#" className="text-green-500 hover:underline">
              Learn More
            </a>
          </div>
          <div className="bg-gray-600 rounded-lg p-8 transform transition-transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">
              The Science Behind Color Psychology in UI Design
            </h2>
            <p className="mb-4">
              Colors have a profound impact on our emotions and behaviors. Join us as we explore the fascinating realm of color psychology and its application in UI design. Discover how to strategically choose and utilize colors to evoke specific emotions, convey brand personality, and create visually appealing and harmonious interfaces.
            </p>
            <a href="#" className="text-green-500 hover:underline">
              Learn More
            </a>
          </div>
        </div>
        <div className="bg-gray-600 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Sign Up to the Weekly Newsletter
          </h2>
          <p className="mb-4">
            Get insights about everything the Design world has to offer.
          </p>
          <input type="text" placeholder="ghazan@email.com" className="bg-gray-800 rounded-lg px-4 py-2 mb-4 w-full" />
          <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">
            Contact Me
          </button>
        </div>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl text-center mb-8">Latest Work</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-600 rounded-lg shadow-md p-6 transform transition-transform hover:scale-105">
              <img src="dev1.png" alt="Project 1" className="rounded-lg mb-4" />
              <h2 className="text-xl mb-2">Project 1</h2>
              <p className="text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-gray-600 rounded-lg shadow-md p-6 transform transition-transform hover:scale-105">
              <img src="dev2.png" alt="Project 2" className="rounded-lg mb-4" />
              <h2 className="text-xl mb-2">Project 2</h2>
              <p className="text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-gray-600 rounded-lg shadow-md p-6 transform transition-transform hover:scale-105">
              <img src="dev3.png" alt="Project 3" className="rounded-lg mb-4" />
              <h2 className="text-xl mb-2">Project 3</h2>
              <p className="text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-gray-600 rounded-lg shadow-md p-6 transform transition-transform hover:scale-105">
              <img src="dev4.png" alt="Project 4" className="rounded-lg mb-4" />
              <h2 className="text-xl mb-2">Project 4</h2>
              <p className="text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-gray-600 rounded-lg shadow-md p-6 transform transition-transform hover:scale-105">
              <img src="dev5.png" alt="Project 5" className="rounded-lg mb-4" />
              <h2 className="text-xl mb-2">Project 5</h2>
              <p className="text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-gray-600 rounded-lg shadow-md p-6 transform transition-transform hover:scale-105">
              <img src="dev6.png" alt="Project 6" className="rounded-lg mb-4" />
              <h2 className="text-xl mb-2">Project 6</h2>
              <p className="text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Insert
          </button>
        </div>
      </div>
      <footer className="bg-gray-800 py-4 text-center text-gray-400 border-t">
        <div className="container mx-auto px-4">
          <p>&copy; All rights reserved &copy;</p>
          <ul className="flex justify-center mt-2 space-x-4">
            <li>
              <a href="#" className="hover:text-gray-100">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Qa;
