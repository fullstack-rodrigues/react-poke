import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import Card from './components/Card';

function App() {
   const [data, setData] = useState([]);

    useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const json = await response.json();
        setData(json?.results);
      } catch (error) {
        console.error(error);
      }
    }

    loadPokemon();
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#2b2b2b] bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_40px,transparent_40px,transparent_110px)]
      bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.02)_0px,rgba(255,255,255,0.02)_4px,transparent_4px,transparent_40px)] bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.05)_2px,transparent_3px)]
      bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.05)_2px,transparent_3px)] bg-[radial-gradient(circle_at_40%_80%,rgba(255,255,255,0.05)_2px,transparent_3px)] bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.05)_2px,transparent_3px)]
      bg-blend-normal">
      <div className="w-[70%] bg-white">
        <h1 className=''>Pokédex</h1>
        <div className="bg-gray-800 text-white p-5 flex flex-col">
          <label>Nome ou número</label>
          <div className="mt-2">
            <input /> 
            <button>Pesquisar</button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {
            data.map((item, index) => <Card pokemon={item} index={index}/>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
