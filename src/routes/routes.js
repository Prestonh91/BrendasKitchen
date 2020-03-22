import Recipes from '../features/recipe-finder/Recipes.svelte'
import CreateRecipe from '../features/feature-components/CreateRecipe.svelte'

export const routes = {
    '/': Recipes,
	'/recipe' : CreateRecipe,
}