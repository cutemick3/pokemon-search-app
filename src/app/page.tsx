import PokemonList from "@/components/PokemonList";
import pokemonDB from "@/pokemon.json";

export default function Home({ searchParams }:{
  searchParams: { name: string, type: string };
}) {
  // Filter the Pokemon list based on the query parameters
  const filteredList = pokemonDB.filter(pokemon => {
    return (!searchParams.type || pokemon.types.includes(searchParams.type)) && (!searchParams.name || pokemon.name.toLowerCase().includes(searchParams.name));
  });

  return (
      <PokemonList list={filteredList} filterType={searchParams.type} filterName={searchParams.name} />
  );
}
