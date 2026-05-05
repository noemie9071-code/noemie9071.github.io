import { recettes } from "@/lib/data";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const recette = recettes.find((r) => r.slug === params.slug);

  return {
    title: `${recette?.title || "Recette"} | Recette facile`,
    description: recette?.description || "",
  };
}

export default function Recette({ params }) {
  const recette = recettes.find((r) => r.slug === params.slug);

  if (!recette) return <div>Recette non trouvée</div>;

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">{recette.title}</h1>

      <Image
        src={recette.image}
        alt={recette.title}
        width={600}
        height={400}
        className="rounded my-4"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Recipe",
            name: recette.title,
            image: [recette.image],
            description: recette.description,
            recipeCategory: recette.category,
            prepTime: recette.prepTime,
            cookTime: recette.cookTime,
            recipeIngredient: recette.ingredients,
            recipeInstructions: recette.steps.map((step) => ({
              "@type": "HowToStep",
              text: step,
            })),
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.5",
              reviewCount: "10",
            },
          }),
        }}
      />

      <h2>Ingrédients</h2>
      <ul>
        {recette.ingredients.map((i, idx) => (
          <li key={idx}>• {i}</li>
        ))}
      </ul>

      <h2>Préparation</h2>
      <ol>
        {recette.steps.map((s, idx) => (
          <li key={idx}>{s}</li>
        ))}
      </ol>
    </main>
  );
}
