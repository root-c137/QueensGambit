"use client";

import { useState } from 'react';
import './globals.css'
import CreateGamePopup from '@/components/CreateGamePopup/CreateGamePopup';

export default function Home()
{

  const [showGameCreate, setShowGameCreate] = useState(false);

  return (
    <div className="w-full flex flex-col items-center mt-40">

    {showGameCreate && <CreateGamePopup onClose={() => setShowGameCreate(false)} />}
      
      <div className='w-80 flex flex-col gap-5 text-sm'>
        <button className="bd-white border-2 border-gray-500 rounded-full py-2 px-6 text-white 
        uppercase bg-transparent hover:text-black hover:bg-white cursor-pointer 
        transition-all duration-400 ease-in-out"
        onClick={() => setShowGameCreate(!showGameCreate)}>
          Créer une partie contre l'IA
        </button>
        <button className="bd-white border-2 border-gray-500 rounded-full py-2 px-6 text-white 
        uppercase bg-transparent hover:text-black hover:bg-white cursor-pointer 
        transition-all duration-400 ease-in-out"
        onClick={() => setShowGameCreate(!showGameCreate)}>
          Créer une partie contre un ami
        </button>
      </div>
     
    </div>
  );
}
