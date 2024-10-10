'use client'

import PokemonTypeSelect from "@/components/PokemonList/TypeSelect";
import {useState} from "react";
import Link from "next/link";

type Props = {
    name: string,
    type: string,
};

const PokemonListFilter = ({ name, type }:Props) => {
    const [selectedType, setSelectedType] = useState(type || '');
    const [query, setQuery] = useState(name || '');

    const onClearFilter = () => {
        setSelectedType('');
        setQuery('');
    };

    return (
        <div className="mt-10 flex md:flex-row flex-col items-center">
            <PokemonTypeSelect onChange={setSelectedType} value={selectedType} />
            <input
                id="query"
                name="query"
                type="text"
                placeholder="Search Pokemon by name"
                className="mt-2 md:mt-0 md:ml-2 block w-full min-w-72 md:min-w-fit max-w-60 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 text-sm"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Link href={selectedType || query ? `/?type=${selectedType}&name=${query}` : '/'}>
                <button
                    type="button"
                    className="mt-2 md:mt-0 w-auto min-w-72 md:min-w-fit md:ml-2 rounded-md bg-sky-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                    Filter Pokemon
                </button>
            </Link>
            {
                selectedType || query ? (
                    <Link href="/">
                        <button
                            type="button"
                            className="mt-2 md:mt-0 w-auto min-w-72 md:min-w-fit md:ml-2 rounded-md bg-gray-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                            onClick={onClearFilter}
                        >
                            Clear Filter
                        </button>
                    </Link>
                ) : null
            }
        </div>
    );
};

export default PokemonListFilter;
