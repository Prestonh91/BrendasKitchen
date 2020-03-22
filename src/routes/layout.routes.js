import Auth from '../app-components/layouts/auth.layout.svelte'
import Main from '../app-components/layouts/main.layout.svelte'

export const layoutRoutes =  {
	'/auth' : Auth,
	'/auth/*': Auth,
	'/recipes/' : Main,
}