import {useEffect, useState} from 'react';
import useGetPokemonTypes from "@/hooks/useGetPokemonTypeList";

type Props = {
    value: string,
    onChange: (value: string) => void,
};

const PokemonTypeSelect = ({ value, onChange }:Props) => {
    const { getPokemonTypes, pokemonTypes } = useGetPokemonTypes();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        getPokemonTypes();
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option:string) => {
        if (option === value) {
            onChange('');
            setIsOpen(false);
            return;
        }

        onChange(option);
        setIsOpen(false);
    };

    return (
        <div>
            <div className="relative">
                <button
                    type="button"
                    className="relative w-auto min-w-72 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600 text-sm"
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                    aria-labelledby="listbox-label"
                    onClick={toggleDropdown}
                >
                    <span className="block truncate capitalize">{value || 'Select Pokemon Type'}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
            >
              <path
                  fillRule="evenodd"
                  d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                  clipRule="evenodd"
              />
            </svg>
          </span>
                </button>

                {isOpen && (
                    <ul
                        className="absolute z-10 mt-1 max-h-60 w-auto min-w-72 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        role="listbox"
                        aria-labelledby="listbox-label"
                    >
                        {pokemonTypes.map((option, index) => (
                            <li
                                key={index}
                                className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-gray-100 hover:cursor-pointer"
                                role="option"
                                onClick={() => handleSelect(option)}
                            >
                                <span className="block truncate font-normal capitalize">{option}</span>
                                {option === value && (
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-sky-600">
                                        <svg
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                          <path
                                              fillRule="evenodd"
                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                              clipRule="evenodd"
                                          />
                                        </svg>
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default PokemonTypeSelect;
