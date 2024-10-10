'use client'

import {useRouter} from "next/navigation";

const NavigationButton = () => {
    const router = useRouter();

    const onGoBack = () => {
        router.back()
    }

    return (
        <button onClick={onGoBack} className="font-semibold text-sky-500 hover:text-sky-700 group-hover:text-sky-700">
            &lt; Go back
        </button>
    )
}

export default NavigationButton;
