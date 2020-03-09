<script>
	import { link, location } from 'svelte-spa-router'
    const routes = [
        {
            heading: 'Home',
            href: '/',
        },
        {
            heading: 'Create Recipe',
            href: '/recipe'
        }
    ]
</script>

<div>
    <ul class="uk-nav uk-nav-default" uk-grid>
        {#each routes as route}
            <li class="{ route.href === $location ? 'uk-active' : '' }">
                <a href={route.href} use:link>{route.heading}</a>
            </li>
        {/each}
    </ul>
</div>

<style>
</style>