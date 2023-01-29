import React from "react";
import room1 from "../assets/room-1.avif";
import room2 from "../assets/room-2.avif";
import room3 from "../assets/room-3.avif";
import room4 from "../assets/room-4.avif";
import room5 from "../assets/room-5.avif";
import room6 from "../assets/room-6.avif";

const Rooms = () => {
  return (
    <div className="text-black w-full max-w-[1200px] mx-auto">
      <div className="py-10 px-2 grid md:grid-cols-2">
        <div className="flex flex-col gap-4 justify-center">
            <h2 className="text-4xl font-bold">Fine Interior Rooms</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea corporis
            nulla quis fugiat odit reiciendis voluptatum similique architecto
            voluptas ad, tempore consequuntur, aperiam impedit porro nihil cum
            placeat aliquam incidunt.
            </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-6 gap-2 h-[80vh] max-md:mt-4">
            <img className="w-full h-full object-cover p-2 border row-span-2" src={room1} alt="/" />
            <img className="w-full h-full object-cover p-2 row-span-2 border" src={room2} alt="/" />
            <img className="w-full h-full object-cover p-2 border row-span-2" src={room3} alt="/" />
            <img className="w-full h-full object-cover p-2 border" src={room4} alt="/" />
            <img className="w-full h-full object-cover p-2 border" src={room5} alt="/" />
            <img className="w-full h-full object-cover p-2 col-span-2 row-span-2 border" src={room6} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
