/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

const useGetPokemonTypes = () => {
    const [pokemonTypes, setPokemonTypes] = useState([]);

    const getPokemonTypes = () => {
        fetch('https://pokeapi.co/api/v2/type')
            .then(response => response.json())
            .then(data => {
                const types = data.results.map((type:any) => (type.name));
                setPokemonTypes(types);
            });
    };

    return ({ pokemonTypes, getPokemonTypes });
};

export default useGetPokemonTypes;
