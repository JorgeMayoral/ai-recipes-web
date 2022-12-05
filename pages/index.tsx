import Head from 'next/head';
import { Recipe } from '../common/interfaces';
import { RecipeCard } from '../components/RecipeCard';
import recipes from '../data/recipes.json';

export default function Home() {
  return (
    <div>
      <Head>
        <title>AI Recipes</title>
        <meta name="description" content="AI generated recipes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {recipes.map((recipe: Recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            description={recipe.description}
          />
        ))}
      </main>
    </div>
  );
}
