import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView';
import FoodView from '@/views/FoodView';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/foods',
		name: 'Food',
		component: FoodView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
