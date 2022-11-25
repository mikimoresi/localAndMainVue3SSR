import { localConfig } from '@/static/localconfig.js';
import {
  createRouter as _createRouter,
  createMemoryHistory,
  createWebHistory
} from 'vue-router'

// Auto generates routes from vue files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
function loadView(view) {	
	return () => import( `./views/${view}/${view}.vue`)
}

const base = localConfig.prod ? localConfig.pwaBasePath:'/'
export function createRouter() {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory(base) : createWebHistory(base),
		routes: [	
			{ path: "/:catchAll(.*)", 
				component: loadView('Genericpage'),
				name:'home' 
			}
		]
  })
}
