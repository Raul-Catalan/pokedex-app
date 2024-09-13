import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

//Pokemon Props Interface
interface PokemonProps {
  id: number;
}

const Pokemon = ({ id }: PokemonProps) => {
  const { status, data, error, isPending } = useQuery({
    queryKey: ["pokemon", { id }],
    queryFn: async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      return await response.json();
    },
  });

  return (
    <div>
      {status === "pending" ? (
        <p>Loading...</p>
      ) : status === "error" ? (
        <div>Error: {error.message}</div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</CardTitle>
            <CardDescription>
                #{data.id.toString().padStart(4, '0')}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Image
                src={data.sprites.front_default}
                width={100}
                height={100}
                alt={`Image of ${data.name}`}
            />
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant='outline'>Details</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default Pokemon;
