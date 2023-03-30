import { useEffect } from "react";

export default function PokeButton({ name }) {
    useEffect(() => {
        console.log(name);
    }, []);
    return (
        <button>
            {name}
        </button>
    );
}