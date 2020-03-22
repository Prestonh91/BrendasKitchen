<script>
    import Router from 'svelte-spa-router'
	import { layoutRoutes } from './routes/layout.routes'
    import Nav from './app-components/router.svelte'
</script>

<main class="uk-height-viewport uk-background-primary">
    <Router routes={layoutRoutes}/>
</main>
