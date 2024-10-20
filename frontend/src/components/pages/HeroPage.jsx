import React from 'react';

export default function HeroPage() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex"
      style={{ backgroundImage: `url('/logo.png')` }}
    >
      {/* Container for the text content */}
      <div 
        className='mx-auto px-4 lg:px-24 xl:px-36 py-2 text-white flex flex-col justify-center items-center lg:items-start relative -top-[2rem] w-full' 
        style={{ maxWidth: '1795px' }} // Maintain the maxWidth for content
      >

        {/* Heading */}
        <p className='text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl mb-4 text-left leading-tight text-center lg:text-left'>
          BEST QUALITY<br />FOOD
        </p>

        {/* Description */}
        <p className='mb-6 leading-7 text-left max-w-md lg:max-w-none text-sm sm:text-base 2xl:text-lg text-center lg:text-left whitespace-normal'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, corrupti quisquam id nulla, quas culpa unde corporis voluptates, quos provident harum quibusdam in sequi repellat et ullam similique fugiat ut?
        </p>

        {/* Button */}
        <button className='bg-[#FFCC33] text-black font-bold px-6 py-3 rounded-lg hover:bg-red-700 my-2 text-sm 2xl:text-base'>
          BOOK A TABLE
        </button>
      </div>
    </section>
  );
}
