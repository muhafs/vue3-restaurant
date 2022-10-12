<template>
	<HeroSection />

	<div class="row justify-content-center align-items-center mb-3">
		<div class="col">
			<h3>Best <strong>Foods</strong></h3>
		</div>

		<div class="col text-end">
			<router-link to="/foods" class="btn btn-success">See more <font-awesome-icon icon="fa-solid fa-angles-right" size="xs" /></router-link>
		</div>
	</div>

	<div class="row mb-3">
		<div v-for="product in products" :key="product.code" class="col-md-4">
			<ProductCard :product="product" />
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import ProductCard from '@/components/ProductCard.vue';
	import HeroSection from '@/components/HeroSection.vue';

	export default {
		components: {
			HeroSection,
			ProductCard,
		},
		data() {
			return {
				products: [],
			};
		},
		mounted() {
			axios
				.get('http://localhost:3000/best-products')
				.then((result) => {
					this.products = result.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},
	};
</script>

<style></style>
