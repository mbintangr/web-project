import React from "react";

const CategoryCard = ({ title, img }) => {
  return (
    <div className="sm:h-[100px] h-[75px] cursor-pointer">
      <div className="relative shadow-xl hover:shadow-primary/40 rounded-xl hover:scale-105 duration-300">
        <div className="absolute w-full sm:h-[100px] h-[75px] bg-black/40 rounded-xl text-tertiary flex justify-center items-center">
          <h1 className="font-bold text-2xl">{title}</h1>
        </div>
        <img
          src={img}
          alt=""
          className="w-full object-cover rounded-xl sm:h-[100px] h-[75px] "
        />
      </div>
    </div>
  );
};

export default CategoryCard;
