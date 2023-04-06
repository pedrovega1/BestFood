import React from "react";
import { categories } from "./data/data";

const Category = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="font-bold text-4xl text-center text-orange-600">Top Rated Menu Items</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
      {categories.map((item,index)=>(
        <div key={index} className=" rounded-lg p-4 flex justify-between items-center">
        <h2 className="font-bold sm:text-xl dark:text-white">{item.name}</h2>
        <img src={item.image} alt={item.name} className="w-20"/>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Category;
