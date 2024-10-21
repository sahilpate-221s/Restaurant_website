import React from "react";

function BookTable() {
  return (
    <div className="container mx-auto py-20 bg-black text-white px-4 lg:px-20 xl:px-32 max-w-screen">
      <h1 className="text-center text-3xl font-bold mb-10">BOOK A TABLE</h1>

      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <form className="bg-black text-white w-full lg:w-2/3 p-6 rounded-lg shadow-lg mb-4 lg:mb-0 border border-gray-600 relative">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                id="first-name"
                placeholder="Name"
                className="w-full p-2 bg-black text-white rounded border border-gray-600 placeholder-gray-500 placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                style={{ caretColor: 'white' }} // Change caret color to white
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                placeholder="Last Name"
                className="w-full p-2 bg-black text-white rounded border border-gray-600 placeholder-gray-500 placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                style={{ caretColor: 'white' }} // Change caret color to white
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Phone"
                className="w-full p-2 bg-black text-white rounded border border-gray-600 placeholder-gray-500 placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                style={{ caretColor: 'white' }} // Change caret color to white
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full p-2 bg-black text-white rounded border border-gray-600 placeholder-gray-500 placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                style={{ caretColor: 'white' }} // Change caret color to white
              />
            </div>
            <div className="relative">
              <label htmlFor="date" className="block mb-2">
                Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full p-2 bg-black text-white rounded border border-gray-600 placeholder-gray-500 placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                style={{ caretColor: 'white' }} // Change caret color to white
              />
              <div className="absolute right-3 top-10 text-gray-400 pointer-events-none">
                📅 {/* Add a calendar icon here */}
              </div>
            </div>
            <div className="relative">
              <label htmlFor="time" className="block mb-2">
                Time
              </label>
              <input
                type="time"
                id="time"
                className="w-full p-2 bg-black text-white rounded border border-gray-600 placeholder-gray-500 placeholder-opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                style={{ caretColor: 'white' }} // Change caret color to white
              />
              <div className="absolute right-3 top-10 text-gray-400 pointer-events-none">
                ⏰ {/* Add a clock icon here */}
              </div>
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
            BOOK A TABLE
          </button>
        </form>

        <div className="bg-black text-white w-full lg:w-1/3 p-6 rounded-lg shadow-lg border border-gray-600 flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold mb-4 text-center text-yellow-300">OPENING HOURS</h2>
          <p className="mb-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae
            nulla, provident laudantium voluptatibus eligendi.
          </p>
          <ul className="text-center">
            <li>Monday - Friday: 8 AM - 6 PM</li>
            <li>Saturday: 9 AM - 5 PM</li>
            <li>Sunday: 9 AM - 4 PM</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BookTable;
