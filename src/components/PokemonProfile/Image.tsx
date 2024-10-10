type Props = {
    id: string;
    name: string;
};

const PokemonProfileImage = ({ id, name }:Props) => (
    <div className="lg:col-span-4 lg:row-end-1">
        <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg">
            <img style={{ maxHeight: '70vh' }} alt={name} src={`https://raw.githubusercontent.com/amit08255/pokeapi-sprites/6c11303b4416261519c89ab259e9723c2622d128/sprites/pokemon/other/dream-world/${id}.svg`} className="w-full" />
        </div>
    </div>
);

export default PokemonProfileImage;
