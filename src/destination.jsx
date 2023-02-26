import { useState } from "react";
import Navbar from "./components/navbar";
import { destinations } from "./data";

const Destination = () => {
  const [planets] = useState(destinations);
  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } = planets[value];

  return (
    <div className="bg-[url('../public/assets/destination/background-destination-mobile.jpg')] md:bg-[url('../public/assets/destination/background-destination-desktop.jpg')] bg-cover bg-no-repeat h-screen md:h-screen">
      <div className="container mx-auto
      ">
        <Navbar />
        <div className="p-4">
          <div className="md:flex md:mt-20">
            <div className="md:w-1/2">
              <div className="flex text-white gap-4 items-center justify-center  font-Barlow uppercase text-xl md:text-2xl">
                <h1 className="opacity-[0.25]">01</h1>
                <h1 className="">Pick Your Destination</h1>
              </div>
              <img
                src={images.portrait}
                alt={name}
                title={name}
                className="mx-auto w-40 mt-10 md:w-80"
              />
            </div>
            <div className="md:w-1/2">
              <div className="text-center md:text-start">
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
                <h1 className="font-Bellefair text-5xl text-white uppercase md:text-start md:text-8xl">
                  {name}
                </h1>
                <p className="font-Barlow text-fontWhite md:text-start md:text-xl">{description}</p>
                <div className="flex justify-center items-center mt-4 uppercase md:items-start md:justify-start">
                  <div className="h-[1px] w-[320px] bg-divide md:w-[520px]"> </div>
                </div>
                <div className="md:flex md:gap-20 md:pt-4 md:justify-start md:items-start">
                  <div className="text-fontWhite font-Barlow mt-4 md:text-start">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
