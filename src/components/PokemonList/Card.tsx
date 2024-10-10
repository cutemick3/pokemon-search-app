import Link from "next/link";

type Props = {
    item: { name: string, url: string, types: string[] },
};

const PokemonListCard = ({ item }:Props) => (
    <Link href={`/${item.name}`} className="group flex flex-col items-start justify-between">
        <div className="relative w-full">
            <div className="absolute flex flex-col gap-2 mt-2 mr-2 right-0 top-0">
                {
                    item.types.map((type) => (
                        <div title={`Type - ${type}`} key={`icon-${item.name}-${type}`} className={`type-icon ${type}`}>
                            <img src={`/images/types/${type}.png`} alt={type} />
                        </div>
                    ))
                }
            </div>
            <img
                alt={item.name}
                src={`https://raw.githubusercontent.com/amit08255/pokeapi-sprites/6c11303b4416261519c89ab259e9723c2622d128/sprites/pokemon/other/dream-world/${item.url.split('/')[6]}.svg`}
                className="w-full rounded-2xl bg-gray-100 p-5"
                style={{ height: '250px' }}
                loading="lazy"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="max-w-xl">
            <h3 className="capitalize mt-3 text-lg font-semibold leading-6 text-sky-500 hover:text-sky-700 group-hover:text-sky-700">
                {item.name}
            </h3>
        </div>
    </Link>
);

export default PokemonListCard;
