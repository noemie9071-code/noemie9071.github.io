import { useState } from "react";
import Link from "next/link";
import { recettes } from "@/lib/data";

export const metadata = {
  title: "Recettes faciles et rapides | Mon carnet de cuisine",
  description: "Découvrez des recettes simples: petit-déjeuner, plats, desserts et plus."
};

const categories = [
  { key: "all", label: "Tout" },
  { key: "petit-dej", label: "Petit-déj" },
  { key: "entree", label: "Entrée" },
  { key: "plat", label: "Plat" },
  { key: "dessert", label: "Dessert" },
];

export default function Home() {
  const [selected, setSelected] = useState("all");

  const filtered =
    selected === "all"
      ? recettes
      : recettes.filter((r) => r.category === selected);

  return (
    <main className="p-6 bg-[#fdf6f0] min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-2">📖 Mon carnet de recettes</h1>

      <div className="flex flex-wrap justify-center gap-3 my-6">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelected(cat.key)}
            className="px-4 py-2 bg-white rounded-full shadow"
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((r) => (
          <Link key={r.slug} href={`/recettes/${r.slug}`}>
            <div className="bg-white p-4 rounded-xl shadow hover:scale-105">
              <img src={r.image} alt={r.title} className="rounded mb-2" />
              <h2>{r.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
