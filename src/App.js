import pokebola from './assets/pokebola.png';
import lupa from './assets/lupa.png'
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
    <div className='flex flex-col items-center bg-[#2b2b2b] bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_40px,transparent_40px,transparent_110px)]
      bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.02)_0px,rgba(255,255,255,0.02)_4px,transparent_4px,transparent_40px)] bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.05)_2px,transparent_3px)]
      bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.05)_2px,transparent_3px)] bg-[radial-gradient(circle_at_40%_80%,rgba(255,255,255,0.05)_2px,transparent_3px)] bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.05)_2px,transparent_3px)]
      bg-blend-normal'>
      <div className='w-[70%] bg-white'>
        <div className='flex items-center justify-center p-2'>
          <img src={pokebola} title='pokebola' className='w-20 h-20'/>
          <h1 className='text-[#919191] text-4xl'>Pokédex</h1>
        </div>
        <div className='bg-gray-800 p-5 flex flex-col'>
          <label className='text-2xl font-montserrat text-white'>Nome ou número</label>
          <div className='mt-2 flex '>
            <input className='rounded-md me-2'/> 
            <button className='bg-red-600 p-1 rounded-md'>
              < img src={lupa}/>
            </button>
          </div>
        </div>
        <div className='flex flex-wrap justify-center'>
          {
            data.map((item, index) => <Card pokemon={item} index={index}/>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
