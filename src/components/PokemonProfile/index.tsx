import PokemonProfileImage from "@/components/PokemonProfile/Image";
import PokemonProfileSummary from "@/components/PokemonProfile/Summary";
import PokemonProfileDimension from "@/components/PokemonProfile/Dimension";
import PokemonProfileAbilities from "@/components/PokemonProfile/Abilities";
import PokemonProfileForms from "@/components/PokemonProfile/Forms";
import PokemonProfileStats from "@/components/PokemonProfile/Stats";
import PokemonProfileMoves from "@/components/PokemonProfile/Moves";
import PokemonProfileEvolution from "@/components/PokemonProfile/Evolution";

type Props = {
    details: {
        id: string;
        name: string;
        height: number;
        weight: number;
        base_experience: number;
        types: Array<{ type: { name: string } }>;
        abilities: Array<{ is_hidden: boolean, ability: { name: string } }>;
        moves: Array<{ move: { name: string } }>;
        forms: Array<{ name: string }>;
        stats: Array<{ base_stat: number, stat: { name: string } }>
    };
    evolution: Array<{ name: string, url: string }>;
};

const PokemonProfile = ({ details, evolution }:Props) => (
    <div className="bg-white text-gray-900">
        <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
                <PokemonProfileImage name={details.name} id={details.id} />

                <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
                    <PokemonProfileSummary name={details.name} types={details.types} />

                    <PokemonProfileDimension height={details.height} weight={details.weight} base_experience={details.base_experience} />

                    <PokemonProfileAbilities name={details.name} abilities={details.abilities} />

                    <PokemonProfileForms name={details.name} forms={details.forms} />

                    <PokemonProfileStats name={details.name} stats={details.stats} />

                    <PokemonProfileMoves name={details.name} moves={details.moves} />
                </div>

                <PokemonProfileEvolution name={details.name} evolution={evolution} />
            </div>
        </div>
    </div>
);

export default PokemonProfile;
