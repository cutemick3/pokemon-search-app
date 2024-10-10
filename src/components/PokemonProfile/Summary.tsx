type Props = {
    name: string;
    types: Array<{ type: { name: string } }>;
}

const PokemonProfileSummary = ({ name, types }:Props) => (
    <div className="flex flex-col-reverse">
        <div className="mt-4">
            <h1 className="capitalize text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{name}</h1>
            <div className={"flex gap-3 mt-6"}>
                {
                    types.map((item) => (
                        <div title={`Type - ${item.type.name}`} key={`icon-${name}-${item.type.name}`} className={`type-icon ${item.type.name}`}>
                            <img src={`/images/types/${item.type.name}.png`} alt={item.type.name} />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
);

export default PokemonProfileSummary;
