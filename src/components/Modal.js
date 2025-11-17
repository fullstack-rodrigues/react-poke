import { typeColors } from "../utils/colors";
import StatsChart from "./StatsChart";

export default function Modal({ open, onClose, pokemon }) {
  if (!open || !pokemon) return null;
   const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative bg-white p-6 rounded-xl shadow-xl w-96 animate-fade-in">
        <div className="flex justify-end font-bold text-cyan-800">#{pokemon.id}</div>
        <div className="flex flex-col items-center">
          <p className="font-montserrat text-2xl font-bold tracking-wide text-cyan-800">{pokemon.name}</p>
          <img
            src={image}
            alt={pokemon?.name}
            className="w-60 h-60 object-cover  bg-[linear-gradient(to_bottom,_#f8f8f8,_#efefef),_repeating-linear-gradient(45deg,_rgba(0,0,0,0.03)_0px,_rgba(0,0,0,0.03)_1px,_transparent_1px,_transparent_8px)] bg-blend-overlay"
          />
            <p className="mt-2">Type</p>
            <div className="flex mt-2">
          {
            pokemon?.types?.map(item => (
              <p className={`${typeColors[item.type?.name]} text-white px-3 rounded-lg mx-2`}>{item.type?.name}</p>
            ))
          }
          </div>
          <div className="mt-3">
            <StatsChart stats={pokemon.stats} />
          </div>
        </div>
        
        <button
          onClick={onClose}
          className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-800 transition"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
