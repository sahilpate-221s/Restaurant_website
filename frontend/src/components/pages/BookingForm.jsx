import React, { useState } from 'react';
import { Transition } from '@headlessui/react'; // Importing Transition from Headless UI

const BookingForm = () => {
  const [isTableBooking, setIsTableBooking] = useState(true); // State to manage toggle

  const handleToggle = () => {
    setIsTableBooking(!isTableBooking);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black"> {/* Centering the form */}
      <div className="container p-5 w-full lg:w-2/3">
        <h1 className="text-2xl font-bold text-center mb-4 text-white">Booking Form</h1>

        <div className="flex justify-center mb-4">
          <button
            onClick={handleToggle}
            className={`px-4 py-2 mx-2 text-black rounded ${isTableBooking ? 'bg-[#ffd043] ' : 'bg-gray-400'}`}
          >
            Book Table
          </button>
          <button
            onClick={handleToggle}
            className={`px-4 py-2 mx-2 text-black rounded ${!isTableBooking ? 'bg-[#ffd043]' : 'bg-gray-400 '}`}
          >
            Book Hall
          </button>
        </div>

        {/* Animation Container for Table Booking */}
        <Transition
          show={isTableBooking}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <form className="bg-black text-white w-full p-6 rounded-lg shadow-lg border border-gray-600 mb-4 relative">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="Name"
                  className="w-full p-2 bg-black text-white rounded border border-gray-600 placeholder-gray-500 placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  style={{ caretColor: 'white' }} // Change caret color to white
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block mb-2">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Last Name"
                  className="w-full p-2 bg-black text-white rounded border border-gray-600 placeholder-gray-500 placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  style={{ caretColor: 'white' }} // Change caret color to white
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone"
                  className="w-full p-2 bg-black text-white rounded border border-gray-600 placeholder-gray-500 placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  style={{ caretColor: 'white' }} // Change caret color to white
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full p-2 bg-black text-white rounded border border-gray-600 placeholder-gray-500 placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  style={{ caretColor: 'white' }} // Change caret color to white
                />
              </div>
              <div className="relative">
                <label htmlFor="date" className="block mb-2">Date</label>
                <input
                  type="date"
                  id="date"
                  className="w-full p-2 bg-black text-white rounded border border-gray-600 placeholder-gray-500 placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  style={{ caretColor: 'white' }} // Change caret color to white
                />
                <div className="absolute right-3 top-10 text-gray-400 pointer-events-none">📅</div>
              </div>
              <div className="relative">
                <label htmlFor="time" className="block mb-2">Time</label>
                <input
                  type="time"
                  id="time"
                  className="w-full p-2 bg-black text-white rounded border border-gray-600 placeholder-gray-500 placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  style={{ caretColor: 'white' }} // Change caret color to white
                />
                <div className="absolute right-3 top-10 text-gray-400 pointer-events-none">⏰</div>
              </div>
              <div>
                <label htmlFor="number-people" className="block mb-2">Number of People</label>
                <input
                  type="number"
                  id="number-people"
                  placeholder="Number of People"
                  className="w-full p-2 bg-black text-white rounded border border-gray-600 placeholder-gray-500 placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  style={{ caretColor: 'white' }} // Change caret color to white
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-yellow-300 text-black font-bold py-2 rounded hover:bg-[#ffd043]"
            >
              Book Table
            </button>
          </form>
        </Transition>

        {/* Animation Container for Hall Booking */}
        <Transition
          show={!isTableBooking}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <form className="bg-black text-white w-full p-6 rounded-lg shadow-lg border border-gray-600 mb-4 relative">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name-hall" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name-hall"
                  placeholder="Name"
                  className="w-full p-2 bg-black text-white rounded border border-gray-600 placeholder-gray-500 placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  style={{ caretColor: 'white' }} // Change caret color to white
                />
              </div>
              <div>
                <label htmlFor="last-name-hall" className="block mb-2">Last Name</label>
                <input
                  type="text"
                  id="last-name-hall"
                  placeholder="Last Name"
                  className="w-full p-2 bg-black text-white rounded border border-gray-600 placeholder-gray-500 placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  style={{ caretColor: 'white' }} // Change caret color to white
                />
              </div>
              <div>
                <label htmlFor="phone-hall" className="block mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone-hall"
                  placeholder="Phone"
                  className="w-full p-2 bg-black text-white rounded border border-gray-600 placeholder-gray-500 placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  style={{ caretColor: 'white' }} // Change caret color to white
                />
              </div>
              <div>
                <label htmlFor="email-hall" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email-hall"
                  placeholder="Email"
                  className="w-full p-2 bg-black text-white rounded border border-gray-600 placeholder-gray-500 placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  style={{ caretColor: 'white' }} // Change caret color to white
                />
              </div>
              <div className="relative">
                <label htmlFor="date-hall" className="block mb-2">Date</label>
                <input
                  type="date"
                  id="date-hall"
                  className="w-full p-2 bg-black text-white rounded border border-gray-600 placeholder-gray-500 placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  style={{ caretColor: 'white' }} // Change caret color to white
                />
                <div className="absolute right-3 top-10 text-gray-400 pointer-events-none">📅</div>
              </div>
              <div className="relative">
                <label htmlFor="time-hall" className="block mb-2">Time</label>
                <input
                  type="time"
                  id="time-hall"
                  className="w-full p-2 bg-black text-white rounded border border-gray-600 placeholder-gray-500 placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  style={{ caretColor: 'white' }} // Change caret color to white
                />
                <div className="absolute right-3 top-10 text-gray-400 pointer-events-none">⏰</div>
              </div>
              <div>
                <label htmlFor="guests-hall" className="block mb-2">Number of Guests</label>
                <input
                  type="number"
                  id="guests-hall"
                  placeholder="Number of Guests"
                  className="w-full p-2 bg-black text-white rounded border border-gray-600 placeholder-gray-500 placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  style={{ caretColor: 'white' }} // Change caret color to white
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-yellow-300 text-black font-bold py-2 rounded hover:bg-[#ffd043]"
            >
              Book Hall
            </button>
          </form>
        </Transition>
      </div>
    </div>
  );
};

export default BookingForm;
