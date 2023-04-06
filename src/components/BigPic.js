import React, { useState } from "react";
function BigPic() {
  return (
    <div className="max-w-[1640px] mx-auto p-4  ">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] flex flex-col justify-center bg-black/50">
          <h1 className="px-4 text-4xl sm:text-5xl md-text-6xl lg:text-7xl font-semibold">
            The<span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md-text-6xl lg:text-7xl font-semibold">
            Foods<span className="text-orange-500">Delivered</span>
          </h1>
        </div>
        <img
          src="https://assets.gqindia.com/photos/61e16e982c3e19caea634ee9/16:9/pass/best%20and%20worst%20foods%20to%20eat%20for%20dinner.jpg"
          className="w-full max-h-[500px] object-cover"
        />
      </div>
    </div>
  );
}

export default BigPic;
