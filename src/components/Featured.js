import React, { useState } from "react";
import TopNav from "./TopNav";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Featured() {
  const sliders = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];
  console.log(sliders);

  const [currIndex, setCurrIndex] = useState(0);
  const prevSlider = () => {
    const IsFirstSlide = currIndex === 0;
    const NewIndex = IsFirstSlide ? sliders.length - 1 : currIndex - 1;
    setCurrIndex(NewIndex);
  };
  const NextSlider = () => {
    const IsFirstSlide = currIndex === sliders.length - 1;
    const NewIndex = IsFirstSlide ? 0 : currIndex + 1;
    setCurrIndex(NewIndex);
  };
  const movetoSlide = (slideIndex) => {
    setCurrIndex(slideIndex);
  };

  return (
    <div className="max-w-[2020px] h-[500px] w-full py-4 px-4 relative group ">
      <div
        className="w-full h-full rounded-2xl bg-cover bg-center duration-500"
        style={{ backgroundImage: `url(${sliders[currIndex].url})` }}
      ></div>
      <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlider} />
      </div>
      <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
        <BsChevronCompactRight onClick={NextSlider} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {sliders.map((items, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => movetoSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
