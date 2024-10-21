import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
function About() {
  return (
    <>
      <div className="bg-black text-white flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 mt-10 gap-8">
        {/* Left Side: Image */}
        <div className="relative w-full lg:w-1/2">
          <img
            src="/images/aboutus.jpg" // Replace this URL with your image
            alt="Restaurant"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-bold">
            Good Food for Your All Day Good Mood
          </h1>
          <p className="text-gray-400 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque dolore nisi ipsa neque?
            Dolorem incidunt fugiat temporibus animi nobis, vero expedita voluptate dignissimos 
            officiis quis pariatur earum voluptas quia sed.
          </p>
          <p className="text-gray-400 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque dolore nisi ipsa neque? 
            Dolorem incidunt fugiat temporibus animi nobis, vero expedita voluptate dignissimos 
            officiis quis pariatur earum voluptas quia sed.
          </p>
          <div className="flex justify-center lg:justify-start space-x-8">
            {/* Icons with text */}
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-users text-3xl text-yellow-500"></i>
              
              <p className="mt-2">Experienced Chefs</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-utensils text-3xl text-yellow-500"></i>
              <p className="mt-2">Original Recipes</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-seedling text-3xl text-yellow-500"></i>
              <p className="mt-2">Fresh Ingredients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section: Order Food Online */}
      <div className="flex flex-col lg:flex-row items-center max-w-4xl mx-auto mt-10 p-5 bg-black text-white rounded-lg shadow-md" style={{ height: '80vh' }}>
        {/* Left Side: Image */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <img 
            src="/images/good_delivery.jpg" 
            alt="Food Delivery" 
            className="w-full h-full rounded-l-lg object-cover" 
          />
        </div>
        {/* Right Side: Content */}
        <div className="flex-1 p-5 flex flex-col justify-center w-full lg:w-1/2">
          <h2 className="text-3xl font-bold">Order Food Online with Zomato</h2>
          <p className="mt-2 text-lg">
            Discover a variety of delicious meals from your favorite restaurants, all at your fingertips!
          </p>
          <div className="mt-4 flex items-center space-x-4"> {/* Increased space between items */}
            {/* Google Play Store Link */}
            <a 
              href="https://play.google.com/store/apps/details?id=com.zomato" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition duration-200"
            >
              <img 
                src="/images/google-play-icon.png" // Replace with your Google Play icon path
                alt="Google Play Store" 
                className="w-8 h-8 mr-2" // Increased size of Google Play icon
              />
              Download
            </a>
            {/* Apple App Store Link */}
            <a 
              href="https://apps.apple.com/us/app/zomato/id505155122" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600 transition duration-200"
            >
              <img 
                src="/images/app-store-icon.png" // Replace with your App Store icon path
                alt="App Store" 
                className="w-8 h-8 mr-2" // Increased size of App Store icon
              />
              Download
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
