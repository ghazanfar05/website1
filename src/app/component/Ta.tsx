import { useState } from 'react';

const Ta = () => {
 

  return (
    <footer className="bg-gray-800 text-gray-400 py-10 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg  text-gray-200 mb-4  transform transition-transform hover:scale-105">Company</h3>
          <ul>
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/" className="hover:text-gray-300">About Terminal</a></li>
            <li><a href="/" className="hover:text-gray-300">Services</a></li>
            <li><a href="/" className="hover:text-gray-300">Plans & Pricing</a></li>
            <li><a href="/" className="hover:text-gray-300">Blog</a></li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="text-lg  text-gray-200 mb-4  transform transition-transform hover:scale-105">Get Help</h3>
          <ul>
            <li><a href="/" className="hover:text-gray-300">Knowledge Base</a></li>
            <li><a href="/" className="hover:text-gray-300">Frequently Asked </a></li>
            <li><a href="/" className="hover:text-gray-300">Forum</a></li>
            <li><a href="/" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="text-lg  text-gray-200 mb-4  transform transition-transform hover:scale-105">Boring Stuff</h3>
          <ul>
            <li><a href="/" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="/" className="hover:text-gray-300">Terms of Service</a></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg  text-gray-200 mb-4  transform transition-transform hover:scale-105">Contact Us</h3>
          <ul>
            <li><a href="/" className="hover:text-gray-300">0315-2430829</a></li>
            <li><a href="/" className="hover:text-gray-300">G.mail.com</a></li>
          </ul>
        </div>

            
      </div>
    </footer>
  );
}

export default Ta