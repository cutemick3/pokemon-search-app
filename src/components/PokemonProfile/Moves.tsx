type Props = {
    name: string;
    moves: Array<{ move: { name: string } }>;
};

const PokemonProfileMoves = ({ name, moves }:Props) => (
    <div className="mt-6">
        <h3 className="font-semibold">Moves</h3>
        <div className="mt-2 flex gap-3 flex-wrap">
            {
                moves.map((item) => (
                    <span key={`move-${name}-${item.move.name}`} className="capitalize inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-semibold text-gray-500 ring-1 ring-inset ring-gray-500/10">
                        {item.move.name}
                    </span>
                ))
            }
        </div>
    </div>
);

export default PokemonProfileMoves;
