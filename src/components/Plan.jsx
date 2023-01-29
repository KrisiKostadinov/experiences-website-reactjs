import React from "react";
import suggestion1 from "../assets/suggestion-1.avif";
import suggestion2 from "../assets/suggestion-2.avif";
import suggestion3 from "../assets/suggestion-3.avif";
import suggestion4 from "../assets/suggestion-4.avif";
import suggestion5 from "../assets/suggestion-5.avif";
import suggestion6 from "../assets/suggestion-6.avif";

const Plan = () => {
  return (
    <div className="text-black w-full max-w-[1200px] mx-auto">
      <div className="grid md:grid-cols-2 items-center gap-4 px-4">
        <ul className="grid grid-rows-5 grid-cols-2 h-[80vh] gap-4">
          <img
            className="w-full h-full object-cover p-2 col-span-2 border"
            src={suggestion1}
            alt="/"
          />
          <img
            className="w-full h-full object-cover p-2 row-span-1 border"
            src={suggestion2}
            alt="/"
          />
          <img
            className="w-full h-full object-cover p-2 row-span-2 border"
            src={suggestion3}
            alt="/"
          />
          <img
            className="w-full h-full object-cover p-2 row-span-1 border"
            src={suggestion4}
            alt="/"
          />
          <img
            className="w-full h-full object-cover p-2 row-span-2 border"
            src={suggestion5}
            alt="/"
          />
          <img
            className="w-full h-full object-cover p-2 row-span-2 border"
            src={suggestion6}
            alt="/"
          />
        </ul>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Plan Yout Next Trip</h1>
          <p className="font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab
            distinctio commodi nam obcaecati.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            animi laborum reiciendis rem magni ab magnam unde amet autem sint,
            fugiat nostrum suscipit officia sunt architecto nobis odio
            reprehenderit qui.
          </p>
          <div className="flex gap-4">
            <button className="py-3 px-9 border rounded-full font-bold">Learn More</button>
            <button className="py-3 px-9 border rounded-full font-bold text-white bg-black">Book You Trip</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
