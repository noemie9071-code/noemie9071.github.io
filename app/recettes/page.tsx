import Link from "next/link";
import { recettes } from "@/lib/data";

export const metadata = {
  title: "Toutes les recettes",
  description: "Liste complète de toutes les recettes disponibles."
};

export default function Recettes() {
  return (
    <main className="p-6">
      <h1 className="text-3xl mb-4">Toutes les recettes</h1>

      {recettes.map((r) => (
        <Link key={r.slug} href={`/recettes/${r.slug}`}>
          <div className="mb-2">{r.title}</div>
        </Link>
      ))}
    </main>
  );
}
