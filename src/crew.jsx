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
        <div className="flex text-white gap-4 items-center justify-center font-Barlow uppercase text-xl md:justify-start md:items-start md:mt-20 md:text-2xl">
          <h1 className="opacity-[0.25]">02</h1>
          <h1 className="">Meet your crew</h1>
        </div>
        <div className="md:flex md:gap-36 md:mt-8">
          <div className="md:order-2">
            <img src={images.png} alt="img" className="mx-auto w-40 h-50 md:w-80 md:h-70" />
            <div className="flex justify-center items-center uppercase">
              <div className="h-[3px] w-[320px] bg-divide"> </div>
            </div>
          </div>
          <div className="grid md:w-1/2">
            
            <div className="text-center pt-8 md:text-start">
              <h1 className="font-Bellefair text-white text-2xl md:text-4xl opacity-[0.5]">
                {role}
              </h1>
              <h1 className="font-Bellefair text-3xl md:text-5xl text-white">{name}</h1>
              <p className="font-Barlow text-fontWhite text-xl md:text-2xl">{bio}</p>
            </div>
            <div className="flex justify-center items-center order-1 md:justify-start md:items-start">
              {Team.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setValue(index)}
                  className={`w-5 h-5 rounded-full mx-2 mt-4 md:w-6 md:h-6 md:mt-10 ${
                    index === value ? "bg-white" : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
