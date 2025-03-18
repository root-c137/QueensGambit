"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

//flemme de créer un nouveau fichier pour ça
const NavLinks = ({ className }: { className?: string }) => (
    <nav className={className+" tracking-widest uppercase text-sm"}>
      <a href="#" className="hover:text-gray-600 m-5">Jouer</a>
      <a href="#" className="hover:text-gray-600 m-5">Apprendre</a>
      <a href="#" className="hover:text-gray-600 m-5 md:hidden ">Connexion</a>
    </nav>
  );

export const BurgerMenu = () => 
{
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <NavLinks className="hidden md:flex space-x-6 text-[#fff]" />

            <button
                className="md:hidden transition-transform duration-300 ease-in-out transform absolute 
                top-4 right-4 cursor-pointer z-1001"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={40} /> : <Menu size={40} />}
            </button>

            <div
                className={`absolute top-0 left-0 w-full h-full text-white bg-[#292c40] z-1000 shadow-lg flex 
                flex-col items-center py-5 space-y-4 md:hidden transition-all duration-300 ease-in-out pt-50
                ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
            >
            <NavLinks className="flex flex-col items-center text-xl" />
            </div>
        </>

        
    )
}  