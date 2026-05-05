"use client";

import { useState } from "react";
import Link from "next/link";
import { recettes } from "@/lib/data";

const categories = [
  { key: "all", label: "Tout" },
  { key: "petit-dej", label: "Petit-déj" },
  { key: "entree", label: "Entrée" },
  { key: "plat", label: "Plat" },
  { key: "dessert", label: "Dessert" },
];

export function RecipesFilter() {
  const [selected, setSelected] = useState("all");

  const filtered =
    selected === "all"
      ? recettes
      : recettes.filter((r) => r.category === selected);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 my-6">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelected(cat.key)}
            className={`px-4 py-2 rounded-full shadow transition ${
              selected === cat.key
                ? "bg-orange-500 text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((r) => (
          <Link key={r.slug} href={`/recettes/${r.slug}`}>
            <div className="bg-white p-4 rounded-xl shadow hover:scale-105 transition cursor-pointer">
              <img
                src={r.image}
                alt={r.title}
                className="rounded mb-2 w-full h-40 object-cover"
              />
              <h2 className="font-semibold text-sm">{r.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
