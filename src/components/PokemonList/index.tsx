import PokemonListHeader from "@/components/PokemonList/Header";
import PokemonListCard from "@/components/PokemonList/Card";
import PokemonListFilter from "@/components/PokemonList/Filter";

type Props = {
    list: Array<{ name: string, url: string, types: string[] }>,
    filterType: string,
    filterName: string,
}

const PokemonList = ({ list, filterName, filterType }:Props) => (
    <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <PokemonListHeader title="Pokemon Dex" description="Explore the beautiful world of Pokemon" />
            <PokemonListFilter name={filterName} type={filterType} />
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {list.map((item) => (
                    <PokemonListCard key={item.name} item={item} />
                ))}
            </div>
        </div>
    </div>
);

export default PokemonList;
