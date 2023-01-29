import React from "react";
import background from "../assets/bg.avif";

const Hero = () => {
  return (
    <div className="text-white w-full h-screen">
      <img className="top-0 left-0 w-full h-screen object-cover" src={background} alt="/" />
      <div className="absolute top-0 left-0 w-full h-screen bg-black/30" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center px-4">
        <div className="w-full max-w-[1100px] m-auto">
            <p className="text-lg">All Inclusive</p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Private Beaches & Getaways</h1>
            <p className="max-w-[600px] py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum saepe
            accusantium consequatur corrupti animi consequuntur eveniet facilis et,
            reiciendis similique consectetur, voluptates iste omnis at velit, eaque
            quam. Repellat, commodi.</p>
            <button className="mt-4 border rounded-full md:py-3 py-2 md:px-12 px-9 font-bold hover:bg-white hover:text-black">Revenue Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
