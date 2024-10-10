type Props = {
    name: string;
    forms: Array<{ name: string }>;
};

const PokemonProfileForms = ({ name, forms }:Props) => (
    <div className="mt-6">
        <h3 className="font-semibold">Forms</h3>
        <div className="mt-2 flex gap-3">
            {
                forms.map((item) => (
                    <span key={`form-${name}-${item.name}`} className="capitalize inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-semibold text-gray-500 ring-1 ring-inset ring-gray-500/10">
                        {item.name}
                    </span>
                ))
            }
        </div>
    </div>
);

export default PokemonProfileForms;
