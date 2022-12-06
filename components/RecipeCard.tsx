import Link from 'next/link';
import { ListRecipe } from '../common/interfaces';

export const RecipeCard = ({ id, title, description }: ListRecipe) => {
  return (
    <Link
      href={`/recipe/${id}`}
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h5>
      <p className="font-normal text-gray-700">{description}</p>
    </Link>
  );
};
