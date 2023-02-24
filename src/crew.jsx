import Navbar from "./components/navbar";
import Douglas from "../src/assets/crew/image-douglas-hurley.png"
const Crew = () => {
    return (
        <div className="bg-[url('../src/assets/crew/background-crew-mobile.jpg')] h-screen bg-cover bg-no-repeat md:bg-[url('../src/assets/crew/background-crew-desktop.jpg')] md:h-screen md:bg-cover md:bg-no-repeat">
        <Navbar/>
        <div className="flex text-white gap-4 items-center justify-center mt-4 font-Barlow uppercase text-xl">
        <h1 className="opacity-[0.25]">02</h1>
        <h1 className="">Meet your crew</h1>
    </div>
    <img src={Douglas} alt='img' className="mx-auto w-60 mt-8"/>
    <div className="flex justify-center items-center uppercase">
            <div className="h-[3px] w-[320px] bg-divide"> </div>
        </div>
        </div>
    );
}
 
export default Crew;