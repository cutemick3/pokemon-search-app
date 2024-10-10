const useGetPokemonDetails = () => {
    const getPokemonDetails = async (name:string) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        return data;
    }

    return ({ getPokemonDetails });
};

export default useGetPokemonDetails;
