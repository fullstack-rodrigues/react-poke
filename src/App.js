import pokebola from './assets/pokebola.png';
import lupa from './assets/lupa.png'
import './App.css';
import { useState, useEffect } from "react";
import Card from './components/Card';
import Modal from './components/Modal';
import Toast from './components/Toast';

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 20;
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [pokemon, setPokemon] = useState(null);
  const [showError, setShowError] = useState(false);

  const extractIdFromUrl = (url) => {
    const m = url.match(/\/pokemon\/(\d+)\/?$/);
    return m ? m[1] : null;
  }

  async function searchPokemon(name) {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      if (!res.ok) {
        setShowError(true);
        setTimeout(() => setShowError(false), 2500);
        return null;
      }
      return await res.json();
    } catch (error) {
      console.error(error)
    }
  }

  async function handleSearch(id) {
    const result = await searchPokemon(id);
    if (result) {
      setQuery('');
      setPokemon(result);
      setOpen(true);
    }
  }

  useEffect(() => {
    const offset = (page - 1) * limit;
    async function loadPokemon() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const json = await response.json();
        setData(json?.results.map(item => ({
          ...item,
          id: extractIdFromUrl(item.url)
        })));
      } catch (error) {
        setShowError(true);
        setTimeout(() => setShowError(false), 2500);
      }
    }

    loadPokemon();
  }, [page]);

  return (
    <div className='flex flex-col items-center bg-[#2b2b2b] bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_40px,transparent_40px,transparent_110px)]
      bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.02)_0px,rgba(255,255,255,0.02)_4px,transparent_4px,transparent_40px)] bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.05)_2px,transparent_3px)]
      bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.05)_2px,transparent_3px)] bg-[radial-gradient(circle_at_40%_80%,rgba(255,255,255,0.05)_2px,transparent_3px)] bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.05)_2px,transparent_3px)]
      bg-blend-normal'>
      <div className='w-[90%] md:w-[70%] bg-white'>
        <div className='flex items-center justify-center p-2'>
          <img src={pokebola} title='pokebola' className='w-20 h-20' />
          <h1 className='text-[#919191] text-4xl'>Pokédex</h1>
        </div>
        <div className='bg-gray-800 p-5 flex flex-col items-center md:items-start'>
          <label className='text-2xl font-montserrat text-white'>Nome ou número</label>
          <div className='mt-2 flex '>
            <input className='rounded-md me-2' value={query} onChange={(e) => setQuery(e.target.value)} />
            <button className='bg-red-600 p-1 rounded-md' disabled={!query}>
              < img src={lupa} onClick={() => handleSearch(query)} />
            </button>
          </div>
        </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 1}
            className="
              px-4 py-2 rounded-lg font-medium
              bg-gray-900 text-white 
              hover:bg-gray-700 transition
              disabled:bg-gray-400 disabled:cursor-not-allowed
              shadow-md 
            "
          >
            ◀ Página anterior
          </button>

          <span className="px-4 py-2 bg-gray-200 rounded-lg shadow text-gray-800 font-semibold">
            Página {page}
          </span>

          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page === 64}
            className="
              px-4 py-2 rounded-lg font-medium
              bg-gray-900 text-white 
              hover:bg-gray-700 transition
              disabled:bg-gray-400 disabled:cursor-not-allowed
              shadow-md
            "
          >
            Próxima página ▶
          </button>
        </div>
        <div className='flex flex-wrap justify-center my-3'>
          {
            data.map((item, index) => <Card key={index} pokemon={item} onClick={() => handleSearch(item.id)}  />)
          }
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} pokemon={pokemon} />
      <Toast
        type="error"
        message="Ocorreu um erro ao buscar o Pokémon."
        visible={showError}
      />
    </div>
  );
}

export default App;
