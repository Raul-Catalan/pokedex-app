"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import Image from "next/image";

const fetchPokemon = async (pokemonId: string) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
  );
  if (!response.ok) throw new Error("Failed to fetch Pokemon");
  return response.json();
};

const Pokemon = ({ params }: { params: { name: string } }) => {
  const { name } = params;

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => fetchPokemon(name),
    enabled: !!name,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    <p>Failed to load Pokemon. </p>;
  }

  return (
    <main>
      <Card>
        <CardHeader>
          <CardTitle>{data.name}</CardTitle>
          <CardDescription>
            #{data.id.toString().padStart(4, "0")}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between">
          <section>

        <Image
              src={data.sprites.front_default}
              width={200}
              height={200}
              alt={`Image of ${data.name}`}
              />
              </section>
              <section>
                <p>Right Side</p>
              </section>
        </CardContent>
      </Card>
    </main>
  );
};

export default Pokemon;
