import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white w-full h-16 absolute top-0 px-4">
      <div className="w-full h-full max-w-[1100px] mx-auto flex justify-between items-center">
        <h4 className="text-2xl font-bold z-20">Experiences</h4>
        <div className="cursor-pointer z-20" onClick={handleNav}>
          {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} /> }
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/90 z-10 transition-transform
            ${!nav ? "translate-x-[-100%]" : ""}`}
      >
        <ul className="w-ful h-full flex flex-col justify-center items-center">
          <li className="md:text-4xl sm:text-3xl text-2xl py-8">
            Destinations
          </li>
          <li className="md:text-4xl sm:text-3xl text-2xl py-8">
            Reservations
          </li>
          <li className="md:text-4xl sm:text-3xl text-2xl py-8">Amenities</li>
          <li className="md:text-4xl sm:text-3xl text-2xl py-8">Rooms</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
