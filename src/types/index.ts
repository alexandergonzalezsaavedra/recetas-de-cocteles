import { z } from 'zod';
import {
	CategoriesAPIResponseSchema,
	DrinksAPIResponse,
	SearchRecipesSchema,
} from '../utils/recipes-schema';

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilter = z.infer<typeof SearchRecipesSchema>;
export type Recipes = z.infer<typeof DrinksAPIResponse>;
