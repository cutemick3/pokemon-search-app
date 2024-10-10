import { Fragment } from 'react';
import Link from "next/link";

type Props = {
    name: string;
    evolution: Array<{ name: string, url: string }>;
};

const PokemonProfileEvolution = ({ name, evolution }:Props) => (
    <div className="mx-auto mt-24 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
        <h3 className="text-2xl font-semibold">Evolution Chain</h3>
        <div className="mt-6 flex gap-10 flex-wrap items-center">
            {
                evolution.map((item, index) => (
                    <Fragment key={`${name}-evolution-${item.name}`}>
                        {
                            index > 0 ? (
                                <img style={{ height: '30px' }} src="/images/right-arrow.png" />
                            ) : null
                        }
                        <Link href={`/${item.name}`} key={item.name} className="group flex flex-col items-start justify-between">
                            <img
                                alt={item.name}
                                src={`https://raw.githubusercontent.com/amit08255/pokeapi-sprites/6c11303b4416261519c89ab259e9723c2622d128/sprites/pokemon/other/dream-world/${item.url.split('/')[6]}.svg`}
                                className="w-full"
                                style={{ height: '80px' }}
                                loading="lazy"
                            />
                            <div className="w-full text-center">
                                <h3 className="capitalize mt-3 text-xs font-semibold leading-6 text-sky-500 hover:text-sky-700 group-hover:text-sky-700">
                                    {item.name}
                                </h3>
                            </div>
                        </Link>
                    </Fragment>
                ))
            }
        </div>
    </div>
);

export default PokemonProfileEvolution;
