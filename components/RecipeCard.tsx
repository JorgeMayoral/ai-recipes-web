import Image from 'next/image';
import Link from 'next/link';
import { ListRecipe } from '../common/interfaces';

export const RecipeCard = ({ id, title, description, image }: ListRecipe) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
      {image && (
        <Link href={`/recipe/${id}`}>
          <Image
            className="rounded-t-lg"
            src={image}
            alt={title}
            width={512}
            height={512}
          />
        </Link>
      )}
      <div className="p-5">
        <Link href={`/recipe/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
      </div>
    </div>
  );
};
