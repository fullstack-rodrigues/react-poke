function Card({pokemon, index}) {
    const extractIdFromUrl = (url) => {
    const m = url.match(/\/pokemon\/(\d+)\/?$/);
    return m ? m[1] : null;
  };

    const id = extractIdFromUrl(pokemon.url);
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <div className="flex-col items-center shadow-lg m-2 rounded-lg p-2 cursor-pointer
        bg-[linear-gradient(to_bottom,_#f8f8f8,_#efefef),_repeating-linear-gradient(45deg,_rgba(0,0,0,0.03)_0px,_rgba(0,0,0,0.03)_1px,_transparent_1px,_transparent_8px)] bg-blend-overlay">
            <img
                src={image}
                alt="Bulbasaur"
                className="w-60 md:w-40 h-60 md:h-40 object-cover"
            />
            <p className="text-center text-2xl font-montserrat font-bold tracking-wide text-cyan-800">{pokemon?.name}</p>
        </div>
    )
}

export default Card;