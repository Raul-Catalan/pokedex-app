import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Key } from "react";

//Pokemon Props Interface
interface PokemonProps {
  name: string;
}

// Function to return Tailwind color class based on Pokémon type
const badgeColor = (typeName: string) => {
  switch (typeName) {
    case "normal":
      return "bg-gray-600";
    case "fire":
      return "bg-red-600";
    case "water":
      return "bg-blue-500";
    case "electric":
      return "bg-yellow-400";
    case "grass":
      return "bg-green-600";
    case "ice":
      return "bg-blue-200";
    case "fighting":
      return "bg-red-700";
    case "poison":
      return "bg-purple-600";
    case "ground":
      return "bg-yellow-700";
    case "flying":
      return "bg-blue-300";
    case "psychic":
      return "bg-pink-600";
    case "bug":
      return "bg-green-700";
    case "rock":
      return "bg-yellow-800";
    case "ghost":
      return "bg-purple-800";
    case "dragon":
      return "bg-indigo-600";
    default:
      return "bg-gray-200"; // Fallback color
  }
};

const Pokemon = ({ name }: PokemonProps) => {
  const { status, data, error } = useQuery({
    queryKey: ["pokemon", { name }],
    queryFn: async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name}/`,
      );
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
            <CardTitle>
              {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
            </CardTitle>
            <CardDescription>
              #{data.id.toString().padStart(4, "0")}
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
          <CardFooter className="flex justify-evenly">
            {data.types.map((typeData: any, index: number) => {
              let typeName = typeData.type.name;
              //typeName = type.charAt(0).toUpperCase() + type.slice(1);
              let color = badgeColor(typeName);
              return (
                <Badge key={index} className={`${color}`}>
                  {typeName}
                </Badge>
              );
            })}
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default Pokemon;
