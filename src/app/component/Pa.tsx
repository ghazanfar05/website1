import React from 'react';

const Pa  = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Our Pricing Is Simple</h1>
      <p className="text-center text-lg mb-16">No commitments. No credit cards required. Start your 14-day trial today!</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">SOLO</h2>
          <div className="text-5xl font-bold mb-4">$10</div>
          <p className="text-sm mb-4">PER MONTH</p>
          <ul className="list-disc pl-6 mb-8">
            <li>1 Project</li>
            <li>100 Hours of Tracked Time</li>
            <li>No Team Collaborators</li>
            <li>Email Support</li>
          </ul>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">GET STARTED NOW  </button>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">PRO</h2>
          <div className="text-5xl font-bold mb-4">$20</div>
          <p className="text-sm mb-4">PER MONTH</p>
          <ul className="list-disc pl-6 mb-8">
            <li>10 Projects</li>
            <li>Unlimited Hours</li>
            <li>No Team Collaborators</li>
            <li>Email Support</li>
          </ul>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">GET STARTED NOW  </button>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">TEAM</h2>
          <div className="text-5xl font-bold mb-4">$30</div>
          <p className="text-sm mb-4">PER MONTH</p>
          <ul className="list-disc pl-6 mb-8">
            <li>Unlimited Projects</li>
            <li>Unlimited Hours</li>
            <li>5 Team Collaborators</li>
            <li>Priority Email Support</li>
          </ul>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">GET STARTED NOW  </button>
        </div>
      </div>

      <p className="text-center text-gray-400 mt-8">Need Help? Reach us at contact@terminal.com</p>
    </div>
  );
}

export default Pa 