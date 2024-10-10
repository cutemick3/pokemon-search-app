/* eslint-disable @typescript-eslint/no-explicit-any */
const useGetEvolutiionChain = () => {
    const getEvolutionChain = (name:string) => {
        // Step 1: Get the species ID
        return (fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`)
            .then(response => response.json())
            .then(data => {
                const speciesId = data.id;

                // Step 2: Get the evolution chain ID
                return fetch(`https://pokeapi.co/api/v2/pokemon-species/${speciesId}/`)
                    .then(response => response.json())
                    .then(data => {
                        const evolutionChainId = data.evolution_chain.url.split('/')[6];

                        // Step 3: Get the evolution chain
                        return fetch(`https://pokeapi.co/api/v2/evolution-chain/${evolutionChainId}/`)
                            .then(response => response.json())
                            .then(data => data.chain);
                    });
            }));
    };

    const extractEvolutionChain = (evolution:any, chain: Array<{ name: string, url: string }>) => {
        if (evolution.species) {
            const speciesId:number = parseInt(evolution.species.url.split('/')[6], 10);

            if (speciesId < 650) {
                chain.push(evolution.species);
            }
        }

        if (evolution.evolves_to.length > 0) {
            evolution.evolves_to.forEach((evolution:any) => {
                extractEvolutionChain(evolution, chain);
            });
        }
    };

    return ({ getEvolutionChain, extractEvolutionChain });
};

export default useGetEvolutiionChain;
