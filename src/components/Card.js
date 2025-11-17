function Card({pokemon, onClick}) {
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    return (
        <div onClick={onClick} className="flex-col items-center shadow-lg m-2 rounded-lg p-2 cursor-pointer  w-100 md:w-44
        bg-[linear-gradient(to_bottom,_#f8f8f8,_#efefef),_repeating-linear-gradient(45deg,_rgba(0,0,0,0.03)_0px,_rgba(0,0,0,0.03)_1px,_transparent_1px,_transparent_8px)] bg-blend-overlay">
             <div className="flex justify-end font-bold text-cyan-800">#{pokemon.id}</div>
            <img
                src={image}
                alt={pokemon?.name}
                className="w-60 md:w-40 h-60 md:h-40 object-cover"
            />
            <p className="text-center text-2xl font-montserrat font-bold tracking-wide text-cyan-800">{pokemon?.name}</p>
        </div>
    )
}

export default Card;