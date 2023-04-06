import React, { useState } from "react";
import { data } from "../data/data";
const FastFood = () => {
  const [foods, setFoods] = useState(data);
  // filter type
  const FilterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // filter price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <h1 className="text-orange-500 text-center font-bold text-4xl  sm:text-5xl ">
        Top Rated Menu Items
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="">
          <p className="font-bold">Filter Type</p>
          <div className="flex justify-between flex-wrap  ">
            <button
              onClick={() => setFoods(data)}
              className="border-orange-500 text-orange-500  hover:scale-110  "
            >
              All
            </button>
            <button
              onClick={() => FilterType("Burger")}
              className="border-orange-500 text-orange-500  hover:scale-110"
            >
              Burgers
            </button>
            <button
              onClick={() => FilterType("Pizza")}
              className="border-orange-500 text-orange-500 hover:scale-110"
            >
              Pizza
            </button>
            <button
              onClick={() => FilterType("Salad")}
              className="border-orange-500 text-orange-500 hover:scale-110"
            >
              Salads
            </button>
            <button
              onClick={() => FilterType("Wings")}
              className="border-orange-500 text-orange-500 hover:scale-110"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* filter price */}
        <div>
          <p className="font-bold">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => {
                filterPrice("5-10$");
              }}
              className="text-orange-500 border-orange-500 text-orange-500 hover:scale-105"
            >
              5-10$
            </button>
            <button
              onClick={() => {
                filterPrice("7-12$");
              }}
              className="text-orange-500 border-orange-500 text-orange-500 hover:scale-105"
            >
              7-12$
            </button>
            <button
              onClick={() => {
                filterPrice("8-15$");
              }}
              className="text-orange-500 border-orange-500 text-orange-500 hover:scale-105"
            >
              8-15$
            </button>
            <button
              onClick={() => {
                filterPrice("25$");
              }}
              className="text-orange-500 border-orange-500 text-orange-500 hover:scale-105"
            >
              25$
            </button>
          </div>
        </div>
      </div>
      {/* display foods.data */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FastFood;
