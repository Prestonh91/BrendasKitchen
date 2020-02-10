<script>
    import { recipes } from './resources/recipes'
</script>

<main>
    <ul style="list-style-type:none;">
        {#each recipes as recipe}
            <li >
                <h4>{recipe.title}</h4>
                <p><b>Rating</b>: {recipe.rating}</p>
                <p><b>Serves</b>: {recipe.serves}</p>
                <p><b>Ingredients</b>:</p>
                <blockquote>{recipe.ingredients}</blockquote>
                <p><b>Directions</b>:</p>
                <blockquote>{recipe.directions}</blockquote>
            </li>
        {/each}
    </ul>
</main>

<style>
    h4 {
        text-align: center;
    }
</style>