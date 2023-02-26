import Navbar from "./components/navbar";
import { useState } from "react";
import { CrewData } from "./data";

const Crew = () => {
  const [Team] = useState(CrewData);
  const [value, setValue] = useState(0);

  const { name, images, role, bio } = Team[value];
  return (
    <div className="bg-[url('../public/assets/crew/background-crew-mobile.jpg')] h-screen bg-cover bg-no-repeat md:bg-[url('../public/assets/crew/background-crew-desktop.jpg')] md:h-screen md:bg-cover md:bg-no-repeat p-4">
      <div className="mx-auto container">
        <Navbar />
        <div className="flex text-white gap-4 items-center justify-center font-Barlow uppercase text-xl md:justify-start md:items-start md:mt-20">
          <h1 className="opacity-[0.25]">02</h1>
          <h1 className="">Meet your crew</h1>
        </div>
        <div className="md:flex md:order-1">
          <div>
            <img src={images.png} alt="img" className="mx-auto w-40 h-50" />
            <div className="flex justify-center items-center uppercase">
              <div className="h-[3px] w-[320px] bg-divide"> </div>
            </div>
          </div>
          <div className=" md:w-1/2">
            <div className="flex justify-center items-center md:mx-20">
              {Team.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setValue(index)}
                  className={`w-4 h-4 rounded-full mx-2 mt-4 ${
                    index === value ? "bg-black" : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
            <div className="text-center pt-8 md:text-start">
              <h1 className="font-Bellefair text-white text-2xl opacity-[0.5]">
                {role}
              </h1>
              <h1 className="font-Bellefair text-3xl text-white">{name}</h1>
              <p className="font-Barlow text-fontWhite text-xl">{bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
