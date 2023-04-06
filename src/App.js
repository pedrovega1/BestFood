import React from "react";
import Navbar from "./components/Navbar";
import BigPic from "./components/BigPic";
import FoodCard from "./components/Cards/FoodCard";
import FastFood from "./components/Cards/FastFood";
import Category from "./components/Category";

function App() {
  return (
<div  className="bg-gray-300">
  <Navbar/>
  <BigPic/>
  <FoodCard/>
  <FastFood/>
  <Category/>
</div>
  );
}

export default App;
