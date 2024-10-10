type Props = {
    height: number;
    weight: number;
    base_experience: number;
};

const PokemonProfileDimension = ({ height, base_experience, weight }:Props) => (
    <div className="mt-6">
        <ul role="list">
            <li>
                <span className="font-semibold">Height:</span> {height / 10}m
            </li>
            <li>
                <span className="font-semibold">Weight:</span> {weight / 10}kg
            </li>
            <li>
                <span className="font-semibold">Base Experience:</span> {base_experience}
            </li>
        </ul>
    </div>
);

export default PokemonProfileDimension;
