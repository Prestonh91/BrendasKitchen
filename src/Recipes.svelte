<script>
    import { recipes } from './resources/recipes'
</script>

<main>
    <ul class="uk-nav uk-nav-default uk-flex-around" uk-grid>
        {#each recipes as recipe}
            <li class="uk-width-1-2 uk-width-1-4@l uk-card uk-card-body uk-card-default uk-card-hover">
                <h4 class="uk-text-large uk-text-center">{recipe.title}</h4>
				<div class="uk-flex-center" uk-grid>
					<p><b>Rating</b>: {recipe.rating}</p>
					<p><b>Serves</b>: {recipe.serves}</p>
				</div>
                <p><b>Ingredients</b>:</p>
                <blockquote class="uk-margin-left">{recipe.ingredients}</blockquote>
                <p><b>Directions</b>:</p>
                <blockquote class="uk-margin-left">{recipe.directions}</blockquote>
            </li>
        {/each}
    </ul>
</main>