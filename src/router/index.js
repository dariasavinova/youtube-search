import { createWebHistory, createRouter } from "vue-router"
import Authorization from "../components/Authorization.vue"
import Home from "../components/Home.vue"

const routes = [
	{
		path: '/',
		name: 'Authorization',
		component: Authorization
	},
	{
    path: "/home",
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