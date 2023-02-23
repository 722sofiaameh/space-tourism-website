import { useState } from "react"
import Logo from '../assets/shared/logo.svg'
import Hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'


const Navbar = () =>
{
   let [open, setopen] = useState(false)
   const menus = [
      { name: "HOME",link:'/' },
      { name: "DESTINATION",link:'/destination' },
      { name: "CREW" },
      { name: "TECHNOLOGY" },
   ]
   return (
      <nav className="flex items-center justify-between pt-5">
         <img src={open ? close : Hamburger} className="md:hidden  fixed right-5 cursor-pointer z-20 top-6" onClick={() => setopen(!open)} />
         <img src={Logo} alt="logo" className="w-10 ml-7" />
         <ul className={`bg-[#ffffff14] backdrop-blur-md  md:pl-10 pr-28 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10 ${!open ? 'right-[-100%] ' : 'right-0'}`}>
            {
               menus.map((menu, index) => (
                  <li key={index} className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
                     <a className="text-white cursor-pointer font-Barlow font-normal text-sm inline-block md:py-5 py-3" href={menu.link}>
                        <span className="font-bold mr-1.5">0{index}</span>  {menu.name}</a>
                  </li>
               ))
            }
         </ul>
      </nav>
   )
}
export default Navbar;