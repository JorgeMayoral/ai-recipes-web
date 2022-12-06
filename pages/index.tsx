import { GetStaticProps } from 'next';
import Head from 'next/head';
import { ListRecipe } from '../common/interfaces';
import Navbar from '../components/Navbar';
import { RecipeCard } from '../components/RecipeCard';
import { PrismaClient } from '@prisma/client';

interface HomePageProps {
  recipes: ListRecipe[];
}

export default function Home({ recipes }: HomePageProps) {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>AI Recipes</title>
        <meta name="description" content="AI generated recipes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="w-full grid grid-cols-4 gap-4 m-12">
        {recipes.map((recipe: ListRecipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
            image={recipe.image}
          />
        ))}
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prisma = new PrismaClient();

  const recipes = await prisma.recipe.findMany();

  if (!recipes) {
    return { props: { recipe: {} } };
  }

  const data: ListRecipe[] = recipes.map((recipe) => ({
    id: recipe.id,
    title: recipe.title,
    description: recipe.description,
    image: recipe.image,
  }));

  return { props: { recipes: data } };
};
