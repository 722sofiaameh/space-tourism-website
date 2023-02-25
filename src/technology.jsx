import Navbar from "./components/navbar";
import {technology} from "../data.json"
import { useState } from "react";

const Technology = () => {
    const [Technology] = useState(technology);
    const [value, setValue] = useState(0);

    const {id,images,name,description} = Technology[value];

    return (
        <div className="bg-[url('../public/assets/technology/background-technology-mobile.jpg')] h-screen bg-cover bg-no-repeat">
        <Navbar/>
        <div className="mt-4">
            <div className="flex justify-center items-center gap-5 text-xl">
                <h1 className="font-Barlow text-white opacity-[0.25]">03</h1>
                <h1 className="uppercase text-white font-Barlow">Space Launch 101</h1>
            </div>
            <img src={images.landscape} alt="img" className="bg-cover bg-no-repeat mt-8 "/>

            <div className="flex justify-center items-center mt-4">
                {Technology.map((item,index)=>(
                    <button key={index}
                    onClick={()=> setValue(index)}
                    className={`w-14 h-14  rounded-full mx-2 ${index === value ? 'bg-white' : "bg-blue text-white border-solid border-2 border-white"}`}>{item.id}</button>
                ))}
            </div>

            <h1 className="text-center uppercase text-fontWhite font-Barlow mt-2 text-lg">The Terminology...</h1>
            <div className="text-center p-4">
                <h1 className="text-white font-Bellefair text-3xl">{name}</h1>
                <p className="text-fontWhite text-xl">{description}</p>
            </div>
        </div>
        </div>
    );
};
 
export default Technology;