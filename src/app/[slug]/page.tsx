import useGetPokemonDetails from "@/hooks/useGetPokemonDetails";
import PokemonProfile from "@/components/PokemonProfile";
import useGetEvolutiionChain from "@/hooks/useGetEvolutiionChain";
import NavigationButton from "@/components/NavigationButton";

export default async function PokemonDetailsPage({ params }: { params: { slug: string } }) {
    const { getPokemonDetails } = useGetPokemonDetails();
    const { getEvolutionChain, extractEvolutionChain } = useGetEvolutiionChain();

    const detailsPromise = getPokemonDetails(params.slug);
    const evolutionPromise = getEvolutionChain(params.slug);

    const [details, evolution] = await Promise.all([detailsPromise, evolutionPromise]);
    const evolutionList:Array<{ name: string, url: string }> = [];

    extractEvolutionChain(evolution, evolutionList);

    return (
        <>
            <div className="py-4 px-5 border-b bg-white">
                <NavigationButton />
            </div>
            <PokemonProfile evolution={evolutionList} details={details} />
        </>
    );
}
