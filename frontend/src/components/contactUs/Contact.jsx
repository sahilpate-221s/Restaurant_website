import React from 'react'

function Contact() {
  return (
    <div className="bg-black text-white">
      {/* Address Cards Section */}
      <div className="container mx-auto p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="border border-dashed border-gray-400 p-5">
            <h2 className="border-b border-dashed text-3xl pb-3 flex items-center justify-center">Address 1</h2>
            <div className="border-b border-dashed p-3">
              <p>Address</p>
              <p>12 padss</p>
            </div>
            <div className="border-b border-dashed p-3">
              <p>Email</p>
              <p>12@email.com</p>
            </div>
            <div className="border-b border-dashed p-3">
              <p>Phone number</p>
              <p>1245345345</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-dashed border-gray-400 p-5">
            <h2 className="border-b border-dashed text-3xl pb-3 flex items-center justify-center">Address 2</h2>
            <div className="border-b border-dashed p-3">
              <p>Address</p>
              <p>14 Someplace Ave</p>
            </div>
            <div className="border-b border-dashed p-3">
              <p>Email</p>
              <p>14@email.com</p>
            </div>
            <div className="border-b border-dashed p-3">
              <p>Phone number</p>
              <p>9876543210</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border border-dashed border-gray-400 p-5">
            <h2 className="border-b border-dashed text-3xl pb-3 flex items-center justify-center">Address 3</h2>
            <div className="border-b border-dashed p-3">
              <p>Address</p>
              <p>15 Random Road</p>
            </div>
            <div className="border-b border-dashed p-3">
              <p>Email</p>
              <p>15@email.com</p>
            </div>
            <div className="border-b border-dashed p-3">
              <p>Phone number</p>
              <p>1234567890</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto p-10">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left section: Form (2/3 of the width) */}
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Leave A Message</h2>
            <p className="mb-4">Your email address will not be published. Required fields are marked *</p>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Name*</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full p-2 bg-black border border-dashed border-gray-400 rounded-full focus:outline-none"
                    style={{ height: '40px' }}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email*</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full p-2 bg-black border border-dashed border-gray-400 rounded-full focus:outline-none"
                    style={{ height: '40px' }}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block mb-1">Phone*</label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="w-full p-2 bg-black border border-dashed border-gray-400 rounded-full focus:outline-none"
                    style={{ height: '40px' }}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-1">Subject*</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Enter the subject"
                    className="w-full p-2 bg-black border border-dashed border-gray-400 rounded-full focus:outline-none"
                    style={{ height: '40px' }}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-1">Your Message*</label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  className="w-full p-6 bg-black border border-dashed border-gray-400 rounded-full focus:outline-none"
                  rows="3"
                  style={{ height: '80px' }}
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms" className="inline ml-2">
                  Accept <a href="#" className="text-[#FFCC33]">Terms & Conditions</a> and <a href="#" className="text-[#FFCC33]">Privacy Policy</a>
                </label>
              </div>
              <button type="submit" className="w-full md:w-auto bg-black text-white border border-white px-6 py-3 rounded-full hover:bg-[#FFCC33] hover:text-black">
                Send A Message
              </button>
            </form>
          </div>

          {/* Right section: Contact Information (1/3 of the width) */}
          <div className="md:w-1/3 border border-dashed border-gray-400 p-4 h-2/3 mt-3">
            <h2 className="text-2xl font-bold mb-4">Main Head Office</h2>
            <div className="mb-4">
              <p className="font-bold">Address</p>
              <p>12 Poor Street, New York, USA</p>
            </div>
            <div className="mb-4">
              <p className="font-bold">E-mail</p>
              <p><a href="mailto:hello@fafo.com" className="text-blue-400">hello@fafo.com</a></p>
            </div>
            <div className="mb-4">
              <p className="font-bold">Phone</p>
              <p>+1 964 565 87652 / +1 982 567 87325</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
