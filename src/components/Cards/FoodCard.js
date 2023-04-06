import React from "react";

const FoodCard = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 grid md:grid-cols-3 gap-6 ">
      <div className="rounded-xl relative ">
        <div className="absolute w-full h-full bg-black/50 rounded-xl  text-white">
          <p className="font-semibold text-2xl px-2 pt-4">
            Sun's Out,BOGO's Out
          </p>
          <p className="px-2  font-bold">Through 8/25</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className=" max-h=[160px] md:max-h-[200px] w-full object-cover"
          src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/09/23/0/FNK_Parmesan-Eggs_H1_s4x3.jpg.rend.hgtvcom.441.331.suffix/1632420546993.jpeg"
        />
      </div>
      <div className="rounded-xl relative ">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-semibold text-2xl px-2 pt-4">
           Ramen by Vlad
          </p>
          <p className="px-2  font-bold">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className=" max-h=[160px] md:max-h-[200px] w-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqnMxWD8ShmHGxP4W58HvEHGbS0jVmR4JelQ&usqp=CAU"
        />
      </div>
      <div className="rounded-xl relative ">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-semibold text-2xl px-2 pt-4">
            We deliver Shaurma too
          </p>
          <p className="px-2 font-bold ">Through 8/25</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className=" max-h=[160px] md:max-h-[200px] w-full object-cover"
          src="https://i.ytimg.com/vi/vf8gh9oLmQg/maxresdefault.jpg"
        />
      </div>
    </div>
  );
};

export default FoodCard;
