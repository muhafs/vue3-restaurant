import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView';
import FoodView from '@/views/FoodView';
import FoodDetailView from '@/views/FoodDetailView';
import CartView from '@/views/CartView';
import SuccessView from '@/views/SuccessView';

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
	{
		path: '/foods/:id',
		name: 'FoodDetail',
		component: FoodDetailView,
	},
	{
		path: '/cart',
		name: 'Cart',
		component: CartView,
	},
	{
		path: '/success',
		name: 'Success',
		component: SuccessView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
