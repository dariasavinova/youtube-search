import { createWebHistory, createRouter } from "vue-router"
import Authorization from "../components/Authorization.vue"
import Home from "../components/Home.vue"

const routes = [
	{
		path: '/youtube-search/',
		name: 'Authorization',
		component: Authorization,
	},
	{
    path: "/youtube-search/:home",
    name: "Home",
    component: Home,
  },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: "active",
  linkExactActiveClass: "active"
})

export default router