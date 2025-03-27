
import { X } from "lucide-react";
import Image from 'next/image'
import ChessIcon_White from "@/assets/images/chess_icon_black.svg";
import RandomIcon from "@/assets/images/random.svg";

export default function CreateGamePopup({ onClose }: { onClose: () => void }) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-1000">
        <div className="bg-white text-black p-6 rounded-lg w-96 h-113 max-w-full shadow-lg 
        flex flex-col relative">
          <h1 className="text-lg font-semibold text-black text-center mb-5">Créer une partie</h1>

          <div className="OptionSection flex items-center justify-center m-2">
            <label htmlFor="Variante" className="p-3 font-semibold">Variante</label>
            <select name="Variante" id="Variante" className="border rounded-lg p-2 w-40">
                <option value="Standard">Standard</option>
                <option value="CrazyHouse">Crazy House</option>
            </select>
          </div>
          <div className="OptionSection flex items-center justify-center m-2">
            <label htmlFor="Cadence" className="p-3 font-semibold">Cadence</label>
            <select name="Cadence" id="Cadence" className="border rounded-lg p-2 w-40">
                <option value="unlimited">Illimité</option>
                <option value="realtime">Temps réel</option>
            </select>
          </div>
          <div className="OptionSection flex flex-col items-center justify-center m-4">
          <p className="mb-2 text-lg font-semibold">Niveau</p>
          <div className="LevelButtons flex gap-2 flex-wrap">
             {[...Array(8)].map((_, index) => {
                const lvl = index + 1;
                return (
                    <div key={lvl} className="LevelGroup relative">
                        <input
                            type="radio"
                            name="level"
                            id={`lvl${lvl}`}
                            className="hidden peer"
                        />
                        <label
                            htmlFor={`lvl${lvl}`}
                            className="flex items-center justify-center w-7 h-9 border-2 border-gray-500 text-gray-700 font-bold cursor-pointer
                            peer-checked:bg-gray-800 peer-checked:text-white peer-checked:border-gray-800 rounded-lg transition-all"
                        >
                            {lvl}
                        </label>
                    </div>
                );
                })}
          </div>
          <p className="text-grey-300 text-xs p-3">Fairy-Stockfish 14 niveau 1</p>
            
          </div>

          <div className="ColorSection flex justify-center items-baseline gap-4">
                
                <div className="ColorGroup relative">
                    <input type="radio" name="Color" id="ColorWhite" className="hidden peer"/>
                    <label htmlFor="ColorWhite" className="w-15 h-15 flex items-center justify-center border-2 border-gray-200 rounded-md cursor-pointer peer-checked:border-red-500 peer-checked:bg-gray-200">
                    <Image src={ChessIcon_White} alt="chess icon color white" width="30" height="30"/>
                    </label>
                </div>

                <div className="ColorGroup relative">
                    <input type="radio" name="Color" id="ColorRandom" className="hidden peer"/>
                    <label htmlFor="ColorRandom" className="w-20 h-20 flex items-center justify-center border-2 border-gray-200 rounded-md cursor-pointer peer-checked:border-red-500 peer-checked:bg-gray-200">
                    <Image src={RandomIcon} alt="chess icon random" width="45" height="45"/>
                    </label>
                </div>

                <div className="ColorGroup relative">
                    <input type="radio" name="Color" id="ColorBlack" className="hidden peer"/>
                    <label htmlFor="ColorBlack" className="w-15 h-15 flex items-center justify-center border-2 border-gray-200 rounded-md cursor-pointer peer-checked:border-red-500 peer-checked:bg-gray-200">
                    <Image src={ChessIcon_White} alt="chess icon color black" width="30" height="30"/>
                    </label>
                </div>
           </div>

          <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 
          cursor-pointer"
          onClick={onClose}
          >
            <X size={24} />
          </button>
        </div>

      </div>
    );
  }
  
