import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white max-w-screen md:px-12 lg:px-20 xl:px-32">
      <div className="container mx-auto flex flex-col lg:flex-row flex-wrap justify-between sm:px-0">
        {/* Our Offer Section */}
        <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
          <h2 className="text-yellow-500 text-xl font-bold text-center lg:text-left">
            Our Offer
          </h2>
          {/* Always visible content */}
          <div className="mt-4">
            <div className="grid grid-cols-2 gap-y-2 justify-center lg:justify-start">
              <ul className="text-center lg:text-left space-y-1">
                <li>About Us</li>
                <li>Blogs</li>
                <li>FAQs</li>
                <li>Reservation</li>
                <li>Contact Us</li>
              </ul>
              <ul className="text-center lg:text-left space-y-1">
                <li>Wishlist</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Services</li>
                <li>My Account</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="w-full lg:w-1/3 mb-4 lg:mb-0 text-center">
          <h2 className="text-yellow-500 text-xl font-bold">Contact Us</h2>
          {/* Always visible content */}
          <div className="mt-4">
            <p>12 Poor Street, New York, USA</p>
            <p>Hotline: +1 964 565 87652</p>
            <p>Email: hello@fafo.com</p>
            <div className="mt-4">
              <span>Follow Us:</span>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Open Hours Section (hidden on small devices) */}
        <div className="hidden lg:w-1/3 text-center lg:text-right md:block">
          <h2 className="text-yellow-500 text-xl font-bold">Open Hours</h2>
          {/* Always visible content */}
          <div className="mt-4">
            <ul className="mt-4 space-y-1">
              <li>Saturday: 08:00 - 23:00</li>
              <li>Sunday: 08:00 - 23:00</li>
              <li>Monday: 08:00 - 21:00</li>
              <li>Tuesday: 09:00 - 23:00</li>
              <li>Wednesday: 08:00 - 23:00</li>
              <li>Thursday: 08:00 - 23:00</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Centering the copyright text at the bottom */}
      <div className="flex justify-center mt-5 text-gray-400 mb-0 w-full">
        <p className="text-yellow-500">&#169; made by Sahil</p>
      </div>
    </footer>
  );
};

export default Footer;
