import Navigation from "@/app/components/Navigation";
import Providers from "@/app/context/Providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Pokedex Web App to Search Pokemon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
