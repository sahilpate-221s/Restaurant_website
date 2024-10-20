import React from 'react';

export default function SpecialDish() {
    return (
        <section className="py-10 lg:px-24 xl:px-36 px-4">
            <div className="mx-auto" style={{ maxWidth: '1795px' }}> {/* Apply maxWidth here */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2 text-white">OUR SPECIAL DISHES</h2>
                    <p className="max-w-xl mx-auto text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, labore
                        quod tempora consectetur suscipit sunt neque, velit neque distinctio
                        fugit in sunt natus deserunt iste eaque dolores.
                    </p>
                </div>

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Dish 1 */}
                    <div className="bg-black rounded-lg p-4 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 ml-6 mr-6 md:ml-0 md:mr-0 flex flex-col h-auto cursor-pointer"
                         style={{ boxShadow: '0 4px 30px rgba(255, 255, 255, 0.5)' }}>
                        <img 
                            src="/images/1st.png" 
                            alt="Burger" 
                            className="rounded-t-lg w-full h-[280px] md:h-48 object-cover" 
                        />
                        <div className="mt-auto text-center mb-4">
                            <h3 className="text-xl font-semibold text-white">BURGER</h3>
                            <p className="text-[#B8B8B8]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p className="text-lg font-bold mt-2 text-white">$8.60</p>
                        </div>
                    </div>

                    {/* Dish 2 */}
                    <div className="bg-black rounded-lg p-4 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 ml-6 mr-6 md:ml-0 md:mr-0 flex flex-col h-auto cursor-pointer"
                         style={{ boxShadow: '0 4px 30px rgba(255, 255, 255, 0.5)' }}>
                        <img 
                            src="/images/2nd.png" 
                            alt="Beef Burger Meal" 
                            className="rounded-t-lg w-full h-[280px] md:h-48 object-cover" 
                        />
                        <div className="mt-auto text-center mb-4">
                            <h3 className="text-xl font-semibold text-white">BEEF BURGER MEAL</h3>
                            <p className="text-[#B8B8B8]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p className="text-lg font-bold mt-2 text-white">$12.99</p>
                        </div>
                    </div>

                    {/* Dish 3 */}
                    <div className="bg-black rounded-lg p-4 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 ml-6 mr-6 md:ml-0 md:mr-0 flex flex-col h-auto cursor-pointer"
                         style={{ boxShadow: '0 4px 30px rgba(255, 255, 255, 0.5)' }}>
                        <img 
                            src="/images/3rd.png" 
                            alt="Double Cheese Pizza" 
                            className="rounded-t-lg w-full h-[280px] md:h-48 object-cover" 
                        />
                        <div className="mt-auto text-center mb-4">
                            <h3 className="text-lg font-semibold text-white">DOUBLE CHEESE PIZZA</h3>
                            <p className="text-[#B8B8B8]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p className="text-lg font-bold mt-2 text-white">$15.00</p>
                        </div>
                    </div>

                    {/* Dish 4 */}
                    <div className="bg-black rounded-lg p-4 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 ml-6 mr-6 md:ml-0 md:mr-0 flex flex-col h-auto cursor-pointer"
                         style={{ boxShadow: '0 4px 30px rgba(255, 255, 255, 0.5)' }}>
                        <img 
                            src="/images/4rt.png" 
                            alt="Caesar Salad" 
                            className="rounded-t-lg w-full h-[280px] md:h-48 object-cover" 
                        />
                        <div className="mt-auto text-center mb-4">
                            <h3 className="text-lg font-semibold text-white">CAESAR SALAD</h3>
                            <p className="text-[#B8B8B8]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p className="text-lg font-bold mt-2 text-white">$10.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
