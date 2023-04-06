import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartShopping,
  faXmark,
  faTruckFast,
  faHeart,
  faWallet,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <div className=" max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* {} */}
      <div className="flex items-center">
        <div
          className="cursor-pointer"
          onClick={() => {
            setNav(!nav);
          }}
        >
          <FaBars className="fa-solid" style={{ color: "#01060e" }} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best<span className="font-semibold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center  rounded-ful p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* search input */}
      <div className="flex items-center px-2 rounded-full w-[200px] sm:w-[400px] lg:w-[500px]">
        <FontAwesomeIcon icon={faSearch} style={{ color: "#000000" }} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none "
          type="text"
          placeholder="Search"
        />
      </div>
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
      </button>

      {/* mobile menu */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => {
            setNav(!nav);
          }}
        />
        <h2 className="text-2xl p-4 ">
          Best<span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col text-gray-800">
            <li className="text-xl py-4 flex">
              <FontAwesomeIcon icon={faTruckFast} className="mr-3" size="lg" />
              Orders
            </li>
            <li className="text-xl py-4 flex">
              <FontAwesomeIcon icon={faWallet} className="mr-4" size="lg" />
              Wallet
            </li>
            <li className="text-xl py-4 flex">
              <FontAwesomeIcon icon={faHeart} className="mr-4 " size="lg" />
              Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FontAwesomeIcon icon={faQuestion} className="mr-6 " size="lg" />
              Help
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
