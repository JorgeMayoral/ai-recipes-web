import { Recipe } from '../common/interfaces';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Tortilla española para una persona',
    description:
      'Una sencilla receta para preparar una deliciosa tortilla española en poco tiempo.',
    ingredients: {
      huevos: '2',
      patatas: '100 g',
      cebolla: '1/4',
      aceite_de_oliva: '2 cucharadas',
      sal: 'al gusto',
    },
    steps: [
      'Pelar y cortar las patatas en rodajas delgadas.',
      'Pelar y picar finamente la cebolla.',
      'Calentar una sartén con un poco de aceite de oliva y añadir las patatas y la cebolla. Cocinar a fuego medio hasta que estén tiernas y doradas, removiendo de vez en cuando.',
      'Batir los huevos en un recipiente y agregar una pizca de sal. Mezclar bien.',
      'Añadir los huevos batidos a la sartén con las patatas y la cebolla. Cocinar a fuego medio, moviendo la mezcla de vez en cuando hasta que esté cuajada y dorada por ambos lados.',
      'Servir caliente, cortada en porciones cuadradas.',
    ],
    keywords: {
      course: 'principal',
      cuisine: 'española',
      diet: 'vegetariana',
      allergies: 'sin_gluten',
      cookingTime: 'rápida',
      occasion: 'almuerzo',
      skillLevel: 'fácil',
      calories: 'baja',
      rating: 'alta',
    },
  },
  {
    id: '2',
    title: 'Chicken fajita para una persona',
    description:
      'Una receta fácil y rápida para preparar unas deliciosas fajitas de pollo.',
    ingredients: {
      pechuga_de_pollo: '100 g',
      pimiento_verde: '1/2',
      cebolla: '1/4',
      ajos: '2 dientes',
      aceite_de_oliva: '1 cucharada',
      sal: 'al gusto',
      especias_para_fajitas: 'al gusto',
    },
    steps: [
      'Cortar la pechuga de pollo en tiras delgadas.',
      'Lavar y cortar el pimiento y la cebolla en juliana.',
      'Pelar y picar los ajos finamente.',
      'Calentar una sartén con un poco de aceite de oliva y añadir el pollo, el pimiento, la cebolla y los ajos. Cocinar a fuego medio hasta que el pollo esté cocido y las verduras estén tiernas.',
      'Añadir las especias para fajitas y mezclar bien para que queden bien cubiertas.',
      'Servir caliente en tortillas de maíz o de trigo, acompañado de guacamole, salsa picante y queso rallado.',
    ],
    keywords: {
      course: 'principal',
      cuisine: 'mexicana',
      diet: 'sin_especificar',
      allergies: 'sin_gluten',
      cookingTime: 'rápida',
      occasion: 'cena',
      skillLevel: 'fácil',
      calories: 'moderada',
      rating: 'alta',
    },
  },
];
