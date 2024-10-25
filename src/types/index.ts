import { z } from 'zod';
import {
	CategoriesAPIResponseSchema,
	DrinksAPIResponse,
	DrinkAPIResponse,
	SearchRecipesSchema,
} from '../utils/recipes-schema';

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilter = z.infer<typeof SearchRecipesSchema>;
export type Drinks = z.infer<typeof DrinksAPIResponse>;
export type Drink = z.infer<typeof DrinkAPIResponse>;
