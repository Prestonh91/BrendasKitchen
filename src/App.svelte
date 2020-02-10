<script>
    import Router from 'svelte-spa-router'
    import { routes } from './routes/routes'
    import Nav from './components/router.svelte'
</script>

<main>
    <h1 style="text-align: center">Svelte App</h1>

    <Nav/>
    <Router {routes}/>
</main>
