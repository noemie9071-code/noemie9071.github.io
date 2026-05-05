import type { Metadata } from "next";
import { RecipesFilter } from "./recipes-filter";

export const metadata: Metadata = {
  title: "Recettes faciles et rapides | Mon carnet de cuisine",
  description: "Découvrez des recettes simples: petit-déjeuner, plats, desserts et plus."
};

export default function Home() {
  return (
    <main className="p-6 bg-[#fdf6f0] min-h-screen">
      <h1 className="text-4xl font-bold mb-2 text-center">📖 Mon carnet de recettes</h1>
      <RecipesFilter />
    </main>
  );
}
