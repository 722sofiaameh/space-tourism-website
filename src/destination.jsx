import { useState } from "react";
import { destinations } from "../data.json";
import Navbar from "./components/navbar";

const Destination = () => {
  const [planets] = useState(destinations);
  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } = planets[value];

  return (
    <div className="bg-[url('../public/assets/destination/background-destination-mobile.jpg')] h-screen bg-cover bg-no-repeat">
      <Navbar />
      <div className="p-4">
        <div className="flex text-white gap-4 items-center justify-center mt-4 font-Barlow uppercase text-xl">
          <h1 className="opacity-[0.25]">01</h1>
          <h1 className="">Pick Your Destination</h1>
        </div>
        <img
          src={images.png}
          alt={name}
          title={name}
          className="mx-auto w-40 mt-10"
        />

        <div className="text-center">
          {planets.map((item, index) => (
            <button
              key={index}
              onClick={() => setValue(index)}
              className={`uppercase text-fontWhite text-xl pb-2  mx-2 ${
                index === value && "border-b-2 border-white"
              } `}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="text-center mt-8">
          <h1 className="font-Bellefair text-5xl text-white uppercase">
            {name}
          </h1>
          <p className="font-Barlow text-fontWhite">{description}</p>
          <div className="flex justify-center items-center mt-4 uppercase">
            <div className="h-[1px] w-[320px] bg-divide "> </div>
          </div>
          <div className="text-fontWhite font-Barlow mt-4">
            <h1>AVG. DISTANCE</h1>
            <p className="font-Bellefair text-4xl font-white">{distance}</p>
          </div>
          <div className="text-center mt-2">
            <h1 className="text-fontWhite text-xl">Est. travel time</h1>
            <p className="font-Bellefair text-white text-3xl p-2">{travel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
