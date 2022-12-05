import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Recipe } from '../../common/interfaces';
import { recipes } from '../../data/recipes';
import { normalizeText } from '../../utils';

const RecipePage = () => {
  const [recipe, setRecipe] = useState<Recipe>();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      setRecipe(recipes.filter((rec) => rec.id === id)[0]);
    }
  }, [id]);

  if (recipe === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <article>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <h2>Ingredientes</h2>
      <ul>
        {Object.entries(recipe.ingredients).map(([ingredient, quantity], i) => (
          <li key={i}>
            {normalizeText(ingredient)}: {quantity}
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

export default RecipePage;
