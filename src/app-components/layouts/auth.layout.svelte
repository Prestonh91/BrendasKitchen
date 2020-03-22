<script>
	import Router from 'svelte-spa-router'
	import { loginRoutes } from '../../features/auth/routes/auth.routes'
	let prefix = '/auth'
</script>


<div class="uk-height-viewport uk-flex uk-background-secondary">
	<div class="uk-margin-auto uk-margin-auto-vertical">
		<Router routes={loginRoutes} {prefix}/>
	</div>
</div>