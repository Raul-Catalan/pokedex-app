"use client";

import Image from "next/image";
import Pokemon from "./components/Pokemon";

export default function Home() {
  return (
    <main className="m-8 flex flex-col">
      <header className="flex flex-col items-center">
        <Image
          src="/images/Title.png"
          width={640}
          height={235}
          alt="Pokemon Title Image"
        />
        <h1 className="text-center text-2xl">Generation I</h1>
      </header>
      <section className="m-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8">
        {Array.from({ length: 151 }, (_, index) => (
          <Pokemon key={index + 1} id={index + 1} />
        ))}
      </section>
    </main>
  );
}
