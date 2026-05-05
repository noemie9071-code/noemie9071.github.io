import Link from "next/link";
import { recettes } from "@/lib/data";

export default function Recettes() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">📖 Toutes les recettes</h1>

      <div className="space-y-2">
        {recettes.map((r) => (
          <Link key={r.slug} href={`/recettes/${r.slug}`}>
            <div className="p-3 bg-white rounded-lg shadow hover:bg-gray-50 transition-colors">
              {r.title}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
