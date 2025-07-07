import React, { useState } from "react";
import chicken from '../MenuImg/img/chicken.jpg'
import chillie from '../MenuImg/img/chillie.jpg'
import nachos from '../MenuImg/img/nachos.webp'
import samsa from '../MenuImg/img/samsa.jpg'


const menuData = {
  Starters: [
    {
      name: "Chicken Chilled",
      description: "Chicken Main Course",
      rating: 5.0,
      reviews: 87,
      price: "$5.99",
      image: chicken,
    },
    {
      name: "Samsa Beef",
      description: "Fried Mexican Beef",
      rating: 4.5,
      reviews: 34,
      price: "$3.99",
      image: chillie,
    },
  ],
  Main: [
    {
      name: "Chillie Cake",
      description: "Deepfried Chicken",
      rating: 5.0,
      reviews: 61,
      price: "$2.99",
      image: nachos,
    },
    {
      name: "Carnet Nachos",
      description: "Chilli Crispy Nachos",
      rating: 3.9,
      reviews: 26,
      price: "$3.99",
      image: samsa,
    },
  ],
  Soup: [],
  Desserts: [],
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Starters");

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Checkout our menu</h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {Object.keys(menuData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuData[activeTab].length > 0 ? (
          menuData[activeTab].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                <div className="flex items-center text-sm text-yellow-500 mt-2">
                  ⭐ {item.rating} ({item.reviews} reviews)
                </div>
                <div className="mt-2 text-lg font-bold text-blue-600">
                  {item.price}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No items available in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default Menu;
