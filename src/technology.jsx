import Navbar from "./components/navbar";
import { useState } from "react";
import { TechnologyData } from "./data";

const Technology = () => {
    const [Technology] = useState(TechnologyData);
    const [value, setValue] = useState(0);

    const {images,name,description} = Technology[value];

    return (
        <div className="bg-[url('../public/assets/technology/background-technology-mobile.jpg')] md:bg-[url('../public/assets/technology/background-technology-desktop.jpg')] h-screen bg-cover bg-no-repeat">
        <div className="mx-auto container">
            <Navbar/>
            <div className="mt-4">
                <div className="flex justify-center items-center gap-5 text-xl md:text-2xl md:items-start md:justify-start md:mt-10 md:pb-10">
                    <h1 className="font-Barlow text-white opacity-[0.25]">03</h1>
                    <h1 className="uppercase text-white font-Barlow">Space Launch 101</h1>
                </div>
                <div className="md:flex md:mt-10 md:gap-10">
                    <img src={images.landscape} alt="img" className="bg-cover bg-no-repeat mt-8 md:order-3 md:w-full md:h-full"/>
                    <div className="flex justify-center items-center mt-4 md:grid">
                        {Technology.map((item,index)=>(
                            <button key={index}
                            onClick={()=> setValue(index)}
                            className={`w-14 h-14  rounded-full mx-2 ${index === value ? 'bg-white' : "bg-blue text-white border-solid border-2 border-white"}`}>{item.id}</button>
                        ))}
                    </div>
                    <div className="md:w-full">
                        <h1 className="text-center uppercase text-fontWhite font-Barlow mt-2 text-lg md:text-xl md:text-start">The Terminology...</h1>
                        <div className="text-center p-4 md:text-start">
                            <h1 className="text-white font-Bellefair text-3xl md:text-5xl pb-2">{name}</h1>
                            <p className="text-fontWhite text-xl md:text-xl">{description}</p>
                        </div>
                    </div>...
                </div>
            </div>
        </div>
        </div>
    );
};
 
export default Technology;