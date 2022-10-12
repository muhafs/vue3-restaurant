<template>
	<div class="row">
		<div class="col-12 col-md-6">
			<h2>Our <strong>Menu</strong></h2>
		</div>
		<div class="col-12 col-md-6">
			<div class="input-group mb-3">
				<input v-model="key" type="text" class="form-control" placeholder="Find Your favorit food .." @keydown.enter="searchKey(key)" />
				<button class="btn btn-outline-success" type="button" @click="searchKey(key)">
					<font-awesome-icon icon="fas fa-search" />
				</button>
			</div>
		</div>
	</div>

	<div class="row mb-3">
		<div class="col-sm-6 col-md-4 col-lg-3 mb-4" v-for="product in products" :key="product.code">
			<ProductCard :product="product" />
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import ProductCard from '@/components/ProductCard.vue';

	export default {
		components: {
			ProductCard,
		},
		data() {
			return {
				products: [],
				key: '',
			};
		},
		methods: {
			searchKey(key) {
				axios
					.get('http://localhost:3000/products?q=' + key)
					.then((result) => {
						this.products = result.data;
					})
					.catch((error) => {
						console.log(error);
					});
			},
		},
		mounted() {
			axios
				.get('http://localhost:3000/products')
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
