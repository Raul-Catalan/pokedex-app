import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

const fetchPokemon = async (pokemonId : string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    if(!response.ok) throw new Error("Failed to fetch Pokemon");
    return response.json();
}

const Pokemon = () => {
    const router = useRouter();
    const { pokemonId } = router.query

    const { status, data, error } = useQuery({
        queryKey: ["pokemon", pokemonId],
        queryFn: () => fetchPokemon(pokemonId as string),
        enabled: !!pokemonId,
      });

    return (
        <div>
            <h1>Name: </h1>
            <p>This is just for testing</p>
        </div>
    )
}