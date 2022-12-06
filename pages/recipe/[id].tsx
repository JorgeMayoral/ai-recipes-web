import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import { normalizeText } from '../../utils';
import { PrismaClient } from '@prisma/client';
import { PageRecipe } from '../../common/interfaces';

interface RecipePageProps {
  recipe: PageRecipe;
}

const RecipePage = ({ recipe }: RecipePageProps) => {
  if (recipe === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <article className="format lg:format-lg">
      <Head>
        <title>{recipe.title}</title>
        <meta name="description" content={recipe.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {recipe.image && (
        <Image src={recipe.image} alt={recipe.title} width={512} height={512} />
      )}
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <h2>Ingredientes</h2>
      <ul>
        {recipe.ingredients.map(({ name, quantity }, i) => (
          <li key={i}>
            {normalizeText(name)}: {quantity}
          </li>
        ))}
      </ul>
      <h2>Pasos</h2>
      <ol>
        {recipe.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </article>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const prisma = new PrismaClient();
  const id = Number(query.id);

  const recipe = await prisma.recipe.findFirst({
    where: { id },
    include: {
      ingredients: true,
    },
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
    ingredients: recipe.ingredients.map((ingredient) => ({
      name: ingredient.name,
      quantity: ingredient.quantity,
    })),
  };

  return { props: { recipe: data } };
};

export default RecipePage;
