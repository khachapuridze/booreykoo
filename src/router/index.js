import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: function () {
			return import(/* webpackChunkName: "about" */ '../views/About.vue');
		},
	},
	{
		path: '/services',
		name: 'Services',

		component: function () {
			return import(/* webpackChunkName: "about" */ '../views/Services.vue');
		},
	},
	{
		path: '/portfolio',
		name: 'Portfolio',

		component: function () {
			return import(
				/* webpackChunkName: "about" */ '../views/Portfolio/Portfolio.vue'
			);
		},
	},
	{
		path: '/portfolio/:id',
		name: 'portfolio-inner',

		component: function () {
			return import(
				/* webpackChunkName: "about" */ '../views/Portfolio/_id.vue'
			);
		},
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
