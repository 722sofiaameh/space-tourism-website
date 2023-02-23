import Navbar from "./components/navbar";
import Moon from "./assets/destination/image-moon.png"
import { Link } from "react-router-dom";

const Destination = () => {
    return (

    <div className="bg-[url('../src/assets/destination/background-destination-mobile.jpg')] h-screen bg-cover bg-no-repeat">
<Navbar/>
<div className="p-6">
    <div className="flex text-white gap-4 items-center justify-center mt-4 font-Barlow uppercase text-xl">
        <h1 className="opacity-[0.25]">01</h1>
        <h1 className="">Pick Your Destination</h1>
    </div>
    <img src={Moon} alt='img' className="mx-auto w-40 mt-10"/>
    
    <ul className="text-fontWhite text-xl flex justify-center items-center mt-8 gap-8 font-Barlow uppercase">
        <Link className="active:border-b-4 border-white" href="/Destination">Moon</Link>
        <Link className="/Mars">Mars</Link>
        <Link className="/Europa">Europa</Link>
        <Link>Titan</Link>
    
    </ul>
    <div className="text-center mt-8">
        <h1 className="font-Bellefair text-5xl text-white uppercase">Moon</h1>
        <p className="font-Barlow text-fontWhite">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
        <div className="flex justify-center items-center mt-4 uppercase">
            <div className="h-[1px] w-[320px] bg-divide "> </div>
        </div>
        <div className="text-fontWhite font-Barlow mt-4">
        <h1>AVG. DISTANCE</h1>
        <p className="font-Bellefair text-4xl font-white">384,400 km</p>
        </div>
        <div className="text-center mt-2">
            <h1 className="text-fontWhite text-xl">Est. travel time</h1>
            <p className="font-Bellefair text-white text-3xl p-2">3 days</p>
        </div>
    </div>
</div>
    </div>
    
    );
}
 
export default Destination;