<script>
    import { link } from 'svelte-spa-router'
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
    <h3>Nav</h3>
    <ul>
        {#each routes as route}
            <li>
                <a href={route.href} use:link>{route.heading}</a>
            </li>
        {/each}
    </ul>
</div>