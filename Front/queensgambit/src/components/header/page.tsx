import Image from 'next/image'
import QueensIcon from "@/assets/images/queen.svg";
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export default function Header()
{
    return(
        <header className="w-full p-10 flex flex-col justify-center items-center ">
            <div className="Logo z-20000 w-fit flex flex-col justify-center ">
                <Image src={QueensIcon} alt="queensgambit icon" width="40" height="40" className='invert ml-4'/>
                <h1 className="w-fit text-[#212121] text-sm md:text-lg tracking-[0.088em] uppercase font-bold 
                rounded-full px-4 bg-white">queensgambit</h1>
            </div>
            <BurgerMenu/>

        </header>
    )
}