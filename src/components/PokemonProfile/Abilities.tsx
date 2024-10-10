type Props = {
    name: string;
    abilities: Array<{ is_hidden: boolean, ability: { name: string } }>;
};

const PokemonProfileAbilities = ({ name, abilities }:Props) => (
    <div className="mt-6">
        <h3 className="font-semibold">Abilities</h3>
        <div className="mt-2 flex gap-3">
            {
                abilities.map((item) => (
                    <span title={item.is_hidden ? 'Hidden ability' : undefined} key={`ability-${name}-${item.ability.name}`} className={`capitalize inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-semibold ${item.is_hidden ? 'text-gray-400' : 'text-gray-500'} ring-1 ring-inset ring-gray-500/10`}>
                        {item.ability.name}
                    </span>
                ))
            }
        </div>
    </div>
);

export default PokemonProfileAbilities;
