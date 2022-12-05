import Head from 'next/head';
import { Recipe } from '../common/interfaces';
import Navbar from '../components/Navbar';
import { RecipeCard } from '../components/RecipeCard';
import { recipes } from '../data/recipes';

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>AI Recipes</title>
        <meta name="description" content="AI generated recipes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="w-full grid grid-cols-4 gap-4 m-12">
        {recipes.map((recipe: Recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
          />
        ))}
      </main>
    </div>
  );
}
