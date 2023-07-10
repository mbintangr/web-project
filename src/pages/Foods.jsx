import React, {useState} from "react";
// import {withRouter} from 'react-router-dom'

const Foods = (props) => {
  const food = props.obj;
  const ing = food.ingredients;
  const ins = food.steps;
  console.log(ing);
  console.log(food);

    const [isPopup, setIsPopup] = useState(false)

  return (
    <div className="px-[10vw] sm:px-[15vw] sm:pt-[130px] pt-[100px]">
      <h1 className="text-2xl sm:text-3xl font-bold mb-5">{food.name}</h1>
        <img
            src={food.img}
            alt={food.name}
            className="my-3 w-full min-h-[200px] sm:max-h-[500px] max-h-[300px] object-cover rounded-3xl shadow-xl"
            onClick={() => setIsPopup(!isPopup)}
        />
        <p className={(isPopup ? "hidden" : "italic text-center")}>Tap image for details!</p>
      {/* explanation */}
      <div className={(isPopup ? "my-3 bg-quaternary text-black p-10 rounded-3xl text-center shadow-xl h-auto duration-300" : "h-0 duration-300 overflow-hidden")}>
        <h1 className="text-xl sm:text-2xl font-bold mb-3">About {food.name}</h1>
        <p>{food.about}</p>
      </div>

      <div>
        {/* ingredients */}
        <div className="my-3">
          <h2 className="text-xl font-bold mb-2">Ingredients:</h2>
          <ul className="list-decimal">
            {ing.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </div>
        <hr />
        {/* steps */}
        <div className="my-3">
          <h2 className="text-xl font-bold mb-2">Instructions:</h2>
          <ul className="list-decimal">
            {ins.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Foods;