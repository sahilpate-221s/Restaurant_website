import React, { useState } from 'react';
import menuItems from '../../data'; // Import the menu items data

function Menu() {
  const [visibleItems, setVisibleItems] = useState(9); // Initially show 9 items
  const [activeCategory, setActiveCategory] = useState('All'); // Track the active category

  const loadMoreItems = () => {
    setVisibleItems(prev => prev + 9); // Load 9 more items each time
  };

  // Dynamically create a list of unique categories from menuItems
  const categories = ['All', ...new Set(menuItems.map(item => item.category))]; // Include 'All' as an option

  // Filter menu items based on the selected category
  const filteredItems = menuItems.filter(item => activeCategory === 'All' || item.category === activeCategory);

  return (
    <div className='bg-black text-white py-8 max-w-screen md:px-16 lg:px-24 xl:px-36'> {/* Increased padding here */}
      {/* Container for the title and description */}
      <div className='flex flex-col items-center justify-center text-center mx-auto max-w-6xl'>
        <h1 className='text-[#FFCC33] text-4xl md:text-5xl'>OUR MENU</h1>
        <p className='text-2xl md:text-3xl mt-4'>Just Choose from the best</p>
      </div>

      {/* Category Selector */}
      <div className='mt-6'>
        <ul className='flex flex-wrap items-center justify-center gap-4'>
          {categories.map((category) => (
            <li
              key={category}
              className={`w-24 h-8 rounded-md flex items-center justify-center cursor-pointer
                ${activeCategory === category ? 'bg-[#FFCC33] text-black' : 'bg-black border text-white hover:bg-[#3a3a3a]'}`}
              onClick={() => {
                setActiveCategory(category);
                setVisibleItems(9); // Reset visible items when changing category
              }} // Reset visible items when a new category is selected
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Card Container */}
      <div className='mt-6 mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
        {filteredItems.slice(0, visibleItems).map(item => (
          <div
            key={item._id}
            className='bg-black text-white p-6 rounded-md border border-[#FFCC33] flex flex-col items-center justify-center
                       cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg' // Added smooth transition and softer yellow
            style={{ height: '300px' }} // Increased height of the card
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-24 h-24 object-cover rounded-full mb-4' // Make the image circular
            />
            <h2 className='text-lg font-bold'>{item.name}</h2>
            <p className='text-sm'>{item.recipe}</p> {/* Changed to use recipe instead of description */}
            <p className='text-lg font-bold price'>${item.price.toFixed(2)}</p>
            <p className='text-sm'>{item.category}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleItems < filteredItems.length && (
        <div className='mt-6 flex justify-center'>
          <button
            onClick={loadMoreItems}
            className='bg-[#FFCC33] text-black px-6 py-2 rounded-md hover:bg-yellow-500'
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Menu;
