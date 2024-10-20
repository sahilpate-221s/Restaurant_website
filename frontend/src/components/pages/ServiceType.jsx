import React from 'react';

function ServiceType() {
  return (
    <section className="bg-black text-white py-10 px-4 lg:px-24 xl:px-36">
      <div className="bg-black">
        {/* Centered Heading */}
        <h2 className="text-4xl font-bold text-center mb-8">We Offer 3 Kinds Of Services</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1: Dine In */}
          <div className="bg-black border border-gray-600 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 mx-auto sm:mx-0 w-full sm:w-72 lg:w-full cursor-pointer"
               style={{ boxShadow: '0 2px 8px rgba(255, 255, 255, 0.2)' }}>
            <img src="/images/dineIn.png" alt="Dine In" className="w-3/4 h-auto rounded-lg mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center">1. Dine In</h3>
            <p className="text-gray-400">Choose Your Best Combos From The Thousands Of Exciting Items.</p>
          </div>

          {/* Service Card 2: Take Away */}
          <div className="bg-black border border-gray-600 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 mx-auto sm:mx-0 w-full sm:w-72 lg:w-full cursor-pointer"
               style={{ boxShadow: '0 2px 8px rgba(255, 255, 255, 0.2)' }}>
            <img src="/images/takeAway.png" alt="Take Away" className="w-3/4 h-auto rounded-lg mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center">2. Take Away</h3>
            <p className="text-gray-400">Choose Your Best Combos From The Thousands Of Exciting Items.</p>
          </div>

          {/* Service Card 3: Home Delivery */}
          <div className="bg-black border border-gray-600 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 mx-auto sm:mx-0 w-full sm:w-72 lg:w-full cursor-pointer"
               style={{ boxShadow: '0 2px 8px rgba(255, 255, 255, 0.2)' }}>
            <img src="/images/orderOnline.png" alt="Home Delivery" className="w-3/4 h-auto rounded-lg mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center">3. Home Delivery</h3>
            <p className="text-gray-400">Choose Your Best Combos From The Thousands Of Exciting Items.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceType;
