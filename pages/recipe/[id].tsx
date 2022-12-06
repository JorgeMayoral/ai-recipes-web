import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import { PrismaClient } from '@prisma/client';
import { PageRecipe } from '../../common/interfaces';
import Footer from '../../components/Footer';

interface RecipePageProps {
  recipe: PageRecipe;
}

const RecipePage = ({ recipe }: RecipePageProps) => {
  if (recipe === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Head>
        <title>{recipe.title}</title>
        <meta name="description" content={recipe.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <article className="format lg:format-lg flex flex-col items-center gap-4 mb-12 mx-8">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          {recipe.title}
        </h1>
        {recipe.image && (
          <Image
            src={recipe.image}
            alt={recipe.title}
            width={512}
            height={512}
          />
        )}
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
          {recipe.description}
        </p>
        <h2 className="mb-2 text-lg font-semibold text-gray-900">
          Ingredientes
        </h2>
        <ul className="space-y-1 max-w-xl list-disc list-inside text-gray-700">
          {recipe.ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="mb-2 text-lg font-semibold text-gray-900">Pasos</h2>
        <ul className="space-y-1 max-w-xl list-disc list-inside text-gray-700">
          {recipe.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>
      </article>
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const prisma = new PrismaClient();
  const id = Number(query.id);

  const recipe = await prisma.recipe.findFirst({
    where: { id },
  });

  if (!recipe) {
    return { props: { recipe: {} } };
  }

  const data: PageRecipe = {
    id: recipe.id,
    title: recipe.title,
    description: recipe.description,
    image: recipe.image,
    steps: recipe.steps,
    ingredients: recipe.ingredients,
  };

  return { props: { recipe: data } };
};

export default RecipePage;
