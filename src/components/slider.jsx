import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { RxDotFilled } from "react-icons/rx";

import slide1 from "../assets/slide-1.avif";
import slide2 from "../assets/slide-2.avif";
import slide3 from "../assets/slide-3.avif";
import slide4 from "../assets/slide-4.avif";
import slide5 from "../assets/slide-5.avif";
import slide6 from "../assets/slide-6.avif";

const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

const slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const next = () => {
    if (slideIndex >= slides.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const prev = () => {
    if (slideIndex <= 0) {
      setSlideIndex(slides.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <div className="max-w-[1400px] h-[580px] m-auto py-16 px-4 relative">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[slideIndex]})` }}
      >
        <div
          className="absolute left-10 top-[50%] translate-y-[-50%] bg-white/80 hover:bg-white rounded-full p-4 cursor-pointer"
          onClick={prev}
        >
          <SlArrowLeft size={30} />
        </div>
        <div
          className="absolute right-10 top-[50%] translate-y-[-50%] bg-white/80 hover:bg-white rounded-full p-4 cursor-pointer"
          onClick={next}
        >
          <SlArrowRight size={30} />
        </div>
      </div>
      <div className="w-full flex justify-center mt-4">
        {slides.map((slide, index) => (
          <div className="cursor-pointer bg-gray-200 rounded-full mx-2" key={index} onClick={() => setSlideIndex(index)}>
            <RxDotFilled size={30} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default slider;
