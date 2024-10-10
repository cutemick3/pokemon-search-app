type Props = {
    name: string;
    stats: Array<{ base_stat: number, stat: { name: string } }>;
};

const PokemonProfileStats = ({ name, stats }:Props) => (
    <div className="mt-6">
        <h3 className="font-semibold">Stats</h3>
        <div className="mt-2 flex gap-3 flex-wrap">
            {
                stats.map((item) => (
                    <span key={`stats-${name}-${item.stat.name}`} className="capitalize inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-semibold text-gray-500 ring-1 ring-inset ring-gray-200">
                            <svg viewBox="0 0 6 6" aria-hidden="true" className="h-1.5 w-1.5 fill-green-500">
                              <circle r={3} cx={3} cy={3} />
                            </svg>
                        {`${item.stat.name}: ${item.base_stat}`}
                    </span>
                ))
            }
        </div>
    </div>
);

export default PokemonProfileStats;
